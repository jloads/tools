# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 549`

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
	loc: SourceLocation core/uncategorised/549/input.js 1:0-2:0
	path: UIDPath<core/uncategorised/549/input.js>
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation core/uncategorised/549/input.js 1:0-1:28
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: SourceLocation core/uncategorised/549/input.js 1:0-1:28
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingObjectPattern {
							rest: undefined
							loc: SourceLocation core/uncategorised/549/input.js 1:6-1:19
							properties: Array [
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "arguments"
											loc: SourceLocation core/uncategorised/549/input.js 1:8-1:17 (arguments)
										}
										loc: SourceLocation core/uncategorised/549/input.js 1:8-1:17
									}
									value: JSBindingIdentifier {
										name: "arguments"
										loc: SourceLocation core/uncategorised/549/input.js 1:8-1:17 (arguments)
									}
									loc: SourceLocation core/uncategorised/549/input.js 1:8-1:17
								}
							]
						}
						loc: SourceLocation core/uncategorised/549/input.js 1:6-1:27
						init: JSCallExpression {
							arguments: Array []
							loc: SourceLocation core/uncategorised/549/input.js 1:22-1:27
							callee: JSReferenceIdentifier {
								name: "foo"
								loc: SourceLocation core/uncategorised/549/input.js 1:22-1:25 (foo)
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
