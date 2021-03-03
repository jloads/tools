import AbsoluteFilePath from "./classes/AbsoluteFilePath";
import RelativePath from "./classes/RelativePath";
import UIDPath from "./classes/UIDPath";
import URLPath from "./classes/URLPath";
import DataURIPath from "./classes/DataURIPath";

export type ReadablePath = AbsoluteFilePath | DataURIPath;

export type FilePath = AbsoluteFilePath | RelativePath;

export type Path =
	| AbsoluteFilePath
	| RelativePath
	| URLPath
	| UIDPath
	| DataURIPath;

export type PathSegments = string[];

export type Pathish = {
	join: () => string;
	format: () => string;
};

export type PathFormatOptions = {
	home?: AbsoluteFilePath;
	cwd?: AbsoluteFilePath;
};

export interface ParsedPathBase {
	relativeSegments: PathSegments;
	explicitDirectory: boolean;
}

export interface ParsedPathWindowsDrive extends ParsedPathBase {
	type: "absolute-windows-drive";
	// We make some assumptions that this is a single ascii lowercase letter when encoding as an int8
	letter:
		| "A"
		| "B"
		| "C"
		| "D"
		| "E"
		| "F"
		| "G"
		| "H"
		| "I"
		| "J"
		| "K"
		| "L"
		| "M"
		| "N"
		| "O"
		| "P"
		| "Q"
		| "R"
		| "S"
		| "T"
		| "U"
		| "V"
		| "W"
		| "X"
		| "Y"
		| "Z";
}

export interface ParsedPathWindowsUNC extends ParsedPathBase {
	type: "absolute-windows-unc";
	servername: string;
}

export interface ParsedPathUnix extends ParsedPathBase {
	type: "absolute-unix";
}

export interface ParsedPathRelative extends ParsedPathBase {
	type: "relative";
	explicitRelative: boolean;
}

export interface ParsedPathDataURI extends ParsedPathBase {
	type: "data";
	mime: undefined | string;
	data: string | ArrayBuffer;
}

export interface ParsedPathURL extends ParsedPathBase {
	type: "url";
	protocol: string;
	username: undefined | string;
	password: undefined | string;
	hostname: string;
	port: undefined | number;
	search: Map<string, string[]>;
	hash: undefined | string;
}

export interface ParsedPathUID extends ParsedPathBase {
	type: "uid";
}

export type ParsedPathAbsolute =
	| ParsedPathWindowsDrive
	| ParsedPathWindowsUNC
	| ParsedPathUnix;

export type ParsedPath =
	| ParsedPathAbsolute
	| ParsedPathRelative
	| ParsedPathURL
	| ParsedPathUID
	| ParsedPathDataURI;
