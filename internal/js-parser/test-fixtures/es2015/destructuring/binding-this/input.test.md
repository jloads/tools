# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > destructuring > binding-this`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/destructuring/binding-this/input.js 1:0-2:0
	path: UIDPath<es2015/destructuring/binding-this/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Unexpected keyword <emphasis>this</emphasis>"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:10
				path: UIDPath<es2015/destructuring/binding-this/input.js>
				start: Position 1:6
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation es2015/destructuring/binding-this/input.js 1:0-1:18
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation es2015/destructuring/binding-this/input.js 1:0-1:18
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingObjectPattern {
							rest: undefined
							loc: SourceLocation es2015/destructuring/binding-this/input.js 1:4-1:12
							properties: Array [
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "this"
											loc: SourceLocation es2015/destructuring/binding-this/input.js 1:6-1:10 (this)
										}
										loc: SourceLocation es2015/destructuring/binding-this/input.js 1:6-1:10
									}
									value: JSBindingIdentifier {
										name: "this"
										loc: SourceLocation es2015/destructuring/binding-this/input.js 1:6-1:10 (this)
									}
									loc: SourceLocation es2015/destructuring/binding-this/input.js 1:6-1:10
								}
							]
						}
						loc: SourceLocation es2015/destructuring/binding-this/input.js 1:4-1:17
						init: JSObjectExpression {
							properties: Array []
							loc: SourceLocation es2015/destructuring/binding-this/input.js 1:15-1:17
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

 es2015/destructuring/binding-this/input.js:1:6 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected keyword this

    var { this } = {};
          ^^^^


```
