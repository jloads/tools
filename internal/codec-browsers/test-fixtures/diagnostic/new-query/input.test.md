# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/codec-browsers/index.test.ts --update-snapshots` to update.

## `diagnostic > new-query`

### `error`

```javascript
___R$project$rome$$internal$diagnostics$error$wrappers_ts$DiagnosticsError {
	name: "DiagnosticsError"
	_memoMessage: undefined
	_message: "Expected a new browser query"
	suppressions: Array []
	diagnostics: Array [
		Object {
			location: Object {
				integrity: undefined
				language: "browserquery"
				sourceText: undefined
				end: Position 1:1
				path: RelativePath<diagnostic/new-query/input.txt>
				start: Position 1:0
			}
			description: Object {
				categoryValue: "browserquery"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Expected a new browser query"}
				advice: Array [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Available browser queries can be found at <hyperlink target=\"https://github.com/rome/tools/blob/main/internal/codec-browsers/README.md#queries\"/>"}
					}
				]
			}
		}
	]
}
```

### `tokens`

```javascript
Array [
	Number {
		value: 4
		end: ZeroIndexedNumber<1>
		start: ZeroIndexedNumber<0>
	}
	EOF {
		end: ZeroIndexedNumber<2>
		start: ZeroIndexedNumber<2>
	}
]
```
