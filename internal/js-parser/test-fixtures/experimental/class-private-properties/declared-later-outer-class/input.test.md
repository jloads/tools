# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-private-properties > declared-later-outer-class`

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
	loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 1:0-9:1
	path: UIDPath<experimental/class-private-properties/declared-later-outer-class/input.js>
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "B"
				loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 1:6-1:7 (B)
			}
			loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 1:0-9:1
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 1:0-9:1
				body: Array [
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "meth"
								loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 2:2-2:6 (meth)
							}
							loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 2:2-2:6
						}
						loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 2:2-6:3
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 2:2-2:6
							start: Position 2:2
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 2:6-2:8
						}
						body: JSBlockStatement {
							directives: Array []
							loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 2:9-6:3
							body: Array [
								JSClassDeclaration {
									id: JSBindingIdentifier {
										name: "A"
										loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 3:10-3:11 (A)
									}
									loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 3:4-5:5
									meta: JSClassHead {
										implements: undefined
										superClass: undefined
										superTypeParameters: undefined
										typeParameters: undefined
										loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 3:4-5:5
										body: Array [
											JSClassPrivateProperty {
												key: JSPrivateName {
													id: JSIdentifier {
														name: "x"
														loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 4:7-4:8 (x)
													}
													loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 4:6-4:8
												}
												value: JSMemberExpression {
													loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 4:11-4:18
													object: JSThisExpression {loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 4:11-4:15}
													property: JSStaticMemberProperty {
														value: JSPrivateName {
															id: JSIdentifier {
																name: "y"
																loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 4:17-4:18 (y)
															}
															loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 4:16-4:18
														}
														loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 4:16-4:18
													}
												}
												typeAnnotation: undefined
												loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 4:6-4:19
												meta: JSClassPropertyMeta {
													abstract: false
													accessibility: undefined
													optional: false
													readonly: false
													static: false
													typeAnnotation: undefined
													loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 4:6-4:8
													start: Position 4:6
												}
											}
										]
									}
								}
							]
						}
					}
					JSClassPrivateProperty {
						key: JSPrivateName {
							id: JSIdentifier {
								name: "y"
								loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 8:3-8:4 (y)
							}
							loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 8:2-8:4
						}
						value: undefined
						typeAnnotation: undefined
						loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 8:2-8:5
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation experimental/class-private-properties/declared-later-outer-class/input.js 8:2-8:4
							start: Position 8:2
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
