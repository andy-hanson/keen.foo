#!/usr/bin/env node
//# sourceMappingURL=index.js.map
export {}
const _global = typeof self === "undefined" ? global : self
const _memoize = fn => {
	let result
	return () => {
		if (fn) {
			result = fn()
			fn = undefined
		}
		return result
	}
}
const _compareIntegral = (a, b) =>
	a < b ? 0 :
	b < a ? 2 :
	1
const _compareFloat = (a, b) =>
	a < b ? 0 :
	b < a ? 2 :
	Object.is(a, b) ? 1 :
	Number.isNaN(a) ? 0 :
	Number.isNaN(b) ? 2 :
	Object.is(a, -0) ? 0 : 2
const _lessFloat = (a, b) =>
	a < b ||
	Object.is(a, -0) && Object.is(b, +0) ||
	Number.isNaN(a) && !Number.isNaN(b)
const _lessOrEqualFloat = (a, b) =>
	_lessFloat(a, b) || Object.is(a, b)
const _greaterFloat = (a, b) =>
	_lessFloat(b, a)
const _greaterOrEqualFloat = (a, b) =>
	_greaterFloat(a, b) || Object.is(a, b)
const _int64OfNat64 = a =>
	a >= 0x8000000000000000n ? -0x10000000000000000n + a : a
const _rotateLeftNat8 = (a, b) => {
	const n = b & 0b111
	return ((a << n) | (a >>> (8 - n))) & 0xff
}
const _rotateLeftNat16 = (a, b) => {
	const n = b & 0b1111
	return ((a << n) | (a >>> (16 - n))) & 0xffff
}
const _rotateLeftNat32 = (a, b) => {
	const n = b & 0b11111
	return (a << n | a >>> (32 - n)) >>> 0
}
const _rotateLeftNat64 = (a, b) => {
	const n = b & 0b111111n
	return BigInt.asUintN(64, (a << n) | (a >> (64n - n)))
}
const _rotateRightNat8 = (a, b) => {
	const n = b & 0b111
	return ((a >>> n) | (a << (8 - n))) & 0xff
}
const _rotateRightNat16 = (a, b) => {
	const n = b & 0b1111
	return ((a >>> n) | (a << (16 - n))) & 0xffff
}
const _rotateRightNat32 = (a, b) => {
	const n = b & 0b11111
	return ((a >>> n) | (a << (32 - n))) >>> 0
}
const _rotateRightNat64 = (a, b) => {
	const n = b & 0b111111n
	return BigInt.asUintN(64, (a >> n) | (a << (64n - n)))
}
const __lambdaToMethod2 = lambda =>
	(a, b) => lambda({ a, b })
const __lambdaToMethod3 = lambda =>
	(a, b, c) => lambda({ a, b, c })
const __lambdaToMethod4 = lambda =>
	(a, b, c, d) => lambda({ a, b, c, d })
const __countOnes8 = new Uint8Array(256)
for (let i = 0; i < 256; i++) {
	__countOnes8[i] = (i & 1) + __countOnes8[i >> 1]
}
const _countOnes32 = a =>
	__countOnes8[a & 0xff] +
		__countOnes8[(a >> 8) & 0xff] +
		__countOnes8[(a >> 16) & 0xff] +
		__countOnes8[(a >> 24) & 0xff]
const _countOnes64 = a =>
	_countOnes32(Number(a & 0xffff_ffffn)) +
	_countOnes32(Number((a >> 32n) & 0xffff_ffffn))
const __truncateToInt32 = a => {
	const min = 1 << 31
	const max = ~min
	return Number.isFinite(a)
		? a < min ? min : a > max ? max : Math.trunc(a) | 0
		: a > 0 ? max : a < 0 ? min : 0
}
const __truncateToInt64 = a => {
	const max = 2n ** 63n - 1n
	const min = -(2n ** 63n)
	if (Number.isFinite(a)) {
		const res = BigInt(Math.trunc(a))
		return res < min ? min : res > max ? max : res
	} else
		return a > 0 ? max : a < 0 ? min : 0n
}

// json-object
class json__45object1179919109 {
	constructor(keys, values) {
		this.keys = keys
		this.values = values
	}
}
// symbol
class symbol3223697568 {
	constructor(symbol__45seeded__45hash, symbol__45deterministic__45hash, symbol__45chars) {
		this["symbol-seeded-hash"] = symbol__45seeded__45hash
		this["symbol-deterministic-hash"] = symbol__45deterministic__45hash
		this["symbol-chars"] = symbol__45chars
	}
}
// json
class json3023828771 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// null
class null1784508966 {
}
// string
class string2245870778 {
	constructor(chars) {
		this.chars = chars
	}
}
class exception3922026492 extends Error {
	get message() {
		return new (TextDecoder)().decode(new (Uint8Array)(show3873208223(this).chars.map(Number)))
	}
}
// deserialize-error
class deserialize__45error2968075170 extends exception3922026492 {
	constructor(expected, value) {
		super()
		this.expected = expected
		this.value = value
	}
}
// error
class error4175136409 extends exception3922026492 {
	constructor(show) {
		super()
		this.show = show
	}
}
// none
class none2082914084 {
}
// (symbol, json) tuple2
class tuple23038093021 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// hash-state
class hash__45state2761385531 {
	constructor(state, dummy) {
		this.state = state
		this.dummy = dummy
	}
}
// keen-server
class keen__45server1921613421 {
	constructor(worker, responses, next__45id, diagnostics, diagnostics__45handlers) {
		this.worker = worker
		this.responses = responses
		this["next-id"] = next__45id
		this.diagnostics = diagnostics
		this["diagnostics-handlers"] = diagnostics__45handlers
	}
}
// json deferred
class deferred779013352 {
	constructor(promise, resolve) {
		this.promise = promise
		this.resolve = resolve
	}
}
// (nat32, json deferred) mut-map
class mut__45map3227241255 {
	constructor(size__45and__45locked, entries) {
		this["size-and-locked"] = size__45and__45locked
		this.entries = entries
	}
}
// (nat32, json deferred) tuple2
class tuple21792593498 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// uri
class uri3619067211 {
	constructor(to) {
		this.to = to
	}
}
// lsp-diagnostic
class lsp__45diagnostic2223204910 {
	constructor(range, severity, message) {
		this.range = range
		this.severity = severity
		this.message = message
	}
}
// line-and-character-range
class line__45and__45character__45range2984750005 {
	constructor(start, end) {
		this.start = start
		this.end = end
	}
}
// line-and-character
class line__45and__45character1481230736 {
	constructor(line, character) {
		this.line = line
		this.character = character
	}
}
// (uri, lsp-diagnostic array) mut-map
class mut__45map11462585 {
	constructor(size__45and__45locked, entries) {
		this["size-and-locked"] = size__45and__45locked
		this.entries = entries
	}
}
// (uri, lsp-diagnostic array) tuple2
class tuple22528472516 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (uri, (void, lsp-diagnostic array) lambda-mut) mut-map
class mut__45map2204916536 {
	constructor(size__45and__45locked, entries) {
		this["size-and-locked"] = size__45and__45locked
		this.entries = entries
	}
}
// (uri, (void, lsp-diagnostic array) lambda-mut) tuple2
class tuple24257211703 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// js-any option
class option2299041553 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// classes
class classes154155733 {
	constructor(node) {
		this.node = node
	}
}
// arithmetic-error
class arithmetic__45error95286647 extends exception3922026492 {
	constructor(operation, inputs) {
		super()
		this.operation = operation
		this.inputs = inputs
	}
}
// number
class number3467695210 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// index-too-big
class index__45too__45big3896995977 extends exception3922026492 {
	constructor(actual, max__45exclusive) {
		super()
		this.actual = actual
		this["max-exclusive"] = max__45exclusive
	}
}
// custom-element-node
class custom__45element__45node3015487437 {
	constructor(dummy) {
		this.dummy = dummy
	}
}
// custom-element-options
class custom__45element__45options140501329 {
	constructor(styles) {
		this.styles = styles
	}
}
// (symbol, string) map
class map3309966616 {
	constructor(root) {
		this.root = root
	}
}
// (symbol, string) frozen-map
class frozen__45map3926701578 {
	constructor(pairs, bucket__45starts) {
		this.pairs = pairs
		this["bucket-starts"] = bucket__45starts
	}
}
// (symbol, string) tuple2
class tuple24137037281 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (symbol, string) inner-node
class inner__45node422147294 {
	constructor(nodes) {
		this.nodes = nodes
	}
}
// symbol array with-index
class with__45index595347435 {
	constructor(inner) {
		this.inner = inner
	}
}
// (nat32, symbol) tuple2
class tuple22488876110 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// expected-equal
class expected__45equal396653106 extends exception3922026492 {
	constructor(a, b) {
		super()
		this.a = a
		this.b = b
	}
}
// lines
class lines3854462958 {
	constructor(lines) {
		this.lines = lines
	}
}
// single
class single3052500597 {
	constructor(text, needs__45parens) {
		this.text = text
		this["needs-parens"] = needs__45parens
	}
}
// nat32 range
class range4148113190 {
	constructor(low, high) {
		this.low = low
		this.high = high
	}
}
// char8 buffer-view
class buffer__45view1458947215 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// char8 array-view
class array__45view3308382370 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// json array with-index
class with__45index3302722206 {
	constructor(inner) {
		this.inner = inner
	}
}
// (nat32, json) tuple2
class tuple21044246885 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// build-options
class build__45options3473999824 {
	constructor(size__45hint) {
		this["size-hint"] = size__45hint
	}
}
// string builder
class builder1287207151 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// to-kid-result array with-index
class with__45index2740674936 {
	constructor(inner) {
		this.inner = inner
	}
}
// (nat32, to-kid-result) tuple2
class tuple21973466743 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// string buffer-view
class buffer__45view2066422296 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// string array-view
class array__45view3827596276 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// char8 array-iterator
class array__45iterator3005551252 {
	constructor(array, start, cur, end) {
		this.array = array
		this.start = start
		this.cur = cur
		this.end = end
	}
}
// symbol-key
class symbol__45key1342669151 {
	constructor(hash, chars) {
		this.hash = hash
		this.chars = chars
	}
}
// (symbol, symbol-key) object-memoizer
class object__45memoizer1105023747 {
	constructor(max__45cost, capacity__45log__452, index__45mask, entries) {
		this["max-cost"] = max__45cost
		this["capacity-log-2"] = capacity__45log__452
		this["index-mask"] = index__45mask
		this.entries = entries
	}
}
// symbol weak-ref buffer-view
class buffer__45view2044458775 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// symbol option option
class option2977935469 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// unicode-decode-error
class unicode__45decode__45error3218288620 extends exception3922026492 {
}
// nat64 range
class range2135443336 {
	constructor(low, high) {
		this.low = low
		this.high = high
	}
}
// unreachable
class unreachable754248293 extends exception3922026492 {
}
// iterator-out-of-bounds
class iterator__45out__45of__45bounds2781000628 extends exception3922026492 {
}
// secure-random
class secure__45random1200578203 {
}
// nat32 array-view
class array__45view1972923426 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// nat32 buffer-view
class buffer__45view3431733143 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// expected-not-equal
class expected__45not__45equal13879223 extends exception3922026492 {
	constructor(a, b) {
		super()
		this.a = a
		this.b = b
	}
}
// char8 builder
class builder2085736389 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// char8 array-view builder
class builder1546705585 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// char8 array-view buffer-view
class buffer__45view55246657 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// char8 array-view array-view
class array__45view3390615117 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (symbol, string) map-unsorted
class map__45unsorted2006688974 {
	constructor(inner) {
		this.inner = inner
	}
}
// (symbol, string) tuple2 buffer-view
class buffer__45view1677258545 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// range-relative-to-end
class range__45relative__45to__45end4053887874 {
	constructor(low, high) {
		this.low = low
		this.high = high
	}
}
// index-relative-to-end
class index__45relative__45to__45end4294105604 {
	constructor(subtract) {
		this.subtract = subtract
	}
}
// (symbol, string) tuple2 array-view
class array__45view2468091663 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// syntax-translate-params
class syntax__45translate__45params3546121244 {
	constructor(source, from__45language, to__45language) {
		this.source = source
		this["from-language"] = from__45language
		this["to-language"] = to__45language
	}
}
// syntax-translate-result
class syntax__45translate__45result3584454574 {
	constructor(output, diagnostics) {
		this.output = output
		this.diagnostics = diagnostics
	}
}
// (symbol array, json array) zip
class zip2081812156 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// was-locked
class was__45locked1331463512 extends exception3922026492 {
}
// (nat32, json deferred) tuple2 option buffer-view
class buffer__45view575054314 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (nat32, json deferred) tuple2 option array-view
class array__45view2487830349 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// nat32 option option
class option440215192 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// (symbol array, json array) tuple2
class tuple22635290944 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// symbol buffer-view
class buffer__45view2892615463 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// json buffer-view
class buffer__45view1629946458 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// json array-view
class array__45view1548048669 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// symbol array-view
class array__45view2428339610 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// js-any builder
class builder1348463893 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// js-any buffer-view
class buffer__45view173795550 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// js-any array-view
class array__45view1833126106 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (symbol, string) tuple2 builder
class builder881006348 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// (symbol, string) tuple2 array-view with-index
class with__45index2058433704 {
	constructor(inner) {
		this.inner = inner
	}
}
// (nat32, (symbol, string) tuple2) tuple2
class tuple2919703527 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (js-any, js-any array) tuple2
class tuple21060259983 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) map
class map859274043 {
	constructor(root) {
		this.root = root
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) frozen-map
class frozen__45map1226946341 {
	constructor(pairs, bucket__45starts) {
		this.pairs = pairs
		this["bucket-starts"] = bucket__45starts
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2
class tuple21153105472 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) inner-node
class inner__45node941687154 {
	constructor(nodes) {
		this.nodes = nodes
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view
class array__45view4071199571 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer-view
class buffer__45view2973489888 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 builder
class builder3081837746 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view with-index
class with__45index534494447 {
	constructor(inner) {
		this.inner = inner
	}
}
// (nat32, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) tuple2
class tuple23677734274 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) map-unsorted
class map__45unsorted1552830656 {
	constructor(inner) {
		this.inner = inner
	}
}
// keen-text
class keen__45text80476592 {
	constructor(node, props, nodes, diag__45debounce, tokens) {
		this.node = node
		this.props = props
		this.nodes = nodes
		this["diag-debounce"] = diag__45debounce
		this.tokens = tokens
	}
}
// keen-text-props
class keen__45text__45props578208079 {
	constructor(keen, uri, initial__45text) {
		this.keen = keen
		this.uri = uri
		this["initial-text"] = initial__45text
	}
}
// keen-text-nodes
class keen__45text__45nodes775110242 {
	constructor(text, highlight, line__45numbers) {
		this.text = text
		this.highlight = highlight
		this["line-numbers"] = line__45numbers
	}
}
// debouncer
class debouncer2768211940 {
	constructor(msec, timeout) {
		this.msec = msec
		this.timeout = timeout
	}
}
// token
class token2114066931 {
	constructor(line, character, length, type) {
		this.line = line
		this.character = character
		this.length = length
		this.type = type
	}
}
// attributes
class attributes3811162107 {
	constructor(node) {
		this.node = node
	}
}
// interrupter
class interrupter2232553703 {
	constructor(current) {
		this.current = current
	}
}
// js-any option reference
class reference299390385 {
	constructor(reference__45value) {
		this["reference-value"] = reference__45value
	}
}
// node-builder
class node__45builder4204128519 {
	constructor(lines, diagnostics, pos, container__45stack, diag__45index) {
		this.lines = lines
		this.diagnostics = diagnostics
		this.pos = pos
		this["container-stack"] = container__45stack
		this["diag-index"] = diag__45index
	}
}
// all-container
class all__45container3257327100 {
	constructor(nodes) {
		this.nodes = nodes
	}
}
// js-any mut-array
class mut__45array1115070763 {
	constructor(backing, size__45and__45locked) {
		this.backing = backing
		this["size-and-locked"] = size__45and__45locked
	}
}
// line-container
class line__45container2648654990 {
	constructor(nodes) {
		this.nodes = nodes
	}
}
// diag-container
class diag__45container3891528341 {
	constructor(children, end, message) {
		this.children = children
		this.end = end
		this.message = message
	}
}
// text-container
class text__45container2103931632 {
	constructor(text) {
		this.text = text
	}
}
// container mut-array
class mut__45array199977359 {
	constructor(backing, size__45and__45locked) {
		this.backing = backing
		this["size-and-locked"] = size__45and__45locked
	}
}
// container option
class option1329217421 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// char8 array array-view
class array__45view2754474626 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// char8 array buffer-view
class buffer__45view2420911269 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// char32 array-view
class array__45view198522282 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// invalid-unicode-character
class invalid__45unicode__45character3158871053 extends exception3922026492 {
	constructor(character) {
		super()
		this.character = character
	}
}
// char32 buffer-view
class buffer__45view4126788325 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// char32 builder
class builder3098904834 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// container buffer-view
class buffer__45view170728763 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// container array-view
class array__45view2062069736 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// lsp-diagnostic array-view
class array__45view2979500598 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// lsp-diagnostic buffer-view
class buffer__45view3140549812 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option buffer-view
class buffer__45view355310272 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option array-view
class array__45view3075609803 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// vec2-64
class vec2__45641475937032 {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
}
// got-hover
class got__45hover965347706 {
	constructor(text, is__45diagnostic) {
		this.text = text
		this["is-diagnostic"] = is__45diagnostic
	}
}
// style
class style849516044 {
	constructor(node) {
		this.node = node
	}
}
// hover-params
class hover__45params2721697647 {
	constructor(params) {
		this.params = params
	}
}
// text-document-position-params
class text__45document__45position__45params3285956098 {
	constructor(textDocument, position) {
		this.textDocument = textDocument
		this.position = position
	}
}
// text-document-identifier
class text__45document__45identifier2135817593 {
	constructor(uri) {
		this.uri = uri
	}
}
// json-copy
class json__45copy1286081601 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// semantic-tokens-params
class semantic__45tokens__45params3416879501 {
	constructor(textDocument) {
		this.textDocument = textDocument
	}
}
// decode-semantic-tokens
class decode__45semantic__45tokens2349719313 {
	constructor(inner) {
		this.inner = inner
	}
}
// semantic-tokens
class semantic__45tokens2829913404 {
	constructor(data_) {
		this.data_ = data_
	}
}
// did-open-text-document-params
class did__45open__45text__45document__45params3876058752 {
	constructor(textDocument) {
		this.textDocument = textDocument
	}
}
// text-document-item
class text__45document__45item915240927 {
	constructor(uri, text) {
		this.uri = uri
		this.text = text
	}
}
// names
class names3568957142 {
	constructor(seen, next__45index) {
		this.seen = seen
		this["next-index"] = next__45index
	}
}
// string mut-set
class mut__45set1025491005 {
	constructor(inner) {
		this.inner = inner
	}
}
// (string, void) mut-map
class mut__45map3281585272 {
	constructor(size__45and__45locked, entries) {
		this["size-and-locked"] = size__45and__45locked
		this.entries = entries
	}
}
// (string, void) tuple2
class tuple22461269367 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// run-output
class run__45output3323548284 {
	constructor(container) {
		this.container = container
	}
}
// write
class write3165204086 {
	constructor(pipe, text) {
		this.pipe = pipe
		this.text = text
	}
}
// build-js-script-result
class build__45js__45script__45result1266621962 {
	constructor(diagnostics, script) {
		this.diagnostics = diagnostics
		this.script = script
	}
}
// build-js-script-params
class build__45js__45script__45params3359172655 {
	constructor(main__45kind, uri, diagnosticsOnlyForUris) {
		this["main-kind"] = main__45kind
		this.uri = uri
		this.diagnosticsOnlyForUris = diagnosticsOnlyForUris
	}
}
// write mut-array
class mut__45array3201692643 {
	constructor(backing, size__45and__45locked) {
		this.backing = backing
		this["size-and-locked"] = size__45and__45locked
	}
}
// write buffer-view
class buffer__45view1645105482 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// write array-view
class array__45view1086139444 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// duration
class duration3018374679 {
	constructor(seconds) {
		this.seconds = seconds
	}
}
// parse-error
class parse__45error4189383028 extends exception3922026492 {
	constructor(input, index, expected) {
		super()
		this.input = input
		this.index = index
		this.expected = expected
	}
}
// (string, void) tuple2 option buffer-view
class buffer__45view4148315802 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (string, void) tuple2 option array-view
class array__45view2845579581 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// local-storage
class local__45storage821627354 {
}
// todo
class todo3442278752 extends exception3922026492 {
}
// void deferred
class deferred3417926844 {
	constructor(promise, resolve) {
		this.promise = promise
		this.resolve = resolve
	}
}
// publish-diagnostics-params
class publish__45diagnostics__45params607190011 {
	constructor(uri, diagnostics) {
		this.uri = uri
		this.diagnostics = diagnostics
	}
}
// (uri, lsp-diagnostic array) tuple2 option buffer-view
class buffer__45view366583543 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (uri, lsp-diagnostic array) tuple2 option array-view
class array__45view768791590 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// json option
class option2311174978 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// json builder
class builder1455142335 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// inner-parse-error
class inner__45parse__45error111031572 extends exception3922026492 {
	constructor(expected) {
		super()
		this.expected = expected
	}
}
// (symbol, json) map
class map4142821256 {
	constructor(root) {
		this.root = root
	}
}
// (symbol, json) frozen-map
class frozen__45map2559355386 {
	constructor(pairs, bucket__45starts) {
		this.pairs = pairs
		this["bucket-starts"] = bucket__45starts
	}
}
// (symbol, json) inner-node
class inner__45node770848572 {
	constructor(nodes) {
		this.nodes = nodes
	}
}
// (symbol, json) tuple2 builder
class builder2019409968 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// (nat32, nat64) tuple2
class tuple23447745953 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (json, json) tuple2
class tuple22302439997 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (symbol, json) map-unsorted
class map__45unsorted4206957991 {
	constructor(inner) {
		this.inner = inner
	}
}
// (symbol, json) tuple2 buffer-view
class buffer__45view1430717036 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (symbol, json) tuple2 array-view
class array__45view2839973619 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (symbol, json) tuple2 array-view with-index
class with__45index2448730786 {
	constructor(inner) {
		this.inner = inner
	}
}
// (nat32, (symbol, json) tuple2) tuple2
class tuple23416926617 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// tokens-and-diags-to-nodes file:///home/andy/games/keen.foo/script/highlight-tokens.keen 8:1
const tokens__45and__45diags__45to__45nodes1533856328 = (l_tokens___3, l_diagnostics___1, l_text___2) => {
	let l_temp___6
	const l_a___0 = new2951756953(l_diagnostics___1, l_text___2)
	start__45line3468164388(l_a___0)
	for (const l_token___4 of l_tokens___3) {
		walk__45to1622735639(l_a___0, new (line__45and__45character1481230736)(l_token___4.line, l_token___4.character))
		;(void maybe__45start__45diag3677375547(l_a___0))
		add__45span235230302(l_a___0, to1333768229(l_token___4.type), new (line__45and__45character1481230736)(l_token___4.line, __431111513593(l_token___4.character, l_token___4.length)))
		maybe__45stop__45diag2576150130(l_a___0)
	}
	walk__45to1622735639(l_a___0, last__45position2025487145(l_a___0.lines))
	end__45line2661692227(l_a___0)
	if ((!(size2228699078(l_a___0["container-stack"]) === 1))) {
		throw new (error4175136409)(c____418())
	}
	return move__45to295987944((() => {
			const l_member2___5 = all__45container2530492401(subscript3040426140(l_a___0["container-stack"], 0))
			const x_matched___0 = l_member2___5
			if ((x_matched___0 instanceof none2082914084)) {
				throw new (error4175136409)(c____417())
			} else {
				if ((x_matched___0 instanceof all__45container3257327100)) {
					return ((l_temp___6 = l_member2___5) , l_temp___6)
				} else {
					return _unreachable()
				}
			}
		})().nodes)
}
// new file:///home/andy/games/keen.foo/script/highlight-tokens.keen 30:1
const new2951756953 = (l_diagnostics___2, l_text___0) =>
	new (node__45builder4204128519)(split258860773(l_text___0, c____332()).map(l_it___1 =>
				to3613751888(l_it___1)), l_diagnostics___2, c____305(), list__45new744104072([new (all__45container3257327100)(list__45new3817461744(c____253()))]), 0)
// pop-container file:///home/andy/games/keen.foo/script/highlight-tokens.keen 38:1
const pop__45container359844167 = l_a___2 => {
	let l_temp___3, l_diag__45children___5, l_temp___8
	const l_popped___0 = (() => {
		const l_member2___1 = pop3076814330(l_a___2["container-stack"])
		const x_matched___0 = l_member2___1
		if ((x_matched___0.index === 0)) {
			throw new (error4175136409)(c____420())
		} else {
			if ((x_matched___0.index === 1)) {
				return ((l_temp___3 = l_member2___1.value) , l_temp___3)
			} else {
				return _unreachable()
			}
		}
	})()
	const l_child___4 = (() => {
		const x_matched___1 = l_popped___0
		if ((x_matched___1 instanceof line__45container2648654990)) {
			return create__45div1449965713(c____421(), move__45to295987944(l_popped___0.nodes))
		} else {
			if ((x_matched___1 instanceof diag__45container3891528341)) {
				return ((l_diag__45children___5 = move__45to295987944(l_popped___0.children)) , create__45span103507307(c____422(), list__45new3679651572(c____289()), (any3195976654(l_diag__45children___5) ? l_diag__45children___5 : list__45new574588355([create__45text__45node1193722309(c____349())]))))
			} else {
				throw new (unreachable754248293)()
			}
		}
	})()
	const l_last__45container___6 = (() => {
		const l_member2___7 = peek2893765512(l_a___2["container-stack"])
		const x_matched___2 = l_member2___7
		if ((x_matched___2.index === 0)) {
			throw new (error4175136409)(c____419())
		} else {
			if ((x_matched___2.index === 1)) {
				return ((l_temp___8 = l_member2___7.value) , l_temp___8)
			} else {
				return _unreachable()
			}
		}
	})()
	if ((text__45container730344496(l_last__45container___6) instanceof text__45container2103931632)) {
		throw new (error4175136409)(c____423())
	}
	__126__6177877711(children4002845922(l_last__45container___6), l_child___4)
}
// start-line file:///home/andy/games/keen.foo/script/highlight-tokens.keen 57:1
const start__45line3468164388 = l_a___0 =>
	__126__611093706126(l_a___0["container-stack"], new (line__45container2648654990)(list__45new3817461744(c____253())))
// end-line file:///home/andy/games/keen.foo/script/highlight-tokens.keen 59:1
const end__45line2661692227 = l_a___1 => {
	let l_temp___2
	x_loop___0: while (true){
		if ((line__45container2766237542((() => {
						const l_member2___0 = peek2893765512(l_a___1["container-stack"])
						const x_matched___1 = l_member2___0
						if ((x_matched___1.index === 0)) {
							throw new (error4175136409)(c____419())
						} else {
							if ((x_matched___1.index === 1)) {
								return ((l_temp___2 = l_member2___0.value) , l_temp___2)
							} else {
								return _unreachable()
							}
						}
					})()) instanceof line__45container2648654990)) {
			pop__45container359844167(l_a___1)
			break  x_loop___0
		} else {
			pop__45container359844167(l_a___1)
			continue
		}
	}
}
// next-line file:///home/andy/games/keen.foo/script/highlight-tokens.keen 63:1
const next__45line2106789437 = l_a___0 => {
	end__45line2661692227(l_a___0)
	start__45line3468164388(l_a___0)
}
// finish-text file:///home/andy/games/keen.foo/script/highlight-tokens.keen 67:1
const finish__45text1208693291 = l_a___2 => {
	let l_temp___3, l_temp___5, l_temp___8
	const l_last___0 = (() => {
		const l_member2___1 = peek2893765512(l_a___2["container-stack"])
		const x_matched___0 = l_member2___1
		if ((x_matched___0.index === 0)) {
			throw new (error4175136409)(c____419())
		} else {
			if ((x_matched___0.index === 1)) {
				return ((l_temp___3 = l_member2___1.value) , l_temp___3)
			} else {
				return _unreachable()
			}
		}
	})()
	if ((text__45container730344496(l_last___0) instanceof text__45container2103931632)) {
		(void (() => {
			const l_member2___4 = pop3076814330(l_a___2["container-stack"])
			const x_matched___1 = l_member2___4
			if ((x_matched___1.index === 0)) {
				throw new (error4175136409)(c____420())
			} else {
				if ((x_matched___1.index === 1)) {
					return ((l_temp___5 = l_member2___4.value) , l_temp___5)
				} else {
					return _unreachable()
				}
			}
		})())
		const l_new__45last___6 = (() => {
			const l_member2___7 = peek2893765512(l_a___2["container-stack"])
			const x_matched___2 = l_member2___7
			if ((x_matched___2.index === 0)) {
				throw new (error4175136409)(c____419())
			} else {
				if ((x_matched___2.index === 1)) {
					return ((l_temp___8 = l_member2___7.value) , l_temp___8)
				} else {
					return _unreachable()
				}
			}
		})()
		if ((text__45container730344496(l_new__45last___6) instanceof text__45container2103931632)) {
			throw new (error4175136409)(c____444())
		}
		__126__6177877711(children4002845922(l_new__45last___6), create__45text__45span1938718928(c____445(), l_last___0.text))
	}
}
// maybe-start-diag file:///home/andy/games/keen.foo/script/highlight-tokens.keen 76:1
const maybe__45start__45diag3677375547 = l_a___0 => {
	let l_temp___3
	if (__602180318207(l_a___0["diag-index"], l_a___0.diagnostics.length)) {
		const l_diag___1 = subscript1521655738(l_a___0.diagnostics, l_a___0["diag-index"])
		if (__60__611731619377(l_diag___1.range.start, l_a___0.pos)) {
			if ((diag__45container2161889639((() => {
							const l_member2___2 = peek2893765512(l_a___0["container-stack"])
							const x_matched___0 = l_member2___2
							if ((x_matched___0.index === 0)) {
								throw new (error4175136409)(c____419())
							} else {
								if ((x_matched___0.index === 1)) {
									return ((l_temp___3 = l_member2___2.value) , l_temp___3)
								} else {
									return _unreachable()
								}
							}
						})()) instanceof diag__45container3891528341)) {
			} else {
				finish__45text1208693291(l_a___0)
				__126__611093706126(l_a___0["container-stack"], new (diag__45container3891528341)(list__45new3817461744(c____253()), l_diag___1.range.end, l_diag___1.message))
			}
			l_a___0["diag-index"] = __431111513593(l_a___0["diag-index"], 1)
			return true
		} else {
			return false
		}
	} else {
		return false
	}
}
// should-stop-diag file:///home/andy/games/keen.foo/script/highlight-tokens.keen 87:1
const should__45stop__45diag288946861 = l_a___2 => {
	let l_temp___3, l_last__45container___0
	return ((l_last__45container___0 = (() => {
		const l_member2___1 = peek2893765512(l_a___2["container-stack"])
		const x_matched___0 = l_member2___1
		if ((x_matched___0.index === 0)) {
			throw new (error4175136409)(c____419())
		} else {
			if ((x_matched___0.index === 1)) {
				return ((l_temp___3 = l_member2___1.value) , l_temp___3)
			} else {
				return _unreachable()
			}
		}
	})()) , ((diag__45container2161889639(l_last__45container___0) instanceof diag__45container3891528341) ? __60__611731619377(l_last__45container___0.end, l_a___2.pos) : false))
}
// maybe-stop-diag file:///home/andy/games/keen.foo/script/highlight-tokens.keen 91:1
const maybe__45stop__45diag2576150130 = l_a___0 =>
	(should__45stop__45diag288946861(l_a___0) ? pop__45container359844167(l_a___0) : (void 0))
// no-token-node file:///home/andy/games/keen.foo/script/highlight-tokens.keen 95:1
const no__45token__45node384817388 = (l_a___1, l_start__45pos___0) => {
	if ((!__603415715694(l_start__45pos___0, l_a___1.pos))) {
		throw new (error4175136409)(c____446())
	}
	return create__45text__45span1938718928(c____445(), to1480872378(slice__45line1621568712(l_a___1.lines, l_start__45pos___0, l_a___1.pos)))
}
// walk-to file:///home/andy/games/keen.foo/script/highlight-tokens.keen 99:1
const walk__45to1622735639 = (l_a___1, l_end__45pos___2) => {
	let l_temp___5, l_temp___7, l_temp___9
	let l_start__45pos___0 = l_a___1.pos
	x_loop___0: while (true){
		if (__603415715694(l_a___1.pos, l_end__45pos___2)) {
			if (maybe__45start__45diag3677375547(l_a___1)) {
				(__603415715694(l_start__45pos___0, l_a___1.pos) ? __126__6177877711(children4002845922(subscript694856832(l_a___1["container-stack"], __454246740820(c____557(), 2))), no__45token__45node384817388(l_a___1, l_start__45pos___0)) : (void 0))
				l_start__45pos___0 = l_a___1.pos
			}
			const l_next__45pos___3 = next__45position639041371(l_a___1.lines, l_a___1.pos)
			if (__33__61883178196(l_next__45pos___3.line, l_a___1.pos.line)) {
				(__33__613106631749(l_start__45pos___0, l_a___1.pos) ? __126__6177877711(children4002845922((() => {
							const l_member2___4 = peek2893765512(l_a___1["container-stack"])
							const x_matched___1 = l_member2___4
							if ((x_matched___1.index === 0)) {
								throw new (error4175136409)(c____438())
							} else {
								if ((x_matched___1.index === 1)) {
									return ((l_temp___5 = l_member2___4.value) , l_temp___5)
								} else {
									return _unreachable()
								}
							}
						})()), no__45token__45node384817388(l_a___1, l_start__45pos___0)) : (void 0))
				l_start__45pos___0 = l_next__45pos___3
				next__45line2106789437(l_a___1)
			}
			l_a___1.pos = l_next__45pos___3
			if (should__45stop__45diag288946861(l_a___1)) {
				__126__6177877711(children4002845922((() => {
							const l_member2___6 = peek2893765512(l_a___1["container-stack"])
							const x_matched___2 = l_member2___6
							if ((x_matched___2.index === 0)) {
								throw new (error4175136409)(c____438())
							} else {
								if ((x_matched___2.index === 1)) {
									return ((l_temp___7 = l_member2___6.value) , l_temp___7)
								} else {
									return _unreachable()
								}
							}
						})()), no__45token__45node384817388(l_a___1, l_start__45pos___0))
				l_start__45pos___0 = l_a___1.pos
				pop__45container359844167(l_a___1)
			}
			continue
		} else {
			break  x_loop___0
		}
	}
	;(__603415715694(l_start__45pos___0, l_a___1.pos) ? __126__6177877711(children4002845922((() => {
				const l_member2___8 = peek2893765512(l_a___1["container-stack"])
				const x_matched___3 = l_member2___8
				if ((x_matched___3.index === 0)) {
					throw new (error4175136409)(c____438())
				} else {
					if ((x_matched___3.index === 1)) {
						return ((l_temp___9 = l_member2___8.value) , l_temp___9)
					} else {
						return _unreachable()
					}
				}
			})()), no__45token__45node384817388(l_a___1, l_start__45pos___0)) : (void 0))
}
// add-span file:///home/andy/games/keen.foo/script/highlight-tokens.keen 120:1
const add__45span235230302 = (l_a___0, l_class__45name___5, l_end__45pos___1) => {
	let l_temp___4, l_temp___8
	if (__603415715694(l_a___0.pos, l_end__45pos___1)) {
		const l_parts___2 = slice__45lines617000949(l_a___0.lines, l_a___0.pos, l_end__45pos___1)
		__126__6177877711(children4002845922((() => {
					const l_member2___3 = peek2893765512(l_a___0["container-stack"])
					const x_matched___0 = l_member2___3
					if ((x_matched___0.index === 0)) {
						throw new (error4175136409)(c____438())
					} else {
						if ((x_matched___0.index === 1)) {
							return ((l_temp___4 = l_member2___3.value) , l_temp___4)
						} else {
							return _unreachable()
						}
					}
				})()), create__45text__45span1938718928(l_class__45name___5, to1480872378(subscript1787594676(l_parts___2, 0))))
		for__45loop3879467268(subscript1346698454(l_parts___2, __46__461225104787(1, c____557())), l_part___6 => {
				next__45line2106789437(l_a___0)
				__126__6177877711(children4002845922((() => {
							const l_member2___7 = peek2893765512(l_a___0["container-stack"])
							const x_matched___1 = l_member2___7
							if ((x_matched___1.index === 0)) {
								throw new (error4175136409)(c____438())
							} else {
								if ((x_matched___1.index === 1)) {
									return ((l_temp___8 = l_member2___7.value) , l_temp___8)
								} else {
									return _unreachable()
								}
							}
						})()), create__45text__45span1938718928(l_class__45name___5, to1480872378(l_part___6)))
			})
		l_a___0.pos = l_end__45pos___1
	}
}
// all-container file:///home/andy/games/keen.foo/script/highlight-tokens.keen 129:1
const all__45container2530492401 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof all__45container3257327100) ? l_a___0 : c____307()))
}
// text-container file:///home/andy/games/keen.foo/script/highlight-tokens.keen 129:1
const text__45container730344496 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof text__45container2103931632) ? l_a___0 : c____307()))
}
// diag-container file:///home/andy/games/keen.foo/script/highlight-tokens.keen 129:1
const diag__45container2161889639 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof diag__45container3891528341) ? l_a___0 : c____307()))
}
// line-container file:///home/andy/games/keen.foo/script/highlight-tokens.keen 129:1
const line__45container2766237542 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof line__45container2648654990) ? l_a___0 : c____307()))
}
// create-text-span file:///home/andy/games/keen.foo/script/highlight-tokens.keen 139:1
const create__45text__45span1938718928 = (l_class__45name___0, l_text___1) =>
	create__45span927028643(l_class__45name___0, list__45new574588355([create__45text__45node1193722309(l_text___1)]))
// children file:///home/andy/games/keen.foo/script/highlight-tokens.keen 142:1
const children4002845922 = l_a___0 => {
	const x_matched___0 = l_a___0
	if ((x_matched___0 instanceof all__45container3257327100)) {
		return l_a___0.nodes
	} else {
		if ((x_matched___0 instanceof line__45container2648654990)) {
			return l_a___0.nodes
		} else {
			if ((x_matched___0 instanceof diag__45container3891528341)) {
				return l_a___0.children
			} else {
				if ((x_matched___0 instanceof text__45container2103931632)) {
					throw new (unreachable754248293)()
				} else {
					return _unreachable()
				}
			}
		}
	}
}
// slice-lines file:///home/andy/games/keen.foo/script/highlight-tokens.keen 156:1
const slice__45lines617000949 = (l_lines___2, l_start___0, l_end___1) =>
	((l_start___0.line === l_end___1.line) ? list__45new2631943629([slice__45line1621568712(l_lines___2, l_start___0, l_end___1)]) : list__45new2631943629(concat__45array__45views541845895([to__45array__45view1767350890([slice__45line__45from400676689(l_lines___2, l_start___0)]), subscript1973037180(l_lines___2, __46__462451799117(l_start___0.line, l_end___1.line)), to__45array__45view1767350890([slice__45line__45to2508220843(l_lines___2, l_end___1)])])))
// slice-line file:///home/andy/games/keen.foo/script/highlight-tokens.keen 163:1
const slice__45line1621568712 = (l_lines___3, l_start___0, l_end___1) => {
	let l_res___5, l_line__45char32s___4, l_line__45char8s___2
	if ((!(l_start___0.line === l_end___1.line))) {
		throw new (error4175136409)(c____440())
	}
	return ((l_line__45char8s___2 = safe__45at2574737173(l_lines___3, l_start___0.line)) , ((l_line__45char32s___4 = to221561981(to1480872378(l_line__45char8s___2))) , ((l_res___5 = safe__45slice513522616(l_line__45char32s___4, __46__462451799117(l_start___0.character, l_end___1.character))) , to2628429697(to739953591(to__45array__45view121530625(l_res___5))))))
}
// slice-line-from file:///home/andy/games/keen.foo/script/highlight-tokens.keen 170:1
const slice__45line__45from400676689 = (l_lines___0, l_start___1) =>
	safe__45slice__45from752974351(safe__45at2574737173(l_lines___0, l_start___1.line), l_start___1.character)
// slice-line-to file:///home/andy/games/keen.foo/script/highlight-tokens.keen 172:1
const slice__45line__45to2508220843 = (l_lines___0, l_end___1) =>
	safe__45slice__45to1338077966(safe__45at2574737173(l_lines___0, l_end___1.line), l_end___1.character)
// safe-at@(char8 array) file:///home/andy/games/keen.foo/script/highlight-tokens.keen 175:1
const safe__45at2574737173 = (l_xs___1, l_index___0) =>
	(__602180318207(l_index___0, l_xs___1.length) ? subscript1787594676(l_xs___1, l_index___0) : c____14())
// safe-slice@(char32) file:///home/andy/games/keen.foo/script/highlight-tokens.keen 178:1
const safe__45slice513522616 = (l_xs___1, l_range___0) =>
	(__602180318207(l_range___0.low, l_xs___1.length) ? to1882768612(subscript3355953907(l_xs___1, __46__462451799117(l_range___0.low, min906971388(l_range___0.high, l_xs___1.length)))) : c____291())
// safe-slice-from@(char8) file:///home/andy/games/keen.foo/script/highlight-tokens.keen 181:1
const safe__45slice__45from752974351 = (l_xs___1, l_index___0) =>
	(__602180318207(l_index___0, l_xs___1.length) ? to3613751888(subscript1174085666(l_xs___1, __46__461225104787(l_index___0, c____557()))) : c____14())
// safe-slice-to@(char8) file:///home/andy/games/keen.foo/script/highlight-tokens.keen 184:1
const safe__45slice__45to1338077966 = (l_xs___1, l_index___0) =>
	(__602180318207(l_index___0, l_xs___1.length) ? to3613751888(subscript4065740503(l_xs___1, __46__462451799117(0, l_index___0))) : l_xs___1)
// next-position file:///home/andy/games/keen.foo/script/highlight-tokens.keen 190:1
const next__45position639041371 = (l_lines___1, l_pos___0) =>
	((__602180318207(l_pos___0.line, l_lines___1.length) ? __62__61724884600(l_pos___0.character, subscript1787594676(l_lines___1, l_pos___0.line).length) : false) ? new (line__45and__45character1481230736)(__431111513593(l_pos___0.line, 1), 0) : new (line__45and__45character1481230736)(l_pos___0.line, __431111513593(l_pos___0.character, 1)))
// last-position file:///home/andy/games/keen.foo/script/highlight-tokens.keen 196:1
const last__45position2025487145 = l_lines___0 =>
	new (line__45and__45character1481230736)(__45997287195(l_lines___0.length, 1), subscript3357564265(l_lines___0, __454246740820(c____557(), 1)).length)
// define-icon-custom-element file:///home/andy/games/keen.foo/script/icon.keen 7:1
const define__45icon__45custom__45element3531458651 = () => {
	let l_temp___3, l_child___1
	return define__45custom__45element2346176678(c____512(), l_this___0 =>
			((l_child___1 = (() => {
				switch (to2584131937((() => {
								const l_member2___2 = subscript4006277920(attributes4156296191(l_this___0), _symbol65)
								const x_matched___0 = l_member2___2
								if ((x_matched___0 instanceof none2082914084)) {
									throw new (error4175136409)(c____513())
								} else {
									if ((x_matched___0 instanceof string2245870778)) {
										return ((l_temp___3 = l_member2___2) , l_temp___3)
									} else {
										return _unreachable()
									}
								}
							})())) {
					case _symbol66:{
						return download__45icon335661531()
					}
					case _symbol67:{
						return external__45link__45icon2908124542()
					}
					case _symbol68:{
						return home__45icon4126219973()
					}
					case _symbol69:{
						return up__45icon1696518421()
					}
					case _symbol70:{
						return play__45icon3143875599()
					}
					default:{
						throw new (todo3442278752)()
					}
				}
			})()) , __126__61666547215(shadow__45root975114786(l_this___0), l_child___1)))
}
// download-icon file:///home/andy/games/keen.foo/script/icon.keen 24:1
const download__45icon335661531 = () =>
	icon620658129(c____521())
// play-icon file:///home/andy/games/keen.foo/script/icon.keen 33:1
const play__45icon3143875599 = () =>
	icon620658129(c____480())
// up-icon file:///home/andy/games/keen.foo/script/icon.keen 42:1
const up__45icon1696518421 = () =>
	icon620658129(c____485())
// sun-icon file:///home/andy/games/keen.foo/script/icon.keen 51:1
const sun__45icon305769836 = () => {
	let l_d___0
	return ((l_d___0 = __126__1263071226195(c____503(), __126__1263071226195(c____504(), c____505()))) , icon620658129(interpolate3208339971([c____506(), interpolate__45value844224645(l_d___0), c____507()])))
}
// moon-icon file:///home/andy/games/keen.foo/script/icon.keen 58:1
const moon__45icon3864372225 = () => {
	let l_d___0
	return ((l_d___0 = __126__1263071226195(c____508(), __126__1263071226195(c____509(), c____510()))) , icon620658129(interpolate3208339971([c____511(), interpolate__45value844224645(l_d___0), c____507()])))
}
// home-icon file:///home/andy/games/keen.foo/script/icon.keen 65:1
const home__45icon4126219973 = () => {
	let l_d___0
	return ((l_d___0 = __126__1263071226195(c____515(), __126__1263071226195(c____516(), c____517()))) , icon620658129(interpolate3208339971([c____506(), interpolate__45value844224645(l_d___0), c____507()])))
}
// external-link-icon file:///home/andy/games/keen.foo/script/icon.keen 72:1
const external__45link__45icon2908124542 = () =>
	icon620658129(interpolate3208339971([c____519(), interpolate__45value844224645(c____518()), c____520()]))
// icon file:///home/andy/games/keen.foo/script/icon.keen 76:1
const icon620658129 = l_content___1 => {
	const l_res___0 = create__45div4154923196(c____481())
	l_res___0.innerHTML = interpolate1072222187([c____482(), interpolate__45value844224645(l_content___1), c____483()])
	return l_res___0
}
// main file:///home/andy/games/keen.foo/script/index.keen 11:1
const _async_main1383715270 = async () => {
	const l_keen___0 = (await _async_make__45keen__45server4146103788())
	define__45icon__45custom__45element3531458651()
	define__45theme__45switcher__45element2609471998()
	;(await _async_define__45keen__45runnable__45custom__45element1900159301(l_keen___0))
	;(await _async_define__45keen__45text__45custom__45element2512986592())
	define__45loading__45spinner__45element1241836479()
	;(await _async_define__45syntax__45translate__45element4198762002(l_keen___0))
	setup__45collapsible__45sections2752540233()
}
// setup-collapsible-sections file:///home/andy/games/keen.foo/script/index.keen 21:1
const setup__45collapsible__45sections2752540233 = () => {
	let l_temp___3, l_button___1
	for (const l_section___0 of query__45all3987915591(document2587895802(), c____308())) {
		((l_button___1 = (() => {
			const l_member2___2 = query1589142844(l_section___0, c____309())
			const x_matched___0 = l_member2___2
			if ((x_matched___0.index === 0)) {
				throw new (error4175136409)(c____310())
			} else {
				if ((x_matched___0.index === 1)) {
					return ((l_temp___3 = l_member2___2.value) , l_temp___3)
				} else {
					return _unreachable()
				}
			}
		})()) , add__45event__45listener1727922027(l_button___1, c____311(), l_it___4 =>
				toggle2626457038(new (classes154155733)(l_section___0), c____312())))
	}
}
// define-keen-runnable-custom-element file:///home/andy/games/keen.foo/script/keen-runnable.keen 16:1
const _async_define__45keen__45runnable__45custom__45element1900159301 = async l_keen___2 => {
	let l_names___0
	return ((l_names___0 = new3697615660()) , (await _async_define__45custom__45element301091642(c____459(), c____302(), async l_x___1 =>
			(await _async_connected664151941(l_x___1, l_keen___2, l_names___0)))))
}
// new file:///home/andy/games/keen.foo/script/keen-runnable.keen 22:1
const new3697615660 = () =>
	new (names3568957142)(list__45new3610606617(c____273()), 0)
// get-default-name file:///home/andy/games/keen.foo/script/keen-runnable.keen 24:1
const get__45default__45name2333045910 = l_a___1 => {
	const l_index___0 = l_a___1["next-index"]
	l_a___1["next-index"] = __431111513593(l_a___1["next-index"], 1)
	return interpolate3208339971([c____498(), interpolate__45value4064333482(l_index___0), c____494()])
}
// get-keen-runnable-name file:///home/andy/games/keen.foo/script/keen-runnable.keen 29:1
const get__45keen__45runnable__45name3920243026 = (l_a___3, l_name__45attr___2) => {
	let l_temp___4, x_matched___0, l_member2___1
	const l_name___0 = ((l_member2___1 = l_name__45attr___2) , ((x_matched___0 = l_member2___1) , ((x_matched___0 instanceof none2082914084) ? get__45default__45name2333045910(l_a___3) : ((x_matched___0 instanceof string2245870778) ? ((l_temp___4 = l_member2___1) , l_temp___4) : _unreachable()))))
	if ((!(ends__45with3251877418(l_name___0, c____494()) ? true : ends__45with3251877418(l_name___0, c____495())))) {
		throw new (error4175136409)(c____497())
	}
	;(try__45add4038755052(l_a___3.seen, l_name___0) ? (void 0) : log__45error287139582(interpolate3208339971([c____496(), interpolate__45value844224645(l_name___0)])))
	return l_name___0
}
// connected file:///home/andy/games/keen.foo/script/keen-runnable.keen 36:1
const _async_connected664151941 = async (l_a___1, l_keen___8, l_names___3) => {
	let l_temp___10
	const l_name__45attr___0 = subscript4006277920(attributes4156296191(l_a___1), _symbol44)
	const l_name___2 = get__45keen__45runnable__45name3920243026(l_names___3, l_name__45attr___0)
	const l_no__45run___4 = __61__611918051925(subscript4006277920(attributes4156296191(l_a___1), _symbol45), c____377())
	const l_initial__45text___5 = get__45child__45text3249659505(as__45node1179244723(l_a___1))
	const l_main__45uri___6 = parse__45uri4018911369(interpolate3208339971([c____461(), interpolate__45value844224645(l_name___2)]))
	let l_keen__45text___7 = c____307()
	l_keen__45text___7 = create__45keen__45text4184193190(new (keen__45text__45props578208079)(l_keen___8, l_main__45uri___6, l_initial__45text___5))
	__126__126__613836109245(shadow__45root975114786(l_a___1), list__45new574588355(concat__45array__45views3357718216([to__45array__45view1184452394(c____253()), ((l_name__45attr___0 instanceof string2245870778) ? to__45array__45view1184452394(list__45new574588355([create__45div1449965713(c____462(), list__45new574588355([create__45text__45node1193722309(l_name___2)]))])) : to__45array__45view1184452394(c____253())), to__45array__45view1184452394([(await (async () => {
								const l_member2___9 = l_keen__45text___7
								const x_matched___0 = l_member2___9
								if ((x_matched___0 instanceof none2082914084)) {
									throw new (error4175136409)(c____463())
								} else {
									if ((x_matched___0 instanceof keen__45text80476592)) {
										return ((l_temp___10 = l_member2___9) , l_temp___10)
									} else {
										return _unreachable()
									}
								}
							})()).node]), (l_no__45run___4 ? to__45array__45view1184452394(c____253()) : to__45array__45view1184452394((await _async_make__45output2150443345(l_keen___8, l_main__45uri___6, __61__611918051925(subscript4006277920(attributes4156296191(l_a___1), _symbol46), c____377()))))), to__45array__45view1184452394(c____253())])))
}
// make-output file:///home/andy/games/keen.foo/script/keen-runnable.keen 52:1
const _async_make__45output2150443345 = async (l_keen___11, l_main__45uri___12, l_test____9) => {
	let l_temp___5, l_diagnostics___13, l_result___10, l_main__45kind___8, l_buttons___14, l_run__45button___6
	const l_output___0 = new1890683819()
	let l_collapse__45button__45ref___1 = new (option2299041553)(0, c____307())
	const l_collapse__45button___2 = create__45button1456221454(c____464(), c____312(), list__45new574588355([up__45icon1696518421()]), async l_args___3 => {
			hide291172208(l_output___0)
			__126__612423443072(new (classes154155733)((await (async () => {
						const l_member2___4 = l_collapse__45button__45ref___1
						const x_matched___0 = l_member2___4
						if ((x_matched___0.index === 0)) {
							throw new (error4175136409)(c____465())
						} else {
							if ((x_matched___0.index === 1)) {
								return ((l_temp___5 = l_member2___4.value) , l_temp___5)
							} else {
								return _unreachable()
							}
						}
					})())), c____312())
		})
	l_collapse__45button__45ref___1 = new (option2299041553)(1, l_collapse__45button___2)
	set__45subscript1866118964(new (style849516044)(l_collapse__45button___2), _symbol47, c____466())
	return ((l_run__45button___6 = create__45button1456221454(c____467(), c____322(), list__45new574588355([play__45icon3143875599()]), async l_args___7 => {
			start__45running3672406562(l_output___0)
			__45__612064281567(new (classes154155733)(l_collapse__45button___2), c____312())
			;((l_main__45kind___8 = (l_test____9 ? 1 : 0)) , ((l_result___10 = (await _async_run__45js633052567((await _async_build__45js__45script2799007201(l_keen___11, l_main__45kind___8, l_main__45uri___12))))) , ((l_diagnostics___13 = get__45diagnostics3739161319(l_keen___11, l_main__45uri___12)) , finish__45running1161205196(l_diagnostics___13, l_output___0, l_result___10))))
		})) , ((l_buttons___14 = list__45new574588355(concat__45array__45views3357718216([to__45array__45view1184452394(c____253()), from__45option550491835(new (option2299041553)(1, l_run__45button___6)), to__45array__45view1184452394([l_collapse__45button___2])]))) , list__45new574588355([l_output___0.container, create__45div1449965713(c____468(), l_buttons___14)])))
}
// new file:///home/andy/games/keen.foo/script/keen-runnable.keen 79:1
const new1890683819 = () => {
	const l_res___0 = new (run__45output3323548284)(create__45div1449965713(c____478(), c____253()))
	hide291172208(l_res___0)
	return l_res___0
}
// hide file:///home/andy/games/keen.foo/script/keen-runnable.keen 84:1
const hide291172208 = l_a___0 =>
	set__45subscript1866118964(new (style849516044)(l_a___0.container), _symbol48, c____484())
// start-running file:///home/andy/games/keen.foo/script/keen-runnable.keen 86:1
const start__45running3672406562 = l_a___0 => {
	set__45classes3002657799(l_a___0.container, c____279())
	set__45subscript1866118964(new (style849516044)(l_a___0.container), _symbol48, c____479())
	remove__45all__45children1427536205(l_a___0.container)
	__126__61666547215(l_a___0.container, create__45loading__45spinner2379004346())
}
// finish-running file:///home/andy/games/keen.foo/script/keen-runnable.keen 91:1
const finish__45running1161205196 = (l_diagnostics___1, l_a___0, l_run__45result___2) => {
	__45__612064281567(new (classes154155733)(l_a___0.container), c____469())
	set__45subscript1866118964(new (style849516044)(l_a___0.container), _symbol48, c____322())
	remove__45all__45children1427536205(l_a___0.container)
	add__45spans__45for__45diagnostics1738022565(l_a___0.container, l_diagnostics___1)
	add__45spans__45for__45writes427507648(l_a___0.container, l_run__45result___2)
}
// add-spans-for-diagnostics file:///home/andy/games/keen.foo/script/keen-runnable.keen 98:1
const add__45spans__45for__45diagnostics1738022565 = (l_container___3, l_diagnostics___0) => {
	for (const l_diag___1 of l_diagnostics___0) {
		const l_start___2 = l_diag___1.range.start
		__126__61666547215(l_container___3, create__45span927028643(c____473(), list__45new574588355([create__45text__45node1193722309(interpolate3208339971([c____474(), interpolate__45value4064333482(__431111513593(l_start___2.line, 1)), c____344(), interpolate__45value844224645(l_diag___1.message)]))])))
		__126__61666547215(l_container___3, create__45node616468159(_symbol50))
	}
}
// add-spans-for-writes file:///home/andy/games/keen.foo/script/keen-runnable.keen 105:1
const add__45spans__45for__45writes427507648 = (l_container___5, l_writes___6) => {
	let x_matched___0
	let l_cur___0 = c____322()
	let l_cur__45pipe___1 = 0
	const l_finish__45line___2 = l_args___3 => {
		if (any2694317429(l_cur___0)) {
			const l_class____4 = ((x_matched___0 = l_cur__45pipe___1) , ((x_matched___0 === 0) ? c____470() : ((x_matched___0 === 1) ? c____471() : _unreachable())))
			__126__61666547215(l_container___5, create__45node3021507421(_symbol49, list__45new3679651572(c____289()), l_class____4, list__45new574588355([create__45text__45node1193722309(l_cur___0)])))
			l_cur___0 = c____322()
		}
	}
	for (const l_write___7 of l_writes___6) {
		if (__61__613410057286(l_write___7.pipe, l_cur__45pipe___1)) {
		} else {
			l_finish__45line___2((void 0))
			l_cur__45pipe___1 = l_write___7.pipe
		}
		l_cur___0 = interpolate3208339971([interpolate__45value844224645(l_cur___0), interpolate__45value844224645(l_write___7.text)])
	}
	if (any4038687962(l_writes___6)) {
	} else {
		l_cur___0 = c____472()
	}
	l_finish__45line___2((void 0))
}
// run-js file:///home/andy/games/keen.foo/script/keen-runnable.keen 125:1
const _async_run__45js633052567 = async l_build___4 => {
	const l_console___0 = _global.console
	const l_old__45info___1 = l_console___0.info
	const l_old__45error___2 = l_console___0.error
	try {
		const l_writes___3 = list__45new3839606285(c____292())
		;(any2694317429(l_build___4.diagnostics) ? __126__61310725575(l_writes___3, new (write3165204086)(1, interpolate3208339971([interpolate__45value844224645(l_build___4.diagnostics), c____332()]))) : (void 0))
		const l_new__45info___5 = async l_x___6 =>
			__126__61310725575(l_writes___3, new (write3165204086)(0, interpolate3208339971([interpolate__45value844224645(to2585906292(l_x___6)), c____332()])))
		const l_new__45error___7 = async l_x___8 =>
			__126__61310725575(l_writes___3, new (write3165204086)(1, interpolate3208339971([interpolate__45value844224645(to2585906292(l_x___8)), c____332()])))
		l_console___0.info = to3274712937(l_new__45info___5)
		l_console___0.error = to3274712937(l_new__45error___7)
		const l_temp___9 = l_build___4.script
		const l_script___10 = l_temp___9
		if ((l_temp___9 instanceof string2245870778)) {
			const l_unique__45script___11 = interpolate1072222187([interpolate__45value844224645(l_script___10), c____477(), interpolate__45value4064333482(v1485598979376691058)])
			v1485598979376691058 = __431111513593(v1485598979376691058, 1)
			const l_encoded___12 = _global.encodeURIComponent(l_unique__45script___11)
			const l_data__45url___13 = ("data:text/javascript;charset=utf-8," + l_encoded___12)
			try {
				(void (await import(l_data__45url___13)))
			} catch (l_e___14) {
				__126__61310725575(l_writes___3, new (write3165204086)(1, to2585906292(l_e___14.toString())))
			}
		}
		return move__45to3648669026(l_writes___3)
	} finally {
		l_console___0.info = l_old__45info___1
		l_console___0.error = l_old__45error___2
	}
}
// define-keen-text-custom-element file:///home/andy/games/keen.foo/script/keen-text.keen 25:1
const _async_define__45keen__45text__45custom__45element2512986592 = async () =>
	(await _async_define__45custom__45element301091642(c____405(), c____301(), async l_it___0 =>
			(await _async_connected245478485(l_it___0))))
// keen file:///home/andy/games/keen.foo/script/keen-text.keen 34:1
const keen4241263983 = l_a___0 =>
	l_a___0.props.keen
// uri file:///home/andy/games/keen.foo/script/keen-text.keen 35:1
const uri1661164546 = l_a___0 =>
	l_a___0.props.uri
// create-keen-text file:///home/andy/games/keen.foo/script/keen-text.keen 41:1
const create__45keen__45text4184193190 = l_props___1 => {
	const l_node___0 = create__45node616468159(_symbol58)
	l_node___0.props = l_props___1
	const l_res___2 = new (keen__45text80476592)(l_node___0, l_props___1, c____307(), new3211280280(milliseconds2872886410(100)), c____293())
	l_node___0["keen-text"] = l_res___2
	return l_res___2
}
// text file:///home/andy/games/keen.foo/script/keen-text.keen 54:1
const text2802752803 = l_a___1 => {
	let l_temp___2
	return value151690680((() => {
			const l_member2___0 = l_a___1.nodes
			const x_matched___0 = l_member2___0
			if ((x_matched___0 instanceof none2082914084)) {
				throw new (error4175136409)(c____416())
			} else {
				if ((x_matched___0 instanceof keen__45text__45nodes775110242)) {
					return ((l_temp___2 = l_member2___0) , l_temp___2)
				} else {
					return _unreachable()
				}
			}
		})().text)
}
// do-highlight file:///home/andy/games/keen.foo/script/keen-text.keen 57:1
const do__45highlight1457012310 = (l_a___3, l_diagnostics___1) => {
	let l_temp___5, l_diags___0
	return ((l_diags___0 = filter1234816684(l_diagnostics___1, l_it___2 =>
			__33__613451873470(l_it___2.severity, 4))) , highlight3430570367(l_a___3.tokens, l_diags___0, (() => {
			const l_member2___4 = l_a___3.nodes
			const x_matched___0 = l_member2___4
			if ((x_matched___0 instanceof none2082914084)) {
				throw new (error4175136409)(c____416())
			} else {
				if ((x_matched___0 instanceof keen__45text__45nodes775110242)) {
					return ((l_temp___5 = l_member2___4) , l_temp___5)
				} else {
					return _unreachable()
				}
			}
		})().highlight, text2802752803(l_a___3)))
}
// text-changed file:///home/andy/games/keen.foo/script/keen-text.keen 61:1
const _async_text__45changed3482130179 = async l_a___1 => {
	let l_temp___3
	const l_value___0 = text2802752803(l_a___1)
	set__45text__45content118293578((await (async () => {
			const l_member2___2 = l_a___1.nodes
			const x_matched___0 = l_member2___2
			if ((x_matched___0 instanceof none2082914084)) {
				throw new (error4175136409)(c____416())
			} else {
				if ((x_matched___0 instanceof keen__45text__45nodes775110242)) {
					return ((l_temp___3 = l_member2___2) , l_temp___3)
				} else {
					return _unreachable()
				}
			}
		})())["line-numbers"], join2531354735(c____332(), (await (async () => {
				const x_start___3 = 0
				const x_end___2 = count__45lines2945234505(text2802752803(l_a___1))
				const x_out___4 = new (Array)(Number((x_end___2 - x_start___3)))
				let x_cur___1 = x_start___3
				while ((x_cur___1 < x_end___2)){
					const l_i___4 = x_cur___1
					x_out___4[(x_cur___1 - x_start___3)] = interpolate3208339971([interpolate__45value4064333482(__431111513593(l_i___4, 1))])
					x_cur___1 = (x_cur___1 + 1)
				}
				return x_out___4
			})())))
	open__45file72764180(keen4241263983(l_a___1), uri1661164546(l_a___1), l_value___0)
	l_a___1.tokens = (await _async_get__45tokens1604512102(keen4241263983(l_a___1), uri1661164546(l_a___1)))
	do__45highlight1457012310(l_a___1, c____287())
}
// connected file:///home/andy/games/keen.foo/script/keen-text.keen 69:1
const _async_connected245478485 = async l_root___1 => {
	const l_a___0 = as__45js3194964695(l_root___1)["keen-text"]
	const l_highlight__45div___2 = create__45div4154923196(c____407())
	const l_ta___3 = create__45node616468159(_symbol21)
	set__45value1083962113(l_ta___3, l_a___0.props["initial-text"])
	set__45subscript1372515340(new (attributes3811162107)(l_ta___3), _symbol22, c____378())
	add__45event__45listener1727922027(l_ta___3, c____408(), async l_event___4 =>
			(__61__613275818335(handle__45keydown1089657065(l_ta___3, l_event___4), 0) ? (await _async_text__45changed3482130179(l_a___0)) : (void 0)))
	add__45event__45listener1727922027(l_ta___3, c____409(), async l_it___5 =>
			(await _async_text__45changed3482130179(l_a___0)))
	const l_measurer__45span___6 = create__45span1024413830(list__45new574588355([create__45text__45node1193722309(c____410())]))
	const l_line__45numbers___7 = create__45div4154923196(c____411())
	const l_text__45container___8 = create__45div1449965713(c____412(), list__45new574588355([create__45div1449965713(c____413(), list__45new574588355([l_measurer__45span___6])), l_highlight__45div___2, l_ta___3]))
	l_a___0.nodes = new (keen__45text__45nodes775110242)(l_ta___3, l_highlight__45div___2, l_line__45numbers___7)
	const l_interrupter___9 = new3617904922()
	const l_tooltip__45element___10 = new3034108764(new (option2299041553)(0, c____307()))
	add__45event__45listener1727922027(l_ta___3, c____414(), async l_e___11 =>
			(await _async_mouse__45move1940150027(l_a___0, l_ta___3, l_measurer__45span___6, l_e___11, l_interrupter___9, l_tooltip__45element___10)))
	add__45event__45listener1727922027(l_ta___3, c____415(), async l_args___12 => {
			(void get378061038(l_interrupter___9))
			rm__45tooltip3044905845(l_tooltip__45element___10)
		})
	subscribe__45to__45diagnostics3808235088(keen4241263983(l_a___0), uri1661164546(l_a___0), async l_diagnostics___13 =>
			with__45block2524277625(l_a___0["diag-debounce"], async l_args___14 =>
					do__45highlight1457012310(l_a___0, l_diagnostics___13)))
	__126__126__613836109245(shadow__45root975114786(l_root___1), list__45new574588355([l_line__45numbers___7, l_text__45container___8]))
	do__45highlight1457012310(l_a___0, c____287())
	;(await _async_text__45changed3482130179(l_a___0))
}
// new file:///home/andy/games/keen.foo/script/keen-text.keen 110:1
const new3617904922 = () =>
	new (interrupter2232553703)(0)
// get file:///home/andy/games/keen.foo/script/keen-text.keen 112:1
const get378061038 = l_a___1 => {
	const l_res___0 = l_a___1.current
	l_a___1.current = __431111513593(l_a___1.current, 1)
	return l_res___0
}
// is-still-current file:///home/andy/games/keen.foo/script/keen-text.keen 116:1
const is__45still__45current3444391659 = (l_a___1, l_was___0) =>
	(l_was___0 === __45997287195(l_a___1.current, 1))
// == file:///home/andy/games/keen.foo/script/keen-text.keen 119:1
const __61__61132174309 = (l_a___0, l_b___1) =>
	(l_a___0 === l_b___1)
// handle-keydown file:///home/andy/games/keen.foo/script/keen-text.keen 120:1
const handle__45keydown1089657065 = (l_ta___2, l_event___4) => {
	const l_insert___0 = l_to__45insert___1 => {
		insert__45text__45area__45text1449141800(l_ta___2, l_to__45insert___1)
		return 0
	}
	const l_res___3 = (() => {
		switch (to2584131937(to2585906292(l_event___4.key))) {
			case _symbol39:{
				return (on__45pressed__45home__45key2825704295(l_ta___2) ? 1 : c____307())
			}
			case _symbol40:{
				return l_insert___0(interpolate3208339971([c____332(), interpolate__45value844224645(indentation__45at__45selection3457024395(l_ta___2))]))
			}
			case _symbol41:{
				return l_insert___0(c____348())
			}
			case _symbol42:{
				(void l_ta___2.setSelectionRange(0, 0))
				return 1
			}
			case _symbol43:{
				const l_text__45size___5 = l_ta___2.value.length
				;(void l_ta___2.setSelectionRange(l_text__45size___5, l_text__45size___5))
				return 1
			}
			default:{
				return c____307()
			}
		}
	})()
	if (((typeof l_res___3) === "number")) {
		(void l_event___4.preventDefault())
	}
	return l_res___3
}
// count-lines file:///home/andy/games/keen.foo/script/keen-text.keen 148:1
const count__45lines2945234505 = l_a___0 =>
	split258860773(l_a___0, c____332()).length
// mouse-move file:///home/andy/games/keen.foo/script/keen-text.keen 151:1
const _async_mouse__45move1940150027 = async (l_a___5, l_text__45area___6, l_measurer___7, l_event___1, l_interrupter___3, l_cur__45tooltip___9) => {
	let l_destruct___10, x_matched___0, l_member2___8
	const l_offset___0 = offset923880135(l_event___1)
	const l_state___2 = get378061038(l_interrupter___3)
	const l_hover___4 = (await _async_get__45hover3884466876(l_a___5, l_text__45area___6, l_measurer___7, l_offset___0))
	if (is__45still__45current3444391659(l_interrupter___3, l_state___2)) {
		if ((l_hover___4 instanceof got__45hover965347706)) {
			if (__33__613929719728(((l_member2___8 = get1017689952(l_cur__45tooltip___9)) , ((x_matched___0 = l_member2___8) , ((x_matched___0.index === 0) ? c____307() : ((x_matched___0.index === 1) ? ((l_destruct___10 = l_member2___8.value) , text__45content2811429711(l_destruct___10)) : _unreachable())))), l_hover___4.text)) {
				rm__45tooltip3044905845(l_cur__45tooltip___9)
				const l_tooltip___11 = make__45tooltip2396372057(l_hover___4.text, client__45pos184941028(l_event___1))
				set__612710139337(l_cur__45tooltip___9, new (option2299041553)(1, l_tooltip___11))
				__126__61666547215(document2587895802().body, l_tooltip___11)
				;(void l_tooltip___11.showPopover())
			}
		} else {
			rm__45tooltip3044905845(l_cur__45tooltip___9)
		}
	}
}
// make-tooltip file:///home/andy/games/keen.foo/script/keen-text.keen 174:1
const make__45tooltip2396372057 = (l_text___1, l_pos___2) => {
	const l_res___0 = create__45div1855756632()
	__126__612423443072(new (classes154155733)(l_res___0), c____450())
	__126__126__61957598935(new (attributes3811162107)(l_res___0), named__45new165309411(c____261(), c____277()))
	set__45text__45content118293578(l_res___0, l_text___1)
	__126__126__61856139553(new (style849516044)(l_res___0), named__45new165309411(c____262(), [interpolate3208339971([interpolate__45value852213350(__43154240798(l_pos___2.x, 5)), c____453()]), interpolate3208339971([interpolate__45value852213350(__43154240798(l_pos___2.y, 5)), c____453()])]))
	return l_res___0
}
// rm-tooltip file:///home/andy/games/keen.foo/script/keen-text.keen 187:1
const rm__45tooltip3044905845 = l_tooltip___1 => {
	const l_temp___0 = get1017689952(l_tooltip___1)
	const l_a___2 = l_temp___0.value
	if ((l_temp___0.index === 1)) {
		(void l_a___2.hidePopover())
		remove__45self2979510162(l_a___2)
		set__612710139337(l_tooltip___1, new (option2299041553)(0, c____307()))
	}
}
// client-pos file:///home/andy/games/keen.foo/script/keen-text.keen 193:1
const client__45pos184941028 = l_event___0 =>
	new (vec2__45641475937032)(to3656388790(l_event___0.clientX), to3656388790(l_event___0.clientY))
// offset file:///home/andy/games/keen.foo/script/keen-text.keen 196:1
const offset923880135 = l_event___0 =>
	new (vec2__45641475937032)(to3656388790(l_event___0.offsetX), to3656388790(l_event___0.offsetY))
// get-hover file:///home/andy/games/keen.foo/script/keen-text.keen 200:1
const _async_get__45hover3884466876 = async (l_a___6, l_text__45area___1, l_measurer___2, l_offset___3) => {
	let l_res___10, l_diagnostic___9, l_temp___7, l_diagnostics___5, l_position___4, l_temp___0
	return ((l_temp___0 = get__45position304022440(l_text__45area___1, l_measurer___2, l_offset___3)) , ((l_position___4 = l_temp___0) , ((l_temp___0 instanceof line__45and__45character1481230736) ? ((l_diagnostics___5 = get__45diagnostics3739161319(keen4241263983(l_a___6), uri1661164546(l_a___6))) , ((l_temp___7 = (await _async_find1994827697(l_diagnostics___5, async l_it___8 =>
			diag__45has__45pos2369715548(l_it___8, l_position___4)))) , ((l_diagnostic___9 = l_temp___7) , ((l_temp___7 instanceof lsp__45diagnostic2223204910) ? new (got__45hover965347706)(l_diagnostic___9.message, true) : ((l_res___10 = (await _async_get__45hover3641866990(l_a___6.props.keen, l_a___6.props.uri, l_position___4))) , (any2694317429(l_res___10) ? new (got__45hover965347706)(l_res___10, false) : c____307())))))) : c____307())))
}
// diag-has-pos file:///home/andy/games/keen.foo/script/keen-text.keen 210:1
const diag__45has__45pos2369715548 = (l_diag___1, l_position___2) => {
	let l_range___0
	return ((l_range___0 = l_diag___1.range) , (any64922530(l_diag___1.range) ? has__45pos516017817(l_range___0, l_position___2) : __61__611161506046(l_range___0.start, l_position___2)))
}
// any file:///home/andy/games/keen.foo/script/keen-text.keen 217:1
const any64922530 = l_a___0 =>
	__33__613106631749(l_a___0.start, l_a___0.end)
// get-position file:///home/andy/games/keen.foo/script/keen-text.keen 220:1
const get__45position304022440 = (l_text__45area___1, l_measurer___3, l_offset___5) => {
	let l_character___10, l_tabs__45fix___9, l_leading__45tabs___8, l_line__45text___7, l_column__45pre___6, l_line___4, l_column__45width___2, l_lines___0
	return ((l_lines___0 = split258860773(value151690680(l_text__45area___1), c____332())) , ((l_column__45width___2 = to3656388790(l_measurer___3.offsetWidth)) , ((l_line___4 = to195685696(round__45down3017244575(__472982201458(l_offset___5.y, 20)))) , ((l_column__45pre___6 = to195685696(round__45down3017244575(__472982201458(l_offset___5.x, l_column__45width___2)))) , (__602180318207(l_line___4, l_lines___0.length) ? ((l_line__45text___7 = subscript127700455(l_lines___0, l_line___4)) , ((l_leading__45tabs___8 = count__45leading__45tabs4270683252(l_line__45text___7)) , ((l_tabs__45fix___9 = __42544875948(l_leading__45tabs___8, __45997287195(4, 1))) , ((l_character___10 = (__61__612768477169(l_line__45text___7, to__45array__45view3595367460(c____14())) ? 0 : clamp__45sub233552326(l_column__45pre___6, l_tabs__45fix___9))) , (__60__612052354958(l_character___10, size1763153932(l_line__45text___7)) ? new (line__45and__45character1481230736)(l_line___4, l_character___10) : c____307()))))) : c____307())))))
}
// clamp-sub file:///home/andy/games/keen.foo/script/keen-text.keen 235:1
const clamp__45sub233552326 = (l_a___0, l_b___1) =>
	(__621787529867(l_a___0, l_b___1) ? __45997287195(l_a___0, l_b___1) : 0)
// insert-text-area-text file:///home/andy/games/keen.foo/script/keen-text.keen 239:1
const insert__45text__45area__45text1449141800 = (l_text__45area___3, l_inserted___1) => {
	const l_inserted__45js__45string___0 = to3382899672(l_inserted___1)
	const l_value___2 = l_text__45area___3.value
	const l_selection__45start___4 = l_text__45area___3.selectionStart
	const l_selection__45end___5 = l_text__45area___3.selectionEnd
	const l_before___6 = l_value___2.slice(0, l_selection__45start___4)
	const l_after___7 = l_value___2.slice(l_selection__45end___5)
	l_text__45area___3.value = ((l_before___6 + l_inserted__45js__45string___0) + l_after___7)
	const l_new__45cursor___8 = (l_selection__45start___4 + l_inserted__45js__45string___0.length)
	;(void l_text__45area___3.setSelectionRange(l_new__45cursor___8, l_new__45cursor___8))
}
// on-pressed-home-key file:///home/andy/games/keen.foo/script/keen-text.keen 254:1
const on__45pressed__45home__45key2825704295 = l_text__45area___1 => {
	const l_str___0 = l_text__45area___1.value
	let l_pos___2 = to3656388790(l_text__45area___1.selectionStart)
	if (Object.is(l_pos___2, 0)) {
		return false
	} else {
		if ((l_str___0[to958312080(__453248900816(l_pos___2, 1))] === "\t")) {
			return false
		} else {
			if ((l_str___0[to958312080(__453248900816(l_pos___2, 1))] === "\n")) {
				x_loop___0: while (true){
					if ((Object.is(l_pos___2, to3656388790(l_str___0.length)) ? true : __33__612717884399(l_str___0[to958312080(l_pos___2)], "\t"))) {
						break  x_loop___0
					} else {
						l_pos___2 = __43154240798(l_pos___2, 1)
						continue
					}
				}
			} else {
				x_loop___1: while (true){
					if ((Object.is(l_pos___2, 0) ? true : is__45newline__45or__45tab4000992386(l_str___0[to958312080(__453248900816(l_pos___2, 1))]))) {
						break  x_loop___1
					} else {
						l_pos___2 = __453248900816(l_pos___2, 1)
						continue
					}
				}
			}
			;(void l_text__45area___1.setSelectionRange(to958312080(l_pos___2), to958312080(l_pos___2)))
			return true
		}
	}
}
// is-newline-or-tab file:///home/andy/games/keen.foo/script/keen-text.keen 269:1
const is__45newline__45or__45tab4000992386 = l_a___0 =>
	((l_a___0 === "\n") ? true : (l_a___0 === "\t"))
// indentation-at-selection file:///home/andy/games/keen.foo/script/keen-text.keen 272:1
const indentation__45at__45selection3457024395 = l_text__45area___1 => {
	const l_str___0 = to2628429697(to2585906292(l_text__45area___1.value))
	let l_pos___2 = min906971388(__45997287195(l_str___0.length, 1), to2305490556(l_text__45area___1.selectionStart))
	let l_first__45non__45space___3 = l_pos___2
	while (true){
		const l_temp___4 = (() => {
			const l_char___5 = subscript3957816670(l_str___0, l_pos___2)
			if ((__33__61934749230(l_char___5, 32) ? __33__61934749230(l_char___5, 9) : false)) {
				l_first__45non__45space___3 = l_pos___2
			}
			if ((l_pos___2 === 0)) {
				return to1851091310(subscript4065740503(l_str___0, __46__462451799117(l_pos___2, l_first__45non__45space___3)))
			} else {
				l_pos___2 = __45997287195(l_pos___2, 1)
				return ((__62__61724884600(l_pos___2, 0) ? __33__61934749230(subscript3957816670(l_str___0, l_pos___2), 10) : false) ? c____307() : to1851091310(subscript4065740503(l_str___0, __46__462451799117(__431111513593(l_pos___2, 1), l_first__45non__45space___3))))
			}
		})()
		const x_matched___0 = l_temp___4
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if ((x_matched___0 instanceof string2245870778)) {
				return l_temp___4
			} else {
				return _unreachable()
			}
		}
	}
}
// count-leading-tabs file:///home/andy/games/keen.foo/script/keen-text.keen 287:1
const count__45leading__45tabs4270683252 = l_a___0 =>
	size1763153932(take__45while1958204199(l_a___0, l_it___1 =>
				(l_it___1 === 9)))
// highlight file:///home/andy/games/keen.foo/script/keen-text.keen 290:1
const highlight3430570367 = (l_tokens___1, l_diagnostics___2, l_highlight__45div___0, l_text___3) => {
	remove__45all__45children1427536205(l_highlight__45div___0)
	__126__126__613836109245(l_highlight__45div___0, tokens__45and__45diags__45to__45nodes1533856328(l_tokens___1, l_diagnostics___2, l_text___3))
}
// get-diagnostics file:///home/andy/games/keen.foo/script/keen.keen 24:1
const get__45diagnostics3739161319 = (l_a___1, l_uri___2) => {
	let l_temp___3, x_matched___0, l_member2___0
	return ((l_member2___0 = subscript3410833398(l_a___1.diagnostics, l_uri___2)) , ((x_matched___0 = l_member2___0) , ((x_matched___0 instanceof none2082914084) ? c____287() : ((x_matched___0 instanceof Array) ? ((l_temp___3 = l_member2___0) , l_temp___3) : _unreachable()))))
}
// subscribe-to-diagnostics file:///home/andy/games/keen.foo/script/keen.keen 27:1
const subscribe__45to__45diagnostics3808235088 = (l_a___0, l_uri___1, l_handler___2) => {
	if (((typeof subscript3526536837(l_a___0["diagnostics-handlers"], l_uri___1)) === "function")) {
		throw new (error4175136409)(c____447())
	}
	set__45subscript1637165823(l_a___0["diagnostics-handlers"], l_uri___1, l_handler___2)
}
// make-keen-server file:///home/andy/games/keen.foo/script/keen.keen 34:1
const _async_make__45keen__45server4146103788 = async () => {
	let l_temp___9, l_destruct___14, x_matched___1, l_member2___13
	const l_start___0 = monotime57443273()
	const l_worker___1 = new (_global.Worker)("/worker.js", named__45new3386733465(c____270(), c____255()))
	const l_server___2 = new (keen__45server1921613421)(l_worker___1, list__45new141329638(c____295()), 1, list__45new2466680072(c____296()), list__45new1125262202(c____297()))
	const l_loaded___3 = new344482027()
	const l_on__45message___4 = async l_event___5 => {
		const l_object___6 = parse351043918(json1626967472(), to2585906292(l_event___5.data))
		if (has__45key1841251663(l_object___6, _symbol14)) {
			const l_id___7 = to1990640431(subscript2769485875(l_object___6, _symbol14))
			resolve3380212322((await (async () => {
					const l_member2___8 = remove3116715609(l_server___2.responses, l_id___7)
					const x_matched___0 = l_member2___8
					if ((x_matched___0 instanceof none2082914084)) {
						throw new (error4175136409)(c____522())
					} else {
						if ((x_matched___0 instanceof deferred779013352)) {
							return ((l_temp___9 = l_member2___8) , l_temp___9)
						} else {
							return _unreachable()
						}
					}
				})()), subscript2769485875(l_object___6, _symbol71))
		} else {
			const l_method___10 = to1539719180(subscript2769485875(l_object___6, _symbol15))
			const l_params___11 = subscript2769485875(l_object___6, _symbol16)
			if ((!__61__61718055455(l_method___10, _symbol73))) {
				throw new (todo3442278752)()
			}
			const l_p___12 = to852803870(l_params___11)
			set__45subscript1914484197(l_server___2.diagnostics, l_p___12.uri, l_p___12.diagnostics)
			;((l_member2___13 = subscript3526536837(l_server___2["diagnostics-handlers"], l_p___12.uri)) , ((x_matched___1 = l_member2___13) , ((x_matched___1 instanceof none2082914084) ? (void 0) : (((typeof x_matched___1) === "function") ? ((l_destruct___14 = l_member2___13) , (await l_destruct___14(l_p___12.diagnostics))) : _unreachable()))))
		}
	}
	l_worker___1.onmessage = to3274712937(l_on__45message___4)
	;(void deferred__45request1944733893(l_server___2, _symbol74, list__45new3723065633(c____286())))
	return l_server___2
}
// send-message file:///home/andy/games/keen.foo/script/keen.keen 69:1
const send__45message3093918132 = (l_server___3, l_method___1, l_params___2) => {
	const l_msg___0 = named__45new3677225874(c____268(), [to208883145(l_method___1), l_params___2])
	;(void l_server___3.worker.postMessage(to3382899672(to__45json1473113864(l_msg___0))))
}
// request file:///home/andy/games/keen.foo/script/keen.keen 73:1
const _async_request1960044345 = async (l_server___0, l_method___1, l_params___2) =>
	(await _async_await75745150(deferred__45request1944733893(l_server___0, l_method___1, l_params___2)))
// deferred-request file:///home/andy/games/keen.foo/script/keen.keen 76:1
const deferred__45request1944733893 = (l_server___1, l_method___3, l_params___4) => {
	const l_id___0 = l_server___1["next-id"]
	l_server___1["next-id"] = __431111513593(l_server___1["next-id"], 1)
	const l_msg___2 = named__45new3677225874(c____258(), [to115318792(l_id___0), to208883145(l_method___3), l_params___4])
	const l_deferred___5 = new1743322260()
	set__45subscript39501539(l_server___1.responses, l_id___0, l_deferred___5)
	;(void l_server___1.worker.postMessage(to3382899672(to__45json1473113864(l_msg___2))))
	return l_deferred___5
}
// open-file file:///home/andy/games/keen.foo/script/keen.keen 89:1
const open__45file72764180 = (l_a___3, l_uri___1, l_text___2) => {
	let l_params___0
	return ((l_params___0 = new (did__45open__45text__45document__45params3876058752)(new (text__45document__45item915240927)(l_uri___1, l_text___2))) , send__45message3093918132(l_a___3, _symbol37, to3081466243(l_params___0)))
}
// get-hover file:///home/andy/games/keen.foo/script/keen.keen 93:1
const _async_get__45hover3641866990 = async (l_a___4, l_uri___1, l_position___2) => {
	let l_res___3, l_params___0
	return ((l_params___0 = new (hover__45params2721697647)(new (text__45document__45position__45params3285956098)(new (text__45document__45identifier2135817593)(l_uri___1), l_position___2))) , ((l_res___3 = (await _async_request1960044345(l_a___4, _symbol28, to890180541(l_params___0)))) , (__61__613716497912(l_res___3, new (json3023828771)(0, c____306())) ? c____322() : to845310736(subscript2769485875(subscript2769485875(l_res___3, _symbol29), _symbol7)))))
}
// get-tokens file:///home/andy/games/keen.foo/script/keen.keen 102:1
const _async_get__45tokens1604512102 = async (l_a___3, l_uri___1) => {
	let l_data____4, l_encoded___2, l_params___0
	return ((l_params___0 = new (semantic__45tokens__45params3416879501)(new (text__45document__45identifier2135817593)(l_uri___1))) , ((l_encoded___2 = (await _async_request1960044345(l_a___3, _symbol35, to550685511(l_params___0)))) , ((l_data____4 = to3292698306(subscript2769485875(l_encoded___2, _symbol36))) , to3188756474(new (decode__45semantic__45tokens2349719313)(new (semantic__45tokens2829913404)(l_data____4))))))
}
// syntax-translate file:///home/andy/games/keen.foo/script/keen.keen 109:1
const _async_syntax__45translate406874026 = async (l_server___5, l_from__45lang___2, l_source___1, l_to__45lang___3) => {
	let l_response___4, l_params___0
	return ((l_params___0 = new (syntax__45translate__45params3546121244)(l_source___1, l_from__45lang___2, l_to__45lang___3)) , ((l_response___4 = to1314911029((await _async_request1960044345(l_server___5, _symbol10, to769877828(l_params___0))))) , (any1469364605(l_response___4.diagnostics) ? interpolate3208339971([c____382(), interpolate__45value4064333482(subscript2326474241(l_response___4.diagnostics, 0))]) : l_response___4.output)))
}
// build-js-script file:///home/andy/games/keen.foo/script/keen.keen 125:1
const _async_build__45js__45script2799007201 = async (l_server___3, l_main__45kind___1, l_main___2) => {
	let l_params___0
	return ((l_params___0 = new (build__45js__45script__45params3359172655)(l_main__45kind___1, l_main___2, list__45new3522051795([l_main___2]))) , to4113249814((await _async_request1960044345(l_server___3, _symbol52, to1997981112(l_params___0)))))
}
// define-loading-spinner-element file:///home/andy/games/keen.foo/script/loading-spinner.keen 5:1
const define__45loading__45spinner__45element1241836479 = () =>
	define__45custom__45element301091642(c____398(), new3292231944(c____399()), l_x___0 =>
			__126__61666547215(shadow__45root975114786(l_x___0), loading__45div1674702714()))
// create-loading-spinner file:///home/andy/games/keen.foo/script/loading-spinner.keen 9:1
const create__45loading__45spinner2379004346 = () =>
	create__45node616468159(_symbol55)
// loading-div file:///home/andy/games/keen.foo/script/loading-spinner.keen 12:1
const loading__45div1674702714 = () =>
	create__45div1449965713(c____400(), c____275().map(l_class__45name___0 =>
				create__45div4154923196(l_class__45name___0)))
// to file:///home/andy/games/keen.foo/script/syntax-translate-protocol.keen 1:1
const to769877828 = l_a___0 =>
	new (json3023828771)(7, new (json__45object1179919109)(c____257(), [to4268475670(l_a___0["from-language"]), to1103382995(l_a___0.source), to4268475670(l_a___0["to-language"])]))
// == file:///home/andy/games/keen.foo/script/syntax-translate-protocol.keen 2:1
const __61__614030729273 = (l_a___0, l_b___1) =>
	(l_a___0 === l_b___1)
// to file:///home/andy/games/keen.foo/script/syntax-translate-protocol.keen 2:1
const to4268475670 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? new (json3023828771)(5, c____380()) : ((x_matched___0 === 1) ? new (json3023828771)(5, c____381()) : _unreachable())))
}
// to file:///home/andy/games/keen.foo/script/syntax-translate-protocol.keen 3:1
const to1314911029 = l_a___0 =>
	new (syntax__45translate__45result3584454574)(to845310736(subscript2769485875(l_a___0, _symbol8)), to3292698306(subscript2769485875(l_a___0, _symbol9)))
// define-syntax-translate-element file:///home/andy/games/keen.foo/script/syntax-translate.keen 9:1
const _async_define__45syntax__45translate__45element4198762002 = async l_keen___2 => {
	(await _async_define__45custom__45element2346176678(c____318(), async l_it___0 =>
			(void 0)))
	;(await _async_define__45custom__45element301091642(c____319(), c____299(), async l_x___1 =>
			__126__61666547215(shadow__45root975114786(l_x___1), (await _async_make__45div1452174105(l_keen___2, child__45nodes3586611620(as__45node1179244723(l_x___1)))))))
}
// make-div file:///home/andy/games/keen.foo/script/syntax-translate.keen 14:1
const _async_make__45div1452174105 = async (l_keen___2, l_child__45nodes___0) =>
	create__45node3021507421(_symbol0, list__45new3679651572(c____289()), c____322(), list__45new574588355([create__45node3021507421(_symbol1, list__45new3679651572(c____289()), c____322(), list__45new574588355([create__45node3021507421(_symbol2, list__45new3679651572(c____289()), c____322(), list__45new574588355([th1493135430(c____323()), th1493135430(c____324())]))])), create__45node3021507421(_symbol3, list__45new3679651572(c____289()), c____322(), (await _async_for__45option2130283245(l_child__45nodes___0, async l_x___1 =>
							(is__45text__45node1993477031(l_x___1) ? new (option2299041553)(0, c____307()) : new (option2299041553)(1, (await _async_create__45row420287706(l_keen___2, get__45child__45text3249659505(l_x___1))))))))]))
// create-row file:///home/andy/games/keen.foo/script/syntax-translate.keen 24:1
const _async_create__45row420287706 = async (l_server___10, l_initial__45keen__45source___13) => {
	let l_temp___4, l_result___9, l_input__45value___8
	let l_inputs___0 = c____253()
	const l_input__45for__45lang___1 = async l_lang___2 =>
		subscript1771739119(l_inputs___0, (await (async () => {
				const l_member2___3 = index__45of639584324(c____290(), l_lang___2)
				const x_matched___0 = l_member2___3
				if ((x_matched___0 instanceof none2082914084)) {
					throw new (error4175136409)(c____327())
				} else {
					if (((typeof x_matched___0) === "number")) {
						return ((l_temp___4 = l_member2___3) , l_temp___4)
					} else {
						return _unreachable()
					}
				}
			})()))
	const l_on__45input___5 = async l_input__45lang___6 => {
		for (const l_output__45lang___7 of c____290()) {
			(__61__614030729273(l_output__45lang___7, l_input__45lang___6) ? (void 0) : ((l_input__45value___8 = value151690680((await l_input__45for__45lang___1(l_input__45lang___6)))) , ((l_result___9 = (await _async_syntax__45translate406874026(l_server___10, l_input__45lang___6, l_input__45value___8, l_output__45lang___7))) , set__45value1083962113((await l_input__45for__45lang___1(l_output__45lang___7)), l_result___9))))
		}
	}
	l_inputs___0 = (await Array.fromAsync(c____290(), async l_lang___11 =>
			create__45input__45text2119725182(async l_it___12 =>
					(await l_on__45input___5(l_lang___11)), (__61__614030729273(l_lang___11, 1) ? l_initial__45keen__45source___13 : c____322()))))
	;(await l_on__45input___5(1))
	return create__45node3021507421(_symbol2, list__45new3679651572(c____289()), c____322(), (await Array.fromAsync(l_inputs___0, async l_x___14 =>
				create__45node3021507421(_symbol4, list__45new3679651572(c____289()), c____322(), list__45new574588355([l_x___14])))))
}
// th file:///home/andy/games/keen.foo/script/syntax-translate.keen 50:1
const th1493135430 = l_text___0 =>
	create__45node3021507421(_symbol17, list__45new3679651572(c____289()), c____322(), list__45new574588355([create__45text__45node1193722309(l_text___0)]))
// define-theme-switcher-element file:///home/andy/games/keen.foo/script/theme-switcher.keen 7:1
const define__45theme__45switcher__45element2609471998 = () =>
	define__45custom__45element301091642(c____499(), new3292231944(c____500()), l_x___0 =>
			show__45icon4286587892(shadow__45root975114786(l_x___0), get__45theme3375600966()))
// show-icon file:///home/andy/games/keen.foo/script/theme-switcher.keen 11:1
const show__45icon4286587892 = (l_shadow__45root___5, l_theme___1) => {
	const l_res___0 = icon1409787204(l_theme___1)
	const l_on__45click___2 = l_args___3 => {
		const l_new__45theme___4 = opposite2957995987(l_theme___1)
		set__45theme3265311510(l_new__45theme___4)
		show__45icon4286587892(l_shadow__45root___5, l_new__45theme___4)
	}
	l_res___0.onclick = to3274712937(l_on__45click___2)
	set__45children2736312189(l_shadow__45root___5, list__45new574588355([l_res___0]))
}
// to file:///home/andy/games/keen.foo/script/theme-switcher.keen 21:1
const to1425906858 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? _symbol63 : ((x_matched___0 === 1) ? _symbol64 : _unreachable())))
}
// == file:///home/andy/games/keen.foo/script/theme-switcher.keen 21:1
const __61__613796645579 = (l_a___0, l_b___1) =>
	(l_a___0 === l_b___1)
// to file:///home/andy/games/keen.foo/script/theme-switcher.keen 21:1
const to2215091513 = l_a___0 => {
	switch (l_a___0) {
		case _symbol63:{
			return 0
		}
		case _symbol64:{
			return 1
		}
		default:{
			return c____307()
		}
	}
}
// to file:///home/andy/games/keen.foo/script/theme-switcher.keen 22:1
const to2505235560 = l_a___0 =>
	to2215091513(to2584131937(l_a___0))
// to file:///home/andy/games/keen.foo/script/theme-switcher.keen 24:1
const to2073693879 = l_a___0 =>
	to649144722(to1425906858(l_a___0))
// opposite file:///home/andy/games/keen.foo/script/theme-switcher.keen 26:1
const opposite2957995987 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? 1 : ((x_matched___0 === 1) ? 0 : _unreachable())))
}
// icon file:///home/andy/games/keen.foo/script/theme-switcher.keen 33:1
const icon1409787204 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? moon__45icon3864372225() : ((x_matched___0 === 1) ? sun__45icon305769836() : _unreachable())))
}
// get-theme file:///home/andy/games/keen.foo/script/theme-switcher.keen 40:1
const get__45theme3375600966 = () => {
	let l_destruct___2, x_matched___0, l_member2___1, l_temp___6, x_matched___1, l_member2___5
	const l_from__45local___0 = ((l_member2___1 = subscript1537053863(c____303(), _symbol62)) , ((x_matched___0 = l_member2___1) , ((x_matched___0 instanceof none2082914084) ? c____307() : ((x_matched___0 instanceof string2245870778) ? ((l_destruct___2 = l_member2___1) , to2505235560(l_destruct___2)) : _unreachable()))))
	const l_sys___3 = system__45theme3639738908()
	;(__61__611911922094(l_from__45local___0, l_sys___3) ? __45__611220102453(c____303(), _symbol62) : (void 0))
	const l_res___4 = ((l_member2___5 = l_from__45local___0) , ((x_matched___1 = l_member2___5) , ((x_matched___1 instanceof none2082914084) ? system__45theme3639738908() : (((typeof x_matched___1) === "number") ? ((l_temp___6 = l_member2___5) , l_temp___6) : _unreachable()))))
	update__45root__45for__45theme3878668560(l_res___4)
	return l_res___4
}
// set-theme file:///home/andy/games/keen.foo/script/theme-switcher.keen 49:1
const set__45theme3265311510 = l_a___0 => {
	(__61__613796645579(l_a___0, system__45theme3639738908()) ? __45__611220102453(c____303(), _symbol62) : set__45subscript2861714104(c____303(), _symbol62, to2073693879(l_a___0)))
	update__45root__45for__45theme3878668560(l_a___0)
}
// update-root-for-theme file:///home/andy/games/keen.foo/script/theme-switcher.keen 56:1
const update__45root__45for__45theme3878668560 = l_a___1 => {
	let x_matched___0, l_root___0
	return ((l_root___0 = document2587895802().documentElement) , ((x_matched___0 = l_a___1) , ((x_matched___0 === 0) ? set__45classes3002657799(l_root___0, c____280()) : ((x_matched___0 === 1) ? set__45classes3002657799(l_root___0, c____281()) : _unreachable()))))
}
// subscript file:///home/andy/games/keen.foo/script/theme-switcher.keen 66:1
const subscript1537053863 = (l_ignore___2, l_name___1) => {
	let l_res___0
	return ((l_res___0 = _global.localStorage.getItem(to1485125734(l_name___1))) , ((l_res___0 === null) ? c____307() : to2585906292(l_res___0)))
}
// set-subscript file:///home/andy/games/keen.foo/script/theme-switcher.keen 71:1
const set__45subscript2861714104 = (l_ignore___2, l_name___0, l_value___1) => {
	(void _global.localStorage.setItem(to1485125734(l_name___0), to3382899672(l_value___1)))
}
// -= file:///home/andy/games/keen.foo/script/theme-switcher.keen 75:1
const __45__611220102453 = (l_ignore___1, l_name___0) => {
	(void _global.localStorage.removeItem(to1485125734(l_name___0)))
}
// system-theme file:///home/andy/games/keen.foo/script/theme-switcher.keen 79:1
const system__45theme3639738908 = () =>
	(to3736759396(_global.matchMedia("(prefers-color-scheme: dark)").matches) ? 0 : 1)
// new file:///home/andy/games/keen.foo/script/util/util.keen 9:1
const new3211280280 = l_time___0 =>
	new (debouncer2768211940)(milliseconds1022831454(l_time___0), null)
// with-block file:///home/andy/games/keen.foo/script/util/util.keen 12:1
const with__45block2524277625 = (l_a___0, l_action___1) => {
	(void _global.clearTimeout(l_a___0.timeout))
	l_a___0.timeout = _global.setTimeout(to3844438486(l_action___1), to958312080(l_a___0.msec))
}
// get-child-text file:///home/andy/games/keen.foo/script/util/util.keen 17:1
const get__45child__45text3249659505 = l_node___1 => {
	const l_child__45nodes___0 = child__45nodes3586611620(l_node___1)
	if ((!(l_child__45nodes___0.length === 1))) {
		throw new (error4175136409)(c____325())
	}
	return get__45text__45from__45node2854307100(subscript1771739119(l_child__45nodes___0, 0))
}
// get-text-from-node file:///home/andy/games/keen.foo/script/util/util.keen 21:1
const get__45text__45from__45node2854307100 = l_node___0 => {
	if ((!(l_node___0 instanceof _global.Text))) {
		throw new (error4175136409)(c____326())
	}
	return to2585906292(l_node___0.data)
}
// to file:///home/andy/games/keen/app/ide/get-tokens.keen 98:1
const to3188756474 = l_a___0 =>
	map3032870626(l_a___0, l_it___1 =>
			l_it___1)
// size file:///home/andy/games/keen/app/ide/get-tokens.keen 100:1
const size2382664655 = l_a___0 =>
	__471416517417(l_a___0.inner.data_.length, 5)
// some file:///home/andy/games/keen/app/ide/get-tokens.keen 102:1
const some3108697648 = (l_a___4, l_f___12) => {
	let l_temp___11
	let l_line___0 = 0
	let l_character___1 = 0
	let l_i___2 = 0
	const l_data____3 = l_a___4.inner.data_
	while (true){
		const l_temp___5 = (() => {
			if ((l_i___2 === l_data____3.length)) {
				return false
			} else {
				const l_delta__45line___6 = subscript2326474241(l_data____3, l_i___2)
				const l_delta__45character___7 = subscript2326474241(l_data____3, __431111513593(l_i___2, 1))
				const l_length___8 = subscript2326474241(l_data____3, __431111513593(l_i___2, 2))
				const l_type___9 = (() => {
					const l_member2___10 = to3068581278(BigInt(subscript2326474241(l_data____3, __431111513593(l_i___2, 3))))
					const x_matched___0 = l_member2___10
					if ((x_matched___0 instanceof none2082914084)) {
						throw new (error4175136409)(c____457())
					} else {
						if (((typeof x_matched___0) === "number")) {
							return ((l_temp___11 = l_member2___10) , l_temp___11)
						} else {
							return _unreachable()
						}
					}
				})()
				if ((l_delta__45line___6 === 0)) {
					l_character___1 = __431111513593(l_character___1, l_delta__45character___7)
				} else {
					l_line___0 = __431111513593(l_line___0, l_delta__45line___6)
					l_character___1 = l_delta__45character___7
				}
				if (l_f___12(new (token2114066931)(l_line___0, l_character___1, l_length___8, l_type___9))) {
					return true
				} else {
					l_i___2 = __431111513593(l_i___2, 5)
					return c____307()
				}
			}
		})()
		const x_matched___1 = l_temp___5
		if ((x_matched___1 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___1) === "boolean")) {
				return l_temp___5
			} else {
				return _unreachable()
			}
		}
	}
}
// to file:///home/andy/games/keen/app/ide/get-tokens.keen 126:1
const to3068581278 = l_a___0 =>
	((Number((l_a___0 & 255n)) < 14) ? Number((l_a___0 & 255n)) : c____307())
// to file:///home/andy/games/keen/app/ide/get-tokens.keen 143:1
const to1333768229 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? c____425() : ((x_matched___0 === 1) ? c____426() : ((x_matched___0 === 2) ? c____427() : ((x_matched___0 === 3) ? c____428() : ((x_matched___0 === 4) ? c____429() : ((x_matched___0 === 5) ? c____430() : ((x_matched___0 === 6) ? c____431() : ((x_matched___0 === 7) ? c____432() : ((x_matched___0 === 8) ? c____433() : ((x_matched___0 === 9) ? c____434() : ((x_matched___0 === 10) ? c____396() : ((x_matched___0 === 11) ? c____435() : ((x_matched___0 === 12) ? c____436() : ((x_matched___0 === 13) ? c____437() : _unreachable())))))))))))))))
}
// to file:///home/andy/games/keen/app/model/lsp.keen 8:1
const to1403241259 = l_a___0 =>
	new (json3023828771)(7, new (json__45object1179919109)(c____263(), [to3400924814(l_a___0.uri)]))
// to file:///home/andy/games/keen/app/model/lsp.keen 10:1
const to1032980476 = l_a___0 =>
	new (json3023828771)(7, new (json__45object1179919109)(c____265(), [to3874976917(l_a___0.position), to1403241259(l_a___0.textDocument)]))
// to file:///home/andy/games/keen/app/model/lsp.keen 221:1
const to1997981112 = l_a___0 =>
	new (json3023828771)(7, new (json__45object1179919109)(c____269(), [to792673025(l_a___0.diagnosticsOnlyForUris), to2857782711(l_a___0["main-kind"]), to3400924814(l_a___0.uri)]))
// to file:///home/andy/games/keen/app/model/lsp.keen 225:1
const to2857782711 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? new (json3023828771)(5, c____475()) : ((x_matched___0 === 1) ? new (json3023828771)(5, c____476()) : _unreachable())))
}
// to file:///home/andy/games/keen/app/model/lsp.keen 226:1
const to4113249814 = l_a___0 =>
	new (build__45js__45script__45result1266621962)(to845310736(subscript2769485875(l_a___0, _symbol9)), to793998973(subscript2769485875(l_a___0, _symbol51)))
// == file:///home/andy/games/keen/app/model/lsp.keen 236:1
const __61__613410057286 = (l_a___0, l_b___1) =>
	(l_a___0 === l_b___1)
// to file:///home/andy/games/keen/app/model/lsp.keen 308:1
const to3081466243 = l_a___0 =>
	new (json3023828771)(7, new (json__45object1179919109)(c____266(), [to4113099014(l_a___0.textDocument)]))
// to file:///home/andy/games/keen/app/model/lsp.keen 314:1
const to4113099014 = l_a___0 =>
	new (json3023828771)(7, new (json__45object1179919109)(c____267(), [to1103382995(l_a___0.text), to3400924814(l_a___0.uri)]))
// to file:///home/andy/games/keen/app/model/lsp.keen 320:1
const to890180541 = l_a___0 =>
	to1032980476(l_a___0.params)
// to file:///home/andy/games/keen/app/model/lsp.keen 329:1
const to852803870 = l_a___0 =>
	new (publish__45diagnostics__45params607190011)(to360585437(subscript2769485875(l_a___0, _symbol30)), to332791575(subscript2769485875(l_a___0, _symbol9)))
// to file:///home/andy/games/keen/app/model/lsp.keen 344:1
const to4283647128 = l_a___0 =>
	new (lsp__45diagnostic2223204910)(to1631293499(subscript2769485875(l_a___0, _symbol77)), to3110048805(subscript2769485875(l_a___0, _symbol78)), to845310736(subscript2769485875(l_a___0, _symbol79)))
// to file:///home/andy/games/keen/app/model/lsp.keen 348:1
const to3149808031 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = Number((l_a___0 & 255n))) , ((x_matched___0 === 1) ? 1 : ((x_matched___0 === 2) ? 2 : ((x_matched___0 === 3) ? 3 : ((x_matched___0 === 4) ? 4 : c____307())))))
}
// == file:///home/andy/games/keen/app/model/lsp.keen 348:1
const __61__611885534747 = (l_a___0, l_b___1) =>
	(l_a___0 === l_b___1)
// to file:///home/andy/games/keen/app/model/lsp.keen 355:1
const to3110048805 = l_a___1 => {
	let l_temp___2
	const l_member2___0 = to3149808031(BigInt(to1990640431(l_a___1)))
	const x_matched___0 = l_member2___0
	if ((x_matched___0 instanceof none2082914084)) {
		throw new (error4175136409)(c____525())
	} else {
		if (((typeof x_matched___0) === "number")) {
			return ((l_temp___2 = l_member2___0) , l_temp___2)
		} else {
			return _unreachable()
		}
	}
}
// to file:///home/andy/games/keen/app/model/lsp.keen 389:1
const to550685511 = l_a___0 =>
	new (json3023828771)(7, new (json__45object1179919109)(c____266(), [to1403241259(l_a___0.textDocument)]))
// == file:///home/andy/games/keen/app/model/source-range.keen 63:1
const __61__611161506046 = (l_a___0, l_b___1) =>
	((l_a___0.line === l_b___1.line) ? (l_a___0.character === l_b___1.character) : false)
// <=> file:///home/andy/games/keen/app/model/source-range.keen 63:1
const __60__61__623491143578 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0.line, l_b___1.line)) , ((x_matched___0 === 0) ? 0 : ((x_matched___0 === 1) ? _compareIntegral(l_a___0.character, l_b___1.character) : ((x_matched___0 === 2) ? 2 : _unreachable()))))
}
// to file:///home/andy/games/keen/app/model/source-range.keen 63:1
const to4256155742 = l_a___0 =>
	new (line__45and__45character1481230736)(to1990640431(subscript2769485875(l_a___0, _symbol32)), to1990640431(subscript2769485875(l_a___0, _symbol31)))
// to file:///home/andy/games/keen/app/model/source-range.keen 63:1
const to3874976917 = l_a___0 =>
	new (json3023828771)(7, new (json__45object1179919109)(c____264(), [to115318792(l_a___0.character), to115318792(l_a___0.line)]))
// to file:///home/andy/games/keen/app/model/source-range.keen 111:1
const to1631293499 = l_a___0 =>
	new (line__45and__45character__45range2984750005)(to4256155742(subscript2769485875(l_a___0, _symbol75)), to4256155742(subscript2769485875(l_a___0, _symbol76)))
// has-pos file:///home/andy/games/keen/app/model/source-range.keen 114:1
const has__45pos516017817 = (l_range___0, l_pos___1) =>
	(__60__611731619377(l_range___0.start, l_pos___1) ? __603415715694(l_pos___1, l_range___0.end) : false)
// == file:///home/andy/games/keen/app/model/uri.keen 126:1
const __61__611929694764 = (l_a___0, l_b___1) =>
	__61__61718055455(l_a___0.to, l_b___1.to)
// hash file:///home/andy/games/keen/app/model/uri.keen 126:1
const hash4248048702 = (l_a___0, l_b___1) => {
	hash2761836969(l_a___0.to, l_b___1)
}
// to file:///home/andy/games/keen/app/model/uri.keen 145:1
const to3400924814 = l_a___0 =>
	to208883145(l_a___0.to)
// to file:///home/andy/games/keen/app/model/uri.keen 147:1
const to360585437 = l_a___0 =>
	new (uri3619067211)(to1539719180(l_a___0))
// parse-uri file:///home/andy/games/keen/app/model/uri.keen 228:1
const parse__45uri4018911369 = l_a___1 => {
	let l_schema___5, l_start___4
	const l_chars___0 = to2628429697(l_a___1)
	const l_temp___2 = index__45of1218548288(l_chars___0, 58)
	const l_colon___3 = l_temp___2
	if ((!((typeof l_temp___2) === "number"))) {
		throw new (parse__45error4189383028)(l_a___1, 0, c____486())
	}
	return ((l_start___4 = (((__602180318207(l_colon___3, __45997287195(l_chars___0.length, 2)) ? (subscript3957816670(l_chars___0, __431111513593(l_colon___3, 1)) === 47) : false) ? (subscript3957816670(l_chars___0, __431111513593(l_colon___3, 2)) === 47) : false) ? __431111513593(l_colon___3, 3) : __431111513593(l_colon___3, 1))) , ((l_schema___5 = to1851091310(subscript4065740503(l_chars___0, __46__462451799117(0, l_start___4)))) , (((__61__612506082126(l_schema___5, c____493()) ? __62__61724884600(l_chars___0.length, __431111513593(l_start___4, 5)) : false) ? __61__612387200646(to3613751888(subscript4065740503(l_chars___0, __46__462451799117(l_start___4, __431111513593(l_start___4, 5)))), c____186()) : false) ? new (uri3619067211)(to2584131937(lower__45case3687683625(l_a___1))) : new (uri3619067211)(to2584131937(l_a___1)))))
}
// << file:///home/andy/games/keen/lib/bits.keen 123:1
const __60__60929357842 = (l_a___1, l_b___0) =>
	(__603813600464(l_b___0, 8) ? ((l_a___1 << l_b___0) & 255) : 0)
// << file:///home/andy/games/keen/lib/bits.keen 129:1
const __60__602633832601 = (l_a___1, l_b___0) =>
	(__602592291231(l_b___0, 32) ? ((l_a___1 << l_b___0) >>> 0) : 0)
// << file:///home/andy/games/keen/lib/bits.keen 132:1
const __60__603841451399 = (l_a___1, l_b___0) =>
	(__603690672977(l_b___0, 64n) ? BigInt.asUintN(64, (l_a___1 << l_b___0)) : 0n)
// >> file:///home/andy/games/keen/lib/bits.keen 144:1
const __62__622657409940 = (l_a___1, l_b___0) =>
	(__602592291231(l_b___0, 32) ? ((l_a___1 >>> l_b___0) >>> 0) : 0)
// bits-intersect file:///home/andy/games/keen/lib/bits.keen 165:1
const bits__45intersect129871475 = (l_a___0, l_b___1) =>
	__33__611867404722(((l_a___0 & l_b___1) >>> 0), 0)
// has-all-bits file:///home/andy/games/keen/lib/bits.keen 171:1
const has__45all__45bits3947686905 = (l_a___0, l_b___1) =>
	((l_a___0 & l_b___1) === l_b___1)
// bits-cat file:///home/andy/games/keen/lib/bits.keen 282:1
const bits__45cat4221119060 = (l_a___0, l_b___1) =>
	(__60__603841451399(BigInt(l_a___0), 32n) | BigInt(l_b___1))
// low-n-bits file:///home/andy/games/keen/lib/bits.keen 312:1
const low__45n__45bits597136961 = l_n___0 => {
	if ((!__60__614120491547(l_n___0, 32))) {
		throw arithmetic__45error3928167685(c____360(), new (number3467695210)(0, BigInt(l_n___0)))
	}
	return ((l_n___0 === 32) ? 4.294967295E9 : ((((1 << l_n___0) >>> 0) - 1) >>> 0))
}
// round-up-to-power-of-two file:///home/andy/games/keen/lib/bits.keen 373:1
const round__45up__45to__45power__45of__45two744736890 = l_a___1 => {
	let l_x___0 = ((l_a___1 - 1) >>> 0)
	l_x___0 = ((l_x___0 | ((l_x___0 >>> 1) >>> 0)) >>> 0)
	l_x___0 = ((l_x___0 | ((l_x___0 >>> 2) >>> 0)) >>> 0)
	l_x___0 = ((l_x___0 | ((l_x___0 >>> 4) >>> 0)) >>> 0)
	l_x___0 = ((l_x___0 | ((l_x___0 >>> 8) >>> 0)) >>> 0)
	l_x___0 = ((l_x___0 | ((l_x___0 >>> 16) >>> 0)) >>> 0)
	l_x___0 = ((l_x___0 + 1) >>> 0)
	if ((l_x___0 === 0)) {
		if ((!(l_a___1 === 0))) {
			throw arithmetic__45error3928167685(c____369(), new (number3467695210)(0, BigInt(l_a___1)))
		}
		return 1
	} else {
		return l_x___0
	}
}
// to-array-view@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view3977592904 = l_a___0 =>
	new (array__45view2487830349)(l_a___0, 0, l_a___0.length)
// to-array-view@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view1214307661 = l_a___0 =>
	new (array__45view768791590)(l_a___0, 0, l_a___0.length)
// to-array-view@(write) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view918219267 = l_a___0 =>
	new (array__45view1086139444)(l_a___0, 0, l_a___0.length)
// to-array-view@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view4079858337 = l_a___0 =>
	new (array__45view2979500598)(l_a___0, 0, l_a___0.length)
// to-array-view@(symbol) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view626268209 = l_a___0 =>
	new (array__45view2428339610)(l_a___0, 0, l_a___0.length)
// to-array-view@(char8) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view3595367460 = l_a___0 =>
	new (array__45view3308382370)(l_a___0, 0, l_a___0.length)
// to-array-view@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view3154170536 = l_a___0 =>
	new (array__45view2839973619)(l_a___0, 0, l_a___0.length)
// to-array-view@(container) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view2145196238 = l_a___0 =>
	new (array__45view2062069736)(l_a___0, 0, l_a___0.length)
// to-array-view@(json) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view1095436248 = l_a___0 =>
	new (array__45view1548048669)(l_a___0, 0, l_a___0.length)
// to-array-view@(js-any) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view1184452394 = l_a___0 =>
	new (array__45view1833126106)(l_a___0, 0, l_a___0.length)
// to-array-view@((string, void) tuple2 option) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view2187299192 = l_a___0 =>
	new (array__45view2845579581)(l_a___0, 0, l_a___0.length)
// to-array-view@(char8 array) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view1767350890 = l_a___0 =>
	new (array__45view2754474626)(l_a___0, 0, l_a___0.length)
// to-array-view@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view1203102638 = l_a___0 =>
	new (array__45view3075609803)(l_a___0, 0, l_a___0.length)
// to-array-view@(nat32) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view2140405017 = l_a___0 =>
	new (array__45view1972923426)(l_a___0, 0, l_a___0.length)
// to-array-view@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view1373033965 = l_a___0 =>
	new (array__45view2468091663)(l_a___0, 0, l_a___0.length)
// to-array-view@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view2195292310 = l_a___0 =>
	new (array__45view4071199571)(l_a___0, 0, l_a___0.length)
// to-array-view@(char32) file:///home/andy/games/keen/lib/col/array.keen 21:1
const to__45array__45view121530625 = l_a___0 =>
	new (array__45view198522282)(l_a___0, 0, l_a___0.length)
// subscript@((symbol, json) node) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript771912223 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript3687300058 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(js-any array-view) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript3347093401 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(to-kid-result) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript1289619325 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript1521655738 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript3696204314 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(json) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript514285693 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(string) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript431625604 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript3338462868 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(char8 array array-view) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript400262724 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(char8 array-view) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript127700455 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@((json, json) tuple2) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript3601262350 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@((symbol, string) node) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript1462125161 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) node) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript1672116537 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(language) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript724467514 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(nat32) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript2326474241 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(js-any) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript1771739119 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(symbol) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript2556338432 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(char8 array) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript1787594676 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(char8) file:///home/andy/games/keen/lib/col/array.keen 30:1
const subscript3957816670 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(char8) file:///home/andy/games/keen/lib/col/array.keen 40:1
const subscript2923090963 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, size1763153932(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size1763153932(l_a___1))
	}
	return l_a___1.inner[__431111513593(l_a___1.low, l_index___0)]
}
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/array.keen 40:1
const subscript1128293028 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, size841731723(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size841731723(l_a___1))
	}
	return l_a___1.inner[__431111513593(l_a___1.low, l_index___0)]
}
// subscript@(symbol) file:///home/andy/games/keen/lib/col/array.keen 40:1
const subscript152787494 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, size3194416596(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size3194416596(l_a___1))
	}
	return l_a___1.inner[__431111513593(l_a___1.low, l_index___0)]
}
// subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/array.keen 40:1
const subscript1534365554 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, size2521472917(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size2521472917(l_a___1))
	}
	return l_a___1.inner[__431111513593(l_a___1.low, l_index___0)]
}
// subscript@(json) file:///home/andy/games/keen/lib/col/array.keen 40:1
const subscript3195327697 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, size3742624519(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size3742624519(l_a___1))
	}
	return l_a___1.inner[__431111513593(l_a___1.low, l_index___0)]
}
// subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/array.keen 40:1
const subscript2193624788 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, size1591420419(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size1591420419(l_a___1))
	}
	return l_a___1.inner[__431111513593(l_a___1.low, l_index___0)]
}
// subscript@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/array.keen 44:1
const subscript3970491421 = (l_a___0, l_indices___1) =>
	subscript138927562(to__45array__45view4079858337(l_a___0), l_indices___1)
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/array.keen 44:1
const subscript1626346138 = (l_a___0, l_indices___1) =>
	subscript1949026524(to__45array__45view2195292310(l_a___0), l_indices___1)
// subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/array.keen 44:1
const subscript516474620 = (l_a___0, l_indices___1) =>
	subscript3967686030(to__45array__45view3154170536(l_a___0), l_indices___1)
// subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/array.keen 44:1
const subscript4267189810 = (l_a___0, l_indices___1) =>
	subscript3056293940(to__45array__45view1373033965(l_a___0), l_indices___1)
// subscript@(char8) file:///home/andy/games/keen/lib/col/array.keen 44:1
const subscript4065740503 = (l_a___0, l_indices___1) =>
	subscript331493665(to__45array__45view3595367460(l_a___0), l_indices___1)
// subscript@(char32) file:///home/andy/games/keen/lib/col/array.keen 44:1
const subscript3355953907 = (l_a___0, l_indices___1) =>
	subscript1535932317(to__45array__45view121530625(l_a___0), l_indices___1)
// subscript@(char8 array) file:///home/andy/games/keen/lib/col/array.keen 44:1
const subscript1973037180 = (l_a___0, l_indices___1) =>
	subscript1572370732(to__45array__45view1767350890(l_a___0), l_indices___1)
// subscript@(char8 array) file:///home/andy/games/keen/lib/col/array.keen 46:1
const subscript1572370732 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size1415619227(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size1415619227(l_a___1))
	}
	return new (array__45view2754474626)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/array.keen 46:1
const subscript1949026524 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size841731723(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size841731723(l_a___1))
	}
	return new (array__45view4071199571)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/array.keen 46:1
const subscript138927562 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size3336892795(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size3336892795(l_a___1))
	}
	return new (array__45view2979500598)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/array.keen 46:1
const subscript3967686030 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size2521472917(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size2521472917(l_a___1))
	}
	return new (array__45view2839973619)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(char32) file:///home/andy/games/keen/lib/col/array.keen 46:1
const subscript1535932317 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size2291045464(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size2291045464(l_a___1))
	}
	return new (array__45view198522282)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(char8) file:///home/andy/games/keen/lib/col/array.keen 46:1
const subscript331493665 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size1763153932(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size1763153932(l_a___1))
	}
	return new (array__45view3308382370)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/array.keen 46:1
const subscript3056293940 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size1591420419(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size1591420419(l_a___1))
	}
	return new (array__45view2468091663)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(char8 array) file:///home/andy/games/keen/lib/col/array.keen 50:1
const subscript3357564265 = (l_a___0, l_index___1) =>
	subscript1787594676(l_a___0, to__45index3828846467(l_a___0, l_index___1))
// subscript@(char8 array) file:///home/andy/games/keen/lib/col/array.keen 55:1
const subscript1346698454 = (l_a___0, l_indices___1) =>
	subscript2665118583(to__45array__45view1767350890(l_a___0), l_indices___1)
// subscript@(char8) file:///home/andy/games/keen/lib/col/array.keen 55:1
const subscript1174085666 = (l_a___0, l_indices___1) =>
	subscript4233044249(to__45array__45view3595367460(l_a___0), l_indices___1)
// subscript@(char8 array) file:///home/andy/games/keen/lib/col/array.keen 57:1
const subscript2665118583 = (l_a___0, l_indices___1) =>
	subscript1572370732(l_a___0, to__45range3879991102(l_a___0, l_indices___1))
// subscript@(char8) file:///home/andy/games/keen/lib/col/array.keen 57:1
const subscript4233044249 = (l_a___0, l_indices___1) =>
	subscript331493665(l_a___0, to__45range3474233252(l_a___0, l_indices___1))
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/array.keen 57:1
const subscript2352838008 = (l_a___0, l_indices___1) =>
	subscript1949026524(l_a___0, to__45range1748821155(l_a___0, l_indices___1))
// subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/array.keen 57:1
const subscript1105615477 = (l_a___0, l_indices___1) =>
	subscript3056293940(l_a___0, to__45range1701294840(l_a___0, l_indices___1))
// subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/array.keen 57:1
const subscript814170135 = (l_a___0, l_indices___1) =>
	subscript3967686030(l_a___0, to__45range3642056330(l_a___0, l_indices___1))
// list-new@((json, json) tuple2) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new295534455 = l_a___0 =>
	l_a___0
// list-new@(json) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new2537576556 = l_a___0 =>
	l_a___0
// list-new@(to-kid-result) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new2032144330 = l_a___0 =>
	l_a___0
// list-new@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new15341260 = l_a___0 =>
	l_a___0
// list-new@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new2940745720 = l_a___0 =>
	l_a___0
// list-new@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new4143771587 = l_a___0 =>
	l_a___0
// list-new@(uri) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new3522051795 = l_a___0 =>
	l_a___0
// list-new@(char8 array) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new2631943629 = l_a___0 =>
	l_a___0
// list-new@(js-any) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new574588355 = l_a___0 =>
	l_a___0
// list-new@(token) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new2334524117 = l_a___0 =>
	l_a___0
// list-new@(char32) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new1366037430 = l_a___0 =>
	l_a___0
// list-new@(string) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new260130062 = l_a___0 =>
	l_a___0
// list-new@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new1520485959 = l_a___0 =>
	l_a___0
// list-new@(char8) file:///home/andy/games/keen/lib/col/array.keen 60:1
const list__45new3709128537 = l_a___0 =>
	l_a___0
// size@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/array.keen 64:1
const size841731723 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/array.keen 64:1
const size1591420419 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(symbol) file:///home/andy/games/keen/lib/col/array.keen 64:1
const size3194416596 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(char32) file:///home/andy/games/keen/lib/col/array.keen 64:1
const size2291045464 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(json) file:///home/andy/games/keen/lib/col/array.keen 64:1
const size3742624519 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/array.keen 64:1
const size2521472917 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(char8) file:///home/andy/games/keen/lib/col/array.keen 64:1
const size1763153932 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(js-any) file:///home/andy/games/keen/lib/col/array.keen 64:1
const size326053269 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/array.keen 64:1
const size3336892795 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(char8 array) file:///home/andy/games/keen/lib/col/array.keen 64:1
const size1415619227 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// to@(char32) file:///home/andy/games/keen/lib/col/array.keen 75:1
const to1882768612 = l_a___0 =>
	((size2291045464(l_a___0) === l_a___0.inner.length) ? l_a___0.inner : cast__45immutable2002750423(to1403829793(l_a___0)))
// to@(char8) file:///home/andy/games/keen/lib/col/array.keen 75:1
const to3613751888 = l_a___0 =>
	((size1763153932(l_a___0) === l_a___0.inner.length) ? l_a___0.inner : cast__45immutable3953210833(to2367818095(l_a___0)))
// to@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/array.keen 75:1
const to1828463475 = l_a___0 =>
	((size3336892795(l_a___0) === l_a___0.inner.length) ? l_a___0.inner : cast__45immutable3535476440(to1588532959(l_a___0)))
// any@(char8) file:///home/andy/games/keen/lib/col/array.keen 82:1
const any3881793921 = l_a___0 =>
	__33__61883178196(l_a___0.length, 0)
// any@(js-any) file:///home/andy/games/keen/lib/col/array.keen 82:1
const any3195976654 = l_a___0 =>
	__33__61883178196(l_a___0.length, 0)
// any@(json) file:///home/andy/games/keen/lib/col/array.keen 82:1
const any1353902798 = l_a___0 =>
	__33__61883178196(l_a___0.length, 0)
// any@(write) file:///home/andy/games/keen/lib/col/array.keen 82:1
const any4038687962 = l_a___0 =>
	__33__61883178196(l_a___0.length, 0)
// any@(nat32) file:///home/andy/games/keen/lib/col/array.keen 82:1
const any1469364605 = l_a___0 =>
	__33__61883178196(l_a___0.length, 0)
// any@(symbol) file:///home/andy/games/keen/lib/col/array.keen 82:1
const any1661599091 = l_a___0 =>
	__33__61883178196(l_a___0.length, 0)
// any@(char8) file:///home/andy/games/keen/lib/col/array.keen 84:1
const any2151267163 = l_a___0 =>
	__33__61883178196(size1763153932(l_a___0), 0)
// concat-array-views@(char8 array) file:///home/andy/games/keen/lib/col/array.keen 102:1
const concat__45array__45views541845895 = l_parts___1 => {
	let l_size___0 = 0
	;(void some1246180470(l_parts___1, l_part___2 => {
			l_size___0 = __431111513593(l_size___0, size1415619227(l_part___2))
			return false
		}))
	const l_res___3 = new (Array)(l_size___0).fill(null)
	let l_i___4 = 0
	;(void some1246180470(l_parts___1, l_part___5 => {
			const l_j___6 = __431111513593(l_i___4, size1415619227(l_part___5))
			set__45subscript4016735242(l_res___3, __46__462451799117(l_i___4, __431111513593(l_i___4, size1415619227(l_part___5))), l_part___5)
			l_i___4 = l_j___6
			return false
		}))
	if ((!(l_i___4 === l_res___3.length))) {
		throw new (error4175136409)(c____439())
	}
	return cast__45immutable1682238412(l_res___3)
}
// concat-array-views@(js-any) file:///home/andy/games/keen/lib/col/array.keen 102:1
const concat__45array__45views3357718216 = l_parts___1 => {
	let l_size___0 = 0
	;(void some1967150123(l_parts___1, l_part___2 => {
			l_size___0 = __431111513593(l_size___0, size326053269(l_part___2))
			return false
		}))
	const l_res___3 = new (Array)(l_size___0).fill(null)
	let l_i___4 = 0
	;(void some1967150123(l_parts___1, l_part___5 => {
			const l_j___6 = __431111513593(l_i___4, size326053269(l_part___5))
			set__45subscript4174029296(l_res___3, __46__462451799117(l_i___4, __431111513593(l_i___4, size326053269(l_part___5))), l_part___5)
			l_i___4 = l_j___6
			return false
		}))
	if ((!(l_i___4 === l_res___3.length))) {
		throw new (error4175136409)(c____439())
	}
	return cast__45immutable1000554956(l_res___3)
}
// ~~@(char8) file:///home/andy/games/keen/lib/col/array.keen 119:1
const __126__1261391650858 = (l_a___0, l_b___1) =>
	(any3881793921(l_a___0) ? (any3881793921(l_b___1) ? __126__1263830088940(to__45array__45view3595367460(l_a___0), to__45array__45view3595367460(l_b___1)) : l_a___0) : l_b___1)
// ~~@(char8) file:///home/andy/games/keen/lib/col/array.keen 123:1
const __126__1263830088940 = (l_a___0, l_b___1) => {
	if (any2151267163(l_a___0)) {
		if (any2151267163(l_b___1)) {
			const l_res___2 = new (Uint8Array)(__431111513593(size1763153932(l_a___0), size1763153932(l_b___1)))
			set__45subscript3544890769(l_res___2, __46__462451799117(0, size1763153932(l_a___0)), l_a___0)
			set__45subscript3544890769(l_res___2, __46__462451799117(size1763153932(l_a___0), l_res___2.length), l_b___1)
			return cast__45immutable3953210833(l_res___2)
		} else {
			return to3613751888(l_a___0)
		}
	} else {
		return to3613751888(l_b___1)
	}
}
// ==@(char8) file:///home/andy/games/keen/lib/col/array.keen 131:1
const __61__612387200646 = (l_a___0, l_b___1) =>
	__61__612768477169(to__45array__45view3595367460(l_a___0), to__45array__45view3595367460(l_b___1))
// ==@(symbol) file:///home/andy/games/keen/lib/col/array.keen 131:1
const __61__612789219199 = (l_a___0, l_b___1) =>
	__61__613893097170(to__45array__45view626268209(l_a___0), to__45array__45view626268209(l_b___1))
// ==@(json) file:///home/andy/games/keen/lib/col/array.keen 131:1
const __61__613986662078 = (l_a___0, l_b___1) =>
	__61__611718856525(to__45array__45view1095436248(l_a___0), to__45array__45view1095436248(l_b___1))
// ==@(json) file:///home/andy/games/keen/lib/col/array.keen 134:1
const __61__611718856525 = (l_a___0, l_b___1) => {
	if ((((l_a___0.inner === l_b___1.inner) ? (l_a___0.low === l_b___1.low) : false) ? (l_a___0.high === l_b___1.high) : false)) {
		return true
	} else {
		if (__33__61883178196(size3742624519(l_a___0), size3742624519(l_b___1))) {
			return false
		} else {
			let l_i___2 = 0
			while (true){
				const l_temp___3 = (() => {
					if ((l_i___2 === size3742624519(l_a___0))) {
						return true
					} else {
						if (__33__611942334650(subscript3195327697(l_a___0, l_i___2), subscript3195327697(l_b___1, l_i___2))) {
							return false
						} else {
							l_i___2 = __431111513593(l_i___2, 1)
							return c____307()
						}
					}
				})()
				const x_matched___0 = l_temp___3
				if ((x_matched___0 instanceof none2082914084)) {
					continue
				} else {
					if (((typeof x_matched___0) === "boolean")) {
						return l_temp___3
					} else {
						return _unreachable()
					}
				}
			}
		}
	}
}
// ==@(char8) file:///home/andy/games/keen/lib/col/array.keen 134:1
const __61__612768477169 = (l_a___0, l_b___1) => {
	if ((((l_a___0.inner === l_b___1.inner) ? (l_a___0.low === l_b___1.low) : false) ? (l_a___0.high === l_b___1.high) : false)) {
		return true
	} else {
		if (__33__61883178196(size1763153932(l_a___0), size1763153932(l_b___1))) {
			return false
		} else {
			let l_i___2 = 0
			while (true){
				const l_temp___3 = (() => {
					if ((l_i___2 === size1763153932(l_a___0))) {
						return true
					} else {
						if (__33__61934749230(subscript2923090963(l_a___0, l_i___2), subscript2923090963(l_b___1, l_i___2))) {
							return false
						} else {
							l_i___2 = __431111513593(l_i___2, 1)
							return c____307()
						}
					}
				})()
				const x_matched___0 = l_temp___3
				if ((x_matched___0 instanceof none2082914084)) {
					continue
				} else {
					if (((typeof x_matched___0) === "boolean")) {
						return l_temp___3
					} else {
						return _unreachable()
					}
				}
			}
		}
	}
}
// ==@(symbol) file:///home/andy/games/keen/lib/col/array.keen 134:1
const __61__613893097170 = (l_a___0, l_b___1) => {
	if ((((l_a___0.inner === l_b___1.inner) ? (l_a___0.low === l_b___1.low) : false) ? (l_a___0.high === l_b___1.high) : false)) {
		return true
	} else {
		if (__33__61883178196(size3194416596(l_a___0), size3194416596(l_b___1))) {
			return false
		} else {
			let l_i___2 = 0
			while (true){
				const l_temp___3 = (() => {
					if ((l_i___2 === size3194416596(l_a___0))) {
						return true
					} else {
						if (__33__61606043939(subscript152787494(l_a___0, l_i___2), subscript152787494(l_b___1, l_i___2))) {
							return false
						} else {
							l_i___2 = __431111513593(l_i___2, 1)
							return c____307()
						}
					}
				})()
				const x_matched___0 = l_temp___3
				if ((x_matched___0 instanceof none2082914084)) {
					continue
				} else {
					if (((typeof x_matched___0) === "boolean")) {
						return l_temp___3
					} else {
						return _unreachable()
					}
				}
			}
		}
	}
}
// <=>@(char8) file:///home/andy/games/keen/lib/col/array.keen 150:1
const __60__61__622102854984 = (l_a___0, l_b___1) =>
	__60__61__623388794887(to__45array__45view3595367460(l_a___0), to__45array__45view3595367460(l_b___1))
// <=>@(char8) file:///home/andy/games/keen/lib/col/array.keen 152:1
const __60__61__623388794887 = (l_a___0, l_b___1) => {
	if ((l_a___0 === l_b___1)) {
		return 1
	} else {
		let l_i___2 = 0
		const l_limit___3 = min906971388(size1763153932(l_a___0), size1763153932(l_b___1))
		while (true){
			const l_temp___4 = (() => {
				if ((l_i___2 === l_limit___3)) {
					return _compareIntegral(size1763153932(l_a___0), size1763153932(l_b___1))
				} else {
					const l_res___5 = _compareIntegral(subscript2923090963(l_a___0, l_i___2), subscript2923090963(l_b___1, l_i___2))
					const x_matched___0 = l_res___5
					switch (x_matched___0) {
						case 1:{
							l_i___2 = __431111513593(l_i___2, 1)
							return c____307()
						}
						default:{
							return l_res___5
						}
					}
				}
			})()
			const x_matched___1 = l_temp___4
			if ((x_matched___1 instanceof none2082914084)) {
				continue
			} else {
				if (((typeof x_matched___1) === "number")) {
					return l_temp___4
				} else {
					return _unreachable()
				}
			}
		}
	}
}
// hash@(char8) file:///home/andy/games/keen/lib/col/array.keen 204:1
const hash3202929233 = (l_a___0, l_state___1) =>
	hash1675971822(to__45array__45view3595367460(l_a___0), l_state___1)
// hash@(char8) file:///home/andy/games/keen/lib/col/array.keen 206:1
const hash1675971822 = (l_a___1, l_state___2) => {
	let l_i___0 = 0
	x_loop___0: while (true){
		if ((l_i___0 === size1763153932(l_a___1))) {
			break  x_loop___0
		} else {
			hash1274811147(subscript2923090963(l_a___1, l_i___0), l_state___2)
			l_i___0 = __431111513593(l_i___0, 1)
			continue
		}
	}
}
// some@(language) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some3010051088 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript724467514(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(char8) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some944888123 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript3957816670(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(char8 array array-view) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some1246180470 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript400262724(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some2019179498 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript1521655738(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/array.keen 213:1
const _async_some2019179498 = async (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (await (async () => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if ((await l_f___3(subscript1521655738(l_a___2, l_i___0)))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})())
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(to-kid-result) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some2453224339 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript1289619325(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@((symbol, string) node) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some2138494860 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript1462125161(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(string) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some1855366333 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript431625604(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@((symbol, json) node) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some1771446167 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript771912223(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) node) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some2297015836 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript1672116537(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some1837471988 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript3696204314(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some399969416 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript3687300058(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(js-any) file:///home/andy/games/keen/lib/col/array.keen 213:1
const _async_some3797328660 = async (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (await (async () => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if ((await l_f___3(subscript1771739119(l_a___2, l_i___0)))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})())
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@((json, json) tuple2) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some961091973 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript3601262350(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(symbol) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some3895701114 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript2556338432(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(json) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some3021225121 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript514285693(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(js-any array-view) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some1967150123 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript3347093401(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/array.keen 213:1
const some2890906337 = (l_a___2, l_f___3) => {
	let l_i___0 = 0
	while (true){
		const l_temp___1 = (() => {
			if ((l_i___0 === l_a___2.length)) {
				return false
			} else {
				if (l_f___3(subscript3338462868(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___1
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(char8) file:///home/andy/games/keen/lib/col/array.keen 223:1
const some2818786307 = (l_a___1, l_f___3) => {
	let l_i___0 = l_a___1.low
	while (true){
		const l_temp___2 = (() => {
			if ((l_i___0 === l_a___1.high)) {
				return false
			} else {
				if (l_f___3(l_a___1.inner[l_i___0])) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___2
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(char32) file:///home/andy/games/keen/lib/col/array.keen 223:1
const some428023422 = (l_a___1, l_f___3) => {
	let l_i___0 = l_a___1.low
	while (true){
		const l_temp___2 = (() => {
			if ((l_i___0 === l_a___1.high)) {
				return false
			} else {
				if (l_f___3(l_a___1.inner[l_i___0])) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___2
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(char8 array) file:///home/andy/games/keen/lib/col/array.keen 223:1
const some1984847343 = (l_a___1, l_f___3) => {
	let l_i___0 = l_a___1.low
	while (true){
		const l_temp___2 = (() => {
			if ((l_i___0 === l_a___1.high)) {
				return false
			} else {
				if (l_f___3(l_a___1.inner[l_i___0])) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___2
			} else {
				return _unreachable()
			}
		}
	}
}
// some@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/array.keen 223:1
const some794520560 = (l_a___1, l_f___3) => {
	let l_i___0 = l_a___1.low
	while (true){
		const l_temp___2 = (() => {
			if ((l_i___0 === l_a___1.high)) {
				return false
			} else {
				if (l_f___3(l_a___1.inner[l_i___0])) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___2
			} else {
				return _unreachable()
			}
		}
	}
}
// some@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/array.keen 223:1
const some352326534 = (l_a___1, l_f___3) => {
	let l_i___0 = l_a___1.low
	while (true){
		const l_temp___2 = (() => {
			if ((l_i___0 === l_a___1.high)) {
				return false
			} else {
				if (l_f___3(l_a___1.inner[l_i___0])) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___2
			} else {
				return _unreachable()
			}
		}
	}
}
// some@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/array.keen 223:1
const some3487397621 = (l_a___1, l_f___3) => {
	let l_i___0 = l_a___1.low
	while (true){
		const l_temp___2 = (() => {
			if ((l_i___0 === l_a___1.high)) {
				return false
			} else {
				if (l_f___3(l_a___1.inner[l_i___0])) {
					return true
				} else {
					l_i___0 = __431111513593(l_i___0, 1)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___2
			} else {
				return _unreachable()
			}
		}
	}
}
// begin@(char8) file:///home/andy/games/keen/lib/col/array.keen 253:1
const begin1051078769 = l_a___0 =>
	new (array__45iterator3005551252)(l_a___0, 0, 0, l_a___0.length)
// begin@(char8) file:///home/andy/games/keen/lib/col/array.keen 255:1
const begin2617308392 = l_a___0 =>
	new (array__45iterator3005551252)(l_a___0.inner, l_a___0.low, l_a___0.low, l_a___0.high)
// end@(char8) file:///home/andy/games/keen/lib/col/array.keen 257:1
const end602442261 = l_a___0 =>
	new (array__45iterator3005551252)(l_a___0, 0, l_a___0.length, l_a___0.length)
// copy@(char8) file:///home/andy/games/keen/lib/col/array.keen 261:1
const copy789796339 = l_a___0 =>
	new (array__45iterator3005551252)(l_a___0.array, l_a___0.start, l_a___0.cur, l_a___0.end)
// is-at-end@(char8) file:///home/andy/games/keen/lib/col/array.keen 265:1
const is__45at__45end2461033736 = l_a___0 =>
	(l_a___0.cur === l_a___0.end)
// index@(char8) file:///home/andy/games/keen/lib/col/array.keen 268:1
const index4248841946 = l_a___0 =>
	__45997287195(l_a___0.cur, l_a___0.start)
// set-index@(char8) file:///home/andy/games/keen/lib/col/array.keen 270:1
const set__45index3529667579 = (l_a___0, l_index___1) => {
	if ((!__60__612052354958(__431111513593(l_a___0.start, l_index___1), l_a___0.end))) {
		throw new (error4175136409)(c____359())
	}
	l_a___0.cur = __431111513593(l_a___0.start, l_index___1)
}
// take-prev@(char8) file:///home/andy/games/keen/lib/col/array.keen 273:1
const take__45prev2637826104 = l_a___0 => {
	if ((!__621787529867(l_a___0.cur, l_a___0.start))) {
		throw new (iterator__45out__45of__45bounds2781000628)()
	}
	l_a___0.cur = __45997287195(l_a___0.cur, 1)
	return l_a___0.array[l_a___0.cur]
}
// peek@(char8) file:///home/andy/games/keen/lib/col/array.keen 277:1
const peek3964113808 = l_a___0 =>
	(__602180318207(l_a___0.cur, l_a___0.end) ? l_a___0.array[l_a___0.cur] : c____307())
// peek-by@(char8) file:///home/andy/games/keen/lib/col/array.keen 281:1
const peek__45by1250898396 = (l_a___1, l_relative__45index___2) => {
	let l_index___0
	return ((l_index___0 = __431111513593(l_a___1.cur, l_relative__45index___2)) , (__602180318207(l_index___0, l_a___1.end) ? l_a___1.array[l_index___0] : c____307()))
}
// take-next@(char8) file:///home/andy/games/keen/lib/col/array.keen 288:1
const take__45next857232194 = l_a___0 => {
	if ((!__602180318207(l_a___0.cur, l_a___0.end))) {
		throw new (iterator__45out__45of__45bounds2781000628)()
	}
	const l_res___1 = l_a___0.array[l_a___0.cur]
	l_a___0.cur = __431111513593(l_a___0.cur, 1)
	return l_res___1
}
// take-next-n@(char8) file:///home/andy/games/keen/lib/col/array.keen 293:1
const take__45next__45n1025409612 = (l_a___0, l_n___1) => {
	if ((!__60__612052354958(__431111513593(l_a___0.cur, l_n___1), l_a___0.end))) {
		throw new (iterator__45out__45of__45bounds2781000628)()
	}
	const l_res___2 = subscript4065740503(l_a___0.array, __46__462451799117(l_a___0.cur, __431111513593(l_a___0.cur, l_n___1)))
	l_a___0.cur = __431111513593(l_a___0.cur, l_n___1)
	return l_res___2
}
// take-prev-n@(char8) file:///home/andy/games/keen/lib/col/array.keen 298:1
const take__45prev__45n1604291086 = (l_a___0, l_n___1) => {
	if ((!__60__612052354958(__431111513593(l_a___0.start, l_n___1), l_a___0.cur))) {
		throw new (iterator__45out__45of__45bounds2781000628)()
	}
	const l_end___2 = l_a___0.cur
	l_a___0.cur = __45997287195(l_a___0.cur, l_n___1)
	return subscript4065740503(l_a___0.array, __46__462451799117(l_a___0.cur, l_end___2))
}
// skip-next-n@(char8) file:///home/andy/games/keen/lib/col/array.keen 303:1
const skip__45next__45n187135518 = (l_a___0, l_n___1) => {
	(void take__45next__45n1025409612(l_a___0, l_n___1))
}
// skip-prev-n@(char8) file:///home/andy/games/keen/lib/col/array.keen 305:1
const skip__45prev__45n622833207 = (l_a___0, l_n___1) => {
	(void take__45prev__45n1604291086(l_a___0, l_n___1))
}
// slice@(char8) file:///home/andy/games/keen/lib/col/array.keen 307:1
const slice4028578461 = (l_begin___0, l_end___1) => {
	if ((!((l_begin___0.start === l_end___1.start) ? (l_begin___0.end === l_end___1.end) : false))) {
		throw new (error4175136409)(c____358())
	}
	return subscript4065740503(l_begin___0.array, __46__462451799117(l_begin___0.cur, l_end___1.cur))
}
// to-buffer-view@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view2578590751 = l_a___0 =>
	new (buffer__45view173795550)(l_a___0, 0, l_a___0.length)
// to-buffer-view@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view2552778527 = l_a___0 =>
	new (buffer__45view355310272)(l_a___0, 0, l_a___0.length)
// to-buffer-view@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view3999426625 = l_a___0 =>
	new (buffer__45view575054314)(l_a___0, 0, l_a___0.length)
// to-buffer-view@(json) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view144248476 = l_a___0 =>
	new (buffer__45view1629946458)(l_a___0, 0, l_a___0.length)
// to-buffer-view@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view4029644931 = l_a___0 =>
	new (buffer__45view3140549812)(l_a___0, 0, l_a___0.length)
// to-buffer-view@(write) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view308445210 = l_a___0 =>
	new (buffer__45view1645105482)(l_a___0, 0, l_a___0.length)
// to-buffer-view@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view3676937948 = l_a___0 =>
	new (buffer__45view1677258545)(l_a___0, 0, l_a___0.length)
// to-buffer-view@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view2482073578 = l_a___0 =>
	new (buffer__45view366583543)(l_a___0, 0, l_a___0.length)
// to-buffer-view@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view3362027485 = l_a___0 =>
	new (buffer__45view1458947215)(l_a___0, 0, l_a___0.length)
// to-buffer-view@(char8 array) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view1307469042 = l_a___0 =>
	new (buffer__45view2420911269)(l_a___0, 0, l_a___0.length)
// to-buffer-view@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view3199291402 = l_a___0 =>
	new (buffer__45view3431733143)(l_a___0, 0, l_a___0.length)
// to-buffer-view@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view290619136 = l_a___0 =>
	new (buffer__45view4126788325)(l_a___0, 0, l_a___0.length)
// to-buffer-view@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view411900635 = l_a___0 =>
	new (buffer__45view1430717036)(l_a___0, 0, l_a___0.length)
// to-buffer-view@(string) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view2152121036 = l_a___0 =>
	new (buffer__45view2066422296)(l_a___0, 0, l_a___0.length)
// to-buffer-view@(container) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view738609216 = l_a___0 =>
	new (buffer__45view170728763)(l_a___0, 0, l_a___0.length)
// to-buffer-view@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view4045663729 = l_a___0 =>
	new (buffer__45view2892615463)(l_a___0, 0, l_a___0.length)
// to-buffer-view@((string, void) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view402122033 = l_a___0 =>
	new (buffer__45view4148315802)(l_a___0, 0, l_a___0.length)
// to-buffer-view@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view1972261055 = l_a___0 =>
	new (buffer__45view2973489888)(l_a___0, 0, l_a___0.length)
// to-buffer-view@(char8 array-view) file:///home/andy/games/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view3807711678 = l_a___0 =>
	new (buffer__45view55246657)(l_a___0, 0, l_a___0.length)
// list-new@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 24:1
const list__45new2895775616 = l_a___0 =>
	to404259370(l_a___0)
// list-new@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 24:1
const list__45new2126093138 = l_a___0 =>
	to2887515918(l_a___0)
// list-new@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 24:1
const list__45new4114400339 = l_a___0 =>
	to2793503032(l_a___0)
// list-new@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 24:1
const list__45new2156479568 = l_a___0 =>
	to2471612425(l_a___0)
// list-new@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 24:1
const list__45new2789373813 = l_a___0 =>
	to2117258450(l_a___0)
// list-new@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 24:1
const list__45new3282161591 = l_a___0 =>
	to988250502(l_a___0)
// list-new@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 24:1
const list__45new958280054 = l_a___0 =>
	to4003631783(l_a___0)
// list-new@(write) file:///home/andy/games/keen/lib/col/buffer.keen 24:1
const list__45new929639163 = l_a___0 =>
	to71551232(l_a___0)
// list-new@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 24:1
const list__45new3538275624 = l_a___0 =>
	to227432643(l_a___0)
// list-new@((string, void) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 24:1
const list__45new3352599424 = l_a___0 =>
	to738650873(l_a___0)
// cast-immutable@(string) file:///home/andy/games/keen/lib/col/buffer.keen 30:1
const cast__45immutable1988130499 = l_a___0 =>
	new (array__45view3827596276)(cast__45immutable3213541909(l_a___0.inner), l_a___0.low, l_a___0.high)
// cast-immutable@(write) file:///home/andy/games/keen/lib/col/buffer.keen 30:1
const cast__45immutable2569268507 = l_a___0 =>
	new (array__45view1086139444)(cast__45immutable3319498073(l_a___0.inner), l_a___0.low, l_a___0.high)
// cast-immutable@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 30:1
const cast__45immutable3039462001 = l_a___0 =>
	new (array__45view1833126106)(cast__45immutable1000554956(l_a___0.inner), l_a___0.low, l_a___0.high)
// cast-immutable@(json) file:///home/andy/games/keen/lib/col/buffer.keen 30:1
const cast__45immutable4163758382 = l_a___0 =>
	new (array__45view1548048669)(cast__45immutable2616233909(l_a___0.inner), l_a___0.low, l_a___0.high)
// cast-immutable@(container) file:///home/andy/games/keen/lib/col/buffer.keen 30:1
const cast__45immutable1558423898 = l_a___0 =>
	new (array__45view2062069736)(cast__45immutable2351386012(l_a___0.inner), l_a___0.low, l_a___0.high)
// cast-immutable@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 30:1
const cast__45immutable3887335350 = l_a___0 =>
	new (array__45view2839973619)(cast__45immutable3544078916(l_a___0.inner), l_a___0.low, l_a___0.high)
// cast-immutable@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 30:1
const cast__45immutable646125858 = l_a___0 =>
	new (array__45view2468091663)(cast__45immutable3769887050(l_a___0.inner), l_a___0.low, l_a___0.high)
// cast-immutable@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 30:1
const cast__45immutable334104916 = l_a___0 =>
	new (array__45view4071199571)(cast__45immutable330973840(l_a___0.inner), l_a___0.low, l_a___0.high)
// cast-immutable@(char8 array-view) file:///home/andy/games/keen/lib/col/buffer.keen 30:1
const cast__45immutable1520925512 = l_a___0 =>
	new (array__45view3390615117)(cast__45immutable3116128247(l_a___0.inner), l_a___0.low, l_a___0.high)
// cast-immutable@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 30:1
const cast__45immutable3324361632 = l_a___0 =>
	new (array__45view198522282)(cast__45immutable2002750423(l_a___0.inner), l_a___0.low, l_a___0.high)
// cast-immutable@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 30:1
const cast__45immutable1696320176 = l_a___0 =>
	new (array__45view3308382370)(cast__45immutable3953210833(l_a___0.inner), l_a___0.low, l_a___0.high)
// to@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 33:1
const to2452884681 = l_a___0 =>
	cast__45immutable3544078916(to1156423522(l_a___0))
// to@(json) file:///home/andy/games/keen/lib/col/buffer.keen 33:1
const to2081884857 = l_a___0 =>
	cast__45immutable2616233909(to3287364804(l_a___0))
// to@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 33:1
const to3134524963 = l_a___0 =>
	cast__45immutable2002750423(to4266499366(l_a___0))
// to@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 33:1
const to813023344 = l_a___0 =>
	cast__45immutable330973840(to1745246479(l_a___0))
// to@(string) file:///home/andy/games/keen/lib/col/buffer.keen 33:1
const to3495777989 = l_a___0 =>
	cast__45immutable3213541909(to2063325536(l_a___0))
// to@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 33:1
const to1163035466 = l_a___0 =>
	cast__45immutable3953210833(to1948850721(l_a___0))
// to@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 33:1
const to768475965 = l_a___0 =>
	cast__45immutable3769887050(to800545806(l_a___0))
// to@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 33:1
const to3168572091 = l_a___0 =>
	cast__45immutable1000554956(to3921538797(l_a___0))
// to@(char8 array-view) file:///home/andy/games/keen/lib/col/buffer.keen 33:1
const to1294652650 = l_a___0 =>
	cast__45immutable3116128247(to4270466260(l_a___0))
// to@(char8 array-view) file:///home/andy/games/keen/lib/col/buffer.keen 35:1
const to4270466260 = l_a___1 => {
	const l_res___0 = new (Array)(size554248096(l_a___1)).fill(null)
	copy__45from3436399139(to__45buffer__45view3807711678(l_res___0), l_a___1)
	return l_res___0
}
// to@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 35:1
const to1156423522 = l_a___1 => {
	const l_res___0 = new (Array)(size4235011680(l_a___1)).fill(null)
	copy__45from4203943769(to__45buffer__45view411900635(l_res___0), l_a___1)
	return l_res___0
}
// to@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 35:1
const to800545806 = l_a___1 => {
	const l_res___0 = new (Array)(size2985755893(l_a___1)).fill(null)
	copy__45from3033150485(to__45buffer__45view3676937948(l_res___0), l_a___1)
	return l_res___0
}
// to@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 35:1
const to1745246479 = l_a___1 => {
	const l_res___0 = new (Array)(size3039289938(l_a___1)).fill(null)
	copy__45from1839472009(to__45buffer__45view1972261055(l_res___0), l_a___1)
	return l_res___0
}
// to@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 35:1
const to4266499366 = l_a___1 => {
	const l_res___0 = new (Uint32Array)(size4178937278(l_a___1))
	copy__45from2237559301(to__45buffer__45view290619136(l_res___0), l_a___1)
	return l_res___0
}
// to@(write) file:///home/andy/games/keen/lib/col/buffer.keen 35:1
const to327945687 = l_a___1 => {
	const l_res___0 = new (Array)(size3769857345(l_a___1)).fill(null)
	copy__45from2577190316(to__45buffer__45view308445210(l_res___0), l_a___1)
	return l_res___0
}
// to@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 35:1
const to3921538797 = l_a___1 => {
	const l_res___0 = new (Array)(size898788777(l_a___1)).fill(null)
	copy__45from493585256(to__45buffer__45view2578590751(l_res___0), l_a___1)
	return l_res___0
}
// to@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 35:1
const to1948850721 = l_a___1 => {
	const l_res___0 = new (Uint8Array)(size2717539466(l_a___1))
	copy__45from2078640469(to__45buffer__45view3362027485(l_res___0), l_a___1)
	return l_res___0
}
// to@(string) file:///home/andy/games/keen/lib/col/buffer.keen 35:1
const to2063325536 = l_a___1 => {
	const l_res___0 = new (Array)(size1420300766(l_a___1)).fill(null)
	copy__45from2251867122(to__45buffer__45view2152121036(l_res___0), l_a___1)
	return l_res___0
}
// to@(json) file:///home/andy/games/keen/lib/col/buffer.keen 35:1
const to3287364804 = l_a___1 => {
	const l_res___0 = new (Array)(size397993469(l_a___1)).fill(null)
	copy__45from2509393995(to__45buffer__45view144248476(l_res___0), l_a___1)
	return l_res___0
}
// size@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size2793433331 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size965608342 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size2717539466 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(string) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size1420300766 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size3039289938 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size4235011680 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size2985755893 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(char8 array-view) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size554248096 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(char8 array) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size954713332 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size4178937278 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(write) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size3769857345 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(container) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size661445490 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size898788777 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(json) file:///home/andy/games/keen/lib/col/buffer.keen 43:1
const size397993469 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// subscript@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 46:1
const subscript2452254520 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, size965608342(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size965608342(l_a___1))
	}
	return l_a___1.inner[__431111513593(l_a___1.low, l_index___0)]
}
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 46:1
const subscript324692138 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, size3039289938(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size3039289938(l_a___1))
	}
	return l_a___1.inner[__431111513593(l_a___1.low, l_index___0)]
}
// subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 46:1
const subscript3184670839 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, size2985755893(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size2985755893(l_a___1))
	}
	return l_a___1.inner[__431111513593(l_a___1.low, l_index___0)]
}
// subscript@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 46:1
const subscript3371076184 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, size2793433331(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size2793433331(l_a___1))
	}
	return l_a___1.inner[__431111513593(l_a___1.low, l_index___0)]
}
// subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 46:1
const subscript1530713571 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, size4235011680(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size4235011680(l_a___1))
	}
	return l_a___1.inner[__431111513593(l_a___1.low, l_index___0)]
}
// subscript@(json) file:///home/andy/games/keen/lib/col/buffer.keen 46:1
const subscript2345656961 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, size397993469(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size397993469(l_a___1))
	}
	return l_a___1.inner[__431111513593(l_a___1.low, l_index___0)]
}
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 49:1
const subscript2248620741 = (l_a___0, l_index___1) =>
	subscript324692138(l_a___0, to__45index2306530706(l_a___0, l_index___1))
// subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 49:1
const subscript3151170441 = (l_a___0, l_index___1) =>
	subscript3184670839(l_a___0, to__45index3249306317(l_a___0, l_index___1))
// subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 49:1
const subscript3276025978 = (l_a___0, l_index___1) =>
	subscript1530713571(l_a___0, to__45index1529606635(l_a___0, l_index___1))
// set-subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 52:1
const set__45subscript2382295053 = (l_a___1, l_index___0, l_value___2) => {
	if ((!__602180318207(l_index___0, size4235011680(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size4235011680(l_a___1))
	}
	set__45subscript56910(l_a___1.inner, __431111513593(l_a___1.low, l_index___0), l_value___2)
}
// set-subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 52:1
const set__45subscript3066845548 = (l_a___1, l_index___0, l_value___2) => {
	if ((!__602180318207(l_index___0, size3039289938(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size3039289938(l_a___1))
	}
	set__45subscript2957446360(l_a___1.inner, __431111513593(l_a___1.low, l_index___0), l_value___2)
}
// set-subscript@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 52:1
const set__45subscript1834936631 = (l_a___1, l_index___0, l_value___2) => {
	if ((!__602180318207(l_index___0, size965608342(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size965608342(l_a___1))
	}
	set__45subscript3842711253(l_a___1.inner, __431111513593(l_a___1.low, l_index___0), l_value___2)
}
// set-subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 52:1
const set__45subscript4132141612 = (l_a___1, l_index___0, l_value___2) => {
	if ((!__602180318207(l_index___0, size2985755893(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size2985755893(l_a___1))
	}
	set__45subscript1869705786(l_a___1.inner, __431111513593(l_a___1.low, l_index___0), l_value___2)
}
// set-subscript@(json) file:///home/andy/games/keen/lib/col/buffer.keen 52:1
const set__45subscript1221974508 = (l_a___1, l_index___0, l_value___2) => {
	if ((!__602180318207(l_index___0, size397993469(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size397993469(l_a___1))
	}
	set__45subscript3675437372(l_a___1.inner, __431111513593(l_a___1.low, l_index___0), l_value___2)
}
// set-subscript@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 52:1
const set__45subscript444602806 = (l_a___1, l_index___0, l_value___2) => {
	if ((!__602180318207(l_index___0, size2793433331(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size2793433331(l_a___1))
	}
	set__45subscript4265806295(l_a___1.inner, __431111513593(l_a___1.low, l_index___0), l_value___2)
}
// subscript@(container) file:///home/andy/games/keen/lib/col/buffer.keen 58:1
const subscript2502029662 = (l_a___0, l_indices___1) =>
	subscript3884034341(to__45buffer__45view738609216(l_a___0), l_indices___1)
// subscript@(char8 array-view) file:///home/andy/games/keen/lib/col/buffer.keen 58:1
const subscript910872492 = (l_a___0, l_indices___1) =>
	subscript348522267(to__45buffer__45view3807711678(l_a___0), l_indices___1)
// subscript@(char8 array) file:///home/andy/games/keen/lib/col/buffer.keen 58:1
const subscript1177810368 = (l_a___0, l_indices___1) =>
	subscript2159865375(to__45buffer__45view1307469042(l_a___0), l_indices___1)
// subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 58:1
const subscript2338042479 = (l_a___0, l_indices___1) =>
	subscript1252271679(to__45buffer__45view411900635(l_a___0), l_indices___1)
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 58:1
const subscript3193420933 = (l_a___0, l_indices___1) =>
	subscript2803067135(to__45buffer__45view1972261055(l_a___0), l_indices___1)
// subscript@(write) file:///home/andy/games/keen/lib/col/buffer.keen 58:1
const subscript3687223329 = (l_a___0, l_indices___1) =>
	subscript3609043690(to__45buffer__45view308445210(l_a___0), l_indices___1)
// subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 58:1
const subscript1678098774 = (l_a___0, l_indices___1) =>
	subscript769708496(to__45buffer__45view3676937948(l_a___0), l_indices___1)
// subscript@(string) file:///home/andy/games/keen/lib/col/buffer.keen 58:1
const subscript912053911 = (l_a___0, l_indices___1) =>
	subscript163583713(to__45buffer__45view2152121036(l_a___0), l_indices___1)
// subscript@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 58:1
const subscript3665448857 = (l_a___0, l_indices___1) =>
	subscript196756726(to__45buffer__45view3362027485(l_a___0), l_indices___1)
// subscript@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 58:1
const subscript2483069761 = (l_a___0, l_indices___1) =>
	subscript3281996571(to__45buffer__45view290619136(l_a___0), l_indices___1)
// subscript@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 58:1
const subscript529545893 = (l_a___0, l_indices___1) =>
	subscript138193856(to__45buffer__45view2578590751(l_a___0), l_indices___1)
// subscript@(json) file:///home/andy/games/keen/lib/col/buffer.keen 58:1
const subscript81988849 = (l_a___0, l_indices___1) =>
	subscript810137056(to__45buffer__45view144248476(l_a___0), l_indices___1)
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 62:1
const subscript2803067135 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size3039289938(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size3039289938(l_a___1))
	}
	return new (buffer__45view2973489888)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(json) file:///home/andy/games/keen/lib/col/buffer.keen 62:1
const subscript810137056 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size397993469(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size397993469(l_a___1))
	}
	return new (buffer__45view1629946458)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 62:1
const subscript1252271679 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size4235011680(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size4235011680(l_a___1))
	}
	return new (buffer__45view1430717036)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 62:1
const subscript3281996571 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size4178937278(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size4178937278(l_a___1))
	}
	return new (buffer__45view4126788325)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 62:1
const subscript138193856 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size898788777(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size898788777(l_a___1))
	}
	return new (buffer__45view173795550)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(string) file:///home/andy/games/keen/lib/col/buffer.keen 62:1
const subscript163583713 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size1420300766(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size1420300766(l_a___1))
	}
	return new (buffer__45view2066422296)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 62:1
const subscript196756726 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size2717539466(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size2717539466(l_a___1))
	}
	return new (buffer__45view1458947215)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 62:1
const subscript152307013 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size965608342(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size965608342(l_a___1))
	}
	return new (buffer__45view2892615463)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(container) file:///home/andy/games/keen/lib/col/buffer.keen 62:1
const subscript3884034341 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size661445490(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size661445490(l_a___1))
	}
	return new (buffer__45view170728763)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 62:1
const subscript769708496 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size2985755893(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size2985755893(l_a___1))
	}
	return new (buffer__45view1677258545)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(char8 array-view) file:///home/andy/games/keen/lib/col/buffer.keen 62:1
const subscript348522267 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size554248096(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size554248096(l_a___1))
	}
	return new (buffer__45view55246657)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(write) file:///home/andy/games/keen/lib/col/buffer.keen 62:1
const subscript3609043690 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size3769857345(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size3769857345(l_a___1))
	}
	return new (buffer__45view1645105482)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@(char8 array) file:///home/andy/games/keen/lib/col/buffer.keen 62:1
const subscript2159865375 = (l_a___1, l_indices___0) => {
	if ((!__60__612052354958(l_indices___0.high, size954713332(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_indices___0.high, size954713332(l_a___1))
	}
	return new (buffer__45view2420911269)(l_a___1.inner, __431111513593(l_a___1.low, l_indices___0.low), __431111513593(l_a___1.low, l_indices___0.high))
}
// subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 65:1
const subscript2713877231 = (l_a___0, l_indices___1) =>
	subscript769708496(l_a___0, to__45range844668402(l_a___0, l_indices___1))
// subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 65:1
const subscript707329682 = (l_a___0, l_indices___1) =>
	subscript1252271679(l_a___0, to__45range1472384003(l_a___0, l_indices___1))
// subscript@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 65:1
const subscript3515117503 = (l_a___0, l_indices___1) =>
	subscript152307013(l_a___0, to__45range1612248931(l_a___0, l_indices___1))
// subscript@(json) file:///home/andy/games/keen/lib/col/buffer.keen 65:1
const subscript2387982866 = (l_a___0, l_indices___1) =>
	subscript810137056(l_a___0, to__45range3400438345(l_a___0, l_indices___1))
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 65:1
const subscript1596132023 = (l_a___0, l_indices___1) =>
	subscript2803067135(l_a___0, to__45range3476447177(l_a___0, l_indices___1))
// to@((string, void) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 81:1
const to738650873 = l_a___0 =>
	((l_a___0.length === 0) ? cast__45mutable2580202387(l_a___0) : to4009915350(to__45array__45view2187299192(l_a___0)))
// to@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 81:1
const to988250502 = l_a___0 =>
	((l_a___0.length === 0) ? cast__45mutable1552225024(l_a___0) : to501345069(to__45array__45view3154170536(l_a___0)))
// to@(container) file:///home/andy/games/keen/lib/col/buffer.keen 81:1
const to1716467217 = l_a___0 =>
	((l_a___0.length === 0) ? cast__45mutable1347679571(l_a___0) : to2747332203(to__45array__45view2145196238(l_a___0)))
// to@(json) file:///home/andy/games/keen/lib/col/buffer.keen 81:1
const to151380589 = l_a___0 =>
	((l_a___0.length === 0) ? cast__45mutable2427523187(l_a___0) : to3174406966(to__45array__45view1095436248(l_a___0)))
// to@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 81:1
const to4127478083 = l_a___0 =>
	((l_a___0.length === 0) ? cast__45mutable790827560(l_a___0) : to1616564071(to__45array__45view626268209(l_a___0)))
// to@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 81:1
const to227432643 = l_a___0 =>
	((l_a___0.length === 0) ? cast__45mutable3295702220(l_a___0) : to1326589766(to__45array__45view1373033965(l_a___0)))
// to@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 81:1
const to2887515918 = l_a___0 =>
	((l_a___0.length === 0) ? cast__45mutable42242416(l_a___0) : to1661793807(to__45array__45view2140405017(l_a___0)))
// to@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 81:1
const to404259370 = l_a___0 =>
	((l_a___0.length === 0) ? cast__45mutable1031089900(l_a___0) : to2703252827(to__45array__45view2195292310(l_a___0)))
// to@(write) file:///home/andy/games/keen/lib/col/buffer.keen 81:1
const to71551232 = l_a___0 =>
	((l_a___0.length === 0) ? cast__45mutable1816910386(l_a___0) : to1142617065(to__45array__45view918219267(l_a___0)))
// to@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 81:1
const to2471612425 = l_a___0 =>
	((l_a___0.length === 0) ? cast__45mutable1074641699(l_a___0) : to1008494118(to__45array__45view3977592904(l_a___0)))
// to@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 81:1
const to2117258450 = l_a___0 =>
	((l_a___0.length === 0) ? cast__45mutable2221201364(l_a___0) : to926966051(to__45array__45view1214307661(l_a___0)))
// to@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 81:1
const to4003631783 = l_a___0 =>
	((l_a___0.length === 0) ? cast__45mutable1390345585(l_a___0) : to180738076(to__45array__45view1203102638(l_a___0)))
// to@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 81:1
const to2793503032 = l_a___0 =>
	((l_a___0.length === 0) ? cast__45mutable3684834372(l_a___0) : to499542839(to__45array__45view1184452394(l_a___0)))
// to@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to180738076 = l_a___1 => {
	const l_res___0 = new (Array)(size2284668719(l_a___1)).fill(null)
	copy__45from615467714(to__45buffer__45view2552778527(l_res___0), l_a___1)
	return l_res___0
}
// to@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to2367818095 = l_a___1 => {
	const l_res___0 = new (Uint8Array)(size3804407810(l_a___1))
	copy__45from1806137840(to__45buffer__45view3362027485(l_res___0), l_a___1)
	return l_res___0
}
// to@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to1661793807 = l_a___1 => {
	const l_res___0 = new (Uint32Array)(size4177411421(l_a___1))
	copy__45from736108312(to__45buffer__45view3199291402(l_res___0), l_a___1)
	return l_res___0
}
// to@(container) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to2747332203 = l_a___1 => {
	const l_res___0 = new (Array)(size1051281877(l_a___1)).fill(null)
	copy__45from3529321837(to__45buffer__45view738609216(l_res___0), l_a___1)
	return l_res___0
}
// to@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to1588532959 = l_a___1 => {
	const l_res___0 = new (Array)(size171374258(l_a___1)).fill(null)
	copy__45from3202770537(to__45buffer__45view4029644931(l_res___0), l_a___1)
	return l_res___0
}
// to@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to1008494118 = l_a___1 => {
	const l_res___0 = new (Array)(size808857809(l_a___1)).fill(null)
	copy__45from185316348(to__45buffer__45view3999426625(l_res___0), l_a___1)
	return l_res___0
}
// to@(write) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to1142617065 = l_a___1 => {
	const l_res___0 = new (Array)(size3247851688(l_a___1)).fill(null)
	copy__45from174822375(to__45buffer__45view308445210(l_res___0), l_a___1)
	return l_res___0
}
// to@((string, void) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to4009915350 = l_a___1 => {
	const l_res___0 = new (Array)(size2852039105(l_a___1)).fill(null)
	copy__45from3923343404(to__45buffer__45view402122033(l_res___0), l_a___1)
	return l_res___0
}
// to@(json) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to3174406966 = l_a___1 => {
	const l_res___0 = new (Array)(size2774464417(l_a___1)).fill(null)
	copy__45from2812587148(to__45buffer__45view144248476(l_res___0), l_a___1)
	return l_res___0
}
// to@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to926966051 = l_a___1 => {
	const l_res___0 = new (Array)(size2026358458(l_a___1)).fill(null)
	copy__45from1609311953(to__45buffer__45view2482073578(l_res___0), l_a___1)
	return l_res___0
}
// to@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to1326589766 = l_a___1 => {
	const l_res___0 = new (Array)(size3787013736(l_a___1)).fill(null)
	copy__45from293664368(to__45buffer__45view3676937948(l_res___0), l_a___1)
	return l_res___0
}
// to@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to1403829793 = l_a___1 => {
	const l_res___0 = new (Uint32Array)(size652577019(l_a___1))
	copy__45from187558430(to__45buffer__45view290619136(l_res___0), l_a___1)
	return l_res___0
}
// to@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to1616564071 = l_a___1 => {
	const l_res___0 = new (Array)(size967439726(l_a___1)).fill(null)
	copy__45from3650633205(to__45buffer__45view4045663729(l_res___0), l_a___1)
	return l_res___0
}
// to@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to499542839 = l_a___1 => {
	const l_res___0 = new (Array)(size2732373121(l_a___1)).fill(null)
	copy__45from1718095783(to__45buffer__45view2578590751(l_res___0), l_a___1)
	return l_res___0
}
// to@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to2703252827 = l_a___1 => {
	const l_res___0 = new (Array)(size1848177406(l_a___1)).fill(null)
	copy__45from3760356933(to__45buffer__45view1972261055(l_res___0), l_a___1)
	return l_res___0
}
// to@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 87:1
const to501345069 = l_a___1 => {
	const l_res___0 = new (Array)(size2932905447(l_a___1)).fill(null)
	copy__45from3638925540(to__45buffer__45view411900635(l_res___0), l_a___1)
	return l_res___0
}
// any@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 104:1
const any4045996765 = l_a___0 =>
	__33__61883178196(l_a___0.length, 0)
// any@((string, void) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 104:1
const any1968705741 = l_a___0 =>
	__33__61883178196(l_a___0.length, 0)
// any@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 104:1
const any3492671035 = l_a___0 =>
	__33__61883178196(l_a___0.length, 0)
// any@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 104:1
const any1576478683 = l_a___0 =>
	__33__61883178196(l_a___0.length, 0)
// subscript@(symbol weak-ref) file:///home/andy/games/keen/lib/col/buffer.keen 112:1
const subscript1864161571 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 112:1
const subscript3255648075 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 112:1
const subscript1067978641 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 112:1
const subscript359054975 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 112:1
const subscript742887843 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 112:1
const subscript3320656413 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	return l_a___1[l_index___0]
}
// set-subscript@(json) file:///home/andy/games/keen/lib/col/buffer.keen 124:1
const set__45subscript3675437372 = (l_a___1, l_index___0, l_value___2) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	l_a___1[l_index___0] = l_value___2
}
// set-subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 124:1
const set__45subscript56910 = (l_a___1, l_index___0, l_value___2) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	l_a___1[l_index___0] = l_value___2
}
// set-subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 124:1
const set__45subscript1869705786 = (l_a___1, l_index___0, l_value___2) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	l_a___1[l_index___0] = l_value___2
}
// set-subscript@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 124:1
const set__45subscript4265806295 = (l_a___1, l_index___0, l_value___2) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	l_a___1[l_index___0] = l_value___2
}
// set-subscript@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 124:1
const set__45subscript2359692334 = (l_a___1, l_index___0, l_value___2) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	l_a___1[l_index___0] = l_value___2
}
// set-subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 124:1
const set__45subscript2957446360 = (l_a___1, l_index___0, l_value___2) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	l_a___1[l_index___0] = l_value___2
}
// set-subscript@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 124:1
const set__45subscript3842711253 = (l_a___1, l_index___0, l_value___2) => {
	if ((!__602180318207(l_index___0, l_a___1.length))) {
		throw new (index__45too__45big3896995977)(l_index___0, l_a___1.length)
	}
	l_a___1[l_index___0] = l_value___2
}
// set-subscript@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 137:1
const set__45subscript384460835 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from1806137840(subscript3665448857(l_dest___0, l_range___1), to__45array__45view3595367460(l_source___2))
// set-subscript@(char8 array) file:///home/andy/games/keen/lib/col/buffer.keen 139:1
const set__45subscript4016735242 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from640492254(subscript1177810368(l_dest___0, l_range___1), l_source___2)
// set-subscript@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 139:1
const set__45subscript3544890769 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from1806137840(subscript3665448857(l_dest___0, l_range___1), l_source___2)
// set-subscript@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 139:1
const set__45subscript4174029296 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from1718095783(subscript529545893(l_dest___0, l_range___1), l_source___2)
// set-subscript@(json) file:///home/andy/games/keen/lib/col/buffer.keen 143:1
const set__45subscript1709301082 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from2509393995(subscript81988849(l_dest___0, l_range___1), l_source___2)
// set-subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 143:1
const set__45subscript2995247678 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from1839472009(subscript3193420933(l_dest___0, l_range___1), l_source___2)
// set-subscript@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 143:1
const set__45subscript511666667 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from2078640469(subscript3665448857(l_dest___0, l_range___1), l_source___2)
// set-subscript@(write) file:///home/andy/games/keen/lib/col/buffer.keen 143:1
const set__45subscript3579331661 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from2577190316(subscript3687223329(l_dest___0, l_range___1), l_source___2)
// set-subscript@(string) file:///home/andy/games/keen/lib/col/buffer.keen 143:1
const set__45subscript1677288541 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from2251867122(subscript912053911(l_dest___0, l_range___1), l_source___2)
// set-subscript@(container) file:///home/andy/games/keen/lib/col/buffer.keen 143:1
const set__45subscript2587481676 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from4102520006(subscript2502029662(l_dest___0, l_range___1), l_source___2)
// set-subscript@(char8 array-view) file:///home/andy/games/keen/lib/col/buffer.keen 143:1
const set__45subscript1886205975 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from3436399139(subscript910872492(l_dest___0, l_range___1), l_source___2)
// set-subscript@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 143:1
const set__45subscript735872848 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from4203943769(subscript2338042479(l_dest___0, l_range___1), l_source___2)
// set-subscript@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 143:1
const set__45subscript1008927852 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from493585256(subscript529545893(l_dest___0, l_range___1), l_source___2)
// set-subscript@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 143:1
const set__45subscript2572290282 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from2237559301(subscript2483069761(l_dest___0, l_range___1), l_source___2)
// set-subscript@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 143:1
const set__45subscript2549704467 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from3033150485(subscript1678098774(l_dest___0, l_range___1), l_source___2)
// copy-from@(write) file:///home/andy/games/keen/lib/col/buffer.keen 173:1
const copy__45from2577190316 = (l_dest___0, l_source___1) =>
	copy__45from174822375(l_dest___0, cast__45immutable2569268507(l_source___1))
// copy-from@(string) file:///home/andy/games/keen/lib/col/buffer.keen 173:1
const copy__45from2251867122 = (l_dest___0, l_source___1) =>
	copy__45from3456455337(l_dest___0, cast__45immutable1988130499(l_source___1))
// copy-from@(char8 array-view) file:///home/andy/games/keen/lib/col/buffer.keen 173:1
const copy__45from3436399139 = (l_dest___0, l_source___1) =>
	copy__45from270444838(l_dest___0, cast__45immutable1520925512(l_source___1))
// copy-from@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 173:1
const copy__45from2078640469 = (l_dest___0, l_source___1) =>
	copy__45from1806137840(l_dest___0, cast__45immutable1696320176(l_source___1))
// copy-from@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 173:1
const copy__45from3033150485 = (l_dest___0, l_source___1) =>
	copy__45from293664368(l_dest___0, cast__45immutable646125858(l_source___1))
// copy-from@(container) file:///home/andy/games/keen/lib/col/buffer.keen 173:1
const copy__45from4102520006 = (l_dest___0, l_source___1) =>
	copy__45from3529321837(l_dest___0, cast__45immutable1558423898(l_source___1))
// copy-from@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 173:1
const copy__45from4203943769 = (l_dest___0, l_source___1) =>
	copy__45from3638925540(l_dest___0, cast__45immutable3887335350(l_source___1))
// copy-from@(json) file:///home/andy/games/keen/lib/col/buffer.keen 173:1
const copy__45from2509393995 = (l_dest___0, l_source___1) =>
	copy__45from2812587148(l_dest___0, cast__45immutable4163758382(l_source___1))
// copy-from@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 173:1
const copy__45from2237559301 = (l_dest___0, l_source___1) =>
	copy__45from187558430(l_dest___0, cast__45immutable3324361632(l_source___1))
// copy-from@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 173:1
const copy__45from493585256 = (l_dest___0, l_source___1) =>
	copy__45from1718095783(l_dest___0, cast__45immutable3039462001(l_source___1))
// copy-from@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 173:1
const copy__45from1839472009 = (l_dest___0, l_source___1) =>
	copy__45from3760356933(l_dest___0, cast__45immutable334104916(l_source___1))
// copy-from@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from1718095783 = (l_dest___0, l_source___1) =>
	copy__45from3606634955(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from3638925540 = (l_dest___0, l_source___1) =>
	copy__45from1388875735(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from1609311953 = (l_dest___0, l_source___1) =>
	copy__45from4249694716(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from3760356933 = (l_dest___0, l_source___1) =>
	copy__45from1681943572(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@(char8 array-view) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from270444838 = (l_dest___0, l_source___1) =>
	copy__45from3220073402(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@(string) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from3456455337 = (l_dest___0, l_source___1) =>
	copy__45from745841645(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from293664368 = (l_dest___0, l_source___1) =>
	copy__45from3284659123(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from3202770537 = (l_dest___0, l_source___1) =>
	copy__45from2865946920(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from1806137840 = (l_dest___0, l_source___1) =>
	copy__45from2685522725(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from615467714 = (l_dest___0, l_source___1) =>
	copy__45from1041304377(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@(write) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from174822375 = (l_dest___0, l_source___1) =>
	copy__45from739250780(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@(char8 array) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from640492254 = (l_dest___0, l_source___1) =>
	copy__45from3024883048(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@(json) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from2812587148 = (l_dest___0, l_source___1) =>
	copy__45from909606523(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@((string, void) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from3923343404 = (l_dest___0, l_source___1) =>
	copy__45from2124912027(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from185316348 = (l_dest___0, l_source___1) =>
	copy__45from156860203(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@(container) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from3529321837 = (l_dest___0, l_source___1) =>
	copy__45from3947263278(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from736108312 = (l_dest___0, l_source___1) =>
	copy__45from1263638476(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from187558430 = (l_dest___0, l_source___1) =>
	copy__45from1455874537(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 175:1
const copy__45from3650633205 = (l_dest___0, l_source___1) =>
	copy__45from4274435792(l_dest___0.inner, __46__462451799117(l_dest___0.low, l_dest___0.high), l_source___1.inner, __46__462451799117(l_source___1.low, l_source___1.high))
// copy-from@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from156860203 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable1074641699(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from1041304377 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable1390345585(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from3606634955 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable3684834372(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@(write) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from739250780 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable1816910386(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from1263638476 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable42242416(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@(container) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from3947263278 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable1347679571(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@((string, void) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from2124912027 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable2580202387(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from4274435792 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable790827560(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@(char8 array-view) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from3220073402 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable1116472975(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from3284659123 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable3295702220(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@(json) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from909606523 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable2427523187(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from2865946920 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable1750329589(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@(char8 array) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from3024883048 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable1749926684(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from4249694716 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable2221201364(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from1681943572 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable1031089900(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from1455874537 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable608527898(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from1388875735 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable1552225024(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@(string) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from745841645 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable2379658670(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// copy-from@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 177:1
const copy__45from2685522725 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size3916398147(l_dest__45range___1)
	if ((!(size3916398147(l_src__45range___2) === l_size___0))) {
		throw new (error4175136409)(c____337())
	}
	if ((!__60__612052354958(l_dest__45range___1.high, l_dest___3.length))) {
		throw new (error4175136409)(c____336())
	}
	if ((!__60__612052354958(l_src__45range___2.high, l_src___4.length))) {
		throw new (error4175136409)(c____335())
	}
	const l_dl___5 = l_dest__45range___1.low
	const l_sl___6 = l_src__45range___2.low
	const l_dest__45low___7 = to__45js__45float3636138472(l_dest__45range___1.low)
	const l_src__45low___8 = to__45js__45float3636138472(l_src__45range___2.low)
	const l_src__45high___9 = to__45js__45float3636138472(l_src__45range___2.high)
	if ((l_dest___3 === cast__45mutable1476287322(l_src___4))) {
		(void l_dest___3.copyWithin(l_dest__45low___7, l_src__45low___8, l_src__45high___9))
	} else {
		if (to3736759396(_global.ArrayBuffer.isView(l_dest___3))) {
			const l_sub___10 = l_src___4.subarray(l_src__45low___8, l_src__45high___9)
			;(void l_dest___3.set(l_sub___10, l_dest__45low___7))
		} else {
			let l_i___11 = 0
			x_loop___0: while (true){
				if ((l_i___11 === l_size___0)) {
					break  x_loop___0
				} else {
					l_dest___3[__431111513593(l_dl___5, l_i___11)] = l_src___4[__431111513593(l_sl___6, l_i___11)]
					l_i___11 = __431111513593(l_i___11, 1)
					continue
				}
			}
		}
	}
}
// to-js-float file:///home/andy/games/keen/lib/col/buffer.keen 203:1
const to__45js__45float3636138472 = l_a___0 =>
	to958312080(l_a___0)
// map=@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 206:1
const map__613072090457 = (l_a___1, l_f___2) => {
	let l_i___0 = 0
	x_loop___0: while (true){
		if ((l_i___0 === size2793433331(l_a___1))) {
			break  x_loop___0
		} else {
			set__45subscript444602806(l_a___1, l_i___0, l_f___2(subscript3371076184(l_a___1, l_i___0)))
			l_i___0 = __431111513593(l_i___0, 1)
			continue
		}
	}
}
// cast-immutable@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable3438095008 = l_a___0 =>
	l_a___0
// cast-immutable@(char8 array-view) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable3116128247 = l_a___0 =>
	l_a___0
// cast-immutable@((json, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable4063062948 = l_a___0 =>
	l_a___0
// cast-immutable@(token) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable1110928727 = l_a___0 =>
	l_a___0
// cast-immutable@((string, void) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable2537439471 = l_a___0 =>
	l_a___0
// cast-immutable@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable3769887050 = l_a___0 =>
	l_a___0
// cast-immutable@(char8 array) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable1682238412 = l_a___0 =>
	l_a___0
// cast-immutable@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable4271026254 = l_a___0 =>
	l_a___0
// cast-immutable@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable330973840 = l_a___0 =>
	l_a___0
// cast-immutable@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable1000554956 = l_a___0 =>
	l_a___0
// cast-immutable@(json) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable2616233909 = l_a___0 =>
	l_a___0
// cast-immutable@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable3544078916 = l_a___0 =>
	l_a___0
// cast-immutable@(write) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable3319498073 = l_a___0 =>
	l_a___0
// cast-immutable@(to-kid-result) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable1575952943 = l_a___0 =>
	l_a___0
// cast-immutable@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable1069848447 = l_a___0 =>
	l_a___0
// cast-immutable@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable2002750423 = l_a___0 =>
	l_a___0
// cast-immutable@(container) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable2351386012 = l_a___0 =>
	l_a___0
// cast-immutable@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable733666862 = l_a___0 =>
	l_a___0
// cast-immutable@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable3953210833 = l_a___0 =>
	l_a___0
// cast-immutable@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable3535476440 = l_a___0 =>
	l_a___0
// cast-immutable@(string) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable3213541909 = l_a___0 =>
	l_a___0
// cast-immutable@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 229:1
const cast__45immutable2253076973 = l_a___0 =>
	l_a___0
// cast-mutable@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable1390345585 = l_a___0 =>
	l_a___0
// cast-mutable@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable790827560 = l_a___0 =>
	l_a___0
// cast-mutable@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable1552225024 = l_a___0 =>
	l_a___0
// cast-mutable@(write) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable1816910386 = l_a___0 =>
	l_a___0
// cast-mutable@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable3684834372 = l_a___0 =>
	l_a___0
// cast-mutable@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable1750329589 = l_a___0 =>
	l_a___0
// cast-mutable@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable608527898 = l_a___0 =>
	l_a___0
// cast-mutable@((string, void) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable2580202387 = l_a___0 =>
	l_a___0
// cast-mutable@(string) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable2379658670 = l_a___0 =>
	l_a___0
// cast-mutable@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable1074641699 = l_a___0 =>
	l_a___0
// cast-mutable@(char8 array-view) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable1116472975 = l_a___0 =>
	l_a___0
// cast-mutable@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable2221201364 = l_a___0 =>
	l_a___0
// cast-mutable@(char8 array) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable1749926684 = l_a___0 =>
	l_a___0
// cast-mutable@(json) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable2427523187 = l_a___0 =>
	l_a___0
// cast-mutable@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable1031089900 = l_a___0 =>
	l_a___0
// cast-mutable@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable3295702220 = l_a___0 =>
	l_a___0
// cast-mutable@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable42242416 = l_a___0 =>
	l_a___0
// cast-mutable@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable1476287322 = l_a___0 =>
	l_a___0
// cast-mutable@(container) file:///home/andy/games/keen/lib/col/buffer.keen 233:1
const cast__45mutable1347679571 = l_a___0 =>
	l_a___0
// size@(char8) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size3804407810 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size2932905447 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(lsp-diagnostic) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size171374258 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(nat32) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size4177411421 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size3787013736 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@((string, void) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size2852039105 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(js-any) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size2732373121 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(char32) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size652577019 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(json) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size2774464417 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size808857809 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(write) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size3247851688 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size1848177406 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(symbol) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size967439726 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size2026358458 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@(container) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size1051281877 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// size@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/buffer.keen 264:1
const size2284668719 = l_a___0 =>
	__45997287195(l_a___0.high, l_a___0.low)
// show file:///home/andy/games/keen/lib/col/collection.keen 14:1
const show2085044308 = l_ignore___0 =>
	c____317()
// show file:///home/andy/games/keen/lib/col/collection.keen 19:1
const show651872471 = l_ignore___0 =>
	c____391()
// show file:///home/andy/games/keen/lib/col/collection.keen 24:1
const show3347041155 = l_ignore___0 =>
	c____365()
// try-take-prev@(char8, char8 array-iterator) file:///home/andy/games/keen/lib/col/collection.keen 66:1
const try__45take__45prev1129323691 = l_a___0 => {
	try {
		return take__45prev2637826104(l_a___0)
	} catch (x_error___0) {
		if ((x_error___0 instanceof iterator__45out__45of__45bounds2781000628)) {
			return c____307()
		} else {
			throw x_error___0
		}
	}
}
// try-take-next@(char8, char8 array-iterator) file:///home/andy/games/keen/lib/col/collection.keen 71:1
const try__45take__45next872227179 = l_a___0 => {
	try {
		return take__45next857232194(l_a___0)
	} catch (x_error___0) {
		if ((x_error___0 instanceof iterator__45out__45of__45bounds2781000628)) {
			return c____307()
		} else {
			throw x_error___0
		}
	}
}
// to-index@((symbol, json) tuple2 array-view) file:///home/andy/games/keen/lib/col/collection.keen 93:1
const to__45index27901025 = (l_a___1, l_index___3) => {
	const l_size___0 = size2521472917(l_a___1)
	const l_sub___2 = l_index___3.subtract
	if ((!__60__612052354958(l_sub___2, l_size___0))) {
		throw new (index__45too__45big3896995977)(l_sub___2, __431111513593(l_size___0, 1))
	}
	return __45997287195(size2521472917(l_a___1), l_index___3.subtract)
}
// to-index@(char8 array array) file:///home/andy/games/keen/lib/col/collection.keen 93:1
const to__45index3828846467 = (l_a___1, l_index___3) => {
	const l_size___0 = l_a___1.length
	const l_sub___2 = l_index___3.subtract
	if ((!__60__612052354958(l_sub___2, l_size___0))) {
		throw new (index__45too__45big3896995977)(l_sub___2, __431111513593(l_size___0, 1))
	}
	return __45997287195(l_a___1.length, l_index___3.subtract)
}
// to-index@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer-view) file:///home/andy/games/keen/lib/col/collection.keen 93:1
const to__45index2306530706 = (l_a___1, l_index___3) => {
	const l_size___0 = size3039289938(l_a___1)
	const l_sub___2 = l_index___3.subtract
	if ((!__60__612052354958(l_sub___2, l_size___0))) {
		throw new (index__45too__45big3896995977)(l_sub___2, __431111513593(l_size___0, 1))
	}
	return __45997287195(size3039289938(l_a___1), l_index___3.subtract)
}
// to-index@((symbol, string) tuple2 array-view) file:///home/andy/games/keen/lib/col/collection.keen 93:1
const to__45index775543287 = (l_a___1, l_index___3) => {
	const l_size___0 = size1591420419(l_a___1)
	const l_sub___2 = l_index___3.subtract
	if ((!__60__612052354958(l_sub___2, l_size___0))) {
		throw new (index__45too__45big3896995977)(l_sub___2, __431111513593(l_size___0, 1))
	}
	return __45997287195(size1591420419(l_a___1), l_index___3.subtract)
}
// to-index@(char8 array-view) file:///home/andy/games/keen/lib/col/collection.keen 93:1
const to__45index3286892211 = (l_a___1, l_index___3) => {
	const l_size___0 = size1763153932(l_a___1)
	const l_sub___2 = l_index___3.subtract
	if ((!__60__612052354958(l_sub___2, l_size___0))) {
		throw new (index__45too__45big3896995977)(l_sub___2, __431111513593(l_size___0, 1))
	}
	return __45997287195(size1763153932(l_a___1), l_index___3.subtract)
}
// to-index@(json buffer-view) file:///home/andy/games/keen/lib/col/collection.keen 93:1
const to__45index1589016340 = (l_a___1, l_index___3) => {
	const l_size___0 = size397993469(l_a___1)
	const l_sub___2 = l_index___3.subtract
	if ((!__60__612052354958(l_sub___2, l_size___0))) {
		throw new (index__45too__45big3896995977)(l_sub___2, __431111513593(l_size___0, 1))
	}
	return __45997287195(size397993469(l_a___1), l_index___3.subtract)
}
// to-index@((symbol, string) tuple2 buffer-view) file:///home/andy/games/keen/lib/col/collection.keen 93:1
const to__45index3249306317 = (l_a___1, l_index___3) => {
	const l_size___0 = size2985755893(l_a___1)
	const l_sub___2 = l_index___3.subtract
	if ((!__60__612052354958(l_sub___2, l_size___0))) {
		throw new (index__45too__45big3896995977)(l_sub___2, __431111513593(l_size___0, 1))
	}
	return __45997287195(size2985755893(l_a___1), l_index___3.subtract)
}
// to-index@(char8 array array-view) file:///home/andy/games/keen/lib/col/collection.keen 93:1
const to__45index879965573 = (l_a___1, l_index___3) => {
	const l_size___0 = size1415619227(l_a___1)
	const l_sub___2 = l_index___3.subtract
	if ((!__60__612052354958(l_sub___2, l_size___0))) {
		throw new (index__45too__45big3896995977)(l_sub___2, __431111513593(l_size___0, 1))
	}
	return __45997287195(size1415619227(l_a___1), l_index___3.subtract)
}
// to-index@(container mut-array) file:///home/andy/games/keen/lib/col/collection.keen 93:1
const to__45index2954147295 = (l_a___1, l_index___3) => {
	const l_size___0 = size2228699078(l_a___1)
	const l_sub___2 = l_index___3.subtract
	if ((!__60__612052354958(l_sub___2, l_size___0))) {
		throw new (index__45too__45big3896995977)(l_sub___2, __431111513593(l_size___0, 1))
	}
	return __45997287195(size2228699078(l_a___1), l_index___3.subtract)
}
// to-index@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view) file:///home/andy/games/keen/lib/col/collection.keen 93:1
const to__45index512393638 = (l_a___1, l_index___3) => {
	const l_size___0 = size841731723(l_a___1)
	const l_sub___2 = l_index___3.subtract
	if ((!__60__612052354958(l_sub___2, l_size___0))) {
		throw new (index__45too__45big3896995977)(l_sub___2, __431111513593(l_size___0, 1))
	}
	return __45997287195(size841731723(l_a___1), l_index___3.subtract)
}
// to-index@((symbol, json) tuple2 buffer-view) file:///home/andy/games/keen/lib/col/collection.keen 93:1
const to__45index1529606635 = (l_a___1, l_index___3) => {
	const l_size___0 = size4235011680(l_a___1)
	const l_sub___2 = l_index___3.subtract
	if ((!__60__612052354958(l_sub___2, l_size___0))) {
		throw new (index__45too__45big3896995977)(l_sub___2, __431111513593(l_size___0, 1))
	}
	return __45997287195(size4235011680(l_a___1), l_index___3.subtract)
}
// to-index@(symbol buffer-view) file:///home/andy/games/keen/lib/col/collection.keen 93:1
const to__45index955250022 = (l_a___1, l_index___3) => {
	const l_size___0 = size965608342(l_a___1)
	const l_sub___2 = l_index___3.subtract
	if ((!__60__612052354958(l_sub___2, l_size___0))) {
		throw new (index__45too__45big3896995977)(l_sub___2, __431111513593(l_size___0, 1))
	}
	return __45997287195(size965608342(l_a___1), l_index___3.subtract)
}
// - file:///home/andy/games/keen/lib/col/collection.keen 99:1
const __454246740820 = (l_a___0, l_n___1) =>
	new (index__45relative__45to__45end4294105604)(__431111513593(l_a___0.subtract, l_n___1))
// .. file:///home/andy/games/keen/lib/col/collection.keen 104:1
const __46__461225104787 = (l_low___0, l_high___1) =>
	new (range__45relative__45to__45end4053887874)(l_low___0, l_high___1)
// first@(char32, nat64 range, nat64) file:///home/andy/games/keen/lib/col/collection.keen 114:1
const first628900346 = (l_a___1, l_f___3) => {
	let l_res___0 = c____307()
	;(void some2014043021(l_a___1, l_x___2 => {
			l_res___0 = l_f___3(l_x___2)
			return ((typeof l_res___0) === "number")
		}))
	return l_res___0
}
// find@(lsp-diagnostic array, lsp-diagnostic) file:///home/andy/games/keen/lib/col/collection.keen 132:1
const _async_find1994827697 = async (l_a___1, l_f___3) => {
	let l_res___0 = c____307()
	;(void (await _async_some2019179498(l_a___1, async l_x___2 => {
			if ((await l_f___3(l_x___2))) {
				l_res___0 = l_x___2
				return true
			} else {
				return false
			}
		})))
	return l_res___0
}
// find-index@(language array, language) file:///home/andy/games/keen/lib/col/collection.keen 149:1
const find__45index276538056 = (l_a___2, l_f___4) => {
	let l_ok___1, l_i___0
	return ((l_i___0 = 0) , ((l_ok___1 = some3010051088(l_a___2, l_x___3 => {
			if (l_f___4(l_x___3)) {
				return true
			} else {
				l_i___0 = __431111513593(l_i___0, 1)
				return false
			}
		})) , (l_ok___1 ? l_i___0 : c____307())))
}
// find-index@(char8 array, char8) file:///home/andy/games/keen/lib/col/collection.keen 149:1
const find__45index1343117139 = (l_a___2, l_f___4) => {
	let l_ok___1, l_i___0
	return ((l_i___0 = 0) , ((l_ok___1 = some944888123(l_a___2, l_x___3 => {
			if (l_f___4(l_x___3)) {
				return true
			} else {
				l_i___0 = __431111513593(l_i___0, 1)
				return false
			}
		})) , (l_ok___1 ? l_i___0 : c____307())))
}
// contains@(string, char8) file:///home/andy/games/keen/lib/col/collection.keen 184:1
const contains3714331898 = (l_xs___0, l_value___2) =>
	some2526691981(l_xs___0, l_it___1 =>
			(l_it___1 === l_value___2))
// index-of@(char8 array, char8) file:///home/andy/games/keen/lib/col/collection.keen 188:1
const index__45of1218548288 = (l_a___0, l_search__45value___2) =>
	find__45index1343117139(l_a___0, l_it___1 =>
			(l_it___1 === l_search__45value___2))
// index-of@(language array, language) file:///home/andy/games/keen/lib/col/collection.keen 188:1
const index__45of639584324 = (l_a___0, l_search__45value___2) =>
	find__45index276538056(l_a___0, l_it___1 =>
			__61__614030729273(l_it___1, l_search__45value___2))
// every@((json, json) tuple2 array, (json, json) tuple2) file:///home/andy/games/keen/lib/col/collection.keen 197:1
const every3855994367 = (l_a___0, l_f___2) =>
	(!some961091973(l_a___0, l_it___1 =>
			(!l_f___2(l_it___1))))
// from-option@(js-any array-view, js-any) file:///home/andy/games/keen/lib/col/collection.keen 234:1
const from__45option550491835 = l_a___0 =>
	((l_a___0.index === 1) ? to__45array__45view1184452394(list__45new574588355([l_a___0.value])) : to__45array__45view1184452394(c____253()))
// new@(symbol, symbol-key) file:///home/andy/games/keen/lib/col/experimental/object-memoizer.keen 26:1
const new3400181018 = () =>
	new (object__45memoizer1105023747)(0, 1, index__45mask__45for1470338807(1), new (Array)(2).fill(null))
// index-mask-for file:///home/andy/games/keen/lib/col/experimental/object-memoizer.keen 37:1
const index__45mask__45for1470338807 = l_capacity__45log__452___0 =>
	low__45n__45bits597136961(l_capacity__45log__452___0)
// memoize@(symbol, symbol-key) file:///home/andy/games/keen/lib/col/experimental/object-memoizer.keen 41:1
const memoize2253388084 = (l_a___1, l_key___2, l_make__45value___4) => {
	let l_temp___5
	const l_member2___0 = find672400032(l_a___1, l_key___2)
	const x_matched___0 = l_member2___0
	if ((x_matched___0 instanceof none2082914084)) {
		const l_value___3 = l_make__45value___4((void 0))
		must__45insert3765920978(l_a___1, l_value___3)
		return l_value___3
	} else {
		if ((x_matched___0 instanceof symbol3223697568)) {
			return ((l_temp___5 = l_member2___0) , l_temp___5)
		} else {
			return _unreachable()
		}
	}
}
// find@(symbol, symbol-key) file:///home/andy/games/keen/lib/col/experimental/object-memoizer.keen 47:1
const find672400032 = (l_a___1, l_key___2) => {
	let x_got___0
	let l_i___0 = ideal__45index221036041(l_a___1, l_key___2)
	let l_cost___3 = 0
	while (true){
		const l_temp___4 = (() => {
			if (__621787529867(l_cost___3, l_a___1["max-cost"])) {
				return new (option2977935469)(1, c____307())
			} else {
				const l_temp___5 = ((x_got___0 = l_a___1.entries[l_i___0]?.deref()) , ((x_got___0 === (void 0)) ? new (none2082914084)() : x_got___0))
				const l_v___6 = l_temp___5
				if (((l_temp___5 instanceof symbol3223697568) ? __61__613308602880(memoizer__45key3970129714(l_v___6), l_key___2) : false)) {
					return new (option2977935469)(1, l_v___6)
				} else {
					l_i___0 = next__45index2074042042(l_a___1, l_i___0)
					l_cost___3 = __431111513593(l_cost___3, 1)
					return new (option2977935469)(0, c____307())
				}
			}
		})()
		const x_matched___1 = l_temp___4
		if ((x_matched___1.index === 0)) {
			continue
		} else {
			if ((x_matched___1.index === 1)) {
				return l_temp___4.value
			} else {
				return _unreachable()
			}
		}
	}
}
// must-insert@(symbol, symbol-key) file:///home/andy/games/keen/lib/col/experimental/object-memoizer.keen 61:1
const must__45insert3765920978 = (l_a___3, l_top__45value___1) => {
	let x_got___1
	let l_value___0 = l_top__45value___1
	let l_i___2 = ideal__45index221036041(l_a___3, memoizer__45key3970129714(l_value___0))
	let l_cost___4 = 0
	x_loop___0: while (true){
		const l_temp___5 = ((x_got___1 = subscript1864161571(l_a___3.entries, l_i___2)?.deref()) , ((x_got___1 === (void 0)) ? new (none2082914084)() : x_got___1))
		const l_v___6 = l_temp___5
		if ((l_temp___5 instanceof symbol3223697568)) {
			const l_its__45home___7 = ideal__45index221036041(l_a___3, memoizer__45key3970129714(l_v___6))
			const l_its__45cost___8 = cost2752255309(l_a___3, l_its__45home___7, l_i___2)
			if (__621787529867(l_cost___4, l_its__45cost___8)) {
				l_a___3.entries[l_i___2] = new (WeakRef)(l_value___0)
				l_value___0 = l_v___6
				l_cost___4 = l_its__45cost___8
			}
			l_i___2 = next__45index2074042042(l_a___3, l_i___2)
			l_cost___4 = __431111513593(l_cost___4, 1)
			if (__62__61724884600(l_cost___4, l_a___3["max-cost"])) {
				l_a___3["max-cost"] = l_cost___4
				if (__621787529867(l_a___3["max-cost"], max__45max__45cost676093227(l_a___3))) {
					increase__45capacity3466711182(l_a___3)
					l_i___2 = ideal__45index221036041(l_a___3, memoizer__45key3970129714(l_value___0))
					l_cost___4 = 0
				}
			}
			continue
		} else {
			break  x_loop___0
		}
	}
	l_a___3.entries[l_i___2] = new (WeakRef)(l_value___0)
}
// max-max-cost@(symbol, symbol-key) file:///home/andy/games/keen/lib/col/experimental/object-memoizer.keen 82:1
const max__45max__45cost676093227 = l_a___0 =>
	__471416517417(l_a___0["capacity-log-2"], 2)
// increase-capacity@(symbol, symbol-key) file:///home/andy/games/keen/lib/col/experimental/object-memoizer.keen 85:1
const increase__45capacity3466711182 = l_a___1 => {
	let x_got___0, l_v___4, l_temp___3
	const l_old__45entries___0 = l_a___1.entries
	l_a___1["max-cost"] = 0
	l_a___1["capacity-log-2"] = __431111513593(l_a___1["capacity-log-2"], 1)
	l_a___1["index-mask"] = index__45mask__45for1470338807(l_a___1["capacity-log-2"])
	l_a___1.entries = new (Array)(__60__602633832601(1, l_a___1["capacity-log-2"])).fill(null)
	for (const l_x___2 of l_old__45entries___0) {
		((l_temp___3 = ((x_got___0 = l_x___2?.deref()) , ((x_got___0 === (void 0)) ? new (none2082914084)() : x_got___0))) , ((l_v___4 = l_temp___3) , ((l_temp___3 instanceof symbol3223697568) ? must__45insert3765920978(l_a___1, l_v___4) : (void 0))))
	}
}
// ideal-index@(symbol, symbol-key) file:///home/andy/games/keen/lib/col/experimental/object-memoizer.keen 95:1
const ideal__45index221036041 = (l_a___1, l_key___0) =>
	((Number((l_key___0.hash & 4294967295n)) & l_a___1["index-mask"]) >>> 0)
// next-index@(symbol, symbol-key) file:///home/andy/games/keen/lib/col/experimental/object-memoizer.keen 97:1
const next__45index2074042042 = (l_a___1, l_index___0) =>
	((((l_index___0 + 1) >>> 0) & l_a___1["index-mask"]) >>> 0)
// cost@(symbol, symbol-key) file:///home/andy/games/keen/lib/col/experimental/object-memoizer.keen 99:1
const cost2752255309 = (l_a___2, l_ideal__45index___0, l_actual__45index___1) =>
	(__60__612052354958(l_ideal__45index___0, l_actual__45index___1) ? __45997287195(l_actual__45index___1, l_ideal__45index___0) : __431111513593(__45997287195(l_a___2.entries.length, l_ideal__45index___0), l_actual__45index___1))
// to@(symbol, json) file:///home/andy/games/keen/lib/col/map.keen 40:1
const to2817209971 = l_a___1 => {
	let l_key___4, l_value___3, l_parts___0
	return ((l_parts___0 = for__45loop3949055276(l_a___1, l_destruct___2 =>
			((l_value___3 = l_destruct___2.b) , ((l_key___4 = l_destruct___2.a) , new (tuple22302439997)(to208883145(l_key___4), to1057654961(l_value___3)))))) , (every3855994367(l_parts___0, l_it___5 =>
			(as__45string910492498(l_it___5.a) instanceof string2245870778)) ? named__45new3677225874(l_parts___0.map(l_it___6 =>
				to2584131937(to845310736(l_it___6.a))), l_parts___0.map(l_it___7 =>
				l_it___7.b)) : to4209540220(l_parts___0)))
}
// as-string file:///home/andy/games/keen/lib/col/map.keen 47:1
const as__45string910492498 = l_a___0 => {
	try {
		return to845310736(l_a___0)
	} catch (x_error___0) {
		if ((x_error___0 instanceof deserialize__45error2968075170)) {
			return c____307()
		} else {
			throw x_error___0
		}
	}
}
// list-new@(symbol, json) file:///home/andy/games/keen/lib/col/map.keen 84:1
const list__45new556806094 = l_a___0 =>
	to3575042296(l_a___0)
// list-new@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/map.keen 84:1
const list__45new3858692973 = l_a___0 =>
	to3165772354(l_a___0)
// list-new@(symbol, string) file:///home/andy/games/keen/lib/col/map.keen 84:1
const list__45new3679651572 = l_a___0 =>
	to920143968(l_a___0)
// named-new@((js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/map.keen 88:1
const named__45new3230602612 = (l_keys___0, l_values___1) => {
	let l_i___4, l_key___3
	is__45impl1347765191(l_keys___0.length, l_values___1.length)
	return for__45loop271853032(new (with__45index595347435)(l_keys___0), l_destruct___2 =>
			((l_key___3 = l_destruct___2.b) , ((l_i___4 = l_destruct___2.a) , new (tuple21153105472)(l_key___3, l_values___1[l_i___4]))))
}
// named-new@(string) file:///home/andy/games/keen/lib/col/map.keen 88:1
const named__45new165309411 = (l_keys___0, l_values___1) => {
	let l_i___4, l_key___3
	is__45impl1347765191(l_keys___0.length, l_values___1.length)
	return for__45loop710286415(new (with__45index595347435)(l_keys___0), l_destruct___2 =>
			((l_key___3 = l_destruct___2.b) , ((l_i___4 = l_destruct___2.a) , new (tuple24137037281)(l_key___3, l_values___1[l_i___4]))))
}
// to@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/map.keen 95:1
const to3165772354 = l_a___0 =>
	((__60__612052354958(l_a___0.length, 4) ? (!has__45duplicate__45keys1872295620(to__45array__45view2195292310(l_a___0))) : false) ? new (map859274043)(l_a___0) : new (map859274043)(to1844180024(l_a___0)))
// to@(symbol, string) file:///home/andy/games/keen/lib/col/map.keen 95:1
const to920143968 = l_a___0 =>
	((__60__612052354958(l_a___0.length, 4) ? (!has__45duplicate__45keys1134616639(to__45array__45view1373033965(l_a___0))) : false) ? new (map3309966616)(l_a___0) : new (map3309966616)(to1944245961(l_a___0)))
// to@(symbol, json) file:///home/andy/games/keen/lib/col/map.keen 95:1
const to3575042296 = l_a___0 =>
	((__60__612052354958(l_a___0.length, 4) ? (!has__45duplicate__45keys2383568887(to__45array__45view3154170536(l_a___0))) : false) ? new (map4142821256)(l_a___0) : new (map4142821256)(to3673573185(l_a___0)))
// has-duplicate-keys@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/map.keen 111:1
const has__45duplicate__45keys1872295620 = l_a___0 => {
	const x_matched___0 = size841731723(l_a___0)
	switch (x_matched___0) {
		case 0:
		case 1:{
			return false
		}
		case 2:{
			return __61__61718055455(subscript1128293028(l_a___0, 0).a, subscript1128293028(l_a___0, 1).a)
		}
		case 3:{
			return ((__61__61718055455(subscript1128293028(l_a___0, 0).a, subscript1128293028(l_a___0, 1).a) ? true : __61__61718055455(subscript1128293028(l_a___0, 0).a, subscript1128293028(l_a___0, 2).a)) ? true : has__45duplicate__45keys1872295620(subscript1949026524(l_a___0, __46__462451799117(1, size841731723(l_a___0)))))
		}
		case 4:{
			return (((__61__61718055455(subscript1128293028(l_a___0, 0).a, subscript1128293028(l_a___0, 1).a) ? true : __61__61718055455(subscript1128293028(l_a___0, 0).a, subscript1128293028(l_a___0, 2).a)) ? true : __61__61718055455(subscript1128293028(l_a___0, 0).a, subscript1128293028(l_a___0, 3).a)) ? true : has__45duplicate__45keys1872295620(subscript1949026524(l_a___0, __46__462451799117(1, size841731723(l_a___0)))))
		}
		default:{
			throw new (unreachable754248293)()
		}
	}
}
// has-duplicate-keys@(symbol, json) file:///home/andy/games/keen/lib/col/map.keen 111:1
const has__45duplicate__45keys2383568887 = l_a___0 => {
	const x_matched___0 = size2521472917(l_a___0)
	switch (x_matched___0) {
		case 0:
		case 1:{
			return false
		}
		case 2:{
			return __61__61718055455(subscript1534365554(l_a___0, 0).a, subscript1534365554(l_a___0, 1).a)
		}
		case 3:{
			return ((__61__61718055455(subscript1534365554(l_a___0, 0).a, subscript1534365554(l_a___0, 1).a) ? true : __61__61718055455(subscript1534365554(l_a___0, 0).a, subscript1534365554(l_a___0, 2).a)) ? true : has__45duplicate__45keys2383568887(subscript3967686030(l_a___0, __46__462451799117(1, size2521472917(l_a___0)))))
		}
		case 4:{
			return (((__61__61718055455(subscript1534365554(l_a___0, 0).a, subscript1534365554(l_a___0, 1).a) ? true : __61__61718055455(subscript1534365554(l_a___0, 0).a, subscript1534365554(l_a___0, 2).a)) ? true : __61__61718055455(subscript1534365554(l_a___0, 0).a, subscript1534365554(l_a___0, 3).a)) ? true : has__45duplicate__45keys2383568887(subscript3967686030(l_a___0, __46__462451799117(1, size2521472917(l_a___0)))))
		}
		default:{
			throw new (unreachable754248293)()
		}
	}
}
// has-duplicate-keys@(symbol, string) file:///home/andy/games/keen/lib/col/map.keen 111:1
const has__45duplicate__45keys1134616639 = l_a___0 => {
	const x_matched___0 = size1591420419(l_a___0)
	switch (x_matched___0) {
		case 0:
		case 1:{
			return false
		}
		case 2:{
			return __61__61718055455(subscript2193624788(l_a___0, 0).a, subscript2193624788(l_a___0, 1).a)
		}
		case 3:{
			return ((__61__61718055455(subscript2193624788(l_a___0, 0).a, subscript2193624788(l_a___0, 1).a) ? true : __61__61718055455(subscript2193624788(l_a___0, 0).a, subscript2193624788(l_a___0, 2).a)) ? true : has__45duplicate__45keys1134616639(subscript3056293940(l_a___0, __46__462451799117(1, size1591420419(l_a___0)))))
		}
		case 4:{
			return (((__61__61718055455(subscript2193624788(l_a___0, 0).a, subscript2193624788(l_a___0, 1).a) ? true : __61__61718055455(subscript2193624788(l_a___0, 0).a, subscript2193624788(l_a___0, 2).a)) ? true : __61__61718055455(subscript2193624788(l_a___0, 0).a, subscript2193624788(l_a___0, 3).a)) ? true : has__45duplicate__45keys1134616639(subscript3056293940(l_a___0, __46__462451799117(1, size1591420419(l_a___0)))))
		}
		default:{
			throw new (unreachable754248293)()
		}
	}
}
// size@(symbol, string) file:///home/andy/games/keen/lib/col/map.keen 137:1
const size2747367453 = l_a___0 =>
	size2372937815(l_a___0.root)
// size@(symbol, json) file:///home/andy/games/keen/lib/col/map.keen 137:1
const size354423489 = l_a___0 =>
	size3252365430(l_a___0.root)
// size@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/map.keen 137:1
const size1223805032 = l_a___0 =>
	size2175981018(l_a___0.root)
// size@(symbol, string) file:///home/andy/games/keen/lib/col/map.keen 139:1
const size2372937815 = l_a___0 => {
	const x_matched___0 = l_a___0
	if ((x_matched___0 instanceof frozen__45map3926701578)) {
		return size2564951713(l_a___0)
	} else {
		if ((x_matched___0 instanceof inner__45node422147294)) {
			let l_acc___1 = 0
			for (const l_child___2 of l_a___0.nodes) {
				l_acc___1 = __431111513593(l_acc___1, size2372937815(l_child___2))
			}
			return l_acc___1
		} else {
			if ((x_matched___0 instanceof Array)) {
				return l_a___0.length
			} else {
				return _unreachable()
			}
		}
	}
}
// size@(symbol, json) file:///home/andy/games/keen/lib/col/map.keen 139:1
const size3252365430 = l_a___0 => {
	const x_matched___0 = l_a___0
	if ((x_matched___0 instanceof frozen__45map2559355386)) {
		return size2002274072(l_a___0)
	} else {
		if ((x_matched___0 instanceof inner__45node770848572)) {
			let l_acc___1 = 0
			for (const l_child___2 of l_a___0.nodes) {
				l_acc___1 = __431111513593(l_acc___1, size3252365430(l_child___2))
			}
			return l_acc___1
		} else {
			if ((x_matched___0 instanceof Array)) {
				return l_a___0.length
			} else {
				return _unreachable()
			}
		}
	}
}
// size@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/map.keen 139:1
const size2175981018 = l_a___0 => {
	const x_matched___0 = l_a___0
	if ((x_matched___0 instanceof frozen__45map1226946341)) {
		return size1987842740(l_a___0)
	} else {
		if ((x_matched___0 instanceof inner__45node941687154)) {
			let l_acc___1 = 0
			for (const l_child___2 of l_a___0.nodes) {
				l_acc___1 = __431111513593(l_acc___1, size2175981018(l_child___2))
			}
			return l_acc___1
		} else {
			if ((x_matched___0 instanceof Array)) {
				return l_a___0.length
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(symbol, json) file:///home/andy/games/keen/lib/col/map.keen 406:1
const some1423365738 = (l_a___0, l_f___3) =>
	some1837471988(sort4175024710(map4061624433(unsorted131024843(l_a___0), l_it___1 =>
					l_it___1), l_it___2 =>
				l_it___2.a), l_f___3)
// some@(symbol, string) file:///home/andy/games/keen/lib/col/map.keen 406:1
const some4154674450 = (l_a___0, l_f___3) =>
	some399969416(sort2738655761(map3143236912(unsorted4281699810(l_a___0), l_it___1 =>
					l_it___1), l_it___2 =>
				l_it___2.a), l_f___3)
// some@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/map.keen 406:1
const some3068446813 = (l_a___0, l_f___3) =>
	some2890906337(sort3344131003(map1883797490(unsorted1832013812(l_a___0), l_it___1 =>
					l_it___1), l_it___2 =>
				l_it___2.a), l_f___3)
// unsorted@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/map.keen 411:1
const unsorted1832013812 = l_a___0 =>
	new (map__45unsorted1552830656)(l_a___0)
// unsorted@(symbol, json) file:///home/andy/games/keen/lib/col/map.keen 411:1
const unsorted131024843 = l_a___0 =>
	new (map__45unsorted4206957991)(l_a___0)
// unsorted@(symbol, string) file:///home/andy/games/keen/lib/col/map.keen 411:1
const unsorted4281699810 = l_a___0 =>
	new (map__45unsorted2006688974)(l_a___0)
// size@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/map.keen 413:1
const size2257947935 = l_a___0 =>
	size1223805032(l_a___0.inner)
// size@(symbol, string) file:///home/andy/games/keen/lib/col/map.keen 413:1
const size1797154261 = l_a___0 =>
	size2747367453(l_a___0.inner)
// size@(symbol, json) file:///home/andy/games/keen/lib/col/map.keen 413:1
const size70031066 = l_a___0 =>
	size354423489(l_a___0.inner)
// some@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/map.keen 415:1
const some1931228069 = (l_a___0, l_f___1) =>
	some__45recur4192381907(l_a___0.inner.root, l_f___1)
// some@(symbol, string) file:///home/andy/games/keen/lib/col/map.keen 415:1
const some1233302123 = (l_a___0, l_f___1) =>
	some__45recur3231365126(l_a___0.inner.root, l_f___1)
// some@(symbol, json) file:///home/andy/games/keen/lib/col/map.keen 415:1
const some536682856 = (l_a___0, l_f___1) =>
	some__45recur1845635197(l_a___0.inner.root, l_f___1)
// some-recur@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/map.keen 417:1
const some__45recur4192381907 = (l_a___0, l_f___1) => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof frozen__45map1226946341) ? some84066070(l_a___0, l_f___1) : ((x_matched___0 instanceof inner__45node941687154) ? some2297015836(l_a___0.nodes, l_it___2 =>
			some__45recur4192381907(l_it___2, l_f___1)) : ((x_matched___0 instanceof Array) ? some2890906337(l_a___0, l_f___1) : _unreachable()))))
}
// some-recur@(symbol, string) file:///home/andy/games/keen/lib/col/map.keen 417:1
const some__45recur3231365126 = (l_a___0, l_f___1) => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof frozen__45map3926701578) ? some2721230765(l_a___0, l_f___1) : ((x_matched___0 instanceof inner__45node422147294) ? some2138494860(l_a___0.nodes, l_it___2 =>
			some__45recur3231365126(l_it___2, l_f___1)) : ((x_matched___0 instanceof Array) ? some399969416(l_a___0, l_f___1) : _unreachable()))))
}
// some-recur@(symbol, json) file:///home/andy/games/keen/lib/col/map.keen 417:1
const some__45recur1845635197 = (l_a___0, l_f___1) => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof frozen__45map2559355386) ? some2732707768(l_a___0, l_f___1) : ((x_matched___0 instanceof inner__45node770848572) ? some1771446167(l_a___0.nodes, l_it___2 =>
			some__45recur1845635197(l_it___2, l_f___1)) : ((x_matched___0 instanceof Array) ? some1837471988(l_a___0, l_f___1) : _unreachable()))))
}
// assert-can-read@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 45:1
const assert__45can__45read304645100 = l_a___0 => {
	if ((!can__45read3810004990(l_a___0))) {
		throw new (was__45locked1331463512)()
	}
}
// assert-can-read@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 45:1
const assert__45can__45read2069741502 = l_a___0 => {
	if ((!can__45read1823212960(l_a___0))) {
		throw new (was__45locked1331463512)()
	}
}
// assert-can-read@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 45:1
const assert__45can__45read2132186130 = l_a___0 => {
	if ((!can__45read1281253652(l_a___0))) {
		throw new (was__45locked1331463512)()
	}
}
// can-read@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 47:1
const can__45read1823212960 = l_a___0 =>
	(((l_a___0["size-and-locked"] & top__45bit3939825477()) >>> 0) === 0)
// can-read@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 47:1
const can__45read3810004990 = l_a___0 =>
	(((l_a___0["size-and-locked"] & top__45bit3939825477()) >>> 0) === 0)
// can-read@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 47:1
const can__45read1281253652 = l_a___0 =>
	(((l_a___0["size-and-locked"] & top__45bit3939825477()) >>> 0) === 0)
// assert-can-write@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 49:1
const assert__45can__45write3990574511 = l_a___0 => {
	if ((!can__45write696385504(l_a___0))) {
		throw new (was__45locked1331463512)()
	}
}
// assert-can-write@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 49:1
const assert__45can__45write1891175197 = l_a___0 => {
	if ((!can__45write2688077413(l_a___0))) {
		throw new (was__45locked1331463512)()
	}
}
// assert-can-write@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 49:1
const assert__45can__45write4087295219 = l_a___0 => {
	if ((!can__45write3624467583(l_a___0))) {
		throw new (was__45locked1331463512)()
	}
}
// can-write@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 51:1
const can__45write2688077413 = l_a___0 =>
	(((l_a___0["size-and-locked"] & top__45two__45bits551301567()) >>> 0) === 0)
// can-write@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 51:1
const can__45write3624467583 = l_a___0 =>
	(((l_a___0["size-and-locked"] & top__45two__45bits551301567()) >>> 0) === 0)
// can-write@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 51:1
const can__45write696385504 = l_a___0 =>
	(((l_a___0["size-and-locked"] & top__45two__45bits551301567()) >>> 0) === 0)
// top-bit file:///home/andy/games/keen/lib/col/mut-array.keen 54:1
const top__45bit3939825477 = () =>
	__60__602633832601(1, 31)
// top-two-bits file:///home/andy/games/keen/lib/col/mut-array.keen 59:1
const top__45two__45bits551301567 = () =>
	__60__602633832601(3, 30)
// any@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 62:1
const any3323400664 = l_a___0 =>
	__33__61883178196(size2228699078(l_a___0), 0)
// size@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 65:1
const size2228699078 = l_a___0 => {
	assert__45can__45read2132186130(l_a___0)
	return ((l_a___0["size-and-locked"] & 1.073741823E9) >>> 0)
}
// size@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 65:1
const size2536414649 = l_a___0 => {
	assert__45can__45read304645100(l_a___0)
	return ((l_a___0["size-and-locked"] & 1.073741823E9) >>> 0)
}
// size@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 65:1
const size3279855192 = l_a___0 => {
	assert__45can__45read2069741502(l_a___0)
	return ((l_a___0["size-and-locked"] & 1.073741823E9) >>> 0)
}
// set-size@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 68:1
const set__45size3263482273 = (l_a___0, l_size___1) => {
	assert__45can__45write1891175197(l_a___0)
	l_a___0["size-and-locked"] = l_size___1
}
// set-size@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 68:1
const set__45size316210582 = (l_a___0, l_size___1) => {
	assert__45can__45write3990574511(l_a___0)
	l_a___0["size-and-locked"] = l_size___1
}
// set-size@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 68:1
const set__45size644424734 = (l_a___0, l_size___1) => {
	assert__45can__45write4087295219(l_a___0)
	l_a___0["size-and-locked"] = l_size___1
}
// subscript@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 72:1
const subscript3040426140 = (l_a___0, l_index___1) => {
	check__45index3290495819(l_a___0, l_index___1)
	return l_a___0.backing[l_index___1]
}
// subscript@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 75:1
const subscript694856832 = (l_a___0, l_index___1) =>
	subscript3040426140(l_a___0, to__45index2954147295(l_a___0, l_index___1))
// set-subscript@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 77:1
const set__45subscript986639191 = (l_a___0, l_index___1, l_value___2) => {
	assert__45can__45write1891175197(l_a___0)
	check__45index3290495819(l_a___0, l_index___1)
	l_a___0.backing[l_index___1] = l_value___2
}
// list-new@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 84:1
const list__45new3817461744 = l_a___0 =>
	new (mut__45array1115070763)(to2793503032(l_a___0), l_a___0.length)
// list-new@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 84:1
const list__45new3839606285 = l_a___0 =>
	new (mut__45array3201692643)(to71551232(l_a___0), l_a___0.length)
// list-new@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 84:1
const list__45new744104072 = l_a___0 =>
	new (mut__45array199977359)(to1716467217(l_a___0), l_a___0.length)
// move-to@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 126:1
const move__45to295987944 = l_a___0 =>
	cast__45immutable1000554956(move__45to808658832(l_a___0))
// move-to@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 126:1
const move__45to3648669026 = l_a___0 =>
	cast__45immutable3319498073(move__45to3311873764(l_a___0))
// move-to@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 128:1
const move__45to3311873764 = l_a___0 => {
	assert__45can__45write4087295219(l_a___0)
	const l_res___1 = ((l_a___0.backing.length === size3279855192(l_a___0)) ? l_a___0.backing : to327945687(subscript3687223329(l_a___0.backing, __46__462451799117(0, size3279855192(l_a___0)))))
	l_a___0.backing = list__45new929639163(c____292())
	set__45size644424734(l_a___0, 0)
	return l_res___1
}
// move-to@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 128:1
const move__45to808658832 = l_a___0 => {
	assert__45can__45write3990574511(l_a___0)
	const l_res___1 = ((l_a___0.backing.length === size2536414649(l_a___0)) ? l_a___0.backing : to3921538797(subscript529545893(l_a___0.backing, __46__462451799117(0, size2536414649(l_a___0)))))
	l_a___0.backing = list__45new4114400339(c____253())
	set__45size316210582(l_a___0, 0)
	return l_res___1
}
// check-index@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 156:1
const check__45index3290495819 = (l_a___1, l_index___0) => {
	if ((!__602180318207(l_index___0, size2228699078(l_a___1)))) {
		throw new (index__45too__45big3896995977)(l_index___0, size2228699078(l_a___1))
	}
}
// peek@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 161:1
const peek2893765512 = l_a___0 =>
	(any3323400664(l_a___0) ? new (option1329217421)(1, subscript694856832(l_a___0, __454246740820(c____557(), 1))) : new (option1329217421)(0, c____307()))
// pop@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 167:1
const pop3076814330 = l_a___0 => {
	assert__45can__45write1891175197(l_a___0)
	if (any3323400664(l_a___0)) {
		const l_new__45size___1 = __45997287195(size2228699078(l_a___0), 1)
		const l_res___2 = subscript3040426140(l_a___0, l_new__45size___1)
		set__45subscript986639191(l_a___0, l_new__45size___1, null)
		set__45size3263482273(l_a___0, l_new__45size___1)
		return new (option1329217421)(1, l_res___2)
	} else {
		return new (option1329217421)(0, c____307())
	}
}
// ~=@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 216:1
const __126__61310725575 = (l_a___0, l_value___1) => {
	ensure__45room__45for__45one__45more3301211401(l_a___0)
	l_a___0.backing[size3279855192(l_a___0)] = l_value___1
	set__45size644424734(l_a___0, __431111513593(size3279855192(l_a___0), 1))
}
// ~=@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 216:1
const __126__6177877711 = (l_a___0, l_value___1) => {
	ensure__45room__45for__45one__45more3816328921(l_a___0)
	l_a___0.backing[size2536414649(l_a___0)] = l_value___1
	set__45size316210582(l_a___0, __431111513593(size2536414649(l_a___0), 1))
}
// ~=@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 216:1
const __126__611093706126 = (l_a___0, l_value___1) => {
	ensure__45room__45for__45one__45more340645683(l_a___0)
	l_a___0.backing[size2228699078(l_a___0)] = l_value___1
	set__45size3263482273(l_a___0, __431111513593(size2228699078(l_a___0), 1))
}
// ensure-room-for-one-more@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 240:1
const ensure__45room__45for__45one__45more3301211401 = l_a___0 => {
	assert__45can__45write4087295219(l_a___0)
	;((size3279855192(l_a___0) === l_a___0.backing.length) ? ensure__45capacity__45round__45up3122389716(l_a___0, __431111513593(size3279855192(l_a___0), 1)) : (void 0))
}
// ensure-room-for-one-more@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 240:1
const ensure__45room__45for__45one__45more340645683 = l_a___0 => {
	assert__45can__45write1891175197(l_a___0)
	;((size2228699078(l_a___0) === l_a___0.backing.length) ? ensure__45capacity__45round__45up1345424861(l_a___0, __431111513593(size2228699078(l_a___0), 1)) : (void 0))
}
// ensure-room-for-one-more@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 240:1
const ensure__45room__45for__45one__45more3816328921 = l_a___0 => {
	assert__45can__45write3990574511(l_a___0)
	;((size2536414649(l_a___0) === l_a___0.backing.length) ? ensure__45capacity__45round__45up3316230756(l_a___0, __431111513593(size2536414649(l_a___0), 1)) : (void 0))
}
// increase-capacity-to@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 245:1
const increase__45capacity__45to3550287654 = (l_a___1, l_new__45capacity___0) => {
	if ((!__621787529867(l_new__45capacity___0, l_a___1.backing.length))) {
		throw new (error4175136409)(c____424())
	}
	const l_old__45backing___2 = l_a___1.backing
	l_a___1.backing = new (Array)(l_new__45capacity___0).fill(null)
	set__45subscript3579331661(l_a___1.backing, __46__462451799117(0, size3279855192(l_a___1)), subscript3687223329(l_old__45backing___2, __46__462451799117(0, size3279855192(l_a___1))))
}
// increase-capacity-to@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 245:1
const increase__45capacity__45to4285371702 = (l_a___1, l_new__45capacity___0) => {
	if ((!__621787529867(l_new__45capacity___0, l_a___1.backing.length))) {
		throw new (error4175136409)(c____424())
	}
	const l_old__45backing___2 = l_a___1.backing
	l_a___1.backing = new (Array)(l_new__45capacity___0).fill(null)
	set__45subscript1008927852(l_a___1.backing, __46__462451799117(0, size2536414649(l_a___1)), subscript529545893(l_old__45backing___2, __46__462451799117(0, size2536414649(l_a___1))))
}
// increase-capacity-to@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 245:1
const increase__45capacity__45to3931782167 = (l_a___1, l_new__45capacity___0) => {
	if ((!__621787529867(l_new__45capacity___0, l_a___1.backing.length))) {
		throw new (error4175136409)(c____424())
	}
	const l_old__45backing___2 = l_a___1.backing
	l_a___1.backing = new (Array)(l_new__45capacity___0).fill(null)
	set__45subscript2587481676(l_a___1.backing, __46__462451799117(0, size2228699078(l_a___1)), subscript2502029662(l_old__45backing___2, __46__462451799117(0, size2228699078(l_a___1))))
}
// ensure-capacity-round-up@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 252:1
const ensure__45capacity__45round__45up3316230756 = (l_a___0, l_min__45capacity___1) =>
	ensure__45capacity__45exact2209641075(l_a___0, round__45up__45to__45power__45of__45two744736890(l_min__45capacity___1))
// ensure-capacity-round-up@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 252:1
const ensure__45capacity__45round__45up3122389716 = (l_a___0, l_min__45capacity___1) =>
	ensure__45capacity__45exact4075679779(l_a___0, round__45up__45to__45power__45of__45two744736890(l_min__45capacity___1))
// ensure-capacity-round-up@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 252:1
const ensure__45capacity__45round__45up1345424861 = (l_a___0, l_min__45capacity___1) =>
	ensure__45capacity__45exact3893245336(l_a___0, round__45up__45to__45power__45of__45two744736890(l_min__45capacity___1))
// ensure-capacity-exact@(write) file:///home/andy/games/keen/lib/col/mut-array.keen 255:1
const ensure__45capacity__45exact4075679779 = (l_a___0, l_min__45capacity___1) => {
	assert__45can__45write4087295219(l_a___0)
	;(__602180318207(l_a___0.backing.length, l_min__45capacity___1) ? increase__45capacity__45to3550287654(l_a___0, l_min__45capacity___1) : (void 0))
}
// ensure-capacity-exact@(container) file:///home/andy/games/keen/lib/col/mut-array.keen 255:1
const ensure__45capacity__45exact3893245336 = (l_a___0, l_min__45capacity___1) => {
	assert__45can__45write1891175197(l_a___0)
	;(__602180318207(l_a___0.backing.length, l_min__45capacity___1) ? increase__45capacity__45to3931782167(l_a___0, l_min__45capacity___1) : (void 0))
}
// ensure-capacity-exact@(js-any) file:///home/andy/games/keen/lib/col/mut-array.keen 255:1
const ensure__45capacity__45exact2209641075 = (l_a___0, l_min__45capacity___1) => {
	assert__45can__45write3990574511(l_a___0)
	;(__602180318207(l_a___0.backing.length, l_min__45capacity___1) ? increase__45capacity__45to4285371702(l_a___0, l_min__45capacity___1) : (void 0))
}
// write-locked@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 26:1
const write__45locked48163997 = l_a___0 =>
	bits__45intersect129871475(l_a___0["size-and-locked"], 2.147483648E9)
// write-locked@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 26:1
const write__45locked3540696146 = l_a___0 =>
	bits__45intersect129871475(l_a___0["size-and-locked"], 2.147483648E9)
// write-locked@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 26:1
const write__45locked1291327595 = l_a___0 =>
	bits__45intersect129871475(l_a___0["size-and-locked"], 2.147483648E9)
// write-locked@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 26:1
const write__45locked1000013033 = l_a___0 =>
	bits__45intersect129871475(l_a___0["size-and-locked"], 2.147483648E9)
// list-new@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 37:1
const list__45new1125262202 = l_a___0 =>
	to375232191(l_a___0)
// list-new@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 37:1
const list__45new2766678902 = l_a___0 =>
	to2953003544(l_a___0)
// list-new@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 37:1
const list__45new141329638 = l_a___0 =>
	to3943837783(l_a___0)
// list-new@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 37:1
const list__45new2466680072 = l_a___0 =>
	to2654943851(l_a___0)
// mut-map-with-capacity@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 45:1
const mut__45map__45with__45capacity3980844695 = l_capacity___0 =>
	new (mut__45map3281585272)(0, n__45of512544946(l_capacity___0, c____307()))
// mut-map-with-capacity@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 45:1
const mut__45map__45with__45capacity727616718 = l_capacity___0 =>
	new (mut__45map11462585)(0, n__45of2427916655(l_capacity___0, c____307()))
// mut-map-with-capacity@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 45:1
const mut__45map__45with__45capacity605884874 = l_capacity___0 =>
	new (mut__45map3227241255)(0, n__45of2549809666(l_capacity___0, c____307()))
// mut-map-with-capacity@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 45:1
const mut__45map__45with__45capacity1642509586 = l_capacity___0 =>
	new (mut__45map2204916536)(0, n__45of1104492568(l_capacity___0, c____307()))
// to@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 51:1
const to2654943851 = l_a___1 => {
	const l_out___0 = mut__45map__45with__45capacity727616718(l_a___1.length)
	for (const l_x___2 of l_a___1) {
		__126__613196171108(l_out___0, l_x___2)
	}
	return l_out___0
}
// to@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 51:1
const to375232191 = l_a___1 => {
	const l_out___0 = mut__45map__45with__45capacity1642509586(l_a___1.length)
	for (const l_x___2 of l_a___1) {
		__126__611578972296(l_out___0, l_x___2)
	}
	return l_out___0
}
// to@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 51:1
const to2953003544 = l_a___1 => {
	const l_out___0 = mut__45map__45with__45capacity3980844695(l_a___1.length)
	for (const l_x___2 of l_a___1) {
		__126__613458780231(l_out___0, l_x___2)
	}
	return l_out___0
}
// to@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 51:1
const to3943837783 = l_a___1 => {
	const l_out___0 = mut__45map__45with__45capacity605884874(l_a___1.length)
	for (const l_x___2 of l_a___1) {
		__126__61493479296(l_out___0, l_x___2)
	}
	return l_out___0
}
// subscript@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 101:1
const subscript3410833398 = (l_a___1, l_key___2) => {
	let l_temp___5, l_index___3, l_temp___0
	return ((l_temp___0 = get__45index3528538776(l_a___1.entries, l_key___2)) , ((l_index___3 = l_temp___0) , (((typeof l_temp___0) === "number") ? (() => {
		const l_member2___4 = l_a___1.entries[l_index___3]
		const x_matched___0 = l_member2___4
		if ((x_matched___0 instanceof none2082914084)) {
			throw new (error4175136409)(c____448())
		} else {
			if ((x_matched___0 instanceof tuple22528472516)) {
				return ((l_temp___5 = l_member2___4) , l_temp___5)
			} else {
				return _unreachable()
			}
		}
	})().b : c____307())))
}
// subscript@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 101:1
const subscript3526536837 = (l_a___1, l_key___2) => {
	let l_temp___5, l_index___3, l_temp___0
	return ((l_temp___0 = get__45index2667917193(l_a___1.entries, l_key___2)) , ((l_index___3 = l_temp___0) , (((typeof l_temp___0) === "number") ? (() => {
		const l_member2___4 = l_a___1.entries[l_index___3]
		const x_matched___0 = l_member2___4
		if ((x_matched___0 instanceof none2082914084)) {
			throw new (error4175136409)(c____448())
		} else {
			if ((x_matched___0 instanceof tuple24257211703)) {
				return ((l_temp___5 = l_member2___4) , l_temp___5)
			} else {
				return _unreachable()
			}
		}
	})().b : c____307())))
}
// subscript@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 101:1
const subscript3969809352 = (l_a___1, l_key___2) => {
	let l_temp___5, l_index___3, l_temp___0
	return ((l_temp___0 = get__45index1630917326(l_a___1.entries, l_key___2)) , ((l_index___3 = l_temp___0) , (((typeof l_temp___0) === "number") ? (() => {
		(void (() => {
			const l_member2___4 = l_a___1.entries[l_index___3]
			const x_matched___0 = l_member2___4
			if ((x_matched___0 instanceof none2082914084)) {
				throw new (error4175136409)(c____448())
			} else {
				if ((x_matched___0 instanceof tuple22461269367)) {
					return ((l_temp___5 = l_member2___4) , l_temp___5)
				} else {
					return _unreachable()
				}
			}
		})())
	})() : c____307())))
}
// set-subscript@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 107:1
const set__45subscript39501539 = (l_a___0, l_key___2, l_value___4) => {
	if (write__45locked48163997(l_a___0)) {
		throw new (was__45locked1331463512)()
	}
	const l_temp___1 = get__45index3455320865(l_a___0.entries, l_key___2)
	const l_index___3 = l_temp___1
	if (((typeof l_temp___1) === "number")) {
		l_a___0.entries[l_index___3] = new (tuple21792593498)(l_key___2, l_value___4)
	} else {
		must__45add614129637(l_a___0, l_key___2, l_value___4)
	}
}
// set-subscript@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 107:1
const set__45subscript1914484197 = (l_a___0, l_key___2, l_value___4) => {
	if (write__45locked1000013033(l_a___0)) {
		throw new (was__45locked1331463512)()
	}
	const l_temp___1 = get__45index3528538776(l_a___0.entries, l_key___2)
	const l_index___3 = l_temp___1
	if (((typeof l_temp___1) === "number")) {
		l_a___0.entries[l_index___3] = new (tuple22528472516)(l_key___2, l_value___4)
	} else {
		must__45add4132717702(l_a___0, l_key___2, l_value___4)
	}
}
// set-subscript@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 107:1
const set__45subscript1637165823 = (l_a___0, l_key___2, l_value___4) => {
	if (write__45locked3540696146(l_a___0)) {
		throw new (was__45locked1331463512)()
	}
	const l_temp___1 = get__45index2667917193(l_a___0.entries, l_key___2)
	const l_index___3 = l_temp___1
	if (((typeof l_temp___1) === "number")) {
		l_a___0.entries[l_index___3] = new (tuple24257211703)(l_key___2, l_value___4)
	} else {
		must__45add3012484813(l_a___0, l_key___2, l_value___4)
	}
}
// set-subscript@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 107:1
const set__45subscript818258492 = (l_a___0, l_key___2, l_value___4) => {
	if (write__45locked1291327595(l_a___0)) {
		throw new (was__45locked1331463512)()
	}
	const l_temp___1 = get__45index1630917326(l_a___0.entries, l_key___2)
	const l_index___3 = l_temp___1
	if (((typeof l_temp___1) === "number")) {
		l_a___0.entries[l_index___3] = new (tuple22461269367)(l_key___2, l_value___4)
	} else {
		must__45add1864021199(l_a___0, l_key___2, l_value___4)
	}
}
// remove@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 132:1
const remove3116715609 = (l_a___0, l_key___2) => {
	let l_temp___6
	if (write__45locked48163997(l_a___0)) {
		throw new (was__45locked1331463512)()
	}
	const l_temp___1 = get__45index3455320865(l_a___0.entries, l_key___2)
	const l_index___3 = l_temp___1
	if (((typeof l_temp___1) === "number")) {
		const l_value___4 = (() => {
			const l_member2___5 = l_a___0.entries[l_index___3]
			const x_matched___0 = l_member2___5
			if ((x_matched___0 instanceof none2082914084)) {
				throw new (error4175136409)(c____448())
			} else {
				if ((x_matched___0 instanceof tuple21792593498)) {
					return ((l_temp___6 = l_member2___5) , l_temp___6)
				} else {
					return _unreachable()
				}
			}
		})().b
		remove__45at__45index4007977969(l_a___0, l_index___3)
		return l_value___4
	} else {
		return c____307()
	}
}
// remove-at-index@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 140:1
const remove__45at__45index4007977969 = (l_a___2, l_index___1) => {
	let l_hole___0 = l_index___1
	l_a___2.entries[l_hole___0] = c____307()
	let l_from___3 = next__45index2201992986(l_index___1, l_a___2.entries)
	x_loop___0: while (true){
		const l_temp___4 = l_a___2.entries[l_from___3]
		const l_key___5 = ((l_temp___4 instanceof tuple21792593498) ? l_temp___4.a : c____307())
		if ((l_temp___4 instanceof tuple21792593498)) {
			const l_key__45desired__45index___6 = __374173506908(Number((seeded__45hash4157093131(l_key___5) & 4294967295n)), l_a___2.entries.length)
			if (__602180318207(walk__45distance4133094321(l_a___2.entries, l_key__45desired__45index___6, l_hole___0), walk__45distance4133094321(l_a___2.entries, l_key__45desired__45index___6, l_from___3))) {
				swap__45at3124094389(l_a___2.entries, l_hole___0, l_from___3)
				l_hole___0 = l_from___3
			}
			l_from___3 = next__45index2201992986(l_from___3, l_a___2.entries)
			continue
		} else {
			break  x_loop___0
		}
	}
	l_a___2["size-and-locked"] = __45997287195(l_a___2["size-and-locked"], 1)
}
// must-add@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 172:1
const must__45add4132717702 = (l_a___0, l_key___1, l_value___2) => {
	(should__45expand__45before__45add52023853(l_a___0) ? do__45expand887197096(l_a___0) : (void 0))
	l_a___0["size-and-locked"] = __431111513593(l_a___0["size-and-locked"], 1)
	must__45add__45to__45entries2776955313(l_a___0.entries, l_key___1, l_value___2)
}
// must-add@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 172:1
const must__45add1864021199 = (l_a___0, l_key___1, l_value___2) => {
	(should__45expand__45before__45add755735522(l_a___0) ? do__45expand1597237721(l_a___0) : (void 0))
	l_a___0["size-and-locked"] = __431111513593(l_a___0["size-and-locked"], 1)
	must__45add__45to__45entries1208454198(l_a___0.entries, l_key___1, l_value___2)
}
// must-add@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 172:1
const must__45add3012484813 = (l_a___0, l_key___1, l_value___2) => {
	(should__45expand__45before__45add159052232(l_a___0) ? do__45expand1351281287(l_a___0) : (void 0))
	l_a___0["size-and-locked"] = __431111513593(l_a___0["size-and-locked"], 1)
	must__45add__45to__45entries1229962620(l_a___0.entries, l_key___1, l_value___2)
}
// must-add@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 172:1
const must__45add614129637 = (l_a___0, l_key___1, l_value___2) => {
	(should__45expand__45before__45add2866712576(l_a___0) ? do__45expand2803647327(l_a___0) : (void 0))
	l_a___0["size-and-locked"] = __431111513593(l_a___0["size-and-locked"], 1)
	must__45add__45to__45entries1459151668(l_a___0.entries, l_key___1, l_value___2)
}
// must-add-to-entries@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 178:1
const must__45add__45to__45entries1229962620 = (l_entries___5, l_initial__45key___1, l_initial__45value___3) => {
	let l_key___0 = l_initial__45key___1
	let l_value___2 = l_initial__45value___3
	let l_index___4 = ideal__45index1008138923(l_key___0, l_entries___5.length)
	let l_my__45cost___6 = 0
	x_loop___0: while (true){
		const l_temp___7 = l_entries___5[l_index___4]
		const l_existing__45key___8 = ((l_temp___7 instanceof tuple24257211703) ? l_temp___7.a : c____307())
		const l_existing__45value___9 = ((l_temp___7 instanceof tuple24257211703) ? l_temp___7.b : c____307())
		if ((l_temp___7 instanceof tuple24257211703)) {
			if (__61__611929694764(l_existing__45key___8, l_key___0)) {
				throw new (error4175136409)(c____389())
			}
			const l_its__45cost___10 = cost3993017103(l_entries___5, l_existing__45key___8, l_index___4)
			if (__621787529867(l_my__45cost___6, l_its__45cost___10)) {
				l_entries___5[l_index___4] = new (tuple24257211703)(l_key___0, l_value___2)
				l_key___0 = l_existing__45key___8
				l_value___2 = l_existing__45value___9
				l_my__45cost___6 = l_its__45cost___10
			}
			l_index___4 = next__45index3031813410(l_index___4, l_entries___5)
			l_my__45cost___6 = __431111513593(l_my__45cost___6, 1)
			continue
		} else {
			break  x_loop___0
		}
	}
	l_entries___5[l_index___4] = new (tuple24257211703)(l_key___0, l_value___2)
}
// must-add-to-entries@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 178:1
const must__45add__45to__45entries1208454198 = (l_entries___5, l_initial__45key___1, l_initial__45value___3) => {
	let l_key___0 = l_initial__45key___1
	let l_value___2 = l_initial__45value___3
	let l_index___4 = ideal__45index2549388829(l_key___0, l_entries___5.length)
	let l_my__45cost___6 = 0
	x_loop___0: while (true){
		const l_temp___7 = l_entries___5[l_index___4]
		const l_existing__45key___8 = ((l_temp___7 instanceof tuple22461269367) ? l_temp___7.a : c____307())
		const l_existing__45value___9 = ((l_temp___7 instanceof tuple22461269367) ? (() => {
			(void l_temp___7)
		})() : c____307())
		if ((l_temp___7 instanceof tuple22461269367)) {
			if (__61__612506082126(l_existing__45key___8, l_key___0)) {
				throw new (error4175136409)(c____389())
			}
			const l_its__45cost___10 = cost1756071073(l_entries___5, l_existing__45key___8, l_index___4)
			if (__621787529867(l_my__45cost___6, l_its__45cost___10)) {
				l_entries___5[l_index___4] = new (tuple22461269367)(l_key___0, l_value___2)
				l_key___0 = l_existing__45key___8
				l_value___2 = l_existing__45value___9
				l_my__45cost___6 = l_its__45cost___10
			}
			l_index___4 = next__45index3619018124(l_index___4, l_entries___5)
			l_my__45cost___6 = __431111513593(l_my__45cost___6, 1)
			continue
		} else {
			break  x_loop___0
		}
	}
	l_entries___5[l_index___4] = new (tuple22461269367)(l_key___0, l_value___2)
}
// must-add-to-entries@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 178:1
const must__45add__45to__45entries2776955313 = (l_entries___5, l_initial__45key___1, l_initial__45value___3) => {
	let l_key___0 = l_initial__45key___1
	let l_value___2 = l_initial__45value___3
	let l_index___4 = ideal__45index1008138923(l_key___0, l_entries___5.length)
	let l_my__45cost___6 = 0
	x_loop___0: while (true){
		const l_temp___7 = l_entries___5[l_index___4]
		const l_existing__45key___8 = ((l_temp___7 instanceof tuple22528472516) ? l_temp___7.a : c____307())
		const l_existing__45value___9 = ((l_temp___7 instanceof tuple22528472516) ? l_temp___7.b : c____307())
		if ((l_temp___7 instanceof tuple22528472516)) {
			if (__61__611929694764(l_existing__45key___8, l_key___0)) {
				throw new (error4175136409)(c____389())
			}
			const l_its__45cost___10 = cost32843612(l_entries___5, l_existing__45key___8, l_index___4)
			if (__621787529867(l_my__45cost___6, l_its__45cost___10)) {
				l_entries___5[l_index___4] = new (tuple22528472516)(l_key___0, l_value___2)
				l_key___0 = l_existing__45key___8
				l_value___2 = l_existing__45value___9
				l_my__45cost___6 = l_its__45cost___10
			}
			l_index___4 = next__45index2703729189(l_index___4, l_entries___5)
			l_my__45cost___6 = __431111513593(l_my__45cost___6, 1)
			continue
		} else {
			break  x_loop___0
		}
	}
	l_entries___5[l_index___4] = new (tuple22528472516)(l_key___0, l_value___2)
}
// must-add-to-entries@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 178:1
const must__45add__45to__45entries1459151668 = (l_entries___5, l_initial__45key___1, l_initial__45value___3) => {
	let l_key___0 = l_initial__45key___1
	let l_value___2 = l_initial__45value___3
	let l_index___4 = ideal__45index28128515(l_key___0, l_entries___5.length)
	let l_my__45cost___6 = 0
	x_loop___0: while (true){
		const l_temp___7 = l_entries___5[l_index___4]
		const l_existing__45key___8 = ((l_temp___7 instanceof tuple21792593498) ? l_temp___7.a : c____307())
		const l_existing__45value___9 = ((l_temp___7 instanceof tuple21792593498) ? l_temp___7.b : c____307())
		if ((l_temp___7 instanceof tuple21792593498)) {
			if ((l_existing__45key___8 === l_key___0)) {
				throw new (error4175136409)(c____389())
			}
			const l_its__45cost___10 = cost307564263(l_entries___5, l_existing__45key___8, l_index___4)
			if (__621787529867(l_my__45cost___6, l_its__45cost___10)) {
				l_entries___5[l_index___4] = new (tuple21792593498)(l_key___0, l_value___2)
				l_key___0 = l_existing__45key___8
				l_value___2 = l_existing__45value___9
				l_my__45cost___6 = l_its__45cost___10
			}
			l_index___4 = next__45index2201992986(l_index___4, l_entries___5)
			l_my__45cost___6 = __431111513593(l_my__45cost___6, 1)
			continue
		} else {
			break  x_loop___0
		}
	}
	l_entries___5[l_index___4] = new (tuple21792593498)(l_key___0, l_value___2)
}
// cost@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 195:1
const cost3993017103 = (l_entries___0, l_key___1, l_actual__45index___2) =>
	walk__45distance3786926617(l_entries___0, ideal__45index1008138923(l_key___1, l_entries___0.length), l_actual__45index___2)
// cost@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 195:1
const cost1756071073 = (l_entries___0, l_key___1, l_actual__45index___2) =>
	walk__45distance2121044859(l_entries___0, ideal__45index2549388829(l_key___1, l_entries___0.length), l_actual__45index___2)
// cost@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 195:1
const cost307564263 = (l_entries___0, l_key___1, l_actual__45index___2) =>
	walk__45distance4133094321(l_entries___0, ideal__45index28128515(l_key___1, l_entries___0.length), l_actual__45index___2)
// cost@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 195:1
const cost32843612 = (l_entries___0, l_key___1, l_actual__45index___2) =>
	walk__45distance3683425035(l_entries___0, ideal__45index1008138923(l_key___1, l_entries___0.length), l_actual__45index___2)
// ideal-index@(string) file:///home/andy/games/keen/lib/col/mut-map.keen 198:1
const ideal__45index2549388829 = (l_key___0, l_array__45size___1) =>
	__374173506908(Number((seeded__45hash1371042462(l_key___0) & 4294967295n)), l_array__45size___1)
// ideal-index@(nat32) file:///home/andy/games/keen/lib/col/mut-map.keen 198:1
const ideal__45index28128515 = (l_key___0, l_array__45size___1) =>
	__374173506908(Number((seeded__45hash4157093131(l_key___0) & 4294967295n)), l_array__45size___1)
// ideal-index@(uri) file:///home/andy/games/keen/lib/col/mut-map.keen 198:1
const ideal__45index1008138923 = (l_key___0, l_array__45size___1) =>
	__374173506908(Number((seeded__45hash3598503076(l_key___0) & 4294967295n)), l_array__45size___1)
// ~=@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 203:1
const __126__613458780231 = (l_a___3, l_destruct___1) => {
	let l_key___2, l_value___0
	return ((l_value___0 = (() => {
		(void l_destruct___1)
	})()) , ((l_key___2 = l_destruct___1.a) , set__45subscript818258492(l_a___3, l_key___2, l_value___0)))
}
// ~=@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 203:1
const __126__613196171108 = (l_a___3, l_destruct___1) => {
	let l_key___2, l_value___0
	return ((l_value___0 = l_destruct___1.b) , ((l_key___2 = l_destruct___1.a) , set__45subscript1914484197(l_a___3, l_key___2, l_value___0)))
}
// ~=@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 203:1
const __126__61493479296 = (l_a___3, l_destruct___1) => {
	let l_key___2, l_value___0
	return ((l_value___0 = l_destruct___1.b) , ((l_key___2 = l_destruct___1.a) , set__45subscript39501539(l_a___3, l_key___2, l_value___0)))
}
// ~=@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 203:1
const __126__611578972296 = (l_a___3, l_destruct___1) => {
	let l_key___2, l_value___0
	return ((l_value___0 = l_destruct___1.b) , ((l_key___2 = l_destruct___1.a) , set__45subscript1637165823(l_a___3, l_key___2, l_value___0)))
}
// get-index@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 210:1
const get__45index1630917326 = (l_entries___0, l_key___2) => {
	if (any1968705741(l_entries___0)) {
		const l_start__45i___1 = ideal__45index2549388829(l_key___2, l_entries___0.length)
		let l_i___3 = l_start__45i___1
		while (true){
			const l_temp___4 = (() => {
				const l_temp___5 = l_entries___0[l_i___3]
				const l_k___6 = ((l_temp___5 instanceof tuple22461269367) ? l_temp___5.a : c____307())
				if ((l_temp___5 instanceof tuple22461269367)) {
					if (__61__612506082126(l_key___2, l_k___6)) {
						return new (option440215192)(1, l_i___3)
					} else {
						l_i___3 = next__45index3619018124(l_i___3, l_entries___0)
						return ((l_i___3 === l_start__45i___1) ? new (option440215192)(1, c____307()) : new (option440215192)(0, c____307()))
					}
				} else {
					return new (option440215192)(1, c____307())
				}
			})()
			const x_matched___0 = l_temp___4
			if ((x_matched___0.index === 0)) {
				continue
			} else {
				if ((x_matched___0.index === 1)) {
					return l_temp___4.value
				} else {
					return _unreachable()
				}
			}
		}
	} else {
		return c____307()
	}
}
// get-index@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 210:1
const get__45index3455320865 = (l_entries___0, l_key___2) => {
	if (any4045996765(l_entries___0)) {
		const l_start__45i___1 = ideal__45index28128515(l_key___2, l_entries___0.length)
		let l_i___3 = l_start__45i___1
		while (true){
			const l_temp___4 = (() => {
				const l_temp___5 = l_entries___0[l_i___3]
				const l_k___6 = ((l_temp___5 instanceof tuple21792593498) ? l_temp___5.a : c____307())
				if ((l_temp___5 instanceof tuple21792593498)) {
					if ((l_key___2 === l_k___6)) {
						return new (option440215192)(1, l_i___3)
					} else {
						l_i___3 = next__45index2201992986(l_i___3, l_entries___0)
						return ((l_i___3 === l_start__45i___1) ? new (option440215192)(1, c____307()) : new (option440215192)(0, c____307()))
					}
				} else {
					return new (option440215192)(1, c____307())
				}
			})()
			const x_matched___0 = l_temp___4
			if ((x_matched___0.index === 0)) {
				continue
			} else {
				if ((x_matched___0.index === 1)) {
					return l_temp___4.value
				} else {
					return _unreachable()
				}
			}
		}
	} else {
		return c____307()
	}
}
// get-index@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 210:1
const get__45index2667917193 = (l_entries___0, l_key___2) => {
	if (any1576478683(l_entries___0)) {
		const l_start__45i___1 = ideal__45index1008138923(l_key___2, l_entries___0.length)
		let l_i___3 = l_start__45i___1
		while (true){
			const l_temp___4 = (() => {
				const l_temp___5 = l_entries___0[l_i___3]
				const l_k___6 = ((l_temp___5 instanceof tuple24257211703) ? l_temp___5.a : c____307())
				if ((l_temp___5 instanceof tuple24257211703)) {
					if (__61__611929694764(l_key___2, l_k___6)) {
						return new (option440215192)(1, l_i___3)
					} else {
						l_i___3 = next__45index3031813410(l_i___3, l_entries___0)
						return ((l_i___3 === l_start__45i___1) ? new (option440215192)(1, c____307()) : new (option440215192)(0, c____307()))
					}
				} else {
					return new (option440215192)(1, c____307())
				}
			})()
			const x_matched___0 = l_temp___4
			if ((x_matched___0.index === 0)) {
				continue
			} else {
				if ((x_matched___0.index === 1)) {
					return l_temp___4.value
				} else {
					return _unreachable()
				}
			}
		}
	} else {
		return c____307()
	}
}
// get-index@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 210:1
const get__45index3528538776 = (l_entries___0, l_key___2) => {
	if (any3492671035(l_entries___0)) {
		const l_start__45i___1 = ideal__45index1008138923(l_key___2, l_entries___0.length)
		let l_i___3 = l_start__45i___1
		while (true){
			const l_temp___4 = (() => {
				const l_temp___5 = l_entries___0[l_i___3]
				const l_k___6 = ((l_temp___5 instanceof tuple22528472516) ? l_temp___5.a : c____307())
				if ((l_temp___5 instanceof tuple22528472516)) {
					if (__61__611929694764(l_key___2, l_k___6)) {
						return new (option440215192)(1, l_i___3)
					} else {
						l_i___3 = next__45index2703729189(l_i___3, l_entries___0)
						return ((l_i___3 === l_start__45i___1) ? new (option440215192)(1, c____307()) : new (option440215192)(0, c____307()))
					}
				} else {
					return new (option440215192)(1, c____307())
				}
			})()
			const x_matched___0 = l_temp___4
			if ((x_matched___0.index === 0)) {
				continue
			} else {
				if ((x_matched___0.index === 1)) {
					return l_temp___4.value
				} else {
					return _unreachable()
				}
			}
		}
	} else {
		return c____307()
	}
}
// next-index@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/mut-map.keen 222:1
const next__45index3031813410 = (l_index___1, l_array___2) => {
	let l_res___0
	return ((l_res___0 = __431111513593(l_index___1, 1)) , ((l_res___0 === l_array___2.length) ? 0 : l_res___0))
}
// next-index@((string, void) tuple2 option) file:///home/andy/games/keen/lib/col/mut-map.keen 222:1
const next__45index3619018124 = (l_index___1, l_array___2) => {
	let l_res___0
	return ((l_res___0 = __431111513593(l_index___1, 1)) , ((l_res___0 === l_array___2.length) ? 0 : l_res___0))
}
// next-index@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/mut-map.keen 222:1
const next__45index2201992986 = (l_index___1, l_array___2) => {
	let l_res___0
	return ((l_res___0 = __431111513593(l_index___1, 1)) , ((l_res___0 === l_array___2.length) ? 0 : l_res___0))
}
// next-index@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/mut-map.keen 222:1
const next__45index2703729189 = (l_index___1, l_array___2) => {
	let l_res___0
	return ((l_res___0 = __431111513593(l_index___1, 1)) , ((l_res___0 === l_array___2.length) ? 0 : l_res___0))
}
// walk-distance@((string, void) tuple2 option) file:///home/andy/games/keen/lib/col/mut-map.keen 230:1
const walk__45distance2121044859 = (l_entries___2, l_from___0, l_to___1) =>
	(__60__612052354958(l_from___0, l_to___1) ? __45997287195(l_to___1, l_from___0) : __45997287195(__431111513593(l_entries___2.length, l_to___1), l_from___0))
// walk-distance@((nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/mut-map.keen 230:1
const walk__45distance4133094321 = (l_entries___2, l_from___0, l_to___1) =>
	(__60__612052354958(l_from___0, l_to___1) ? __45997287195(l_to___1, l_from___0) : __45997287195(__431111513593(l_entries___2.length, l_to___1), l_from___0))
// walk-distance@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/mut-map.keen 230:1
const walk__45distance3786926617 = (l_entries___2, l_from___0, l_to___1) =>
	(__60__612052354958(l_from___0, l_to___1) ? __45997287195(l_to___1, l_from___0) : __45997287195(__431111513593(l_entries___2.length, l_to___1), l_from___0))
// walk-distance@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/mut-map.keen 230:1
const walk__45distance3683425035 = (l_entries___2, l_from___0, l_to___1) =>
	(__60__612052354958(l_from___0, l_to___1) ? __45997287195(l_to___1, l_from___0) : __45997287195(__431111513593(l_entries___2.length, l_to___1), l_from___0))
// should-expand-before-add@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 236:1
const should__45expand__45before__45add755735522 = l_a___0 => {
	if (write__45locked1291327595(l_a___0)) {
		throw new (error4175136409)(c____390())
	}
	return (__60__612052354958(l_a___0["size-and-locked"], 8) ? (l_a___0["size-and-locked"] === l_a___0.entries.length) : __62__61724884600(__471416517417(__42544875948(l_a___0["size-and-locked"], 4), 3), l_a___0.entries.length))
}
// should-expand-before-add@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 236:1
const should__45expand__45before__45add2866712576 = l_a___0 => {
	if (write__45locked48163997(l_a___0)) {
		throw new (error4175136409)(c____390())
	}
	return (__60__612052354958(l_a___0["size-and-locked"], 8) ? (l_a___0["size-and-locked"] === l_a___0.entries.length) : __62__61724884600(__471416517417(__42544875948(l_a___0["size-and-locked"], 4), 3), l_a___0.entries.length))
}
// should-expand-before-add@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 236:1
const should__45expand__45before__45add159052232 = l_a___0 => {
	if (write__45locked3540696146(l_a___0)) {
		throw new (error4175136409)(c____390())
	}
	return (__60__612052354958(l_a___0["size-and-locked"], 8) ? (l_a___0["size-and-locked"] === l_a___0.entries.length) : __62__61724884600(__471416517417(__42544875948(l_a___0["size-and-locked"], 4), 3), l_a___0.entries.length))
}
// should-expand-before-add@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 236:1
const should__45expand__45before__45add52023853 = l_a___0 => {
	if (write__45locked1000013033(l_a___0)) {
		throw new (error4175136409)(c____390())
	}
	return (__60__612052354958(l_a___0["size-and-locked"], 8) ? (l_a___0["size-and-locked"] === l_a___0.entries.length) : __62__61724884600(__471416517417(__42544875948(l_a___0["size-and-locked"], 4), 3), l_a___0.entries.length))
}
// do-expand@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 243:1
const do__45expand1597237721 = l_a___0 =>
	expand__45to__45capacity300267877(l_a___0, (__602180318207(l_a___0.entries.length, 2) ? 2 : __42544875948(l_a___0.entries.length, 2)))
// do-expand@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 243:1
const do__45expand1351281287 = l_a___0 =>
	expand__45to__45capacity3595743155(l_a___0, (__602180318207(l_a___0.entries.length, 2) ? 2 : __42544875948(l_a___0.entries.length, 2)))
// do-expand@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 243:1
const do__45expand2803647327 = l_a___0 =>
	expand__45to__45capacity1693655413(l_a___0, (__602180318207(l_a___0.entries.length, 2) ? 2 : __42544875948(l_a___0.entries.length, 2)))
// do-expand@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 243:1
const do__45expand887197096 = l_a___0 =>
	expand__45to__45capacity2355901678(l_a___0, (__602180318207(l_a___0.entries.length, 2) ? 2 : __42544875948(l_a___0.entries.length, 2)))
// expand-to-capacity@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/games/keen/lib/col/mut-map.keen 246:1
const expand__45to__45capacity3595743155 = (l_a___2, l_new__45capacity___1) => {
	let l_v___6, l_k___5, l_temp___4
	const l_new__45entries___0 = n__45of1104492568(l_new__45capacity___1, c____307())
	for (const l_e___3 of l_a___2.entries) {
		((l_temp___4 = l_e___3) , ((l_k___5 = ((l_temp___4 instanceof tuple24257211703) ? l_temp___4.a : c____307())) , ((l_v___6 = ((l_temp___4 instanceof tuple24257211703) ? l_temp___4.b : c____307())) , ((l_temp___4 instanceof tuple24257211703) ? must__45add__45to__45entries1229962620(l_new__45entries___0, l_k___5, l_v___6) : (void 0)))))
	}
	l_a___2.entries = l_new__45entries___0
}
// expand-to-capacity@(uri, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/mut-map.keen 246:1
const expand__45to__45capacity2355901678 = (l_a___2, l_new__45capacity___1) => {
	let l_v___6, l_k___5, l_temp___4
	const l_new__45entries___0 = n__45of2427916655(l_new__45capacity___1, c____307())
	for (const l_e___3 of l_a___2.entries) {
		((l_temp___4 = l_e___3) , ((l_k___5 = ((l_temp___4 instanceof tuple22528472516) ? l_temp___4.a : c____307())) , ((l_v___6 = ((l_temp___4 instanceof tuple22528472516) ? l_temp___4.b : c____307())) , ((l_temp___4 instanceof tuple22528472516) ? must__45add__45to__45entries2776955313(l_new__45entries___0, l_k___5, l_v___6) : (void 0)))))
	}
	l_a___2.entries = l_new__45entries___0
}
// expand-to-capacity@(string, void) file:///home/andy/games/keen/lib/col/mut-map.keen 246:1
const expand__45to__45capacity300267877 = (l_a___2, l_new__45capacity___1) => {
	let l_v___6, l_k___5, l_temp___4
	const l_new__45entries___0 = n__45of512544946(l_new__45capacity___1, c____307())
	for (const l_e___3 of l_a___2.entries) {
		((l_temp___4 = l_e___3) , ((l_k___5 = ((l_temp___4 instanceof tuple22461269367) ? l_temp___4.a : c____307())) , ((l_v___6 = ((l_temp___4 instanceof tuple22461269367) ? (() => {
			(void l_temp___4)
		})() : c____307())) , ((l_temp___4 instanceof tuple22461269367) ? must__45add__45to__45entries1208454198(l_new__45entries___0, l_k___5, l_v___6) : (void 0)))))
	}
	l_a___2.entries = l_new__45entries___0
}
// expand-to-capacity@(nat32, json deferred) file:///home/andy/games/keen/lib/col/mut-map.keen 246:1
const expand__45to__45capacity1693655413 = (l_a___2, l_new__45capacity___1) => {
	let l_v___6, l_k___5, l_temp___4
	const l_new__45entries___0 = n__45of2549809666(l_new__45capacity___1, c____307())
	for (const l_e___3 of l_a___2.entries) {
		((l_temp___4 = l_e___3) , ((l_k___5 = ((l_temp___4 instanceof tuple21792593498) ? l_temp___4.a : c____307())) , ((l_v___6 = ((l_temp___4 instanceof tuple21792593498) ? l_temp___4.b : c____307())) , ((l_temp___4 instanceof tuple21792593498) ? must__45add__45to__45entries1459151668(l_new__45entries___0, l_k___5, l_v___6) : (void 0)))))
	}
	l_a___2.entries = l_new__45entries___0
}
// list-new@(string) file:///home/andy/games/keen/lib/col/mut-set.keen 18:1
const list__45new3610606617 = l_a___0 =>
	to2550740644(l_a___0)
// to@(string) file:///home/andy/games/keen/lib/col/mut-set.keen 36:1
const to2550740644 = l_a___1 => {
	const l_res___0 = new (mut__45set1025491005)(list__45new2766678902(c____294()))
	for (const l_x___2 of l_a___1) {
		__126__6126454664(l_res___0, l_x___2)
	}
	return l_res___0
}
// ~=@(string) file:///home/andy/games/keen/lib/col/mut-set.keen 60:1
const __126__6126454664 = (l_a___0, l_value___1) =>
	__126__613458780231(l_a___0.inner, new (tuple22461269367)(l_value___1, (void 0)))
// subscript@(string) file:///home/andy/games/keen/lib/col/mut-set.keen 70:1
const subscript1175915149 = (l_a___0, l_value___1) =>
	((typeof subscript3969809352(l_a___0.inner, l_value___1)) === "undefined")
// try-add@(string) file:///home/andy/games/keen/lib/col/mut-set.keen 75:1
const try__45add4038755052 = (l_a___0, l_value___1) => {
	if (subscript1175915149(l_a___0, l_value___1)) {
		return false
	} else {
		__126__6126454664(l_a___0, l_value___1)
		return true
	}
}
// to@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 26:1
const to1844180024 = l_a___0 =>
	as__45frozen__45map2922424887(to404259370(l_a___0))
// to@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 26:1
const to3673573185 = l_a___0 =>
	as__45frozen__45map1890416556(to988250502(l_a___0))
// to@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 26:1
const to1944245961 = l_a___0 =>
	as__45frozen__45map2049503636(to227432643(l_a___0))
// size@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 38:1
const size1987842740 = l_a___0 =>
	l_a___0.pairs.length
// size@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 38:1
const size2564951713 = l_a___0 =>
	l_a___0.pairs.length
// size@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 38:1
const size2002274072 = l_a___0 =>
	l_a___0.pairs.length
// bucket-indices-at-index@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 52:1
const bucket__45indices__45at__45index16961513 = (l_a___1, l_bucket__45index___2) => {
	let l_bucket__45end___3, l_bucket__45start___0
	return ((l_bucket__45start___0 = l_a___1["bucket-starts"][l_bucket__45index___2]) , ((l_bucket__45end___3 = ((l_bucket__45index___2 === __45997287195(l_a___1["bucket-starts"].length, 1)) ? l_a___1.pairs.length : l_a___1["bucket-starts"][__431111513593(l_bucket__45index___2, 1)])) , __46__462451799117(l_bucket__45start___0, l_bucket__45end___3)))
}
// bucket-indices-at-index@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 52:1
const bucket__45indices__45at__45index981825067 = (l_a___1, l_bucket__45index___2) => {
	let l_bucket__45end___3, l_bucket__45start___0
	return ((l_bucket__45start___0 = l_a___1["bucket-starts"][l_bucket__45index___2]) , ((l_bucket__45end___3 = ((l_bucket__45index___2 === __45997287195(l_a___1["bucket-starts"].length, 1)) ? l_a___1.pairs.length : l_a___1["bucket-starts"][__431111513593(l_bucket__45index___2, 1)])) , __46__462451799117(l_bucket__45start___0, l_bucket__45end___3)))
}
// bucket-indices-at-index@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 52:1
const bucket__45indices__45at__45index2702393649 = (l_a___1, l_bucket__45index___2) => {
	let l_bucket__45end___3, l_bucket__45start___0
	return ((l_bucket__45start___0 = l_a___1["bucket-starts"][l_bucket__45index___2]) , ((l_bucket__45end___3 = ((l_bucket__45index___2 === __45997287195(l_a___1["bucket-starts"].length, 1)) ? l_a___1.pairs.length : l_a___1["bucket-starts"][__431111513593(l_bucket__45index___2, 1)])) , __46__462451799117(l_bucket__45start___0, l_bucket__45end___3)))
}
// bucket-at-index@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 60:1
const bucket__45at__45index3878967080 = (l_a___0, l_bucket__45index___1) =>
	subscript1626346138(l_a___0.pairs, bucket__45indices__45at__45index2702393649(l_a___0, l_bucket__45index___1))
// bucket-at-index@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 60:1
const bucket__45at__45index881632351 = (l_a___0, l_bucket__45index___1) =>
	subscript4267189810(l_a___0.pairs, bucket__45indices__45at__45index16961513(l_a___0, l_bucket__45index___1))
// bucket-at-index@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 60:1
const bucket__45at__45index4282240977 = (l_a___0, l_bucket__45index___1) =>
	subscript516474620(l_a___0.pairs, bucket__45indices__45at__45index981825067(l_a___0, l_bucket__45index___1))
// as-frozen-map@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 63:1
const as__45frozen__45map2922424887 = l_a___0 =>
	remove__45duplicates1012543695(make__45frozen__45map11331554(l_a___0))
// as-frozen-map@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 63:1
const as__45frozen__45map2049503636 = l_a___0 =>
	remove__45duplicates1480077283(make__45frozen__45map3347633126(l_a___0))
// as-frozen-map@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 63:1
const as__45frozen__45map1890416556 = l_a___0 =>
	remove__45duplicates3266875163(make__45frozen__45map2725640638(l_a___0))
// make-frozen-map@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 66:1
const make__45frozen__45map3347633126 = l_a___0 => {
	if (__60__612052354958(l_a___0.length, 4)) {
		return new (frozen__45map3926701578)(cast__45immutable3769887050(l_a___0), c____282())
	} else {
		const l_n__45buckets___1 = __471416517417(l_a___0.length, 2)
		const l_bucket__45starts___2 = get__45bucket__45starts823833608(l_a___0, l_n__45buckets___1)
		const l_bucket__45counts___3 = n__45of4081928135(l_n__45buckets___1, 0)
		let l_cur___4 = 0
		while (true){
			if ((l_cur___4 === l_a___0.length)) {
				return new (frozen__45map3926701578)(cast__45immutable3769887050(l_a___0), l_bucket__45starts___2)
			} else {
				const l_bucket__45index___5 = get__45bucket__45index1684267642(l_a___0[l_cur___4].a, l_bucket__45counts___3.length)
				const l_bucket__45count___6 = l_bucket__45counts___3[l_bucket__45index___5]
				const l_bucket__45start___7 = l_bucket__45starts___2[l_bucket__45index___5]
				const l_bucket__45cur__45end___8 = __431111513593(l_bucket__45start___7, l_bucket__45count___6)
				if ((__60__612052354958(l_bucket__45start___7, l_cur___4) ? __60__612052354958(l_cur___4, l_bucket__45cur__45end___8) : false)) {
					if ((l_cur___4 === l_bucket__45cur__45end___8)) {
						l_bucket__45counts___3[l_bucket__45index___5] = __431111513593(l_bucket__45count___6, 1)
					}
					l_cur___4 = __431111513593(l_cur___4, 1)
				} else {
					l_bucket__45counts___3[l_bucket__45index___5] = __431111513593(l_bucket__45count___6, 1)
					swap__45at4082402236(l_a___0, l_cur___4, l_bucket__45cur__45end___8)
				}
				continue
			}
		}
	}
}
// make-frozen-map@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 66:1
const make__45frozen__45map2725640638 = l_a___0 => {
	if (__60__612052354958(l_a___0.length, 4)) {
		return new (frozen__45map2559355386)(cast__45immutable3544078916(l_a___0), c____282())
	} else {
		const l_n__45buckets___1 = __471416517417(l_a___0.length, 2)
		const l_bucket__45starts___2 = get__45bucket__45starts2692894624(l_a___0, l_n__45buckets___1)
		const l_bucket__45counts___3 = n__45of4081928135(l_n__45buckets___1, 0)
		let l_cur___4 = 0
		while (true){
			if ((l_cur___4 === l_a___0.length)) {
				return new (frozen__45map2559355386)(cast__45immutable3544078916(l_a___0), l_bucket__45starts___2)
			} else {
				const l_bucket__45index___5 = get__45bucket__45index1684267642(l_a___0[l_cur___4].a, l_bucket__45counts___3.length)
				const l_bucket__45count___6 = l_bucket__45counts___3[l_bucket__45index___5]
				const l_bucket__45start___7 = l_bucket__45starts___2[l_bucket__45index___5]
				const l_bucket__45cur__45end___8 = __431111513593(l_bucket__45start___7, l_bucket__45count___6)
				if ((__60__612052354958(l_bucket__45start___7, l_cur___4) ? __60__612052354958(l_cur___4, l_bucket__45cur__45end___8) : false)) {
					if ((l_cur___4 === l_bucket__45cur__45end___8)) {
						l_bucket__45counts___3[l_bucket__45index___5] = __431111513593(l_bucket__45count___6, 1)
					}
					l_cur___4 = __431111513593(l_cur___4, 1)
				} else {
					l_bucket__45counts___3[l_bucket__45index___5] = __431111513593(l_bucket__45count___6, 1)
					swap__45at3706993106(l_a___0, l_cur___4, l_bucket__45cur__45end___8)
				}
				continue
			}
		}
	}
}
// make-frozen-map@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 66:1
const make__45frozen__45map11331554 = l_a___0 => {
	if (__60__612052354958(l_a___0.length, 4)) {
		return new (frozen__45map1226946341)(cast__45immutable330973840(l_a___0), c____282())
	} else {
		const l_n__45buckets___1 = __471416517417(l_a___0.length, 2)
		const l_bucket__45starts___2 = get__45bucket__45starts3829036388(l_a___0, l_n__45buckets___1)
		const l_bucket__45counts___3 = n__45of4081928135(l_n__45buckets___1, 0)
		let l_cur___4 = 0
		while (true){
			if ((l_cur___4 === l_a___0.length)) {
				return new (frozen__45map1226946341)(cast__45immutable330973840(l_a___0), l_bucket__45starts___2)
			} else {
				const l_bucket__45index___5 = get__45bucket__45index1684267642(l_a___0[l_cur___4].a, l_bucket__45counts___3.length)
				const l_bucket__45count___6 = l_bucket__45counts___3[l_bucket__45index___5]
				const l_bucket__45start___7 = l_bucket__45starts___2[l_bucket__45index___5]
				const l_bucket__45cur__45end___8 = __431111513593(l_bucket__45start___7, l_bucket__45count___6)
				if ((__60__612052354958(l_bucket__45start___7, l_cur___4) ? __60__612052354958(l_cur___4, l_bucket__45cur__45end___8) : false)) {
					if ((l_cur___4 === l_bucket__45cur__45end___8)) {
						l_bucket__45counts___3[l_bucket__45index___5] = __431111513593(l_bucket__45count___6, 1)
					}
					l_cur___4 = __431111513593(l_cur___4, 1)
				} else {
					l_bucket__45counts___3[l_bucket__45index___5] = __431111513593(l_bucket__45count___6, 1)
					swap__45at3225463383(l_a___0, l_cur___4, l_bucket__45cur__45end___8)
				}
				continue
			}
		}
	}
}
// remove-duplicates@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 90:1
const remove__45duplicates1480077283 = l_a___0 =>
	(has__45duplicates3519094090(l_a___0) ? make__45frozen__45map3347633126(with__45block2971855905(build252249843(size2564951713(l_a___0)), l_out___1 =>
				write__45without__45duplicates750956574(l_out___1, l_a___0))) : l_a___0)
// remove-duplicates@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 90:1
const remove__45duplicates3266875163 = l_a___0 =>
	(has__45duplicates3887894822(l_a___0) ? make__45frozen__45map2725640638(with__45block1334670925(build252249843(size2002274072(l_a___0)), l_out___1 =>
				write__45without__45duplicates826647368(l_out___1, l_a___0))) : l_a___0)
// remove-duplicates@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 90:1
const remove__45duplicates1012543695 = l_a___0 =>
	(has__45duplicates2062669157(l_a___0) ? make__45frozen__45map11331554(with__45block448681183(build252249843(size1987842740(l_a___0)), l_out___1 =>
				write__45without__45duplicates2210635395(l_out___1, l_a___0))) : l_a___0)
// write-without-duplicates@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 99:1
const write__45without__45duplicates2210635395 = (l_out___2, l_a___0) => {
	if (any1469364605(l_a___0["bucket-starts"])) {
		let x_cur___0 = 0
		let x_end___1 = l_a___0["bucket-starts"].length
		while ((x_cur___0 < x_end___1)){
			const l_i___1 = x_cur___0
			write__45bucket__45without__45duplicates34791853(l_out___2, bucket__45at__45index3878967080(l_a___0, l_i___1))
			x_cur___0 = (x_cur___0 + 1)
		}
	} else {
		write__45bucket__45without__45duplicates34791853(l_out___2, to__45array__45view2195292310(l_a___0.pairs))
	}
}
// write-without-duplicates@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 99:1
const write__45without__45duplicates826647368 = (l_out___2, l_a___0) => {
	if (any1469364605(l_a___0["bucket-starts"])) {
		let x_cur___0 = 0
		let x_end___1 = l_a___0["bucket-starts"].length
		while ((x_cur___0 < x_end___1)){
			const l_i___1 = x_cur___0
			write__45bucket__45without__45duplicates79090618(l_out___2, bucket__45at__45index4282240977(l_a___0, l_i___1))
			x_cur___0 = (x_cur___0 + 1)
		}
	} else {
		write__45bucket__45without__45duplicates79090618(l_out___2, to__45array__45view3154170536(l_a___0.pairs))
	}
}
// write-without-duplicates@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 99:1
const write__45without__45duplicates750956574 = (l_out___2, l_a___0) => {
	if (any1469364605(l_a___0["bucket-starts"])) {
		let x_cur___0 = 0
		let x_end___1 = l_a___0["bucket-starts"].length
		while ((x_cur___0 < x_end___1)){
			const l_i___1 = x_cur___0
			write__45bucket__45without__45duplicates61945088(l_out___2, bucket__45at__45index881632351(l_a___0, l_i___1))
			x_cur___0 = (x_cur___0 + 1)
		}
	} else {
		write__45bucket__45without__45duplicates61945088(l_out___2, to__45array__45view1373033965(l_a___0.pairs))
	}
}
// write-bucket-without-duplicates@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 106:1
const write__45bucket__45without__45duplicates61945088 = (l_out___4, l_pairs___0) => {
	let l_i___3, l_pair___2
	return for__45loop48704689(new (with__45index2058433704)(l_pairs___0), l_destruct___1 =>
			((l_pair___2 = l_destruct___1.b) , ((l_i___3 = l_destruct___1.a) , (key__45in__45range1200743406(l_pair___2.a, subscript1105615477(l_pairs___0, __46__461225104787(__431111513593(l_i___3, 1), c____557()))) ? (void 0) : __126__61848898384(l_out___4, l_pair___2)))))
}
// write-bucket-without-duplicates@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 106:1
const write__45bucket__45without__45duplicates79090618 = (l_out___4, l_pairs___0) => {
	let l_i___3, l_pair___2
	return for__45loop3121650483(new (with__45index2448730786)(l_pairs___0), l_destruct___1 =>
			((l_pair___2 = l_destruct___1.b) , ((l_i___3 = l_destruct___1.a) , (key__45in__45range3792849304(l_pair___2.a, subscript814170135(l_pairs___0, __46__461225104787(__431111513593(l_i___3, 1), c____557()))) ? (void 0) : __126__61663728857(l_out___4, l_pair___2)))))
}
// write-bucket-without-duplicates@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 106:1
const write__45bucket__45without__45duplicates34791853 = (l_out___4, l_pairs___0) => {
	let l_i___3, l_pair___2
	return for__45loop859456516(new (with__45index534494447)(l_pairs___0), l_destruct___1 =>
			((l_pair___2 = l_destruct___1.b) , ((l_i___3 = l_destruct___1.a) , (key__45in__45range176338237(l_pair___2.a, subscript2352838008(l_pairs___0, __46__461225104787(__431111513593(l_i___3, 1), c____557()))) ? (void 0) : __126__611360247415(l_out___4, l_pair___2)))))
}
// has-duplicates@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 111:1
const has__45duplicates3887894822 = l_a___0 =>
	(any1469364605(l_a___0["bucket-starts"]) ? some151833221(__46__462451799117(0, l_a___0["bucket-starts"].length), l_it___1 =>
			bucket__45has__45duplicates932684447(bucket__45at__45index4282240977(l_a___0, l_it___1))) : bucket__45has__45duplicates932684447(to__45array__45view3154170536(l_a___0.pairs)))
// has-duplicates@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 111:1
const has__45duplicates2062669157 = l_a___0 =>
	(any1469364605(l_a___0["bucket-starts"]) ? some151833221(__46__462451799117(0, l_a___0["bucket-starts"].length), l_it___1 =>
			bucket__45has__45duplicates264919065(bucket__45at__45index3878967080(l_a___0, l_it___1))) : bucket__45has__45duplicates264919065(to__45array__45view2195292310(l_a___0.pairs)))
// has-duplicates@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 111:1
const has__45duplicates3519094090 = l_a___0 =>
	(any1469364605(l_a___0["bucket-starts"]) ? some151833221(__46__462451799117(0, l_a___0["bucket-starts"].length), l_it___1 =>
			bucket__45has__45duplicates440031497(bucket__45at__45index881632351(l_a___0, l_it___1))) : bucket__45has__45duplicates440031497(to__45array__45view1373033965(l_a___0.pairs)))
// bucket-has-duplicates@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 117:1
const bucket__45has__45duplicates264919065 = l_pairs___0 => {
	let l_i___4, l_k___3, l_destruct___2
	return some2785057744(new (with__45index534494447)(l_pairs___0), l_destruct___1 =>
			((l_destruct___2 = l_destruct___1.b) , ((l_k___3 = l_destruct___2.a) , ((l_i___4 = l_destruct___1.a) , key__45in__45range176338237(l_k___3, subscript2352838008(l_pairs___0, __46__461225104787(__431111513593(l_i___4, 1), c____557())))))))
}
// bucket-has-duplicates@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 117:1
const bucket__45has__45duplicates440031497 = l_pairs___0 => {
	let l_i___4, l_k___3, l_destruct___2
	return some1028478253(new (with__45index2058433704)(l_pairs___0), l_destruct___1 =>
			((l_destruct___2 = l_destruct___1.b) , ((l_k___3 = l_destruct___2.a) , ((l_i___4 = l_destruct___1.a) , key__45in__45range1200743406(l_k___3, subscript1105615477(l_pairs___0, __46__461225104787(__431111513593(l_i___4, 1), c____557())))))))
}
// bucket-has-duplicates@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 117:1
const bucket__45has__45duplicates932684447 = l_pairs___0 => {
	let l_i___4, l_k___3, l_destruct___2
	return some2609188495(new (with__45index2448730786)(l_pairs___0), l_destruct___1 =>
			((l_destruct___2 = l_destruct___1.b) , ((l_k___3 = l_destruct___2.a) , ((l_i___4 = l_destruct___1.a) , key__45in__45range3792849304(l_k___3, subscript814170135(l_pairs___0, __46__461225104787(__431111513593(l_i___4, 1), c____557())))))))
}
// key-in-range@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 121:1
const key__45in__45range176338237 = (l_key___2, l_pairs___0) =>
	some3487397621(l_pairs___0, l_it___1 =>
			__61__61718055455(l_it___1.a, l_key___2))
// key-in-range@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 121:1
const key__45in__45range3792849304 = (l_key___2, l_pairs___0) =>
	some794520560(l_pairs___0, l_it___1 =>
			__61__61718055455(l_it___1.a, l_key___2))
// key-in-range@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 121:1
const key__45in__45range1200743406 = (l_key___2, l_pairs___0) =>
	some352326534(l_pairs___0, l_it___1 =>
			__61__61718055455(l_it___1.a, l_key___2))
// get-bucket-starts@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 124:1
const get__45bucket__45starts2692894624 = (l_a___2, l_n__45buckets___1) => {
	const l_res___0 = n__45of4081928135(l_n__45buckets___1, 0)
	for (const l_destruct___3 of l_a___2) {
		const l_k___4 = l_destruct___3.a
		const l_index___5 = get__45bucket__45index1684267642(l_k___4, l_n__45buckets___1)
		l_res___0[l_index___5] = ((1 + l_res___0[l_index___5]) >>> 0)
	}
	running__45sum1275302242(l_res___0)
	return cast__45immutable4271026254(l_res___0)
}
// get-bucket-starts@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 124:1
const get__45bucket__45starts3829036388 = (l_a___2, l_n__45buckets___1) => {
	const l_res___0 = n__45of4081928135(l_n__45buckets___1, 0)
	for (const l_destruct___3 of l_a___2) {
		const l_k___4 = l_destruct___3.a
		const l_index___5 = get__45bucket__45index1684267642(l_k___4, l_n__45buckets___1)
		l_res___0[l_index___5] = ((1 + l_res___0[l_index___5]) >>> 0)
	}
	running__45sum1275302242(l_res___0)
	return cast__45immutable4271026254(l_res___0)
}
// get-bucket-starts@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 124:1
const get__45bucket__45starts823833608 = (l_a___2, l_n__45buckets___1) => {
	const l_res___0 = n__45of4081928135(l_n__45buckets___1, 0)
	for (const l_destruct___3 of l_a___2) {
		const l_k___4 = l_destruct___3.a
		const l_index___5 = get__45bucket__45index1684267642(l_k___4, l_n__45buckets___1)
		l_res___0[l_index___5] = ((1 + l_res___0[l_index___5]) >>> 0)
	}
	running__45sum1275302242(l_res___0)
	return cast__45immutable4271026254(l_res___0)
}
// get-bucket-index@(symbol) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 132:1
const get__45bucket__45index1684267642 = (l_key___0, l_n__45buckets___1) =>
	__374173506908(Number((seeded__45hash563252203(l_key___0) & 4294967295n)), l_n__45buckets___1)
// running-sum file:///home/andy/games/keen/lib/col/private/frozen-map.keen 135:1
const running__45sum1275302242 = l_a___1 => {
	let l_acc___0
	return ((l_acc___0 = 0) , map__613072090457(to__45buffer__45view3199291402(l_a___1), l_x___2 => {
			const l_start___3 = l_acc___0
			l_acc___0 = __431111513593(l_acc___0, l_x___2)
			return l_start___3
		}))
}
// some@(symbol, json) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 142:1
const some2732707768 = (l_a___0, l_f___1) =>
	some1837471988(l_a___0.pairs, l_f___1)
// some@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 142:1
const some84066070 = (l_a___0, l_f___1) =>
	some2890906337(l_a___0.pairs, l_f___1)
// some@(symbol, string) file:///home/andy/games/keen/lib/col/private/frozen-map.keen 142:1
const some2721230765 = (l_a___0, l_f___1) =>
	some399969416(l_a___0.pairs, l_f___1)
// binary-search-exact@(symbol) file:///home/andy/games/keen/lib/col/private/sort-utils.keen 16:1
const binary__45search__45exact3153100740 = (l_a___1, l_value___2) => {
	let l_res___0
	return ((l_res___0 = binary__45search__45insert347179091(l_a___1, l_value___2)) , ((__33__61883178196(l_res___0, size3194416596(l_a___1)) ? __61__61718055455(subscript152787494(l_a___1, l_res___0), l_value___2) : false) ? l_res___0 : c____307()))
}
// binary-search-insert@(symbol) file:///home/andy/games/keen/lib/col/private/sort-utils.keen 27:1
const binary__45search__45insert347179091 = (l_a___0, l_value___2) =>
	binary__45search__45insert__45cb1440674198(l_a___0, l_it___1 =>
			__60__61__621591138034(l_value___2, l_it___1))
// binary-search-insert-cb@(symbol) file:///home/andy/games/keen/lib/col/private/sort-utils.keen 36:1
const binary__45search__45insert__45cb1440674198 = (l_a___2, l_compare___5) => {
	let l_left___0 = 0
	let l_right___1 = size3194416596(l_a___2)
	while (true){
		const l_temp___3 = (() => {
			if ((l_left___0 === l_right___1)) {
				return l_left___0
			} else {
				const l_mid___4 = __431111513593(l_left___0, __471416517417(__45997287195(l_right___1, l_left___0), 2))
				const x_matched___0 = l_compare___5(subscript152787494(l_a___2, l_mid___4))
				switch (x_matched___0) {
					case 0:{
						l_right___1 = l_mid___4
						return c____307()
					}
					case 1:{
						return l_mid___4
					}
					case 2:{
						l_left___0 = __431111513593(l_mid___4, 1)
						return c____307()
					}
					default:{
						return _unreachable()
					}
				}
			}
		})()
		const x_matched___1 = l_temp___3
		if ((x_matched___1 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___1) === "number")) {
				return l_temp___3
			} else {
				return _unreachable()
			}
		}
	}
}
// sort@((symbol, string) tuple2 array, (symbol, string) tuple2, symbol) file:///home/andy/games/keen/lib/col/sort.keen 54:1
const sort2738655761 = (l_a___1, l_get__45key___3) => {
	const l_res___0 = l_a___1.map(l_it___2 =>
			l_it___2)
	sort__612407463066(to__45buffer__45view3676937948(l_res___0), l_get__45key___3)
	return list__45new1520485959(cast__45immutable3769887050(l_res___0))
}
// sort@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, symbol) file:///home/andy/games/keen/lib/col/sort.keen 54:1
const sort3344131003 = (l_a___1, l_get__45key___3) => {
	const l_res___0 = l_a___1.map(l_it___2 =>
			l_it___2)
	sort__611503409848(to__45buffer__45view1972261055(l_res___0), l_get__45key___3)
	return list__45new15341260(cast__45immutable330973840(l_res___0))
}
// sort@((symbol, json) tuple2 array, (symbol, json) tuple2, symbol) file:///home/andy/games/keen/lib/col/sort.keen 54:1
const sort4175024710 = (l_a___1, l_get__45key___3) => {
	const l_res___0 = l_a___1.map(l_it___2 =>
			l_it___2)
	sort__611959791873(to__45buffer__45view411900635(l_res___0), l_get__45key___3)
	return list__45new4143771587(cast__45immutable3544078916(l_res___0))
}
// sort=@((symbol, json) tuple2, symbol) file:///home/andy/games/keen/lib/col/sort.keen 82:1
const sort__611959791873 = (l_a___0, l_get__45key___1) => {
	if (__621787529867(size4235011680(l_a___0), 4)) {
		sort__611959791873(subscript1252271679(l_a___0, __46__462451799117(0, __471416517417(size4235011680(l_a___0), 2))), l_get__45key___1)
		sort__611959791873(subscript707329682(l_a___0, __46__461225104787(__471416517417(size4235011680(l_a___0), 2), c____557())), l_get__45key___1)
		const l_left___2 = to2452884681(subscript1252271679(l_a___0, __46__462451799117(0, __471416517417(size4235011680(l_a___0), 2))))
		let l_l___3 = 0
		let l_r___4 = __471416517417(size4235011680(l_a___0), 2)
		let l_out___5 = 0
		x_loop___0: while (true){
			if ((__602180318207(l_l___3, l_left___2.length) ? __602180318207(l_r___4, size4235011680(l_a___0)) : false)) {
				const l_x___6 = l_left___2[l_l___3]
				const l_y___7 = subscript1530713571(l_a___0, l_r___4)
				if (__60__61641350506(l_get__45key___1(l_x___6), l_get__45key___1(l_y___7))) {
					set__45subscript2382295053(l_a___0, l_out___5, l_x___6)
					l_l___3 = __431111513593(l_l___3, 1)
				} else {
					set__45subscript2382295053(l_a___0, l_out___5, l_y___7)
					l_r___4 = __431111513593(l_r___4, 1)
				}
				l_out___5 = __431111513593(l_out___5, 1)
				continue
			} else {
				break  x_loop___0
			}
		}
		x_loop___1: while (true){
			if (__602180318207(l_l___3, l_left___2.length)) {
				set__45subscript2382295053(l_a___0, l_out___5, l_left___2[l_l___3])
				l_out___5 = __431111513593(l_out___5, 1)
				l_l___3 = __431111513593(l_l___3, 1)
				continue
			} else {
				break  x_loop___1
			}
		}
		x_loop___2: while (true){
			if (__602180318207(l_r___4, size4235011680(l_a___0))) {
				set__45subscript2382295053(l_a___0, l_out___5, subscript1530713571(l_a___0, l_r___4))
				l_out___5 = __431111513593(l_out___5, 1)
				l_r___4 = __431111513593(l_r___4, 1)
				continue
			} else {
				break  x_loop___2
			}
		}
		if ((!(l_out___5 === size4235011680(l_a___0)))) {
			throw new (error4175136409)(c____379())
		}
	} else {
		small__45sort2001424904(l_a___0, l_get__45key___1)
	}
}
// sort=@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, symbol) file:///home/andy/games/keen/lib/col/sort.keen 82:1
const sort__611503409848 = (l_a___0, l_get__45key___1) => {
	if (__621787529867(size3039289938(l_a___0), 4)) {
		sort__611503409848(subscript2803067135(l_a___0, __46__462451799117(0, __471416517417(size3039289938(l_a___0), 2))), l_get__45key___1)
		sort__611503409848(subscript1596132023(l_a___0, __46__461225104787(__471416517417(size3039289938(l_a___0), 2), c____557())), l_get__45key___1)
		const l_left___2 = to813023344(subscript2803067135(l_a___0, __46__462451799117(0, __471416517417(size3039289938(l_a___0), 2))))
		let l_l___3 = 0
		let l_r___4 = __471416517417(size3039289938(l_a___0), 2)
		let l_out___5 = 0
		x_loop___0: while (true){
			if ((__602180318207(l_l___3, l_left___2.length) ? __602180318207(l_r___4, size3039289938(l_a___0)) : false)) {
				const l_x___6 = l_left___2[l_l___3]
				const l_y___7 = subscript324692138(l_a___0, l_r___4)
				if (__60__61641350506(l_get__45key___1(l_x___6), l_get__45key___1(l_y___7))) {
					set__45subscript3066845548(l_a___0, l_out___5, l_x___6)
					l_l___3 = __431111513593(l_l___3, 1)
				} else {
					set__45subscript3066845548(l_a___0, l_out___5, l_y___7)
					l_r___4 = __431111513593(l_r___4, 1)
				}
				l_out___5 = __431111513593(l_out___5, 1)
				continue
			} else {
				break  x_loop___0
			}
		}
		x_loop___1: while (true){
			if (__602180318207(l_l___3, l_left___2.length)) {
				set__45subscript3066845548(l_a___0, l_out___5, l_left___2[l_l___3])
				l_out___5 = __431111513593(l_out___5, 1)
				l_l___3 = __431111513593(l_l___3, 1)
				continue
			} else {
				break  x_loop___1
			}
		}
		x_loop___2: while (true){
			if (__602180318207(l_r___4, size3039289938(l_a___0))) {
				set__45subscript3066845548(l_a___0, l_out___5, subscript324692138(l_a___0, l_r___4))
				l_out___5 = __431111513593(l_out___5, 1)
				l_r___4 = __431111513593(l_r___4, 1)
				continue
			} else {
				break  x_loop___2
			}
		}
		if ((!(l_out___5 === size3039289938(l_a___0)))) {
			throw new (error4175136409)(c____379())
		}
	} else {
		small__45sort2885453275(l_a___0, l_get__45key___1)
	}
}
// sort=@((symbol, string) tuple2, symbol) file:///home/andy/games/keen/lib/col/sort.keen 82:1
const sort__612407463066 = (l_a___0, l_get__45key___1) => {
	if (__621787529867(size2985755893(l_a___0), 4)) {
		sort__612407463066(subscript769708496(l_a___0, __46__462451799117(0, __471416517417(size2985755893(l_a___0), 2))), l_get__45key___1)
		sort__612407463066(subscript2713877231(l_a___0, __46__461225104787(__471416517417(size2985755893(l_a___0), 2), c____557())), l_get__45key___1)
		const l_left___2 = to768475965(subscript769708496(l_a___0, __46__462451799117(0, __471416517417(size2985755893(l_a___0), 2))))
		let l_l___3 = 0
		let l_r___4 = __471416517417(size2985755893(l_a___0), 2)
		let l_out___5 = 0
		x_loop___0: while (true){
			if ((__602180318207(l_l___3, l_left___2.length) ? __602180318207(l_r___4, size2985755893(l_a___0)) : false)) {
				const l_x___6 = l_left___2[l_l___3]
				const l_y___7 = subscript3184670839(l_a___0, l_r___4)
				if (__60__61641350506(l_get__45key___1(l_x___6), l_get__45key___1(l_y___7))) {
					set__45subscript4132141612(l_a___0, l_out___5, l_x___6)
					l_l___3 = __431111513593(l_l___3, 1)
				} else {
					set__45subscript4132141612(l_a___0, l_out___5, l_y___7)
					l_r___4 = __431111513593(l_r___4, 1)
				}
				l_out___5 = __431111513593(l_out___5, 1)
				continue
			} else {
				break  x_loop___0
			}
		}
		x_loop___1: while (true){
			if (__602180318207(l_l___3, l_left___2.length)) {
				set__45subscript4132141612(l_a___0, l_out___5, l_left___2[l_l___3])
				l_out___5 = __431111513593(l_out___5, 1)
				l_l___3 = __431111513593(l_l___3, 1)
				continue
			} else {
				break  x_loop___1
			}
		}
		x_loop___2: while (true){
			if (__602180318207(l_r___4, size2985755893(l_a___0))) {
				set__45subscript4132141612(l_a___0, l_out___5, subscript3184670839(l_a___0, l_r___4))
				l_out___5 = __431111513593(l_out___5, 1)
				l_r___4 = __431111513593(l_r___4, 1)
				continue
			} else {
				break  x_loop___2
			}
		}
		if ((!(l_out___5 === size2985755893(l_a___0)))) {
			throw new (error4175136409)(c____379())
		}
	} else {
		small__45sort3208490907(l_a___0, l_get__45key___1)
	}
}
// small-sort@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, symbol) file:///home/andy/games/keen/lib/col/sort.keen 113:1
const small__45sort2885453275 = (l_a___0, l_get__45key___2) => {
	if (__621787529867(size3039289938(l_a___0), 1)) {
		let { low: x_cur___0, high: x_end___1 } = __46__462451799117(2, __431111513593(size3039289938(l_a___0), 1))
		while ((x_cur___0 < x_end___1)){
			const l_i___1 = x_cur___0
			move__45last__45into__45sorted2818179454(subscript2803067135(l_a___0, __46__462451799117(0, l_i___1)), l_get__45key___2)
			x_cur___0 = (x_cur___0 + 1)
		}
	}
}
// small-sort@((symbol, json) tuple2, symbol) file:///home/andy/games/keen/lib/col/sort.keen 113:1
const small__45sort2001424904 = (l_a___0, l_get__45key___2) => {
	if (__621787529867(size4235011680(l_a___0), 1)) {
		let { low: x_cur___0, high: x_end___1 } = __46__462451799117(2, __431111513593(size4235011680(l_a___0), 1))
		while ((x_cur___0 < x_end___1)){
			const l_i___1 = x_cur___0
			move__45last__45into__45sorted1354321351(subscript1252271679(l_a___0, __46__462451799117(0, l_i___1)), l_get__45key___2)
			x_cur___0 = (x_cur___0 + 1)
		}
	}
}
// small-sort@((symbol, string) tuple2, symbol) file:///home/andy/games/keen/lib/col/sort.keen 113:1
const small__45sort3208490907 = (l_a___0, l_get__45key___2) => {
	if (__621787529867(size2985755893(l_a___0), 1)) {
		let { low: x_cur___0, high: x_end___1 } = __46__462451799117(2, __431111513593(size2985755893(l_a___0), 1))
		while ((x_cur___0 < x_end___1)){
			const l_i___1 = x_cur___0
			move__45last__45into__45sorted430024447(subscript769708496(l_a___0, __46__462451799117(0, l_i___1)), l_get__45key___2)
			x_cur___0 = (x_cur___0 + 1)
		}
	}
}
// move-last-into-sorted@((symbol, json) tuple2, symbol) file:///home/andy/games/keen/lib/col/sort.keen 118:1
const move__45last__45into__45sorted1354321351 = (l_a___0, l_get__45key___1) => {
	if ((__621787529867(size4235011680(l_a___0), 1) ? __621091897426(l_get__45key___1(subscript3276025978(l_a___0, __454246740820(c____557(), 2))), l_get__45key___1(subscript3276025978(l_a___0, __454246740820(c____557(), 1)))) : false)) {
		swap__45at236979601(l_a___0, __454246740820(c____557(), 2), __454246740820(c____557(), 1))
		move__45last__45into__45sorted1354321351(subscript707329682(l_a___0, __46__461225104787(0, __454246740820(c____557(), 1))), l_get__45key___1)
	}
}
// move-last-into-sorted@((symbol, string) tuple2, symbol) file:///home/andy/games/keen/lib/col/sort.keen 118:1
const move__45last__45into__45sorted430024447 = (l_a___0, l_get__45key___1) => {
	if ((__621787529867(size2985755893(l_a___0), 1) ? __621091897426(l_get__45key___1(subscript3151170441(l_a___0, __454246740820(c____557(), 2))), l_get__45key___1(subscript3151170441(l_a___0, __454246740820(c____557(), 1)))) : false)) {
		swap__45at4072669859(l_a___0, __454246740820(c____557(), 2), __454246740820(c____557(), 1))
		move__45last__45into__45sorted430024447(subscript2713877231(l_a___0, __46__461225104787(0, __454246740820(c____557(), 1))), l_get__45key___1)
	}
}
// move-last-into-sorted@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, symbol) file:///home/andy/games/keen/lib/col/sort.keen 118:1
const move__45last__45into__45sorted2818179454 = (l_a___0, l_get__45key___1) => {
	if ((__621787529867(size3039289938(l_a___0), 1) ? __621091897426(l_get__45key___1(subscript2248620741(l_a___0, __454246740820(c____557(), 2))), l_get__45key___1(subscript2248620741(l_a___0, __454246740820(c____557(), 1)))) : false)) {
		swap__45at2842979680(l_a___0, __454246740820(c____557(), 2), __454246740820(c____557(), 1))
		move__45last__45into__45sorted2818179454(subscript1596132023(l_a___0, __46__461225104787(0, __454246740820(c____557(), 1))), l_get__45key___1)
	}
}
// sort-by-first@(symbol, json) file:///home/andy/games/keen/lib/col/sort.keen 163:1
const sort__45by__45first2738486175 = (l_a___1, l_b___3) => {
	const l_mut__45a___0 = to4127478083(l_a___1)
	const l_mut__45b___2 = to151380589(l_b___3)
	sort__45in__45place__45by__45first647487720(to__45buffer__45view4045663729(l_mut__45a___0), to__45buffer__45view144248476(l_mut__45b___2))
	return new (tuple22635290944)(cast__45immutable733666862(l_mut__45a___0), cast__45immutable2616233909(l_mut__45b___2))
}
// sort-in-place-by-first@(symbol, json) file:///home/andy/games/keen/lib/col/sort.keen 170:1
const sort__45in__45place__45by__45first647487720 = (l_a___0, l_b___1) => {
	if ((!(size965608342(l_a___0) === size397993469(l_b___1)))) {
		throw new (error4175136409)(c____392())
	}
	if (__621787529867(size965608342(l_a___0), 1)) {
		swap__45at1636545834(l_a___0, 0, __471416517417(size965608342(l_a___0), 2))
		swap__45at1814760539(l_b___1, 0, __471416517417(size397993469(l_b___1), 2))
		const l_pivot___2 = subscript2452254520(l_a___0, 0)
		const l_new__45pivot__45index___3 = __45997287195(set__45partition__45by__45first376296958(l_a___0, l_b___1, l_pivot___2, 1, __45997287195(size965608342(l_a___0), 1)), 1)
		swap__45at1636545834(l_a___0, 0, l_new__45pivot__45index___3)
		swap__45at1814760539(l_b___1, 0, l_new__45pivot__45index___3)
		sort__45in__45place__45by__45first647487720(subscript152307013(l_a___0, __46__462451799117(0, l_new__45pivot__45index___3)), subscript810137056(l_b___1, __46__462451799117(0, l_new__45pivot__45index___3)))
		sort__45in__45place__45by__45first647487720(subscript3515117503(l_a___0, __46__461225104787(__431111513593(l_new__45pivot__45index___3, 1), c____557())), subscript2387982866(l_b___1, __46__461225104787(__431111513593(l_new__45pivot__45index___3, 1), c____557())))
	}
}
// set-partition-by-first@(symbol, json) file:///home/andy/games/keen/lib/col/sort.keen 182:1
const set__45partition__45by__45first376296958 = (l_a___0, l_b___1, l_pivot___6, l_left___3, l_right___5) => {
	if ((!(size965608342(l_a___0) === size397993469(l_b___1)))) {
		throw new (error4175136409)(c____392())
	}
	let l_l___2 = l_left___3
	let l_r___4 = l_right___5
	x_loop___0: while (true){
		if (__60__612052354958(l_l___2, l_r___4)) {
			if ((!__602180318207(l_r___4, size965608342(l_a___0)))) {
				throw new (error4175136409)(c____393())
			}
			if (__603345693457(subscript2452254520(l_a___0, l_l___2), l_pivot___6)) {
				l_l___2 = __431111513593(l_l___2, 1)
			} else {
				swap__45at1636545834(l_a___0, l_l___2, l_r___4)
				swap__45at1814760539(l_b___1, l_l___2, l_r___4)
				l_r___4 = __45997287195(l_r___4, 1)
			}
			continue
		} else {
			break  x_loop___0
		}
	}
	return l_l___2
}
// for-loop@((symbol, json) tuple2 array-view with-index, (nat32, (symbol, json) tuple2) tuple2) file:///home/andy/games/keen/lib/col/util.keen 22:1
const for__45loop3121650483 = (l_a___1, l_f___3) => {
	const l_res___0 = some2609188495(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error4175136409)(c____357())
	}
}
// for-loop@((symbol, string) map, (symbol, string) tuple2) file:///home/andy/games/keen/lib/col/util.keen 22:1
const for__45loop3955261972 = (l_a___1, l_f___3) => {
	const l_res___0 = some4154674450(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error4175136409)(c____357())
	}
}
// for-loop@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) map, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/util.keen 22:1
const for__45loop1056386584 = (l_a___1, l_f___3) => {
	const l_res___0 = some3068446813(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error4175136409)(c____357())
	}
}
// for-loop@((symbol, string) tuple2 array-view with-index, (nat32, (symbol, string) tuple2) tuple2) file:///home/andy/games/keen/lib/col/util.keen 22:1
const for__45loop48704689 = (l_a___1, l_f___3) => {
	const l_res___0 = some1028478253(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error4175136409)(c____357())
	}
}
// for-loop@(string, char8) file:///home/andy/games/keen/lib/col/util.keen 22:1
const for__45loop1236637330 = (l_a___1, l_f___3) => {
	const l_res___0 = some2526691981(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error4175136409)(c____357())
	}
}
// for-loop@(char8 array array-view, char8 array) file:///home/andy/games/keen/lib/col/util.keen 22:1
const for__45loop3879467268 = (l_a___1, l_f___3) => {
	const l_res___0 = some1984847343(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error4175136409)(c____357())
	}
}
// for-loop@(char32 array-view, char32) file:///home/andy/games/keen/lib/col/util.keen 22:1
const for__45loop996446816 = (l_a___1, l_f___3) => {
	const l_res___0 = some428023422(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error4175136409)(c____357())
	}
}
// for-loop@(char8 array-view, char8) file:///home/andy/games/keen/lib/col/util.keen 22:1
const for__45loop3053296006 = (l_a___1, l_f___3) => {
	const l_res___0 = some2818786307(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error4175136409)(c____357())
	}
}
// for-loop@(to-kid-result array with-index, (nat32, to-kid-result) tuple2) file:///home/andy/games/keen/lib/col/util.keen 22:1
const for__45loop1258512833 = (l_a___1, l_f___3) => {
	const l_res___0 = some2645119293(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error4175136409)(c____357())
	}
}
// for-loop@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view with-index, (nat32, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) tuple2) file:///home/andy/games/keen/lib/col/util.keen 22:1
const for__45loop859456516 = (l_a___1, l_f___3) => {
	const l_res___0 = some2785057744(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error4175136409)(c____357())
	}
}
// for-loop@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) map-unsorted, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/util.keen 30:1
const for__45loop3684868422 = (l_a___1, l_f___5) => {
	const l_size___0 = size2257947935(l_a___1)
	const l_res___2 = new (Array)(l_size___0).fill(null)
	let l_i___3 = 0
	;(void some1931228069(l_a___1, l_x___4 => {
			l_res___2[l_i___3] = l_f___5(l_x___4)
			l_i___3 = __431111513593(l_i___3, 1)
			return false
		}))
	if ((!(l_i___3 === l_size___0))) {
		throw new (error4175136409)(c____329())
	}
	return list__45new15341260(cast__45immutable330973840(l_res___2))
}
// for-loop@(to-kid-result array, to-kid-result, json array with-index, (nat32, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 30:1
const for__45loop1477798066 = (l_a___1, l_f___5) => {
	const l_size___0 = size2181877983(l_a___1)
	const l_res___2 = new (Array)(l_size___0).fill(null)
	let l_i___3 = 0
	;(void some682494843(l_a___1, l_x___4 => {
			l_res___2[l_i___3] = l_f___5(l_x___4)
			l_i___3 = __431111513593(l_i___3, 1)
			return false
		}))
	if ((!(l_i___3 === l_size___0))) {
		throw new (error4175136409)(c____329())
	}
	return list__45new2032144330(cast__45immutable1575952943(l_res___2))
}
// for-loop@(string array, string, (symbol array, json array) zip, (symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 30:1
const for__45loop2105557589 = (l_a___1, l_f___5) => {
	const l_size___0 = size817255246(l_a___1)
	const l_res___2 = new (Array)(l_size___0).fill(null)
	let l_i___3 = 0
	;(void some2571593361(l_a___1, l_x___4 => {
			l_res___2[l_i___3] = l_f___5(l_x___4)
			l_i___3 = __431111513593(l_i___3, 1)
			return false
		}))
	if ((!(l_i___3 === l_size___0))) {
		throw new (error4175136409)(c____329())
	}
	return list__45new260130062(cast__45immutable3213541909(l_res___2))
}
// for-loop@((json, json) tuple2 array, (json, json) tuple2, (symbol, json) map, (symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 30:1
const for__45loop3949055276 = (l_a___1, l_f___5) => {
	const l_size___0 = size354423489(l_a___1)
	const l_res___2 = new (Array)(l_size___0).fill(null)
	let l_i___3 = 0
	;(void some1423365738(l_a___1, l_x___4 => {
			l_res___2[l_i___3] = l_f___5(l_x___4)
			l_i___3 = __431111513593(l_i___3, 1)
			return false
		}))
	if ((!(l_i___3 === l_size___0))) {
		throw new (error4175136409)(c____329())
	}
	return list__45new295534455(cast__45immutable4063062948(l_res___2))
}
// for-loop@(token array, token, decode-semantic-tokens, token) file:///home/andy/games/keen/lib/col/util.keen 30:1
const for__45loop1329861732 = (l_a___1, l_f___5) => {
	const l_size___0 = size2382664655(l_a___1)
	const l_res___2 = new (Array)(l_size___0).fill(null)
	let l_i___3 = 0
	;(void some3108697648(l_a___1, l_x___4 => {
			l_res___2[l_i___3] = l_f___5(l_x___4)
			l_i___3 = __431111513593(l_i___3, 1)
			return false
		}))
	if ((!(l_i___3 === l_size___0))) {
		throw new (error4175136409)(c____329())
	}
	return list__45new2334524117(cast__45immutable1110928727(l_res___2))
}
// for-loop@((symbol, string) map, (symbol, string) tuple2, symbol array with-index, (nat32, symbol) tuple2) file:///home/andy/games/keen/lib/col/util.keen 30:1
const for__45loop710286415 = (l_a___1, l_f___5) => {
	const l_size___0 = size2062876848(l_a___1)
	const l_res___2 = new (Array)(l_size___0).fill(null)
	let l_i___3 = 0
	;(void some1154625468(l_a___1, l_x___4 => {
			l_res___2[l_i___3] = l_f___5(l_x___4)
			l_i___3 = __431111513593(l_i___3, 1)
			return false
		}))
	if ((!(l_i___3 === l_size___0))) {
		throw new (error4175136409)(c____329())
	}
	return list__45new3679651572(cast__45immutable3769887050(l_res___2))
}
// for-loop@((symbol, string) tuple2 array, (symbol, string) tuple2, (symbol, string) map-unsorted, (symbol, string) tuple2) file:///home/andy/games/keen/lib/col/util.keen 30:1
const for__45loop1727356787 = (l_a___1, l_f___5) => {
	const l_size___0 = size1797154261(l_a___1)
	const l_res___2 = new (Array)(l_size___0).fill(null)
	let l_i___3 = 0
	;(void some1233302123(l_a___1, l_x___4 => {
			l_res___2[l_i___3] = l_f___5(l_x___4)
			l_i___3 = __431111513593(l_i___3, 1)
			return false
		}))
	if ((!(l_i___3 === l_size___0))) {
		throw new (error4175136409)(c____329())
	}
	return list__45new1520485959(cast__45immutable3769887050(l_res___2))
}
// for-loop@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) map, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, symbol array with-index, (nat32, symbol) tuple2) file:///home/andy/games/keen/lib/col/util.keen 30:1
const for__45loop271853032 = (l_a___1, l_f___5) => {
	const l_size___0 = size2062876848(l_a___1)
	const l_res___2 = new (Array)(l_size___0).fill(null)
	let l_i___3 = 0
	;(void some1154625468(l_a___1, l_x___4 => {
			l_res___2[l_i___3] = l_f___5(l_x___4)
			l_i___3 = __431111513593(l_i___3, 1)
			return false
		}))
	if ((!(l_i___3 === l_size___0))) {
		throw new (error4175136409)(c____329())
	}
	return list__45new3858692973(cast__45immutable330973840(l_res___2))
}
// for-loop@((symbol, json) tuple2 array, (symbol, json) tuple2, (symbol, json) map-unsorted, (symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 30:1
const for__45loop3022171664 = (l_a___1, l_f___5) => {
	const l_size___0 = size70031066(l_a___1)
	const l_res___2 = new (Array)(l_size___0).fill(null)
	let l_i___3 = 0
	;(void some536682856(l_a___1, l_x___4 => {
			l_res___2[l_i___3] = l_f___5(l_x___4)
			l_i___3 = __431111513593(l_i___3, 1)
			return false
		}))
	if ((!(l_i___3 === l_size___0))) {
		throw new (error4175136409)(c____329())
	}
	return list__45new4143771587(cast__45immutable3544078916(l_res___2))
}
// for-loop@(char8 array, char8, string, char8) file:///home/andy/games/keen/lib/col/util.keen 30:1
const for__45loop2977200313 = (l_a___1, l_f___5) => {
	const l_size___0 = size3209178433(l_a___1)
	const l_res___2 = new (Uint8Array)(l_size___0)
	let l_i___3 = 0
	;(void some2526691981(l_a___1, l_x___4 => {
			l_res___2[l_i___3] = l_f___5(l_x___4)
			l_i___3 = __431111513593(l_i___3, 1)
			return false
		}))
	if ((!(l_i___3 === l_size___0))) {
		throw new (error4175136409)(c____329())
	}
	return list__45new3709128537(cast__45immutable3953210833(l_res___2))
}
// for-loop@(string array, string, to-kid-result array with-index, (nat32, to-kid-result) tuple2) file:///home/andy/games/keen/lib/col/util.keen 30:1
const for__45loop4082311331 = (l_a___1, l_f___5) => {
	const l_size___0 = size1084634452(l_a___1)
	const l_res___2 = new (Array)(l_size___0).fill(null)
	let l_i___3 = 0
	;(void some2645119293(l_a___1, l_x___4 => {
			l_res___2[l_i___3] = l_f___5(l_x___4)
			l_i___3 = __431111513593(l_i___3, 1)
			return false
		}))
	if ((!(l_i___3 === l_size___0))) {
		throw new (error4175136409)(c____329())
	}
	return list__45new260130062(cast__45immutable3213541909(l_res___2))
}
// filter@(lsp-diagnostic array, lsp-diagnostic, lsp-diagnostic array) file:///home/andy/games/keen/lib/col/util.keen 64:1
const filter1234816684 = (l_a___1, l_f___5) => {
	const l_in__45size___0 = l_a___1.length
	const l_res___2 = new (Array)(l_in__45size___0).fill(null)
	let l_out__45size___3 = 0
	;(void some2019179498(l_a___1, l_x___4 => {
			if (l_f___5(l_x___4)) {
				l_res___2[l_out__45size___3] = l_x___4
				l_out__45size___3 = __431111513593(l_out__45size___3, 1)
			}
			return false
		}))
	return list__45new2940745720(to1828463475(subscript3970491421(cast__45immutable3535476440(l_res___2), __46__462451799117(0, l_out__45size___3))))
}
// map@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) map-unsorted, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/util.keen 118:1
const map1883797490 = (l_a___0, l_f___1) =>
	for__45loop3684868422(l_a___0, l_f___1)
// map@(token array, token, decode-semantic-tokens, token) file:///home/andy/games/keen/lib/col/util.keen 118:1
const map3032870626 = (l_a___0, l_f___1) =>
	for__45loop1329861732(l_a___0, l_f___1)
// map@(char8 array, char8, string, char8) file:///home/andy/games/keen/lib/col/util.keen 118:1
const map3409934236 = (l_a___0, l_f___1) =>
	for__45loop2977200313(l_a___0, l_f___1)
// map@((symbol, string) tuple2 array, (symbol, string) tuple2, (symbol, string) map-unsorted, (symbol, string) tuple2) file:///home/andy/games/keen/lib/col/util.keen 118:1
const map3143236912 = (l_a___0, l_f___1) =>
	for__45loop1727356787(l_a___0, l_f___1)
// map@((symbol, json) tuple2 array, (symbol, json) tuple2, (symbol, json) map-unsorted, (symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 118:1
const map4061624433 = (l_a___0, l_f___1) =>
	for__45loop3022171664(l_a___0, l_f___1)
// n-of@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option buffer, (uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/games/keen/lib/col/util.keen 157:1
const n__45of1104492568 = (l_n___1, l_value___3) => {
	const l_res___0 = new (Array)(l_n___1).fill(null)
	let x_cur___0 = 0
	let x_end___1 = l_n___1
	while ((x_cur___0 < x_end___1)){
		const l_i___2 = x_cur___0
		l_res___0[l_i___2] = l_value___3
		x_cur___0 = (x_cur___0 + 1)
	}
	return list__45new958280054(cast__45immutable2253076973(l_res___0))
}
// n-of@((nat32, json deferred) tuple2 option buffer, (nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/util.keen 157:1
const n__45of2549809666 = (l_n___1, l_value___3) => {
	const l_res___0 = new (Array)(l_n___1).fill(null)
	let x_cur___0 = 0
	let x_end___1 = l_n___1
	while ((x_cur___0 < x_end___1)){
		const l_i___2 = x_cur___0
		l_res___0[l_i___2] = l_value___3
		x_cur___0 = (x_cur___0 + 1)
	}
	return list__45new2156479568(cast__45immutable1069848447(l_res___0))
}
// n-of@((uri, lsp-diagnostic array) tuple2 option buffer, (uri, lsp-diagnostic array) tuple2 option) file:///home/andy/games/keen/lib/col/util.keen 157:1
const n__45of2427916655 = (l_n___1, l_value___3) => {
	const l_res___0 = new (Array)(l_n___1).fill(null)
	let x_cur___0 = 0
	let x_end___1 = l_n___1
	while ((x_cur___0 < x_end___1)){
		const l_i___2 = x_cur___0
		l_res___0[l_i___2] = l_value___3
		x_cur___0 = (x_cur___0 + 1)
	}
	return list__45new2789373813(cast__45immutable3438095008(l_res___0))
}
// n-of@(nat32 buffer, nat32) file:///home/andy/games/keen/lib/col/util.keen 157:1
const n__45of4081928135 = (l_n___1, l_value___3) => {
	const l_res___0 = new (Uint32Array)(l_n___1)
	let x_cur___0 = 0
	let x_end___1 = l_n___1
	while ((x_cur___0 < x_end___1)){
		const l_i___2 = x_cur___0
		l_res___0[l_i___2] = l_value___3
		x_cur___0 = (x_cur___0 + 1)
	}
	return list__45new2126093138(cast__45immutable4271026254(l_res___0))
}
// n-of@((string, void) tuple2 option buffer, (string, void) tuple2 option) file:///home/andy/games/keen/lib/col/util.keen 157:1
const n__45of512544946 = (l_n___1, l_value___3) => {
	const l_res___0 = new (Array)(l_n___1).fill(null)
	let x_cur___0 = 0
	let x_end___1 = l_n___1
	while ((x_cur___0 < x_end___1)){
		const l_i___2 = x_cur___0
		l_res___0[l_i___2] = l_value___3
		x_cur___0 = (x_cur___0 + 1)
	}
	return list__45new3352599424(cast__45immutable2537439471(l_res___0))
}
// for-option@(js-any array, js-any, js-any array, js-any) file:///home/andy/games/keen/lib/col/util.keen 173:1
const _async_for__45option2130283245 = async (l_a___1, l_f___4) => {
	let l_v___5, l_temp___3
	const l_out___0 = new2406430735()
	;(void (await _async_some3797328660(l_a___1, async l_x___2 => {
			((l_temp___3 = (await l_f___4(l_x___2))) , ((l_v___5 = l_temp___3.value) , ((l_temp___3.index === 1) ? __126__612351533849(l_out___0, l_v___5) : (void 0))))
			return false
		})))
	return finish3808439716(l_out___0)
}
// size@(symbol array) file:///home/andy/games/keen/lib/col/util.keen 204:1
const size2062876848 = l_a___0 =>
	l_a___0.inner.length
// size@(json array) file:///home/andy/games/keen/lib/col/util.keen 204:1
const size2181877983 = l_a___0 =>
	l_a___0.inner.length
// size@(to-kid-result array) file:///home/andy/games/keen/lib/col/util.keen 204:1
const size1084634452 = l_a___0 =>
	l_a___0.inner.length
// some@(json array, json) file:///home/andy/games/keen/lib/col/util.keen 206:1
const some682494843 = (l_a___1, l_f___4) => {
	let l_i___0
	return ((l_i___0 = 0) , some3021225121(l_a___1.inner, l_x___2 => {
			const l_res___3 = l_f___4(new (tuple21044246885)(l_i___0, l_x___2))
			l_i___0 = __431111513593(l_i___0, 1)
			return l_res___3
		}))
}
// some@((symbol, json) tuple2 array-view, (symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 206:1
const some2609188495 = (l_a___1, l_f___4) => {
	let l_i___0
	return ((l_i___0 = 0) , some794520560(l_a___1.inner, l_x___2 => {
			const l_res___3 = l_f___4(new (tuple23416926617)(l_i___0, l_x___2))
			l_i___0 = __431111513593(l_i___0, 1)
			return l_res___3
		}))
}
// some@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/util.keen 206:1
const some2785057744 = (l_a___1, l_f___4) => {
	let l_i___0
	return ((l_i___0 = 0) , some3487397621(l_a___1.inner, l_x___2 => {
			const l_res___3 = l_f___4(new (tuple23677734274)(l_i___0, l_x___2))
			l_i___0 = __431111513593(l_i___0, 1)
			return l_res___3
		}))
}
// some@((symbol, string) tuple2 array-view, (symbol, string) tuple2) file:///home/andy/games/keen/lib/col/util.keen 206:1
const some1028478253 = (l_a___1, l_f___4) => {
	let l_i___0
	return ((l_i___0 = 0) , some352326534(l_a___1.inner, l_x___2 => {
			const l_res___3 = l_f___4(new (tuple2919703527)(l_i___0, l_x___2))
			l_i___0 = __431111513593(l_i___0, 1)
			return l_res___3
		}))
}
// some@(to-kid-result array, to-kid-result) file:///home/andy/games/keen/lib/col/util.keen 206:1
const some2645119293 = (l_a___1, l_f___4) => {
	let l_i___0
	return ((l_i___0 = 0) , some2453224339(l_a___1.inner, l_x___2 => {
			const l_res___3 = l_f___4(new (tuple21973466743)(l_i___0, l_x___2))
			l_i___0 = __431111513593(l_i___0, 1)
			return l_res___3
		}))
}
// some@(symbol array, symbol) file:///home/andy/games/keen/lib/col/util.keen 206:1
const some1154625468 = (l_a___1, l_f___4) => {
	let l_i___0
	return ((l_i___0 = 0) , some3895701114(l_a___1.inner, l_x___2 => {
			const l_res___3 = l_f___4(new (tuple22488876110)(l_i___0, l_x___2))
			l_i___0 = __431111513593(l_i___0, 1)
			return l_res___3
		}))
}
// split@(char8 array-view, string, char8 array-iterator, char8) file:///home/andy/games/keen/lib/col/util.keen 256:1
const split258860773 = (l_a___2, l_split__45by___6) => {
	const l_out___0 = new1876960267()
	let l_part__45start___1 = begin3945520355(l_a___2)
	const l_iter___3 = copy789796339(l_part__45start___1)
	while (true){
		const l_temp___4 = (() => {
			const l_before___5 = copy789796339(l_iter___3)
			if (try__45take__45all2393106549(l_iter___3, l_split__45by___6)) {
				__126__612093834064(l_out___0, slice4028578461(l_part__45start___1, l_before___5))
				l_part__45start___1 = copy789796339(l_iter___3)
				return c____307()
			} else {
				if (((typeof try__45take__45next872227179(l_iter___3)) === "number")) {
					return c____307()
				} else {
					__126__612093834064(l_out___0, slice4028578461(l_part__45start___1, l_iter___3))
					return finish__45array2191840514(l_out___0)
				}
			}
		})()
		const x_matched___0 = l_temp___4
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if ((x_matched___0 instanceof Array)) {
				return l_temp___4
			} else {
				return _unreachable()
			}
		}
	}
}
// sum@(nat32, string array, string) file:///home/andy/games/keen/lib/col/util.keen 299:1
const sum1884214775 = (l_a___1, l_f___3) => {
	let l_res___0 = 0
	;(void some1855366333(l_a___1, l_x___2 => {
			l_res___0 = __431111513593(l_res___0, l_f___3(l_x___2))
			return false
		}))
	return l_res___0
}
// swap-at@((symbol, string) tuple2 buffer, (symbol, string) tuple2) file:///home/andy/games/keen/lib/col/util.keen 343:1
const swap__45at4082402236 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript1067978641(l_a___1, l_i___2)
	set__45subscript1869705786(l_a___1, l_i___2, subscript1067978641(l_a___1, l_j___3))
	set__45subscript1869705786(l_a___1, l_j___3, l_temp___0)
}
// swap-at@(json buffer-view, json) file:///home/andy/games/keen/lib/col/util.keen 343:1
const swap__45at1814760539 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript2345656961(l_a___1, l_i___2)
	set__45subscript1221974508(l_a___1, l_i___2, subscript2345656961(l_a___1, l_j___3))
	set__45subscript1221974508(l_a___1, l_j___3, l_temp___0)
}
// swap-at@((symbol, json) tuple2 buffer-view, (symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 343:1
const swap__45at1097859516 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript1530713571(l_a___1, l_i___2)
	set__45subscript2382295053(l_a___1, l_i___2, subscript1530713571(l_a___1, l_j___3))
	set__45subscript2382295053(l_a___1, l_j___3, l_temp___0)
}
// swap-at@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/util.keen 343:1
const swap__45at3225463383 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript3320656413(l_a___1, l_i___2)
	set__45subscript2957446360(l_a___1, l_i___2, subscript3320656413(l_a___1, l_j___3))
	set__45subscript2957446360(l_a___1, l_j___3, l_temp___0)
}
// swap-at@((symbol, string) tuple2 buffer-view, (symbol, string) tuple2) file:///home/andy/games/keen/lib/col/util.keen 343:1
const swap__45at1395066790 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript3184670839(l_a___1, l_i___2)
	set__45subscript4132141612(l_a___1, l_i___2, subscript3184670839(l_a___1, l_j___3))
	set__45subscript4132141612(l_a___1, l_j___3, l_temp___0)
}
// swap-at@((symbol, json) tuple2 buffer, (symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 343:1
const swap__45at3706993106 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript359054975(l_a___1, l_i___2)
	set__45subscript56910(l_a___1, l_i___2, subscript359054975(l_a___1, l_j___3))
	set__45subscript56910(l_a___1, l_j___3, l_temp___0)
}
// swap-at@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer-view, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/util.keen 343:1
const swap__45at3914121535 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript324692138(l_a___1, l_i___2)
	set__45subscript3066845548(l_a___1, l_i___2, subscript324692138(l_a___1, l_j___3))
	set__45subscript3066845548(l_a___1, l_j___3, l_temp___0)
}
// swap-at@(symbol buffer-view, symbol) file:///home/andy/games/keen/lib/col/util.keen 343:1
const swap__45at1636545834 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript2452254520(l_a___1, l_i___2)
	set__45subscript1834936631(l_a___1, l_i___2, subscript2452254520(l_a___1, l_j___3))
	set__45subscript1834936631(l_a___1, l_j___3, l_temp___0)
}
// swap-at@((nat32, json deferred) tuple2 option buffer, (nat32, json deferred) tuple2 option) file:///home/andy/games/keen/lib/col/util.keen 343:1
const swap__45at3124094389 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript3255648075(l_a___1, l_i___2)
	set__45subscript2359692334(l_a___1, l_i___2, subscript3255648075(l_a___1, l_j___3))
	set__45subscript2359692334(l_a___1, l_j___3, l_temp___0)
}
// swap-at@((symbol, string) tuple2 buffer-view, (symbol, string) tuple2) file:///home/andy/games/keen/lib/col/util.keen 353:1
const swap__45at4072669859 = (l_a___0, l_i___1, l_j___2) =>
	swap__45at1395066790(l_a___0, to__45index3249306317(l_a___0, l_i___1), to__45index3249306317(l_a___0, l_j___2))
// swap-at@((symbol, json) tuple2 buffer-view, (symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 353:1
const swap__45at236979601 = (l_a___0, l_i___1, l_j___2) =>
	swap__45at1097859516(l_a___0, to__45index1529606635(l_a___0, l_i___1), to__45index1529606635(l_a___0, l_j___2))
// swap-at@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer-view, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/util.keen 353:1
const swap__45at2842979680 = (l_a___0, l_i___1, l_j___2) =>
	swap__45at3914121535(l_a___0, to__45index2306530706(l_a___0, l_i___1), to__45index2306530706(l_a___0, l_j___2))
// take-while@(char8 array-view, char8 array-view, char8 array-iterator, char8) file:///home/andy/games/keen/lib/col/util.keen 373:1
const take__45while1958204199 = (l_a___1, l_f___6) => {
	let l_x___5, l_temp___4, l_before___3
	const l_iter___0 = begin2617308392(l_a___1)
	while (true){
		const l_temp___2 = ((l_before___3 = copy789796339(l_iter___0)) , ((l_temp___4 = try__45take__45next872227179(l_iter___0)) , ((l_x___5 = l_temp___4) , ((((typeof l_temp___4) === "number") ? l_f___6(l_x___5) : false) ? c____307() : slice4028578461(begin2617308392(l_a___1), l_before___3)))))
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if ((x_matched___0 instanceof array__45view3308382370)) {
				return l_temp___2
			} else {
				return _unreachable()
			}
		}
	}
}
// ends-with@(string, char8 array-iterator, char8) file:///home/andy/games/keen/lib/col/util.keen 416:1
const ends__45with3251877418 = (l_a___0, l_b___1) =>
	try__45take__45all__45prev1006036860(end3612451581(l_a___0), l_b___1)
// try-take-all@(string, char8 array-iterator, char8) file:///home/andy/games/keen/lib/col/util.keen 455:1
const try__45take__45all2393106549 = (l_a___1, l_start___3) => {
	let l_value___8, l_temp___7
	const l_copy___0 = copy789796339(l_a___1)
	const l_iter__45start___2 = begin3945520355(l_start___3)
	while (true){
		const l_temp___4 = (() => {
			const l_temp___5 = try__45take__45next872227179(l_iter__45start___2)
			const l_x___6 = l_temp___5
			if (((typeof l_temp___5) === "number")) {
				return ((l_temp___7 = try__45take__45next872227179(l_copy___0)) , ((l_value___8 = l_temp___7) , ((((typeof l_temp___7) === "number") ? (l_value___8 === l_x___6) : false) ? c____307() : false)))
			} else {
				skip__45next__45n187135518(l_a___1, size3209178433(l_start___3))
				return true
			}
		})()
		const x_matched___0 = l_temp___4
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___4
			} else {
				return _unreachable()
			}
		}
	}
}
// try-take-all@(char8 array, char8 array-iterator, char8) file:///home/andy/games/keen/lib/col/util.keen 455:1
const try__45take__45all1546928987 = (l_a___1, l_start___3) => {
	let l_value___8, l_temp___7
	const l_copy___0 = copy789796339(l_a___1)
	const l_iter__45start___2 = begin1051078769(l_start___3)
	while (true){
		const l_temp___4 = (() => {
			const l_temp___5 = try__45take__45next872227179(l_iter__45start___2)
			const l_x___6 = l_temp___5
			if (((typeof l_temp___5) === "number")) {
				return ((l_temp___7 = try__45take__45next872227179(l_copy___0)) , ((l_value___8 = l_temp___7) , ((((typeof l_temp___7) === "number") ? (l_value___8 === l_x___6) : false) ? c____307() : false)))
			} else {
				skip__45next__45n187135518(l_a___1, l_start___3.length)
				return true
			}
		})()
		const x_matched___0 = l_temp___4
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___4
			} else {
				return _unreachable()
			}
		}
	}
}
// try-take-all-prev@(string, char8 array-iterator, char8) file:///home/andy/games/keen/lib/col/util.keen 468:1
const try__45take__45all__45prev1006036860 = (l_a___1, l_end___3) => {
	let l_value___8, l_temp___7
	const l_copy___0 = copy789796339(l_a___1)
	const l_iter__45end___2 = end3612451581(l_end___3)
	while (true){
		const l_temp___4 = (() => {
			const l_temp___5 = try__45take__45prev1129323691(l_iter__45end___2)
			const l_x___6 = l_temp___5
			if (((typeof l_temp___5) === "number")) {
				return ((l_temp___7 = try__45take__45prev1129323691(l_copy___0)) , ((l_value___8 = l_temp___7) , ((((typeof l_temp___7) === "number") ? (l_value___8 === l_x___6) : false) ? c____307() : false)))
			} else {
				skip__45prev__45n622833207(l_a___1, size3209178433(l_end___3))
				return true
			}
		})()
		const x_matched___0 = l_temp___4
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___4
			} else {
				return _unreachable()
			}
		}
	}
}
// new@(js-any) file:///home/andy/games/keen/lib/col/util.keen 543:1
const new2406430735 = () =>
	new2894410971(0)
// new@(char8 array-view) file:///home/andy/games/keen/lib/col/util.keen 543:1
const new1876960267 = () =>
	new4036163210(0)
// new@(js-any) file:///home/andy/games/keen/lib/col/util.keen 545:1
const new2894410971 = l_size__45hint___0 =>
	new (builder1348463893)(new (Array)(l_size__45hint___0).fill(null), 0)
// new@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 545:1
const new1010882681 = l_size__45hint___0 =>
	new (builder2019409968)(new (Array)(l_size__45hint___0).fill(null), 0)
// new@(char8) file:///home/andy/games/keen/lib/col/util.keen 545:1
const new1180966838 = l_size__45hint___0 =>
	new (builder2085736389)(new (Uint8Array)(l_size__45hint___0), 0)
// new@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/util.keen 545:1
const new2610777022 = l_size__45hint___0 =>
	new (builder881006348)(new (Array)(l_size__45hint___0).fill(null), 0)
// new@(char8 array-view) file:///home/andy/games/keen/lib/col/util.keen 545:1
const new4036163210 = l_size__45hint___0 =>
	new (builder1546705585)(new (Array)(l_size__45hint___0).fill(null), 0)
// new@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/util.keen 545:1
const new4210594684 = l_size__45hint___0 =>
	new (builder3081837746)(new (Array)(l_size__45hint___0).fill(null), 0)
// new@(json) file:///home/andy/games/keen/lib/col/util.keen 545:1
const new3878297269 = l_size__45hint___0 =>
	new (builder1455142335)(new (Array)(l_size__45hint___0).fill(null), 0)
// new@(string) file:///home/andy/games/keen/lib/col/util.keen 545:1
const new3505861802 = l_size__45hint___0 =>
	new (builder1287207151)(new (Array)(l_size__45hint___0).fill(null), 0)
// new@(char32) file:///home/andy/games/keen/lib/col/util.keen 545:1
const new2814065279 = l_size__45hint___0 =>
	new (builder3098904834)(new (Uint32Array)(l_size__45hint___0), 0)
// ~=@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/util.keen 547:1
const __126__61848898384 = (l_a___0, l_value___2) => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_capacity___1 = l_a___0.buffer.length
	;((l_a___0["cur-size"] === l_capacity___1) ? expand__45capacity3093242489(l_a___0, ((l_capacity___1 === 0) ? 4 : __42544875948(l_capacity___1, 2))) : (void 0))
	l_a___0.buffer[l_a___0["cur-size"]] = l_value___2
	l_a___0["cur-size"] = __431111513593(l_a___0["cur-size"], 1)
}
// ~=@(char32) file:///home/andy/games/keen/lib/col/util.keen 547:1
const __126__613663841555 = (l_a___0, l_value___2) => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_capacity___1 = l_a___0.buffer.length
	;((l_a___0["cur-size"] === l_capacity___1) ? expand__45capacity301776120(l_a___0, ((l_capacity___1 === 0) ? 4 : __42544875948(l_capacity___1, 2))) : (void 0))
	l_a___0.buffer[l_a___0["cur-size"]] = l_value___2
	l_a___0["cur-size"] = __431111513593(l_a___0["cur-size"], 1)
}
// ~=@(char8) file:///home/andy/games/keen/lib/col/util.keen 547:1
const __126__613860143679 = (l_a___0, l_value___2) => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_capacity___1 = l_a___0.buffer.length
	;((l_a___0["cur-size"] === l_capacity___1) ? expand__45capacity306791879(l_a___0, ((l_capacity___1 === 0) ? 4 : __42544875948(l_capacity___1, 2))) : (void 0))
	l_a___0.buffer[l_a___0["cur-size"]] = l_value___2
	l_a___0["cur-size"] = __431111513593(l_a___0["cur-size"], 1)
}
// ~=@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 547:1
const __126__61663728857 = (l_a___0, l_value___2) => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_capacity___1 = l_a___0.buffer.length
	;((l_a___0["cur-size"] === l_capacity___1) ? expand__45capacity140972526(l_a___0, ((l_capacity___1 === 0) ? 4 : __42544875948(l_capacity___1, 2))) : (void 0))
	l_a___0.buffer[l_a___0["cur-size"]] = l_value___2
	l_a___0["cur-size"] = __431111513593(l_a___0["cur-size"], 1)
}
// ~=@(char8 array-view) file:///home/andy/games/keen/lib/col/util.keen 547:1
const __126__612093834064 = (l_a___0, l_value___2) => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_capacity___1 = l_a___0.buffer.length
	;((l_a___0["cur-size"] === l_capacity___1) ? expand__45capacity457843096(l_a___0, ((l_capacity___1 === 0) ? 4 : __42544875948(l_capacity___1, 2))) : (void 0))
	l_a___0.buffer[l_a___0["cur-size"]] = l_value___2
	l_a___0["cur-size"] = __431111513593(l_a___0["cur-size"], 1)
}
// ~=@(js-any) file:///home/andy/games/keen/lib/col/util.keen 547:1
const __126__612351533849 = (l_a___0, l_value___2) => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_capacity___1 = l_a___0.buffer.length
	;((l_a___0["cur-size"] === l_capacity___1) ? expand__45capacity2093848321(l_a___0, ((l_capacity___1 === 0) ? 4 : __42544875948(l_capacity___1, 2))) : (void 0))
	l_a___0.buffer[l_a___0["cur-size"]] = l_value___2
	l_a___0["cur-size"] = __431111513593(l_a___0["cur-size"], 1)
}
// ~=@(string) file:///home/andy/games/keen/lib/col/util.keen 547:1
const __126__612346250272 = (l_a___0, l_value___2) => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_capacity___1 = l_a___0.buffer.length
	;((l_a___0["cur-size"] === l_capacity___1) ? expand__45capacity3516565939(l_a___0, ((l_capacity___1 === 0) ? 4 : __42544875948(l_capacity___1, 2))) : (void 0))
	l_a___0.buffer[l_a___0["cur-size"]] = l_value___2
	l_a___0["cur-size"] = __431111513593(l_a___0["cur-size"], 1)
}
// ~=@(json) file:///home/andy/games/keen/lib/col/util.keen 547:1
const __126__613914582089 = (l_a___0, l_value___2) => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_capacity___1 = l_a___0.buffer.length
	;((l_a___0["cur-size"] === l_capacity___1) ? expand__45capacity1849803752(l_a___0, ((l_capacity___1 === 0) ? 4 : __42544875948(l_capacity___1, 2))) : (void 0))
	l_a___0.buffer[l_a___0["cur-size"]] = l_value___2
	l_a___0["cur-size"] = __431111513593(l_a___0["cur-size"], 1)
}
// ~=@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/util.keen 547:1
const __126__611360247415 = (l_a___0, l_value___2) => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_capacity___1 = l_a___0.buffer.length
	;((l_a___0["cur-size"] === l_capacity___1) ? expand__45capacity1283466284(l_a___0, ((l_capacity___1 === 0) ? 4 : __42544875948(l_capacity___1, 2))) : (void 0))
	l_a___0.buffer[l_a___0["cur-size"]] = l_value___2
	l_a___0["cur-size"] = __431111513593(l_a___0["cur-size"], 1)
}
// ~~=@(char8) file:///home/andy/games/keen/lib/col/util.keen 554:1
const __126__126__612461227494 = (l_a___0, l_values___3) => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_capacity___1 = l_a___0.buffer.length
	const l_new__45size___2 = __431111513593(l_a___0["cur-size"], size1763153932(l_values___3))
	;(__621787529867(l_new__45size___2, l_capacity___1) ? expand__45capacity306791879(l_a___0, round__45up__45to__45power__45of__45two744736890(__431111513593(l_a___0["cur-size"], size1763153932(l_values___3)))) : (void 0))
	set__45subscript3544890769(l_a___0.buffer, __46__462451799117(l_a___0["cur-size"], l_new__45size___2), l_values___3)
	l_a___0["cur-size"] = __431111513593(l_a___0["cur-size"], size1763153932(l_values___3))
}
// expand-capacity@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/util.keen 562:1
const expand__45capacity3093242489 = (l_a___1, l_new__45capacity___0) => {
	if ((!__621787529867(l_new__45capacity___0, l_a___1.buffer.length))) {
		throw new (error4175136409)(c____356())
	}
	const l_new__45buffer___2 = new (Array)(l_new__45capacity___0).fill(null)
	set__45subscript2549704467(l_new__45buffer___2, __46__462451799117(0, l_a___1["cur-size"]), subscript1678098774(l_a___1.buffer, __46__462451799117(0, l_a___1["cur-size"])))
	l_a___1.buffer = l_new__45buffer___2
}
// expand-capacity@(char8) file:///home/andy/games/keen/lib/col/util.keen 562:1
const expand__45capacity306791879 = (l_a___1, l_new__45capacity___0) => {
	if ((!__621787529867(l_new__45capacity___0, l_a___1.buffer.length))) {
		throw new (error4175136409)(c____356())
	}
	const l_new__45buffer___2 = new (Uint8Array)(l_new__45capacity___0)
	set__45subscript511666667(l_new__45buffer___2, __46__462451799117(0, l_a___1["cur-size"]), subscript3665448857(l_a___1.buffer, __46__462451799117(0, l_a___1["cur-size"])))
	l_a___1.buffer = l_new__45buffer___2
}
// expand-capacity@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/util.keen 562:1
const expand__45capacity1283466284 = (l_a___1, l_new__45capacity___0) => {
	if ((!__621787529867(l_new__45capacity___0, l_a___1.buffer.length))) {
		throw new (error4175136409)(c____356())
	}
	const l_new__45buffer___2 = new (Array)(l_new__45capacity___0).fill(null)
	set__45subscript2995247678(l_new__45buffer___2, __46__462451799117(0, l_a___1["cur-size"]), subscript3193420933(l_a___1.buffer, __46__462451799117(0, l_a___1["cur-size"])))
	l_a___1.buffer = l_new__45buffer___2
}
// expand-capacity@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 562:1
const expand__45capacity140972526 = (l_a___1, l_new__45capacity___0) => {
	if ((!__621787529867(l_new__45capacity___0, l_a___1.buffer.length))) {
		throw new (error4175136409)(c____356())
	}
	const l_new__45buffer___2 = new (Array)(l_new__45capacity___0).fill(null)
	set__45subscript735872848(l_new__45buffer___2, __46__462451799117(0, l_a___1["cur-size"]), subscript2338042479(l_a___1.buffer, __46__462451799117(0, l_a___1["cur-size"])))
	l_a___1.buffer = l_new__45buffer___2
}
// expand-capacity@(char32) file:///home/andy/games/keen/lib/col/util.keen 562:1
const expand__45capacity301776120 = (l_a___1, l_new__45capacity___0) => {
	if ((!__621787529867(l_new__45capacity___0, l_a___1.buffer.length))) {
		throw new (error4175136409)(c____356())
	}
	const l_new__45buffer___2 = new (Uint32Array)(l_new__45capacity___0)
	set__45subscript2572290282(l_new__45buffer___2, __46__462451799117(0, l_a___1["cur-size"]), subscript2483069761(l_a___1.buffer, __46__462451799117(0, l_a___1["cur-size"])))
	l_a___1.buffer = l_new__45buffer___2
}
// expand-capacity@(json) file:///home/andy/games/keen/lib/col/util.keen 562:1
const expand__45capacity1849803752 = (l_a___1, l_new__45capacity___0) => {
	if ((!__621787529867(l_new__45capacity___0, l_a___1.buffer.length))) {
		throw new (error4175136409)(c____356())
	}
	const l_new__45buffer___2 = new (Array)(l_new__45capacity___0).fill(null)
	set__45subscript1709301082(l_new__45buffer___2, __46__462451799117(0, l_a___1["cur-size"]), subscript81988849(l_a___1.buffer, __46__462451799117(0, l_a___1["cur-size"])))
	l_a___1.buffer = l_new__45buffer___2
}
// expand-capacity@(string) file:///home/andy/games/keen/lib/col/util.keen 562:1
const expand__45capacity3516565939 = (l_a___1, l_new__45capacity___0) => {
	if ((!__621787529867(l_new__45capacity___0, l_a___1.buffer.length))) {
		throw new (error4175136409)(c____356())
	}
	const l_new__45buffer___2 = new (Array)(l_new__45capacity___0).fill(null)
	set__45subscript1677288541(l_new__45buffer___2, __46__462451799117(0, l_a___1["cur-size"]), subscript912053911(l_a___1.buffer, __46__462451799117(0, l_a___1["cur-size"])))
	l_a___1.buffer = l_new__45buffer___2
}
// expand-capacity@(js-any) file:///home/andy/games/keen/lib/col/util.keen 562:1
const expand__45capacity2093848321 = (l_a___1, l_new__45capacity___0) => {
	if ((!__621787529867(l_new__45capacity___0, l_a___1.buffer.length))) {
		throw new (error4175136409)(c____356())
	}
	const l_new__45buffer___2 = new (Array)(l_new__45capacity___0).fill(null)
	set__45subscript1008927852(l_new__45buffer___2, __46__462451799117(0, l_a___1["cur-size"]), subscript529545893(l_a___1.buffer, __46__462451799117(0, l_a___1["cur-size"])))
	l_a___1.buffer = l_new__45buffer___2
}
// expand-capacity@(char8 array-view) file:///home/andy/games/keen/lib/col/util.keen 562:1
const expand__45capacity457843096 = (l_a___1, l_new__45capacity___0) => {
	if ((!__621787529867(l_new__45capacity___0, l_a___1.buffer.length))) {
		throw new (error4175136409)(c____356())
	}
	const l_new__45buffer___2 = new (Array)(l_new__45capacity___0).fill(null)
	set__45subscript1886205975(l_new__45buffer___2, __46__462451799117(0, l_a___1["cur-size"]), subscript910872492(l_a___1.buffer, __46__462451799117(0, l_a___1["cur-size"])))
	l_a___1.buffer = l_new__45buffer___2
}
// finish-array@(char8 array-view) file:///home/andy/games/keen/lib/col/util.keen 568:1
const finish__45array2191840514 = l_a___0 => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_size___1 = l_a___0["cur-size"]
	l_a___0["cur-size"] = 4.294967295E9
	const l_buffer___2 = l_a___0.buffer
	l_a___0.buffer = new (Array)(0).fill(null)
	return ((l_buffer___2.length === l_size___1) ? cast__45immutable3116128247(l_buffer___2) : to1294652650(subscript910872492(l_buffer___2, __46__462451799117(0, l_size___1))))
}
// finish-array@((symbol, string) tuple2) file:///home/andy/games/keen/lib/col/util.keen 568:1
const finish__45array75331711 = l_a___0 => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_size___1 = l_a___0["cur-size"]
	l_a___0["cur-size"] = 4.294967295E9
	const l_buffer___2 = l_a___0.buffer
	l_a___0.buffer = new (Array)(0).fill(null)
	return ((l_buffer___2.length === l_size___1) ? cast__45immutable3769887050(l_buffer___2) : to768475965(subscript1678098774(l_buffer___2, __46__462451799117(0, l_size___1))))
}
// finish-array@(string) file:///home/andy/games/keen/lib/col/util.keen 568:1
const finish__45array4124937598 = l_a___0 => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_size___1 = l_a___0["cur-size"]
	l_a___0["cur-size"] = 4.294967295E9
	const l_buffer___2 = l_a___0.buffer
	l_a___0.buffer = new (Array)(0).fill(null)
	return ((l_buffer___2.length === l_size___1) ? cast__45immutable3213541909(l_buffer___2) : to3495777989(subscript912053911(l_buffer___2, __46__462451799117(0, l_size___1))))
}
// finish-array@(js-any) file:///home/andy/games/keen/lib/col/util.keen 568:1
const finish__45array1252302003 = l_a___0 => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_size___1 = l_a___0["cur-size"]
	l_a___0["cur-size"] = 4.294967295E9
	const l_buffer___2 = l_a___0.buffer
	l_a___0.buffer = new (Array)(0).fill(null)
	return ((l_buffer___2.length === l_size___1) ? cast__45immutable1000554956(l_buffer___2) : to3168572091(subscript529545893(l_buffer___2, __46__462451799117(0, l_size___1))))
}
// finish-array@(char8) file:///home/andy/games/keen/lib/col/util.keen 568:1
const finish__45array674662359 = l_a___0 => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_size___1 = l_a___0["cur-size"]
	l_a___0["cur-size"] = 4.294967295E9
	const l_buffer___2 = l_a___0.buffer
	l_a___0.buffer = new (Uint8Array)(0)
	return ((l_buffer___2.length === l_size___1) ? cast__45immutable3953210833(l_buffer___2) : to1163035466(subscript3665448857(l_buffer___2, __46__462451799117(0, l_size___1))))
}
// finish-array@(char32) file:///home/andy/games/keen/lib/col/util.keen 568:1
const finish__45array1095104724 = l_a___0 => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_size___1 = l_a___0["cur-size"]
	l_a___0["cur-size"] = 4.294967295E9
	const l_buffer___2 = l_a___0.buffer
	l_a___0.buffer = new (Uint32Array)(0)
	return ((l_buffer___2.length === l_size___1) ? cast__45immutable2002750423(l_buffer___2) : to3134524963(subscript2483069761(l_buffer___2, __46__462451799117(0, l_size___1))))
}
// finish-array@((symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 568:1
const finish__45array3716198230 = l_a___0 => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_size___1 = l_a___0["cur-size"]
	l_a___0["cur-size"] = 4.294967295E9
	const l_buffer___2 = l_a___0.buffer
	l_a___0.buffer = new (Array)(0).fill(null)
	return ((l_buffer___2.length === l_size___1) ? cast__45immutable3544078916(l_buffer___2) : to2452884681(subscript2338042479(l_buffer___2, __46__462451799117(0, l_size___1))))
}
// finish-array@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/util.keen 568:1
const finish__45array1822008853 = l_a___0 => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_size___1 = l_a___0["cur-size"]
	l_a___0["cur-size"] = 4.294967295E9
	const l_buffer___2 = l_a___0.buffer
	l_a___0.buffer = new (Array)(0).fill(null)
	return ((l_buffer___2.length === l_size___1) ? cast__45immutable330973840(l_buffer___2) : to813023344(subscript3193420933(l_buffer___2, __46__462451799117(0, l_size___1))))
}
// finish-array@(json) file:///home/andy/games/keen/lib/col/util.keen 568:1
const finish__45array2132863042 = l_a___0 => {
	if ((l_a___0["cur-size"] === 4.294967295E9)) {
		throw new (error4175136409)(c____355())
	}
	const l_size___1 = l_a___0["cur-size"]
	l_a___0["cur-size"] = 4.294967295E9
	const l_buffer___2 = l_a___0.buffer
	l_a___0.buffer = new (Array)(0).fill(null)
	return ((l_buffer___2.length === l_size___1) ? cast__45immutable2616233909(l_buffer___2) : to2081884857(subscript81988849(l_buffer___2, __46__462451799117(0, l_size___1))))
}
// finish@(string array, string) file:///home/andy/games/keen/lib/col/util.keen 579:1
const finish1412907483 = l_a___0 =>
	list__45new260130062(finish__45array4124937598(l_a___0))
// finish@(json array, json) file:///home/andy/games/keen/lib/col/util.keen 579:1
const finish4290738863 = l_a___0 =>
	list__45new2537576556(finish__45array2132863042(l_a___0))
// finish@((symbol, json) tuple2 buffer, (symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 579:1
const finish445439040 = l_a___0 =>
	list__45new3282161591(finish__45array3716198230(l_a___0))
// finish@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/util.keen 579:1
const finish2978616846 = l_a___0 =>
	list__45new2895775616(finish__45array1822008853(l_a___0))
// finish@((symbol, json) map, (symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 579:1
const finish2506263827 = l_a___0 =>
	list__45new556806094(finish__45array3716198230(l_a___0))
// finish@((symbol, string) tuple2 buffer, (symbol, string) tuple2) file:///home/andy/games/keen/lib/col/util.keen 579:1
const finish753889696 = l_a___0 =>
	list__45new3538275624(finish__45array75331711(l_a___0))
// finish@(char8 array, char8) file:///home/andy/games/keen/lib/col/util.keen 579:1
const finish77496408 = l_a___0 =>
	list__45new3709128537(finish__45array674662359(l_a___0))
// finish@(char32 array, char32) file:///home/andy/games/keen/lib/col/util.keen 579:1
const finish2142726921 = l_a___0 =>
	list__45new1366037430(finish__45array1095104724(l_a___0))
// finish@(js-any array, js-any) file:///home/andy/games/keen/lib/col/util.keen 579:1
const finish3808439716 = l_a___0 =>
	list__45new574588355(finish__45array1252302003(l_a___0))
// build file:///home/andy/games/keen/lib/col/util.keen 584:1
const build252249843 = l_size__45hint___0 =>
	new (build__45options3473999824)(l_size__45hint___0)
// with-block@((symbol, json) tuple2 buffer, (symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 585:1
const with__45block1334670925 = (l_a___1, l_f___2) => {
	const l_out___0 = new1010882681(l_a___1["size-hint"])
	l_f___2(l_out___0)
	return finish445439040(l_out___0)
}
// with-block@((symbol, json) map, (symbol, json) tuple2) file:///home/andy/games/keen/lib/col/util.keen 585:1
const with__45block3389748437 = (l_a___1, l_f___2) => {
	const l_out___0 = new1010882681(l_a___1["size-hint"])
	l_f___2(l_out___0)
	return finish2506263827(l_out___0)
}
// with-block@(string array, string) file:///home/andy/games/keen/lib/col/util.keen 585:1
const with__45block2392888053 = (l_a___1, l_f___2) => {
	const l_out___0 = new3505861802(l_a___1["size-hint"])
	l_f___2(l_out___0)
	return finish1412907483(l_out___0)
}
// with-block@((symbol, string) tuple2 buffer, (symbol, string) tuple2) file:///home/andy/games/keen/lib/col/util.keen 585:1
const with__45block2971855905 = (l_a___1, l_f___2) => {
	const l_out___0 = new2610777022(l_a___1["size-hint"])
	l_f___2(l_out___0)
	return finish753889696(l_out___0)
}
// with-block@(char8 array, char8) file:///home/andy/games/keen/lib/col/util.keen 585:1
const with__45block13365476 = (l_a___1, l_f___2) => {
	const l_out___0 = new1180966838(l_a___1["size-hint"])
	l_f___2(l_out___0)
	return finish77496408(l_out___0)
}
// with-block@(json array, json) file:///home/andy/games/keen/lib/col/util.keen 585:1
const with__45block4091712480 = (l_a___1, l_f___2) => {
	const l_out___0 = new3878297269(l_a___1["size-hint"])
	l_f___2(l_out___0)
	return finish4290738863(l_out___0)
}
// with-block@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/games/keen/lib/col/util.keen 585:1
const with__45block448681183 = (l_a___1, l_f___2) => {
	const l_out___0 = new4210594684(l_a___1["size-hint"])
	l_f___2(l_out___0)
	return finish2978616846(l_out___0)
}
// with-block@(char32 array, char32) file:///home/andy/games/keen/lib/col/util.keen 585:1
const with__45block2388733551 = (l_a___1, l_f___2) => {
	const l_out___0 = new2814065279(l_a___1["size-hint"])
	l_f___2(l_out___0)
	return finish2142726921(l_out___0)
}
// size@(symbol array, json array) file:///home/andy/games/keen/lib/col/util.keen 686:1
const size817255246 = l_a___0 => {
	if ((!(l_a___0.a.length === l_a___0.b.length))) {
		throw new (error4175136409)(c____388())
	}
	return l_a___0.a.length
}
// some@(symbol array, symbol, json array, json) file:///home/andy/games/keen/lib/col/util.keen 689:1
const some2571593361 = (l_a___0, l_f___2) =>
	some151833221(__46__462451799117(0, size817255246(l_a___0)), l_it___1 =>
			l_f___2(new (tuple23038093021)(subscript2556338432(l_a___0.a, l_it___1), subscript514285693(l_a___0.b, l_it___1))))
// !=@(nat32) file:///home/andy/games/keen/lib/compare.keen 45:1
const __33__611867404722 = (l_a___0, l_b___1) =>
	(l_a___0 !== l_b___1)
// !=@(line-and-character) file:///home/andy/games/keen/lib/compare.keen 45:1
const __33__613106631749 = (l_a___0, l_b___1) =>
	(!__61__611161506046(l_a___0, l_b___1))
// !=@(char8) file:///home/andy/games/keen/lib/compare.keen 45:1
const __33__61934749230 = (l_a___0, l_b___1) =>
	(l_a___0 !== l_b___1)
// !=@(symbol) file:///home/andy/games/keen/lib/compare.keen 45:1
const __33__61606043939 = (l_a___0, l_b___1) =>
	(!__61__61718055455(l_a___0, l_b___1))
// !=@(js-any) file:///home/andy/games/keen/lib/compare.keen 45:1
const __33__612717884399 = (l_a___0, l_b___1) =>
	(!(l_a___0 === l_b___1))
// !=@(string option) file:///home/andy/games/keen/lib/compare.keen 45:1
const __33__613929719728 = (l_a___0, l_b___1) =>
	(!__61__611918051925(l_a___0, l_b___1))
// !=@(json) file:///home/andy/games/keen/lib/compare.keen 45:1
const __33__611942334650 = (l_a___0, l_b___1) =>
	(!__61__613716497912(l_a___0, l_b___1))
// !=@(nat8) file:///home/andy/games/keen/lib/compare.keen 45:1
const __33__612754193981 = (l_a___0, l_b___1) =>
	(l_a___0 !== l_b___1)
// !=@(lsp-diagnostic-severity) file:///home/andy/games/keen/lib/compare.keen 45:1
const __33__613451873470 = (l_a___0, l_b___1) =>
	(!__61__611885534747(l_a___0, l_b___1))
// !=@(nat32) file:///home/andy/games/keen/lib/compare.keen 45:1
const __33__61883178196 = (l_a___0, l_b___1) =>
	(l_a___0 !== l_b___1)
// <@(nat8) file:///home/andy/games/keen/lib/compare.keen 48:1
const __601204488406 = (l_a___0, l_b___1) =>
	(l_a___0 < l_b___1)
// <@(nat64) file:///home/andy/games/keen/lib/compare.keen 48:1
const __603690672977 = (l_a___0, l_b___1) =>
	(l_a___0 < l_b___1)
// <@(line-and-character) file:///home/andy/games/keen/lib/compare.keen 48:1
const __603415715694 = (l_a___0, l_b___1) =>
	(__60__61__623491143578(l_a___0, l_b___1) === 0)
// <@(nat64) file:///home/andy/games/keen/lib/compare.keen 48:1
const __60384615097 = (l_a___0, l_b___1) =>
	(l_a___0 < l_b___1)
// <@(float64) file:///home/andy/games/keen/lib/compare.keen 48:1
const __60334440019 = (l_a___0, l_b___1) =>
	_lessFloat(l_a___0, l_b___1)
// <@(symbol) file:///home/andy/games/keen/lib/compare.keen 48:1
const __603345693457 = (l_a___0, l_b___1) =>
	(__60__61__621591138034(l_a___0, l_b___1) === 0)
// <@(nat32) file:///home/andy/games/keen/lib/compare.keen 48:1
const __602592291231 = (l_a___0, l_b___1) =>
	(l_a___0 < l_b___1)
// <@(nat8) file:///home/andy/games/keen/lib/compare.keen 48:1
const __603813600464 = (l_a___0, l_b___1) =>
	(l_a___0 < l_b___1)
// <@(int64) file:///home/andy/games/keen/lib/compare.keen 48:1
const __603526412653 = (l_a___0, l_b___1) =>
	(l_a___0 < l_b___1)
// <@(nat32) file:///home/andy/games/keen/lib/compare.keen 48:1
const __602180318207 = (l_a___0, l_b___1) =>
	(l_a___0 < l_b___1)
// <=@(nat64) file:///home/andy/games/keen/lib/compare.keen 51:1
const __60__61829986477 = (l_a___0, l_b___1) =>
	(l_a___0 <= l_b___1)
// <=@(symbol) file:///home/andy/games/keen/lib/compare.keen 51:1
const __60__61641350506 = (l_a___0, l_b___1) =>
	(__60__61__621591138034(l_a___0, l_b___1) !== 2)
// <=@(nat32) file:///home/andy/games/keen/lib/compare.keen 51:1
const __60__612052354958 = (l_a___0, l_b___1) =>
	(l_a___0 <= l_b___1)
// <=@(nat32) file:///home/andy/games/keen/lib/compare.keen 51:1
const __60__614120491547 = (l_a___0, l_b___1) =>
	(l_a___0 <= l_b___1)
// <=@(char8) file:///home/andy/games/keen/lib/compare.keen 51:1
const __60__612813005361 = (l_a___0, l_b___1) =>
	(l_a___0 <= l_b___1)
// <=@(line-and-character) file:///home/andy/games/keen/lib/compare.keen 51:1
const __60__611731619377 = (l_a___0, l_b___1) =>
	(__60__61__623491143578(l_a___0, l_b___1) !== 2)
// >@(symbol) file:///home/andy/games/keen/lib/compare.keen 54:1
const __621091897426 = (l_a___0, l_b___1) =>
	(__60__61__621591138034(l_a___0, l_b___1) === 2)
// >@(int64) file:///home/andy/games/keen/lib/compare.keen 54:1
const __623353462001 = (l_a___0, l_b___1) =>
	(l_a___0 > l_b___1)
// >@(nat32) file:///home/andy/games/keen/lib/compare.keen 54:1
const __621787529867 = (l_a___0, l_b___1) =>
	(l_a___0 > l_b___1)
// >=@(nat32) file:///home/andy/games/keen/lib/compare.keen 57:1
const __62__61724884600 = (l_a___0, l_b___1) =>
	(l_a___0 >= l_b___1)
// >=@(nat64) file:///home/andy/games/keen/lib/compare.keen 57:1
const __62__61483908731 = (l_a___0, l_b___1) =>
	(l_a___0 >= l_b___1)
// >=@(int64) file:///home/andy/games/keen/lib/compare.keen 57:1
const __62__613250878608 = (l_a___0, l_b___1) =>
	(l_a___0 >= l_b___1)
// >=@(int32) file:///home/andy/games/keen/lib/compare.keen 57:1
const __62__61930711169 = (l_a___0, l_b___1) =>
	(l_a___0 >= l_b___1)
// >=@(nat8) file:///home/andy/games/keen/lib/compare.keen 57:1
const __62__613990261314 = (l_a___0, l_b___1) =>
	(l_a___0 >= l_b___1)
// min@(nat32) file:///home/andy/games/keen/lib/compare.keen 61:1
const min906971388 = (l_a___0, l_b___1) =>
	(__602180318207(l_a___0, l_b___1) ? l_a___0 : l_b___1)
// show file:///home/andy/games/keen/lib/exception.keen 8:1
const show3097773375 = l_ignore___0 =>
	c____514()
// show file:///home/andy/games/keen/lib/exception.keen 19:1
const show4263516288 = l_ignore___0 =>
	c____364()
// to file:///home/andy/games/keen/lib/exception.keen 24:1
const to3427633462 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 0) ? new (json3023828771)(2, l_a___0.value) : ((x_matched___0.index === 1) ? new (json3023828771)(3, l_a___0.value) : ((x_matched___0.index === 2) ? new (json3023828771)(4, l_a___0.value) : _unreachable()))))
}
// arithmetic-error file:///home/andy/games/keen/lib/exception.keen 36:1
const arithmetic__45error3928167685 = (l_operation___0, l_input___1) =>
	new (arithmetic__45error95286647)(l_operation___0, list__45new308961157([l_input___1]))
// arithmetic-error file:///home/andy/games/keen/lib/exception.keen 37:1
const arithmetic__45error255769755 = (l_operation___0, l_a___1, l_b___2) =>
	new (arithmetic__45error95286647)(l_operation___0, list__45new308961157([l_a___1, l_b___2]))
// list-new@(number) file:///home/andy/games/keen/lib/exception.keen 38:1
const list__45new308961157 = l_a___0 =>
	l_a___0
// show file:///home/andy/games/keen/lib/exception.keen 39:1
const show1133673260 = l_ignore___0 =>
	c____316()
// new file:///home/andy/games/keen/lib/hash.keen 28:1
const new4107584700 = l_seed___0 =>
	new (hash__45state2761385531)(l_seed___0, (void 0))
// finish file:///home/andy/games/keen/lib/hash.keen 30:1
const finish1244432994 = l_a___0 =>
	l_a___0.state
// global-hash-seed file:///home/andy/games/keen/lib/hash.keen 38:1
const global__45hash__45seed2818300139 = () =>
	_varget_v17227413630337024875()
// seeded-hash@(uri) file:///home/andy/games/keen/lib/hash.keen 46:1
const seeded__45hash3598503076 = l_a___1 => {
	const l_state___0 = new4107584700(global__45hash__45seed2818300139())
	hash4248048702(l_a___1, l_state___0)
	return finish1244432994(l_state___0)
}
// seeded-hash@(nat32) file:///home/andy/games/keen/lib/hash.keen 46:1
const seeded__45hash4157093131 = l_a___1 => {
	const l_state___0 = new4107584700(global__45hash__45seed2818300139())
	hash31971877(l_a___1, l_state___0)
	return finish1244432994(l_state___0)
}
// seeded-hash@(symbol) file:///home/andy/games/keen/lib/hash.keen 46:1
const seeded__45hash563252203 = l_a___1 => {
	const l_state___0 = new4107584700(global__45hash__45seed2818300139())
	hash2761836969(l_a___1, l_state___0)
	return finish1244432994(l_state___0)
}
// seeded-hash@(char8 array-view) file:///home/andy/games/keen/lib/hash.keen 46:1
const seeded__45hash1371682609 = l_a___1 => {
	const l_state___0 = new4107584700(global__45hash__45seed2818300139())
	hash1675971822(l_a___1, l_state___0)
	return finish1244432994(l_state___0)
}
// seeded-hash@(string) file:///home/andy/games/keen/lib/hash.keen 46:1
const seeded__45hash1371042462 = l_a___1 => {
	const l_state___0 = new4107584700(global__45hash__45seed2818300139())
	hash954068865(l_a___1, l_state___0)
	return finish1244432994(l_state___0)
}
// deterministic-hash@(char8 array-view) file:///home/andy/games/keen/lib/hash.keen 52:1
const deterministic__45hash788049781 = l_a___0 =>
	deterministic__45hash3077851001(l_a___0, 1003370060459199230n)
// deterministic-hash@(char8 array-view) file:///home/andy/games/keen/lib/hash.keen 53:1
const deterministic__45hash3077851001 = (l_a___2, l_seed___1) => {
	const l_state___0 = new4107584700(l_seed___1)
	hash1675971822(l_a___2, l_state___0)
	return finish1244432994(l_state___0)
}
// milliseconds file:///home/andy/games/keen/lib/io/duration.keen 35:1
const milliseconds2872886410 = l_a___0 =>
	new (duration3018374679)(__42958286333(l_a___0, 0.001))
// milliseconds file:///home/andy/games/keen/lib/io/duration.keen 46:1
const milliseconds1022831454 = l_a___0 =>
	__42958286333(l_a___0.seconds, 1000)
// monotime file:///home/andy/games/keen/lib/io/time.keen 12:1
const monotime57443273 = () => {
	let l_msec___0
	return ((l_msec___0 = to3656388790(_global.performance.now())) , milliseconds2872886410(l_msec___0))
}
// to file:///home/andy/games/keen/lib/js.keen 157:1
const to1406908951 = l_a___0 =>
	l_a___0
// to file:///home/andy/games/keen/lib/js.keen 159:1
const to3736759396 = l_a___0 => {
	if ((!((typeof l_a___0) === "boolean"))) {
		throw new (error4175136409)(c____313())
	}
	return l_a___0
}
// to file:///home/andy/games/keen/lib/js.keen 170:1
const to3844438486 = l_a___0 =>
	l_a___0
// to file:///home/andy/games/keen/lib/js.keen 172:1
const to3274712937 = l_a___0 =>
	l_a___0
// to file:///home/andy/games/keen/lib/js.keen 189:1
const to958312080 = l_a___0 =>
	l_a___0
// to file:///home/andy/games/keen/lib/js.keen 191:1
const to3656388790 = l_a___0 => {
	if ((!((typeof l_a___0) === "number"))) {
		throw new (error4175136409)(c____449())
	}
	return l_a___0
}
// to file:///home/andy/games/keen/lib/js.keen 231:1
const to2305490556 = l_a___0 => {
	if ((!to3736759396(eval("x => x === (x >>> 0)")(l_a___0)))) {
		throw new (error4175136409)(c____397())
	}
	return l_a___0
}
// to file:///home/andy/games/keen/lib/js.keen 247:1
const to2585906292 = l_a___0 => {
	let l_chars___1
	if ((!((typeof l_a___0) === "string"))) {
		throw new (error4175136409)(c____547())
	}
	return ((l_chars___1 = new (_global.TextEncoder)().encode(l_a___0)) , new (string2245870778)(l_chars___1))
}
// to file:///home/andy/games/keen/lib/js.keen 252:1
const to3382899672 = l_a___0 =>
	new (_global.TextDecoder)().decode(l_a___0.chars)
// Array file:///home/andy/games/keen/lib/js.keen 255:1
const Array1165709722 = () =>
	_global.Array
// Number file:///home/andy/games/keen/lib/js.keen 259:1
const Number3505827880 = () =>
	_global.Number
// Object file:///home/andy/games/keen/lib/js.keen 261:1
const Object1882518285 = () =>
	_global.Object
// String file:///home/andy/games/keen/lib/js.keen 263:1
const String3131385714 = () =>
	_global.String
// to file:///home/andy/games/keen/lib/js.keen 325:1
const to3641170909 = l_a___0 =>
	l_a___0
// to file:///home/andy/games/keen/lib/js.keen 328:1
const to3307601448 = l_a___0 => {
	if ((!(l_a___0 instanceof Array1165709722()))) {
		throw new (error4175136409)(c____314())
	}
	return l_a___0
}
// new@(void) file:///home/andy/games/keen/lib/js/deferred.keen 12:1
const new344482027 = () => {
	let l_promise___3, l_f___1, l_resolve___0
	return ((l_resolve___0 = null) , ((l_f___1 = l_resolve____2 => {
		l_resolve___0 = l_resolve____2
	}) , ((l_promise___3 = new (_global.Promise)(to3274712937(l_f___1))) , new (deferred3417926844)(l_promise___3, l_resolve___0))))
}
// new@(json) file:///home/andy/games/keen/lib/js/deferred.keen 12:1
const new1743322260 = () => {
	let l_promise___3, l_f___1, l_resolve___0
	return ((l_resolve___0 = null) , ((l_f___1 = l_resolve____2 => {
		l_resolve___0 = l_resolve____2
	}) , ((l_promise___3 = new (_global.Promise)(to3274712937(l_f___1))) , new (deferred779013352)(l_promise___3, l_resolve___0))))
}
// await@(json) file:///home/andy/games/keen/lib/js/deferred.keen 22:1
const _async_await75745150 = async l_a___0 =>
	(await l_a___0.promise)
// resolve@(json) file:///home/andy/games/keen/lib/js/deferred.keen 27:1
const resolve3380212322 = (l_a___0, l_value___1) => {
	(void l_a___0.resolve(l_value___1))
}
// create-node file:///home/andy/games/keen/lib/js/dom.keen 14:1
const create__45node616468159 = l_tag__45name___0 =>
	document2587895802().createElement(to1485125734(l_tag__45name___0))
// create-node file:///home/andy/games/keen/lib/js/dom.keen 17:1
const create__45node1889607060 = (l_tag__45name___1, l_attr___2) => {
	const l_node___0 = create__45node616468159(l_tag__45name___1)
	for__45loop3955261972(l_attr___2, l_destruct___3 => {
			const l_value___4 = l_destruct___3.b
			const l_key___5 = l_destruct___3.a
			;(void l_node___0.setAttribute(to1485125734(l_key___5), to3382899672(l_value___4)))
		})
	return l_node___0
}
// create-node file:///home/andy/games/keen/lib/js/dom.keen 22:1
const create__45node3021507421 = (l_tag__45name___1, l_attr___2, l_class__45name___3, l_children___4) => {
	const l_node___0 = create__45node1889607060(l_tag__45name___1, l_attr___2)
	if ((l_class__45name___3 instanceof string2245870778)) {
		l_node___0.className = to3382899672(l_class__45name___3)
	}
	;(void l_node___0.append(...l_children___4))
	return l_node___0
}
// create-button file:///home/andy/games/keen/lib/js/dom.keen 35:1
const create__45button1456221454 = (l_title___1, l_class__45name___2, l_children___3, l_on__45click___4) => {
	const l_res___0 = create__45node3021507421(_symbol56, list__45new3679651572([new (tuple24137037281)(_symbol57, l_title___1)]), l_class__45name___2, l_children___3)
	l_res___0.onclick = to3844438486(l_on__45click___4)
	return l_res___0
}
// set-subscript file:///home/andy/games/keen/lib/js/dom.keen 47:1
const set__45subscript1866118964 = (l_a___0, l_key___1, l_value___2) => {
	l_a___0.node.style[to1485125734(l_key___1)] = to3382899672(l_value___2)
}
// ~~= file:///home/andy/games/keen/lib/js/dom.keen 50:1
const __126__126__61856139553 = (l_a___4, l_properties___0) => {
	let l_key___3, l_value___2
	return for__45loop3955261972(l_properties___0, l_destruct___1 =>
			((l_value___2 = l_destruct___1.b) , ((l_key___3 = l_destruct___1.a) , set__45subscript1866118964(l_a___4, l_key___3, l_value___2))))
}
// ~= file:///home/andy/games/keen/lib/js/dom.keen 55:1
const __126__612423443072 = (l_a___0, l_class__45name___1) => {
	(void l_a___0.node.classList.add(to3382899672(l_class__45name___1)))
}
// -= file:///home/andy/games/keen/lib/js/dom.keen 57:1
const __45__612064281567 = (l_a___0, l_class__45name___1) => {
	(void l_a___0.node.classList.remove(to3382899672(l_class__45name___1)))
}
// set-classes file:///home/andy/games/keen/lib/js/dom.keen 59:1
const set__45classes3002657799 = (l_a___0, l_class__45names___1) => {
	l_a___0.className = to3382899672(join2531354735(c____349(), l_class__45names___1))
}
// toggle file:///home/andy/games/keen/lib/js/dom.keen 62:1
const toggle2626457038 = (l_a___0, l_class__45name___1) =>
	set__45subscript2934148047(l_a___0, l_class__45name___1, (!subscript2953697497(l_a___0, l_class__45name___1)))
// subscript file:///home/andy/games/keen/lib/js/dom.keen 64:1
const subscript2953697497 = (l_a___0, l_class__45name___1) =>
	to3736759396(l_a___0.node.classList.contains(to3382899672(l_class__45name___1)))
// set-subscript file:///home/andy/games/keen/lib/js/dom.keen 66:1
const set__45subscript2934148047 = (l_a___1, l_class__45name___2, l_value___0) =>
	(l_value___0 ? __126__612423443072(l_a___1, l_class__45name___2) : __45__612064281567(l_a___1, l_class__45name___2))
// text-content file:///home/andy/games/keen/lib/js/dom.keen 72:1
const text__45content2811429711 = l_a___0 =>
	to2585906292(l_a___0.textContent)
// set-text-content file:///home/andy/games/keen/lib/js/dom.keen 74:1
const set__45text__45content118293578 = (l_a___0, l_text___1) => {
	l_a___0.textContent = to3382899672(l_text___1)
}
// add-event-listener file:///home/andy/games/keen/lib/js/dom.keen 78:1
const add__45event__45listener1727922027 = (l_a___0, l_event__45name___1, l_fn___2) => {
	(void l_a___0.addEventListener(to3382899672(l_event__45name___1), to3274712937(l_fn___2)))
}
// create-input-text file:///home/andy/games/keen/lib/js/dom.keen 82:1
const create__45input__45text2119725182 = (l_on__45input___2, l_value___1) => {
	const l_res___0 = create__45node1889607060(_symbol5, named__45new165309411(c____256(), [c____328(), l_value___1]))
	;(void l_res___0.addEventListener("input", to3274712937(l_on__45input___2)))
	return l_res___0
}
// create-div file:///home/andy/games/keen/lib/js/dom.keen 90:1
const create__45div1855756632 = () =>
	create__45div4154923196(c____322())
// create-div file:///home/andy/games/keen/lib/js/dom.keen 92:1
const create__45div4154923196 = l_class__45name___0 =>
	create__45div1449965713(l_class__45name___0, c____253())
// create-div file:///home/andy/games/keen/lib/js/dom.keen 94:1
const create__45div1449965713 = (l_class__45name___0, l_children___1) =>
	create__45node3021507421(_symbol20, list__45new3679651572(c____289()), l_class__45name___0, l_children___1)
// create-span file:///home/andy/games/keen/lib/js/dom.keen 97:1
const create__45span1024413830 = l_children___0 =>
	create__45span103507307(c____322(), list__45new3679651572(c____289()), l_children___0)
// create-span file:///home/andy/games/keen/lib/js/dom.keen 99:1
const create__45span927028643 = (l_class__45name___0, l_children___1) =>
	create__45span103507307(l_class__45name___0, list__45new3679651572(c____289()), l_children___1)
// create-span file:///home/andy/games/keen/lib/js/dom.keen 101:1
const create__45span103507307 = (l_class__45name___1, l_attr___0, l_children___2) =>
	create__45node3021507421(_symbol23, l_attr___0, l_class__45name___1, l_children___2)
// create-text-node file:///home/andy/games/keen/lib/js/dom.keen 104:1
const create__45text__45node1193722309 = l_text___0 =>
	document2587895802().createTextNode(to3382899672(l_text___0))
// document file:///home/andy/games/keen/lib/js/dom.keen 107:1
const document2587895802 = () =>
	_global.document
// is-text-node file:///home/andy/games/keen/lib/js/dom.keen 112:1
const is__45text__45node1993477031 = l_a___0 =>
	(to2305490556(l_a___0.nodeType) === 3)
// subscript file:///home/andy/games/keen/lib/js/dom.keen 116:1
const subscript4006277920 = (l_a___1, l_attr__45name___2) => {
	let l_res___0
	return ((l_res___0 = l_a___1.node.getAttribute(to1485125734(l_attr__45name___2))) , ((l_res___0 === null) ? c____307() : to2585906292(l_res___0)))
}
// set-subscript file:///home/andy/games/keen/lib/js/dom.keen 120:1
const set__45subscript1372515340 = (l_a___0, l_attr__45name___1, l_value___2) => {
	(void l_a___0.node.setAttribute(to1485125734(l_attr__45name___1), to3382899672(l_value___2)))
}
// ~~= file:///home/andy/games/keen/lib/js/dom.keen 126:1
const __126__126__61957598935 = (l_a___4, l_attributes___0) => {
	let l_key___3, l_value___2
	return for__45loop3955261972(l_attributes___0, l_destruct___1 =>
			((l_value___2 = l_destruct___1.b) , ((l_key___3 = l_destruct___1.a) , set__45subscript1372515340(l_a___4, l_key___3, l_value___2))))
}
// value file:///home/andy/games/keen/lib/js/dom.keen 131:1
const value151690680 = l_a___1 => {
	let l_value___0
	return ((l_value___0 = l_a___1.value) , ((l_value___0 === (void 0)) ? c____322() : to2585906292(l_value___0)))
}
// set-value file:///home/andy/games/keen/lib/js/dom.keen 136:1
const set__45value1083962113 = (l_a___0, l_value___1) => {
	l_a___0.value = to3382899672(l_value___1)
}
// query file:///home/andy/games/keen/lib/js/dom.keen 143:1
const query1589142844 = (l_parent___1, l_selector___2) => {
	let l_res___0
	return ((l_res___0 = l_parent___1.querySelector(to3382899672(l_selector___2))) , ((l_res___0 === null) ? new (option2299041553)(0, c____307()) : new (option2299041553)(1, l_res___0)))
}
// query-all file:///home/andy/games/keen/lib/js/dom.keen 148:1
const query__45all3987915591 = (l_parent___0, l_selector___1) =>
	array__45of__45node__45list4268778669(l_parent___0.querySelectorAll(to3382899672(l_selector___1)))
// child-nodes file:///home/andy/games/keen/lib/js/dom.keen 151:1
const child__45nodes3586611620 = l_a___0 =>
	array__45of__45node__45list4268778669(l_a___0.childNodes)
// array-of-node-list file:///home/andy/games/keen/lib/js/dom.keen 154:1
const array__45of__45node__45list4268778669 = l_node__45list___0 =>
	to3307601448(_global.Array.from(l_node__45list___0))
// first-child file:///home/andy/games/keen/lib/js/dom.keen 163:1
const first__45child339710256 = l_a___1 => {
	let l_res___0
	return ((l_res___0 = l_a___1.firstChild) , ((l_res___0 === null) ? new (option2299041553)(0, c____307()) : new (option2299041553)(1, l_res___0)))
}
// ~= file:///home/andy/games/keen/lib/js/dom.keen 188:1
const __126__61666547215 = (l_a___0, l_b___1) => {
	(void l_a___0.appendChild(l_b___1))
}
// ~~= file:///home/andy/games/keen/lib/js/dom.keen 192:1
const __126__126__613836109245 = (l_a___2, l_b___0) => {
	for (const l_x___1 of l_b___0) {
		__126__61666547215(l_a___2, l_x___1)
	}
}
// set-children file:///home/andy/games/keen/lib/js/dom.keen 197:1
const set__45children2736312189 = (l_a___0, l_children___1) => {
	remove__45all__45children1427536205(l_a___0)
	__126__126__613836109245(l_a___0, l_children___1)
}
// remove-all-children file:///home/andy/games/keen/lib/js/dom.keen 201:1
const remove__45all__45children1427536205 = l_a___1 => {
	x_loop___0: while (true){
		const l_temp___0 = first__45child339710256(l_a___1)
		const l_child___2 = l_temp___0.value
		if ((l_temp___0.index === 1)) {
			(void l_a___1.removeChild(l_child___2))
			continue
		} else {
			break  x_loop___0
		}
	}
}
// remove-self file:///home/andy/games/keen/lib/js/dom.keen 205:1
const remove__45self2979510162 = l_a___0 => {
	(void l_a___0.remove())
}
// new file:///home/andy/games/keen/lib/js/dom.keen 212:1
const new3292231944 = l_style___0 =>
	new (custom__45element__45options140501329)(list__45new260130062([l_style___0]))
// define-custom-element file:///home/andy/games/keen/lib/js/dom.keen 214:1
const define__45custom__45element2346176678 = (l_element__45name___0, l_connected___1) =>
	define__45custom__45element301091642(l_element__45name___0, c____300(), l_connected___1)
// define-custom-element file:///home/andy/games/keen/lib/js/dom.keen 214:1
const _async_define__45custom__45element2346176678 = async (l_element__45name___0, l_connected___1) =>
	(await _async_define__45custom__45element301091642(l_element__45name___0, c____300(), l_connected___1))
// define-custom-element file:///home/andy/games/keen/lib/js/dom.keen 216:1
const define__45custom__45element301091642 = (l_element__45name___13, l_options___5, l_connected___11) => {
	let l_this___10
	const l_constructor___0 = l_destruct___1 => {
		const l_this___2 = l_destruct___1.a
		const l_root___3 = l_this___2.attachShadow(named__45new3386733465(c____259(), c____254()))
		const l_sheets___4 = l_options___5.styles.map(l_style___6 => {
				const l_sheet___7 = new (_global.CSSStyleSheet)()
				;(void l_sheet___7.replace(to3382899672(l_style___6)))
				return l_sheet___7
			})
		l_root___3.adoptedStyleSheets = to3641170909(l_sheets___4)
		return new3691260824()
	}
	const l_connected__45callback___8 = l_destruct___9 =>
		((l_this___10 = l_destruct___9.a) , to1406908951(l_connected___11(as__45custom__45element__45node1615218273(l_this___10))))
	const l_cls___12 = make__45class4286852172(_global.HTMLElement, l_constructor___0, named__45new3230602612(c____260(), [l_connected__45callback___8]))
	;(void _global.customElements.define(to3382899672(l_element__45name___13), l_cls___12))
}
// define-custom-element file:///home/andy/games/keen/lib/js/dom.keen 216:1
const _async_define__45custom__45element301091642 = async (l_element__45name___13, l_options___5, l_connected___11) => {
	let l_this___10
	const l_constructor___0 = async l_destruct___1 => {
		const l_this___2 = l_destruct___1.a
		const l_root___3 = l_this___2.attachShadow(named__45new3386733465(c____259(), c____254()))
		const l_sheets___4 = (await Array.fromAsync(l_options___5.styles, async l_style___6 => {
				const l_sheet___7 = new (_global.CSSStyleSheet)()
				;(void l_sheet___7.replace(to3382899672(l_style___6)))
				return l_sheet___7
			}))
		l_root___3.adoptedStyleSheets = to3641170909(l_sheets___4)
		return new3691260824()
	}
	const l_connected__45callback___8 = async l_destruct___9 =>
		((l_this___10 = l_destruct___9.a) , to1406908951((await l_connected___11(as__45custom__45element__45node1615218273(l_this___10)))))
	const l_cls___12 = make__45class4286852172(_global.HTMLElement, l_constructor___0, named__45new3230602612(c____260(), [l_connected__45callback___8]))
	;(void _global.customElements.define(to3382899672(l_element__45name___13), l_cls___12))
}
// as-js file:///home/andy/games/keen/lib/js/dom.keen 241:1
const as__45js3194964695 = l_a___0 =>
	l_a___0
// as-custom-element-node file:///home/andy/games/keen/lib/js/dom.keen 243:1
const as__45custom__45element__45node1615218273 = l_a___0 =>
	l_a___0
// as-node file:///home/andy/games/keen/lib/js/dom.keen 245:1
const as__45node1179244723 = l_a___0 =>
	l_a___0
// attributes file:///home/andy/games/keen/lib/js/dom.keen 247:1
const attributes4156296191 = l_a___0 =>
	new (attributes3811162107)(as__45node1179244723(l_a___0))
// shadow-root file:///home/andy/games/keen/lib/js/dom.keen 249:1
const shadow__45root975114786 = l_a___0 =>
	as__45node1179244723(l_a___0).shadowRoot
// new file:///home/andy/games/keen/lib/js/util.keen 5:1
const new3691260824 = () =>
	null
// named-new file:///home/andy/games/keen/lib/js/util.keen 8:1
const named__45new3386733465 = (l_keys___0, l_values___1) => {
	is__45impl1347765191(l_keys___0.length, l_values___1.length)
	const l_res___2 = new (Object1882518285())()
	let x_cur___0 = 0
	let x_end___1 = l_keys___0.length
	while ((x_cur___0 < x_end___1)){
		const l_i___3 = x_cur___0
		l_res___2[to1485125734(subscript2556338432(l_keys___0, l_i___3))] = subscript1771739119(l_values___1, l_i___3)
		x_cur___0 = (x_cur___0 + 1)
	}
	return l_res___2
}
// make-class file:///home/andy/games/keen/lib/js/util.keen 50:1
const make__45class4286852172 = (l_super__45class___2, l_constructor___1, l_methods___3) => {
	const l_res___0 = eval("(ctor, Super) => class extends Super {\n\tconstructor(...args) {\n\t\tsuper()\n\t\tctor({ a: this, b: args })\n\t}\n}")(l_constructor___1, l_super__45class___2)
	for__45loop1056386584(l_methods___3, l_destruct___4 => {
			const l_method___5 = l_destruct___4.b
			const l_name___6 = l_destruct___4.a
			l_res___0.prototype[to1485125734(l_name___6)] = make__45method1806817943(l_method___5)
		})
	return l_res___0
}
// make-method file:///home/andy/games/keen/lib/js/util.keen 70:1
const make__45method1806817943 = l_fn___0 =>
	eval("fn => function(...args) { return fn({ a: this, b: args }) }")(l_fn___0)
// any file:///home/andy/games/keen/lib/json.keen 28:1
const any193868770 = l_a___0 =>
	any1661599091(l_a___0.keys)
// new-json-object file:///home/andy/games/keen/lib/json.keen 36:1
const new__45json__45object1147649573 = (l_keys___1, l_values___2) => {
	let l_sorted__45keys___4, l_sorted__45values___3, l_destruct___0
	return ((l_destruct___0 = sort__45by__45first2738486175(l_keys___1, l_values___2)) , ((l_sorted__45values___3 = l_destruct___0.b) , ((l_sorted__45keys___4 = l_destruct___0.a) , new__45json__45object__45from__45sorted858330226(l_sorted__45keys___4, l_sorted__45values___3))))
}
// subscript file:///home/andy/games/keen/lib/json.keen 39:1
const subscript3042165177 = (l_a___1, l_key___3) => {
	let l_destruct___4, x_matched___0, l_member2___2, l_destruct___0
	return ((l_destruct___0 = l_a___1.values) , ((l_member2___2 = binary__45search__45exact3153100740(to__45array__45view626268209(l_a___1.keys), l_key___3)) , ((x_matched___0 = l_member2___2) , ((x_matched___0 instanceof none2082914084) ? new (option2311174978)(0, c____307()) : (((typeof x_matched___0) === "number") ? ((l_destruct___4 = l_member2___2) , new (option2311174978)(1, subscript514285693(l_destruct___0, l_destruct___4))) : _unreachable())))))
}
// == file:///home/andy/games/keen/lib/json.keen 42:1
const __61__613438275333 = (l_a___0, l_b___1) =>
	(__61__612789219199(l_a___0.keys, l_b___1.keys) ? __61__613986662078(l_a___0.values, l_b___1.values) : false)
// show file:///home/andy/games/keen/lib/json.keen 58:1
const show2077319282 = l_a___0 =>
	interpolate3208339971([c____548(), interpolate__45value844224645(l_a___0.expected), c____549(), interpolate__45value1896620200(l_a___0.value)])
// == file:///home/andy/games/keen/lib/json.keen 68:1
const __61__613716497912 = (l_a___0, l_b___1) =>
	__61__61507368938(as__45copy801038496(l_a___0), as__45copy801038496(l_b___1))
// == file:///home/andy/games/keen/lib/json.keen 72:1
const __61__61507368938 = (l_a___0, l_b___1) => {
	let x_matched___1, x_matched___2, x_matched___3, x_matched___4, x_matched___5, x_matched___6, x_matched___7, x_matched___8, x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 0) ? ((x_matched___1 = l_b___1) , ((x_matched___1.index === 0) ? true : false)) : ((x_matched___0.index === 1) ? ((x_matched___2 = l_b___1) , ((x_matched___2.index === 1) ? (l_a___0.value === l_b___1.value) : false)) : ((x_matched___0.index === 2) ? ((x_matched___3 = l_b___1) , ((x_matched___3.index === 2) ? (l_a___0.value === l_b___1.value) : false)) : ((x_matched___0.index === 3) ? ((x_matched___4 = l_b___1) , ((x_matched___4.index === 3) ? (l_a___0.value === l_b___1.value) : false)) : ((x_matched___0.index === 4) ? ((x_matched___5 = l_b___1) , ((x_matched___5.index === 4) ? Object.is(l_a___0.value, l_b___1.value) : false)) : ((x_matched___0.index === 5) ? ((x_matched___6 = l_b___1) , ((x_matched___6.index === 5) ? __61__612506082126(l_a___0.value, l_b___1.value) : false)) : ((x_matched___0.index === 6) ? ((x_matched___7 = l_b___1) , ((x_matched___7.index === 6) ? __61__613986662078(l_a___0.value, l_b___1.value) : false)) : ((x_matched___0.index === 7) ? ((x_matched___8 = l_b___1) , ((x_matched___8.index === 7) ? __61__613438275333(l_a___0.value, l_b___1.value) : false)) : _unreachable())))))))))
}
// as-copy file:///home/andy/games/keen/lib/json.keen 73:1
const as__45copy801038496 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 0) ? new (json__45copy1286081601)(0, l_a___0.value) : ((x_matched___0.index === 1) ? new (json__45copy1286081601)(1, l_a___0.value) : ((x_matched___0.index === 2) ? new (json__45copy1286081601)(2, l_a___0.value) : ((x_matched___0.index === 3) ? new (json__45copy1286081601)(3, l_a___0.value) : ((x_matched___0.index === 4) ? new (json__45copy1286081601)(4, l_a___0.value) : ((x_matched___0.index === 5) ? new (json__45copy1286081601)(5, l_a___0.value) : ((x_matched___0.index === 6) ? new (json__45copy1286081601)(6, l_a___0.value) : ((x_matched___0.index === 7) ? new (json__45copy1286081601)(7, l_a___0.value) : _unreachable())))))))))
}
// list-new file:///home/andy/games/keen/lib/json.keen 108:1
const list__45new3723065633 = l_args___0 =>
	(any1353902798(l_args___0) ? new (json3023828771)(6, l_args___0) : new (json3023828771)(0, c____306()))
// named-new file:///home/andy/games/keen/lib/json.keen 113:1
const named__45new3677225874 = (l_keys___0, l_values___1) =>
	new (json3023828771)(7, (() => {
			if ((!(l_keys___0.length === l_values___1.length))) {
				throw new (error4175136409)(c____343())
			}
			return new__45json__45object1147649573(l_keys___0, l_values___1)
		})())
// to file:///home/andy/games/keen/lib/json.keen 119:1
const to1057654961 = l_a___0 =>
	l_a___0
// to file:///home/andy/games/keen/lib/json.keen 130:1
const to1103382995 = l_a___0 =>
	new (json3023828771)(5, l_a___0)
// to file:///home/andy/games/keen/lib/json.keen 131:1
const to845310736 = l_a___1 => {
	let l_temp___2
	const l_member2___0 = string2503677012(l_a___1)
	const x_matched___0 = l_member2___0
	if ((x_matched___0 instanceof none2082914084)) {
		throw new (deserialize__45error2968075170)(c____396(), l_a___1)
	} else {
		if ((x_matched___0 instanceof string2245870778)) {
			return ((l_temp___2 = l_member2___0) , l_temp___2)
		} else {
			return _unreachable()
		}
	}
}
// to file:///home/andy/games/keen/lib/json.keen 136:1
const to115318792 = l_a___0 =>
	new (json3023828771)(2, BigInt(l_a___0))
// to file:///home/andy/games/keen/lib/json.keen 137:1
const to1990640431 = l_a___0 =>
	to1597812159(to1656260607(l_a___0))
// to file:///home/andy/games/keen/lib/json.keen 139:1
const to1656260607 = l_a___1 => {
	let l_temp___2
	const l_member2___0 = nat641825150089(l_a___1)
	const x_matched___0 = l_member2___0
	if ((x_matched___0 instanceof none2082914084)) {
		throw new (deserialize__45error2968075170)(c____395(), l_a___1)
	} else {
		if (((typeof x_matched___0) === "bigint")) {
			return ((l_temp___2 = l_member2___0) , l_temp___2)
		} else {
			return _unreachable()
		}
	}
}
// to file:///home/andy/games/keen/lib/json.keen 165:1
const to208883145 = l_a___0 =>
	new (json3023828771)(5, to649144722(l_a___0))
// to file:///home/andy/games/keen/lib/json.keen 166:1
const to1539719180 = l_a___0 =>
	to2584131937(to845310736(l_a___0))
// to@(json) file:///home/andy/games/keen/lib/json.keen 168:1
const to2829624205 = l_a___0 =>
	new (json3023828771)(6, l_a___0.map(l_it___1 =>
				to1057654961(l_it___1)))
// to@(uri) file:///home/andy/games/keen/lib/json.keen 168:1
const to3701919658 = l_a___0 =>
	new (json3023828771)(6, l_a___0.map(l_it___1 =>
				to3400924814(l_it___1)))
// to@((json, json) tuple2) file:///home/andy/games/keen/lib/json.keen 168:1
const to4209540220 = l_a___0 =>
	new (json3023828771)(6, l_a___0.map(l_it___1 =>
				to436763473(l_it___1)))
// to@(lsp-diagnostic) file:///home/andy/games/keen/lib/json.keen 170:1
const to332791575 = l_a___1 => {
	const l_x___0 = l_a___1
	const x_matched___0 = l_x___0
	if ((x_matched___0.index === 0)) {
		return c____287()
	} else {
		if ((x_matched___0.index === 6)) {
			return l_x___0.value.map(l_it___2 =>
					to4283647128(l_it___2))
		} else {
			throw new (deserialize__45error2968075170)(c____394(), l_a___1)
		}
	}
}
// to@(nat32) file:///home/andy/games/keen/lib/json.keen 170:1
const to3292698306 = l_a___1 => {
	const l_x___0 = l_a___1
	const x_matched___0 = l_x___0
	if ((x_matched___0.index === 0)) {
		return c____282()
	} else {
		if ((x_matched___0.index === 6)) {
			return Uint32Array.from(l_x___0.value.map(l_it___2 =>
						to1990640431(l_it___2)))
		} else {
			throw new (deserialize__45error2968075170)(c____394(), l_a___1)
		}
	}
}
// to@(uri array) file:///home/andy/games/keen/lib/json.keen 188:1
const to792673025 = l_a___0 =>
	((l_a___0 instanceof Array) ? to3701919658(l_a___0) : new (json3023828771)(0, c____306()))
// to@(string) file:///home/andy/games/keen/lib/json.keen 193:1
const to793998973 = l_a___0 =>
	(__61__613716497912(l_a___0, new (json3023828771)(0, c____306())) ? c____307() : to845310736(l_a___0))
// to@(json, json) file:///home/andy/games/keen/lib/json.keen 196:1
const to436763473 = l_a___0 =>
	list__45new3723065633([to1057654961(l_a___0.a), to1057654961(l_a___0.b)])
// subscript file:///home/andy/games/keen/lib/json.keen 271:1
const subscript2769485875 = (l_a___2, l_key___4) => {
	let l_destruct___3, x_matched___0, l_member2___1, l_temp___5, x_matched___1, l_member2___0
	return ((l_member2___0 = ((l_member2___1 = json__45object1048016092(l_a___2)) , ((x_matched___0 = l_member2___1) , ((x_matched___0 instanceof none2082914084) ? new (option2311174978)(0, c____307()) : ((x_matched___0 instanceof json__45object1179919109) ? ((l_destruct___3 = l_member2___1) , subscript3042165177(l_destruct___3, l_key___4)) : _unreachable()))))) , ((x_matched___1 = l_member2___0) , ((x_matched___1.index === 0) ? new (json3023828771)(0, c____306()) : ((x_matched___1.index === 1) ? ((l_temp___5 = l_member2___0.value) , l_temp___5) : _unreachable()))))
}
// has-key file:///home/andy/games/keen/lib/json.keen 275:1
const has__45key1841251663 = (l_a___1, l_key___3) => {
	let l_destruct___2, x_matched___0, l_member2___0
	return (((l_member2___0 = json__45object1048016092(l_a___1)) , ((x_matched___0 = l_member2___0) , ((x_matched___0 instanceof none2082914084) ? new (option2311174978)(0, c____307()) : ((x_matched___0 instanceof json__45object1179919109) ? ((l_destruct___2 = l_member2___0) , subscript3042165177(l_destruct___2, l_key___3)) : _unreachable())))).index === 1)
}
// show file:///home/andy/games/keen/lib/json.keen 284:1
const show2456088877 = l_a___0 =>
	to__45kid4223101532(l_a___0)
// to-json@(json) file:///home/andy/games/keen/lib/json.keen 288:1
const to__45json1473113864 = l_a___1 => {
	let l_k___6, l_v___5, l_parts___3, x_matched___0, l_x___0
	return ((l_x___0 = to1057654961(l_a___1)) , ((x_matched___0 = l_x___0) , ((x_matched___0.index === 0) ? c____383() : ((x_matched___0.index === 1) ? interpolate3208339971([interpolate__45value1500202720(l_x___0.value)]) : ((x_matched___0.index === 2) ? interpolate3208339971([interpolate__45value2107274002(l_x___0.value)]) : ((x_matched___0.index === 3) ? interpolate3208339971([interpolate__45value2106628116(l_x___0.value)]) : ((x_matched___0.index === 4) ? interpolate3208339971([interpolate__45value852213350(l_x___0.value)]) : ((x_matched___0.index === 5) ? quoted2558234731(l_x___0.value, false) : ((x_matched___0.index === 6) ? interpolate3208339971([c____384(), interpolate__45value844224645(join2531354735(c____351(), l_x___0.value.map(l_it___2 =>
							to__45json1473113864(l_it___2)))), c____385()]) : ((x_matched___0.index === 7) ? ((l_parts___3 = join2531354735(c____351(), for__45loop2105557589(new (zip2081812156)(l_x___0.value.keys, l_x___0.value.values), l_destruct___4 =>
				((l_v___5 = l_destruct___4.b) , ((l_k___6 = l_destruct___4.a) , interpolate3208339971([interpolate__45value844224645(quoted2558234731(to649144722(l_k___6), false)), c____346(), interpolate__45value844224645(to__45json1473113864(l_v___5))])))))) , interpolate3208339971([c____386(), interpolate__45value844224645(l_parts___3), c____387()])) : _unreachable()))))))))))
}
// to-quote file:///home/andy/games/keen/lib/json.keen 309:1
const to__45quote2117139004 = l_a___1 => {
	let l_esc___7, l_temp___6, l_lines___0
	return ((l_lines___0 = split258860773(l_a___1, c____332())) , with__45block2392888053(build252249843(__431111513593(l_lines___0.length, 1)), l_out___2 => {
			__126__612346250272(l_out___2, c____370())
			for (const l_line___3 of l_lines___0) {
				__126__612346250272(l_out___2, with__45block848734846(build252249843(size1763153932(l_line___3)), l_out__45line___4 => {
							__126__613860143679(l_out__45line___4, 9)
							for__45loop3053296006(l_line___3, l_x___5 =>
									((l_temp___6 = escape2382450147(l_x___5, true)) , ((l_esc___7 = l_temp___6) , ((l_temp___6 instanceof Uint8Array) ? __126__126__612461227494(l_out__45line___4, to__45array__45view3595367460(l_esc___7)) : __126__613860143679(l_out__45line___4, l_x___5)))))
						}))
			}
		}))
}
// quoted file:///home/andy/games/keen/lib/json.keen 322:1
const quoted2558234731 = (l_a___1, l_is__45kid___4) => {
	let l_esc___5, l_temp___3
	return with__45block848734846(c____556(), l_out___0 => {
			__126__613860143679(l_out___0, 34)
			for__45loop1236637330(l_a___1, l_x___2 =>
					((l_temp___3 = escape2382450147(l_x___2, l_is__45kid___4)) , ((l_esc___5 = l_temp___3) , ((l_temp___3 instanceof Uint8Array) ? __126__126__612461227494(l_out___0, to__45array__45view3595367460(l_esc___5)) : __126__613860143679(l_out___0, l_x___2)))))
			__126__613860143679(l_out___0, 34)
		})
}
// escape file:///home/andy/games/keen/lib/json.keen 332:1
const escape2382450147 = (l_a___1, l_is__45kid___0) => {
	let x_matched___0
	return ((x_matched___0 = l_a___1) , ((x_matched___0 === 34) ? c____62() : ((x_matched___0 === 10) ? c____63() : ((x_matched___0 === 13) ? c____64() : ((x_matched___0 === 9) ? c____65() : ((x_matched___0 === 92) ? c____66() : ((x_matched___0 === 123) ? (l_is__45kid___0 ? c____67() : c____307()) : ((x_matched___0 === 125) ? (l_is__45kid___0 ? c____68() : c____307()) : ((x_matched___0 === 0) ? c____69() : c____307())))))))))
}
// to-kid@(string) file:///home/andy/games/keen/lib/json.keen 382:1
const to__45kid2157828882 = l_a___1 => {
	let x_matched___0, l_x___0
	return ((l_x___0 = to__45kid__45inner1079088464(to1103382995(l_a___1), 120)) , ((x_matched___0 = l_x___0) , ((x_matched___0 instanceof lines3854462958) ? join2531354735(c____332(), l_x___0.lines) : ((x_matched___0 instanceof single3052500597) ? l_x___0.text : _unreachable()))))
}
// to-kid@(json) file:///home/andy/games/keen/lib/json.keen 382:1
const to__45kid4223101532 = l_a___1 => {
	let x_matched___0, l_x___0
	return ((l_x___0 = to__45kid__45inner1079088464(to1057654961(l_a___1), 120)) , ((x_matched___0 = l_x___0) , ((x_matched___0 instanceof lines3854462958) ? join2531354735(c____332(), l_x___0.lines) : ((x_matched___0 instanceof single3052500597) ? l_x___0.text : _unreachable()))))
}
// single file:///home/andy/games/keen/lib/json.keen 388:1
const single2811028615 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof single3052500597) ? l_a___0 : c____307()))
}
// parenthesize file:///home/andy/games/keen/lib/json.keen 391:1
const parenthesize2442348749 = l_a___0 =>
	(l_a___0["needs-parens"] ? interpolate3208339971([c____353(), interpolate__45value844224645(l_a___0.text), c____354()]) : l_a___0.text)
// to-kid-inner file:///home/andy/games/keen/lib/json.keen 393:1
const to__45kid__45inner1079088464 = (l_a___0, l_max__45columns___1) => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 0) ? c____553() : ((x_matched___0.index === 1) ? new (single3052500597)(interpolate3208339971([interpolate__45value1500202720(l_a___0.value)]), false) : ((x_matched___0.index === 2) ? new (single3052500597)(interpolate3208339971([interpolate__45value2107274002(l_a___0.value)]), false) : ((x_matched___0.index === 3) ? new (single3052500597)(interpolate3208339971([interpolate__45value2106628116(l_a___0.value)]), false) : ((x_matched___0.index === 4) ? new (single3052500597)(interpolate3208339971([interpolate__45value852213350(l_a___0.value)]), false) : ((x_matched___0.index === 5) ? (contains3714331898(l_a___0.value, 10) ? new (lines3854462958)(to__45quote2117139004(l_a___0.value)) : new (single3052500597)(quoted2558234731(l_a___0.value, true), false)) : ((x_matched___0.index === 6) ? (any1353902798(l_a___0.value) ? to__45kid__45array__45or__45object2368795605(c____307(), l_a___0.value, l_max__45columns___1) : c____554()) : ((x_matched___0.index === 7) ? (any193868770(l_a___0.value) ? to__45kid__45array__45or__45object2368795605(l_a___0.value.keys, l_a___0.value.values, l_max__45columns___1) : c____555()) : _unreachable())))))))))
}
// to-kid-array-or-object file:///home/andy/games/keen/lib/json.keen 422:1
const to__45kid__45array__45or__45object2368795605 = (l_keys___2, l_values___1, l_max__45columns___0) => {
	let l_temp___22, l_p___20, l_index___19, l_part___18, l_text___16
	isnt__45impl103140893(l_max__45columns___0, 4.294967295E9)
	if ((!any1353902798(l_values___1))) {
		throw new (error4175136409)(c____352())
	}
	if ((l_keys___2 instanceof Array)) {
		if ((!(l_keys___2.length === l_values___1.length))) {
			throw new (error4175136409)(c____343())
		}
	}
	let l_size___3 = 0
	const l_parts___4 = for__45loop1477798066(new (with__45index3302722206)(l_values___1), l_destruct___5 => {
			const l_x___6 = l_destruct___5.b
			const l_index___7 = l_destruct___5.a
			const l_key__45size___8 = ((l_keys___2 instanceof Array) ? __431111513593(size3209178433(quote__45if__45necessary1964759683(subscript2556338432(l_keys___2, l_index___7))), size3209178433(c____344())) : 0)
			const l_part___9 = to__45kid__45inner1079088464(l_x___6, saturating__45subtract2662612486(l_max__45columns___0, __431111513593(4, l_key__45size___8)))
			const x_matched___0 = l_part___9
			if ((x_matched___0 instanceof lines3854462958)) {
				l_size___3 = 4.294967295E9
			} else {
				if ((x_matched___0 instanceof single3052500597)) {
					if ((l_keys___2 instanceof Array)) {
						l_size___3 = saturating__45add3991356200(l_size___3, l_key__45size___8)
						l_size___3 = saturating__45add3991356200(l_size___3, 1)
					}
					if (((array3118325402(l_x___6) instanceof Array) ? true : (json__45object1048016092(l_x___6) instanceof json__45object1179919109))) {
						l_size___3 = 4.294967295E9
					}
					l_size___3 = saturating__45add3991356200(l_size___3, size3209178433(l_part___9.text))
				} else {
					_unreachable()
				}
			}
			return l_part___9
		})
	l_size___3 = saturating__45add3991356200(l_size___3, __45997287195(__42544875948(size3209178433(c____345()), l_values___1.length), 1))
	return (__621787529867(l_size___3, l_max__45columns___0) ? new (lines3854462958)(with__45block2392888053(c____556(), l_out___10 =>
				for__45loop1258512833(new (with__45index2740674936)(l_parts___4), l_destruct___11 => {
						const l_part___12 = l_destruct___11.b
						const l_index___13 = l_destruct___11.a
						const l_key___14 = ((l_keys___2 instanceof Array) ? interpolate3208339971([interpolate__45value844224645(quote__45if__45necessary1964759683(subscript2556338432(l_keys___2, l_index___13))), c____346()]) : c____347())
						const x_matched___1 = l_part___12
						if ((x_matched___1 instanceof lines3854462958)) {
							__126__612346250272(l_out___10, l_key___14)
							for (const l_line___15 of l_part___12.lines) {
								__126__612346250272(l_out___10, interpolate3208339971([c____348(), interpolate__45value844224645(l_line___15)]))
							}
						} else {
							if ((x_matched___1 instanceof single3052500597)) {
								__126__612346250272(l_out___10, interpolate3208339971([interpolate__45value844224645(l_key___14), c____349(), interpolate__45value844224645(l_part___12.text)]))
							} else {
								_unreachable()
							}
						}
					}))) : ((l_text___16 = join2531354735(c____345(), for__45loop4082311331(new (with__45index2740674936)(l_parts___4), l_destruct___17 =>
				((l_part___18 = l_destruct___17.b) , ((l_index___19 = l_destruct___17.a) , ((l_p___20 = parenthesize2442348749((() => {
						const l_member2___21 = single2811028615(l_part___18)
						const x_matched___2 = l_member2___21
						if ((x_matched___2 instanceof none2082914084)) {
							throw new (error4175136409)(c____350())
						} else {
							if ((x_matched___2 instanceof single3052500597)) {
								return ((l_temp___22 = l_member2___21) , l_temp___22)
							} else {
								return _unreachable()
							}
						}
					})())) , ((l_keys___2 instanceof Array) ? interpolate3208339971([interpolate__45value844224645(quote__45if__45necessary1964759683(subscript2556338432(l_keys___2, l_index___19))), c____344(), interpolate__45value844224645(l_p___20)]) : l_p___20))))))) , new (single3052500597)((((!(l_keys___2 instanceof Array)) ? (l_parts___4.length === 1) : false) ? interpolate3208339971([interpolate__45value844224645(l_text___16), c____351()]) : l_text___16), true)))
}
// quote-if-necessary file:///home/andy/games/keen/lib/json.keen 461:1
const quote__45if__45necessary1964759683 = l_key___1 => {
	let l_s___0
	return ((l_s___0 = to649144722(l_key___1)) , (is__45keen__45identifier3644865481(l_s___0) ? l_s___0 : quoted2558234731(l_s___0, true)))
}
// to file:///home/andy/games/keen/lib/log.keen 14:1
const to579970662 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? _symbol59 : ((x_matched___0 === 1) ? _symbol60 : ((x_matched___0 === 2) ? _symbol61 : _unreachable()))))
}
// show file:///home/andy/games/keen/lib/log.keen 22:1
const show243154761 = l_a___0 =>
	show2656971875(to579970662(l_a___0))
// log-error@(string) file:///home/andy/games/keen/lib/log.keen 55:1
const log__45error287139582 = l_value___0 =>
	log__45with__45level3770966597(2, to__45kid2157828882(l_value___0))
// log-with-level file:///home/andy/games/keen/lib/log.keen 64:1
const log__45with__45level3770966597 = (l_level___0, l_message___1) => {
	(void _global.console[to3382899672(show243154761(l_level___0))](interpolate1072222187([interpolate__45value1949319188(l_level___0), c____344(), interpolate__45value844224645(l_message___1)])))
}
// new@(js-any option) file:///home/andy/games/keen/lib/misc.keen 38:1
const new3034108764 = l_value___0 =>
	new (reference299390385)(l_value___0)
// get@(js-any option) file:///home/andy/games/keen/lib/misc.keen 39:1
const get1017689952 = l_a___0 =>
	l_a___0["reference-value"]
// set=@(js-any option) file:///home/andy/games/keen/lib/misc.keen 40:1
const set__612710139337 = (l_a___0, l_value___1) => {
	l_a___0["reference-value"] = l_value___1
}
// + file:///home/andy/games/keen/lib/number.keen 122:1
const __43328586896 = (l_a___1, l_b___2) => {
	const l_res___0 = ((l_a___1 + l_b___2) & 255)
	if ((!__62__613990261314(l_res___0, l_a___1))) {
		throw arithmetic__45error255769755(c____492(), new (number3467695210)(0, BigInt(l_a___1)), new (number3467695210)(0, BigInt(l_b___2)))
	}
	return l_res___0
}
// + file:///home/andy/games/keen/lib/number.keen 130:1
const __431111513593 = (l_a___1, l_b___2) => {
	const l_res___0 = ((l_a___1 + l_b___2) >>> 0)
	if ((!__62__61724884600(l_res___0, l_a___1))) {
		throw arithmetic__45error255769755(c____315(), new (number3467695210)(0, BigInt(l_a___1)), new (number3467695210)(0, BigInt(l_b___2)))
	}
	return l_res___0
}
// + file:///home/andy/games/keen/lib/number.keen 134:1
const __4340737675 = (l_a___1, l_b___2) => {
	const l_res___0 = BigInt.asUintN(64, (l_a___1 + l_b___2))
	if ((!__62__61483908731(l_res___0, l_a___1))) {
		throw arithmetic__45error255769755(c____366(), new (number3467695210)(0, l_a___1), new (number3467695210)(0, l_b___2))
	}
	return l_res___0
}
// - file:///home/andy/games/keen/lib/number.keen 140:1
const __452043855233 = (l_a___0, l_b___1) => {
	if ((!__62__613990261314(l_a___0, l_b___1))) {
		throw arithmetic__45error255769755(c____545(), new (number3467695210)(0, BigInt(l_a___0)), new (number3467695210)(0, BigInt(l_b___1)))
	}
	return ((l_a___0 - l_b___1) & 255)
}
// - file:///home/andy/games/keen/lib/number.keen 146:1
const __45997287195 = (l_a___0, l_b___1) => {
	if ((!__62__61724884600(l_a___0, l_b___1))) {
		throw arithmetic__45error255769755(c____338(), new (number3467695210)(0, BigInt(l_a___0)), new (number3467695210)(0, BigInt(l_b___1)))
	}
	return ((l_a___0 - l_b___1) >>> 0)
}
// - file:///home/andy/games/keen/lib/number.keen 149:1
const __45399441368 = (l_a___0, l_b___1) => {
	if ((!__62__61483908731(l_a___0, l_b___1))) {
		throw arithmetic__45error255769755(c____363(), new (number3467695210)(0, l_a___0), new (number3467695210)(0, l_b___1))
	}
	return BigInt.asUintN(64, (l_a___0 - l_b___1))
}
// * file:///home/andy/games/keen/lib/number.keen 162:1
const __42544875948 = (l_a___1, l_b___4) => {
	const l_a0___0 = low__45part495243091(l_a___1)
	const l_a1___2 = high__45part3856895126(l_a___1)
	const l_b0___3 = low__45part495243091(l_b___4)
	const l_b1___5 = high__45part3856895126(l_b___4)
	const l_low___6 = (Math.imul(l_a0___0, l_b0___3) >>> 0)
	if (((l_a1___2 === 0) ? (l_b1___5 === 0) : false)) {
		return l_low___6
	} else {
		const l_cross___7 = (((Math.imul(l_a0___0, l_b1___5) >>> 0) + (Math.imul(l_a1___2, l_b0___3) >>> 0)) >>> 0)
		if ((!(((l_a1___2 === 0) ? true : (l_b1___5 === 0)) ? (high__45part3856895126(l_cross___7) === 0) : false))) {
			throw arithmetic__45error255769755(c____339(), new (number3467695210)(0, BigInt(l_a___1)), new (number3467695210)(0, BigInt(l_b___4)))
		}
		return ((l_low___6 + ((l_cross___7 << 16) >>> 0)) >>> 0)
	}
}
// high-part file:///home/andy/games/keen/lib/number.keen 183:1
const high__45part3856895126 = l_a___0 =>
	((l_a___0 >>> 16) >>> 0)
// low-part file:///home/andy/games/keen/lib/number.keen 185:1
const low__45part495243091 = l_a___0 =>
	((l_a___0 & 65535) >>> 0)
// * file:///home/andy/games/keen/lib/number.keen 187:1
const __421762530512 = (l_a___0, l_b___1) => {
	if ((__60__61829986477(l_a___0, BigInt(4.294967295E9)) ? __60__61829986477(l_b___1, BigInt(4.294967295E9)) : false)) {
		return BigInt.asUintN(64, (l_a___0 * l_b___1))
	} else {
		if (((l_a___0 === 0n) ? true : (l_b___1 === 0n))) {
			return 0n
		} else {
			const l_res___2 = BigInt.asUintN(64, (l_a___0 * l_b___1))
			if ((!((__471727432342(l_res___2, l_b___1) === l_a___0) ? (__471727432342(l_res___2, l_a___0) === l_b___1) : false))) {
				throw arithmetic__45error255769755(c____537(), new (number3467695210)(0, l_a___0), new (number3467695210)(0, l_b___1))
			}
			return l_res___2
		}
	}
}
// / file:///home/andy/games/keen/lib/number.keen 205:1
const __471416517417 = (l_a___1, l_b___0) => {
	if ((l_b___0 === 0)) {
		throw arithmetic__45error255769755(c____361(), new (number3467695210)(0, BigInt(l_a___1)), new (number3467695210)(0, BigInt(l_b___0)))
	}
	return ((l_a___1 / l_b___0) >>> 0)
}
// / file:///home/andy/games/keen/lib/number.keen 208:1
const __471727432342 = (l_a___1, l_b___0) => {
	if ((l_b___0 === 0n)) {
		throw arithmetic__45error255769755(c____361(), new (number3467695210)(0, l_a___1), new (number3467695210)(0, l_b___0))
	}
	return (l_a___1 / l_b___0)
}
// % file:///home/andy/games/keen/lib/number.keen 221:1
const __374173506908 = (l_a___1, l_b___0) => {
	if ((l_b___0 === 0)) {
		throw arithmetic__45error255769755(c____376(), new (number3467695210)(0, BigInt(l_a___1)), new (number3467695210)(0, BigInt(l_b___0)))
	}
	return (l_a___1 % l_b___0)
}
// % file:///home/andy/games/keen/lib/number.keen 226:1
const __373577318653 = (l_a___1, l_b___0) => {
	if ((l_b___0 === 0n)) {
		throw arithmetic__45error255769755(c____376(), new (number3467695210)(0, l_a___1), new (number3467695210)(0, l_b___0))
	}
	return (l_a___1 % l_b___0)
}
// * file:///home/andy/games/keen/lib/number.keen 311:1
const __4252786522 = (l_a___1, l_b___2) => {
	const l_overflow___0 = ((l_a___1 === -1n) ? (l_b___2 === -9223372036854775808n) : ((l_b___2 === -1n) ? (l_a___1 === -9223372036854775808n) : ((l_b___2 === 0n) ? false : (__623353462001(l_a___1, __472464610716(9223372036854775807n, l_b___2)) ? true : (__603526412653(l_a___1, __472464610716(-9223372036854775808n, l_b___2)) ? true : false)))))
	if (l_overflow___0) {
		throw arithmetic__45error255769755(c____373(), new (number3467695210)(1, l_a___1), new (number3467695210)(1, l_b___2))
	}
	return BigInt.asIntN(64, (l_a___1 * l_b___2))
}
// - file:///home/andy/games/keen/lib/number.keen 335:1
const __451824542247 = l_a___0 =>
	__4252786522(l_a___0, -1n)
// - file:///home/andy/games/keen/lib/number.keen 343:1
const __453106886531 = l_a___0 =>
	((l_a___0 === __4340737675(to80714728(9223372036854775807n), 1n)) ? -9223372036854775808n : __451824542247(to2800182022(l_a___0)))
// / file:///home/andy/games/keen/lib/number.keen 362:1
const __472464610716 = (l_a___1, l_b___0) => {
	if (((l_b___0 === 0n) ? true : ((l_a___1 === -9223372036854775808n) ? (l_b___0 === -1n) : false))) {
		throw arithmetic__45error255769755(c____374(), new (number3467695210)(1, l_a___1), new (number3467695210)(1, l_b___0))
	}
	return (l_a___1 / l_b___0)
}
// abs file:///home/andy/games/keen/lib/number.keen 376:1
const abs351887427 = l_a___0 =>
	to80714728((__603526412653(l_a___0, 0n) ? __451824542247(l_a___0) : l_a___0))
// abs file:///home/andy/games/keen/lib/number.keen 381:1
const abs1190393750 = l_a___0 =>
	(__60334440019(l_a___0, 0) ? __453376278839(l_a___0) : l_a___0)
// + file:///home/andy/games/keen/lib/number.keen 449:1
const __43154240798 = (l_a___0, l_b___1) =>
	non__45nan611698527(c____454(), l_a___0, l_b___1, (l_a___0 + l_b___1))
// - file:///home/andy/games/keen/lib/number.keen 453:1
const __453376278839 = l_a___0 =>
	__42958286333(l_a___0, -1)
// - file:///home/andy/games/keen/lib/number.keen 457:1
const __453248900816 = (l_a___0, l_b___1) =>
	non__45nan611698527(c____458(), l_a___0, l_b___1, (l_a___0 - l_b___1))
// * file:///home/andy/games/keen/lib/number.keen 461:1
const __42958286333 = (l_a___0, l_b___1) =>
	non__45nan611698527(c____456(), l_a___0, l_b___1, (l_a___0 * l_b___1))
// non-nan file:///home/andy/games/keen/lib/number.keen 467:1
const non__45nan611698527 = (l_name___1, l_arg0___2, l_arg1___3, l_res___0) => {
	if (Object.is(l_res___0, Number.NaN)) {
		throw arithmetic__45error255769755(l_name___1, new (number3467695210)(2, l_arg0___2), new (number3467695210)(2, l_arg1___3))
	}
	return l_res___0
}
// / file:///home/andy/games/keen/lib/number.keen 490:1
const __472982201458 = (l_a___1, l_b___0) => {
	if (Object.is(l_b___0, 0)) {
		throw arithmetic__45error255769755(c____455(), new (number3467695210)(2, l_a___1), new (number3467695210)(2, l_b___0))
	}
	return (l_a___1 / l_b___0)
}
// to file:///home/andy/games/keen/lib/number.keen 539:1
const to195685696 = l_a___0 =>
	clamp__45to3593622062(BigInt(clamp__45to809071541(to1433049007(l_a___0))))
// to file:///home/andy/games/keen/lib/number.keen 556:1
const to1433049007 = l_a___0 =>
	__truncateToInt32(round3766038457(l_a___0))
// round file:///home/andy/games/keen/lib/number.keen 563:1
const round3766038457 = l_a___1 => {
	let l_js__45round___2, l_sign___0
	return ((l_sign___0 = (__60334440019(l_a___1, 0) ? -1 : 1)) , ((l_js__45round___2 = to3656388790(Math3540983115().round(to958312080(abs1190393750(l_a___1))))) , __42958286333(l_sign___0, l_js__45round___2)))
}
// round-down file:///home/andy/games/keen/lib/number.keen 576:1
const round__45down3017244575 = l_a___0 =>
	to3656388790(Math3540983115().floor(to958312080(l_a___0)))
// Math file:///home/andy/games/keen/lib/number.keen 594:1
const Math3540983115 = () =>
	_global.Math
// to file:///home/andy/games/keen/lib/number.keen 597:1
const to2800182022 = l_a___0 => {
	if ((!__60__61829986477(l_a___0, (9223372036854775807n & 18446744073709551615n)))) {
		throw arithmetic__45error3928167685(c____535(), new (number3467695210)(0, l_a___0))
	}
	return _int64OfNat64(l_a___0)
}
// clamp-to file:///home/andy/games/keen/lib/number.keen 698:1
const clamp__45to3593622062 = l_a___0 =>
	(__60__61829986477(l_a___0, BigInt(4.294967295E9)) ? Number((l_a___0 & 4294967295n)) : 4.294967295E9)
// clamp-to file:///home/andy/games/keen/lib/number.keen 700:1
const clamp__45to809071541 = l_a___0 =>
	(__62__61930711169(l_a___0, 0) ? (l_a___0 >>> 0) : 0)
// to file:///home/andy/games/keen/lib/number.keen 706:1
const to80714728 = l_a___0 => {
	if ((!__62__613250878608(l_a___0, 0n))) {
		throw arithmetic__45error3928167685(c____375(), new (number3467695210)(1, l_a___0))
	}
	return (l_a___0 & 18446744073709551615n)
}
// to file:///home/andy/games/keen/lib/number.keen 712:1
const to3641552316 = l_a___0 => {
	if ((!__60__612052354958(l_a___0, (255 >>> 0)))) {
		throw arithmetic__45error3928167685(c____443(), new (number3467695210)(0, BigInt(l_a___0)))
	}
	return (l_a___0 & 255)
}
// to file:///home/andy/games/keen/lib/number.keen 724:1
const to1597812159 = l_a___0 => {
	if ((!__60__61829986477(l_a___0, BigInt(4.294967295E9)))) {
		throw arithmetic__45error3928167685(c____367(), new (number3467695210)(0, l_a___0))
	}
	return Number((l_a___0 & 4294967295n))
}
// next file:///home/andy/games/keen/lib/number.keen 853:1
const next2896928830 = l_a___0 =>
	__431111513593(l_a___0, 1)
// next file:///home/andy/games/keen/lib/number.keen 855:1
const next2614000486 = l_a___0 =>
	__4340737675(l_a___0, 1n)
// hash file:///home/andy/games/keen/lib/number.keen 894:1
const hash3608937292 = (l_a___0, l_state___1) =>
	hash62702912(BigInt(l_a___0), l_state___1)
// hash file:///home/andy/games/keen/lib/number.keen 898:1
const hash31971877 = (l_a___0, l_state___1) =>
	hash62702912(BigInt(l_a___0), l_state___1)
// hash file:///home/andy/games/keen/lib/number.keen 900:1
const hash62702912 = (l_a___1, l_state___0) => {
	l_state___0.state = (l_state___0.state ^ l_a___1)
	l_state___0.state = BigInt.asUintN(64, (BigInt.asUintN(64, (6364136223846793005n * l_state___0.state)) + 1n))
}
// saturating-add file:///home/andy/games/keen/lib/number.keen 923:1
const saturating__45add3991356200 = (l_a___1, l_b___2) => {
	let l_res___0
	return ((l_res___0 = ((l_a___1 + l_b___2) >>> 0)) , (__62__61724884600(l_res___0, l_a___1) ? l_res___0 : 4.294967295E9))
}
// saturating-subtract file:///home/andy/games/keen/lib/number.keen 933:1
const saturating__45subtract2662612486 = (l_a___0, l_b___1) =>
	(__62__61724884600(l_a___0, l_b___1) ? ((l_a___0 - l_b___1) >>> 0) : 0)
// ==@(theme) file:///home/andy/games/keen/lib/option.keen 12:1
const __61__611911922094 = (l_a___0, l_b___1) =>
	(((typeof l_a___0) === "number") ? (((typeof l_b___1) === "number") ? __61__613796645579(l_a___0, l_b___1) : false) : (((typeof l_b___1) === "number") ? false : true))
// ==@(char8) file:///home/andy/games/keen/lib/option.keen 12:1
const __61__612327209083 = (l_a___0, l_b___1) =>
	(((typeof l_a___0) === "number") ? (((typeof l_b___1) === "number") ? (l_a___0 === l_b___1) : false) : (((typeof l_b___1) === "number") ? false : true))
// ==@(keydown-kind) file:///home/andy/games/keen/lib/option.keen 12:1
const __61__613275818335 = (l_a___0, l_b___1) =>
	(((typeof l_a___0) === "number") ? (((typeof l_b___1) === "number") ? __61__61132174309(l_a___0, l_b___1) : false) : (((typeof l_b___1) === "number") ? false : true))
// ==@(string) file:///home/andy/games/keen/lib/option.keen 12:1
const __61__611918051925 = (l_a___0, l_b___1) =>
	((l_a___0 instanceof string2245870778) ? ((l_b___1 instanceof string2245870778) ? __61__612506082126(l_a___0, l_b___1) : false) : ((l_b___1 instanceof string2245870778) ? false : true))
// try-take file:///home/andy/games/keen/lib/parse.keen 11:1
const try__45take450659326 = (l_a___0, l_start___1) =>
	try__45take__45all1546928987(l_a___0, to2628429697(l_start___1))
// parse@(json) file:///home/andy/games/keen/lib/parse.keen 23:1
const parse351043918 = (l_a___0, l_text___1) =>
	parse1372561662(l_a___0, to__45array__45view3595367460(to2628429697(l_text___1)))
// parse@(json) file:///home/andy/games/keen/lib/parse.keen 25:1
const parse1372561662 = (l_a___3, l_text___1) => {
	const l_iter___0 = begin2617308392(l_text___1)
	try {
		const l_res___2 = l_a___3.parse3605877829(l_iter___0)
		if ((!is__45at__45end2461033736(l_iter___0))) {
			throw new (parse__45error4189383028)(to1851091310(l_text___1), index4248841946(l_iter___0), c____546())
		}
		return l_res___2
	} catch (x_error___0) {
		if ((x_error___0 instanceof inner__45parse__45error111031572)) {
			const l_e___4 = x_error___0
			throw new (parse__45error4189383028)(to1851091310(l_text___1), index4248841946(l_iter___0), l_e___4.expected)
		} else {
			throw x_error___0
		}
	}
}
// show file:///home/andy/games/keen/lib/parse.keen 42:1
const show3421963843 = l_a___1 => {
	let l_peek___0
	return ((l_peek___0 = ((l_a___1.index === size3209178433(l_a___1.input)) ? c____487() : interpolate3208339971([c____488(), interpolate__45value192594778(subscript3957816670(to2628429697(l_a___1.input), l_a___1.index)), c____488()]))) , interpolate3208339971([c____489(), interpolate__45value844224645(l_a___1.expected), c____490(), interpolate__45value844224645(l_peek___0)]))
}
// show file:///home/andy/games/keen/lib/parse.keen 48:1
const show3398540643 = l_a___0 =>
	interpolate3208339971([c____489(), interpolate__45value844224645(l_a___0.expected)])
// skip-whitespace file:///home/andy/games/keen/lib/parse.keen 213:1
const skip__45whitespace1706940396 = l_a___1 => {
	x_loop___0: while (true){
		const l_temp___0 = peek3964113808(l_a___1)
		const l_x___2 = l_temp___0
		if ((((typeof l_temp___0) === "number") ? is__45space556200539(l_x___2) : false)) {
			(void take__45next857232194(l_a___1))
			continue
		} else {
			break  x_loop___0
		}
	}
}
// is-space file:///home/andy/games/keen/lib/parse.keen 216:1
const is__45space556200539 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , (((((x_matched___0 === 9) || (x_matched___0 === 10)) || (x_matched___0 === 13)) || (x_matched___0 === 32)) ? true : false))
}
// take-quoted-string file:///home/andy/games/keen/lib/parse.keen 224:1
const take__45quoted__45string812262065 = l_iter___0 => {
	if ((!try__45take450659326(l_iter___0, c____530()))) {
		throw new (inner__45parse__45error111031572)(c____542())
	}
	return take__45quoted__45string__45after__45quote1510398789(l_iter___0)
}
// take-quoted-string-after-quote file:///home/andy/games/keen/lib/parse.keen 227:1
const take__45quoted__45string__45after__45quote1510398789 = l_iter___1 =>
	with__45block848734846(c____556(), l_out___0 => {
			x_loop___0: while (true){
				if ((() => {
							if (is__45at__45end2461033736(l_iter___1)) {
								throw new (inner__45parse__45error111031572)(c____542())
							}
							const l_char___2 = take__45next857232194(l_iter___1)
							const x_matched___1 = l_char___2
							switch (x_matched___1) {
								case 34:{
									return true
								}
								case 92:{
									if ((!take__45string__45escape2002939542(l_out___0, l_iter___1))) {
										throw new (inner__45parse__45error111031572)(c____543())
									}
									return false
								}
								case 10:{
									throw new (inner__45parse__45error111031572)(c____544())
								}
								default:{
									__126__613860143679(l_out___0, l_char___2)
									return false
								}
							}
						})()) {
					break  x_loop___0
				} else {
					continue
				}
			}
		})
// take-string-escape file:///home/andy/games/keen/lib/parse.keen 243:1
const take__45string__45escape2002939542 = (l_out___0, l_iter___1) => {
	let l_temp___3, x_matched___1, l_member2___2
	const x_matched___0 = ((l_member2___2 = try__45take__45next872227179(l_iter___1)) , ((x_matched___1 = l_member2___2) , ((x_matched___1 instanceof none2082914084) ? 0 : (((typeof x_matched___1) === "number") ? ((l_temp___3 = l_member2___2) , l_temp___3) : _unreachable()))))
	switch (x_matched___0) {
		case 92:{
			__126__613860143679(l_out___0, 92)
			return true
		}
		case 123:{
			__126__613860143679(l_out___0, 123)
			return true
		}
		case 125:{
			__126__613860143679(l_out___0, 125)
			return true
		}
		case 48:{
			__126__613860143679(l_out___0, 0)
			return true
		}
		case 34:{
			__126__613860143679(l_out___0, 34)
			return true
		}
		case 110:{
			__126__613860143679(l_out___0, 10)
			return true
		}
		case 114:{
			__126__613860143679(l_out___0, 13)
			return true
		}
		case 116:{
			__126__613860143679(l_out___0, 9)
			return true
		}
		case 117:{
			return take__45unicode__45escape1361335549(l_out___0, l_iter___1, 4)
		}
		case 85:{
			return take__45unicode__45escape1361335549(l_out___0, l_iter___1, 8)
		}
		case 120:{
			return take__45unicode__45escape1361335549(l_out___0, l_iter___1, 2)
		}
		default:{
			return false
		}
	}
}
// take-unicode-escape file:///home/andy/games/keen/lib/parse.keen 278:1
const take__45unicode__45escape1361335549 = (l_out___7, l_iter___4, l_sequence__45length___1) => {
	let l_destruct___5, x_matched___2, l_member2___3
	try {
		let l_full__45char___0 = 0
		let x_cur___0 = 0
		let x_end___1 = l_sequence__45length___1
		while ((x_cur___0 < x_end___1)){
			const l_temp___2 = ((l_member2___3 = peek3964113808(l_iter___4)) , ((x_matched___2 = l_member2___3) , ((x_matched___2 instanceof none2082914084) ? c____307() : (((typeof x_matched___2) === "number") ? ((l_destruct___5 = l_member2___3) , decode__45hex__45digit959393847(l_destruct___5)) : _unreachable()))))
			const l_x___6 = l_temp___2
			if ((!((typeof l_temp___2) === "number"))) {
				throw new (invalid__45unicode__45character3158871053)(0)
			}
			;(void take__45next857232194(l_iter___4))
			l_full__45char___0 = ((__60__602633832601(l_full__45char___0, 4) | to1597812159(BigInt(l_x___6))) >>> 0)
			x_cur___0 = (x_cur___0 + 1)
		}
		__126__126__612461227494(l_out___7, to__45array__45view3595367460(to2628429697(to2791919658((l_full__45char___0 >>> 0)))))
		return true
	} catch (x_error___3) {
		if ((x_error___3 instanceof invalid__45unicode__45character3158871053)) {
			return false
		} else {
			throw x_error___3
		}
	}
}
// int-of-nat file:///home/andy/games/keen/lib/parse.keen 327:1
const int__45of__45nat4170603444 = (l_sign___0, l_a___1) => {
	let x_matched___0
	try {
		return (((typeof l_sign___0) === "number") ? ((x_matched___0 = l_sign___0) , ((x_matched___0 === 0) ? __453106886531(l_a___1) : ((x_matched___0 === 1) ? to2800182022(l_a___1) : _unreachable()))) : to2800182022(l_a___1))
	} catch (x_error___1) {
		if ((x_error___1 instanceof arithmetic__45error95286647)) {
			throw new (inner__45parse__45error111031572)(c____534())
		} else {
			throw x_error___1
		}
	}
}
// take-base-and-nat file:///home/andy/games/keen/lib/parse.keen 340:1
const take__45base__45and__45nat2354817676 = l_iter___0 => {
	let l_temp___3, x_matched___0, l_member2___2
	if ((!peek__45digit2716017518(l_iter___0))) {
		throw new (inner__45parse__45error111031572)(c____432())
	}
	const l_base___1 = ((l_member2___2 = try__45take__450__45base1792250869(l_iter___0)) , ((x_matched___0 = l_member2___2) , ((x_matched___0 instanceof none2082914084) ? 10 : (((typeof x_matched___0) === "number") ? ((l_temp___3 = l_member2___2) , l_temp___3) : _unreachable()))))
	const l_temp___4 = next__45digit1777680512(l_iter___0, l_base___1)
	let l_nat__45value___5 = l_temp___4
	if ((!((typeof l_temp___4) === "bigint"))) {
		throw new (inner__45parse__45error111031572)(c____432())
	}
	x_loop___1: while (true){
		if ((() => {
					skip__45underscore__45if__45before__45digit1841082981(l_iter___0, l_base___1)
					const l_temp___6 = next__45digit1777680512(l_iter___0, l_base___1)
					const l_digit___7 = l_temp___6
					if (((typeof l_temp___6) === "bigint")) {
						try {
							l_nat__45value___5 = __4340737675(__421762530512(l_nat__45value___5, BigInt(l_base___1)), l_digit___7)
						} catch (x_error___2) {
							if ((x_error___2 instanceof arithmetic__45error95286647)) {
								throw new (inner__45parse__45error111031572)(c____534())
							} else {
								throw x_error___2
							}
						}
						return true
					} else {
						return false
					}
				})()) {
			continue
		} else {
			break  x_loop___1
		}
	}
	return new (tuple23447745953)(l_base___1, l_nat__45value___5)
}
// next-digit file:///home/andy/games/keen/lib/parse.keen 362:1
const next__45digit1777680512 = (l_a___1, l_base___4) => {
	const l_temp___0 = peek3964113808(l_a___1)
	const l_char___2 = l_temp___0
	if (((typeof l_temp___0) === "number")) {
		const l_temp___3 = char__45to__45nat641460524391(l_char___2, BigInt(l_base___4))
		const l_digit___5 = l_temp___3
		if (((typeof l_temp___3) === "bigint")) {
			(void take__45next857232194(l_a___1))
			return l_digit___5
		} else {
			return c____307()
		}
	} else {
		return c____307()
	}
}
// is-digit file:///home/andy/games/keen/lib/parse.keen 368:1
const is__45digit118148356 = l_a___0 =>
	(__60__612813005361(48, l_a___0) ? __60__612813005361(l_a___0, 57) : false)
// is-digit file:///home/andy/games/keen/lib/parse.keen 370:1
const is__45digit4061012875 = (l_a___0, l_base___1) =>
	((typeof char__45to__45nat641460524391(l_a___0, BigInt(l_base___1))) === "bigint")
// char-to-nat64 file:///home/andy/games/keen/lib/parse.keen 372:1
const char__45to__45nat641460524391 = (l_c___1, l_base___0) => {
	let l_res___2, l_res___3
	if ((!__60__61829986477(l_base___0, 36n))) {
		throw new (error4175136409)(c____536())
	}
	return ((__60__612813005361(48, l_c___1) ? __60__612813005361(l_c___1, 57) : false) ? ((l_res___2 = __45399441368(BigInt(l_c___1), BigInt(48))) , (__60384615097(l_res___2, l_base___0) ? l_res___2 : c____307())) : ((__60__612813005361(97, l_c___1) ? __60__612813005361(l_c___1, 122) : false) ? ((l_res___3 = __4340737675(10n, __45399441368(BigInt(l_c___1), BigInt(97)))) , (__60384615097(l_res___3, l_base___0) ? l_res___3 : c____307())) : c____307()))
}
// == file:///home/andy/games/keen/lib/parse.keen 390:1
const __61__614184194482 = (l_a___0, l_b___1) =>
	(l_a___0 === l_b___1)
// take-number file:///home/andy/games/keen/lib/parse.keen 391:1
const take__45number3880808221 = l_iter___1 => {
	const l_start___0 = copy789796339(l_iter___1)
	const l_sign___2 = try__45take__45sign439993546(l_iter___1)
	const l_destruct___3 = take__45base__45and__45nat2354817676(l_iter___1)
	const l_nat__45value___4 = l_destruct___3.b
	const l_base___5 = l_destruct___3.a
	if ((((l_base___5 === 10) ? __61__612327209083(peek3964113808(l_iter___1), 46) : false) ? peek__45digit__45next3284012958(l_iter___1, l_base___5) : false)) {
		(void take__45next857232194(l_iter___1))
		x_loop___0: while (true){
			if ((() => {
						skip__45underscore__45if__45before__45digit1841082981(l_iter___1, l_base___5)
						return ((typeof next__45digit1777680512(l_iter___1, 10)) === "bigint")
					})()) {
				continue
			} else {
				break  x_loop___0
			}
		}
		return new (number3467695210)(2, parse__45float2719365599(slice4028578461(l_start___0, l_iter___1)))
	} else {
		return (((typeof l_sign___2) === "number") ? ((__61__614184194482(l_sign___2, 0) ? (l_nat__45value___4 === 0n) : false) ? new (number3467695210)(2, -0) : new (number3467695210)(1, int__45of__45nat4170603444(l_sign___2, l_nat__45value___4))) : new (number3467695210)(0, l_nat__45value___4))
	}
}
// try-take-sign file:///home/andy/games/keen/lib/parse.keen 411:1
const try__45take__45sign439993546 = l_a___0 =>
	(try__45take450659326(l_a___0, c____347()) ? 0 : (try__45take450659326(l_a___0, c____540()) ? 1 : c____307()))
// try-take-0-base file:///home/andy/games/keen/lib/parse.keen 417:1
const try__45take__450__45base1792250869 = l_iter___0 =>
	(try__45take450659326(l_iter___0, c____538()) ? 2 : (try__45take450659326(l_iter___0, c____539()) ? 8 : (try__45take450659326(l_iter___0, c____441()) ? 16 : c____307())))
// peek-digit file:///home/andy/games/keen/lib/parse.keen 425:1
const peek__45digit2716017518 = l_a___1 => {
	let l_x___2, l_temp___0
	return ((l_temp___0 = peek3964113808(l_a___1)) , ((l_x___2 = l_temp___0) , (((typeof l_temp___0) === "number") ? is__45digit118148356(l_x___2) : false)))
}
// peek-digit-next file:///home/andy/games/keen/lib/parse.keen 427:1
const peek__45digit__45next3284012958 = (l_a___1, l_base___3) => {
	let l_x___2, l_temp___0
	return ((l_temp___0 = peek__45by1250898396(l_a___1, 1)) , ((l_x___2 = l_temp___0) , (((typeof l_temp___0) === "number") ? is__45digit4061012875(l_x___2, l_base___3) : false)))
}
// skip-underscore-if-before-digit file:///home/andy/games/keen/lib/parse.keen 430:1
const skip__45underscore__45if__45before__45digit1841082981 = (l_a___0, l_base___1) => {
	if ((__61__612327209083(peek3964113808(l_a___0), 95) ? peek__45digit__45next3284012958(l_a___0, l_base___1) : false)) {
		(void take__45next857232194(l_a___0))
	}
}
// parse-float file:///home/andy/games/keen/lib/parse.keen 435:1
const parse__45float2719365599 = l_a___0 =>
	to3656388790(Number3505827880()(to3382899672(to1851091310(l_a___0))))
// json file:///home/andy/games/keen/lib/parse.keen 455:1
const json1626967472 = () =>({
	parse3605877829: l_iter___0 => {
		const l_res___1 = parse__45json3383122049(l_iter___0)
		skip__45whitespace1706940396(l_iter___0)
		return l_res___1
	},
})
// parse-json file:///home/andy/games/keen/lib/parse.keen 460:1
const parse__45json3383122049 = l_a___0 => {
	let l_res___1, l_res___3
	skip__45whitespace1706940396(l_a___0)
	if (try__45take450659326(l_a___0, c____378())) {
		return new (json3023828771)(1, false)
	} else {
		if (try__45take450659326(l_a___0, c____377())) {
			return new (json3023828771)(1, true)
		} else {
			if (try__45take450659326(l_a___0, c____383())) {
				return new (json3023828771)(0, c____306())
			} else {
				if (try__45take450659326(l_a___0, c____530())) {
					return to1103382995(take__45quoted__45string__45after__45quote1510398789(l_a___0))
				} else {
					if (try__45take450659326(l_a___0, c____384())) {
						skip__45whitespace1706940396(l_a___0)
						return ((l_res___1 = (try__45take450659326(l_a___0, c____385()) ? c____286() : with__45block4091712480(c____556(), l_out___2 => {
								__126__613914582089(l_out___2, parse__45json3383122049(l_a___0))
								skip__45whitespace1706940396(l_a___0)
								x_loop___0: while (true){
									if (try__45take450659326(l_a___0, c____351())) {
										__126__613914582089(l_out___2, parse__45json3383122049(l_a___0))
										continue
									} else {
										break  x_loop___0
									}
								}
								skip__45whitespace1706940396(l_a___0)
								if ((!try__45take450659326(l_a___0, c____385()))) {
									throw new (inner__45parse__45error111031572)(c____531())
								}
							}))) , to2829624205(l_res___1))
					} else {
						if (try__45take450659326(l_a___0, c____386())) {
							skip__45whitespace1706940396(l_a___0)
							return ((l_res___3 = (try__45take450659326(l_a___0, c____387()) ? list__45new556806094(c____298()) : with__45block3389748437(c____556(), l_out___4 => {
									__126__61663728857(l_out___4, take__45key__45value4147019364(l_a___0))
									x_loop___1: while (true){
										if (try__45take450659326(l_a___0, c____351())) {
											__126__61663728857(l_out___4, take__45key__45value4147019364(l_a___0))
											continue
										} else {
											break  x_loop___1
										}
									}
									skip__45whitespace1706940396(l_a___0)
									if ((!try__45take450659326(l_a___0, c____387()))) {
										throw new (inner__45parse__45error111031572)(c____532())
									}
								}))) , to2817209971(l_res___3))
						} else {
							try {
								return to3427633462(take__45number3880808221(l_a___0))
							} catch (x_error___2) {
								if ((x_error___2 instanceof inner__45parse__45error111031572)) {
									throw new (inner__45parse__45error111031572)(c____533())
								} else {
									throw x_error___2
								}
							}
						}
					}
				}
			}
		}
	}
}
// take-key-value file:///home/andy/games/keen/lib/parse.keen 496:1
const take__45key__45value4147019364 = l_a___0 => {
	skip__45whitespace1706940396(l_a___0)
	const l_key___1 = take__45quoted__45string812262065(l_a___0)
	skip__45whitespace1706940396(l_a___0)
	if ((!try__45take450659326(l_a___0, c____346()))) {
		throw new (inner__45parse__45error111031572)(c____541())
	}
	skip__45whitespace1706940396(l_a___0)
	const l_value___2 = parse__45json3383122049(l_a___0)
	skip__45whitespace1706940396(l_a___0)
	return new (tuple23038093021)(to2584131937(l_key___1), l_value___2)
}
// show file:///home/andy/games/keen/lib/private/bootstrap.keen 96:5
const show3873208223 = l_ignore___0 => {
	let x_matched___0
	return ((x_matched___0 = l_ignore___0) , ((x_matched___0 instanceof deserialize__45error2968075170) ? show2077319282(l_ignore___0) : ((x_matched___0 instanceof error4175136409) ? l_ignore___0.show : ((x_matched___0 instanceof arithmetic__45error95286647) ? show1133673260(l_ignore___0) : ((x_matched___0 instanceof index__45too__45big3896995977) ? show2085044308(l_ignore___0) : ((x_matched___0 instanceof expected__45equal396653106) ? show472558569(l_ignore___0) : ((x_matched___0 instanceof unicode__45decode__45error3218288620) ? show3444337243(l_ignore___0) : ((x_matched___0 instanceof unreachable754248293) ? show4263516288(l_ignore___0) : ((x_matched___0 instanceof iterator__45out__45of__45bounds2781000628) ? show3347041155(l_ignore___0) : ((x_matched___0 instanceof expected__45not__45equal13879223) ? show698483114(l_ignore___0) : ((x_matched___0 instanceof was__45locked1331463512) ? show651872471(l_ignore___0) : ((x_matched___0 instanceof invalid__45unicode__45character3158871053) ? show1630551560(l_ignore___0) : ((x_matched___0 instanceof parse__45error4189383028) ? show3421963843(l_ignore___0) : ((x_matched___0 instanceof todo3442278752) ? show3097773375(l_ignore___0) : ((x_matched___0 instanceof inner__45parse__45error111031572) ? show3398540643(l_ignore___0) : _unreachable())))))))))))))))
}
// json-object file:///home/andy/games/keen/lib/private/bootstrap.keen 134:1
const json__45object1048016092 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 7) ? l_a___0.value : c____307()))
}
// array file:///home/andy/games/keen/lib/private/bootstrap.keen 134:1
const array3118325402 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 6) ? l_a___0.value : c____307()))
}
// nat64 file:///home/andy/games/keen/lib/private/bootstrap.keen 134:1
const nat641825150089 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 2) ? l_a___0.value : c____307()))
}
// string file:///home/andy/games/keen/lib/private/bootstrap.keen 134:1
const string2503677012 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 5) ? l_a___0.value : c____307()))
}
// new-json-object-from-sorted file:///home/andy/games/keen/lib/private/bootstrap.keen 141:1
const new__45json__45object__45from__45sorted858330226 = (l_keys___0, l_values___1) =>
	new (json__45object1179919109)(l_keys___0, l_values___1)
// pos file:///home/andy/games/keen/lib/private/parse-util.keen 18:1
const pos1571951761 = l_a___0 =>
	index4248841946(l_a___0)
// set-pos file:///home/andy/games/keen/lib/private/parse-util.keen 20:1
const set__45pos3110347446 = (l_a___0, l_pos___1) =>
	set__45index3529667579(l_a___0, l_pos___1)
// slice-from file:///home/andy/games/keen/lib/private/parse-util.keen 23:1
const slice__45from3681434959 = (l_a___1, l_start__45pos___2) => {
	const l_start___0 = copy789796339(l_a___1)
	set__45pos3110347446(l_start___0, l_start__45pos___2)
	return slice4028578461(l_start___0, l_a___1)
}
// is-utf8-initial-or-continue-code file:///home/andy/games/keen/lib/private/parse-util.keen 28:1
const is__45utf8__45initial__45or__45continue__45code3837450180 = l_a___0 =>
	__33__612754193981(((l_a___0 & 255) & 128), 0)
// must-take-one-unicode-char file:///home/andy/games/keen/lib/private/parse-util.keen 33:1
const must__45take__45one__45unicode__45char991103382 = l_a___0 => {
	try {
		return next__45char321918046337(l_a___0)
	} catch (x_error___0) {
		if ((x_error___0 instanceof unicode__45decode__45error3218288620)) {
			(void take__45next857232194(l_a___0))
			return 65533
		} else {
			throw x_error___0
		}
	}
}
// decode-hex-digit file:///home/andy/games/keen/lib/private/parse-util.keen 40:1
const decode__45hex__45digit959393847 = l_a___0 =>
	((__60__612813005361(48, l_a___0) ? __60__612813005361(l_a___0, 57) : false) ? __452043855233((l_a___0 & 255), (48 & 255)) : ((__60__612813005361(97, l_a___0) ? __60__612813005361(l_a___0, 102) : false) ? __43328586896(10, __452043855233((l_a___0 & 255), (97 & 255))) : ((__60__612813005361(65, l_a___0) ? __60__612813005361(l_a___0, 70) : false) ? __43328586896(10, __452043855233((l_a___0 & 255), (65 & 255))) : c____307())))
// try-take-keen-identifier file:///home/andy/games/keen/lib/private/parse-util.keen 49:1
const try__45take__45keen__45identifier21925645 = l_iter___1 => {
	const l_start___0 = pos1571951761(l_iter___1)
	const l_state___2 = new4107584700(global__45hash__45seed2818300139())
	if (try__45take__45initial__45identifier__45char1268357454(l_iter___1, l_state___2)) {
		x_loop___0: while (true){
			if (try__45take__45one__45identifier__45char1055838293(l_iter___1, l_state___2)) {
				continue
			} else {
				break  x_loop___0
			}
		}
		return to__45symbol__45with__45hash3990775216(slice__45from3681434959(l_iter___1, l_start___0), finish1244432994(l_state___2))
	} else {
		return c____307()
	}
}
// try-take-initial-identifier-char file:///home/andy/games/keen/lib/private/parse-util.keen 55:1
const try__45take__45initial__45identifier__45char1268357454 = (l_iter___1, l_state___3) => {
	const l_temp___0 = peek3964113808(l_iter___1)
	const l_x___2 = l_temp___0
	if ((((typeof l_temp___0) === "number") ? is__45initial__45single__45byte__45identifier__45char1025011306(l_x___2) : false)) {
		hash1274811147(take__45next857232194(l_iter___1), l_state___3)
		return true
	} else {
		return try__45take__45unicode__45identifier__45char2806610361(l_iter___1, l_state___3)
	}
}
// try-take-one-identifier-char file:///home/andy/games/keen/lib/private/parse-util.keen 61:1
const try__45take__45one__45identifier__45char1055838293 = (l_iter___1, l_state___3) => {
	const l_temp___0 = peek3964113808(l_iter___1)
	const l_x___2 = l_temp___0
	if ((((typeof l_temp___0) === "number") ? is__45single__45byte__45identifier__45char703386031(l_x___2) : false)) {
		hash1274811147(take__45next857232194(l_iter___1), l_state___3)
		return true
	} else {
		return try__45take__45unicode__45identifier__45char2806610361(l_iter___1, l_state___3)
	}
}
// try-take-unicode-identifier-char file:///home/andy/games/keen/lib/private/parse-util.keen 68:1
const try__45take__45unicode__45identifier__45char2806610361 = (l_iter___1, l_state___5) => {
	const l_temp___0 = peek3964113808(l_iter___1)
	const l_p___2 = l_temp___0
	if ((((typeof l_temp___0) === "number") ? is__45utf8__45initial__45or__45continue__45code3837450180(l_p___2) : false)) {
		const l_before___3 = pos1571951761(l_iter___1)
		const l_x___4 = must__45take__45one__45unicode__45char991103382(l_iter___1)
		if (is__45allowed__45unicode__45identifier__45char3252564989(l_x___4)) {
			hash1675971822(slice__45from3681434959(l_iter___1, l_before___3), l_state___5)
			return true
		} else {
			set__45pos3110347446(l_iter___1, l_before___3)
			return false
		}
	} else {
		return false
	}
}
// is-keen-identifier file:///home/andy/games/keen/lib/private/parse-util.keen 80:1
const is__45keen__45identifier3644865481 = l_a___1 => {
	let l_iter___0
	return ((l_iter___0 = begin3945520355(l_a___1)) , ((try__45take__45keen__45identifier21925645(l_iter___0) instanceof symbol3223697568) ? is__45at__45end2461033736(l_iter___0) : false))
}
// is-initial-single-byte-identifier-char file:///home/andy/games/keen/lib/private/parse-util.keen 84:1
const is__45initial__45single__45byte__45identifier__45char1025011306 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((((((((((((((x_matched___0 === 97) || (x_matched___0 === 98)) || (x_matched___0 === 99)) || (x_matched___0 === 100)) || (x_matched___0 === 101)) || (x_matched___0 === 102)) || (x_matched___0 === 103)) || (x_matched___0 === 104)) || (x_matched___0 === 105)) || (x_matched___0 === 106)) || (x_matched___0 === 107)) || (x_matched___0 === 108)) || (x_matched___0 === 109)) ? true : ((((((((((((((x_matched___0 === 110) || (x_matched___0 === 111)) || (x_matched___0 === 112)) || (x_matched___0 === 113)) || (x_matched___0 === 114)) || (x_matched___0 === 115)) || (x_matched___0 === 116)) || (x_matched___0 === 117)) || (x_matched___0 === 118)) || (x_matched___0 === 119)) || (x_matched___0 === 120)) || (x_matched___0 === 121)) || (x_matched___0 === 122)) ? true : ((((((((((((((x_matched___0 === 65) || (x_matched___0 === 66)) || (x_matched___0 === 67)) || (x_matched___0 === 68)) || (x_matched___0 === 69)) || (x_matched___0 === 70)) || (x_matched___0 === 71)) || (x_matched___0 === 72)) || (x_matched___0 === 73)) || (x_matched___0 === 74)) || (x_matched___0 === 75)) || (x_matched___0 === 76)) || (x_matched___0 === 77)) ? true : ((((((((((((((x_matched___0 === 78) || (x_matched___0 === 79)) || (x_matched___0 === 80)) || (x_matched___0 === 81)) || (x_matched___0 === 82)) || (x_matched___0 === 83)) || (x_matched___0 === 84)) || (x_matched___0 === 85)) || (x_matched___0 === 86)) || (x_matched___0 === 87)) || (x_matched___0 === 88)) || (x_matched___0 === 89)) || (x_matched___0 === 90)) ? true : ((x_matched___0 === 95) ? true : false))))))
}
// is-single-byte-identifier-char file:///home/andy/games/keen/lib/private/parse-util.keen 93:1
const is__45single__45byte__45identifier__45char703386031 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((((((((((((((x_matched___0 === 97) || (x_matched___0 === 98)) || (x_matched___0 === 99)) || (x_matched___0 === 100)) || (x_matched___0 === 101)) || (x_matched___0 === 102)) || (x_matched___0 === 103)) || (x_matched___0 === 104)) || (x_matched___0 === 105)) || (x_matched___0 === 106)) || (x_matched___0 === 107)) || (x_matched___0 === 108)) || (x_matched___0 === 109)) ? true : ((((((((((((((x_matched___0 === 110) || (x_matched___0 === 111)) || (x_matched___0 === 112)) || (x_matched___0 === 113)) || (x_matched___0 === 114)) || (x_matched___0 === 115)) || (x_matched___0 === 116)) || (x_matched___0 === 117)) || (x_matched___0 === 118)) || (x_matched___0 === 119)) || (x_matched___0 === 120)) || (x_matched___0 === 121)) || (x_matched___0 === 122)) ? true : ((((((((((((((x_matched___0 === 65) || (x_matched___0 === 66)) || (x_matched___0 === 67)) || (x_matched___0 === 68)) || (x_matched___0 === 69)) || (x_matched___0 === 70)) || (x_matched___0 === 71)) || (x_matched___0 === 72)) || (x_matched___0 === 73)) || (x_matched___0 === 74)) || (x_matched___0 === 75)) || (x_matched___0 === 76)) || (x_matched___0 === 77)) ? true : ((((((((((((((x_matched___0 === 78) || (x_matched___0 === 79)) || (x_matched___0 === 80)) || (x_matched___0 === 81)) || (x_matched___0 === 82)) || (x_matched___0 === 83)) || (x_matched___0 === 84)) || (x_matched___0 === 85)) || (x_matched___0 === 86)) || (x_matched___0 === 87)) || (x_matched___0 === 88)) || (x_matched___0 === 89)) || (x_matched___0 === 90)) ? true : (((((((((((x_matched___0 === 48) || (x_matched___0 === 49)) || (x_matched___0 === 50)) || (x_matched___0 === 51)) || (x_matched___0 === 52)) || (x_matched___0 === 53)) || (x_matched___0 === 54)) || (x_matched___0 === 55)) || (x_matched___0 === 56)) || (x_matched___0 === 57)) ? true : (((x_matched___0 === 45) || (x_matched___0 === 95)) ? true : false)))))))
}
// is-allowed-unicode-identifier-char file:///home/andy/games/keen/lib/private/parse-util.keen 111:1
const is__45allowed__45unicode__45identifier__45char3252564989 = l_a___0 =>
	is__45allowed__45unicode__45identifier__45char940009271((l_a___0 >>> 0))
// is-allowed-unicode-identifier-char file:///home/andy/games/keen/lib/private/parse-util.keen 113:1
const is__45allowed__45unicode__45identifier__45char940009271 = l_a___0 =>
	((((__60__612052354958(192, l_a___0) ? __60__612052354958(l_a___0, 255) : false) ? __33__61883178196(l_a___0, (215 >>> 0)) : false) ? __33__61883178196(l_a___0, (247 >>> 0)) : false) ? true : ((__60__612052354958(880, l_a___0) ? __60__612052354958(l_a___0, 1023) : false) ? true : ((__60__612052354958(1024, l_a___0) ? __60__612052354958(l_a___0, 1279) : false) ? true : ((__60__612052354958(1425, l_a___0) ? __60__612052354958(l_a___0, 1524) : false) ? true : ((__60__612052354958(1536, l_a___0) ? __60__612052354958(l_a___0, 1791) : false) ? true : (((__60__612052354958(2308, l_a___0) ? __60__612052354958(l_a___0, 2431) : false) ? (!(__60__612052354958(2404, l_a___0) ? __60__612052354958(l_a___0, 2417) : false)) : false) ? true : ((__60__612052354958(2437, l_a___0) ? __60__612052354958(l_a___0, 2531) : false) ? true : ((__60__612052354958(2561, l_a___0) ? __60__612052354958(l_a___0, 2654) : false) ? true : ((__60__612052354958(2689, l_a___0) ? __60__612052354958(l_a___0, 2815) : false) ? true : ((__60__612052354958(2946, l_a___0) ? __60__612052354958(l_a___0, 3066) : false) ? true : ((__60__612052354958(3072, l_a___0) ? __60__612052354958(l_a___0, 3199) : false) ? true : ((__60__612052354958(3840, l_a___0) ? __60__612052354958(l_a___0, 4058) : false) ? true : ((__60__612052354958(7680, l_a___0) ? __60__612052354958(l_a___0, 7935) : false) ? true : ((__60__612052354958(12353, l_a___0) ? __60__612052354958(l_a___0, 12447) : false) ? true : ((__60__612052354958(12448, l_a___0) ? __60__612052354958(l_a___0, 12543) : false) ? true : ((__60__612052354958(19968, l_a___0) ? __60__612052354958(l_a___0, 40959) : false) ? true : ((__60__612052354958(44032, l_a___0) ? __60__612052354958(l_a___0, 55203) : false) ? true : false)))))))))))))))))
// next64 file:///home/andy/games/keen/lib/random/secure-random.keen 40:1
const next64290399532 = l_ignore___1 => {
	const l_xs___0 = list__45new2126093138(c____283())
	;(void _global.crypto.getRandomValues(l_xs___0))
	return bits__45cat4221119060(subscript742887843(l_xs___0, 0), subscript742887843(l_xs___0, 1))
}
// ..@(nat64) file:///home/andy/games/keen/lib/range.keen 15:1
const __46__462461896508 = (l_low___0, l_high___1) => {
	if ((!__60__61829986477(l_low___0, l_high___1))) {
		throw new (error4175136409)(c____334())
	}
	return new (range2135443336)(l_low___0, l_high___1)
}
// ..@(nat32) file:///home/andy/games/keen/lib/range.keen 15:1
const __46__462451799117 = (l_low___0, l_high___1) => {
	if ((!__60__612052354958(l_low___0, l_high___1))) {
		throw new (error4175136409)(c____334())
	}
	return new (range4148113190)(l_low___0, l_high___1)
}
// difference@(nat32) file:///home/andy/games/keen/lib/range.keen 28:1
const difference279527796 = (l_a___0, l_b___1) =>
	__45997287195(l_a___0, l_b___1)
// size@(nat32) file:///home/andy/games/keen/lib/range.keen 35:1
const size3916398147 = l_a___0 =>
	difference279527796(l_a___0.high, l_a___0.low)
// some@(nat32) file:///home/andy/games/keen/lib/range.keen 42:1
const some151833221 = (l_a___1, l_f___3) => {
	let l_cur___0 = l_a___1.low
	while (true){
		const l_temp___2 = (() => {
			if (__62__61724884600(l_cur___0, l_a___1.high)) {
				return false
			} else {
				if (l_f___3(l_cur___0)) {
					return true
				} else {
					l_cur___0 = next2896928830(l_cur___0)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___2
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(nat64) file:///home/andy/games/keen/lib/range.keen 42:1
const some2014043021 = (l_a___1, l_f___3) => {
	let l_cur___0 = l_a___1.low
	while (true){
		const l_temp___2 = (() => {
			if (__62__61483908731(l_cur___0, l_a___1.high)) {
				return false
			} else {
				if (l_f___3(l_cur___0)) {
					return true
				} else {
					l_cur___0 = next2614000486(l_cur___0)
					return c____307()
				}
			}
		})()
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none2082914084)) {
			continue
		} else {
			if (((typeof x_matched___0) === "boolean")) {
				return l_temp___2
			} else {
				return _unreachable()
			}
		}
	}
}
// in@(nat32) file:///home/andy/games/keen/lib/range.keen 96:1
const in2170356364 = (l_a___1, l_b___0) =>
	(__60__612052354958(l_b___0.low, l_a___1) ? __602180318207(l_a___1, l_b___0.high) : false)
// to-range@(char8 array array-view) file:///home/andy/games/keen/lib/range.keen 107:1
const to__45range3879991102 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = l_range___2.low) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "number") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end4294105604) ? to__45index879965573(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index879965573(l_col___3, l_range___2.high)
	if ((!__60__612052354958(l_low___0, l_high___4))) {
		throw new (index__45too__45big3896995977)(l_low___0, l_high___4)
	}
	return __46__462451799117(l_low___0, l_high___4)
}
// to-range@(symbol buffer-view) file:///home/andy/games/keen/lib/range.keen 107:1
const to__45range1612248931 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = l_range___2.low) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "number") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end4294105604) ? to__45index955250022(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index955250022(l_col___3, l_range___2.high)
	if ((!__60__612052354958(l_low___0, l_high___4))) {
		throw new (index__45too__45big3896995977)(l_low___0, l_high___4)
	}
	return __46__462451799117(l_low___0, l_high___4)
}
// to-range@((symbol, string) tuple2 array-view) file:///home/andy/games/keen/lib/range.keen 107:1
const to__45range1701294840 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = l_range___2.low) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "number") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end4294105604) ? to__45index775543287(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index775543287(l_col___3, l_range___2.high)
	if ((!__60__612052354958(l_low___0, l_high___4))) {
		throw new (index__45too__45big3896995977)(l_low___0, l_high___4)
	}
	return __46__462451799117(l_low___0, l_high___4)
}
// to-range@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer-view) file:///home/andy/games/keen/lib/range.keen 107:1
const to__45range3476447177 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = l_range___2.low) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "number") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end4294105604) ? to__45index2306530706(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index2306530706(l_col___3, l_range___2.high)
	if ((!__60__612052354958(l_low___0, l_high___4))) {
		throw new (index__45too__45big3896995977)(l_low___0, l_high___4)
	}
	return __46__462451799117(l_low___0, l_high___4)
}
// to-range@((symbol, string) tuple2 buffer-view) file:///home/andy/games/keen/lib/range.keen 107:1
const to__45range844668402 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = l_range___2.low) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "number") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end4294105604) ? to__45index3249306317(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index3249306317(l_col___3, l_range___2.high)
	if ((!__60__612052354958(l_low___0, l_high___4))) {
		throw new (index__45too__45big3896995977)(l_low___0, l_high___4)
	}
	return __46__462451799117(l_low___0, l_high___4)
}
// to-range@((symbol, json) tuple2 array-view) file:///home/andy/games/keen/lib/range.keen 107:1
const to__45range3642056330 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = l_range___2.low) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "number") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end4294105604) ? to__45index27901025(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index27901025(l_col___3, l_range___2.high)
	if ((!__60__612052354958(l_low___0, l_high___4))) {
		throw new (index__45too__45big3896995977)(l_low___0, l_high___4)
	}
	return __46__462451799117(l_low___0, l_high___4)
}
// to-range@((symbol, json) tuple2 buffer-view) file:///home/andy/games/keen/lib/range.keen 107:1
const to__45range1472384003 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = l_range___2.low) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "number") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end4294105604) ? to__45index1529606635(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index1529606635(l_col___3, l_range___2.high)
	if ((!__60__612052354958(l_low___0, l_high___4))) {
		throw new (index__45too__45big3896995977)(l_low___0, l_high___4)
	}
	return __46__462451799117(l_low___0, l_high___4)
}
// to-range@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view) file:///home/andy/games/keen/lib/range.keen 107:1
const to__45range1748821155 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = l_range___2.low) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "number") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end4294105604) ? to__45index512393638(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index512393638(l_col___3, l_range___2.high)
	if ((!__60__612052354958(l_low___0, l_high___4))) {
		throw new (index__45too__45big3896995977)(l_low___0, l_high___4)
	}
	return __46__462451799117(l_low___0, l_high___4)
}
// to-range@(json buffer-view) file:///home/andy/games/keen/lib/range.keen 107:1
const to__45range3400438345 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = l_range___2.low) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "number") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end4294105604) ? to__45index1589016340(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index1589016340(l_col___3, l_range___2.high)
	if ((!__60__612052354958(l_low___0, l_high___4))) {
		throw new (index__45too__45big3896995977)(l_low___0, l_high___4)
	}
	return __46__462451799117(l_low___0, l_high___4)
}
// to-range@(char8 array-view) file:///home/andy/games/keen/lib/range.keen 107:1
const to__45range3474233252 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = l_range___2.low) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "number") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end4294105604) ? to__45index3286892211(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index3286892211(l_col___3, l_range___2.high)
	if ((!__60__612052354958(l_low___0, l_high___4))) {
		throw new (index__45too__45big3896995977)(l_low___0, l_high___4)
	}
	return __46__462451799117(l_low___0, l_high___4)
}
// ~~ file:///home/andy/games/keen/lib/string.keen 36:1
const __126__1263071226195 = (l_a___0, l_b___1) =>
	to1480872378(__126__1261391650858(l_a___0.chars, l_b___1.chars))
// interpolate-value@(int64) file:///home/andy/games/keen/lib/string.keen 45:1
const interpolate__45value2106628116 = l_a___0 =>
	show1675753289(l_a___0)
// interpolate-value@(float64) file:///home/andy/games/keen/lib/string.keen 45:1
const interpolate__45value852213350 = l_a___0 =>
	show324183139(l_a___0)
// interpolate-value@(nat32) file:///home/andy/games/keen/lib/string.keen 45:1
const interpolate__45value4064333482 = l_a___0 =>
	show1501530295(l_a___0)
// interpolate-value@(log-level) file:///home/andy/games/keen/lib/string.keen 45:1
const interpolate__45value1949319188 = l_a___0 =>
	show243154761(l_a___0)
// interpolate-value@(string) file:///home/andy/games/keen/lib/string.keen 45:1
const interpolate__45value844224645 = l_a___0 =>
	show1805608510(l_a___0)
// interpolate-value@(char8) file:///home/andy/games/keen/lib/string.keen 45:1
const interpolate__45value192594778 = l_a___0 =>
	show1765102631(l_a___0)
// interpolate-value@(bool) file:///home/andy/games/keen/lib/string.keen 45:1
const interpolate__45value1500202720 = l_a___0 =>
	show432052805(l_a___0)
// interpolate-value@(json) file:///home/andy/games/keen/lib/string.keen 45:1
const interpolate__45value1896620200 = l_a___0 =>
	show2456088877(l_a___0)
// interpolate-value@(nat64) file:///home/andy/games/keen/lib/string.keen 45:1
const interpolate__45value2107274002 = l_a___0 =>
	show1895746751(l_a___0)
// interpolate file:///home/andy/games/keen/lib/string.keen 47:1
const interpolate3208339971 = l_parts___0 =>
	join1454084320(l_parts___0)
// interpolate file:///home/andy/games/keen/lib/string.keen 51:1
const interpolate1072222187 = l_parts___0 =>
	to3382899672(interpolate3208339971(l_parts___0))
// any file:///home/andy/games/keen/lib/string.keen 59:1
const any2694317429 = l_a___0 =>
	any3881793921(to2628429697(l_a___0))
// size file:///home/andy/games/keen/lib/string.keen 62:1
const size3209178433 = l_a___0 =>
	to2628429697(l_a___0).length
// == file:///home/andy/games/keen/lib/string.keen 65:1
const __61__612506082126 = (l_a___0, l_b___1) =>
	__61__612387200646(l_a___0.chars, l_b___1.chars)
// <=> file:///home/andy/games/keen/lib/string.keen 67:1
const __60__61__623889046310 = (l_a___0, l_b___1) =>
	__60__61__622102854984(l_a___0.chars, l_b___1.chars)
// hash file:///home/andy/games/keen/lib/string.keen 75:1
const hash954068865 = (l_a___0, l_state___1) =>
	hash3202929233(l_a___0.chars, l_state___1)
// hash file:///home/andy/games/keen/lib/string.keen 77:1
const hash1274811147 = (l_a___0, l_state___1) =>
	hash3608937292((l_a___0 & 255), l_state___1)
// to file:///home/andy/games/keen/lib/string.keen 93:1
const to2628429697 = l_a___0 =>
	l_a___0.chars
// to file:///home/andy/games/keen/lib/string.keen 97:1
const to1480872378 = l_a___0 =>
	new (string2245870778)(l_a___0)
// to file:///home/andy/games/keen/lib/string.keen 99:1
const to1851091310 = l_a___0 =>
	to1480872378(to3613751888(l_a___0))
// show file:///home/andy/games/keen/lib/string.keen 119:1
const show432052805 = l_a___0 =>
	(l_a___0 ? c____377() : c____378())
// to file:///home/andy/games/keen/lib/string.keen 123:1
const to199670014 = l_a___0 =>
	new (string2245870778)(list__45new3709128537(new (Uint8Array)([l_a___0])))
// show file:///home/andy/games/keen/lib/string.keen 125:1
const show1765102631 = l_a___0 =>
	(is__45valid__45single__45byte__45character2123602942(l_a___0) ? to199670014(l_a___0) : interpolate3208339971([c____491(), interpolate__45value844224645(to__45hex271842426(BigInt(l_a___0)))]))
// is-valid-single-byte-character file:///home/andy/games/keen/lib/string.keen 146:1
const is__45valid__45single__45byte__45character2123602942 = l_a___0 =>
	__601204488406((l_a___0 & 255), 128)
// show file:///home/andy/games/keen/lib/string.keen 153:1
const show1501530295 = l_a___0 =>
	show1895746751(BigInt(l_a___0))
// show file:///home/andy/games/keen/lib/string.keen 157:1
const show1895746751 = l_a___0 =>
	to__45base483885122(l_a___0, 10n)
// js-to-string file:///home/andy/games/keen/lib/string.keen 160:1
const js__45to__45string314553408 = l_a___0 =>
	to2585906292(String3131385714()(l_a___0))
// digit-to-string file:///home/andy/games/keen/lib/string.keen 163:1
const digit__45to__45string3223030980 = l_a___0 =>
	to199670014(digit__45to__45char3584658501(l_a___0))
// digit-to-char file:///home/andy/games/keen/lib/string.keen 165:1
const digit__45to__45char3584658501 = l_a___0 => {
	const x_matched___0 = l_a___0
	switch (x_matched___0) {
		case 0n:{
			return 48
		}
		case 1n:{
			return 49
		}
		case 2n:{
			return 50
		}
		case 3n:{
			return 51
		}
		case 4n:{
			return 52
		}
		case 5n:{
			return 53
		}
		case 6n:{
			return 54
		}
		case 7n:{
			return 55
		}
		case 8n:{
			return 56
		}
		case 9n:{
			return 57
		}
		case 10n:{
			return 97
		}
		case 11n:{
			return 98
		}
		case 12n:{
			return 99
		}
		case 13n:{
			return 100
		}
		case 14n:{
			return 101
		}
		case 15n:{
			return 102
		}
		default:{
			throw new (unreachable754248293)()
		}
	}
}
// to-hex file:///home/andy/games/keen/lib/string.keen 204:1
const to__45hex271842426 = l_a___0 =>
	to__45base483885122(l_a___0, 16n)
// to-base file:///home/andy/games/keen/lib/string.keen 207:1
const to__45base483885122 = (l_a___0, l_base___1) =>
	(__60384615097(l_a___0, l_base___1) ? digit__45to__45string3223030980(l_a___0) : __126__1263071226195(to__45base483885122(__471727432342(l_a___0, l_base___1), l_base___1), digit__45to__45string3223030980(__373577318653(l_a___0, l_base___1))))
// show file:///home/andy/games/keen/lib/string.keen 213:1
const show1805608510 = l_a___0 =>
	l_a___0
// show file:///home/andy/games/keen/lib/string.keen 222:1
const show1675753289 = l_a___0 => {
	let l_s___1
	return ((l_a___0 === -9223372036854775808n) ? c____372() : ((l_s___1 = interpolate3208339971([interpolate__45value2107274002(abs351887427(l_a___0))])) , (__603526412653(l_a___0, 0n) ? interpolate3208339971([c____347(), interpolate__45value844224645(l_s___1)]) : l_s___1)))
}
// show file:///home/andy/games/keen/lib/string.keen 231:1
const show324183139 = l_a___0 =>
	(Object.is(l_a___0, -0) ? c____371() : js__45to__45string314553408(to958312080(l_a___0)))
// some file:///home/andy/games/keen/lib/string.keen 244:1
const some2526691981 = (l_a___0, l_f___1) =>
	some944888123(to2628429697(l_a___0), l_f___1)
// begin file:///home/andy/games/keen/lib/string.keen 251:1
const begin3945520355 = l_a___0 =>
	begin1051078769(to2628429697(l_a___0))
// end file:///home/andy/games/keen/lib/string.keen 253:1
const end3612451581 = l_a___0 =>
	end602442261(to2628429697(l_a___0))
// with-block file:///home/andy/games/keen/lib/string.keen 256:1
const with__45block848734846 = (l_a___0, l_f___1) =>
	to1480872378(with__45block13365476(build252249843(l_a___0["size-hint"]), l_f___1))
// join file:///home/andy/games/keen/lib/string.keen 261:1
const join1454084320 = l_parts___0 =>
	join2531354735(c____322(), l_parts___0)
// join file:///home/andy/games/keen/lib/string.keen 264:1
const join2531354735 = (l_joiner___1, l_parts___0) => {
	let x_matched___0
	return ((x_matched___0 = l_parts___0.length) , ((x_matched___0 === 0) ? c____322() : ((x_matched___0 === 1) ? subscript431625604(l_parts___0, 0) : join__45with__45multiple__45parts3378029331(l_joiner___1, l_parts___0))))
}
// join-with-multiple-parts file:///home/andy/games/keen/lib/string.keen 272:1
const join__45with__45multiple__45parts3378029331 = (l_joiner___3, l_parts___1) => {
	const l_res__45size___0 = __431111513593(sum1884214775(l_parts___1, l_it___2 =>
				size3209178433(l_it___2)), __42544875948(size3209178433(l_joiner___3), __45997287195(l_parts___1.length, 1)))
	const l_res___4 = new (Uint8Array)(l_res__45size___0)
	let l_out__45i___5 = 0
	let x_cur___0 = 0
	let x_end___1 = l_parts___1.length
	while ((x_cur___0 < x_end___1)){
		const l_i___6 = x_cur___0
		if (__33__61883178196(l_i___6, 0)) {
			set__45subscript384460835(l_res___4, __46__462451799117(l_out__45i___5, __431111513593(l_out__45i___5, size3209178433(l_joiner___3))), l_joiner___3.chars)
			l_out__45i___5 = __431111513593(l_out__45i___5, size3209178433(l_joiner___3))
		}
		const l_part___7 = subscript431625604(l_parts___1, l_i___6).chars
		set__45subscript384460835(l_res___4, __46__462451799117(l_out__45i___5, __431111513593(l_out__45i___5, l_part___7.length)), l_part___7)
		l_out__45i___5 = __431111513593(l_out__45i___5, l_part___7.length)
		x_cur___0 = (x_cur___0 + 1)
	}
	if ((!(l_out__45i___5 === l_res___4.length))) {
		throw new (error4175136409)(c____333())
	}
	return to1480872378(cast__45immutable3953210833(l_res___4))
}
// show file:///home/andy/games/keen/lib/string/unicode.keen 16:1
const show1630551560 = l_a___0 =>
	interpolate3208339971([c____441(), interpolate__45value844224645(to__45hex271842426(BigInt(l_a___0.character))), c____442()])
// show file:///home/andy/games/keen/lib/string/unicode.keen 19:1
const show3444337243 = l_ignore___0 =>
	c____362()
// to file:///home/andy/games/keen/lib/string/unicode.keen 26:1
const to2791919658 = l_a___0 =>
	to1480872378(to1179601554(l_a___0))
// to file:///home/andy/games/keen/lib/string/unicode.keen 30:1
const to221561981 = l_a___2 =>
	with__45block2388733551(c____556(), l_out___0 => {
			const l_iter___1 = begin3945520355(l_a___2)
			x_loop___0: while (true){
				const l_temp___3 = try__45unicode__45decode__45one2597606276(l_iter___1)
				const l_x___4 = l_temp___3
				if (((typeof l_temp___3) === "number")) {
					__126__613663841555(l_out___0, l_x___4)
					continue
				} else {
					break  x_loop___0
				}
			}
		})
// to file:///home/andy/games/keen/lib/string/unicode.keen 34:1
const to739953591 = l_a___1 =>
	with__45block848734846(c____556(), l_out___0 =>
			for__45loop996446816(l_a___1, l_x___2 =>
					__126__126__612461227494(l_out___0, to__45array__45view3595367460(to1179601554(l_x___2)))))
// to file:///home/andy/games/keen/lib/string/unicode.keen 39:1
const to1179601554 = l_a___1 => {
	const l_n___0 = (l_a___1 >>> 0)
	if (__602180318207(l_n___0, __60__602633832601(1, 7))) {
		return list__45new3709128537(new (Uint8Array)([to2926438601(l_n___0)]))
	} else {
		if (__602180318207(l_n___0, __60__602633832601(1, 11))) {
			return list__45new3709128537(new (Uint8Array)([to2926438601(((__62__622657409940(l_n___0, 6) | (192 >>> 0)) >>> 0)), ((last__456__45bits224712292(l_n___0) | 128) & 255)]))
		} else {
			if (__602180318207(l_n___0, __60__602633832601(1, 16))) {
				if (in2170356364(l_n___0, __46__462451799117(55296, 57344))) {
					throw new (invalid__45unicode__45character3158871053)(l_n___0)
				}
				return list__45new3709128537(new (Uint8Array)([to2926438601(((__62__622657409940(l_n___0, 12) | 224) >>> 0)), ((last__456__45bits224712292(__62__622657409940(l_n___0, 6)) | 128) & 255), ((last__456__45bits224712292(l_n___0) | 128) & 255)]))
			} else {
				if ((!__602180318207(l_n___0, 1114112))) {
					throw new (invalid__45unicode__45character3158871053)(l_n___0)
				}
				return list__45new3709128537(new (Uint8Array)([to2926438601(((__62__622657409940(l_n___0, 18) | 240) >>> 0)), ((last__456__45bits224712292(__62__622657409940(l_n___0, 12)) | 128) & 255), ((last__456__45bits224712292(__62__622657409940(l_n___0, 6)) | 128) & 255), ((last__456__45bits224712292(l_n___0) | 128) & 255)]))
			}
		}
	}
}
// to file:///home/andy/games/keen/lib/string/unicode.keen 57:1
const to2926438601 = l_a___0 =>
	(to3641552316(l_a___0) & 255)
// try-unicode-decode-one file:///home/andy/games/keen/lib/string/unicode.keen 60:1
const try__45unicode__45decode__45one2597606276 = l_a___0 => {
	try {
		return next__45char321918046337(l_a___0)
	} catch (x_error___0) {
		if ((x_error___0 instanceof iterator__45out__45of__45bounds2781000628)) {
			return c____307()
		} else {
			throw x_error___0
		}
	}
}
// next-char32 file:///home/andy/games/keen/lib/string/unicode.keen 65:1
const next__45char321918046337 = l_iter___1 => {
	let l_temp___8, l_temp___11
	const l_first__45char___0 = take__45next857232194(l_iter___1)
	if (is__45valid__45single__45byte__45character2123602942(l_first__45char___0)) {
		return (l_first__45char___0 >>> 0)
	} else {
		if ((!is__45first__45byte3563154400(l_first__45char___0))) {
			throw new (unicode__45decode__45error3218288620)()
		}
		let l_res___2 = to1597812159(BigInt(l_first__45char___0))
		let l_flag___3 = __60__60929357842((l_first__45char___0 & 255), 1)
		const l_result___4 = first628900346(__46__462461896508(1n, 4n), l_i___5 => {
				const l_next__45char___6 = (() => {
					const l_member2___7 = try__45take__45next872227179(l_iter___1)
					const x_matched___0 = l_member2___7
					if ((x_matched___0 instanceof none2082914084)) {
						throw new (unicode__45decode__45error3218288620)()
					} else {
						if (((typeof x_matched___0) === "number")) {
							return ((l_temp___8 = l_member2___7) , l_temp___8)
						} else {
							return _unreachable()
						}
					}
				})()
				const l_code___9 = (l_next__45char___6 & 255)
				if ((!((l_code___9 & 192) === 128))) {
					throw new (unicode__45decode__45error3218288620)()
				}
				l_res___2 = ((__60__602633832601(l_res___2, 6) | (last__456__45bits224712292(to1597812159(BigInt(l_code___9))) >>> 0)) >>> 0)
				l_flag___3 = __60__60929357842(l_flag___3, 1)
				return (((l_flag___3 & 128) === 0) ? (() => {
					if ((!bits__45intersect129871475(l_res___2, ((~mask207726365(__45399441368(l_i___5, 1n))) >>> 0)))) {
						throw new (unicode__45decode__45error3218288620)()
					}
					l_res___2 = ((l_res___2 & mask207726365(l_i___5)) >>> 0)
					if ((!is__45valid__45unicode__45character3039684439(l_res___2))) {
						throw new (unicode__45decode__45error3218288620)()
					}
					return (l_res___2 >>> 0)
				})() : c____307())
			})
		const l_member2___10 = l_result___4
		const x_matched___1 = l_member2___10
		if ((x_matched___1 instanceof none2082914084)) {
			throw new (unicode__45decode__45error3218288620)()
		} else {
			if (((typeof x_matched___1) === "number")) {
				return ((l_temp___11 = l_member2___10) , l_temp___11)
			} else {
				return _unreachable()
			}
		}
	}
}
// mask file:///home/andy/games/keen/lib/string/unicode.keen 92:1
const mask207726365 = l_i___0 => {
	const x_matched___0 = l_i___0
	switch (x_matched___0) {
		case 0n:{
			return __45997287195(__60__602633832601(1, 7), 1)
		}
		case 1n:{
			return __45997287195(__60__602633832601(1, 11), 1)
		}
		case 2n:{
			return __45997287195(__60__602633832601(1, 16), 1)
		}
		case 3n:{
			return __45997287195(__60__602633832601(1, 21), 1)
		}
		default:{
			throw new (unreachable754248293)()
		}
	}
}
// last-6-bits file:///home/andy/games/keen/lib/string/unicode.keen 105:1
const last__456__45bits224712292 = l_a___0 =>
	((l_a___0 & 255) & 63)
// is-first-byte file:///home/andy/games/keen/lib/string/unicode.keen 110:1
const is__45first__45byte3563154400 = l_a___0 =>
	has__45all__45bits3947686905((l_a___0 & 255), 192)
// is-valid-unicode-character file:///home/andy/games/keen/lib/string/unicode.keen 119:1
const is__45valid__45unicode__45character3039684439 = l_a___0 =>
	(__602180318207(l_a___0, 55296) ? true : in2170356364(l_a___0, __46__462451799117(57344, 1114112)))
// lower-case file:///home/andy/games/keen/lib/string/util.keen 6:1
const lower__45case3687683625 = l_a___0 =>
	to1480872378(map3409934236(l_a___0, l_it___1 =>
				lower__45case1901211438(l_it___1)))
// lower-case file:///home/andy/games/keen/lib/string/util.keen 9:1
const lower__45case1901211438 = l_a___1 => {
	let l_diff___0
	return ((l_diff___0 = (((l_a___1 & 255) - (65 & 255)) & 255)) , (__601204488406(l_diff___0, 26) ? (__43328586896((97 & 255), l_diff___0) & 255) : l_a___1))
}
// memoizer-key file:///home/andy/games/keen/lib/symbol.keen 23:1
const memoizer__45key3970129714 = l_a___0 =>
	new (symbol__45key1342669151)(l_a___0["symbol-seeded-hash"], to__45array__45view3595367460(l_a___0["symbol-chars"]))
// == file:///home/andy/games/keen/lib/symbol.keen 25:1
const __61__613308602880 = (l_a___0, l_b___1) =>
	__61__612768477169(l_a___0.chars, l_b___1.chars)
// == file:///home/andy/games/keen/lib/symbol.keen 31:1
const __61__61718055455 = (l_a___0, l_b___1) =>
	(l_a___0 === l_b___1)
// <=> file:///home/andy/games/keen/lib/symbol.keen 35:1
const __60__61__621591138034 = (l_a___0, l_b___1) =>
	__60__61__623889046310(to649144722(l_a___0), to649144722(l_b___1))
// to file:///home/andy/games/keen/lib/symbol.keen 38:1
const to649144722 = l_a___0 =>
	to1480872378(to1563782940(l_a___0))
// to file:///home/andy/games/keen/lib/symbol.keen 40:1
const to1563782940 = l_a___0 =>
	l_a___0["symbol-chars"]
// to file:///home/andy/games/keen/lib/symbol.keen 43:1
const to2584131937 = l_a___0 =>
	to3156435098(to__45array__45view3595367460(to2628429697(l_a___0)))
// to file:///home/andy/games/keen/lib/symbol.keen 45:1
const to3156435098 = l_a___0 =>
	to__45symbol__45with__45hash3990775216(l_a___0, seeded__45hash1371682609(l_a___0))
// to-symbol-with-hash file:///home/andy/games/keen/lib/symbol.keen 48:1
const to__45symbol__45with__45hash3990775216 = (l_a___1, l_hash___0) =>
	memoize2253388084(_varget_v16487008168078846746(), new (symbol__45key1342669151)(l_hash___0, l_a___1), l_it___2 =>
			new (symbol3223697568)(l_hash___0, deterministic__45hash788049781(l_a___1), to3613751888(l_a___1)))
// show file:///home/andy/games/keen/lib/symbol.keen 56:1
const show2656971875 = l_a___0 =>
	to649144722(l_a___0)
// hash file:///home/andy/games/keen/lib/symbol.keen 59:1
const hash2761836969 = (l_a___0, l_state___1) =>
	hash62702912(l_a___0["symbol-deterministic-hash"], l_state___1)
// to file:///home/andy/games/keen/lib/symbol.keen 66:1
const to1485125734 = l_a___0 =>
	to3382899672(to649144722(l_a___0))
// show file:///home/andy/games/keen/lib/test-util.keen 11:1
const show472558569 = l_a___0 =>
	interpolate3208339971([c____330(), interpolate__45value1896620200(l_a___0.a), c____331(), interpolate__45value1896620200(l_a___0.b)])
// show file:///home/andy/games/keen/lib/test-util.keen 16:1
const show698483114 = l_a___0 =>
	interpolate3208339971([c____330(), interpolate__45value1896620200(l_a___0.a), c____368(), interpolate__45value1896620200(l_a___0.b)])
// is-impl@(nat32) file:///home/andy/games/keen/lib/test-util.keen 20:1
const is__45impl1347765191 = (l_a___0, l_b___1) => {
	if ((!(l_a___0 === l_b___1))) {
		throw new (expected__45equal396653106)(to115318792(l_a___0), to115318792(l_b___1))
	}
}
// isnt-impl@(nat32) file:///home/andy/games/keen/lib/test-util.keen 24:1
const isnt__45impl103140893 = (l_a___0, l_b___1) => {
	if ((l_a___0 === l_b___1)) {
		throw new (expected__45not__45equal13879223)(to115318792(l_a___0), to115318792(l_b___1))
	}
}
const _varget_v17227413630337024875 = () => {
	if ((v17227413630337024875 === (void 0))) {
		v17227413630337024875 = next64290399532(c____304())
	}
	return v17227413630337024875
}
const _varget_v16487008168078846746 = () => {
	if ((v16487008168078846746 === (void 0))) {
		v16487008168078846746 = new3400181018()
	}
	return v16487008168078846746
}
const c____0 = _memoize(() =>
	new (TextEncoder)().encode("section.collapsible"))
const c____1 = _memoize(() =>
	new (TextEncoder)().encode(":scope > button"))
const c____2 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'query! section, \":scope > button\"'"))
const c____3 = _memoize(() =>
	new (TextEncoder)().encode("click"))
const c____4 = _memoize(() =>
	new (TextEncoder)().encode("collapsed"))
const c____5 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a.typeof == \"boolean\""))
const c____6 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a 'instanceof Array"))
const c____7 = _memoize(() =>
	new (TextEncoder)().encode("+::nat32"))
const c____8 = _memoize(() =>
	new (TextEncoder)().encode("Arithmetic operation can't return a correct value for the given inputs."))
const c____9 = _memoize(() =>
	new (TextEncoder)().encode("The index is bigger than the collection's size."))
const c____10 = _memoize(() =>
	new (TextEncoder)().encode("syntax-translate-row"))
const c____11 = _memoize(() =>
	new (TextEncoder)().encode("syntax-translate"))
const c____12 = _memoize(() =>
	new (TextEncoder)().encode(":root {\n\t/* Colors based on VSCode's \"Light+\" theme */\n\t--color-background-hover: #fff;\n\t--color-background-body: #e5e5e5;\n\t--color-background-content: #f3f3f3;\n\t--color-background-code: #fff;\n\t--color-button: #c06000;\n\t--color-code-comment: #007f1b;\n\t--color-code-function: #7a5d2d;\n\t--color-code-keyword: #b01cd6;\n\t--color-code-number: #00855b;\n\t--color-code-string: #a6131c;\n\t--color-code-type: #1b8097;\n\t--color-code-variable: #00187c;\n\t--color-danger: #ef4b53;\n\t--color-header: #000000;\n\t--color-faint: #80808080;\n\t--color-link: #006cad;\n\t--color-link-current: #402cad;\n\t--color-text: #000000;\n}\n\n/*\nCode classes match are those used in the LSP\nhttps://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#textDocument_semanticTokens\n*/\n.comment { color: var(--color-code-comment); }\n.enum, .interface, .namespace, .type, .typeParameter { color: var(--color-code-type); }\n.enumMember, .property { color: var(--color-code-property); }\n.function { color: var(--color-code-function); }\n.keyword, .modifier { font-weight: bold; color: var(--color-code-keyword); }\n.number { color: var(--color-code-number); }\n.parameter, .variable { color: var(--color-code-variable); }\n.string { color: var(--color-code-string); }\n.no-token { font-weight: light; color: var(--color-text); }\n\n@media (prefers-color-scheme: dark) {\n\t:root:not(.light-mode) {\n\t\t/* Must manually keep these in sync with `&.dark-mode` below */\n\t\t--color-background-hover: #000;\n\t\t--color-background-body: #3c3c3c;\n\t\t--color-background-content: #2d2d2d;\n\t\t--color-background-code: #1e1e1e;\n\t\t--color-button: #ffebbd;\n\t\t--color-code-comment: #69985a;\n\t\t--color-code-function: #dddbae;\n\t\t--color-code-keyword: #c687be;\n\t\t--color-code-number: #b5cdaa;\n\t\t--color-code-property: #43c3fb;\n\t\t--color-code-string: #d0907b;\n\t\t--color-code-type: #45c9b1;\n\t\t--color-code-variable: #98ddfc;\n\t\t--color-danger: #f44b51;\n\t\t--color-faint: #858585;\n\t\t--color-header: #ffffff;\n\t\t--color-link: #ffeedd;\n\t\t--color-link-current: #ffe8d7;\n\t\t--color-text: #ffffff;\n\t}\n}\n:root.dark-mode {\n\t/* Must manually keep these in sync with `@media (prefers-color-scheme: dark)` above */\n\t/* Colors based on VSCode's \"Dark+\" theme */\n\t--color-background-hover: #000;\n\t--color-background-body: #3c3c3c;\n\t--color-background-content: #2d2d2d;\n\t--color-background-code: #1e1e1e;\n\t--color-button: #ffebbd;\n\t--color-code-comment: #69985a;\n\t--color-code-type: #45c9b1;\n\t--color-code-property: #43c3fb;\n\t--color-code-function: #dddbae;\n\t--color-code-keyword: #c687be;\n\t--color-code-number: #b5cdaa;\n\t--color-code-variable: #98ddfc;\n\t--color-code-string: #d0907b;\n\t--color-danger: #f44b51;\n\t--color-faint: #858585;\n\t--color-header: #ffffff;\n\t--color-link: #ffeedd;\n\t--color-link-current: #ffddbb;\n\t--color-text: #ffffff;\n}\n"))
const c____13 = _memoize(() =>
	new (TextEncoder)().encode("table {\n\ttable-layout: fixed;\n\twidth: 100%;\n\tborder-collapse: collapse;\n}\ntable th {\n\tpadding: 0;\n\twidth: 33%;\n}\ntable td {\n\tpadding: 0;\n\twidth: 33%;\n}\ninput {\n\tpadding-left: 0.5em;\n\tpadding-right: 0;\n\twidth: calc(100% - 0.5em);\n\tfont-family: \"hack\";\n\tfont-size: 105%;\n\tborder: none;\n\tcolor: var(--color-text);\n\tborder: 1px solid var(--color-faint);\n\tbackground: var(--color-background-code);\n}\ninput:focus-visible {\n\toutline: none;\n\tbackground: var(--color-background-body);\n}\n"))
const c____14 = _memoize(() =>
	new (TextEncoder)().encode(""))
const c____15 = _memoize(() =>
	new (TextEncoder)().encode("Keen syntax"))
const c____16 = _memoize(() =>
	new (TextEncoder)().encode("C-like syntax"))
const c____17 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: child-nodes.size == 1"))
const c____18 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: instanceof node, js-global[\"Text\"]"))
const c____19 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'index-of! langs, lang'"))
const c____20 = _memoize(() =>
	new (TextEncoder)().encode("text"))
const c____21 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: i == size"))
const c____22 = _memoize(() =>
	new (TextEncoder)().encode("Expected:\n"))
const c____23 = _memoize(() =>
	new (TextEncoder)().encode("\nis:\n"))
const c____24 = _memoize(() =>
	new (TextEncoder)().encode("\n"))
const c____25 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: out-i == res.size"))
const c____26 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: low <= high"))
const c____27 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: src-range.high <= src.size"))
const c____28 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: dest-range.high <= dest.size"))
const c____29 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: src-range.size == size"))
const c____30 = _memoize(() =>
	new (TextEncoder)().encode("-::nat32"))
const c____31 = _memoize(() =>
	new (TextEncoder)().encode("*::nat32"))
const c____32 = _memoize(() =>
	new (TextEncoder)().encode("()"))
const c____33 = _memoize(() =>
	new (TextEncoder)().encode("empty-array"))
const c____34 = _memoize(() =>
	new (TextEncoder)().encode("empty-object"))
const c____35 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: keys.size == values.size"))
const c____36 = _memoize(() =>
	new (TextEncoder)().encode(": "))
const c____37 = _memoize(() =>
	new (TextEncoder)().encode(", "))
const c____38 = _memoize(() =>
	new (TextEncoder)().encode(":"))
const c____39 = _memoize(() =>
	new (TextEncoder)().encode("-"))
const c____40 = _memoize(() =>
	new (TextEncoder)().encode("\t"))
const c____41 = _memoize(() =>
	new (TextEncoder)().encode(" "))
const c____42 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'part.single'"))
const c____43 = _memoize(() =>
	new (TextEncoder)().encode(","))
const c____44 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: any values"))
const c____45 = _memoize(() =>
	new (TextEncoder)().encode("("))
const c____46 = _memoize(() =>
	new (TextEncoder)().encode(")"))
const c____47 = _memoize(() =>
	new (TextEncoder)().encode("Forbidden expression is true: a.cur-size == max-value"))
const c____48 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: new-capacity > a.buffer.size"))
const c____49 = _memoize(() =>
	new (TextEncoder)().encode("Forbidden expression is true: res"))
const c____50 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: begin.start == end.start and begin.end == end.end"))
const c____51 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a.start + index <= a.end"))
const c____52 = _memoize(() =>
	new (TextEncoder)().encode("low-n-bits::nat32"))
const c____53 = _memoize(() =>
	new (TextEncoder)().encode("/"))
const c____54 = _memoize(() =>
	new (TextEncoder)().encode("Error decoding bytes as UTF-8"))
const c____55 = _memoize(() =>
	new (TextEncoder)().encode("-::nat64"))
const c____56 = _memoize(() =>
	new (TextEncoder)().encode("Should be unreachable"))
const c____57 = _memoize(() =>
	new (TextEncoder)().encode("Iterator out of bounds"))
const c____58 = _memoize(() =>
	new (TextEncoder)().encode("+::nat64"))
const c____59 = _memoize(() =>
	new (TextEncoder)().encode("to::nat32"))
const c____60 = _memoize(() =>
	new (TextEncoder)().encode("\nisnt:\n"))
const c____61 = _memoize(() =>
	new (TextEncoder)().encode("round-up-to-power-of-two"))
const c____62 = _memoize(() =>
	new (TextEncoder)().encode("\\\""))
const c____63 = _memoize(() =>
	new (TextEncoder)().encode("\\n"))
const c____64 = _memoize(() =>
	new (TextEncoder)().encode("\\r"))
const c____65 = _memoize(() =>
	new (TextEncoder)().encode("\\t"))
const c____66 = _memoize(() =>
	new (TextEncoder)().encode("\\\\"))
const c____67 = _memoize(() =>
	new (TextEncoder)().encode("\\{"))
const c____68 = _memoize(() =>
	new (TextEncoder)().encode("\\}"))
const c____69 = _memoize(() =>
	new (TextEncoder)().encode("\\0"))
const c____70 = _memoize(() =>
	new (TextEncoder)().encode("quote"))
const c____71 = _memoize(() =>
	new (TextEncoder)().encode("-0"))
const c____72 = _memoize(() =>
	new (TextEncoder)().encode("-9223372036854775808"))
const c____73 = _memoize(() =>
	new (TextEncoder)().encode("*::int64"))
const c____74 = _memoize(() =>
	new (TextEncoder)().encode("/::int64"))
const c____75 = _memoize(() =>
	new (TextEncoder)().encode("to::nat64"))
const c____76 = _memoize(() =>
	new (TextEncoder)().encode("%"))
const c____77 = _memoize(() =>
	new (TextEncoder)().encode("true"))
const c____78 = _memoize(() =>
	new (TextEncoder)().encode("false"))
const c____79 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: out == a.size"))
const c____80 = _memoize(() =>
	new (TextEncoder)().encode("c"))
const c____81 = _memoize(() =>
	new (TextEncoder)().encode("keen"))
const c____82 = _memoize(() =>
	new (TextEncoder)().encode("Parse error at position "))
const c____83 = _memoize(() =>
	new (TextEncoder)().encode("null"))
const c____84 = _memoize(() =>
	new (TextEncoder)().encode("["))
const c____85 = _memoize(() =>
	new (TextEncoder)().encode("]"))
const c____86 = _memoize(() =>
	new (TextEncoder)().encode("{"))
const c____87 = _memoize(() =>
	new (TextEncoder)().encode("}"))
const c____88 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a.a.size == a.b.size"))
const c____89 = _memoize(() =>
	new (TextEncoder)().encode("Forbidden expression is true: existing-key == key"))
const c____90 = _memoize(() =>
	new (TextEncoder)().encode("Forbidden expression is true: write-locked a"))
const c____91 = _memoize(() =>
	new (TextEncoder)().encode("The collection is temporarily in a state where this can not be done."))
const c____92 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a.size == b.size"))
const c____93 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: r < a.size"))
const c____94 = _memoize(() =>
	new (TextEncoder)().encode("array"))
const c____95 = _memoize(() =>
	new (TextEncoder)().encode("nat"))
const c____96 = _memoize(() =>
	new (TextEncoder)().encode("string"))
const c____97 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: call \"x => x === (x >>> 0)\".eval, a 'to"))
const c____98 = _memoize(() =>
	new (TextEncoder)().encode("keen-loading-spinner"))
const c____99 = _memoize(() =>
	new (TextEncoder)().encode(".root {\n\tdisplay: inline-block;\n\tposition: relative;\n\theight: 2em;\n}\n.child-0, .child-1, .child-2, .child-3 {\n\tposition: absolute;\n\ttop: 0.75em;\n\twidth: 0.666em;\n\theight: 0.666em;\n\tborder-radius: 50%;\n\tbackground: #ab9df2;\n\tanimation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.child-0 { left: 1em; animation: ani0 0.8s infinite; }\n.child-1 { left: 1em; animation: ani1 0.8s infinite; }\n.child-2 { left: 2em; animation: ani1 0.8s infinite; }\n.child-3 { left: 3em; animation: ani2 0.8s infinite; }\n@keyframes ani0 {\n\t0% { transform: scale(0); }\n\t100% { transform: scale(1); }\n}\n@keyframes ani1 {\n\t0% { transform: translate(0, 0); }\n\t100% { transform: translate(1em, 0); }\n}\n@keyframes ani2 {\n\t0% { transform: scale(1); }\n\t100% { transform: scale(0); }\n}\n"))
const c____100 = _memoize(() =>
	new (TextEncoder)().encode("root"))
const c____101 = _memoize(() =>
	new (TextEncoder)().encode("child-0"))
const c____102 = _memoize(() =>
	new (TextEncoder)().encode("child-1"))
const c____103 = _memoize(() =>
	new (TextEncoder)().encode("child-2"))
const c____104 = _memoize(() =>
	new (TextEncoder)().encode("child-3"))
const c____105 = _memoize(() =>
	new (TextEncoder)().encode("keen-text"))
const c____106 = _memoize(() =>
	new (TextEncoder)().encode(":host {\n\tdisplay: flex;\n\tbackground: var(--color-background-code);\n\tfont-family: \"hack\";\n}\n.line-numbers {\n\tdisplay: inline-block;\n\twidth: 1.5em;\n\tcolor: var(--color-faint);\n\tborder-right: 0.1em solid var(--color-faint);\n\tline-height: 20px;\n\ttext-align: right;\n\twhite-space: pre;\n\tpadding-right: 0.25em;\n\tmargin-right: 0.25em;\n}\n.measurer {\n\tvisibility: hidden;\n\theight: 0;\n}\n.code {\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tposition: relative;\n\ttab-size: 4;\n\tfont-size: 1em;\n\tline-height: 20px;\n\twhite-space: pre;\n\tdisplay: inline-block;\n}\n.highlight {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 10;\n}\n.line {\n\theight: 20px;\n}\ntextarea {\n\tz-index: 0;\n\tmargin: 0;\n\tpadding: 0;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcolor: transparent;\n\tcaret-color: var(--color-text);\n\tbackground: transparent;\n\tline-height: 20px;\n\tfont-size: 1em;\n\tborder: none;\n\toutline: none;\n\tresize: none;\n\toverflow: hidden;\n\twhite-space: pre;\n\tfont-family: \"hack\";\n}\n\nspan.diagnostic {\n\tborder-bottom: 0.2em dotted #e87878;\n}\n\n.code[data-tooltip]::after {\n\t/* why not just move this to the below rule? */\n\tposition: absolute;\n\tleft: calc(var(--tooltip-x) + 1em);\n\ttop: calc(var(--tooltip-y) + 0.5em);\n\tcontent: attr(data-tooltip);\n\tbackground: var(--color-background-body);\n\tpadding: 0.5em;\n\tcolor: var(--color-text);\n\tborder: var(--color-faint);\n\tmax-width: 50em;\n\ttext-wrap: wrap;\n}\n.code.hover-diagnostic[data-tooltip]::after {\n\tborder: 1px dotted var(--color-danger);\n}\n"))
const c____107 = _memoize(() =>
	new (TextEncoder)().encode("highlight"))
const c____108 = _memoize(() =>
	new (TextEncoder)().encode("keydown"))
const c____109 = _memoize(() =>
	new (TextEncoder)().encode("input"))
const c____110 = _memoize(() =>
	new (TextEncoder)().encode("a"))
const c____111 = _memoize(() =>
	new (TextEncoder)().encode("line-numbers"))
const c____112 = _memoize(() =>
	new (TextEncoder)().encode("code"))
const c____113 = _memoize(() =>
	new (TextEncoder)().encode("measurer"))
const c____114 = _memoize(() =>
	new (TextEncoder)().encode("mousemove"))
const c____115 = _memoize(() =>
	new (TextEncoder)().encode("mouseout"))
const c____116 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'a.nodes'"))
const c____117 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'a.container-stack[0].all-container'"))
const c____118 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a.container-stack.size == 1"))
const c____119 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'peek! container-stack a'"))
const c____120 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'pop! container-stack a'"))
const c____121 = _memoize(() =>
	new (TextEncoder)().encode("line"))
const c____122 = _memoize(() =>
	new (TextEncoder)().encode("diagnostic"))
const c____123 = _memoize(() =>
	new (TextEncoder)().encode("Forbidden option is non-empty: text-container last-container"))
const c____124 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: new-capacity > a.backing.size"))
const c____125 = _memoize(() =>
	new (TextEncoder)().encode("comment"))
const c____126 = _memoize(() =>
	new (TextEncoder)().encode("enum"))
const c____127 = _memoize(() =>
	new (TextEncoder)().encode("enumMember"))
const c____128 = _memoize(() =>
	new (TextEncoder)().encode("function"))
const c____129 = _memoize(() =>
	new (TextEncoder)().encode("interface"))
const c____130 = _memoize(() =>
	new (TextEncoder)().encode("keyword"))
const c____131 = _memoize(() =>
	new (TextEncoder)().encode("namespace"))
const c____132 = _memoize(() =>
	new (TextEncoder)().encode("number"))
const c____133 = _memoize(() =>
	new (TextEncoder)().encode("parameter"))
const c____134 = _memoize(() =>
	new (TextEncoder)().encode("property"))
const c____135 = _memoize(() =>
	new (TextEncoder)().encode("type"))
const c____136 = _memoize(() =>
	new (TextEncoder)().encode("typeParameter"))
const c____137 = _memoize(() =>
	new (TextEncoder)().encode("variable"))
const c____138 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'a.container-stack.peek'"))
const c____139 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: i == res.size"))
const c____140 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: start.line == end.line"))
const c____141 = _memoize(() =>
	new (TextEncoder)().encode("0x"))
const c____142 = _memoize(() =>
	new (TextEncoder)().encode(" is not a valid Unicode character."))
const c____143 = _memoize(() =>
	new (TextEncoder)().encode("to::nat8"))
const c____144 = _memoize(() =>
	new (TextEncoder)().encode("Forbidden option is non-empty: text-container new-last"))
const c____145 = _memoize(() =>
	new (TextEncoder)().encode("no-token"))
const c____146 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: start-pos < a.pos"))
const c____147 = _memoize(() =>
	new (TextEncoder)().encode("Forbidden option is non-empty: a.diagnostics-handlers[uri]"))
const c____148 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'unsafe-at! a.entries, index'"))
const c____149 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a.typeof == \"number\""))
const c____150 = _memoize(() =>
	new (TextEncoder)().encode("hover-tooltip"))
const c____151 = _memoize(() =>
	new (TextEncoder)().encode("manual"))
const c____152 = _memoize(() =>
	new (TextEncoder)().encode("tooltip"))
const c____153 = _memoize(() =>
	new (TextEncoder)().encode("px"))
const c____154 = _memoize(() =>
	new (TextEncoder)().encode("+::float64"))
const c____155 = _memoize(() =>
	new (TextEncoder)().encode("/::float64"))
const c____156 = _memoize(() =>
	new (TextEncoder)().encode("*::float64"))
const c____157 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'data_[i + 3].to'"))
const c____158 = _memoize(() =>
	new (TextEncoder)().encode("-::float64"))
const c____159 = _memoize(() =>
	new (TextEncoder)().encode("keen-runnable"))
const c____160 = _memoize(() =>
	new (TextEncoder)().encode(":host {\n\tdisplay: block;\n\tmax-width: 44em;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground: var(--color-background-code);\n}\n:host(.wide) {\n\tmax-width: none;\n}\n.name {\n\tfont-family: \"hack\";\n\tmargin-left: 0em;\n\ttext-align: center;\n}\n.output {\n\twidth: 100%;\n\tcolor: var(--color-text);\n\twhite-space: pre-wrap;\n\ttab-size: 4;\n\toverflow: hidden;\n\tborder-top: 1px solid var(--color-faint);\n}\n/* Need to use a more specific style to override the browser default */\n.output > code {\n\tfont-family: \"hack\";\n}\n.output.running { transition: none; }\n.output > .stderr { color: var(--color-danger); }\nbutton {\n\tborder: none;\n\toutline: none;\n\tcolor: var(--color-button);\n\tbackground: transparent;\n\tcursor: pointer;\n}\n.bottom {\n\tmargin: 0;\n}\ndiv.icon svg { height: 1.5em; }\nbutton.collapsed { display: none; }\n"))
const c____161 = _memoize(() =>
	new (TextEncoder)().encode("file:///"))
const c____162 = _memoize(() =>
	new (TextEncoder)().encode("name"))
const c____163 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'keen-text'"))
const c____164 = _memoize(() =>
	new (TextEncoder)().encode("Hide output"))
const c____165 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'collapse-button-ref'"))
const c____166 = _memoize(() =>
	new (TextEncoder)().encode("right"))
const c____167 = _memoize(() =>
	new (TextEncoder)().encode("Run"))
const c____168 = _memoize(() =>
	new (TextEncoder)().encode("bottom"))
const c____169 = _memoize(() =>
	new (TextEncoder)().encode("running"))
const c____170 = _memoize(() =>
	new (TextEncoder)().encode("stdout"))
const c____171 = _memoize(() =>
	new (TextEncoder)().encode("stderr"))
const c____172 = _memoize(() =>
	new (TextEncoder)().encode("<<no output>>"))
const c____173 = _memoize(() =>
	new (TextEncoder)().encode("error"))
const c____174 = _memoize(() =>
	new (TextEncoder)().encode("Line "))
const c____175 = _memoize(() =>
	new (TextEncoder)().encode("main"))
const c____176 = _memoize(() =>
	new (TextEncoder)().encode("tests"))
const c____177 = _memoize(() =>
	new (TextEncoder)().encode("\n// ensure unique: "))
const c____178 = _memoize(() =>
	new (TextEncoder)().encode("output"))
const c____179 = _memoize(() =>
	new (TextEncoder)().encode("2em"))
const c____180 = _memoize(() =>
	new (TextEncoder)().encode("<polygon\n\tstroke-linecap=\"round\"\n\tstroke-linejoin=\"round\"\n\tstroke-width=\"2\"\n\tfill=\"none\"\n\tpoints=\"6,6 6,18 18,12\" />"))
const c____181 = _memoize(() =>
	new (TextEncoder)().encode("icon"))
const c____182 = _memoize(() =>
	new (TextEncoder)().encode("<svg\n\txmlns=\"http://www.w3.org/2000/svg\"\n\tfill=\"none\"\n\tviewBox=\"0 0 24 24\"\n\tstroke=\"currentColor\">\n\t"))
const c____183 = _memoize(() =>
	new (TextEncoder)().encode("\n</svg>"))
const c____184 = _memoize(() =>
	new (TextEncoder)().encode("0"))
const c____185 = _memoize(() =>
	new (TextEncoder)().encode("<path\n\tstroke-linecap=\"round\"\n\tstroke-linejoin=\"round\"\n\tstroke-width=\"2\"\n\td=\"M5 15l7-7 7 7\"\n/>"))
const c____186 = _memoize(() =>
	new (TextEncoder)().encode("/C%3A"))
const c____187 = _memoize(() =>
	new (TextEncoder)().encode("URI"))
const c____188 = _memoize(() =>
	new (TextEncoder)().encode("EOF"))
const c____189 = _memoize(() =>
	new (TextEncoder)().encode("'"))
const c____190 = _memoize(() =>
	new (TextEncoder)().encode("Expected "))
const c____191 = _memoize(() =>
	new (TextEncoder)().encode(", got "))
const c____192 = _memoize(() =>
	new (TextEncoder)().encode("\\u"))
const c____193 = _memoize(() =>
	new (TextEncoder)().encode("+::nat8"))
const c____194 = _memoize(() =>
	new (TextEncoder)().encode("file://"))
const c____195 = _memoize(() =>
	new (TextEncoder)().encode(".keen"))
const c____196 = _memoize(() =>
	new (TextEncoder)().encode(".kid"))
const c____197 = _memoize(() =>
	new (TextEncoder)().encode("Two keen-runnable have the same name "))
const c____198 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: ends-with name, \".keen\" or ends-with name, \".kid\""))
const c____199 = _memoize(() =>
	new (TextEncoder)().encode("demo"))
const c____200 = _memoize(() =>
	new (TextEncoder)().encode("theme-switcher"))
const c____201 = _memoize(() =>
	new (TextEncoder)().encode(".icon {\n\twidth: 1em;\n\theight: 1em;\n\tstroke-width: 0.15em;\n\tcursor: pointer;\n}\n"))
const c____202 = _memoize(() =>
	new (TextEncoder)().encode("dark-mode"))
const c____203 = _memoize(() =>
	new (TextEncoder)().encode("light-mode"))
const c____204 = _memoize(() =>
	new (TextEncoder)().encode("M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 "))
const c____205 = _memoize(() =>
	new (TextEncoder)().encode("18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 "))
const c____206 = _memoize(() =>
	new (TextEncoder)().encode("12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"))
const c____207 = _memoize(() =>
	new (TextEncoder)().encode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\""))
const c____208 = _memoize(() =>
	new (TextEncoder)().encode("\" />"))
const c____209 = _memoize(() =>
	new (TextEncoder)().encode("M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 "))
const c____210 = _memoize(() =>
	new (TextEncoder)().encode("0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 "))
const c____211 = _memoize(() =>
	new (TextEncoder)().encode("12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"))
const c____212 = _memoize(() =>
	new (TextEncoder)().encode("<path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\""))
const c____213 = _memoize(() =>
	new (TextEncoder)().encode("keen-icon"))
const c____214 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'this.attributes[\"icon\"]'"))
const c____215 = _memoize(() =>
	new (TextEncoder)().encode("TODO"))
const c____216 = _memoize(() =>
	new (TextEncoder)().encode("m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 "))
const c____217 = _memoize(() =>
	new (TextEncoder)().encode("1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 "))
const c____218 = _memoize(() =>
	new (TextEncoder)().encode("1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"))
const c____219 = _memoize(() =>
	new (TextEncoder)().encode("M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"))
const c____220 = _memoize(() =>
	new (TextEncoder)().encode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\""))
const c____221 = _memoize(() =>
	new (TextEncoder)().encode("\"/>"))
const c____222 = _memoize(() =>
	new (TextEncoder)().encode("<path\n\tstroke-linecap=\"round\"\n\tstroke-linejoin=\"round\"\n\tstroke-width=\"2\"\n\td=\"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4\"\n/>"))
const c____223 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'remove! server.responses, id'"))
const c____224 = _memoize(() =>
	new (TextEncoder)().encode("Took "))
const c____225 = _memoize(() =>
	new (TextEncoder)().encode(" to load Keen server"))
const c____226 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'a.to::nat32.to'"))
const c____227 = _memoize(() =>
	new (TextEncoder)().encode("s"))
const c____228 = _memoize(() =>
	new (TextEncoder)().encode("ms"))
const c____229 = _memoize(() =>
	Uint8Array.fromBase64("zrxz"))
const c____230 = _memoize(() =>
	new (TextEncoder)().encode("ns"))
const c____231 = _memoize(() =>
	new (TextEncoder)().encode("\""))
const c____232 = _memoize(() =>
	new (TextEncoder)().encode("']'"))
const c____233 = _memoize(() =>
	new (TextEncoder)().encode("'}'"))
const c____234 = _memoize(() =>
	new (TextEncoder)().encode("JSON value"))
const c____235 = _memoize(() =>
	new (TextEncoder)().encode("numeric overflow"))
const c____236 = _memoize(() =>
	new (TextEncoder)().encode("to::int64"))
const c____237 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: base <= 36"))
const c____238 = _memoize(() =>
	new (TextEncoder)().encode("*::nat64"))
const c____239 = _memoize(() =>
	new (TextEncoder)().encode("0b"))
const c____240 = _memoize(() =>
	new (TextEncoder)().encode("0o"))
const c____241 = _memoize(() =>
	new (TextEncoder)().encode("+"))
const c____242 = _memoize(() =>
	new (TextEncoder)().encode("':'"))
const c____243 = _memoize(() =>
	new (TextEncoder)().encode("quoted string"))
const c____244 = _memoize(() =>
	new (TextEncoder)().encode("Valid escape sequence"))
const c____245 = _memoize(() =>
	new (TextEncoder)().encode("closing quote"))
const c____246 = _memoize(() =>
	new (TextEncoder)().encode("-::nat8"))
const c____247 = _memoize(() =>
	new (TextEncoder)().encode("string continues past end of parse"))
const c____248 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a.typeof == \"string\""))
const c____249 = _memoize(() =>
	new (TextEncoder)().encode("Expected to deserialize the json value as "))
const c____250 = _memoize(() =>
	new (TextEncoder)().encode(". Actual: "))
const c____251 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'only! a.values'"))
const c____252 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: values.size == 1"))
const c____253 = _memoize(() =>
	[])
const c____254 = _memoize(() =>
	["open"])
const c____255 = _memoize(() =>
	["module"])
const c____256 = _memoize(() =>
	[_symbol6, _symbol7])
const c____257 = _memoize(() =>
	[_symbol11, _symbol12, _symbol13])
const c____258 = _memoize(() =>
	[_symbol14, _symbol15, _symbol16])
const c____259 = _memoize(() =>
	[_symbol18])
const c____260 = _memoize(() =>
	[_symbol19])
const c____261 = _memoize(() =>
	[_symbol24, _symbol25])
const c____262 = _memoize(() =>
	[_symbol26, _symbol27])
const c____263 = _memoize(() =>
	[_symbol30])
const c____264 = _memoize(() =>
	[_symbol31, _symbol32])
const c____265 = _memoize(() =>
	[_symbol33, _symbol34])
const c____266 = _memoize(() =>
	[_symbol34])
const c____267 = _memoize(() =>
	[_symbol38, _symbol30])
const c____268 = _memoize(() =>
	[_symbol15, _symbol16])
const c____269 = _memoize(() =>
	[_symbol53, _symbol54, _symbol30])
const c____270 = _memoize(() =>
	[_symbol6])
const c____271 = _memoize(() =>
	[])
const c____272 = _memoize(() =>
	[])
const c____273 = _memoize(() =>
	[])
const c____274 = _memoize(() =>
	[c____320(), c____321()])
const c____275 = _memoize(() =>
	[c____401(), c____402(), c____403(), c____404()])
const c____276 = _memoize(() =>
	[c____320(), c____406()])
const c____277 = _memoize(() =>
	[c____451(), c____452()])
const c____278 = _memoize(() =>
	[c____320(), c____460()])
const c____279 = _memoize(() =>
	[c____478(), c____469()])
const c____280 = _memoize(() =>
	[c____501()])
const c____281 = _memoize(() =>
	[c____502()])
const c____282 = _memoize(() =>
	new (Uint32Array)([]))
const c____283 = _memoize(() =>
	new (Uint32Array)([0, 0]))
const c____284 = _memoize(() =>
	[])
const c____285 = _memoize(() =>
	[])
const c____286 = _memoize(() =>
	[])
const c____287 = _memoize(() =>
	[])
const c____288 = _memoize(() =>
	[])
const c____289 = _memoize(() =>
	[])
const c____290 = _memoize(() =>
	new (Uint8Array)([1, 0]))
const c____291 = _memoize(() =>
	new (Uint32Array)([]))
const c____292 = _memoize(() =>
	[])
const c____293 = _memoize(() =>
	[])
const c____294 = _memoize(() =>
	[])
const c____295 = _memoize(() =>
	[])
const c____296 = _memoize(() =>
	[])
const c____297 = _memoize(() =>
	[])
const c____298 = _memoize(() =>
	[])
const c____299 = _memoize(() =>
	new (custom__45element__45options140501329)(c____274()))
const c____300 = _memoize(() =>
	new (custom__45element__45options140501329)(c____273()))
const c____301 = _memoize(() =>
	new (custom__45element__45options140501329)(c____276()))
const c____302 = _memoize(() =>
	new (custom__45element__45options140501329)(c____278()))
const c____303 = _memoize(() =>
	new (local__45storage821627354)())
const c____304 = _memoize(() =>
	new (secure__45random1200578203)())
const c____305 = _memoize(() =>
	new (line__45and__45character1481230736)(0, 0))
const c____306 = _memoize(() =>
	new (null1784508966)())
const c____307 = _memoize(() =>
	new (none2082914084)())
const c____308 = _memoize(() =>
	new (string2245870778)(c____0()))
const c____309 = _memoize(() =>
	new (string2245870778)(c____1()))
const c____310 = _memoize(() =>
	new (string2245870778)(c____2()))
const c____311 = _memoize(() =>
	new (string2245870778)(c____3()))
const c____312 = _memoize(() =>
	new (string2245870778)(c____4()))
const c____313 = _memoize(() =>
	new (string2245870778)(c____5()))
const c____314 = _memoize(() =>
	new (string2245870778)(c____6()))
const c____315 = _memoize(() =>
	new (string2245870778)(c____7()))
const c____316 = _memoize(() =>
	new (string2245870778)(c____8()))
const c____317 = _memoize(() =>
	new (string2245870778)(c____9()))
const c____318 = _memoize(() =>
	new (string2245870778)(c____10()))
const c____319 = _memoize(() =>
	new (string2245870778)(c____11()))
const c____320 = _memoize(() =>
	new (string2245870778)(c____12()))
const c____321 = _memoize(() =>
	new (string2245870778)(c____13()))
const c____322 = _memoize(() =>
	new (string2245870778)(c____14()))
const c____323 = _memoize(() =>
	new (string2245870778)(c____15()))
const c____324 = _memoize(() =>
	new (string2245870778)(c____16()))
const c____325 = _memoize(() =>
	new (string2245870778)(c____17()))
const c____326 = _memoize(() =>
	new (string2245870778)(c____18()))
const c____327 = _memoize(() =>
	new (string2245870778)(c____19()))
const c____328 = _memoize(() =>
	new (string2245870778)(c____20()))
const c____329 = _memoize(() =>
	new (string2245870778)(c____21()))
const c____330 = _memoize(() =>
	new (string2245870778)(c____22()))
const c____331 = _memoize(() =>
	new (string2245870778)(c____23()))
const c____332 = _memoize(() =>
	new (string2245870778)(c____24()))
const c____333 = _memoize(() =>
	new (string2245870778)(c____25()))
const c____334 = _memoize(() =>
	new (string2245870778)(c____26()))
const c____335 = _memoize(() =>
	new (string2245870778)(c____27()))
const c____336 = _memoize(() =>
	new (string2245870778)(c____28()))
const c____337 = _memoize(() =>
	new (string2245870778)(c____29()))
const c____338 = _memoize(() =>
	new (string2245870778)(c____30()))
const c____339 = _memoize(() =>
	new (string2245870778)(c____31()))
const c____340 = _memoize(() =>
	new (string2245870778)(c____32()))
const c____341 = _memoize(() =>
	new (string2245870778)(c____33()))
const c____342 = _memoize(() =>
	new (string2245870778)(c____34()))
const c____343 = _memoize(() =>
	new (string2245870778)(c____35()))
const c____344 = _memoize(() =>
	new (string2245870778)(c____36()))
const c____345 = _memoize(() =>
	new (string2245870778)(c____37()))
const c____346 = _memoize(() =>
	new (string2245870778)(c____38()))
const c____347 = _memoize(() =>
	new (string2245870778)(c____39()))
const c____348 = _memoize(() =>
	new (string2245870778)(c____40()))
const c____349 = _memoize(() =>
	new (string2245870778)(c____41()))
const c____350 = _memoize(() =>
	new (string2245870778)(c____42()))
const c____351 = _memoize(() =>
	new (string2245870778)(c____43()))
const c____352 = _memoize(() =>
	new (string2245870778)(c____44()))
const c____353 = _memoize(() =>
	new (string2245870778)(c____45()))
const c____354 = _memoize(() =>
	new (string2245870778)(c____46()))
const c____355 = _memoize(() =>
	new (string2245870778)(c____47()))
const c____356 = _memoize(() =>
	new (string2245870778)(c____48()))
const c____357 = _memoize(() =>
	new (string2245870778)(c____49()))
const c____358 = _memoize(() =>
	new (string2245870778)(c____50()))
const c____359 = _memoize(() =>
	new (string2245870778)(c____51()))
const c____360 = _memoize(() =>
	new (string2245870778)(c____52()))
const c____361 = _memoize(() =>
	new (string2245870778)(c____53()))
const c____362 = _memoize(() =>
	new (string2245870778)(c____54()))
const c____363 = _memoize(() =>
	new (string2245870778)(c____55()))
const c____364 = _memoize(() =>
	new (string2245870778)(c____56()))
const c____365 = _memoize(() =>
	new (string2245870778)(c____57()))
const c____366 = _memoize(() =>
	new (string2245870778)(c____58()))
const c____367 = _memoize(() =>
	new (string2245870778)(c____59()))
const c____368 = _memoize(() =>
	new (string2245870778)(c____60()))
const c____369 = _memoize(() =>
	new (string2245870778)(c____61()))
const c____370 = _memoize(() =>
	new (string2245870778)(c____70()))
const c____371 = _memoize(() =>
	new (string2245870778)(c____71()))
const c____372 = _memoize(() =>
	new (string2245870778)(c____72()))
const c____373 = _memoize(() =>
	new (string2245870778)(c____73()))
const c____374 = _memoize(() =>
	new (string2245870778)(c____74()))
const c____375 = _memoize(() =>
	new (string2245870778)(c____75()))
const c____376 = _memoize(() =>
	new (string2245870778)(c____76()))
const c____377 = _memoize(() =>
	new (string2245870778)(c____77()))
const c____378 = _memoize(() =>
	new (string2245870778)(c____78()))
const c____379 = _memoize(() =>
	new (string2245870778)(c____79()))
const c____380 = _memoize(() =>
	new (string2245870778)(c____80()))
const c____381 = _memoize(() =>
	new (string2245870778)(c____81()))
const c____382 = _memoize(() =>
	new (string2245870778)(c____82()))
const c____383 = _memoize(() =>
	new (string2245870778)(c____83()))
const c____384 = _memoize(() =>
	new (string2245870778)(c____84()))
const c____385 = _memoize(() =>
	new (string2245870778)(c____85()))
const c____386 = _memoize(() =>
	new (string2245870778)(c____86()))
const c____387 = _memoize(() =>
	new (string2245870778)(c____87()))
const c____388 = _memoize(() =>
	new (string2245870778)(c____88()))
const c____389 = _memoize(() =>
	new (string2245870778)(c____89()))
const c____390 = _memoize(() =>
	new (string2245870778)(c____90()))
const c____391 = _memoize(() =>
	new (string2245870778)(c____91()))
const c____392 = _memoize(() =>
	new (string2245870778)(c____92()))
const c____393 = _memoize(() =>
	new (string2245870778)(c____93()))
const c____394 = _memoize(() =>
	new (string2245870778)(c____94()))
const c____395 = _memoize(() =>
	new (string2245870778)(c____95()))
const c____396 = _memoize(() =>
	new (string2245870778)(c____96()))
const c____397 = _memoize(() =>
	new (string2245870778)(c____97()))
const c____398 = _memoize(() =>
	new (string2245870778)(c____98()))
const c____399 = _memoize(() =>
	new (string2245870778)(c____99()))
const c____400 = _memoize(() =>
	new (string2245870778)(c____100()))
const c____401 = _memoize(() =>
	new (string2245870778)(c____101()))
const c____402 = _memoize(() =>
	new (string2245870778)(c____102()))
const c____403 = _memoize(() =>
	new (string2245870778)(c____103()))
const c____404 = _memoize(() =>
	new (string2245870778)(c____104()))
const c____405 = _memoize(() =>
	new (string2245870778)(c____105()))
const c____406 = _memoize(() =>
	new (string2245870778)(c____106()))
const c____407 = _memoize(() =>
	new (string2245870778)(c____107()))
const c____408 = _memoize(() =>
	new (string2245870778)(c____108()))
const c____409 = _memoize(() =>
	new (string2245870778)(c____109()))
const c____410 = _memoize(() =>
	new (string2245870778)(c____110()))
const c____411 = _memoize(() =>
	new (string2245870778)(c____111()))
const c____412 = _memoize(() =>
	new (string2245870778)(c____112()))
const c____413 = _memoize(() =>
	new (string2245870778)(c____113()))
const c____414 = _memoize(() =>
	new (string2245870778)(c____114()))
const c____415 = _memoize(() =>
	new (string2245870778)(c____115()))
const c____416 = _memoize(() =>
	new (string2245870778)(c____116()))
const c____417 = _memoize(() =>
	new (string2245870778)(c____117()))
const c____418 = _memoize(() =>
	new (string2245870778)(c____118()))
const c____419 = _memoize(() =>
	new (string2245870778)(c____119()))
const c____420 = _memoize(() =>
	new (string2245870778)(c____120()))
const c____421 = _memoize(() =>
	new (string2245870778)(c____121()))
const c____422 = _memoize(() =>
	new (string2245870778)(c____122()))
const c____423 = _memoize(() =>
	new (string2245870778)(c____123()))
const c____424 = _memoize(() =>
	new (string2245870778)(c____124()))
const c____425 = _memoize(() =>
	new (string2245870778)(c____125()))
const c____426 = _memoize(() =>
	new (string2245870778)(c____126()))
const c____427 = _memoize(() =>
	new (string2245870778)(c____127()))
const c____428 = _memoize(() =>
	new (string2245870778)(c____128()))
const c____429 = _memoize(() =>
	new (string2245870778)(c____129()))
const c____430 = _memoize(() =>
	new (string2245870778)(c____130()))
const c____431 = _memoize(() =>
	new (string2245870778)(c____131()))
const c____432 = _memoize(() =>
	new (string2245870778)(c____132()))
const c____433 = _memoize(() =>
	new (string2245870778)(c____133()))
const c____434 = _memoize(() =>
	new (string2245870778)(c____134()))
const c____435 = _memoize(() =>
	new (string2245870778)(c____135()))
const c____436 = _memoize(() =>
	new (string2245870778)(c____136()))
const c____437 = _memoize(() =>
	new (string2245870778)(c____137()))
const c____438 = _memoize(() =>
	new (string2245870778)(c____138()))
const c____439 = _memoize(() =>
	new (string2245870778)(c____139()))
const c____440 = _memoize(() =>
	new (string2245870778)(c____140()))
const c____441 = _memoize(() =>
	new (string2245870778)(c____141()))
const c____442 = _memoize(() =>
	new (string2245870778)(c____142()))
const c____443 = _memoize(() =>
	new (string2245870778)(c____143()))
const c____444 = _memoize(() =>
	new (string2245870778)(c____144()))
const c____445 = _memoize(() =>
	new (string2245870778)(c____145()))
const c____446 = _memoize(() =>
	new (string2245870778)(c____146()))
const c____447 = _memoize(() =>
	new (string2245870778)(c____147()))
const c____448 = _memoize(() =>
	new (string2245870778)(c____148()))
const c____449 = _memoize(() =>
	new (string2245870778)(c____149()))
const c____450 = _memoize(() =>
	new (string2245870778)(c____150()))
const c____451 = _memoize(() =>
	new (string2245870778)(c____151()))
const c____452 = _memoize(() =>
	new (string2245870778)(c____152()))
const c____453 = _memoize(() =>
	new (string2245870778)(c____153()))
const c____454 = _memoize(() =>
	new (string2245870778)(c____154()))
const c____455 = _memoize(() =>
	new (string2245870778)(c____155()))
const c____456 = _memoize(() =>
	new (string2245870778)(c____156()))
const c____457 = _memoize(() =>
	new (string2245870778)(c____157()))
const c____458 = _memoize(() =>
	new (string2245870778)(c____158()))
const c____459 = _memoize(() =>
	new (string2245870778)(c____159()))
const c____460 = _memoize(() =>
	new (string2245870778)(c____160()))
const c____461 = _memoize(() =>
	new (string2245870778)(c____161()))
const c____462 = _memoize(() =>
	new (string2245870778)(c____162()))
const c____463 = _memoize(() =>
	new (string2245870778)(c____163()))
const c____464 = _memoize(() =>
	new (string2245870778)(c____164()))
const c____465 = _memoize(() =>
	new (string2245870778)(c____165()))
const c____466 = _memoize(() =>
	new (string2245870778)(c____166()))
const c____467 = _memoize(() =>
	new (string2245870778)(c____167()))
const c____468 = _memoize(() =>
	new (string2245870778)(c____168()))
const c____469 = _memoize(() =>
	new (string2245870778)(c____169()))
const c____470 = _memoize(() =>
	new (string2245870778)(c____170()))
const c____471 = _memoize(() =>
	new (string2245870778)(c____171()))
const c____472 = _memoize(() =>
	new (string2245870778)(c____172()))
const c____473 = _memoize(() =>
	new (string2245870778)(c____173()))
const c____474 = _memoize(() =>
	new (string2245870778)(c____174()))
const c____475 = _memoize(() =>
	new (string2245870778)(c____175()))
const c____476 = _memoize(() =>
	new (string2245870778)(c____176()))
const c____477 = _memoize(() =>
	new (string2245870778)(c____177()))
const c____478 = _memoize(() =>
	new (string2245870778)(c____178()))
const c____479 = _memoize(() =>
	new (string2245870778)(c____179()))
const c____480 = _memoize(() =>
	new (string2245870778)(c____180()))
const c____481 = _memoize(() =>
	new (string2245870778)(c____181()))
const c____482 = _memoize(() =>
	new (string2245870778)(c____182()))
const c____483 = _memoize(() =>
	new (string2245870778)(c____183()))
const c____484 = _memoize(() =>
	new (string2245870778)(c____184()))
const c____485 = _memoize(() =>
	new (string2245870778)(c____185()))
const c____486 = _memoize(() =>
	new (string2245870778)(c____187()))
const c____487 = _memoize(() =>
	new (string2245870778)(c____188()))
const c____488 = _memoize(() =>
	new (string2245870778)(c____189()))
const c____489 = _memoize(() =>
	new (string2245870778)(c____190()))
const c____490 = _memoize(() =>
	new (string2245870778)(c____191()))
const c____491 = _memoize(() =>
	new (string2245870778)(c____192()))
const c____492 = _memoize(() =>
	new (string2245870778)(c____193()))
const c____493 = _memoize(() =>
	new (string2245870778)(c____194()))
const c____494 = _memoize(() =>
	new (string2245870778)(c____195()))
const c____495 = _memoize(() =>
	new (string2245870778)(c____196()))
const c____496 = _memoize(() =>
	new (string2245870778)(c____197()))
const c____497 = _memoize(() =>
	new (string2245870778)(c____198()))
const c____498 = _memoize(() =>
	new (string2245870778)(c____199()))
const c____499 = _memoize(() =>
	new (string2245870778)(c____200()))
const c____500 = _memoize(() =>
	new (string2245870778)(c____201()))
const c____501 = _memoize(() =>
	new (string2245870778)(c____202()))
const c____502 = _memoize(() =>
	new (string2245870778)(c____203()))
const c____503 = _memoize(() =>
	new (string2245870778)(c____204()))
const c____504 = _memoize(() =>
	new (string2245870778)(c____205()))
const c____505 = _memoize(() =>
	new (string2245870778)(c____206()))
const c____506 = _memoize(() =>
	new (string2245870778)(c____207()))
const c____507 = _memoize(() =>
	new (string2245870778)(c____208()))
const c____508 = _memoize(() =>
	new (string2245870778)(c____209()))
const c____509 = _memoize(() =>
	new (string2245870778)(c____210()))
const c____510 = _memoize(() =>
	new (string2245870778)(c____211()))
const c____511 = _memoize(() =>
	new (string2245870778)(c____212()))
const c____512 = _memoize(() =>
	new (string2245870778)(c____213()))
const c____513 = _memoize(() =>
	new (string2245870778)(c____214()))
const c____514 = _memoize(() =>
	new (string2245870778)(c____215()))
const c____515 = _memoize(() =>
	new (string2245870778)(c____216()))
const c____516 = _memoize(() =>
	new (string2245870778)(c____217()))
const c____517 = _memoize(() =>
	new (string2245870778)(c____218()))
const c____518 = _memoize(() =>
	new (string2245870778)(c____219()))
const c____519 = _memoize(() =>
	new (string2245870778)(c____220()))
const c____520 = _memoize(() =>
	new (string2245870778)(c____221()))
const c____521 = _memoize(() =>
	new (string2245870778)(c____222()))
const c____522 = _memoize(() =>
	new (string2245870778)(c____223()))
const c____523 = _memoize(() =>
	new (string2245870778)(c____224()))
const c____524 = _memoize(() =>
	new (string2245870778)(c____225()))
const c____525 = _memoize(() =>
	new (string2245870778)(c____226()))
const c____526 = _memoize(() =>
	new (string2245870778)(c____227()))
const c____527 = _memoize(() =>
	new (string2245870778)(c____228()))
const c____528 = _memoize(() =>
	new (string2245870778)(c____229()))
const c____529 = _memoize(() =>
	new (string2245870778)(c____230()))
const c____530 = _memoize(() =>
	new (string2245870778)(c____231()))
const c____531 = _memoize(() =>
	new (string2245870778)(c____232()))
const c____532 = _memoize(() =>
	new (string2245870778)(c____233()))
const c____533 = _memoize(() =>
	new (string2245870778)(c____234()))
const c____534 = _memoize(() =>
	new (string2245870778)(c____235()))
const c____535 = _memoize(() =>
	new (string2245870778)(c____236()))
const c____536 = _memoize(() =>
	new (string2245870778)(c____237()))
const c____537 = _memoize(() =>
	new (string2245870778)(c____238()))
const c____538 = _memoize(() =>
	new (string2245870778)(c____239()))
const c____539 = _memoize(() =>
	new (string2245870778)(c____240()))
const c____540 = _memoize(() =>
	new (string2245870778)(c____241()))
const c____541 = _memoize(() =>
	new (string2245870778)(c____242()))
const c____542 = _memoize(() =>
	new (string2245870778)(c____243()))
const c____543 = _memoize(() =>
	new (string2245870778)(c____244()))
const c____544 = _memoize(() =>
	new (string2245870778)(c____245()))
const c____545 = _memoize(() =>
	new (string2245870778)(c____246()))
const c____546 = _memoize(() =>
	new (string2245870778)(c____247()))
const c____547 = _memoize(() =>
	new (string2245870778)(c____248()))
const c____548 = _memoize(() =>
	new (string2245870778)(c____249()))
const c____549 = _memoize(() =>
	new (string2245870778)(c____250()))
const c____550 = _memoize(() =>
	new (string2245870778)(c____251()))
const c____551 = _memoize(() =>
	new (string2245870778)(c____252()))
const c____552 = _memoize(() =>
	new (duration3018374679)(1))
const c____553 = _memoize(() =>
	new (single3052500597)(c____340(), false))
const c____554 = _memoize(() =>
	new (single3052500597)(c____341(), false))
const c____555 = _memoize(() =>
	new (single3052500597)(c____342(), false))
const c____556 = _memoize(() =>
	new (build__45options3473999824)(0))
const c____557 = _memoize(() =>
	new (index__45relative__45to__45end4294105604)(0))
let v17227413630337024875
let v16487008168078846746
let v1485598979376691058 = 0
const _symbol0 = to2584131937(to2585906292("table"))
const _symbol1 = to2584131937(to2585906292("thead"))
const _symbol2 = to2584131937(to2585906292("tr"))
const _symbol3 = to2584131937(to2585906292("tbody"))
const _symbol4 = to2584131937(to2585906292("td"))
const _symbol5 = to2584131937(to2585906292("input"))
const _symbol6 = to2584131937(to2585906292("type"))
const _symbol7 = to2584131937(to2585906292("value"))
const _symbol8 = to2584131937(to2585906292("output"))
const _symbol9 = to2584131937(to2585906292("diagnostics"))
const _symbol10 = to2584131937(to2585906292("custom/syntax-translate"))
const _symbol11 = to2584131937(to2585906292("from-language"))
const _symbol12 = to2584131937(to2585906292("source"))
const _symbol13 = to2584131937(to2585906292("to-language"))
const _symbol14 = to2584131937(to2585906292("id"))
const _symbol15 = to2584131937(to2585906292("method"))
const _symbol16 = to2584131937(to2585906292("params"))
const _symbol17 = to2584131937(to2585906292("th"))
const _symbol18 = to2584131937(to2585906292("mode"))
const _symbol19 = to2584131937(to2585906292("connectedCallback"))
const _symbol20 = to2584131937(to2585906292("div"))
const _symbol21 = to2584131937(to2585906292("textarea"))
const _symbol22 = to2584131937(to2585906292("spellcheck"))
const _symbol23 = to2584131937(to2585906292("span"))
const _symbol24 = to2584131937(to2585906292("popover"))
const _symbol25 = to2584131937(to2585906292("role"))
const _symbol26 = to2584131937(to2585906292("left"))
const _symbol27 = to2584131937(to2585906292("top"))
const _symbol28 = to2584131937(to2585906292("textDocument/hover"))
const _symbol29 = to2584131937(to2585906292("contents"))
const _symbol30 = to2584131937(to2585906292("uri"))
const _symbol31 = to2584131937(to2585906292("character"))
const _symbol32 = to2584131937(to2585906292("line"))
const _symbol33 = to2584131937(to2585906292("position"))
const _symbol34 = to2584131937(to2585906292("textDocument"))
const _symbol35 = to2584131937(to2585906292("textDocument/semanticTokens/full"))
const _symbol36 = to2584131937(to2585906292("data"))
const _symbol37 = to2584131937(to2585906292("textDocument/didOpen"))
const _symbol38 = to2584131937(to2585906292("text"))
const _symbol39 = to2584131937(to2585906292("Home"))
const _symbol40 = to2584131937(to2585906292("Enter"))
const _symbol41 = to2584131937(to2585906292("Tab"))
const _symbol42 = to2584131937(to2585906292("PageUp"))
const _symbol43 = to2584131937(to2585906292("PageDown"))
const _symbol44 = to2584131937(to2585906292("name"))
const _symbol45 = to2584131937(to2585906292("no-run"))
const _symbol46 = to2584131937(to2585906292("test"))
const _symbol47 = to2584131937(to2585906292("float"))
const _symbol48 = to2584131937(to2585906292("height"))
const _symbol49 = to2584131937(to2585906292("code"))
const _symbol50 = to2584131937(to2585906292("br"))
const _symbol51 = to2584131937(to2585906292("script"))
const _symbol52 = to2584131937(to2585906292("custom/build-js-script"))
const _symbol53 = to2584131937(to2585906292("diagnosticsOnlyForUris"))
const _symbol54 = to2584131937(to2585906292("main-kind"))
const _symbol55 = to2584131937(to2585906292("keen-loading-spinner"))
const _symbol56 = to2584131937(to2585906292("button"))
const _symbol57 = to2584131937(to2585906292("title"))
const _symbol58 = to2584131937(to2585906292("keen-text"))
const _symbol59 = to2584131937(to2585906292("info"))
const _symbol60 = to2584131937(to2585906292("warn"))
const _symbol61 = to2584131937(to2585906292("error"))
const _symbol62 = to2584131937(to2585906292("theme"))
const _symbol63 = to2584131937(to2585906292("dark"))
const _symbol64 = to2584131937(to2585906292("light"))
const _symbol65 = to2584131937(to2585906292("icon"))
const _symbol66 = to2584131937(to2585906292("download"))
const _symbol67 = to2584131937(to2585906292("external-link"))
const _symbol68 = to2584131937(to2585906292("home"))
const _symbol69 = to2584131937(to2585906292("up"))
const _symbol70 = to2584131937(to2585906292("play"))
const _symbol71 = to2584131937(to2585906292("result"))
const _symbol72 = to2584131937(to2585906292("custom/perf-report"))
const _symbol73 = to2584131937(to2585906292("textDocument/publishDiagnostics"))
const _symbol74 = to2584131937(to2585906292("initialize"))
const _symbol75 = to2584131937(to2585906292("start"))
const _symbol76 = to2584131937(to2585906292("end"))
const _symbol77 = to2584131937(to2585906292("range"))
const _symbol78 = to2584131937(to2585906292("severity"))
const _symbol79 = to2584131937(to2585906292("message"))
const _symbol80 = to2584131937(to2585906292(""))

;(await _async_main1383715270())