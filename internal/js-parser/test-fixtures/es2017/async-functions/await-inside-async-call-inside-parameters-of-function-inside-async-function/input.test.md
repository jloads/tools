# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > await-inside-async-call-inside-parameters-of-function-inside-async-function`

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
	loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 1:0-4:0
	path: UIDPath<es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js>
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "f"
				loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 1:15-1:16 (f)
			}
			loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 1:0-3:1
			head: JSFunctionHead {
				async: true
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 1:16-1:18
			}
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 1:19-3:1
				body: Array [
					JSFunctionDeclaration {
						id: JSBindingIdentifier {
							name: "g"
							loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 2:11-2:12 (g)
						}
						loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 2:2-2:33
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 2:31-2:33
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 2:12-2:30
							params: Array [
								JSBindingAssignmentPattern {
									loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 2:13-2:29
									left: JSBindingIdentifier {
										name: "x"
										loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 2:13-2:14 (x)
										meta: JSPatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 2:13-2:14
										}
									}
									right: JSCallExpression {
										loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 2:17-2:29
										callee: JSReferenceIdentifier {
											name: "async"
											loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 2:17-2:22 (async)
										}
										arguments: Array [
											JSReferenceIdentifier {
												name: "await"
												loc: SourceLocation es2017/async-functions/await-inside-async-call-inside-parameters-of-function-inside-async-function/input.js 2:23-2:28 (await)
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

```
