# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > function > anonymous`

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
	sourceType: "module"
	loc: SourceLocation typescript/function/anonymous/input.ts 1:0-2:0
	path: UIDPath<typescript/function/anonymous/input.ts>
	syntax: Array ["ts"]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation typescript/function/anonymous/input.ts 1:0-1:35
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: SourceLocation typescript/function/anonymous/input.ts 1:0-1:35
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "f"
							loc: SourceLocation typescript/function/anonymous/input.ts 1:6-1:7 (f)
						}
						loc: SourceLocation typescript/function/anonymous/input.ts 1:6-1:34
						init: JSFunctionExpression {
							id: undefined
							loc: SourceLocation typescript/function/anonymous/input.ts 1:10-1:34
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: SourceLocation typescript/function/anonymous/input.ts 1:32-1:34
							}
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								rest: undefined
								thisType: undefined
								loc: SourceLocation typescript/function/anonymous/input.ts 1:18-1:31
								returnType: TSTypeReference {
									typeParameters: undefined
									loc: SourceLocation typescript/function/anonymous/input.ts 1:30-1:31
									typeName: JSReferenceIdentifier {
										name: "T"
										loc: SourceLocation typescript/function/anonymous/input.ts 1:30-1:31 (T)
									}
								}
								typeParameters: TSTypeParameterDeclaration {
									loc: SourceLocation typescript/function/anonymous/input.ts 1:18-1:21
									params: Array [
										TSTypeParameter {
											name: "T"
											constraint: undefined
											default: undefined
											loc: SourceLocation typescript/function/anonymous/input.ts 1:19-1:20
										}
									]
								}
								params: Array [
									JSBindingIdentifier {
										name: "x"
										loc: SourceLocation typescript/function/anonymous/input.ts 1:22-1:23 (x)
										meta: JSPatternMeta {
											optional: true
											loc: SourceLocation typescript/function/anonymous/input.ts 1:22-1:27
											typeAnnotation: TSTypeReference {
												typeParameters: undefined
												loc: SourceLocation typescript/function/anonymous/input.ts 1:26-1:27
												typeName: JSReferenceIdentifier {
													name: "T"
													loc: SourceLocation typescript/function/anonymous/input.ts 1:26-1:27 (T)
												}
											}
										}
									}
								]
							}
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
