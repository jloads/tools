# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 428`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/428/input.js 1:0-1:11
	path: UIDPath<core/uncategorised/428/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Expected an identifier"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:8
				path: UIDPath<core/uncategorised/428/input.js>
				start: Position 1:8
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/428/input.js 1:0-1:11
			expression: JSMemberExpression {
				loc: SourceLocation core/uncategorised/428/input.js 1:0-1:11
				property: JSStaticMemberProperty {
					value: JSIdentifier {
						name: ""
						loc: SourceLocation core/uncategorised/428/input.js 1:8-1:11 ()
					}
					loc: SourceLocation core/uncategorised/428/input.js 1:8-1:11 ()
				}
				object: JSNewExpression {
					arguments: Array []
					optional: undefined
					typeArguments: undefined
					loc: SourceLocation core/uncategorised/428/input.js 1:0-1:7
					callee: JSReferenceIdentifier {
						name: "X"
						loc: SourceLocation core/uncategorised/428/input.js 1:4-1:5 (X)
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 core/uncategorised/428/input.js:1:8 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected an identifier

    new X()."s"
            ^


```
