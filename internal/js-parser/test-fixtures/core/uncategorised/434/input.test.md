# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 434`

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
	loc: SourceLocation core/uncategorised/434/input.js 1:0-1:10
	path: UIDPath<core/uncategorised/434/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/434/input.js 1:2-1:10
			expression: JSBinaryExpression {
				operator: "*"
				loc: SourceLocation core/uncategorised/434/input.js 1:2-1:10
				left: JSReferenceIdentifier {
					name: "hello"
					loc: SourceLocation core/uncategorised/434/input.js 1:2-1:7 (hello)
				}
				right: JSReferenceIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: SourceLocation core/uncategorised/434/input.js 1:10-1:10
				}
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
				message: RAW_MARKUP {value: "Unterminated comment"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:0
				path: UIDPath<core/uncategorised/434/input.js>
				start: Position 1:0
			}
		}
	]
}
```

### `diagnostics`

```

 core/uncategorised/434/input.js:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unterminated comment

    /*hello  *
    ^


```
