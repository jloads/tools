# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 159`

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
	loc: SourceLocation es2015/uncategorised/159/input.js 1:0-1:22
	path: UIDPath<es2015/uncategorised/159/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/159/input.js 1:0-1:22
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation es2015/uncategorised/159/input.js 1:0-1:22
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation es2015/uncategorised/159/input.js 1:0-1:1 (x)
				}
				right: JSFunctionExpression {
					id: undefined
					loc: SourceLocation es2015/uncategorised/159/input.js 1:4-1:22
					body: JSBlockStatement {
						body: Array []
						directives: Array []
						loc: SourceLocation es2015/uncategorised/159/input.js 1:20-1:22
					}
					head: JSFunctionHead {
						async: false
						generator: false
						hasHoistedVars: false
						rest: undefined
						returnType: undefined
						thisType: undefined
						typeParameters: undefined
						loc: SourceLocation es2015/uncategorised/159/input.js 1:12-1:19
						params: Array [
							JSBindingAssignmentPattern {
								loc: SourceLocation es2015/uncategorised/159/input.js 1:13-1:18
								right: JSNumericLiteral {
									value: 1
									format: undefined
									loc: SourceLocation es2015/uncategorised/159/input.js 1:17-1:18
								}
								left: JSBindingIdentifier {
									name: "y"
									loc: SourceLocation es2015/uncategorised/159/input.js 1:13-1:14 (y)
									meta: JSPatternMeta {
										optional: undefined
										typeAnnotation: undefined
										loc: SourceLocation es2015/uncategorised/159/input.js 1:13-1:14
									}
								}
							}
						]
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
