import {createRelativePath} from "@internal/path";
import {test} from "rome";
import {testLint} from "../../utils/testing";
import {DIAGNOSTIC_CATEGORIES} from "@internal/diagnostics";

test(
	"ts use simplified boolean expression",
	async (t) => {
		await testLint(
			t,
			{
				invalid: [
					"function foo(x: boolean) { return !!x; }",
					"function foo(x: boolean) { return x === true; }",
					"function foo(x: boolean) { return false === x; }",
					"function foo(x: boolean, y: boolean) { return (x || y) === true }",
				],
				valid: [
					"function foo(x?: boolean) { return !!x; }",
					"function foo(x: boolean | number) { return x === true; }",
					"function foo(x: boolean | undefined) { return false === x; }",
				],
				path: createRelativePath("file.ts"),
				category: DIAGNOSTIC_CATEGORIES["lint/ts/useSimplifiedBooleanExpression"],
			},
		);
	},
);
