# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 376`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/376/input.js 1:0-1:2
	path: UIDPath<core/uncategorised/376/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/376/input.js 1:0-1:2
			expression: JSArrayExpression {
				loc: SourceLocation core/uncategorised/376/input.js 1:0-1:2
				elements: Array [
					JSArrayHole {loc: SourceLocation core/uncategorised/376/input.js 1:1-1:1}
					JSReferenceIdentifier {
						name: "INVALID_PLACEHOLDER"
						loc: SourceLocation core/uncategorised/376/input.js 1:2-1:2
					}
				]
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Unknown start to an array element"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:2
				path: UIDPath<core/uncategorised/376/input.js>
				start: Position 1:2
			}
		}
	]
}
```

### `diagnostics`

```

 core/uncategorised/376/input.js:1:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an array element

    [,
      ^


```
