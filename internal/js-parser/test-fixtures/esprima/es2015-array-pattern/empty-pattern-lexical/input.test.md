# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-array-pattern > empty-pattern-lexical`

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
	loc: SourceLocation esprima/es2015-array-pattern/empty-pattern-lexical/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-array-pattern/empty-pattern-lexical/input.js>
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation esprima/es2015-array-pattern/empty-pattern-lexical/input.js 1:0-1:12
			declaration: JSVariableDeclaration {
				kind: "let"
				loc: SourceLocation esprima/es2015-array-pattern/empty-pattern-lexical/input.js 1:0-1:12
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingArrayPattern {
							elements: Array []
							rest: undefined
							loc: SourceLocation esprima/es2015-array-pattern/empty-pattern-lexical/input.js 1:4-1:6
						}
						loc: SourceLocation esprima/es2015-array-pattern/empty-pattern-lexical/input.js 1:4-1:11
						init: JSArrayExpression {
							elements: Array []
							loc: SourceLocation esprima/es2015-array-pattern/empty-pattern-lexical/input.js 1:9-1:11
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
