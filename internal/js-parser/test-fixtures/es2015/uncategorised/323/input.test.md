# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 323`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/323/input.js 1:0-1:33
	path: UIDPath<es2015/uncategorised/323/input.js>
	body: Array [
		JSForInStatement {
			loc: SourceLocation es2015/uncategorised/323/input.js 1:0-1:33
			right: JSReferenceIdentifier {
				name: "obj"
				loc: SourceLocation es2015/uncategorised/323/input.js 1:26-1:29 (obj)
			}
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation es2015/uncategorised/323/input.js 1:31-1:33
			}
			left: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation es2015/uncategorised/323/input.js 1:5-1:22
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingArrayPattern {
							rest: undefined
							loc: SourceLocation es2015/uncategorised/323/input.js 1:9-1:22
							elements: Array [
								JSBindingIdentifier {
									name: "name"
									loc: SourceLocation es2015/uncategorised/323/input.js 1:10-1:14 (name)
									meta: JSPatternMeta {
										optional: undefined
										typeAnnotation: undefined
										loc: SourceLocation es2015/uncategorised/323/input.js 1:10-1:14
									}
								}
								JSBindingIdentifier {
									name: "value"
									loc: SourceLocation es2015/uncategorised/323/input.js 1:16-1:21 (value)
									meta: JSPatternMeta {
										optional: undefined
										typeAnnotation: undefined
										loc: SourceLocation es2015/uncategorised/323/input.js 1:16-1:21
									}
								}
							]
						}
						init: undefined
						loc: SourceLocation es2015/uncategorised/323/input.js 1:9-1:22
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
