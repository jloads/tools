# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > regression > 1`

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
	loc: SourceLocation jsx/regression/1/input.jsx 1:0-1:40
	path: UIDPath<jsx/regression/1/input.jsx>
	syntax: Array ["jsx"]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation jsx/regression/1/input.jsx 1:0-1:40
			expression: JSXElement {
				name: JSXIdentifier {
					name: "p"
					loc: SourceLocation jsx/regression/1/input.jsx 1:1-1:2
				}
				attributes: Array []
				selfClosing: false
				typeArguments: undefined
				loc: SourceLocation jsx/regression/1/input.jsx 1:0-1:38
				children: Array [
					JSXText {
						value: "foo "
						loc: SourceLocation jsx/regression/1/input.jsx 1:3-1:7
					}
					JSXElement {
						name: JSXIdentifier {
							name: "a"
							loc: SourceLocation jsx/regression/1/input.jsx 1:8-1:9
						}
						selfClosing: false
						typeArguments: undefined
						loc: SourceLocation jsx/regression/1/input.jsx 1:7-1:30
						children: Array [
							JSXText {
								value: " bar"
								loc: SourceLocation jsx/regression/1/input.jsx 1:22-1:26
							}
						]
						attributes: Array [
							JSXAttribute {
								name: JSXIdentifier {
									name: "href"
									loc: SourceLocation jsx/regression/1/input.jsx 1:10-1:14
								}
								value: JSStringLiteral {
									value: "test"
									loc: SourceLocation jsx/regression/1/input.jsx 1:15-1:21
								}
								loc: SourceLocation jsx/regression/1/input.jsx 1:10-1:21
							}
						]
					}
					JSXText {
						value: " baz"
						loc: SourceLocation jsx/regression/1/input.jsx 1:30-1:34
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
