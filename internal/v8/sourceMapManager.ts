/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {SourceMapConsumerCollection} from "@internal/codec-source-map";
import {ErrorFrame} from "@internal/v8";
import {
	ERROR_FRAMES_PROP,
	ErrorWithFrames,
	getErrorStructure,
	setErrorFrames,
} from "./errors";
import {maybeCreateAnyPath} from "@internal/path";
import {OneIndexed} from "@internal/math";

let inited: boolean = false;

function prepareStackTrace(err: Error, frames: NodeJS.CallSite[]) {
	try {
		addErrorFrames(err, frames);
		return buildStackString(err);
	} catch (err2) {
		return `${err.name}: ${err.message}\n  Failed to generate stacktrace: ${err2.message}`;
	}
}

export function initErrorHooks() {
	if (!inited) {
		inited = true;
		Error.prepareStackTrace = prepareStackTrace;
	}
}

export function teardown() {
	Error.prepareStackTrace = undefined;
}

function buildStackString(err: Error): string {
	const {frames} = getErrorStructure(err);
	const lines: string[] = [];

	lines.push(`${err.name}: ${err.message}`);

	for (const frame of frames) {
		const {
			resolvedLocation,
			methodName,
			functionName,
			typeName,
			isNative,
			isAsync,
			isEval,
			isConstructor,
			path,
			lineNumber,
			columnNumber,
		} = frame;
		const parts: string[] = [];

		if (isAsync) {
			parts.push("await");
		}

		if (isEval) {
			parts.push("eval");
		}

		if (isConstructor) {
			parts.push("new");
		}

		let name = "<anonymous>";
		if (functionName !== undefined) {
			name = functionName;
		}
		if (methodName !== undefined) {
			name = methodName;
		}
		if (typeName !== undefined) {
			parts.push(`${typeName}.${name}`);
		} else {
			parts.push(name);
		}

		if (isNative) {
			parts.push("native");
		} else if (
			path !== undefined &&
			lineNumber !== undefined &&
			columnNumber !== undefined
		) {
			parts.push(`(${path.join()}:${lineNumber}:${columnNumber})`);
		}

		if (!resolvedLocation) {
			parts.push("generated source location");
		}

		lines.push(`  at ${parts.join(" ")}`);
	}

	return lines.join("\n");
}

function noNull<T>(val: null | T): undefined | T {
	if (val === null) {
		return undefined;
	} else {
		return val;
	}
}

function addErrorFrames(err: ErrorWithFrames, frames: NodeJS.CallSite[]): void {
	if (err[ERROR_FRAMES_PROP]) {
		return;
	}

	let builtFrames = frames.map((frameApi): ErrorFrame => {
		const filename = frameApi.getFileName();
		const lineNumber = frameApi.getLineNumber();
		const columnNumber = frameApi.getColumnNumber();

		const frame: ErrorFrame = {
			typeName: noNull(frameApi.getTypeName()),
			functionName: noNull(frameApi.getFunctionName()),
			methodName: noNull(frameApi.getMethodName()),
			isTopLevel: frameApi.isToplevel(),
			isEval: frameApi.isEval(),
			isNative: frameApi.isNative(),
			isConstructor: frameApi.isConstructor(),
			// TODO frameApi.isAsync
			isAsync: false,
			resolvedLocation: true,
			path: maybeCreateAnyPath(noNull(filename)),
			lineNumber: lineNumber == null ? undefined : new OneIndexed(lineNumber),
			// Rome expects 0-indexed columns, V8 provides 1-indexed
			columnNumber: columnNumber == null
				? undefined
				: new OneIndexed(columnNumber).toZeroIndexed(),
		};

		if (
			frame.path !== undefined &&
			frame.lineNumber !== undefined &&
			frame.columnNumber !== undefined
		) {
			const {found, line, column, source, name} = sourceMaps.assertApproxOriginalPositionFor(
				frame.path,
				frame.lineNumber,
				frame.columnNumber,
			);

			return {
				...frame,
				functionName: frame.functionName ?? name,
				methodName: frame.methodName ?? name,
				resolvedLocation: found,
				lineNumber: line,
				columnNumber: column,
				path: source,
			};
		} else {
			return frame;
		}
	});

	setErrorFrames(err, builtFrames);
}

const sourceMaps = new SourceMapConsumerCollection();
export default sourceMaps;
