# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 75`

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
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/75/input.js 1:0-1:25
	path: UIDPath<es2015/uncategorised/75/input.js>
	body: Array [
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: SourceLocation es2015/uncategorised/75/input.js 1:0-1:25
			declaration: JSVariableDeclarationStatement {
				loc: SourceLocation es2015/uncategorised/75/input.js 1:7-1:25
				declaration: JSVariableDeclaration {
					kind: "let"
					loc: SourceLocation es2015/uncategorised/75/input.js 1:7-1:25
					declarations: Array [
						JSVariableDeclarator {
							id: JSBindingIdentifier {
								name: "document"
								loc: SourceLocation es2015/uncategorised/75/input.js 1:11-1:19 (document)
							}
							loc: SourceLocation es2015/uncategorised/75/input.js 1:11-1:25
							init: JSObjectExpression {
								properties: Array []
								loc: SourceLocation es2015/uncategorised/75/input.js 1:22-1:25
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
