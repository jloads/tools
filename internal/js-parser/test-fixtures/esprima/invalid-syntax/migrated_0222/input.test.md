# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0222`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/invalid-syntax/migrated_0222/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0222/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Octal literal in strict mode"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:36
				path: UIDPath<esprima/invalid-syntax/migrated_0222/input.js>
				start: Position 1:36
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: SourceLocation esprima/invalid-syntax/migrated_0222/input.js 1:9-1:14 (hello)
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0222/input.js 1:0-1:76
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation esprima/invalid-syntax/migrated_0222/input.js 1:14-1:16
			}
			body: JSBlockStatement {
				body: Array []
				loc: SourceLocation esprima/invalid-syntax/migrated_0222/input.js 1:17-1:76
				directives: Array [
					JSDirective {
						value: "octal directive\\1"
						loc: SourceLocation esprima/invalid-syntax/migrated_0222/input.js 1:19-1:39
					}
					JSDirective {
						value: "octal directive\\2"
						loc: SourceLocation esprima/invalid-syntax/migrated_0222/input.js 1:40-1:60
					}
					JSDirective {
						value: "use strict"
						loc: SourceLocation esprima/invalid-syntax/migrated_0222/input.js 1:61-1:74
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0222/input.js:1:36 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Octal literal in strict mode

    function hello() { "octal directive\1"; "octal directive\2"; "use strict"; }
                                        ^


```
