# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `test262 > rest-parameter > object-pattern-single-element-with-array`

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
	loc: SourceLocation test262/rest-parameter/object-pattern-single-element-with-array/input.js 1:0-2:0
	path: UIDPath<test262/rest-parameter/object-pattern-single-element-with-array/input.js>
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "singleElementWithArray"
				loc: SourceLocation test262/rest-parameter/object-pattern-single-element-with-array/input.js 1:9-1:31 (singleElementWithArray)
			}
			loc: SourceLocation test262/rest-parameter/object-pattern-single-element-with-array/input.js 1:0-1:47
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation test262/rest-parameter/object-pattern-single-element-with-array/input.js 1:45-1:47
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation test262/rest-parameter/object-pattern-single-element-with-array/input.js 1:31-1:44
				rest: JSBindingObjectPattern {
					rest: undefined
					loc: SourceLocation test262/rest-parameter/object-pattern-single-element-with-array/input.js 1:35-1:43
					meta: JSPatternMeta {
						optional: undefined
						typeAnnotation: undefined
						loc: SourceLocation test262/rest-parameter/object-pattern-single-element-with-array/input.js 1:35-1:43
					}
					properties: Array [
						JSBindingObjectPatternProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "p"
									loc: SourceLocation test262/rest-parameter/object-pattern-single-element-with-array/input.js 1:36-1:37 (p)
								}
								loc: SourceLocation test262/rest-parameter/object-pattern-single-element-with-array/input.js 1:36-1:37
							}
							value: JSBindingArrayPattern {
								rest: undefined
								loc: SourceLocation test262/rest-parameter/object-pattern-single-element-with-array/input.js 1:39-1:42
								elements: Array [
									JSBindingIdentifier {
										name: "a"
										loc: SourceLocation test262/rest-parameter/object-pattern-single-element-with-array/input.js 1:40-1:41 (a)
										meta: JSPatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: SourceLocation test262/rest-parameter/object-pattern-single-element-with-array/input.js 1:40-1:41
										}
									}
								]
							}
							loc: SourceLocation test262/rest-parameter/object-pattern-single-element-with-array/input.js 1:36-1:42
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
