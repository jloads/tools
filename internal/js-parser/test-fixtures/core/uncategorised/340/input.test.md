# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 340`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/340/input.js 1:0-3:5
	path: UIDPath<core/uncategorised/340/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/340/input.js 1:0-1:6
			expression: JSMemberExpression {
				loc: SourceLocation core/uncategorised/340/input.js 1:0-1:6
				object: JSReferenceIdentifier {
					name: "foo"
					loc: SourceLocation core/uncategorised/340/input.js 1:0-1:3 (foo)
				}
				property: JSStaticMemberProperty {
					value: JSIdentifier {
						name: "in"
						loc: SourceLocation core/uncategorised/340/input.js 1:4-1:6 (in)
					}
					loc: SourceLocation core/uncategorised/340/input.js 1:4-1:6 (in)
				}
			}
		}
		JSBlockStatement {
			body: Array []
			directives: Array []
			loc: SourceLocation core/uncategorised/340/input.js 2:0-2:2
		}
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/340/input.js 3:0-3:5
			expression: JSRegExpLiteral {
				global: false
				insensitive: false
				multiline: false
				noDotNewline: false
				sticky: false
				unicode: false
				loc: SourceLocation core/uncategorised/340/input.js 3:0-3:5
				expression: JSRegExpSubExpression {
					loc: SourceLocation core/uncategorised/340/input.js 3:1-3:4
					body: Array [
						JSRegExpCharacter {
							value: "f"
							loc: SourceLocation core/uncategorised/340/input.js 3:1-3:2
						}
						JSRegExpCharacter {
							value: "o"
							loc: SourceLocation core/uncategorised/340/input.js 3:2-3:3
						}
						JSRegExpCharacter {
							value: "o"
							loc: SourceLocation core/uncategorised/340/input.js 3:3-3:4
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
