# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 40`

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
	loc: SourceLocation es2015/uncategorised/40/input.js 1:0-1:10
	path: UIDPath<es2015/uncategorised/40/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/40/input.js 1:0-1:10
			expression: JSArrowFunctionExpression {
				loc: SourceLocation es2015/uncategorised/40/input.js 1:0-1:10
				body: JSNumericLiteral {
					value: 42
					format: undefined
					loc: SourceLocation es2015/uncategorised/40/input.js 1:8-1:10
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					thisType: undefined
					loc: SourceLocation es2015/uncategorised/40/input.js 1:0-1:7
					params: Array [
						JSBindingIdentifier {
							name: "eval"
							loc: SourceLocation es2015/uncategorised/40/input.js 1:0-1:4 (eval)
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
