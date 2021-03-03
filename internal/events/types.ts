/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {StructuredError} from "@internal/errors";
import {Markup} from "@internal/markup";
import {RSERObject, RSERValue} from "@internal/binary-transport";
import {Dict, VoidCallback} from "@internal/typescript-helpers";
import {
	BridgeEventBidirectional,
	BridgeEventCallOnly,
	BridgeEventListenOnly,
} from "./BridgeEvent";
import {BridgeFactories} from "./createBridge";
import Bridge from "./Bridge";
import {Resource} from "@internal/resources";
import {Duration} from "@internal/numbers";

export type EventCallback<Param, Ret> = (
	param: Param,
	resource: Resource,
) => Ret | Promise<Ret>;

export type AnyBridge = Bridge<{}, {}, {}>;

// rome-ignore lint/js/noUnusedVariables(Ret) lint/js/noUnusedVariables(Param): Only care about creating a generic
export type BridgeEventDeclaration<
	Param extends RSERValue,
	Ret extends RSERValue
> = {};

export type BridgeEventsDeclaration = Dict<BridgeEventDeclaration<
	RSERValue,
	RSERValue
>>;

type ExtractEventTypes<Type> = Type extends BridgeEventDeclaration<
	infer Param,
	infer Ret
>
	? [Param, Ret]
	: never;

export type BridgeEventsDeclarationToInstances<
	ListenEvents extends BridgeEventsDeclaration,
	CallEvents extends BridgeEventsDeclaration,
	SharedEvents extends BridgeEventsDeclaration
> = {
	[Key in keyof ListenEvents]: Key extends string
		? BridgeEventListenOnly<
				Key,
				ExtractEventTypes<ListenEvents[Key]>[0],
				ExtractEventTypes<ListenEvents[Key]>[1]
			>
		: never
} & {
	[Key in keyof CallEvents]: Key extends string
		? BridgeEventCallOnly<
				Key,
				ExtractEventTypes<CallEvents[Key]>[0],
				ExtractEventTypes<CallEvents[Key]>[1]
			>
		: never
} & {
	[Key in keyof SharedEvents]: Key extends string
		? BridgeEventBidirectional<
				Key,
				ExtractEventTypes<SharedEvents[Key]>[0],
				ExtractEventTypes<SharedEvents[Key]>[1]
			>
		: never
};

export type BridgeClient<Factories> = Factories extends BridgeFactories<
	infer ClientEvents,
	infer ServerEvents,
	infer SharedEvents
>
	? Bridge<ClientEvents, ServerEvents, SharedEvents>
	: never;

export type BridgeServer<Factories> = Factories extends BridgeFactories<
	infer ClientEvents,
	infer ServerEvents,
	infer SharedEvents
>
	? Bridge<ServerEvents, ClientEvents, SharedEvents>
	: never;

export type BridgeType = "server" | "client";

export type BridgeOptions = {
	ignoreHeartbeat?: boolean;
	optionalResource?: boolean;
};

export type BridgeDefinition<
	ClientEvents extends BridgeEventsDeclaration,
	ServerEvents extends BridgeEventsDeclaration,
	SharedEvents extends BridgeEventsDeclaration
> = {
	debugName: string;
	client: ClientEvents;
	server: ServerEvents;
	shared: SharedEvents;
	init?: BridgeInitCallback<SharedEvents>;
};

export type BridgeInitCallback<SharedEvents extends BridgeEventsDeclaration> = (
	bridge: Bridge<{}, {}, SharedEvents>,
) => void;

export type EventOptions = {
	displayName?: string;
	requiredSubscriptionResource?: boolean;
	onSubscriptionChange?: VoidCallback;
	unique?: boolean;
	serial?: boolean;
};

export type EventSubscriptionOptions = {};

export type BridgeHeartbeatExceededOptions = {
	summary: Markup[];
	attempts: number;
	totalTime: Duration;
};

export enum BridgeMessageCodes {
	CLIENT_HANDSHAKE,
	SERVER_HANDSHAKE,
	SUBSCRIBED,
	UNSUBSCRIBED,
	HEARTBEAT,
	CALL,
	PRIORITY_CALL,
	SEND,
	RESPONSE_SUCCESS,
	RESPONSE_ERROR_CUSTOM,
	RESPONSE_ERROR_NATIVE,
	TEARDOWN,
}

export type BridgeHandshakeMessage =
	| [BridgeMessageCodes.CLIENT_HANDSHAKE, Set<number>, Map<number, string>]
	| [BridgeMessageCodes.SERVER_HANDSHAKE, Set<number>];

export type BridgeSubscriptionsMessage = [
	BridgeMessageCodes.SUBSCRIBED | BridgeMessageCodes.UNSUBSCRIBED,
	number
];

export type BridgeRequestCallMessage =
	| [
			BridgeMessageCodes.CALL | BridgeMessageCodes.PRIORITY_CALL,
			number,
			number,
			RSERValue
		]
	| [BridgeMessageCodes.CALL | BridgeMessageCodes.PRIORITY_CALL, number, number];

export type BridgeRequestSendMessage = [
	BridgeMessageCodes.SEND,
	number,
	RSERValue
];

export type BridgeSuccessResponseMessage = [
	BridgeMessageCodes.RESPONSE_SUCCESS,
	number,
	RSERValue
];

export type BridgeNativeErrorResponseMessage = [
	BridgeMessageCodes.RESPONSE_ERROR_NATIVE,
	number,
	Error
];

export type BridgeCustomErrorResponseMessage = [
	BridgeMessageCodes.RESPONSE_ERROR_CUSTOM,
	number,
	StructuredError,
	RSERObject
];

export type BridgeTeardownMessage = [BridgeMessageCodes.TEARDOWN];

export type BridgeHeartbeatMessage = [BridgeMessageCodes.HEARTBEAT];

export type BridgeRequestMessage =
	| BridgeRequestCallMessage
	| BridgeRequestSendMessage;

export type BridgeErrorResponseMessage =
	| BridgeNativeErrorResponseMessage
	| BridgeCustomErrorResponseMessage;

export type BridgeResponseMessage =
	| BridgeSuccessResponseMessage
	| BridgeErrorResponseMessage;

export type BridgeMessage =
	| BridgeHeartbeatMessage
	| BridgeTeardownMessage
	| BridgeHandshakeMessage
	| BridgeSubscriptionsMessage
	| BridgeRequestMessage
	| BridgeResponseMessage;

export type BridgeErrorDetails =
	| {
			errorType: "custom";
			value: StructuredError;
			metadata: RSERObject;
		}
	| {
			errorType: "native";
			value: Error;
		};
