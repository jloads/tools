# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-private-properties > asi-success`

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
	loc: SourceLocation experimental/class-private-properties/asi-success/input.js 1:0-5:0
	path: UIDPath<experimental/class-private-properties/asi-success/input.js>
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Foo"
				loc: SourceLocation experimental/class-private-properties/asi-success/input.js 1:6-1:9 (Foo)
			}
			loc: SourceLocation experimental/class-private-properties/asi-success/input.js 1:0-4:1
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation experimental/class-private-properties/asi-success/input.js 1:0-4:1
				body: Array [
					JSClassPrivateProperty {
						key: JSPrivateName {
							id: JSIdentifier {
								name: "x"
								loc: SourceLocation experimental/class-private-properties/asi-success/input.js 2:3-2:4 (x)
							}
							loc: SourceLocation experimental/class-private-properties/asi-success/input.js 2:2-2:4
						}
						value: undefined
						typeAnnotation: undefined
						loc: SourceLocation experimental/class-private-properties/asi-success/input.js 2:2-2:4
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation experimental/class-private-properties/asi-success/input.js 2:2-2:4
							start: Position 2:2
						}
					}
					JSClassPrivateProperty {
						key: JSPrivateName {
							id: JSIdentifier {
								name: "y"
								loc: SourceLocation experimental/class-private-properties/asi-success/input.js 3:3-3:4 (y)
							}
							loc: SourceLocation experimental/class-private-properties/asi-success/input.js 3:2-3:4
						}
						value: undefined
						typeAnnotation: undefined
						loc: SourceLocation experimental/class-private-properties/asi-success/input.js 3:2-3:4
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation experimental/class-private-properties/asi-success/input.js 3:2-3:4
							start: Position 3:2
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
