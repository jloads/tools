# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 38`

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
	loc: SourceLocation core/uncategorised/38/input.js 1:0-1:30
	path: UIDPath<core/uncategorised/38/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/38/input.js 1:0-1:30
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation core/uncategorised/38/input.js 1:0-1:30
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation core/uncategorised/38/input.js 1:0-1:1 (x)
				}
				right: JSObjectExpression {
					loc: SourceLocation core/uncategorised/38/input.js 1:4-1:30
					properties: Array [
						JSObjectMethod {
							kind: "set"
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "if"
									loc: SourceLocation core/uncategorised/38/input.js 1:10-1:12 (if)
								}
								loc: SourceLocation core/uncategorised/38/input.js 1:10-1:12
							}
							loc: SourceLocation core/uncategorised/38/input.js 1:6-1:28
							body: JSBlockStatement {
								directives: Array []
								loc: SourceLocation core/uncategorised/38/input.js 1:16-1:28
								body: Array [
									JSExpressionStatement {
										loc: SourceLocation core/uncategorised/38/input.js 1:18-1:26
										expression: JSAssignmentExpression {
											operator: "="
											loc: SourceLocation core/uncategorised/38/input.js 1:18-1:26
											left: JSAssignmentIdentifier {
												name: "m_if"
												loc: SourceLocation core/uncategorised/38/input.js 1:18-1:22 (m_if)
											}
											right: JSReferenceIdentifier {
												name: "w"
												loc: SourceLocation core/uncategorised/38/input.js 1:25-1:26 (w)
											}
										}
									}
								]
							}
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								rest: undefined
								returnType: undefined
								thisType: undefined
								typeParameters: undefined
								loc: SourceLocation core/uncategorised/38/input.js 1:12-1:15
								params: Array [
									JSBindingIdentifier {
										name: "w"
										loc: SourceLocation core/uncategorised/38/input.js 1:13-1:14 (w)
										meta: JSPatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: SourceLocation core/uncategorised/38/input.js 1:13-1:14
										}
									}
								]
							}
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
