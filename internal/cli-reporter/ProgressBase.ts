/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Reporter from "./Reporter";
import {ReporterProgress, ReporterProgressOptions} from "./types";
import {mergeObjects} from "@internal/typescript-helpers";
import {Markup, isEmptyMarkup, markup} from "@internal/markup";
import {Duration, DurationMeasurer} from "@internal/numbers";

const DEFAULT_PROGRESS_OPTIONS: ReporterProgressOptions = {
	name: undefined,
	title: undefined,
	initDelay: undefined,
	elapsed: true,
	eta: true,
	persistent: false,
};

export default class ProgressBase implements ReporterProgress {
	constructor(reporter: Reporter, opts: ReporterProgressOptions = {}) {
		this.total = undefined;
		this.reporter = reporter;
		this.current = 0;

		this.approximateTotal = false;
		this.approximateETA = undefined;

		this.textIdCounter = 0;
		this.textIdStack = [];
		this.textStack = [];
		this.textIds = new Set();

		this.text = undefined;
		this.title =
			opts.title === undefined ? undefined : reporter.stripMarkup(opts.title);

		this.paused = false;
		this.pausedStart = undefined;
		this.pausedElapsed = Duration.fromNanoseconds(0);

		this.opts = mergeObjects(DEFAULT_PROGRESS_OPTIONS, opts);
	}

	protected reporter: Reporter;
	protected opts: ReporterProgressOptions;

	protected current: number;
	protected total: undefined | number;

	protected text: undefined | Markup;
	protected textIdCounter: number;
	protected textIdStack: string[];
	protected textStack: Markup[];
	protected textIds: Set<string>;

	protected title: undefined | string;

	protected approximateETA: undefined | number;
	protected approximateTotal: boolean;

	protected pausedStart: undefined | DurationMeasurer;
	protected pausedElapsed: Duration;
	protected paused: boolean;

	public setCurrent(current: number) {
		this.current = current;
		this.queueRender();

		// Progress complete
		if (
			this.total !== undefined &&
			this.current >= this.total &&
			!this.opts.persistent
		) {
			this.end();
		}
	}

	public getText(): undefined | string {
		const {text} = this;
		if (text === undefined || isEmptyMarkup(text)) {
			return undefined;
		} else {
			return this.reporter.stripMarkup(text);
		}
	}

	public setText(text: Markup) {
		this.text = text;
		this.queueRender();
	}

	public setApproximateETA(duration: number) {
		this.approximateETA = duration;
	}

	public setTotal(total: number, approximate: boolean = false) {
		this.total = total;
		this.approximateTotal = approximate;
		this.queueRender();
	}

	public pushText(text: Markup, id?: string): string {
		if (id === undefined) {
			id = String(this.textIdCounter++);
		}
		if (this.textIds.has(id)) {
			throw new Error(`Progress bar text ${id} already exists`);
		}
		this.setText(text);
		this.textStack.push(text);
		this.textIdStack.push(id);
		this.textIds.add(id);
		return id;
	}

	public popText(id: string) {
		// Find
		const {textStack, textIdStack, textIds} = this;
		const index = textIdStack.indexOf(id);
		if (index === -1) {
			throw new Error(`No pushed text for id ${id}`);
		}

		// Remove
		textStack.splice(index, 1);
		textIdStack.splice(index, 1);
		textIds.delete(id);

		// Set last
		const last: undefined | Markup = textStack[textStack.length - 1];
		this.setText(last ?? markup``);
	}

	public tick() {
		this.setCurrent(this.current + 1);
	}

	public resume() {
		const {pausedStart} = this;
		if (!this.paused || pausedStart === undefined) {
			return;
		}

		this.pausedElapsed = this.pausedElapsed.add(pausedStart.since());
		this.pausedStart = undefined;
		this.paused = false;
		this.render();
	}

	public pause() {
		if (this.paused) {
			return;
		}

		this.pausedStart = new DurationMeasurer();
		this.paused = true;
		this.render();
	}

	protected queueRender() {
		this.render();
	}

	public end() {}

	public render() {}
}
