# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > optional-chaining > optioanl-chain-expression`

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
	loc: SourceLocation es2020/optional-chaining/optioanl-chain-expression/input.js 1:0-1:8
	path: UIDPath<es2020/optional-chaining/optioanl-chain-expression/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2020/optional-chaining/optioanl-chain-expression/input.js 1:0-1:8
			expression: JSOptionalCallExpression {
				arguments: Array []
				loc: SourceLocation es2020/optional-chaining/optioanl-chain-expression/input.js 1:0-1:8
				callee: JSMemberExpression {
					loc: SourceLocation es2020/optional-chaining/optioanl-chain-expression/input.js 1:0-1:6
					property: JSStaticMemberProperty {
						value: JSIdentifier {
							name: "c"
							loc: SourceLocation es2020/optional-chaining/optioanl-chain-expression/input.js 1:5-1:6 (c)
						}
						optional: true
						loc: SourceLocation es2020/optional-chaining/optioanl-chain-expression/input.js 1:5-1:6 (c)
					}
					object: JSMemberExpression {
						loc: SourceLocation es2020/optional-chaining/optioanl-chain-expression/input.js 1:0-1:3
						object: JSReferenceIdentifier {
							name: "a"
							loc: SourceLocation es2020/optional-chaining/optioanl-chain-expression/input.js 1:0-1:1 (a)
						}
						property: JSStaticMemberProperty {
							value: JSIdentifier {
								name: "b"
								loc: SourceLocation es2020/optional-chaining/optioanl-chain-expression/input.js 1:2-1:3 (b)
							}
							loc: SourceLocation es2020/optional-chaining/optioanl-chain-expression/input.js 1:2-1:3 (b)
						}
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
