# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-yield > yield-function-expression`

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
	loc: SourceLocation esprima/es2015-yield/yield-function-expression/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-yield/yield-function-expression/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-yield/yield-function-expression/input.js 1:0-1:20
			expression: JSFunctionExpression {
				id: JSBindingIdentifier {
					name: "yield"
					loc: SourceLocation esprima/es2015-yield/yield-function-expression/input.js 1:10-1:15 (yield)
				}
				loc: SourceLocation esprima/es2015-yield/yield-function-expression/input.js 1:1-1:19
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: SourceLocation esprima/es2015-yield/yield-function-expression/input.js 1:17-1:19
				}
				head: JSFunctionHead {
					async: false
					generator: false
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: SourceLocation esprima/es2015-yield/yield-function-expression/input.js 1:15-1:17
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
