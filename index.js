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
	1;
const _compareFloat = (a, b) =>
	a < b ? 0 :
	b < a ? 2 :
	Object.is(a, b) ? 1 :
	Number.isNaN(a) ? 0 :
	Number.isNaN(b) ? 2 :
	Object.is(a, -0) ? 0 : 2;class exception2825869905553516124 extends Error {
	get message() {
		return new (TextDecoder)().decode(new (Uint8Array)(show3552818353380165450(this).chars.map(Number)))
	}
}
// string
class string9092701471797383860 {
	constructor(chars) {
		this.chars = chars
	}
}
// symbol
class symbol11978982047599604571 {
	constructor(symbol__45seeded__45hash, symbol__45deterministic__45hash, symbol__45chars) {
		this["symbol-seeded-hash"] = symbol__45seeded__45hash
		this["symbol-deterministic-hash"] = symbol__45deterministic__45hash
		this["symbol-chars"] = symbol__45chars
	}
}
// deserialize-error
class deserialize__45error7319880037343575041 extends exception2825869905553516124 {
	constructor(expected, value) {
		super()
		this.expected = expected
		this.value = value
	}
}
// json
class json11387066671148698414 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// null
class null13632064846172113175 {
}
// json-object
class json__45object4052534663485263901 {
	constructor(keys, values) {
		this.keys = keys
		this.values = values
	}
}
// error
class error14987278044892349075 extends exception2825869905553516124 {
	constructor(show) {
		super()
		this.show = show
	}
}
// none
class none12752313651180151000 {
}
// (symbol, json) tuple2
class tuple210381644676499725263 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// hash-state
class hash__45state18388613448778446686 {
	constructor(state, dummy) {
		this.state = state
		this.dummy = dummy
	}
}
// keen-server
class keen__45server10037455106789271941 {
	constructor(worker, responses, next__45id, diagnostics, diagnostics__45handlers) {
		this.worker = worker
		this.responses = responses
		this["next-id"] = next__45id
		this.diagnostics = diagnostics
		this["diagnostics-handlers"] = diagnostics__45handlers
	}
}
// json deferred
class deferred6160713746550163298 {
	constructor(promise, resolve) {
		this.promise = promise
		this.resolve = resolve
	}
}
// (nat64, json deferred) mut-map
class mut__45map13355323242943736379 {
	constructor(locked, size_, entries) {
		this.locked = locked
		this.size_ = size_
		this.entries = entries
	}
}
// (nat64, json deferred) tuple2
class tuple212663747997492605280 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// uri
class uri10474195645524913655 {
	constructor(to) {
		this.to = to
	}
}
// lsp-diagnostic
class lsp__45diagnostic12287699751428889964 {
	constructor(range, severity, message) {
		this.range = range
		this.severity = severity
		this.message = message
	}
}
// line-and-character-range
class line__45and__45character__45range14393235492370956285 {
	constructor(start, end) {
		this.start = start
		this.end = end
	}
}
// line-and-character
class line__45and__45character615878410298802810 {
	constructor(line, character) {
		this.line = line
		this.character = character
	}
}
// (uri, lsp-diagnostic array) mut-map
class mut__45map6550711960370863065 {
	constructor(locked, size_, entries) {
		this.locked = locked
		this.size_ = size_
		this.entries = entries
	}
}
// (uri, lsp-diagnostic array) tuple2
class tuple210256334102407564326 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (uri, (void, lsp-diagnostic array) lambda-mut) mut-map
class mut__45map16880255461643360402 {
	constructor(locked, size_, entries) {
		this.locked = locked
		this.size_ = size_
		this.entries = entries
	}
}
// (uri, (void, lsp-diagnostic array) lambda-mut) tuple2
class tuple28221928096440926123 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// js-any option
class option17597932037503078337 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// classes
class classes11373242258454798301 {
	constructor(node) {
		this.node = node
	}
}
// arithmetic-error
class arithmetic__45error8744457142948490603 extends exception2825869905553516124 {
	constructor(operation, inputs) {
		super()
		this.operation = operation
		this.inputs = inputs
	}
}
// number
class number17074854190323093712 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// index-too-big
class index__45too__45big2628637778731366537 extends exception2825869905553516124 {
	constructor(actual, max__45exclusive) {
		super()
		this.actual = actual
		this["max-exclusive"] = max__45exclusive
	}
}
// custom-element-node
class custom__45element__45node6535545548714149157 {
	constructor(dummy) {
		this.dummy = dummy
	}
}
// custom-element-options
class custom__45element__45options9367161635018646401 {
	constructor(styles) {
		this.styles = styles
	}
}
// (symbol, string) map
class map1545462317922802610 {
	constructor(root) {
		this.root = root
	}
}
// (symbol, string) frozen-map
class frozen__45map12255235111266041392 {
	constructor(pairs, bucket__45starts) {
		this.pairs = pairs
		this["bucket-starts"] = bucket__45starts
	}
}
// (symbol, string) tuple2
class tuple26452499447382064753 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (symbol, string) inner-node
class inner__45node199949891438391559 {
	constructor(nodes) {
		this.nodes = nodes
	}
}
// symbol array with-index
class with__45index12490183017769180389 {
	constructor(inner) {
		this.inner = inner
	}
}
// (nat64, symbol) tuple2
class tuple21582738628210929474 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (symbol, string) map-unsorted
class map__45unsorted3889173285187788569 {
	constructor(inner) {
		this.inner = inner
	}
}
// (symbol, string) tuple2 buffer-view
class buffer__45view6087494128730688282 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// nat64 range
class range4416311233428082532 {
	constructor(low, high) {
		this.low = low
		this.high = high
	}
}
// range-relative-to-end
class range__45relative__45to__45end15042407024875787184 {
	constructor(low, high) {
		this.low = low
		this.high = high
	}
}
// index-relative-to-end
class index__45relative__45to__45end8245774424878029406 {
	constructor(subtract) {
		this.subtract = subtract
	}
}
// (symbol, string) tuple2 array-view
class array__45view5216778068209014760 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// syntax-translate-params
class syntax__45translate__45params13158403322448452476 {
	constructor(source, from__45language, to__45language) {
		this.source = source
		this["from-language"] = from__45language
		this["to-language"] = to__45language
	}
}
// syntax-translate-result
class syntax__45translate__45result13252000517598564106 {
	constructor(output, diagnostics) {
		this.output = output
		this.diagnostics = diagnostics
	}
}
// char8 array-view
class array__45view15480539823764319015 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// char8 buffer-view
class buffer__45view3750434435755209345 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// unreachable
class unreachable14113598576212083658 extends exception2825869905553516124 {
}
// (symbol array, json array) zip
class zip12891861950613267480 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// build-options
class build__45options14619063373532228768 {
	constructor(size__45hint) {
		this["size-hint"] = size__45hint
	}
}
// char8 builder
class builder8588567801563707425 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// was-locked
class was__45locked658591519880986109 extends exception2825869905553516124 {
}
// secure-random
class secure__45random14152235312814091713 {
}
// (nat64, json deferred) tuple2 option buffer-view
class buffer__45view15794038716062724547 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (nat64, json deferred) tuple2 option array-view
class array__45view2578656777550010924 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// nat64 option option
class option10694819152045853148 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// (symbol array, json array) tuple2
class tuple215552198414961759881 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// symbol buffer-view
class buffer__45view11590763453411951278 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// json buffer-view
class buffer__45view10560204057896667799 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// json array-view
class array__45view6906104235665091390 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// symbol array-view
class array__45view4665325390507424622 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// js-any builder
class builder5671747725312963582 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// js-any array-view
class array__45view8872559116412833258 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// js-any buffer-view
class buffer__45view8026343756339215895 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// nat64 array-view
class array__45view9776576073286985664 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// nat64 buffer-view
class buffer__45view2646452298954775773 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (symbol, string) tuple2 builder
class builder10333849375514757046 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// (symbol, string) tuple2 array-view with-index
class with__45index3633457434373451827 {
	constructor(inner) {
		this.inner = inner
	}
}
// (nat64, (symbol, string) tuple2) tuple2
class tuple28241260321252476408 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (js-any, js-any array) tuple2
class tuple22383785962486546224 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) map
class map1109280453227245716 {
	constructor(root) {
		this.root = root
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) frozen-map
class frozen__45map17330447661197982178 {
	constructor(pairs, bucket__45starts) {
		this.pairs = pairs
		this["bucket-starts"] = bucket__45starts
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2
class tuple21932746293587380923 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) inner-node
class inner__45node7440087989924078177 {
	constructor(nodes) {
		this.nodes = nodes
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view
class array__45view7959381185096989027 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer-view
class buffer__45view10527044545370562158 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 builder
class builder12323288060082735227 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view with-index
class with__45index15081844335267981266 {
	constructor(inner) {
		this.inner = inner
	}
}
// (nat64, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) tuple2
class tuple29848229988263964139 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) map-unsorted
class map__45unsorted8697784728381805410 {
	constructor(inner) {
		this.inner = inner
	}
}
// expected-equal
class expected__45equal14446889629956317080 extends exception2825869905553516124 {
	constructor(a, b) {
		super()
		this.a = a
		this.b = b
	}
}
// lines
class lines12939704884693284529 {
	constructor(lines) {
		this.lines = lines
	}
}
// single
class single15714947171587583006 {
	constructor(text, needs__45parens) {
		this.text = text
		this["needs-parens"] = needs__45parens
	}
}
// json array with-index
class with__45index17642999489198635040 {
	constructor(inner) {
		this.inner = inner
	}
}
// (nat64, json) tuple2
class tuple212942074040942771617 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// string builder
class builder3188125740036671108 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// to-kid-result array with-index
class with__45index6798077853849460881 {
	constructor(inner) {
		this.inner = inner
	}
}
// (nat64, to-kid-result) tuple2
class tuple21322332467824830590 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// string buffer-view
class buffer__45view12470964373396697688 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// string array-view
class array__45view561589902681146172 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// char8 array-iterator
class array__45iterator11262599198005585220 {
	constructor(array, start, cur, end) {
		this.array = array
		this.start = start
		this.cur = cur
		this.end = end
	}
}
// symbol-key
class symbol__45key2816707517888012876 {
	constructor(hash, chars) {
		this.hash = hash
		this.chars = chars
	}
}
// (symbol, symbol-key) object-memoizer
class object__45memoizer18285240245868561688 {
	constructor(max__45cost, capacity__45log__452, index__45mask, entries) {
		this["max-cost"] = max__45cost
		this["capacity-log-2"] = capacity__45log__452
		this["index-mask"] = index__45mask
		this.entries = entries
	}
}
// symbol weak-ref buffer-view
class buffer__45view14776035131899902462 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// symbol option option
class option924936842999394469 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// unicode-decode-error
class unicode__45decode__45error4554044903108079804 extends exception2825869905553516124 {
}
// nat32 range
class range13642156005642883755 {
	constructor(low, high) {
		this.low = low
		this.high = high
	}
}
// iterator-out-of-bounds
class iterator__45out__45of__45bounds15075223189503120726 extends exception2825869905553516124 {
}
// keen-text
class keen__45text815051369196550100 {
	constructor(node, props, nodes, diag__45debounce, tokens) {
		this.node = node
		this.props = props
		this.nodes = nodes
		this["diag-debounce"] = diag__45debounce
		this.tokens = tokens
	}
}
// keen-text-props
class keen__45text__45props17617314961994595397 {
	constructor(keen, uri, initial__45text) {
		this.keen = keen
		this.uri = uri
		this["initial-text"] = initial__45text
	}
}
// keen-text-nodes
class keen__45text__45nodes4845108110779241250 {
	constructor(text, highlight, line__45numbers) {
		this.text = text
		this.highlight = highlight
		this["line-numbers"] = line__45numbers
	}
}
// debouncer
class debouncer14023245979395367712 {
	constructor(msec, timeout) {
		this.msec = msec
		this.timeout = timeout
	}
}
// token
class token3305246204331822241 {
	constructor(line, character, length, type) {
		this.line = line
		this.character = character
		this.length = length
		this.type = type
	}
}
// attributes
class attributes5212489950917554841 {
	constructor(node) {
		this.node = node
	}
}
// interrupter
class interrupter16478128288838294701 {
	constructor(current) {
		this.current = current
	}
}
// js-any option reference
class reference2025217208433836451 {
	constructor(reference__45value) {
		this["reference-value"] = reference__45value
	}
}
// node-builder
class node__45builder5906780914980770957 {
	constructor(lines, diagnostics, pos, container__45stack, diag__45index) {
		this.lines = lines
		this.diagnostics = diagnostics
		this.pos = pos
		this["container-stack"] = container__45stack
		this["diag-index"] = diag__45index
	}
}
// all-container
class all__45container9644686131324329992 {
	constructor(nodes) {
		this.nodes = nodes
	}
}
// js-any mut-array
class mut__45array15883105039927384425 {
	constructor(backing, size__45and__45locked) {
		this.backing = backing
		this["size-and-locked"] = size__45and__45locked
	}
}
// line-container
class line__45container3413697399421472374 {
	constructor(nodes) {
		this.nodes = nodes
	}
}
// diag-container
class diag__45container18328117606960731327 {
	constructor(children, end, message) {
		this.children = children
		this.end = end
		this.message = message
	}
}
// text-container
class text__45container10555084246801409684 {
	constructor(text) {
		this.text = text
	}
}
// container mut-array
class mut__45array9223221294599271429 {
	constructor(backing, size__45and__45locked) {
		this.backing = backing
		this["size-and-locked"] = size__45and__45locked
	}
}
// container option
class option8382729855974258299 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// char8 array array-view
class array__45view18403251639396120164 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// char8 array buffer-view
class buffer__45view13122600021497247433 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// container buffer-view
class buffer__45view15724133442252246560 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// container array-view
class array__45view1539156142368323695 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// char8 array-view builder
class builder3410877773743268554 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// char8 array-view buffer-view
class buffer__45view1363287095204429306 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// char8 array-view array-view
class array__45view14288610044726605630 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// lsp-diagnostic array-view
class array__45view15178845661211372146 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// lsp-diagnostic buffer-view
class buffer__45view1438560336382251092 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option buffer-view
class buffer__45view11689099277984535309 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option array-view
class array__45view13799921455024358542 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// vec2-64
class vec2__45646885811654597736479 {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
}
// got-hover
class got__45hover4907230514421646949 {
	constructor(text, is__45diagnostic) {
		this.text = text
		this["is-diagnostic"] = is__45diagnostic
	}
}
// style
class style562961296817762340 {
	constructor(node) {
		this.node = node
	}
}
// hover-params
class hover__45params3092478151266892357 {
	constructor(params) {
		this.params = params
	}
}
// text-document-position-params
class text__45document__45position__45params1944773533187291426 {
	constructor(textDocument, position) {
		this.textDocument = textDocument
		this.position = position
	}
}
// text-document-identifier
class text__45document__45identifier7312983694771448059 {
	constructor(uri) {
		this.uri = uri
	}
}
// json-copy
class json__45copy9133080952047553587 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// semantic-tokens-params
class semantic__45tokens__45params9274090045395605629 {
	constructor(textDocument) {
		this.textDocument = textDocument
	}
}
// decode-semantic-tokens
class decode__45semantic__45tokens1879504775561134758 {
	constructor(inner) {
		this.inner = inner
	}
}
// semantic-tokens
class semantic__45tokens3937383226681102639 {
	constructor(data_) {
		this.data_ = data_
	}
}
// did-open-text-document-params
class did__45open__45text__45document__45params3134243963385049932 {
	constructor(textDocument) {
		this.textDocument = textDocument
	}
}
// text-document-item
class text__45document__45item3135008948155119709 {
	constructor(uri, text) {
		this.uri = uri
		this.text = text
	}
}
// names
class names11183638434130471365 {
	constructor(seen, next__45index) {
		this.seen = seen
		this["next-index"] = next__45index
	}
}
// string mut-set
class mut__45set15935972040150848162 {
	constructor(inner) {
		this.inner = inner
	}
}
// (string, void) mut-map
class mut__45map17052756008813012091 {
	constructor(locked, size_, entries) {
		this.locked = locked
		this.size_ = size_
		this.entries = entries
	}
}
// (string, void) tuple2
class tuple2996480197648150176 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// run-output
class run__45output7566674529171335335 {
	constructor(container) {
		this.container = container
	}
}
// write
class write7745164403500584357 {
	constructor(pipe, text) {
		this.pipe = pipe
		this.text = text
	}
}
// build-js-script-result
class build__45js__45script__45result4331811127655445505 {
	constructor(diagnostics, script) {
		this.diagnostics = diagnostics
		this.script = script
	}
}
// build-js-script-params
class build__45js__45script__45params1829957171103529864 {
	constructor(main__45kind, uri, diagnosticsOnlyForUris) {
		this["main-kind"] = main__45kind
		this.uri = uri
		this.diagnosticsOnlyForUris = diagnosticsOnlyForUris
	}
}
// write mut-array
class mut__45array16197001839536043381 {
	constructor(backing, size__45and__45locked) {
		this.backing = backing
		this["size-and-locked"] = size__45and__45locked
	}
}
// write builder
class builder7032837947966339799 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// write buffer-view
class buffer__45view5826670876611313479 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// write array-view
class array__45view870808357113815035 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// duration
class duration11429026632846930866 {
	constructor(seconds) {
		this.seconds = seconds
	}
}
// parse-error
class parse__45error14814424712875317110 extends exception2825869905553516124 {
	constructor(input, index, expected) {
		super()
		this.input = input
		this.index = index
		this.expected = expected
	}
}
// (string, void) tuple2 option buffer-view
class buffer__45view17651792463811375927 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (string, void) tuple2 option array-view
class array__45view9400498415358213712 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// local-storage
class local__45storage18297336827894256865 {
}
// todo
class todo11797122415505553379 extends exception2825869905553516124 {
}
// void deferred
class deferred14824656033275453911 {
	constructor(promise, resolve) {
		this.promise = promise
		this.resolve = resolve
	}
}
// publish-diagnostics-params
class publish__45diagnostics__45params14349708187806702366 {
	constructor(uri, diagnostics) {
		this.uri = uri
		this.diagnostics = diagnostics
	}
}
// (uri, lsp-diagnostic array) tuple2 option buffer-view
class buffer__45view5965882061129654354 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (uri, lsp-diagnostic array) tuple2 option array-view
class array__45view16145528282488670175 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// json option
class option14900042547235985021 {
	constructor(index, value) {
		this.index = index
		this.value = value
	}
}
// json builder
class builder15502675838613290396 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// inner-parse-error
class inner__45parse__45error10218544602784777059 extends exception2825869905553516124 {
	constructor(expected) {
		super()
		this.expected = expected
	}
}
// (symbol, json) map
class map13779824056774216095 {
	constructor(root) {
		this.root = root
	}
}
// (symbol, json) frozen-map
class frozen__45map12918844883644871653 {
	constructor(pairs, bucket__45starts) {
		this.pairs = pairs
		this["bucket-starts"] = bucket__45starts
	}
}
// (symbol, json) inner-node
class inner__45node5984648194967059355 {
	constructor(nodes) {
		this.nodes = nodes
	}
}
// (symbol, json) tuple2 builder
class builder16402866696858817879 {
	constructor(buffer, cur__45size) {
		this.buffer = buffer
		this["cur-size"] = cur__45size
	}
}
// (nat64, nat64) tuple2
class tuple28688078643798573938 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (json, json) tuple2
class tuple29187502997329124282 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// (symbol, json) map-unsorted
class map__45unsorted5081736359004696596 {
	constructor(inner) {
		this.inner = inner
	}
}
// (symbol, json) tuple2 buffer-view
class buffer__45view305042617080059601 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (symbol, json) tuple2 array-view
class array__45view15132187800601660038 {
	constructor(inner, low, high) {
		this.inner = inner
		this.low = low
		this.high = high
	}
}
// (symbol, json) tuple2 array-view with-index
class with__45index18132111711419564695 {
	constructor(inner) {
		this.inner = inner
	}
}
// (nat64, (symbol, json) tuple2) tuple2
class tuple27945273125401615756 {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
}
// invalid-unicode-character
class invalid__45unicode__45character8514911918857176900 extends exception2825869905553516124 {
	constructor(character) {
		super()
		this.character = character
	}
}
// tokens-and-diags-to-nodes file:///home/andy/keen.foo/script/highlight-tokens.keen 7:1
const tokens__45and__45diags__45to__45nodes5413784784235159100 = (l_tokens___3, l_diagnostics___1, l_text___2) => {
	let l_temp___6
	const l_a___0 = new8316248528596334779(l_diagnostics___1, l_text___2)
	start__45line1162557521902566880(l_a___0)
	for (const l_token___4 of l_tokens___3) {
		walk__45to12657891827740842621(l_a___0, new13808961360227838714(line4472995048865600499(l_token___4), character13844740545945210552(l_token___4)))
		;(void maybe__45start__45diag6374669948562628185(l_a___0))
		add__45span2308762942957960358(l_a___0, to12637710154116563759(type10261190574335516740(l_token___4)), new13808961360227838714(line4472995048865600499(l_token___4), __437467979216580978677(character13844740545945210552(l_token___4), length13874123960348938514(l_token___4))))
		maybe__45stop__45diag14410873279159758379(l_a___0)
	}
	walk__45to12657891827740842621(l_a___0, last__45position11709854381192884880(lines10579512676244640593(l_a___0)))
	end__45line17349545988446508094(l_a___0)
	if (Object.is(size14517749307210698983(container__45stack7526940263883346332(l_a___0)), 1n)) {
		return move__45to6134052159628344429(nodes10027013268055913002((() => {
					const l_member2___5 = all__45container2923222844551678312(subscript12935626427853864777(container__45stack7526940263883346332(l_a___0), 0n))
					const x_matched___0 = l_member2___5
					if ((x_matched___0 instanceof none12752313651180151000)) {
						throw new (error14987278044892349075)(c____411())
					} else {
						if ((x_matched___0 instanceof all__45container9644686131324329992)) {
							return ((l_temp___6 = l_member2___5) , l_temp___6)
						} else {
							return _unreachable()
						}
					}
				})()))
	} else {
		throw new (error14987278044892349075)(c____412())
	}
}
// new file:///home/andy/keen.foo/script/highlight-tokens.keen 23:1
const new1351283769047738007 = (l_lines___0, l_diagnostics___1, l_pos___2, l_container__45stack___3, l_diag__45index___4) =>
	new (node__45builder5906780914980770957)(l_lines___0, l_diagnostics___1, l_pos___2, l_container__45stack___3, l_diag__45index___4)
// lines file:///home/andy/keen.foo/script/highlight-tokens.keen 24:5
const lines10579512676244640593 = l_a___0 =>
	l_a___0.lines
// diagnostics file:///home/andy/keen.foo/script/highlight-tokens.keen 25:5
const diagnostics8323830058898830165 = l_a___0 =>
	l_a___0.diagnostics
// pos file:///home/andy/keen.foo/script/highlight-tokens.keen 26:5
const pos2050913250050484762 = l_a___0 =>
	l_a___0.pos
// set-pos file:///home/andy/keen.foo/script/highlight-tokens.keen 26:5
const set__45pos1796554241245563230 = (l_a___0, l_pos___1) => {
	l_a___0.pos = l_pos___1
}
// container-stack file:///home/andy/keen.foo/script/highlight-tokens.keen 27:5
const container__45stack7526940263883346332 = l_a___0 =>
	l_a___0["container-stack"]
// set-diag-index file:///home/andy/keen.foo/script/highlight-tokens.keen 28:5
const set__45diag__45index11163443077391699395 = (l_a___0, l_diag__45index___1) => {
	l_a___0["diag-index"] = l_diag__45index___1
}
// diag-index file:///home/andy/keen.foo/script/highlight-tokens.keen 28:5
const diag__45index14270138867018904868 = l_a___0 =>
	l_a___0["diag-index"]
// new file:///home/andy/keen.foo/script/highlight-tokens.keen 29:1
const new8316248528596334779 = (l_diagnostics___2, l_text___0) =>
	new1351283769047738007(map5957718311786268760(split4387416293401962831(l_text___0, c____374()), l_it___1 =>
				to1694745619930020520(l_it___1)), l_diagnostics___2, c____303(), list__45new16270892627368113124([all__45container3060227089423825685(list__45new14873167745082155644(c____258()))]), 0n)
// pop-container file:///home/andy/keen.foo/script/highlight-tokens.keen 37:1
const pop__45container17779802904764691489 = l_a___2 => {
	let l_temp___3, l_diag__45children___5, l_temp___8
	const l_popped___0 = (() => {
		const l_member2___1 = pop5762832291804711118(container__45stack7526940263883346332(l_a___2))
		const x_matched___0 = l_member2___1
		if ((x_matched___0.index === 0)) {
			throw new (error14987278044892349075)(c____414())
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
		if ((x_matched___1 instanceof line__45container3413697399421472374)) {
			return create__45div7678826057371039427(c____415(), move__45to6134052159628344429(nodes11725885378281553463(l_popped___0)))
		} else {
			if ((x_matched___1 instanceof diag__45container18328117606960731327)) {
				return ((l_diag__45children___5 = move__45to6134052159628344429(children9217228362722457772(l_popped___0))) , create__45span6220041900778670653(c____416(), list__45new15738010718011681032(c____294()), (is__45empty127032192138432442(l_diag__45children___5) ? list__45new16687999342081306217([create__45text__45node16218478718735299168(c____382())]) : l_diag__45children___5)))
			} else {
				throw unreachable15541723113030349832()
			}
		}
	})()
	const l_last__45container___6 = (() => {
		const l_member2___7 = peek3730836223819749536(container__45stack7526940263883346332(l_a___2))
		const x_matched___2 = l_member2___7
		if ((x_matched___2.index === 0)) {
			throw new (error14987278044892349075)(c____413())
		} else {
			if ((x_matched___2.index === 1)) {
				return ((l_temp___8 = l_member2___7.value) , l_temp___8)
			} else {
				return _unreachable()
			}
		}
	})()
	if ((text__45container11460594166955753848(l_last__45container___6) instanceof text__45container10555084246801409684)) {
		throw new (error14987278044892349075)(c____417())
	} else {
		__126__6111546880776814955033(children12935120198002978150(l_last__45container___6), l_child___4)
	}
}
// start-line file:///home/andy/keen.foo/script/highlight-tokens.keen 56:1
const start__45line1162557521902566880 = l_a___0 =>
	__126__6115042260835953553950(container__45stack7526940263883346332(l_a___0), line__45container10020361887133241006(list__45new14873167745082155644(c____258())))
// end-line file:///home/andy/keen.foo/script/highlight-tokens.keen 58:1
const end__45line17349545988446508094 = l_a___1 => {
	let l_temp___2
	x_loop___0: while (true){
		if ((line__45container8231743864339836066((() => {
						const l_member2___0 = peek3730836223819749536(container__45stack7526940263883346332(l_a___1))
						const x_matched___1 = l_member2___0
						if ((x_matched___1.index === 0)) {
							throw new (error14987278044892349075)(c____413())
						} else {
							if ((x_matched___1.index === 1)) {
								return ((l_temp___2 = l_member2___0.value) , l_temp___2)
							} else {
								return _unreachable()
							}
						}
					})()) instanceof line__45container3413697399421472374)) {
			pop__45container17779802904764691489(l_a___1)
			break  x_loop___0
		} else {
			pop__45container17779802904764691489(l_a___1)
			continue
		}
	}
}
// next-line file:///home/andy/keen.foo/script/highlight-tokens.keen 62:1
const next__45line12387664390639014129 = l_a___0 => {
	end__45line17349545988446508094(l_a___0)
	start__45line1162557521902566880(l_a___0)
}
// finish-text file:///home/andy/keen.foo/script/highlight-tokens.keen 66:1
const finish__45text3388595177286456497 = l_a___2 => {
	let l_temp___3, l_temp___5, l_temp___8
	const l_last___0 = (() => {
		const l_member2___1 = peek3730836223819749536(container__45stack7526940263883346332(l_a___2))
		const x_matched___0 = l_member2___1
		if ((x_matched___0.index === 0)) {
			throw new (error14987278044892349075)(c____413())
		} else {
			if ((x_matched___0.index === 1)) {
				return ((l_temp___3 = l_member2___1.value) , l_temp___3)
			} else {
				return _unreachable()
			}
		}
	})()
	if ((text__45container11460594166955753848(l_last___0) instanceof text__45container10555084246801409684)) {
		(void (() => {
			const l_member2___4 = pop5762832291804711118(container__45stack7526940263883346332(l_a___2))
			const x_matched___1 = l_member2___4
			if ((x_matched___1.index === 0)) {
				throw new (error14987278044892349075)(c____414())
			} else {
				if ((x_matched___1.index === 1)) {
					return ((l_temp___5 = l_member2___4.value) , l_temp___5)
				} else {
					return _unreachable()
				}
			}
		})())
		const l_new__45last___6 = (() => {
			const l_member2___7 = peek3730836223819749536(container__45stack7526940263883346332(l_a___2))
			const x_matched___2 = l_member2___7
			if ((x_matched___2.index === 0)) {
				throw new (error14987278044892349075)(c____413())
			} else {
				if ((x_matched___2.index === 1)) {
					return ((l_temp___8 = l_member2___7.value) , l_temp___8)
				} else {
					return _unreachable()
				}
			}
		})()
		if ((text__45container11460594166955753848(l_new__45last___6) instanceof text__45container10555084246801409684)) {
			throw new (error14987278044892349075)(c____436())
		} else {
			__126__6111546880776814955033(children12935120198002978150(l_new__45last___6), create__45text__45span11091813019040017862(c____437(), text16426781381137871272(l_last___0)))
		}
	} else {
		(void 0)
	}
}
// maybe-start-diag file:///home/andy/keen.foo/script/highlight-tokens.keen 75:1
const maybe__45start__45diag6374669948562628185 = l_a___0 => {
	let l_temp___3
	if (__6010307380702345989795(diag__45index14270138867018904868(l_a___0), BigInt(diagnostics8323830058898830165(l_a___0).length))) {
		const l_diag___1 = subscript12048779277294055666(diagnostics8323830058898830165(l_a___0), diag__45index14270138867018904868(l_a___0))
		if (__60__619399543158548096012(start11980012380947064971(range18388480328649839984(l_diag___1)), pos2050913250050484762(l_a___0))) {
			if ((diag__45container187792585888259374((() => {
							const l_member2___2 = peek3730836223819749536(container__45stack7526940263883346332(l_a___0))
							const x_matched___0 = l_member2___2
							if ((x_matched___0.index === 0)) {
								throw new (error14987278044892349075)(c____413())
							} else {
								if ((x_matched___0.index === 1)) {
									return ((l_temp___3 = l_member2___2.value) , l_temp___3)
								} else {
									return _unreachable()
								}
							}
						})()) instanceof diag__45container18328117606960731327)) {
				(void 0)
			} else {
				finish__45text3388595177286456497(l_a___0)
				__126__6115042260835953553950(container__45stack7526940263883346332(l_a___0), new16282430314578686279(list__45new14873167745082155644(c____258()), end10640653859827471309(range18388480328649839984(l_diag___1)), message14106875049917279754(l_diag___1)))
			}
			set__45diag__45index11163443077391699395(l_a___0, __431000895641751717785(diag__45index14270138867018904868(l_a___0), 1n))
			return true
		} else {
			return false
		}
	} else {
		return false
	}
}
// should-stop-diag file:///home/andy/keen.foo/script/highlight-tokens.keen 86:1
const should__45stop__45diag10941007047855255040 = l_a___2 => {
	let l_temp___3, l_last__45container___0
	return ((l_last__45container___0 = (() => {
		const l_member2___1 = peek3730836223819749536(container__45stack7526940263883346332(l_a___2))
		const x_matched___0 = l_member2___1
		if ((x_matched___0.index === 0)) {
			throw new (error14987278044892349075)(c____413())
		} else {
			if ((x_matched___0.index === 1)) {
				return ((l_temp___3 = l_member2___1.value) , l_temp___3)
			} else {
				return _unreachable()
			}
		}
	})()) , ((diag__45container187792585888259374(l_last__45container___0) instanceof diag__45container18328117606960731327) ? __60__619399543158548096012(end16623926965122730525(l_last__45container___0), pos2050913250050484762(l_a___2)) : false))
}
// maybe-stop-diag file:///home/andy/keen.foo/script/highlight-tokens.keen 90:1
const maybe__45stop__45diag14410873279159758379 = l_a___0 =>
	(should__45stop__45diag10941007047855255040(l_a___0) ? pop__45container17779802904764691489(l_a___0) : (void 0))
// no-token-node file:///home/andy/keen.foo/script/highlight-tokens.keen 94:1
const no__45token__45node16216312703881984278 = (l_a___1, l_start__45pos___0) => {
	if (__6013544777056381821656(l_start__45pos___0, pos2050913250050484762(l_a___1))) {
		return create__45text__45span11091813019040017862(c____437(), to11893448832805940642(slice__45line4145410679069204878(lines10579512676244640593(l_a___1), l_start__45pos___0, pos2050913250050484762(l_a___1))))
	} else {
		throw new (error14987278044892349075)(c____438())
	}
}
// walk-to file:///home/andy/keen.foo/script/highlight-tokens.keen 98:1
const walk__45to12657891827740842621 = (l_a___1, l_end__45pos___2) => {
	let l_temp___5, l_temp___7, l_temp___9
	let l_start__45pos___0 = pos2050913250050484762(l_a___1)
	x_loop___0: while (true){
		if (__6013544777056381821656(pos2050913250050484762(l_a___1), l_end__45pos___2)) {
			if (maybe__45start__45diag6374669948562628185(l_a___1)) {
				(__6013544777056381821656(l_start__45pos___0, pos2050913250050484762(l_a___1)) ? __126__6111546880776814955033(children12935120198002978150(subscript2508056794084842249(container__45stack7526940263883346332(l_a___1), __452101191994244905068(c____304(), 2n))), no__45token__45node16216312703881984278(l_a___1, l_start__45pos___0)) : (void 0))
				l_start__45pos___0 = pos2050913250050484762(l_a___1)
			} else {
				(void 0)
			}
			const l_next__45pos___3 = next__45position8604152804231869151(lines10579512676244640593(l_a___1), pos2050913250050484762(l_a___1))
			if (__33__6110088886279708845662(line2614267364592972640(l_next__45pos___3), line2614267364592972640(pos2050913250050484762(l_a___1)))) {
				(__33__619888018645014495013(l_start__45pos___0, pos2050913250050484762(l_a___1)) ? __126__6111546880776814955033(children12935120198002978150((() => {
							const l_member2___4 = peek3730836223819749536(container__45stack7526940263883346332(l_a___1))
							const x_matched___1 = l_member2___4
							if ((x_matched___1.index === 0)) {
								throw new (error14987278044892349075)(c____433())
							} else {
								if ((x_matched___1.index === 1)) {
									return ((l_temp___5 = l_member2___4.value) , l_temp___5)
								} else {
									return _unreachable()
								}
							}
						})()), no__45token__45node16216312703881984278(l_a___1, l_start__45pos___0)) : (void 0))
				l_start__45pos___0 = l_next__45pos___3
				next__45line12387664390639014129(l_a___1)
			} else {
				(void 0)
			}
			set__45pos1796554241245563230(l_a___1, l_next__45pos___3)
			if (should__45stop__45diag10941007047855255040(l_a___1)) {
				__126__6111546880776814955033(children12935120198002978150((() => {
							const l_member2___6 = peek3730836223819749536(container__45stack7526940263883346332(l_a___1))
							const x_matched___2 = l_member2___6
							if ((x_matched___2.index === 0)) {
								throw new (error14987278044892349075)(c____433())
							} else {
								if ((x_matched___2.index === 1)) {
									return ((l_temp___7 = l_member2___6.value) , l_temp___7)
								} else {
									return _unreachable()
								}
							}
						})()), no__45token__45node16216312703881984278(l_a___1, l_start__45pos___0))
				l_start__45pos___0 = pos2050913250050484762(l_a___1)
				pop__45container17779802904764691489(l_a___1)
			} else {
				(void 0)
			}
			continue
		} else {
			(void 0)
			break  x_loop___0
		}
	}
	;(__6013544777056381821656(l_start__45pos___0, pos2050913250050484762(l_a___1)) ? __126__6111546880776814955033(children12935120198002978150((() => {
				const l_member2___8 = peek3730836223819749536(container__45stack7526940263883346332(l_a___1))
				const x_matched___3 = l_member2___8
				if ((x_matched___3.index === 0)) {
					throw new (error14987278044892349075)(c____433())
				} else {
					if ((x_matched___3.index === 1)) {
						return ((l_temp___9 = l_member2___8.value) , l_temp___9)
					} else {
						return _unreachable()
					}
				}
			})()), no__45token__45node16216312703881984278(l_a___1, l_start__45pos___0)) : (void 0))
}
// add-span file:///home/andy/keen.foo/script/highlight-tokens.keen 119:1
const add__45span2308762942957960358 = (l_a___0, l_class__45name___5, l_end__45pos___1) => {
	let l_temp___4, l_temp___8
	if (__6013544777056381821656(pos2050913250050484762(l_a___0), l_end__45pos___1)) {
		const l_parts___2 = slice__45lines16002316350965680121(lines10579512676244640593(l_a___0), pos2050913250050484762(l_a___0), l_end__45pos___1)
		__126__6111546880776814955033(children12935120198002978150((() => {
					const l_member2___3 = peek3730836223819749536(container__45stack7526940263883346332(l_a___0))
					const x_matched___0 = l_member2___3
					if ((x_matched___0.index === 0)) {
						throw new (error14987278044892349075)(c____433())
					} else {
						if ((x_matched___0.index === 1)) {
							return ((l_temp___4 = l_member2___3.value) , l_temp___4)
						} else {
							return _unreachable()
						}
					}
				})()), create__45text__45span11091813019040017862(l_class__45name___5, to11893448832805940642(subscript13355245170471554981(l_parts___2, 0n))))
		for__45loop728422034229236786(subscript3942162637580708528(l_parts___2, __46__463392754618358187143(1n, c____304())), l_part___6 => {
				next__45line12387664390639014129(l_a___0)
				__126__6111546880776814955033(children12935120198002978150((() => {
							const l_member2___7 = peek3730836223819749536(container__45stack7526940263883346332(l_a___0))
							const x_matched___1 = l_member2___7
							if ((x_matched___1.index === 0)) {
								throw new (error14987278044892349075)(c____433())
							} else {
								if ((x_matched___1.index === 1)) {
									return ((l_temp___8 = l_member2___7.value) , l_temp___8)
								} else {
									return _unreachable()
								}
							}
						})()), create__45text__45span11091813019040017862(l_class__45name___5, to11893448832805940642(l_part___6)))
			})
		set__45pos1796554241245563230(l_a___0, l_end__45pos___1)
	} else {
		(void 0)
	}
}
// all-container file:///home/andy/keen.foo/script/highlight-tokens.keen 128:1
const all__45container2923222844551678312 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof all__45container9644686131324329992) ? l_a___0 : c____558()))
}
// line-container file:///home/andy/keen.foo/script/highlight-tokens.keen 128:1
const line__45container8231743864339836066 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof line__45container3413697399421472374) ? l_a___0 : c____558()))
}
// text-container file:///home/andy/keen.foo/script/highlight-tokens.keen 128:1
const text__45container11460594166955753848 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof text__45container10555084246801409684) ? l_a___0 : c____558()))
}
// diag-container file:///home/andy/keen.foo/script/highlight-tokens.keen 128:1
const diag__45container187792585888259374 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof diag__45container18328117606960731327) ? l_a___0 : c____558()))
}
// all-container file:///home/andy/keen.foo/script/highlight-tokens.keen 129:1
const all__45container3060227089423825685 = l_nodes___0 =>
	new (all__45container9644686131324329992)(l_nodes___0)
// nodes file:///home/andy/keen.foo/script/highlight-tokens.keen 129:23
const nodes10027013268055913002 = l_a___0 =>
	l_a___0.nodes
// line-container file:///home/andy/keen.foo/script/highlight-tokens.keen 130:1
const line__45container10020361887133241006 = l_nodes___0 =>
	new (line__45container3413697399421472374)(l_nodes___0)
// nodes file:///home/andy/keen.foo/script/highlight-tokens.keen 130:24
const nodes11725885378281553463 = l_a___0 =>
	l_a___0.nodes
// new file:///home/andy/keen.foo/script/highlight-tokens.keen 131:1
const new16282430314578686279 = (l_children___0, l_end___1, l_message___2) =>
	new (diag__45container18328117606960731327)(l_children___0, l_end___1, l_message___2)
// children file:///home/andy/keen.foo/script/highlight-tokens.keen 132:5
const children9217228362722457772 = l_a___0 =>
	l_a___0.children
// end file:///home/andy/keen.foo/script/highlight-tokens.keen 133:5
const end16623926965122730525 = l_a___0 =>
	l_a___0.end
// text file:///home/andy/keen.foo/script/highlight-tokens.keen 136:5
const text16426781381137871272 = l_a___0 =>
	l_a___0.text
// create-text-span file:///home/andy/keen.foo/script/highlight-tokens.keen 138:1
const create__45text__45span11091813019040017862 = (l_class__45name___0, l_text___1) =>
	create__45span6096211447345230907(l_class__45name___0, list__45new16687999342081306217([create__45text__45node16218478718735299168(l_text___1)]))
// children file:///home/andy/keen.foo/script/highlight-tokens.keen 141:1
const children12935120198002978150 = l_a___0 => {
	const x_matched___0 = l_a___0
	if ((x_matched___0 instanceof all__45container9644686131324329992)) {
		return nodes10027013268055913002(l_a___0)
	} else {
		if ((x_matched___0 instanceof line__45container3413697399421472374)) {
			return nodes11725885378281553463(l_a___0)
		} else {
			if ((x_matched___0 instanceof diag__45container18328117606960731327)) {
				return children9217228362722457772(l_a___0)
			} else {
				if ((x_matched___0 instanceof text__45container10555084246801409684)) {
					throw unreachable15541723113030349832()
				} else {
					return _unreachable()
				}
			}
		}
	}
}
// slice-lines file:///home/andy/keen.foo/script/highlight-tokens.keen 155:1
const slice__45lines16002316350965680121 = (l_lines___2, l_start___0, l_end___1) =>
	(Object.is(line2614267364592972640(l_start___0), line2614267364592972640(l_end___1)) ? list__45new8008826310704523233([slice__45line4145410679069204878(l_lines___2, l_start___0, l_end___1)]) : list__45new8008826310704523233(concat__45array__45views12064902746653726711([to__45array__45view17409083739705985980([slice__45line__45from9597745178822851069(l_lines___2, l_start___0)]), subscript8367728196970591354(l_lines___2, __46__467720007973451370645(BigInt.asUintN(64, BigInt(line2614267364592972640(l_start___0))), BigInt.asUintN(64, BigInt(line2614267364592972640(l_end___1))))), to__45array__45view17409083739705985980([slice__45line__45to16573665343455706995(l_lines___2, l_end___1)])])))
// slice-line file:///home/andy/keen.foo/script/highlight-tokens.keen 162:1
const slice__45line4145410679069204878 = (l_lines___2, l_start___0, l_end___1) => {
	if (Object.is(line2614267364592972640(l_start___0), line2614267364592972640(l_end___1))) {
		return safe__45slice8563283023717578639(safe__45at14384575468482721241(l_lines___2, BigInt.asUintN(64, BigInt(to13152219174195707203(BigInt.asUintN(64, BigInt(line2614267364592972640(l_start___0))))))), __46__467720007973451370645(BigInt.asUintN(64, BigInt(to13152219174195707203(BigInt.asUintN(64, BigInt(character15834956226447269414(l_start___0)))))), BigInt.asUintN(64, BigInt(to13152219174195707203(BigInt.asUintN(64, BigInt(character15834956226447269414(l_end___1))))))))
	} else {
		throw new (error14987278044892349075)(c____435())
	}
}
// slice-line-from file:///home/andy/keen.foo/script/highlight-tokens.keen 166:1
const slice__45line__45from9597745178822851069 = (l_lines___0, l_start___1) =>
	safe__45slice__45from1088282950397388463(safe__45at14384575468482721241(l_lines___0, BigInt.asUintN(64, BigInt(to13152219174195707203(BigInt.asUintN(64, BigInt(line2614267364592972640(l_start___1))))))), BigInt.asUintN(64, BigInt(to13152219174195707203(BigInt.asUintN(64, BigInt(character15834956226447269414(l_start___1)))))))
// slice-line-to file:///home/andy/keen.foo/script/highlight-tokens.keen 168:1
const slice__45line__45to16573665343455706995 = (l_lines___0, l_end___1) =>
	safe__45slice__45to5030531580213408824(safe__45at14384575468482721241(l_lines___0, BigInt.asUintN(64, BigInt(to13152219174195707203(BigInt.asUintN(64, BigInt(line2614267364592972640(l_end___1))))))), BigInt.asUintN(64, BigInt(to13152219174195707203(BigInt.asUintN(64, BigInt(character15834956226447269414(l_end___1)))))))
// safe-at@(char8 array) file:///home/andy/keen.foo/script/highlight-tokens.keen 171:1
const safe__45at14384575468482721241 = (l_xs___1, l_index___0) =>
	(__6010307380702345989795(l_index___0, BigInt(l_xs___1.length)) ? subscript13355245170471554981(l_xs___1, l_index___0) : c____14())
// safe-slice@(char8) file:///home/andy/keen.foo/script/highlight-tokens.keen 174:1
const safe__45slice8563283023717578639 = (l_xs___1, l_range___0) =>
	(__6010307380702345989795(low7409345081503915125(l_range___0), BigInt(l_xs___1.length)) ? to1694745619930020520(subscript2978548572343441637(l_xs___1, __46__467720007973451370645(low7409345081503915125(l_range___0), min5984887149101995087(high10874758830701415314(l_range___0), BigInt(l_xs___1.length))))) : c____14())
// safe-slice-from@(char8) file:///home/andy/keen.foo/script/highlight-tokens.keen 177:1
const safe__45slice__45from1088282950397388463 = (l_xs___1, l_index___0) =>
	(__6010307380702345989795(l_index___0, BigInt(l_xs___1.length)) ? to1694745619930020520(subscript3553782324217798084(l_xs___1, __46__463392754618358187143(l_index___0, c____304()))) : c____14())
// safe-slice-to@(char8) file:///home/andy/keen.foo/script/highlight-tokens.keen 180:1
const safe__45slice__45to5030531580213408824 = (l_xs___1, l_index___0) =>
	(__6010307380702345989795(l_index___0, BigInt(l_xs___1.length)) ? to1694745619930020520(subscript2978548572343441637(l_xs___1, __46__467720007973451370645(0n, l_index___0))) : l_xs___1)
// next-position file:///home/andy/keen.foo/script/highlight-tokens.keen 186:1
const next__45position8604152804231869151 = (l_lines___1, l_pos___0) =>
	((__6010307380702345989795(BigInt.asUintN(64, BigInt(line2614267364592972640(l_pos___0))), BigInt(l_lines___1.length)) ? __62__611783117445644909805(character15834956226447269414(l_pos___0), to13152219174195707203(BigInt(subscript13355245170471554981(l_lines___1, BigInt.asUintN(64, BigInt(to13152219174195707203(BigInt.asUintN(64, BigInt(line2614267364592972640(l_pos___0))))))).length))) : false) ? new13808961360227838714(__437467979216580978677(line2614267364592972640(l_pos___0), 1), 0) : new13808961360227838714(line2614267364592972640(l_pos___0), __437467979216580978677(character15834956226447269414(l_pos___0), 1)))
// last-position file:///home/andy/keen.foo/script/highlight-tokens.keen 192:1
const last__45position11709854381192884880 = l_lines___0 =>
	new13808961360227838714(__4516392089175466206236(to13152219174195707203(BigInt(l_lines___0.length)), 1), to13152219174195707203(BigInt(subscript13482146875570517172(l_lines___0, __452101191994244905068(c____304(), 1n)).length)))
// define-icon-custom-element file:///home/andy/keen.foo/script/icon.keen 7:1
const define__45icon__45custom__45element17922836762757921383 = () => {
	let l_temp___3, l_child___1
	return define__45custom__45element12420477442320166964(c____507(), l_this___0 =>
			((l_child___1 = (() => {
				const x_matched___0 = (() => {
					const l_member2___2 = subscript16319589180780115891(attributes4346206551487305592(l_this___0), _symbol60)
					const x_matched___1 = l_member2___2
					if ((x_matched___1 instanceof none12752313651180151000)) {
						throw new (error14987278044892349075)(c____508())
					} else {
						if ((x_matched___1 instanceof string9092701471797383860)) {
							return ((l_temp___3 = l_member2___2) , l_temp___3)
						} else {
							return _unreachable()
						}
					}
				})()
				if (__61__618774367296004624587(x_matched___0, c____509())) {
					return download__45icon12786418554850365468()
				} else {
					if (__61__618774367296004624587(x_matched___0, c____510())) {
						return external__45link__45icon3349657436400875757()
					} else {
						if (__61__618774367296004624587(x_matched___0, c____511())) {
							return home__45icon8011422961595765930()
						} else {
							if (__61__618774367296004624587(x_matched___0, c____512())) {
								return up__45icon10340071843649613034()
							} else {
								if (__61__618774367296004624587(x_matched___0, c____513())) {
									return play__45icon2072927489570456104()
								} else {
									throw todo10094731776182666185()
								}
							}
						}
					}
				}
			})()) , __126__613104040282438970899(shadow__45root18170719147303732824(l_this___0), l_child___1)))
}
// download-icon file:///home/andy/keen.foo/script/icon.keen 24:1
const download__45icon12786418554850365468 = () =>
	icon2546484306937074862(c____521())
// play-icon file:///home/andy/keen.foo/script/icon.keen 33:1
const play__45icon2072927489570456104 = () =>
	icon2546484306937074862(c____475())
// up-icon file:///home/andy/keen.foo/script/icon.keen 42:1
const up__45icon10340071843649613034 = () =>
	icon2546484306937074862(c____480())
// sun-icon file:///home/andy/keen.foo/script/icon.keen 51:1
const sun__45icon6929994211750664551 = () => {
	let l_d___0
	return ((l_d___0 = __126__12615501865809042506805(c____498(), __126__12615501865809042506805(c____499(), c____500()))) , icon2546484306937074862(interpolate16033570998297636535([c____501(), interpolate__45value3612249313584056128(l_d___0), c____502()])))
}
// moon-icon file:///home/andy/keen.foo/script/icon.keen 58:1
const moon__45icon6167794004857622206 = () => {
	let l_d___0
	return ((l_d___0 = __126__12615501865809042506805(c____503(), __126__12615501865809042506805(c____504(), c____505()))) , icon2546484306937074862(interpolate16033570998297636535([c____506(), interpolate__45value3612249313584056128(l_d___0), c____502()])))
}
// home-icon file:///home/andy/keen.foo/script/icon.keen 65:1
const home__45icon8011422961595765930 = () => {
	let l_d___0
	return ((l_d___0 = __126__12615501865809042506805(c____515(), __126__12615501865809042506805(c____516(), c____517()))) , icon2546484306937074862(interpolate16033570998297636535([c____501(), interpolate__45value3612249313584056128(l_d___0), c____502()])))
}
// external-link-icon file:///home/andy/keen.foo/script/icon.keen 72:1
const external__45link__45icon3349657436400875757 = () =>
	icon2546484306937074862(interpolate16033570998297636535([c____519(), interpolate__45value3612249313584056128(c____518()), c____520()]))
// icon file:///home/andy/keen.foo/script/icon.keen 76:1
const icon2546484306937074862 = l_content___1 => {
	const l_res___0 = create__45div5581806103065025864(c____476())
	l_res___0.innerHTML = interpolate16185060539014347245([c____477(), interpolate__45value3612249313584056128(l_content___1), c____478()])
	return l_res___0
}
// main file:///home/andy/keen.foo/script/index.keen 11:1
const _async_main7646332251047535124 = async () => {
	const l_keen___0 = (await _async_make__45keen__45server10317316877847483326())
	define__45icon__45custom__45element17922836762757921383()
	define__45theme__45switcher__45element2125395838033501468()
	;(await _async_define__45keen__45runnable__45custom__45element7760685711776055789(l_keen___0))
	;(await _async_define__45keen__45text__45custom__45element4720165156077201834())
	define__45loading__45spinner__45element2960771456410577123()
	;(await _async_define__45syntax__45translate__45element292169961910799592(l_keen___0))
	setup__45collapsible__45sections11195506459043880137()
}
// setup-collapsible-sections file:///home/andy/keen.foo/script/index.keen 21:1
const setup__45collapsible__45sections11195506459043880137 = () => {
	let l_temp___3, l_button___1
	for (const l_section___0 of query__45all11850692382578512155(document10104092556957017792(), c____305())) {
		((l_button___1 = (() => {
			const l_member2___2 = query13781569289072002030(l_section___0, c____306())
			const x_matched___0 = l_member2___2
			if ((x_matched___0.index === 0)) {
				throw new (error14987278044892349075)(c____307())
			} else {
				if ((x_matched___0.index === 1)) {
					return ((l_temp___3 = l_member2___2.value) , l_temp___3)
				} else {
					return _unreachable()
				}
			}
		})()) , add__45event__45listener12755357720431330007(l_button___1, c____308(), l_it___4 =>
				toggle13689653920217606348(classes10076868907359993050(l_section___0), c____309())))
	}
}
// define-keen-runnable-custom-element file:///home/andy/keen.foo/script/keen-runnable.keen 16:1
const _async_define__45keen__45runnable__45custom__45element7760685711776055789 = async l_keen___2 => {
	let l_names___0
	return ((l_names___0 = new10786856377434967095()) , (await _async_define__45custom__45element16761374808165769600(c____454(), c____557(), async l_x___1 =>
			(await _async_connected9133217280274167226(l_x___1, l_keen___2, l_names___0)))))
}
// new file:///home/andy/keen.foo/script/keen-runnable.keen 21:1
const new14037161720437740793 = (l_seen___0, l_next__45index___1) =>
	new (names11183638434130471365)(l_seen___0, l_next__45index___1)
// seen file:///home/andy/keen.foo/script/keen-runnable.keen 21:15
const seen13536068783821846893 = l_a___0 =>
	l_a___0.seen
// set-next-index file:///home/andy/keen.foo/script/keen-runnable.keen 21:36
const set__45next__45index7163238328098571224 = (l_a___0, l_next__45index___1) => {
	l_a___0["next-index"] = l_next__45index___1
}
// next-index file:///home/andy/keen.foo/script/keen-runnable.keen 21:36
const next__45index13663398285211750803 = l_a___0 =>
	l_a___0["next-index"]
// new file:///home/andy/keen.foo/script/keen-runnable.keen 22:1
const new10786856377434967095 = () =>
	new14037161720437740793(list__45new8758761107204814534(c____278()), 0n)
// get-default-name file:///home/andy/keen.foo/script/keen-runnable.keen 24:1
const get__45default__45name16524860112129681938 = l_a___1 => {
	const l_index___0 = next__45index13663398285211750803(l_a___1)
	set__45next__45index7163238328098571224(l_a___1, __431000895641751717785(next__45index13663398285211750803(l_a___1), 1n))
	return interpolate16033570998297636535([c____493(), interpolate__45value8652404409959891785(l_index___0), c____489()])
}
// get-keen-runnable-name file:///home/andy/keen.foo/script/keen-runnable.keen 29:1
const get__45keen__45runnable__45name9687427681459365913 = (l_a___3, l_name__45attr___2) => {
	let l_temp___4, x_matched___0, l_member2___1
	const l_name___0 = ((l_member2___1 = l_name__45attr___2) , ((x_matched___0 = l_member2___1) , ((x_matched___0 instanceof none12752313651180151000) ? get__45default__45name16524860112129681938(l_a___3) : ((x_matched___0 instanceof string9092701471797383860) ? ((l_temp___4 = l_member2___1) , l_temp___4) : _unreachable()))))
	if ((ends__45with309784259149118(l_name___0, c____489()) ? true : ends__45with309784259149118(l_name___0, c____490()))) {
		(try__45add11271474842386506396(seen13536068783821846893(l_a___3), l_name___0) ? (void 0) : log__45error5118968110143466282(interpolate16033570998297636535([c____491(), interpolate__45value3612249313584056128(l_name___0)])))
		return l_name___0
	} else {
		throw new (error14987278044892349075)(c____492())
	}
}
// connected file:///home/andy/keen.foo/script/keen-runnable.keen 36:1
const _async_connected9133217280274167226 = async (l_a___1, l_keen___8, l_names___3) => {
	let l_temp___10
	const l_name__45attr___0 = subscript16319589180780115891(attributes4346206551487305592(l_a___1), _symbol39)
	const l_name___2 = get__45keen__45runnable__45name9687427681459365913(l_names___3, l_name__45attr___0)
	const l_no__45run___4 = __61__615447986899631667393(subscript16319589180780115891(attributes4346206551487305592(l_a___1), _symbol40), c____359())
	const l_initial__45text___5 = get__45child__45text390304316099798459(as__45node13279775024470589263(l_a___1))
	const l_main__45uri___6 = parse__45uri14353403042008216422(interpolate16033570998297636535([c____456(), interpolate__45value3612249313584056128(l_name___2)]))
	let l_keen__45text___7 = c____558()
	l_keen__45text___7 = create__45keen__45text14023519371970301365(new7911205074575586258(l_keen___8, l_main__45uri___6, l_initial__45text___5))
	__126__126__614422656202344497047(shadow__45root18170719147303732824(l_a___1), list__45new16687999342081306217(concat__45array__45views12902995847510985195([to__45array__45view12862255755891182376(c____258()), ((l_name__45attr___0 instanceof string9092701471797383860) ? to__45array__45view12862255755891182376(list__45new16687999342081306217([create__45div7678826057371039427(c____457(), list__45new16687999342081306217([create__45text__45node16218478718735299168(l_name___2)]))])) : to__45array__45view12862255755891182376(c____258())), to__45array__45view12862255755891182376([node11272213017309140241((await (async () => {
									const l_member2___9 = l_keen__45text___7
									const x_matched___0 = l_member2___9
									if ((x_matched___0 instanceof none12752313651180151000)) {
										throw new (error14987278044892349075)(c____458())
									} else {
										if ((x_matched___0 instanceof keen__45text815051369196550100)) {
											return ((l_temp___10 = l_member2___9) , l_temp___10)
										} else {
											return _unreachable()
										}
									}
								})()))]), (l_no__45run___4 ? to__45array__45view12862255755891182376(c____258()) : to__45array__45view12862255755891182376((await _async_make__45output15890181576749998846(l_keen___8, l_main__45uri___6, __61__615447986899631667393(subscript16319589180780115891(attributes4346206551487305592(l_a___1), _symbol41), c____359()))))), to__45array__45view12862255755891182376(c____258())])))
}
// make-output file:///home/andy/keen.foo/script/keen-runnable.keen 52:1
const _async_make__45output15890181576749998846 = async (l_keen___11, l_main__45uri___12, l_test____9) => {
	let l_temp___5, l_diagnostics___13, l_result___10, l_main__45kind___8, l_buttons___14, l_run__45button___6
	const l_output___0 = new18232733072217259612()
	let l_collapse__45button__45ref___1 = new (option17597932037503078337)(0, c____558())
	const l_collapse__45button___2 = create__45button8454460037437004333(c____459(), c____309(), list__45new16687999342081306217([up__45icon10340071843649613034()]), async l_args___3 => {
			hide4237546891914754851(l_output___0)
			__126__6112374103362291366922(classes10076868907359993050((await (async () => {
						const l_member2___4 = l_collapse__45button__45ref___1
						const x_matched___0 = l_member2___4
						if ((x_matched___0.index === 0)) {
							throw new (error14987278044892349075)(c____460())
						} else {
							if ((x_matched___0.index === 1)) {
								return ((l_temp___5 = l_member2___4.value) , l_temp___5)
							} else {
								return _unreachable()
							}
						}
					})())), c____309())
		})
	l_collapse__45button__45ref___1 = new (option17597932037503078337)(1, l_collapse__45button___2)
	set__45subscript5359101018827809713(style2323177492917899861(l_collapse__45button___2), _symbol42, c____461())
	return ((l_run__45button___6 = create__45button8454460037437004333(c____462(), c____319(), list__45new16687999342081306217([play__45icon2072927489570456104()]), async l_args___7 => {
			start__45running309207438901278985(l_output___0)
			__45__615390983692247253955(classes10076868907359993050(l_collapse__45button___2), c____309())
			;((l_main__45kind___8 = (l_test____9 ? 1 : 0)) , ((l_result___10 = (await _async_run__45js7449853381817926656((await _async_build__45js__45script13159092364747023150(l_keen___11, l_main__45kind___8, l_main__45uri___12))))) , ((l_diagnostics___13 = get__45diagnostics16593236216496411341(l_keen___11, l_main__45uri___12)) , finish__45running15892133542416154903(l_diagnostics___13, l_output___0, l_result___10))))
		})) , ((l_buttons___14 = list__45new16687999342081306217(concat__45array__45views12902995847510985195([to__45array__45view12862255755891182376(c____258()), from__45option11546042617594812940(new (option17597932037503078337)(1, l_run__45button___6)), to__45array__45view12862255755891182376([l_collapse__45button___2])]))) , list__45new16687999342081306217([container8745215703748773917(l_output___0), create__45div7678826057371039427(c____463(), l_buttons___14)])))
}
// new file:///home/andy/keen.foo/script/keen-runnable.keen 78:1
const new5847974638937846935 = l_container___0 =>
	new (run__45output7566674529171335335)(l_container___0)
// container file:///home/andy/keen.foo/script/keen-runnable.keen 78:20
const container8745215703748773917 = l_a___0 =>
	l_a___0.container
// new file:///home/andy/keen.foo/script/keen-runnable.keen 79:1
const new18232733072217259612 = () => {
	const l_res___0 = new5847974638937846935(create__45div7678826057371039427(c____473(), c____258()))
	hide4237546891914754851(l_res___0)
	return l_res___0
}
// hide file:///home/andy/keen.foo/script/keen-runnable.keen 84:1
const hide4237546891914754851 = l_a___0 =>
	set__45subscript5359101018827809713(style2323177492917899861(container8745215703748773917(l_a___0)), _symbol43, c____479())
// start-running file:///home/andy/keen.foo/script/keen-runnable.keen 86:1
const start__45running309207438901278985 = l_a___0 => {
	set__45classes9907877374112971136(container8745215703748773917(l_a___0), c____284())
	set__45subscript5359101018827809713(style2323177492917899861(container8745215703748773917(l_a___0)), _symbol43, c____474())
	remove__45all__45children16510151441912951815(container8745215703748773917(l_a___0))
	__126__613104040282438970899(container8745215703748773917(l_a___0), create__45loading__45spinner3691045459411508097())
}
// finish-running file:///home/andy/keen.foo/script/keen-runnable.keen 91:1
const finish__45running15892133542416154903 = (l_diagnostics___1, l_a___0, l_run__45result___2) => {
	__45__615390983692247253955(classes10076868907359993050(container8745215703748773917(l_a___0)), c____464())
	set__45subscript5359101018827809713(style2323177492917899861(container8745215703748773917(l_a___0)), _symbol43, c____319())
	remove__45all__45children16510151441912951815(container8745215703748773917(l_a___0))
	add__45spans__45for__45diagnostics17698932068706275354(container8745215703748773917(l_a___0), l_diagnostics___1)
	add__45spans__45for__45writes5474223011079944851(container8745215703748773917(l_a___0), l_run__45result___2)
}
// add-spans-for-diagnostics file:///home/andy/keen.foo/script/keen-runnable.keen 98:1
const add__45spans__45for__45diagnostics17698932068706275354 = (l_container___3, l_diagnostics___0) => {
	for (const l_diag___1 of l_diagnostics___0) {
		const l_start___2 = start11980012380947064971(range18388480328649839984(l_diag___1))
		__126__613104040282438970899(l_container___3, create__45span6096211447345230907(c____468(), list__45new16687999342081306217([create__45text__45node16218478718735299168(interpolate16033570998297636535([c____469(), interpolate__45value136912606860311098(__437467979216580978677(line2614267364592972640(l_start___2), 1)), c____379(), interpolate__45value3612249313584056128(message14106875049917279754(l_diag___1))]))])))
		__126__613104040282438970899(l_container___3, create__45node8155601788828585795(_symbol45))
	}
}
// add-spans-for-writes file:///home/andy/keen.foo/script/keen-runnable.keen 105:1
const add__45spans__45for__45writes5474223011079944851 = (l_container___5, l_writes___6) => {
	let x_matched___0
	let l_cur___0 = c____319()
	let l_cur__45pipe___1 = 0
	const l_finish__45line___2 = l_args___3 => {
		if (is__45empty14055059243533451519(l_cur___0)) {
			(void 0)
		} else {
			const l_class____4 = ((x_matched___0 = l_cur__45pipe___1) , ((x_matched___0 === 0) ? c____465() : ((x_matched___0 === 1) ? c____466() : _unreachable())))
			__126__613104040282438970899(l_container___5, create__45node380069253245485333(_symbol44, list__45new15738010718011681032(c____294()), l_class____4, list__45new16687999342081306217([create__45text__45node16218478718735299168(l_cur___0)])))
			l_cur___0 = c____319()
		}
	}
	for (const l_write___7 of l_writes___6) {
		if (__61__6115905784597409491349(pipe12117206775084284466(l_write___7), l_cur__45pipe___1)) {
			(void 0)
		} else {
			l_finish__45line___2((void 0))
			l_cur__45pipe___1 = pipe12117206775084284466(l_write___7)
		}
		l_cur___0 = interpolate16033570998297636535([interpolate__45value3612249313584056128(l_cur___0), interpolate__45value3612249313584056128(text718887955097518256(l_write___7))])
	}
	if (is__45empty9217915116723924721(l_writes___6)) {
		l_cur___0 = c____467()
	} else {
		(void 0)
	}
	l_finish__45line___2((void 0))
}
// run-js file:///home/andy/keen.foo/script/keen-runnable.keen 125:1
const _async_run__45js7449853381817926656 = async l_build___4 => {
	const l_console___0 = _global.console
	const l_old__45info___1 = l_console___0.info
	const l_old__45error___2 = l_console___0.error
	try {
		const l_writes___3 = list__45new17085285506804348843(c____296())
		;(is__45empty14055059243533451519(diagnostics2531914668180987408(l_build___4)) ? (void 0) : __126__613999760345777666257(l_writes___3, new12412984994430643134(1, interpolate16033570998297636535([interpolate__45value3612249313584056128(diagnostics2531914668180987408(l_build___4)), c____374()]))))
		const l_new__45info___5 = async l_x___6 =>
			__126__613999760345777666257(l_writes___3, new12412984994430643134(0, interpolate16033570998297636535([interpolate__45value3612249313584056128(to7876981377693269494(l_x___6)), c____374()])))
		const l_new__45error___7 = async l_x___8 =>
			__126__613999760345777666257(l_writes___3, new12412984994430643134(1, interpolate16033570998297636535([interpolate__45value3612249313584056128(to7876981377693269494(l_x___8)), c____374()])))
		l_console___0.info = to10120165855316472489(l_new__45info___5)
		l_console___0.error = to10120165855316472489(l_new__45error___7)
		const l_temp___9 = script15512534719776912668(l_build___4)
		const l_script___10 = l_temp___9
		if ((l_temp___9 instanceof string9092701471797383860)) {
			const l_unique__45script___11 = interpolate16185060539014347245([interpolate__45value3612249313584056128(l_script___10), c____472(), interpolate__45value8652404409959891785(next__45script__45id17557313546307961258())])
			set__45next__45script__45id5998346944669327587(__431000895641751717785(next__45script__45id17557313546307961258(), 1n))
			const l_encoded___12 = _global.encodeURIComponent(l_unique__45script___11)
			const l_data__45url___13 = ("data:text/javascript;charset=utf-8," + l_encoded___12)
			try {
				(void (await import(l_data__45url___13)))
				;(void 0)
			} catch (l_e___14) {
				__126__613999760345777666257(l_writes___3, new12412984994430643134(1, to7876981377693269494(l_e___14.toString())))
			}
		} else {
			(void 0)
		}
		return move__45to10813684173798219350(l_writes___3)
	} finally {
		l_console___0.info = l_old__45info___1
		l_console___0.error = l_old__45error___2
	}
}
// set-next-script-id file:///home/andy/keen.foo/script/keen-runnable.keen 157:1
const set__45next__45script__45id5998346944669327587 = l_a___0 => {
	v12573860492985904132 = l_a___0
}
// next-script-id file:///home/andy/keen.foo/script/keen-runnable.keen 157:1
const next__45script__45id17557313546307961258 = () =>
	v12573860492985904132
// new file:///home/andy/keen.foo/script/keen-text.keen 22:1
const new7911205074575586258 = (l_keen___0, l_uri___1, l_initial__45text___2) =>
	new (keen__45text__45props17617314961994595397)(l_keen___0, l_uri___1, l_initial__45text___2)
// keen file:///home/andy/keen.foo/script/keen-text.keen 23:5
const keen18405918350912323794 = l_a___0 =>
	l_a___0.keen
// uri file:///home/andy/keen.foo/script/keen-text.keen 24:5
const uri6653811086436609717 = l_a___0 =>
	l_a___0.uri
// initial-text file:///home/andy/keen.foo/script/keen-text.keen 25:5
const initial__45text1729291214656030266 = l_a___0 =>
	l_a___0["initial-text"]
// define-keen-text-custom-element file:///home/andy/keen.foo/script/keen-text.keen 27:1
const _async_define__45keen__45text__45custom__45element4720165156077201834 = async () =>
	(await _async_define__45custom__45element16761374808165769600(c____399(), c____556(), async l_it___0 =>
			(await _async_connected8939421183618953983(l_it___0))))
// new file:///home/andy/keen.foo/script/keen-text.keen 30:1
const new7823475902829213519 = (l_node___0, l_props___1, l_nodes___2, l_diag__45debounce___3, l_tokens___4) =>
	new (keen__45text815051369196550100)(l_node___0, l_props___1, l_nodes___2, l_diag__45debounce___3, l_tokens___4)
// node file:///home/andy/keen.foo/script/keen-text.keen 31:5
const node11272213017309140241 = l_a___0 =>
	l_a___0.node
// props file:///home/andy/keen.foo/script/keen-text.keen 32:5
const props14635037912233254451 = l_a___0 =>
	l_a___0.props
// set-nodes file:///home/andy/keen.foo/script/keen-text.keen 33:5
const set__45nodes15216606115923576615 = (l_a___0, l_nodes___1) => {
	l_a___0.nodes = l_nodes___1
}
// nodes file:///home/andy/keen.foo/script/keen-text.keen 33:5
const nodes4191042000099415344 = l_a___0 =>
	l_a___0.nodes
// diag-debounce file:///home/andy/keen.foo/script/keen-text.keen 34:5
const diag__45debounce13221431344140136065 = l_a___0 =>
	l_a___0["diag-debounce"]
// set-tokens file:///home/andy/keen.foo/script/keen-text.keen 35:5
const set__45tokens5133764309523755639 = (l_a___0, l_tokens___1) => {
	l_a___0.tokens = l_tokens___1
}
// tokens file:///home/andy/keen.foo/script/keen-text.keen 35:5
const tokens12216867670569327282 = l_a___0 =>
	l_a___0.tokens
// keen file:///home/andy/keen.foo/script/keen-text.keen 36:1
const keen17728403420956221477 = l_a___0 =>
	keen18405918350912323794(props14635037912233254451(l_a___0))
// uri file:///home/andy/keen.foo/script/keen-text.keen 37:1
const uri3282533320242381186 = l_a___0 =>
	uri6653811086436609717(props14635037912233254451(l_a___0))
// new file:///home/andy/keen.foo/script/keen-text.keen 38:1
const new8169498387427678940 = (l_text___0, l_highlight___1, l_line__45numbers___2) =>
	new (keen__45text__45nodes4845108110779241250)(l_text___0, l_highlight___1, l_line__45numbers___2)
// text file:///home/andy/keen.foo/script/keen-text.keen 39:5
const text13612864892711024606 = l_a___0 =>
	l_a___0.text
// highlight file:///home/andy/keen.foo/script/keen-text.keen 40:5
const highlight2639639966742085451 = l_a___0 =>
	l_a___0.highlight
// line-numbers file:///home/andy/keen.foo/script/keen-text.keen 41:5
const line__45numbers4810789826727200226 = l_a___0 =>
	l_a___0["line-numbers"]
// create-keen-text file:///home/andy/keen.foo/script/keen-text.keen 43:1
const create__45keen__45text14023519371970301365 = l_props___1 => {
	const l_node___0 = create__45node8155601788828585795(_symbol53)
	l_node___0.props = l_props___1
	const l_res___2 = new7823475902829213519(l_node___0, l_props___1, c____558(), new17072821741960804629(milliseconds3899873555825239115(100)), c____297())
	l_node___0["keen-text"] = l_res___2
	return l_res___2
}
// text file:///home/andy/keen.foo/script/keen-text.keen 56:1
const text14431171922153015665 = l_a___1 => {
	let l_temp___2
	return value16397312992932854084(text13612864892711024606((() => {
				const l_member2___0 = nodes4191042000099415344(l_a___1)
				const x_matched___0 = l_member2___0
				if ((x_matched___0 instanceof none12752313651180151000)) {
					throw new (error14987278044892349075)(c____410())
				} else {
					if ((x_matched___0 instanceof keen__45text__45nodes4845108110779241250)) {
						return ((l_temp___2 = l_member2___0) , l_temp___2)
					} else {
						return _unreachable()
					}
				}
			})()))
}
// do-highlight file:///home/andy/keen.foo/script/keen-text.keen 59:1
const do__45highlight18422585679119592366 = (l_a___3, l_diagnostics___1) => {
	let l_temp___5, l_diags___0
	return ((l_diags___0 = filter2766775638570728792(l_diagnostics___1, l_it___2 =>
			__33__611398649682775379014(severity7324697814923534927(l_it___2), 4))) , highlight18393188241454652437(tokens12216867670569327282(l_a___3), l_diags___0, highlight2639639966742085451((() => {
				const l_member2___4 = nodes4191042000099415344(l_a___3)
				const x_matched___0 = l_member2___4
				if ((x_matched___0 instanceof none12752313651180151000)) {
					throw new (error14987278044892349075)(c____410())
				} else {
					if ((x_matched___0 instanceof keen__45text__45nodes4845108110779241250)) {
						return ((l_temp___5 = l_member2___4) , l_temp___5)
					} else {
						return _unreachable()
					}
				}
			})()), text14431171922153015665(l_a___3)))
}
// text-changed file:///home/andy/keen.foo/script/keen-text.keen 63:1
const _async_text__45changed4497619185979928465 = async l_a___1 => {
	let l_temp___3
	const l_value___0 = text14431171922153015665(l_a___1)
	set__45text__45content8221937257971663238(line__45numbers4810789826727200226((await (async () => {
				const l_member2___2 = nodes4191042000099415344(l_a___1)
				const x_matched___0 = l_member2___2
				if ((x_matched___0 instanceof none12752313651180151000)) {
					throw new (error14987278044892349075)(c____410())
				} else {
					if ((x_matched___0 instanceof keen__45text__45nodes4845108110779241250)) {
						return ((l_temp___3 = l_member2___2) , l_temp___3)
					} else {
						return _unreachable()
					}
				}
			})())), join3173081693262575807(c____374(), (await (async () => {
				const { low: x_start___3, high: x_end___2 } = __46__467720007973451370645(0n, count__45lines12942263574767361633(text14431171922153015665(l_a___1)))
				const x_out___4 = new (Array)(Number((x_end___2 - x_start___3)))
				let x_cur___1 = x_start___3
				while ((x_cur___1 < x_end___2)){
					const l_i___4 = x_cur___1
					x_out___4[(x_cur___1 - x_start___3)] = interpolate16033570998297636535([interpolate__45value8652404409959891785(__431000895641751717785(l_i___4, 1n))])
					x_cur___1 = (x_cur___1 + 1n)
				}
				return x_out___4
			})())))
	open__45file16035717941309978126(keen17728403420956221477(l_a___1), uri3282533320242381186(l_a___1), l_value___0)
	set__45tokens5133764309523755639(l_a___1, (await _async_get__45tokens1491121998157293548(keen17728403420956221477(l_a___1), uri3282533320242381186(l_a___1))))
	do__45highlight18422585679119592366(l_a___1, c____292())
}
// connected file:///home/andy/keen.foo/script/keen-text.keen 71:1
const _async_connected8939421183618953983 = async l_root___1 => {
	const l_a___0 = as__45js15437408219672390333(l_root___1)["keen-text"]
	const l_highlight__45div___2 = create__45div5581806103065025864(c____401())
	const l_ta___3 = create__45node8155601788828585795(_symbol21)
	set__45value12227261877023038251(l_ta___3, initial__45text1729291214656030266(props14635037912233254451(l_a___0)))
	set__45subscript17358677160123636728(attributes14633218357381336038(l_ta___3), _symbol22, c____360())
	add__45event__45listener12755357720431330007(l_ta___3, c____402(), async l_event___4 =>
			(__61__615609069574490488885(handle__45keydown15453034781588160619(l_ta___3, l_event___4), 0) ? (await _async_text__45changed4497619185979928465(l_a___0)) : (void 0)))
	add__45event__45listener12755357720431330007(l_ta___3, c____403(), async l_it___5 =>
			(await _async_text__45changed4497619185979928465(l_a___0)))
	const l_measurer__45span___6 = create__45span17916826921793801086(list__45new16687999342081306217([create__45text__45node16218478718735299168(c____404())]))
	const l_line__45numbers___7 = create__45div5581806103065025864(c____405())
	const l_text__45container___8 = create__45div7678826057371039427(c____406(), list__45new16687999342081306217([create__45div7678826057371039427(c____407(), list__45new16687999342081306217([l_measurer__45span___6])), l_highlight__45div___2, l_ta___3]))
	set__45nodes15216606115923576615(l_a___0, new8169498387427678940(l_ta___3, l_highlight__45div___2, l_line__45numbers___7))
	const l_interrupter___9 = new11188149366896942442()
	const l_tooltip__45element___10 = new6646894806830163624(new (option17597932037503078337)(0, c____558()))
	add__45event__45listener12755357720431330007(l_ta___3, c____408(), async l_e___11 =>
			(await _async_mouse__45move2588015212753593225(l_a___0, l_ta___3, l_measurer__45span___6, l_e___11, l_interrupter___9, l_tooltip__45element___10)))
	add__45event__45listener12755357720431330007(l_ta___3, c____409(), async l_args___12 => {
			(void get9580802860165117462(l_interrupter___9))
			rm__45tooltip6504944686612638687(l_tooltip__45element___10)
		})
	subscribe__45to__45diagnostics15376374076718028596(keen17728403420956221477(l_a___0), uri3282533320242381186(l_a___0), async l_diagnostics___13 =>
			with__45block1617706797681541595(diag__45debounce13221431344140136065(l_a___0), async l_args___14 =>
					do__45highlight18422585679119592366(l_a___0, l_diagnostics___13)))
	__126__126__614422656202344497047(shadow__45root18170719147303732824(l_root___1), list__45new16687999342081306217([l_line__45numbers___7, l_text__45container___8]))
	do__45highlight18422585679119592366(l_a___0, c____292())
	;(await _async_text__45changed4497619185979928465(l_a___0))
}
// new file:///home/andy/keen.foo/script/keen-text.keen 110:1
const new9909645831148220933 = l_current___0 =>
	new (interrupter16478128288838294701)(l_current___0)
// set-current file:///home/andy/keen.foo/script/keen-text.keen 111:5
const set__45current3168811941227043670 = (l_a___0, l_current___1) => {
	l_a___0.current = l_current___1
}
// current file:///home/andy/keen.foo/script/keen-text.keen 111:5
const current7172692287936357833 = l_a___0 =>
	l_a___0.current
// new file:///home/andy/keen.foo/script/keen-text.keen 112:1
const new11188149366896942442 = () =>
	new9909645831148220933(0n)
// get file:///home/andy/keen.foo/script/keen-text.keen 114:1
const get9580802860165117462 = l_a___1 => {
	const l_res___0 = current7172692287936357833(l_a___1)
	set__45current3168811941227043670(l_a___1, __431000895641751717785(current7172692287936357833(l_a___1), 1n))
	return l_res___0
}
// is-still-current file:///home/andy/keen.foo/script/keen-text.keen 118:1
const is__45still__45current8211145018809537472 = (l_a___1, l_was___0) =>
	Object.is(l_was___0, __459429596346129747750(current7172692287936357833(l_a___1), 1n))
// == file:///home/andy/keen.foo/script/keen-text.keen 121:1
const __61__612158153613745959279 = (l_a___0, l_b___1) =>
	Object.is(l_a___0, l_b___1)
// handle-keydown file:///home/andy/keen.foo/script/keen-text.keen 122:1
const handle__45keydown15453034781588160619 = (l_ta___2, l_event___4) => {
	const l_insert___0 = l_to__45insert___1 => {
		insert__45text__45area__45text17760158261484252580(l_ta___2, l_to__45insert___1)
		return 0
	}
	const l_res___3 = (() => {
		const x_matched___0 = to7876981377693269494(l_event___4.key)
		if (__61__618774367296004624587(x_matched___0, c____447())) {
			return (on__45pressed__45home__45key6682242097863336405(l_ta___2) ? 1 : c____558())
		} else {
			if (__61__618774367296004624587(x_matched___0, c____448())) {
				return l_insert___0(interpolate16033570998297636535([c____374(), interpolate__45value3612249313584056128(indentation__45at__45selection7921188416953297713(l_ta___2))]))
			} else {
				if (__61__618774367296004624587(x_matched___0, c____449())) {
					return l_insert___0(c____381())
				} else {
					if (__61__618774367296004624587(x_matched___0, c____450())) {
						(void l_ta___2.setSelectionRange(0, 0))
						return 1
					} else {
						if (__61__618774367296004624587(x_matched___0, c____451())) {
							const l_text__45size___5 = l_ta___2.value.length
							;(void l_ta___2.setSelectionRange(l_text__45size___5, l_text__45size___5))
							return 1
						} else {
							return c____558()
						}
					}
				}
			}
		}
	})()
	if (((typeof l_res___3) === "number")) {
		(void l_event___4.preventDefault())
		;(void 0)
	} else {
		(void 0)
	}
	return l_res___3
}
// count-lines file:///home/andy/keen.foo/script/keen-text.keen 150:1
const count__45lines12942263574767361633 = l_a___0 =>
	BigInt(split4387416293401962831(l_a___0, c____374()).length)
// mouse-move file:///home/andy/keen.foo/script/keen-text.keen 153:1
const _async_mouse__45move2588015212753593225 = async (l_a___5, l_text__45area___6, l_measurer___7, l_event___1, l_interrupter___3, l_cur__45tooltip___9) => {
	let l_destruct___10, x_matched___0, l_member2___8
	const l_offset___0 = offset3073302591095963252(l_event___1)
	const l_state___2 = get9580802860165117462(l_interrupter___3)
	const l_hover___4 = (await _async_get__45hover9040280828415431195(l_a___5, l_text__45area___6, l_measurer___7, l_offset___0))
	if (is__45still__45current8211145018809537472(l_interrupter___3, l_state___2)) {
		if ((l_hover___4 instanceof got__45hover4907230514421646949)) {
			if (__33__6116024188522381867246(((l_member2___8 = get16085910903584459623(l_cur__45tooltip___9)) , ((x_matched___0 = l_member2___8) , ((x_matched___0.index === 0) ? c____558() : ((x_matched___0.index === 1) ? ((l_destruct___10 = l_member2___8.value) , text__45content2237261504801362903(l_destruct___10)) : _unreachable())))), text9669080873291769292(l_hover___4))) {
				rm__45tooltip6504944686612638687(l_cur__45tooltip___9)
				const l_tooltip___11 = make__45tooltip12639864022574962909(text9669080873291769292(l_hover___4), client__45pos16803441519635005914(l_event___1))
				set__613103107860952198826(l_cur__45tooltip___9, new (option17597932037503078337)(1, l_tooltip___11))
				__126__613104040282438970899(document10104092556957017792().body, l_tooltip___11)
				;(void l_tooltip___11.showPopover())
				;(void 0)
			} else {
				(void 0)
			}
		} else {
			rm__45tooltip6504944686612638687(l_cur__45tooltip___9)
		}
	} else {
		(void 0)
	}
}
// make-tooltip file:///home/andy/keen.foo/script/keen-text.keen 176:1
const make__45tooltip12639864022574962909 = (l_text___1, l_pos___2) => {
	const l_res___0 = create__45div3550168679176634520()
	__126__6112374103362291366922(classes10076868907359993050(l_res___0), c____441())
	__126__126__613189257787936604857(attributes14633218357381336038(l_res___0), named__45new14405854769415967817(c____266(), c____282()))
	set__45text__45content8221937257971663238(l_res___0, l_text___1)
	__126__126__6114700015330332376719(style2323177492917899861(l_res___0), named__45new14405854769415967817(c____267(), [interpolate16033570998297636535([interpolate__45value3567273479283112933((x250077784616492939(l_pos___2) + 5)), c____444()]), interpolate16033570998297636535([interpolate__45value3567273479283112933((y1119538586925252720(l_pos___2) + 5)), c____444()])]))
	return l_res___0
}
// rm-tooltip file:///home/andy/keen.foo/script/keen-text.keen 189:1
const rm__45tooltip6504944686612638687 = l_tooltip___1 => {
	const l_temp___0 = get16085910903584459623(l_tooltip___1)
	const l_a___2 = l_temp___0.value
	if ((l_temp___0.index === 1)) {
		(void l_a___2.hidePopover())
		remove__45self3944075802663549677(l_a___2)
		set__613103107860952198826(l_tooltip___1, new (option17597932037503078337)(0, c____558()))
	} else {
		(void 0)
	}
}
// client-pos file:///home/andy/keen.foo/script/keen-text.keen 195:1
const client__45pos16803441519635005914 = l_event___0 =>
	new8815799574096410963(to16122815567382831054(l_event___0.clientX), to16122815567382831054(l_event___0.clientY))
// offset file:///home/andy/keen.foo/script/keen-text.keen 198:1
const offset3073302591095963252 = l_event___0 =>
	new8815799574096410963(to16122815567382831054(l_event___0.offsetX), to16122815567382831054(l_event___0.offsetY))
// new file:///home/andy/keen.foo/script/keen-text.keen 201:1
const new1120364380925983657 = (l_text___0, l_is__45diagnostic___1) =>
	new (got__45hover4907230514421646949)(l_text___0, l_is__45diagnostic___1)
// text file:///home/andy/keen.foo/script/keen-text.keen 201:19
const text9669080873291769292 = l_a___0 =>
	l_a___0.text
// get-hover file:///home/andy/keen.foo/script/keen-text.keen 202:1
const _async_get__45hover9040280828415431195 = async (l_a___6, l_text__45area___1, l_measurer___2, l_offset___3) => {
	let l_res___10, l_diagnostic___9, l_temp___7, l_diagnostics___5, l_position___4, l_temp___0
	return ((l_temp___0 = get__45position16181020991833455996(l_text__45area___1, l_measurer___2, l_offset___3)) , ((l_position___4 = l_temp___0) , ((l_temp___0 instanceof line__45and__45character615878410298802810) ? ((l_diagnostics___5 = get__45diagnostics16593236216496411341(keen17728403420956221477(l_a___6), uri3282533320242381186(l_a___6))) , ((l_temp___7 = (await _async_find2645277749695112387(l_diagnostics___5, async l_it___8 =>
			diag__45has__45pos10405636610396222280(l_it___8, l_position___4)))) , ((l_diagnostic___9 = l_temp___7) , ((l_temp___7 instanceof lsp__45diagnostic12287699751428889964) ? new1120364380925983657(message14106875049917279754(l_diagnostic___9), true) : ((l_res___10 = (await _async_get__45hover8986004595074208694(keen18405918350912323794(props14635037912233254451(l_a___6)), uri6653811086436609717(props14635037912233254451(l_a___6)), l_position___4))) , (is__45empty14055059243533451519(l_res___10) ? c____558() : new1120364380925983657(l_res___10, false))))))) : c____558())))
}
// diag-has-pos file:///home/andy/keen.foo/script/keen-text.keen 212:1
const diag__45has__45pos10405636610396222280 = (l_diag___1, l_position___2) => {
	let l_range___0
	return ((l_range___0 = range18388480328649839984(l_diag___1)) , (is__45empty18019023629152088027(range18388480328649839984(l_diag___1)) ? __61__6117024194640619852340(start11980012380947064971(l_range___0), l_position___2) : has__45pos18108683983688617600(l_range___0, l_position___2)))
}
// is-empty file:///home/andy/keen.foo/script/keen-text.keen 219:1
const is__45empty18019023629152088027 = l_a___0 =>
	__61__6117024194640619852340(start11980012380947064971(l_a___0), end10640653859827471309(l_a___0))
// get-position file:///home/andy/keen.foo/script/keen-text.keen 222:1
const get__45position16181020991833455996 = (l_text__45area___1, l_measurer___3, l_offset___5) => {
	let l_character___10, l_tabs__45fix___9, l_leading__45tabs___8, l_line__45text___7, l_column__45pre___6, l_line___4, l_column__45width___2, l_lines___0
	return ((l_lines___0 = split4387416293401962831(value16397312992932854084(l_text__45area___1), c____374())) , ((l_column__45width___2 = to16122815567382831054(l_measurer___3.offsetWidth)) , ((l_line___4 = clamp__45to3834421729709457586(round__45down10642979807465663819(__4714455254453016816432(y1119538586925252720(l_offset___5), 20)))) , ((l_column__45pre___6 = clamp__45to3834421729709457586(round__45down10642979807465663819(__4714455254453016816432(x250077784616492939(l_offset___5), l_column__45width___2)))) , (__6010307380702345989795(l_line___4, BigInt(l_lines___0.length)) ? ((l_line__45text___7 = subscript14124663872103004250(l_lines___0, l_line___4)) , ((l_leading__45tabs___8 = count__45leading__45tabs11442348198004358622(l_line__45text___7)) , ((l_tabs__45fix___9 = __4210985385519932138510(l_leading__45tabs___8, __459429596346129747750(4n, 1n))) , ((l_character___10 = (__61__616392919738123306753(l_line__45text___7, to__45array__45view10480319256574783196(c____14())) ? 0n : clamp__45sub12746779717410100284(l_column__45pre___6, l_tabs__45fix___9))) , (__60__616269385802849585881(l_character___10, size4088222861950865375(l_line__45text___7)) ? new13808961360227838714(to13152219174195707203(l_line___4), to13152219174195707203(l_character___10)) : c____558()))))) : c____558())))))
}
// clamp-sub file:///home/andy/keen.foo/script/keen-text.keen 237:1
const clamp__45sub12746779717410100284 = (l_a___0, l_b___1) =>
	(__625060923374247189753(l_a___0, l_b___1) ? __459429596346129747750(l_a___0, l_b___1) : 0n)
// insert-text-area-text file:///home/andy/keen.foo/script/keen-text.keen 241:1
const insert__45text__45area__45text17760158261484252580 = (l_text__45area___3, l_inserted___1) => {
	const l_inserted__45js__45string___0 = to11394861970819088114(l_inserted___1)
	const l_value___2 = l_text__45area___3.value
	const l_selection__45start___4 = l_text__45area___3.selectionStart
	const l_selection__45end___5 = l_text__45area___3.selectionEnd
	const l_before___6 = l_value___2.slice(0, l_selection__45start___4)
	const l_after___7 = l_value___2.slice(l_selection__45end___5)
	l_text__45area___3.value = ((l_before___6 + l_inserted__45js__45string___0) + l_after___7)
	const l_new__45cursor___8 = (l_selection__45start___4 + l_inserted__45js__45string___0.length)
	;(void l_text__45area___3.setSelectionRange(l_new__45cursor___8, l_new__45cursor___8))
	;(void 0)
}
// on-pressed-home-key file:///home/andy/keen.foo/script/keen-text.keen 256:1
const on__45pressed__45home__45key6682242097863336405 = l_text__45area___1 => {
	const l_str___0 = l_text__45area___1.value
	let l_pos___2 = to16122815567382831054(l_text__45area___1.selectionStart)
	if (Object.is(l_pos___2, 0)) {
		return false
	} else {
		if ((l_str___0[to14357848481777319600((l_pos___2 - 1))] === "\t")) {
			return false
		} else {
			if ((l_str___0[to14357848481777319600((l_pos___2 - 1))] === "\n")) {
				x_loop___0: while (true){
					if ((Object.is(l_pos___2, to16122815567382831054(l_str___0.length)) ? true : __33__6115318761368630375209(l_str___0[to14357848481777319600(l_pos___2)], "\t"))) {
						(void 0)
						break  x_loop___0
					} else {
						l_pos___2 = (l_pos___2 + 1)
						continue
					}
				}
			} else {
				x_loop___1: while (true){
					if ((Object.is(l_pos___2, 0) ? true : is__45newline__45or__45tab1097057527827125558(l_str___0[to14357848481777319600((l_pos___2 - 1))]))) {
						(void 0)
						break  x_loop___1
					} else {
						l_pos___2 = (l_pos___2 - 1)
						continue
					}
				}
			}
			;(void l_text__45area___1.setSelectionRange(to14357848481777319600(l_pos___2), to14357848481777319600(l_pos___2)))
			return true
		}
	}
}
// is-newline-or-tab file:///home/andy/keen.foo/script/keen-text.keen 271:1
const is__45newline__45or__45tab1097057527827125558 = l_a___0 =>
	((l_a___0 === "\n") ? true : (l_a___0 === "\t"))
// indentation-at-selection file:///home/andy/keen.foo/script/keen-text.keen 274:1
const indentation__45at__45selection7921188416953297713 = l_text__45area___1 => {
	const l_str___0 = to5062813879059210936(to7876981377693269494(l_text__45area___1.value))
	let l_pos___2 = min5984887149101995087(__459429596346129747750(BigInt(l_str___0.length), 1n), to5474718503984457374(l_text__45area___1.selectionStart))
	let l_first__45non__45space___3 = l_pos___2
	while (true){
		const l_temp___4 = (() => {
			const l_char___5 = subscript13188540832821584219(l_str___0, l_pos___2)
			if ((__33__613528396309692303628(l_char___5, 32) ? __33__613528396309692303628(l_char___5, 9) : false)) {
				l_first__45non__45space___3 = l_pos___2
			} else {
				(void 0)
			}
			if (Object.is(l_pos___2, 0n)) {
				return to6073813863926623175(subscript2978548572343441637(l_str___0, __46__467720007973451370645(l_pos___2, l_first__45non__45space___3)))
			} else {
				l_pos___2 = __459429596346129747750(l_pos___2, 1n)
				return ((__62__618892781134906463570(l_pos___2, 0n) ? __33__613528396309692303628(subscript13188540832821584219(l_str___0, l_pos___2), 10) : false) ? c____558() : to6073813863926623175(subscript2978548572343441637(l_str___0, __46__467720007973451370645(__431000895641751717785(l_pos___2, 1n), l_first__45non__45space___3))))
			}
		})()
		const x_matched___0 = l_temp___4
		if ((x_matched___0 instanceof none12752313651180151000)) {
			continue
		} else {
			if ((x_matched___0 instanceof string9092701471797383860)) {
				return l_temp___4
			} else {
				return _unreachable()
			}
		}
	}
}
// count-leading-tabs file:///home/andy/keen.foo/script/keen-text.keen 289:1
const count__45leading__45tabs11442348198004358622 = l_a___0 =>
	size4088222861950865375(take__45while16634515640083278467(l_a___0, l_it___1 =>
				Object.is(l_it___1, 9)))
// highlight file:///home/andy/keen.foo/script/keen-text.keen 292:1
const highlight18393188241454652437 = (l_tokens___1, l_diagnostics___2, l_highlight__45div___0, l_text___3) => {
	remove__45all__45children16510151441912951815(l_highlight__45div___0)
	__126__126__614422656202344497047(l_highlight__45div___0, tokens__45and__45diags__45to__45nodes5413784784235159100(l_tokens___1, l_diagnostics___2, l_text___3))
}
// new file:///home/andy/keen.foo/script/keen.keen 14:1
const new119112544407090292 = (l_worker___0, l_responses___1, l_next__45id___2, l_diagnostics___3, l_diagnostics__45handlers___4) =>
	new (keen__45server10037455106789271941)(l_worker___0, l_responses___1, l_next__45id___2, l_diagnostics___3, l_diagnostics__45handlers___4)
// worker file:///home/andy/keen.foo/script/keen.keen 15:5
const worker14199519731628680604 = l_a___0 =>
	l_a___0.worker
// responses file:///home/andy/keen.foo/script/keen.keen 16:5
const responses4898296120688833767 = l_a___0 =>
	l_a___0.responses
// next-id file:///home/andy/keen.foo/script/keen.keen 17:5
const next__45id8220630277791872068 = l_a___0 =>
	l_a___0["next-id"]
// set-next-id file:///home/andy/keen.foo/script/keen.keen 17:5
const set__45next__45id2567341367499860981 = (l_a___0, l_next__45id___1) => {
	l_a___0["next-id"] = l_next__45id___1
}
// diagnostics file:///home/andy/keen.foo/script/keen.keen 18:5
const diagnostics2817935355845217420 = l_a___0 =>
	l_a___0.diagnostics
// diagnostics-handlers file:///home/andy/keen.foo/script/keen.keen 19:5
const diagnostics__45handlers2396744062638711644 = l_a___0 =>
	l_a___0["diagnostics-handlers"]
// get-diagnostics file:///home/andy/keen.foo/script/keen.keen 24:1
const get__45diagnostics16593236216496411341 = (l_a___1, l_uri___2) => {
	let l_temp___3, x_matched___0, l_member2___0
	return ((l_member2___0 = subscript11035535348380650903(diagnostics2817935355845217420(l_a___1), l_uri___2)) , ((x_matched___0 = l_member2___0) , ((x_matched___0 instanceof none12752313651180151000) ? c____292() : ((x_matched___0 instanceof Array) ? ((l_temp___3 = l_member2___0) , l_temp___3) : _unreachable()))))
}
// subscribe-to-diagnostics file:///home/andy/keen.foo/script/keen.keen 27:1
const subscribe__45to__45diagnostics15376374076718028596 = (l_a___0, l_uri___1, l_handler___2) => {
	if (((typeof subscript353994119549764007(diagnostics__45handlers2396744062638711644(l_a___0), l_uri___1)) === "function")) {
		throw new (error14987278044892349075)(c____439())
	} else {
		set__45subscript1910673667124566829(diagnostics__45handlers2396744062638711644(l_a___0), l_uri___1, l_handler___2)
	}
}
// make-keen-server file:///home/andy/keen.foo/script/keen.keen 34:1
const _async_make__45keen__45server10317316877847483326 = async () => {
	let l_temp___9, l_destruct___14, x_matched___1, l_member2___13
	const l_start___0 = monotime17862611753135022422()
	const l_worker___1 = new (_global.Worker)("/worker.js", named__45new7732794263064867294(c____275(), c____260()))
	const l_server___2 = new119112544407090292(l_worker___1, list__45new9475043253826290789(c____299()), 1n, list__45new136611645598973979(c____300()), list__45new1690338353938863809(c____301()))
	const l_loaded___3 = new756562774359710668()
	const l_on__45message___4 = async l_event___5 => {
		const l_object___6 = parse__45json17391161396750161629(to7876981377693269494(l_event___5.data))
		if (has__45key2112788514118445018(l_object___6, _symbol14)) {
			const l_id___7 = to6592466256914416072(subscript9660048510646087161(l_object___6, _symbol14))
			resolve13500435106860640083((await (async () => {
					const l_member2___8 = remove18187661914701305496(responses4898296120688833767(l_server___2), l_id___7)
					const x_matched___0 = l_member2___8
					if ((x_matched___0 instanceof none12752313651180151000)) {
						throw new (error14987278044892349075)(c____522())
					} else {
						if ((x_matched___0 instanceof deferred6160713746550163298)) {
							return ((l_temp___9 = l_member2___8) , l_temp___9)
						} else {
							return _unreachable()
						}
					}
				})()), subscript9660048510646087161(l_object___6, _symbol61))
			;(void 0)
		} else {
			const l_method___10 = to8213088765813293489(subscript9660048510646087161(l_object___6, _symbol15))
			const l_params___11 = subscript9660048510646087161(l_object___6, _symbol16)
			if (__61__611154543819848657072(l_method___10, _symbol63)) {
				const l_p___12 = to6079922022268544583(l_params___11)
				set__45subscript17390896262415053692(diagnostics2817935355845217420(l_server___2), uri10123310464663507149(l_p___12), diagnostics13960889331711993610(l_p___12))
				;((l_member2___13 = subscript353994119549764007(diagnostics__45handlers2396744062638711644(l_server___2), uri10123310464663507149(l_p___12))) , ((x_matched___1 = l_member2___13) , ((x_matched___1 instanceof none12752313651180151000) ? (void 0) : (((typeof x_matched___1) === "function") ? ((l_destruct___14 = l_member2___13) , (await l_destruct___14(diagnostics13960889331711993610(l_p___12)))) : _unreachable()))))
			} else {
				throw todo10094731776182666185()
			}
		}
	}
	l_worker___1.onmessage = to10120165855316472489(l_on__45message___4)
	;(void deferred__45request14326608034932188975(l_server___2, _symbol64, list__45new4011499042526205552(c____291())))
	return l_server___2
}
// send-message file:///home/andy/keen.foo/script/keen.keen 69:1
const send__45message4005060929092216344 = (l_server___3, l_method___1, l_params___2) => {
	const l_msg___0 = named__45new6710044013026329874(c____273(), [to6946154876139669136(l_method___1), l_params___2])
	;(void worker14199519731628680604(l_server___3).postMessage(to11394861970819088114(to__45json4246243633140508202(l_msg___0))))
	;(void 0)
}
// request file:///home/andy/keen.foo/script/keen.keen 73:1
const _async_request17318499201307839444 = async (l_server___0, l_method___1, l_params___2) =>
	(await _async_await11695185140952543398(deferred__45request14326608034932188975(l_server___0, l_method___1, l_params___2)))
// deferred-request file:///home/andy/keen.foo/script/keen.keen 76:1
const deferred__45request14326608034932188975 = (l_server___1, l_method___3, l_params___4) => {
	const l_id___0 = next__45id8220630277791872068(l_server___1)
	set__45next__45id2567341367499860981(l_server___1, __431000895641751717785(next__45id8220630277791872068(l_server___1), 1n))
	const l_msg___2 = named__45new6710044013026329874(c____263(), [to12121664362602533419(l_id___0), to6946154876139669136(l_method___3), l_params___4])
	const l_deferred___5 = new12143027758111233873()
	set__45subscript7845334332166752318(responses4898296120688833767(l_server___1), l_id___0, l_deferred___5)
	;(void worker14199519731628680604(l_server___1).postMessage(to11394861970819088114(to__45json4246243633140508202(l_msg___2))))
	return l_deferred___5
}
// open-file file:///home/andy/keen.foo/script/keen.keen 89:1
const open__45file16035717941309978126 = (l_a___3, l_uri___1, l_text___2) => {
	let l_params___0
	return ((l_params___0 = new9201928707716336474(new18179259123732145363(l_uri___1, l_text___2))) , send__45message4005060929092216344(l_a___3, _symbol37, to8024955245556521529(l_params___0)))
}
// get-hover file:///home/andy/keen.foo/script/keen.keen 93:1
const _async_get__45hover8986004595074208694 = async (l_a___4, l_uri___1, l_position___2) => {
	let l_res___3, l_params___0
	return ((l_params___0 = new9267265687885510944(new6112118065953417889(new16673209189373762894(l_uri___1), l_position___2))) , ((l_res___3 = (await _async_request17318499201307839444(l_a___4, _symbol28, to7408575332313503927(l_params___0)))) , (__61__6113058398162984935724(l_res___3, new (json11387066671148698414)(0, c____559())) ? c____319() : to13461298867722084777(subscript9660048510646087161(subscript9660048510646087161(l_res___3, _symbol29), _symbol7)))))
}
// get-tokens file:///home/andy/keen.foo/script/keen.keen 102:1
const _async_get__45tokens1491121998157293548 = async (l_a___3, l_uri___1) => {
	let l_data____4, l_encoded___2, l_params___0
	return ((l_params___0 = new12804423337006846202(new16673209189373762894(l_uri___1))) , ((l_encoded___2 = (await _async_request17318499201307839444(l_a___3, _symbol35, to4466561845810545139(l_params___0)))) , ((l_data____4 = to7880722111372567736(subscript9660048510646087161(l_encoded___2, _symbol36))) , to14719730791329643609(decode__45semantic__45tokens15928806873239836228(new13140557819614815733(l_data____4))))))
}
// syntax-translate file:///home/andy/keen.foo/script/keen.keen 109:1
const _async_syntax__45translate12338068347811746322 = async (l_server___5, l_from__45lang___2, l_source___1, l_to__45lang___3) => {
	let l_response___4, l_params___0
	return ((l_params___0 = new10234417753771432141(l_source___1, l_from__45lang___2, l_to__45lang___3)) , ((l_response___4 = to10206646662420902216((await _async_request17318499201307839444(l_server___5, _symbol10, to7733432826654048325(l_params___0))))) , (is__45empty5794801876453127968(diagnostics4572651080025559201(l_response___4)) ? output12408546207986322254(l_response___4) : interpolate16033570998297636535([c____337(), interpolate__45value136912606860311098(subscript18367237088670138931(diagnostics4572651080025559201(l_response___4), 0n))]))))
}
// build-js-script file:///home/andy/keen.foo/script/keen.keen 125:1
const _async_build__45js__45script13159092364747023150 = async (l_server___3, l_main__45kind___1, l_main___2) => {
	let l_params___0
	return ((l_params___0 = new12477564127910045247(l_main__45kind___1, l_main___2, list__45new1061224832537393684([l_main___2]))) , to15742332891391975813((await _async_request17318499201307839444(l_server___3, _symbol47, to6225588828774179387(l_params___0)))))
}
// define-loading-spinner-element file:///home/andy/keen.foo/script/loading-spinner.keen 5:1
const define__45loading__45spinner__45element2960771456410577123 = () =>
	define__45custom__45element16761374808165769600(c____392(), new2859235513343379324(c____393()), l_x___0 =>
			__126__613104040282438970899(shadow__45root18170719147303732824(l_x___0), loading__45div8205849077663832842()))
// create-loading-spinner file:///home/andy/keen.foo/script/loading-spinner.keen 9:1
const create__45loading__45spinner3691045459411508097 = () =>
	create__45node8155601788828585795(_symbol50)
// loading-div file:///home/andy/keen.foo/script/loading-spinner.keen 12:1
const loading__45div8205849077663832842 = () =>
	create__45div7678826057371039427(c____394(), c____280().map(l_class__45name___0 =>
				create__45div5581806103065025864(l_class__45name___0)))
// to file:///home/andy/keen.foo/script/syntax-translate-protocol.keen 1:1
const to7733432826654048325 = l_a___0 =>
	new (json11387066671148698414)(7, new (json__45object4052534663485263901)(c____262(), [to17949575045285191419(l_a___0["from-language"]), to5826787255917315874(l_a___0.source), to17949575045285191419(l_a___0["to-language"])]))
// new file:///home/andy/keen.foo/script/syntax-translate-protocol.keen 1:1
const new10234417753771432141 = (l_source___0, l_from__45language___1, l_to__45language___2) =>
	new (syntax__45translate__45params13158403322448452476)(l_source___0, l_from__45language___1, l_to__45language___2)
// to file:///home/andy/keen.foo/script/syntax-translate-protocol.keen 2:1
const to17949575045285191419 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? new (json11387066671148698414)(5, c____335()) : ((x_matched___0 === 1) ? new (json11387066671148698414)(5, c____336()) : _unreachable())))
}
// == file:///home/andy/keen.foo/script/syntax-translate-protocol.keen 2:1
const __61__613727600471881965811 = (l_a___0, l_b___1) =>
	Object.is(l_a___0, l_b___1)
// to file:///home/andy/keen.foo/script/syntax-translate-protocol.keen 3:1
const to10206646662420902216 = l_a___0 =>
	new (syntax__45translate__45result13252000517598564106)(to13461298867722084777(subscript9660048510646087161(l_a___0, _symbol8)), to2753238265257367295(subscript9660048510646087161(l_a___0, _symbol9)))
// output file:///home/andy/keen.foo/script/syntax-translate-protocol.keen 3:32
const output12408546207986322254 = l_a___0 =>
	l_a___0.output
// diagnostics file:///home/andy/keen.foo/script/syntax-translate-protocol.keen 3:47
const diagnostics4572651080025559201 = l_a___0 =>
	l_a___0.diagnostics
// define-syntax-translate-element file:///home/andy/keen.foo/script/syntax-translate.keen 9:1
const _async_define__45syntax__45translate__45element292169961910799592 = async l_keen___2 => {
	(await _async_define__45custom__45element12420477442320166964(c____315(), async l_it___0 =>
			(void 0)))
	;(await _async_define__45custom__45element16761374808165769600(c____316(), c____554(), async l_x___1 =>
			__126__613104040282438970899(shadow__45root18170719147303732824(l_x___1), (await _async_make__45div10991661861637604729(l_keen___2, child__45nodes2391162592786005318(as__45node13279775024470589263(l_x___1)))))))
}
// make-div file:///home/andy/keen.foo/script/syntax-translate.keen 14:1
const _async_make__45div10991661861637604729 = async (l_keen___2, l_child__45nodes___0) =>
	create__45node380069253245485333(_symbol0, list__45new15738010718011681032(c____294()), c____319(), list__45new16687999342081306217([create__45node380069253245485333(_symbol1, list__45new15738010718011681032(c____294()), c____319(), list__45new16687999342081306217([create__45node380069253245485333(_symbol2, list__45new15738010718011681032(c____294()), c____319(), list__45new16687999342081306217([th12039497724597862262(c____320()), th12039497724597862262(c____321())]))])), create__45node380069253245485333(_symbol3, list__45new15738010718011681032(c____294()), c____319(), (await _async_for__45star16349909717125624255(l_child__45nodes___0, async l_x___1 =>
							(is__45text__45node3298223931404228869(l_x___1) ? c____258() : list__45new16687999342081306217([(await _async_create__45row15495687543700021474(l_keen___2, get__45child__45text390304316099798459(l_x___1)))])))))]))
// create-row file:///home/andy/keen.foo/script/syntax-translate.keen 24:1
const _async_create__45row15495687543700021474 = async (l_server___10, l_initial__45keen__45source___13) => {
	let l_temp___4, l_result___9, l_input__45value___8
	let l_inputs___0 = c____258()
	const l_input__45for__45lang___1 = async l_lang___2 =>
		subscript9322066793325914931(l_inputs___0, (await (async () => {
				const l_member2___3 = index__45of8417315473479866296(c____295(), l_lang___2)
				const x_matched___0 = l_member2___3
				if ((x_matched___0 instanceof none12752313651180151000)) {
					throw new (error14987278044892349075)(c____324())
				} else {
					if (((typeof x_matched___0) === "bigint")) {
						return ((l_temp___4 = l_member2___3) , l_temp___4)
					} else {
						return _unreachable()
					}
				}
			})()))
	const l_on__45input___5 = async l_input__45lang___6 => {
		for (const l_output__45lang___7 of c____295()) {
			(__61__613727600471881965811(l_output__45lang___7, l_input__45lang___6) ? (void 0) : ((l_input__45value___8 = value16397312992932854084((await l_input__45for__45lang___1(l_input__45lang___6)))) , ((l_result___9 = (await _async_syntax__45translate12338068347811746322(l_server___10, l_input__45lang___6, l_input__45value___8, l_output__45lang___7))) , set__45value12227261877023038251((await l_input__45for__45lang___1(l_output__45lang___7)), l_result___9))))
		}
	}
	l_inputs___0 = (await Array.fromAsync(c____295(), async l_lang___11 =>
			create__45input__45text14326232395005306174(async l_it___12 =>
					(await l_on__45input___5(l_lang___11)), (__61__613727600471881965811(l_lang___11, 1) ? l_initial__45keen__45source___13 : c____319()))))
	;(await l_on__45input___5(1))
	return create__45node380069253245485333(_symbol2, list__45new15738010718011681032(c____294()), c____319(), (await Array.fromAsync(l_inputs___0, async l_x___14 =>
				create__45node380069253245485333(_symbol4, list__45new15738010718011681032(c____294()), c____319(), list__45new16687999342081306217([l_x___14])))))
}
// th file:///home/andy/keen.foo/script/syntax-translate.keen 50:1
const th12039497724597862262 = l_text___0 =>
	create__45node380069253245485333(_symbol17, list__45new15738010718011681032(c____294()), c____319(), list__45new16687999342081306217([create__45text__45node16218478718735299168(l_text___0)]))
// define-theme-switcher-element file:///home/andy/keen.foo/script/theme-switcher.keen 7:1
const define__45theme__45switcher__45element2125395838033501468 = () =>
	define__45custom__45element16761374808165769600(c____494(), new2859235513343379324(c____495()), l_x___0 =>
			show__45icon15775543939416272191(shadow__45root18170719147303732824(l_x___0), get__45theme10219000418271510661()))
// show-icon file:///home/andy/keen.foo/script/theme-switcher.keen 11:1
const show__45icon15775543939416272191 = (l_shadow__45root___5, l_theme___1) => {
	const l_res___0 = icon5369875945348610991(l_theme___1)
	const l_on__45click___2 = l_args___3 => {
		const l_new__45theme___4 = opposite17747285212998422212(l_theme___1)
		set__45theme6509592321661932661(l_new__45theme___4)
		show__45icon15775543939416272191(l_shadow__45root___5, l_new__45theme___4)
	}
	l_res___0.onclick = to10120165855316472489(l_on__45click___2)
	set__45children11014010319367545746(l_shadow__45root___5, list__45new16687999342081306217([l_res___0]))
}
// == file:///home/andy/keen.foo/script/theme-switcher.keen 21:1
const __61__612605041792446992492 = (l_a___0, l_b___1) =>
	Object.is(l_a___0, l_b___1)
// to file:///home/andy/keen.foo/script/theme-switcher.keen 21:1
const to14961674196729038801 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? _symbol58 : ((x_matched___0 === 1) ? _symbol59 : _unreachable())))
}
// to file:///home/andy/keen.foo/script/theme-switcher.keen 21:1
const to12908181317565589286 = l_a___0 => {
	const x_matched___0 = l_a___0
	if (__61__611154543819848657072(x_matched___0, _symbol58)) {
		return 0
	} else {
		if (__61__611154543819848657072(x_matched___0, _symbol59)) {
			return 1
		} else {
			return c____558()
		}
	}
}
// to file:///home/andy/keen.foo/script/theme-switcher.keen 22:1
const to10109223726734711099 = l_a___0 =>
	to12908181317565589286(to9088973396303820521(l_a___0))
// to file:///home/andy/keen.foo/script/theme-switcher.keen 24:1
const to15791797670103550224 = l_a___0 =>
	to10430906571710337221(to14961674196729038801(l_a___0))
// opposite file:///home/andy/keen.foo/script/theme-switcher.keen 26:1
const opposite17747285212998422212 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? 1 : ((x_matched___0 === 1) ? 0 : _unreachable())))
}
// icon file:///home/andy/keen.foo/script/theme-switcher.keen 33:1
const icon5369875945348610991 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? moon__45icon6167794004857622206() : ((x_matched___0 === 1) ? sun__45icon6929994211750664551() : _unreachable())))
}
// get-theme file:///home/andy/keen.foo/script/theme-switcher.keen 40:1
const get__45theme10219000418271510661 = () => {
	let l_destruct___2, x_matched___0, l_member2___1, l_temp___6, x_matched___1, l_member2___5
	const l_from__45local___0 = ((l_member2___1 = subscript575647143438890080(c____565(), _symbol57)) , ((x_matched___0 = l_member2___1) , ((x_matched___0 instanceof none12752313651180151000) ? c____558() : ((x_matched___0 instanceof string9092701471797383860) ? ((l_destruct___2 = l_member2___1) , to10109223726734711099(l_destruct___2)) : _unreachable()))))
	const l_sys___3 = system__45theme2191246385478946039()
	;(__61__619125758492689299197(l_from__45local___0, l_sys___3) ? __45__6114284127370960366970(c____565(), _symbol57) : (void 0))
	const l_res___4 = ((l_member2___5 = l_from__45local___0) , ((x_matched___1 = l_member2___5) , ((x_matched___1 instanceof none12752313651180151000) ? system__45theme2191246385478946039() : (((typeof x_matched___1) === "number") ? ((l_temp___6 = l_member2___5) , l_temp___6) : _unreachable()))))
	update__45root__45for__45theme15854037686366585971(l_res___4)
	return l_res___4
}
// set-theme file:///home/andy/keen.foo/script/theme-switcher.keen 49:1
const set__45theme6509592321661932661 = l_a___0 => {
	(__61__612605041792446992492(l_a___0, system__45theme2191246385478946039()) ? __45__6114284127370960366970(c____565(), _symbol57) : set__45subscript5754463347447901867(c____565(), _symbol57, to15791797670103550224(l_a___0)))
	update__45root__45for__45theme15854037686366585971(l_a___0)
}
// update-root-for-theme file:///home/andy/keen.foo/script/theme-switcher.keen 56:1
const update__45root__45for__45theme15854037686366585971 = l_a___1 => {
	let x_matched___0, l_root___0
	return ((l_root___0 = document10104092556957017792().documentElement) , ((x_matched___0 = l_a___1) , ((x_matched___0 === 0) ? set__45classes9907877374112971136(l_root___0, c____285()) : ((x_matched___0 === 1) ? set__45classes9907877374112971136(l_root___0, c____286()) : _unreachable()))))
}
// subscript file:///home/andy/keen.foo/script/theme-switcher.keen 66:1
const subscript575647143438890080 = (l_ignore___2, l_name___1) => {
	let l_res___0
	return ((l_res___0 = _global.localStorage.getItem(to1007405755162848852(l_name___1))) , ((l_res___0 === null) ? c____558() : to7876981377693269494(l_res___0)))
}
// set-subscript file:///home/andy/keen.foo/script/theme-switcher.keen 71:1
const set__45subscript5754463347447901867 = (l_ignore___2, l_name___0, l_value___1) => {
	(void _global.localStorage.setItem(to1007405755162848852(l_name___0), to11394861970819088114(l_value___1)))
	;(void 0)
}
// -= file:///home/andy/keen.foo/script/theme-switcher.keen 75:1
const __45__6114284127370960366970 = (l_ignore___1, l_name___0) => {
	(void _global.localStorage.removeItem(to1007405755162848852(l_name___0)))
	;(void 0)
}
// system-theme file:///home/andy/keen.foo/script/theme-switcher.keen 79:1
const system__45theme2191246385478946039 = () =>
	(to7922626875503340678(_global.matchMedia("(prefers-color-scheme: dark)").matches) ? 0 : 1)
// new file:///home/andy/keen.foo/script/util/util.keen 6:1
const new12279405698984288478 = (l_msec___0, l_timeout___1) =>
	new (debouncer14023245979395367712)(l_msec___0, l_timeout___1)
// msec file:///home/andy/keen.foo/script/util/util.keen 7:5
const msec13000044585015434223 = l_a___0 =>
	l_a___0.msec
// timeout file:///home/andy/keen.foo/script/util/util.keen 8:5
const timeout7315953227557637240 = l_a___0 =>
	l_a___0.timeout
// set-timeout file:///home/andy/keen.foo/script/util/util.keen 8:5
const set__45timeout14315329334566697241 = (l_a___0, l_timeout___1) => {
	l_a___0.timeout = l_timeout___1
}
// new file:///home/andy/keen.foo/script/util/util.keen 9:1
const new17072821741960804629 = l_time___0 =>
	new12279405698984288478(milliseconds12567785926848768263(l_time___0), null)
// with-block file:///home/andy/keen.foo/script/util/util.keen 12:1
const with__45block1617706797681541595 = (l_a___0, l_action___1) => {
	(void _global.clearTimeout(timeout7315953227557637240(l_a___0)))
	set__45timeout14315329334566697241(l_a___0, _global.setTimeout(to14834047168491810918(l_action___1), to14357848481777319600(msec13000044585015434223(l_a___0))))
}
// get-child-text file:///home/andy/keen.foo/script/util/util.keen 17:1
const get__45child__45text390304316099798459 = l_node___1 => {
	const l_child__45nodes___0 = child__45nodes2391162592786005318(l_node___1)
	if (Object.is(BigInt(l_child__45nodes___0.length), 1n)) {
		return get__45text__45from__45node6369729903560713952(subscript9322066793325914931(l_child__45nodes___0, 0n))
	} else {
		throw new (error14987278044892349075)(c____322())
	}
}
// get-text-from-node file:///home/andy/keen.foo/script/util/util.keen 21:1
const get__45text__45from__45node6369729903560713952 = l_node___0 => {
	if ((l_node___0 instanceof _global.Text)) {
		return to7876981377693269494(l_node___0.data)
	} else {
		throw new (error14987278044892349075)(c____323())
	}
}
// new file:///home/andy/keen/app/ide/get-tokens.keen 92:1
const new9951567867024640320 = (l_line___0, l_character___1, l_length___2, l_type___3) =>
	new (token3305246204331822241)(l_line___0, l_character___1, l_length___2, l_type___3)
// line file:///home/andy/keen/app/ide/get-tokens.keen 93:5
const line4472995048865600499 = l_a___0 =>
	l_a___0.line
// character file:///home/andy/keen/app/ide/get-tokens.keen 94:5
const character13844740545945210552 = l_a___0 =>
	l_a___0.character
// length file:///home/andy/keen/app/ide/get-tokens.keen 95:5
const length13874123960348938514 = l_a___0 =>
	l_a___0.length
// type file:///home/andy/keen/app/ide/get-tokens.keen 96:5
const type10261190574335516740 = l_a___0 =>
	l_a___0.type
// decode-semantic-tokens file:///home/andy/keen/app/ide/get-tokens.keen 97:1
const decode__45semantic__45tokens15928806873239836228 = l_inner___0 =>
	new (decode__45semantic__45tokens1879504775561134758)(l_inner___0)
// inner file:///home/andy/keen/app/ide/get-tokens.keen 97:31
const inner10960010930472269285 = l_a___0 =>
	l_a___0.inner
// to file:///home/andy/keen/app/ide/get-tokens.keen 98:1
const to14719730791329643609 = l_a___0 =>
	map6872015901666177361(l_a___0, l_it___1 =>
			l_it___1)
// size file:///home/andy/keen/app/ide/get-tokens.keen 100:1
const size3788412255788927120 = l_a___0 =>
	__473463626361574020402(BigInt(data_902653807258950644(inner10960010930472269285(l_a___0)).length), 5n)
// some file:///home/andy/keen/app/ide/get-tokens.keen 102:1
const some3962690105988799531 = (l_a___4, l_f___12) => {
	let l_temp___11
	let l_line___0 = 0
	let l_character___1 = 0
	let l_i___2 = 0n
	const l_data____3 = data_902653807258950644(inner10960010930472269285(l_a___4))
	while (true){
		const l_temp___5 = (() => {
			if (Object.is(l_i___2, BigInt(l_data____3.length))) {
				return false
			} else {
				const l_delta__45line___6 = to13152219174195707203(subscript13750466444187217361(l_data____3, l_i___2))
				const l_delta__45character___7 = to13152219174195707203(subscript13750466444187217361(l_data____3, __431000895641751717785(l_i___2, 1n)))
				const l_length___8 = to13152219174195707203(subscript13750466444187217361(l_data____3, __431000895641751717785(l_i___2, 2n)))
				const l_type___9 = (() => {
					const l_member2___10 = to7429711055327317403(subscript13750466444187217361(l_data____3, __431000895641751717785(l_i___2, 3n)))
					const x_matched___0 = l_member2___10
					if ((x_matched___0 instanceof none12752313651180151000)) {
						throw new (error14987278044892349075)(c____446())
					} else {
						if (((typeof x_matched___0) === "number")) {
							return ((l_temp___11 = l_member2___10) , l_temp___11)
						} else {
							return _unreachable()
						}
					}
				})()
				if (Object.is(l_delta__45line___6, 0)) {
					l_character___1 = __437467979216580978677(l_character___1, l_delta__45character___7)
				} else {
					l_line___0 = __437467979216580978677(l_line___0, l_delta__45line___6)
					l_character___1 = l_delta__45character___7
				}
				if (l_f___12(new9951567867024640320(l_line___0, l_character___1, l_length___8, l_type___9))) {
					return true
				} else {
					l_i___2 = __431000895641751717785(l_i___2, 5n)
					return c____558()
				}
			}
		})()
		const x_matched___1 = l_temp___5
		if ((x_matched___1 instanceof none12752313651180151000)) {
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
// to file:///home/andy/keen/app/ide/get-tokens.keen 126:1
const to7429711055327317403 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = (Number(l_a___0) & 255)) , ((x_matched___0 === 0) ? 0 : ((x_matched___0 === 1) ? 1 : ((x_matched___0 === 2) ? 2 : ((x_matched___0 === 3) ? 3 : ((x_matched___0 === 4) ? 4 : ((x_matched___0 === 5) ? 5 : ((x_matched___0 === 6) ? 6 : ((x_matched___0 === 7) ? 7 : ((x_matched___0 === 8) ? 8 : ((x_matched___0 === 9) ? 9 : ((x_matched___0 === 10) ? 10 : ((x_matched___0 === 11) ? 11 : ((x_matched___0 === 12) ? 12 : ((x_matched___0 === 13) ? 13 : c____558())))))))))))))))
}
// to file:///home/andy/keen/app/ide/get-tokens.keen 143:1
const to12637710154116563759 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? c____420() : ((x_matched___0 === 1) ? c____421() : ((x_matched___0 === 2) ? c____422() : ((x_matched___0 === 3) ? c____423() : ((x_matched___0 === 4) ? c____424() : ((x_matched___0 === 5) ? c____425() : ((x_matched___0 === 6) ? c____426() : ((x_matched___0 === 7) ? c____427() : ((x_matched___0 === 8) ? c____428() : ((x_matched___0 === 9) ? c____429() : ((x_matched___0 === 10) ? c____371() : ((x_matched___0 === 11) ? c____430() : ((x_matched___0 === 12) ? c____431() : ((x_matched___0 === 13) ? c____432() : _unreachable())))))))))))))))
}
// new file:///home/andy/keen/app/model/lsp.keen 8:1
const new16673209189373762894 = l_uri___0 =>
	new (text__45document__45identifier7312983694771448059)(l_uri___0)
// to file:///home/andy/keen/app/model/lsp.keen 8:1
const to1885880064421134729 = l_a___0 =>
	new (json11387066671148698414)(7, new (json__45object4052534663485263901)(c____268(), [to16242417281509899286(l_a___0.uri)]))
// new file:///home/andy/keen/app/model/lsp.keen 10:1
const new6112118065953417889 = (l_textDocument___0, l_position___1) =>
	new (text__45document__45position__45params1944773533187291426)(l_textDocument___0, l_position___1)
// to file:///home/andy/keen/app/model/lsp.keen 10:1
const to1402065826298608808 = l_a___0 =>
	new (json11387066671148698414)(7, new (json__45object4052534663485263901)(c____270(), [to7502639424236648927(l_a___0.position), to1885880064421134729(l_a___0.textDocument)]))
// new file:///home/andy/keen/app/model/lsp.keen 221:1
const new12477564127910045247 = (l_main__45kind___0, l_uri___1, l_diagnosticsOnlyForUris___2) =>
	new (build__45js__45script__45params1829957171103529864)(l_main__45kind___0, l_uri___1, l_diagnosticsOnlyForUris___2)
// to file:///home/andy/keen/app/model/lsp.keen 221:1
const to6225588828774179387 = l_a___0 =>
	new (json11387066671148698414)(7, new (json__45object4052534663485263901)(c____274(), [to2986427323046012814(l_a___0.diagnosticsOnlyForUris), to11099676860512192864(l_a___0["main-kind"]), to16242417281509899286(l_a___0.uri)]))
// to file:///home/andy/keen/app/model/lsp.keen 225:1
const to11099676860512192864 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? new (json11387066671148698414)(5, c____470()) : ((x_matched___0 === 1) ? new (json11387066671148698414)(5, c____471()) : _unreachable())))
}
// to file:///home/andy/keen/app/model/lsp.keen 226:1
const to15742332891391975813 = l_a___0 =>
	new (build__45js__45script__45result4331811127655445505)(to13461298867722084777(subscript9660048510646087161(l_a___0, _symbol9)), to2927217778786738018(subscript9660048510646087161(l_a___0, _symbol46)))
// diagnostics file:///home/andy/keen/app/model/lsp.keen 226:31
const diagnostics2531914668180987408 = l_a___0 =>
	l_a___0.diagnostics
// script file:///home/andy/keen/app/model/lsp.keen 226:51
const script15512534719776912668 = l_a___0 =>
	l_a___0.script
// new file:///home/andy/keen/app/model/lsp.keen 234:1
const new12412984994430643134 = (l_pipe___0, l_text___1) =>
	new (write7745164403500584357)(l_pipe___0, l_text___1)
// pipe file:///home/andy/keen/app/model/lsp.keen 234:14
const pipe12117206775084284466 = l_a___0 =>
	l_a___0.pipe
// text file:///home/andy/keen/app/model/lsp.keen 234:25
const text718887955097518256 = l_a___0 =>
	l_a___0.text
// == file:///home/andy/keen/app/model/lsp.keen 236:1
const __61__6115905784597409491349 = (l_a___0, l_b___1) =>
	Object.is(l_a___0, l_b___1)
// to file:///home/andy/keen/app/model/lsp.keen 308:1
const to8024955245556521529 = l_a___0 =>
	new (json11387066671148698414)(7, new (json__45object4052534663485263901)(c____271(), [to8489285191487890182(l_a___0.textDocument)]))
// new file:///home/andy/keen/app/model/lsp.keen 308:1
const new9201928707716336474 = l_textDocument___0 =>
	new (did__45open__45text__45document__45params3134243963385049932)(l_textDocument___0)
// new file:///home/andy/keen/app/model/lsp.keen 314:1
const new18179259123732145363 = (l_uri___0, l_text___1) =>
	new (text__45document__45item3135008948155119709)(l_uri___0, l_text___1)
// to file:///home/andy/keen/app/model/lsp.keen 314:1
const to8489285191487890182 = l_a___0 =>
	new (json11387066671148698414)(7, new (json__45object4052534663485263901)(c____272(), [to5826787255917315874(l_a___0.text), to16242417281509899286(l_a___0.uri)]))
// new file:///home/andy/keen/app/model/lsp.keen 319:1
const new9267265687885510944 = l_params___0 =>
	new (hover__45params3092478151266892357)(l_params___0)
// params file:///home/andy/keen/app/model/lsp.keen 319:21
const params17560886374687579685 = l_a___0 =>
	l_a___0.params
// to file:///home/andy/keen/app/model/lsp.keen 320:1
const to7408575332313503927 = l_a___0 =>
	to1402065826298608808(params17560886374687579685(l_a___0))
// new file:///home/andy/keen/app/model/lsp.keen 328:1
const new15416195018595593337 = (l_uri___0, l_diagnostics___1) =>
	new (publish__45diagnostics__45params14349708187806702366)(l_uri___0, l_diagnostics___1)
// uri file:///home/andy/keen/app/model/lsp.keen 328:35
const uri10123310464663507149 = l_a___0 =>
	l_a___0.uri
// diagnostics file:///home/andy/keen/app/model/lsp.keen 328:44
const diagnostics13960889331711993610 = l_a___0 =>
	l_a___0.diagnostics
// to file:///home/andy/keen/app/model/lsp.keen 329:1
const to6079922022268544583 = l_a___0 =>
	new15416195018595593337(to13624445991056119878(subscript9660048510646087161(l_a___0, _symbol30)), to14795486065361282276(subscript9660048510646087161(l_a___0, _symbol9)))
// new file:///home/andy/keen/app/model/lsp.keen 340:1
const new8810085379339960624 = (l_range___0, l_severity___1, l_message___2) =>
	new (lsp__45diagnostic12287699751428889964)(l_range___0, l_severity___1, l_message___2)
// range file:///home/andy/keen/app/model/lsp.keen 341:5
const range18388480328649839984 = l_a___0 =>
	l_a___0.range
// severity file:///home/andy/keen/app/model/lsp.keen 342:5
const severity7324697814923534927 = l_a___0 =>
	l_a___0.severity
// message file:///home/andy/keen/app/model/lsp.keen 343:5
const message14106875049917279754 = l_a___0 =>
	l_a___0.message
// to file:///home/andy/keen/app/model/lsp.keen 344:1
const to970397054013406799 = l_a___0 =>
	new8810085379339960624(to12536485411103950193(subscript9660048510646087161(l_a___0, _symbol67)), to15335721682226941959(subscript9660048510646087161(l_a___0, _symbol68)), to13461298867722084777(subscript9660048510646087161(l_a___0, _symbol69)))
// to file:///home/andy/keen/app/model/lsp.keen 348:1
const to4402984006503256205 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = (Number(l_a___0) & 255)) , ((x_matched___0 === 1) ? 1 : ((x_matched___0 === 2) ? 2 : ((x_matched___0 === 3) ? 3 : ((x_matched___0 === 4) ? 4 : c____558())))))
}
// == file:///home/andy/keen/app/model/lsp.keen 348:1
const __61__612073437058700587129 = (l_a___0, l_b___1) =>
	Object.is(l_a___0, l_b___1)
// to file:///home/andy/keen/app/model/lsp.keen 355:1
const to15335721682226941959 = l_a___1 => {
	let l_temp___2
	const l_member2___0 = to4402984006503256205(BigInt.asUintN(64, BigInt(to10034770207190155702(l_a___1))))
	const x_matched___0 = l_member2___0
	if ((x_matched___0 instanceof none12752313651180151000)) {
		throw new (error14987278044892349075)(c____525())
	} else {
		if (((typeof x_matched___0) === "number")) {
			return ((l_temp___2 = l_member2___0) , l_temp___2)
		} else {
			return _unreachable()
		}
	}
}
// to file:///home/andy/keen/app/model/lsp.keen 389:1
const to4466561845810545139 = l_a___0 =>
	new (json11387066671148698414)(7, new (json__45object4052534663485263901)(c____271(), [to1885880064421134729(l_a___0.textDocument)]))
// new file:///home/andy/keen/app/model/lsp.keen 389:1
const new12804423337006846202 = l_textDocument___0 =>
	new (semantic__45tokens__45params9274090045395605629)(l_textDocument___0)
// new file:///home/andy/keen/app/model/lsp.keen 398:1
const new13140557819614815733 = l_data____0 =>
	new (semantic__45tokens3937383226681102639)(l_data____0)
// data_ file:///home/andy/keen/app/model/lsp.keen 398:24
const data_902653807258950644 = l_a___0 =>
	l_a___0.data_
// new file:///home/andy/keen/app/model/source-range.keen 53:1
const new13808961360227838714 = (l_line___0, l_character___1) =>
	new (line__45and__45character615878410298802810)(l_line___0, l_character___1)
// <=> file:///home/andy/keen/app/model/source-range.keen 53:1
const __60__61__6211466630830516482839 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0.line, l_b___1.line)) , ((x_matched___0 === 0) ? 0 : ((x_matched___0 === 1) ? _compareIntegral(l_a___0.character, l_b___1.character) : ((x_matched___0 === 2) ? 2 : _unreachable()))))
}
// == file:///home/andy/keen/app/model/source-range.keen 53:1
const __61__6117024194640619852340 = (l_a___0, l_b___1) =>
	(Object.is(l_a___0.line, l_b___1.line) ? Object.is(l_a___0.character, l_b___1.character) : false)
// to file:///home/andy/keen/app/model/source-range.keen 53:1
const to7502639424236648927 = l_a___0 =>
	new (json11387066671148698414)(7, new (json__45object4052534663485263901)(c____269(), [to13883903483809172788(l_a___0.character), to13883903483809172788(l_a___0.line)]))
// to file:///home/andy/keen/app/model/source-range.keen 53:1
const to17980154313217262558 = l_a___0 =>
	new (line__45and__45character615878410298802810)(to10034770207190155702(subscript9660048510646087161(l_a___0, _symbol32)), to10034770207190155702(subscript9660048510646087161(l_a___0, _symbol31)))
// line file:///home/andy/keen/app/model/source-range.keen 53:27
const line2614267364592972640 = l_a___0 =>
	l_a___0.line
// character file:///home/andy/keen/app/model/source-range.keen 53:39
const character15834956226447269414 = l_a___0 =>
	l_a___0.character
// to file:///home/andy/keen/app/model/source-range.keen 103:1
const to12536485411103950193 = l_a___0 =>
	new (line__45and__45character__45range14393235492370956285)(to17980154313217262558(subscript9660048510646087161(l_a___0, _symbol65)), to17980154313217262558(subscript9660048510646087161(l_a___0, _symbol66)))
// start file:///home/andy/keen/app/model/source-range.keen 103:33
const start11980012380947064971 = l_a___0 =>
	l_a___0.start
// end file:///home/andy/keen/app/model/source-range.keen 103:59
const end10640653859827471309 = l_a___0 =>
	l_a___0.end
// has-pos file:///home/andy/keen/app/model/source-range.keen 106:1
const has__45pos18108683983688617600 = (l_range___0, l_pos___1) =>
	(__60__619399543158548096012(start11980012380947064971(l_range___0), l_pos___1) ? __6013544777056381821656(l_pos___1, end10640653859827471309(l_range___0)) : false)
// new file:///home/andy/keen/app/model/uri.keen 125:1
const new1598529195903074568 = l_to___0 =>
	new (uri10474195645524913655)(l_to___0)
// hash file:///home/andy/keen/app/model/uri.keen 125:1
const hash6431576184767856638 = (l_a___0, l_b___1) => {
	hash17452654822403524995(l_a___0.to, l_b___1)
}
// == file:///home/andy/keen/app/model/uri.keen 125:1
const __61__613700936344027211856 = (l_a___0, l_b___1) =>
	__61__611154543819848657072(l_a___0.to, l_b___1.to)
// to file:///home/andy/keen/app/model/uri.keen 125:12
const to16835387106342905730 = l_a___0 =>
	l_a___0.to
// to file:///home/andy/keen/app/model/uri.keen 144:1
const to16242417281509899286 = l_a___0 =>
	to6946154876139669136(to16835387106342905730(l_a___0))
// to file:///home/andy/keen/app/model/uri.keen 146:1
const to13624445991056119878 = l_a___0 =>
	new1598529195903074568(to8213088765813293489(l_a___0))
// parse-uri file:///home/andy/keen/app/model/uri.keen 228:1
const parse__45uri14353403042008216422 = l_a___1 => {
	let l_schema___5, l_start___4
	const l_chars___0 = to5062813879059210936(l_a___1)
	const l_temp___2 = index__45of6695115875000308109(l_chars___0, 58)
	const l_colon___3 = l_temp___2
	if (((typeof l_temp___2) === "bigint")) {
		return ((l_start___4 = (((__6010307380702345989795(l_colon___3, __459429596346129747750(BigInt(l_chars___0.length), 2n)) ? Object.is(subscript13188540832821584219(l_chars___0, __431000895641751717785(l_colon___3, 1n)), 47) : false) ? Object.is(subscript13188540832821584219(l_chars___0, __431000895641751717785(l_colon___3, 2n)), 47) : false) ? __431000895641751717785(l_colon___3, 3n) : __431000895641751717785(l_colon___3, 1n))) , ((l_schema___5 = to6073813863926623175(subscript2978548572343441637(l_chars___0, __46__467720007973451370645(0n, l_start___4)))) , (((__61__618774367296004624587(l_schema___5, c____488()) ? __62__618892781134906463570(BigInt(l_chars___0.length), __431000895641751717785(l_start___4, 5n)) : false) ? __61__6118007221448236302723(to1694745619930020520(subscript2978548572343441637(l_chars___0, __46__467720007973451370645(l_start___4, __431000895641751717785(l_start___4, 5n)))), c____184()) : false) ? new1598529195903074568(to9088973396303820521(lower__45case1392267883188381289(l_a___1))) : new1598529195903074568(to9088973396303820521(l_a___1)))))
	} else {
		throw parse__45error1656537427315988372(l_a___1, 0n, c____481())
	}
}
// << file:///home/andy/keen/lib/bits.keen 91:1
const __60__6011894400612917666281 = (l_a___1, l_b___0) =>
	(__6012245267698233631771(l_b___0, 8) ? ((l_a___1 << l_b___0) & 255) : 0)
// << file:///home/andy/keen/lib/bits.keen 97:1
const __60__605844911385871066220 = (l_a___1, l_b___0) =>
	(__606561095768024586357(l_b___0, 32) ? ((l_a___1 << l_b___0) >>> 0) : 0)
// << file:///home/andy/keen/lib/bits.keen 100:1
const __60__6010136694790643423161 = (l_a___1, l_b___0) =>
	(__6010307380702345989795(l_b___0, 64n) ? BigInt.asUintN(64, (l_a___1 << l_b___0)) : 0n)
// >> file:///home/andy/keen/lib/bits.keen 119:1
const __62__6213312477514063446846 = (l_a___1, l_b___0) =>
	(__606561095768024586357(l_b___0, 32) ? ((l_a___1 >>> l_b___0) >>> 0) : 0)
// bits-intersect file:///home/andy/keen/lib/bits.keen 131:1
const bits__45intersect9735454670106304890 = (l_a___0, l_b___1) =>
	__33__6110088886279708845662(((l_a___0 & l_b___1) >>> 0), 0)
// has-all-bits file:///home/andy/keen/lib/bits.keen 137:1
const has__45all__45bits746299444323791598 = (l_a___0, l_b___1) =>
	Object.is((l_a___0 & l_b___1), l_b___1)
// bits-cat file:///home/andy/keen/lib/bits.keen 206:1
const bits__45cat9134299186829090269 = (l_a___0, l_b___1) =>
	(__60__6010136694790643423161(BigInt.asUintN(64, BigInt(l_a___0)), 32n) | BigInt.asUintN(64, BigInt(l_b___1)))
// low-n-bits file:///home/andy/keen/lib/bits.keen 224:1
const low__45n__45bits15912832071311386153 = l_n___0 => {
	if (__60__616269385802849585881(l_n___0, 64n)) {
		return (Object.is(l_n___0, 64n) ? 18446744073709551615n : BigInt.asUintN(64, (BigInt.asUintN(64, (1n << l_n___0)) - 1n)))
	} else {
		throw arithmetic__45error16942717281569864426(c____388(), new (number17074854190323093712)(0, l_n___0))
	}
}
// round-up-to-power-of-two file:///home/andy/keen/lib/bits.keen 244:1
const round__45up__45to__45power__45of__45two6348294377224655184 = l_a___1 => {
	let l_x___0 = BigInt.asUintN(64, (l_a___1 - 1n))
	l_x___0 = (l_x___0 | BigInt.asUintN(64, (l_x___0 >> 1n)))
	l_x___0 = (l_x___0 | BigInt.asUintN(64, (l_x___0 >> 2n)))
	l_x___0 = (l_x___0 | BigInt.asUintN(64, (l_x___0 >> 4n)))
	l_x___0 = (l_x___0 | BigInt.asUintN(64, (l_x___0 >> 8n)))
	l_x___0 = (l_x___0 | BigInt.asUintN(64, (l_x___0 >> 16n)))
	l_x___0 = (l_x___0 | BigInt.asUintN(64, (l_x___0 >> 32n)))
	l_x___0 = BigInt.asUintN(64, (l_x___0 + 1n))
	if (Object.is(l_x___0, 0n)) {
		if (Object.is(l_a___1, 0n)) {
			(void 0)
		} else {
			throw arithmetic__45error16942717281569864426(c____351(), new (number17074854190323093712)(0, l_a___1))
		}
		return 1n
	} else {
		return l_x___0
	}
}
// to-array-view@(char8 array) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view17409083739705985980 = l_a___0 =>
	array__45view10395534566007739405(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@((symbol, json) tuple2) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view15600247917562469558 = l_a___0 =>
	array__45view4760858545430602020(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@(write) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view3845560436016299047 = l_a___0 =>
	array__45view14867542618575731105(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view5635519402630394728 = l_a___0 =>
	array__45view1762096714659694319(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@((symbol, string) tuple2) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view14079080899297940875 = l_a___0 =>
	array__45view15540065174232533334(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@(json) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view17680616894627027943 = l_a___0 =>
	array__45view12988669135028027548(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@(nat64) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view5518144486035143873 = l_a___0 =>
	array__45view10608440467701165294(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@(char8) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view10480319256574783196 = l_a___0 =>
	array__45view8762532083386392749(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@(js-any) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view12862255755891182376 = l_a___0 =>
	array__45view15702253897469667760(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@((string, void) tuple2 option) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view9097025251500090385 = l_a___0 =>
	array__45view7536421171533743614(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view3978663113078537975 = l_a___0 =>
	array__45view6436616925539883628(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@(container) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view14772177813672237831 = l_a___0 =>
	array__45view1609775702364768082(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view3670710065647878964 = l_a___0 =>
	array__45view7382918850406636581(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@(lsp-diagnostic) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view15209162742262809799 = l_a___0 =>
	array__45view11703407279588233212(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view9794092465065815485 = l_a___0 =>
	array__45view548205828792028474(l_a___0, 0n, BigInt(l_a___0.length))
// to-array-view@(symbol) file:///home/andy/keen/lib/col/array.keen 20:1
const to__45array__45view2017459252276364375 = l_a___0 =>
	array__45view2186238327565642828(l_a___0, 0n, BigInt(l_a___0.length))
// subscript@(symbol) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript5211016159918201165 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(nat32) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript18367237088670138931 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(json) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript6296670998813432154 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(nat64) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript13750466444187217361 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((symbol, json) node) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript7341098650577123260 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(lsp-diagnostic) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript12048779277294055666 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((json, json) tuple2) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript12926550078258174299 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((symbol, string) node) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript5486913831024974850 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) node) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript8754165954382740689 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript14544511950344716377 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(char8 array) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript13355245170471554981 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript16681309832497912394 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(char8) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript13188540832821584219 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(char8 array array-view) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript6679875168136680377 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(js-any array-view) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript6134984895959391832 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(to-kid-result) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript6289751800055532814 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript2651044573057141976 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(js-any) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript9322066793325914931 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(string) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript9327272106425501274 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(char8 array-view) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript14124663872103004250 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(language) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript10479804247450744555 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/array.keen 29:1
const subscript13928125321971497704 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(json) file:///home/andy/keen/lib/col/array.keen 39:1
const subscript8697605701975486371 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, size7379232933016869549(l_a___1))) {
		return subscript6296670998813432154(inner6681968607105233481(l_a___1), __431000895641751717785(low1130076515557150166(l_a___1), l_index___0))
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size7379232933016869549(l_a___1))
	}
}
// subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/array.keen 39:1
const subscript2008825528521929111 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, size6427707796724790572(l_a___1))) {
		return subscript16681309832497912394(inner11426169652213451877(l_a___1), __431000895641751717785(low15956577804495702210(l_a___1), l_index___0))
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size6427707796724790572(l_a___1))
	}
}
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/array.keen 39:1
const subscript4094799913261040478 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, size15015691447912114022(l_a___1))) {
		return subscript2651044573057141976(inner2869414503756537401(l_a___1), __431000895641751717785(low3946178672028260102(l_a___1), l_index___0))
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size15015691447912114022(l_a___1))
	}
}
// subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/array.keen 39:1
const subscript11989252377175373575 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, size10721725010120609664(l_a___1))) {
		return subscript13928125321971497704(inner9705949447374275723(l_a___1), __431000895641751717785(low5833781831263273328(l_a___1), l_index___0))
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size10721725010120609664(l_a___1))
	}
}
// subscript@(char8) file:///home/andy/keen/lib/col/array.keen 39:1
const subscript2889502930794356245 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, size4088222861950865375(l_a___1))) {
		return subscript13188540832821584219(inner11946998456022976079(l_a___1), __431000895641751717785(low13243092189785230564(l_a___1), l_index___0))
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size4088222861950865375(l_a___1))
	}
}
// subscript@(symbol) file:///home/andy/keen/lib/col/array.keen 39:1
const subscript14187249216236425598 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, size1976810991608200656(l_a___1))) {
		return subscript5211016159918201165(inner16640552788994453305(l_a___1), __431000895641751717785(low10217099313870001158(l_a___1), l_index___0))
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size1976810991608200656(l_a___1))
	}
}
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/array.keen 43:1
const subscript13998309180526795699 = (l_a___0, l_indices___1) =>
	subscript10360121647892212761(to__45array__45view5635519402630394728(l_a___0), l_indices___1)
// subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/array.keen 43:1
const subscript7444904594231619233 = (l_a___0, l_indices___1) =>
	subscript2312824591634726071(to__45array__45view14079080899297940875(l_a___0), l_indices___1)
// subscript@(char8 array) file:///home/andy/keen/lib/col/array.keen 43:1
const subscript8367728196970591354 = (l_a___0, l_indices___1) =>
	subscript8054241353445439818(to__45array__45view17409083739705985980(l_a___0), l_indices___1)
// subscript@(char8) file:///home/andy/keen/lib/col/array.keen 43:1
const subscript2978548572343441637 = (l_a___0, l_indices___1) =>
	subscript12630222102445222043(to__45array__45view10480319256574783196(l_a___0), l_indices___1)
// subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/array.keen 43:1
const subscript8776442670321154853 = (l_a___0, l_indices___1) =>
	subscript2946746943340336347(to__45array__45view15600247917562469558(l_a___0), l_indices___1)
// subscript@(lsp-diagnostic) file:///home/andy/keen/lib/col/array.keen 43:1
const subscript512725627697464331 = (l_a___0, l_indices___1) =>
	subscript10203160002714485662(to__45array__45view15209162742262809799(l_a___0), l_indices___1)
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/array.keen 45:1
const subscript10360121647892212761 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size15015691447912114022(l_a___1))) {
		return array__45view1762096714659694319(inner2869414503756537401(l_a___1), __431000895641751717785(low3946178672028260102(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low3946178672028260102(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size15015691447912114022(l_a___1))
	}
}
// subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/array.keen 45:1
const subscript2946746943340336347 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size10721725010120609664(l_a___1))) {
		return array__45view4760858545430602020(inner9705949447374275723(l_a___1), __431000895641751717785(low5833781831263273328(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low5833781831263273328(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size10721725010120609664(l_a___1))
	}
}
// subscript@(char8) file:///home/andy/keen/lib/col/array.keen 45:1
const subscript12630222102445222043 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size4088222861950865375(l_a___1))) {
		return array__45view8762532083386392749(inner11946998456022976079(l_a___1), __431000895641751717785(low13243092189785230564(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low13243092189785230564(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size4088222861950865375(l_a___1))
	}
}
// subscript@(char8 array) file:///home/andy/keen/lib/col/array.keen 45:1
const subscript8054241353445439818 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size1846468246877964291(l_a___1))) {
		return array__45view10395534566007739405(inner1816149123879175188(l_a___1), __431000895641751717785(low4364951268334377023(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low4364951268334377023(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size1846468246877964291(l_a___1))
	}
}
// subscript@(lsp-diagnostic) file:///home/andy/keen/lib/col/array.keen 45:1
const subscript10203160002714485662 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size17728914844118520653(l_a___1))) {
		return array__45view11703407279588233212(inner10775026925193598858(l_a___1), __431000895641751717785(low10737707123401464131(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low10737707123401464131(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size17728914844118520653(l_a___1))
	}
}
// subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/array.keen 45:1
const subscript2312824591634726071 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size6427707796724790572(l_a___1))) {
		return array__45view15540065174232533334(inner11426169652213451877(l_a___1), __431000895641751717785(low15956577804495702210(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low15956577804495702210(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size6427707796724790572(l_a___1))
	}
}
// subscript@(char8 array) file:///home/andy/keen/lib/col/array.keen 49:1
const subscript13482146875570517172 = (l_a___0, l_index___1) =>
	subscript13355245170471554981(l_a___0, to__45index7821201294792252162(l_a___0, l_index___1))
// subscript@(char8) file:///home/andy/keen/lib/col/array.keen 54:1
const subscript3553782324217798084 = (l_a___0, l_indices___1) =>
	subscript11072292840522954613(to__45array__45view10480319256574783196(l_a___0), l_indices___1)
// subscript@(char8 array) file:///home/andy/keen/lib/col/array.keen 54:1
const subscript3942162637580708528 = (l_a___0, l_indices___1) =>
	subscript17228190776617600903(to__45array__45view17409083739705985980(l_a___0), l_indices___1)
// subscript@(char8) file:///home/andy/keen/lib/col/array.keen 56:1
const subscript11072292840522954613 = (l_a___0, l_indices___1) =>
	subscript12630222102445222043(l_a___0, to__45range14770365445325474450(l_a___0, l_indices___1))
// subscript@(char8 array) file:///home/andy/keen/lib/col/array.keen 56:1
const subscript17228190776617600903 = (l_a___0, l_indices___1) =>
	subscript8054241353445439818(l_a___0, to__45range304264817012696456(l_a___0, l_indices___1))
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/array.keen 56:1
const subscript2965052065971379757 = (l_a___0, l_indices___1) =>
	subscript10360121647892212761(l_a___0, to__45range16540565430851835694(l_a___0, l_indices___1))
// subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/array.keen 56:1
const subscript3861112582004398918 = (l_a___0, l_indices___1) =>
	subscript2946746943340336347(l_a___0, to__45range12996506484922729807(l_a___0, l_indices___1))
// subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/array.keen 56:1
const subscript10265119331026038354 = (l_a___0, l_indices___1) =>
	subscript2312824591634726071(l_a___0, to__45range6165893281196594083(l_a___0, l_indices___1))
// list-new@(js-any) file:///home/andy/keen/lib/col/array.keen 59:1
const list__45new16687999342081306217 = l_a___0 =>
	l_a___0
// list-new@(string) file:///home/andy/keen/lib/col/array.keen 59:1
const list__45new7074563262074605452 = l_a___0 =>
	l_a___0
// list-new@(to-kid-result) file:///home/andy/keen/lib/col/array.keen 59:1
const list__45new9284655307363033122 = l_a___0 =>
	l_a___0
// list-new@(lsp-diagnostic) file:///home/andy/keen/lib/col/array.keen 59:1
const list__45new1469454970023237260 = l_a___0 =>
	l_a___0
// list-new@(json) file:///home/andy/keen/lib/col/array.keen 59:1
const list__45new10311441051806328311 = l_a___0 =>
	l_a___0
// list-new@((symbol, json) tuple2) file:///home/andy/keen/lib/col/array.keen 59:1
const list__45new8473885969665954184 = l_a___0 =>
	l_a___0
// list-new@(char8) file:///home/andy/keen/lib/col/array.keen 59:1
const list__45new14621505958909631849 = l_a___0 =>
	l_a___0
// list-new@(uri) file:///home/andy/keen/lib/col/array.keen 59:1
const list__45new1061224832537393684 = l_a___0 =>
	l_a___0
// list-new@(token) file:///home/andy/keen/lib/col/array.keen 59:1
const list__45new1822560916058830610 = l_a___0 =>
	l_a___0
// list-new@((json, json) tuple2) file:///home/andy/keen/lib/col/array.keen 59:1
const list__45new9416857024007826808 = l_a___0 =>
	l_a___0
// list-new@(char8 array) file:///home/andy/keen/lib/col/array.keen 59:1
const list__45new8008826310704523233 = l_a___0 =>
	l_a___0
// list-new@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/array.keen 59:1
const list__45new11433585782200486390 = l_a___0 =>
	l_a___0
// list-new@((symbol, string) tuple2) file:///home/andy/keen/lib/col/array.keen 59:1
const list__45new10053370444108870060 = l_a___0 =>
	l_a___0
// size@(json) file:///home/andy/keen/lib/col/array.keen 63:1
const size7379232933016869549 = l_a___0 =>
	__459429596346129747750(high103722714395777183(l_a___0), low1130076515557150166(l_a___0))
// size@(js-any) file:///home/andy/keen/lib/col/array.keen 63:1
const size16095144483816130294 = l_a___0 =>
	__459429596346129747750(high18439820822484466364(l_a___0), low1497446415983219335(l_a___0))
// size@(symbol) file:///home/andy/keen/lib/col/array.keen 63:1
const size1976810991608200656 = l_a___0 =>
	__459429596346129747750(high2595102453365030671(l_a___0), low10217099313870001158(l_a___0))
// size@(lsp-diagnostic) file:///home/andy/keen/lib/col/array.keen 63:1
const size17728914844118520653 = l_a___0 =>
	__459429596346129747750(high14663091662523215304(l_a___0), low10737707123401464131(l_a___0))
// size@(char8 array) file:///home/andy/keen/lib/col/array.keen 63:1
const size1846468246877964291 = l_a___0 =>
	__459429596346129747750(high12343989300082986998(l_a___0), low4364951268334377023(l_a___0))
// size@((symbol, json) tuple2) file:///home/andy/keen/lib/col/array.keen 63:1
const size10721725010120609664 = l_a___0 =>
	__459429596346129747750(high449060238231408817(l_a___0), low5833781831263273328(l_a___0))
// size@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/array.keen 63:1
const size15015691447912114022 = l_a___0 =>
	__459429596346129747750(high12197786612656997903(l_a___0), low3946178672028260102(l_a___0))
// size@(char8) file:///home/andy/keen/lib/col/array.keen 63:1
const size4088222861950865375 = l_a___0 =>
	__459429596346129747750(high18345099074896224277(l_a___0), low13243092189785230564(l_a___0))
// size@((symbol, string) tuple2) file:///home/andy/keen/lib/col/array.keen 63:1
const size6427707796724790572 = l_a___0 =>
	__459429596346129747750(high7615525486373111835(l_a___0), low15956577804495702210(l_a___0))
// to@(lsp-diagnostic) file:///home/andy/keen/lib/col/array.keen 74:1
const to664645885465232085 = l_a___0 =>
	(Object.is(size17728914844118520653(l_a___0), BigInt(inner10775026925193598858(l_a___0).length)) ? inner10775026925193598858(l_a___0) : cast__45immutable5745005442141039344(to7800391160993039401(l_a___0)))
// to@(char8) file:///home/andy/keen/lib/col/array.keen 74:1
const to1694745619930020520 = l_a___0 =>
	(Object.is(size4088222861950865375(l_a___0), BigInt(inner11946998456022976079(l_a___0).length)) ? inner11946998456022976079(l_a___0) : cast__45immutable2674649864579937666(to2296013195134151646(l_a___0)))
// is-empty@(json) file:///home/andy/keen/lib/col/array.keen 81:1
const is__45empty12576060890182098883 = l_a___0 =>
	Object.is(BigInt(l_a___0.length), 0n)
// is-empty@(write) file:///home/andy/keen/lib/col/array.keen 81:1
const is__45empty9217915116723924721 = l_a___0 =>
	Object.is(BigInt(l_a___0.length), 0n)
// is-empty@(nat32) file:///home/andy/keen/lib/col/array.keen 81:1
const is__45empty5794801876453127968 = l_a___0 =>
	Object.is(BigInt(l_a___0.length), 0n)
// is-empty@(char8) file:///home/andy/keen/lib/col/array.keen 81:1
const is__45empty5119020319533462417 = l_a___0 =>
	Object.is(BigInt(l_a___0.length), 0n)
// is-empty@(nat64) file:///home/andy/keen/lib/col/array.keen 81:1
const is__45empty8129857972852358725 = l_a___0 =>
	Object.is(BigInt(l_a___0.length), 0n)
// is-empty@(js-any) file:///home/andy/keen/lib/col/array.keen 81:1
const is__45empty127032192138432442 = l_a___0 =>
	Object.is(BigInt(l_a___0.length), 0n)
// is-empty@(symbol) file:///home/andy/keen/lib/col/array.keen 81:1
const is__45empty4685394845175495892 = l_a___0 =>
	Object.is(BigInt(l_a___0.length), 0n)
// is-empty@(char8) file:///home/andy/keen/lib/col/array.keen 83:1
const is__45empty12220344776089445795 = l_a___0 =>
	Object.is(low13243092189785230564(l_a___0), high18345099074896224277(l_a___0))
// concat-array-views@(char8 array) file:///home/andy/keen/lib/col/array.keen 101:1
const concat__45array__45views12064902746653726711 = l_parts___1 => {
	let l_size___0 = 0n
	;(void some12954411136815466512(l_parts___1, l_part___2 => {
			l_size___0 = __431000895641751717785(l_size___0, size1846468246877964291(l_part___2))
			return false
		}))
	const l_res___3 = new (Array)(Number(l_size___0)).fill(null)
	let l_i___4 = 0n
	;(void some12954411136815466512(l_parts___1, l_part___5 => {
			const l_j___6 = __431000895641751717785(l_i___4, size1846468246877964291(l_part___5))
			set__45subscript655132423736442652(l_res___3, __46__467720007973451370645(l_i___4, __431000895641751717785(l_i___4, size1846468246877964291(l_part___5))), l_part___5)
			l_i___4 = l_j___6
			return false
		}))
	if (Object.is(l_i___4, BigInt(l_res___3.length))) {
		return cast__45immutable14706923612487769002(l_res___3)
	} else {
		throw new (error14987278044892349075)(c____434())
	}
}
// concat-array-views@(js-any) file:///home/andy/keen/lib/col/array.keen 101:1
const concat__45array__45views12902995847510985195 = l_parts___1 => {
	let l_size___0 = 0n
	;(void some14772969522700560268(l_parts___1, l_part___2 => {
			l_size___0 = __431000895641751717785(l_size___0, size16095144483816130294(l_part___2))
			return false
		}))
	const l_res___3 = new (Array)(Number(l_size___0)).fill(null)
	let l_i___4 = 0n
	;(void some14772969522700560268(l_parts___1, l_part___5 => {
			const l_j___6 = __431000895641751717785(l_i___4, size16095144483816130294(l_part___5))
			set__45subscript419546580692685588(l_res___3, __46__467720007973451370645(l_i___4, __431000895641751717785(l_i___4, size16095144483816130294(l_part___5))), l_part___5)
			l_i___4 = l_j___6
			return false
		}))
	if (Object.is(l_i___4, BigInt(l_res___3.length))) {
		return cast__45immutable6716579314827176193(l_res___3)
	} else {
		throw new (error14987278044892349075)(c____434())
	}
}
// ~~@(char8) file:///home/andy/keen/lib/col/array.keen 118:1
const __126__12613857300491063851984 = (l_a___0, l_b___1) =>
	(is__45empty5119020319533462417(l_a___0) ? l_b___1 : (is__45empty5119020319533462417(l_b___1) ? l_a___0 : __126__1262934702603376410494(to__45array__45view10480319256574783196(l_a___0), to__45array__45view10480319256574783196(l_b___1))))
// ~~@(char8) file:///home/andy/keen/lib/col/array.keen 125:1
const __126__1262934702603376410494 = (l_a___0, l_b___1) => {
	if (is__45empty12220344776089445795(l_a___0)) {
		return to1694745619930020520(l_b___1)
	} else {
		if (is__45empty12220344776089445795(l_b___1)) {
			return to1694745619930020520(l_a___0)
		} else {
			const l_res___2 = new (Uint8Array)(Number(__431000895641751717785(size4088222861950865375(l_a___0), size4088222861950865375(l_b___1))))
			set__45subscript13684078888055384884(l_res___2, __46__467720007973451370645(0n, size4088222861950865375(l_a___0)), l_a___0)
			set__45subscript13684078888055384884(l_res___2, __46__467720007973451370645(size4088222861950865375(l_a___0), BigInt(l_res___2.length)), l_b___1)
			return cast__45immutable2674649864579937666(l_res___2)
		}
	}
}
// ==@(char8) file:///home/andy/keen/lib/col/array.keen 136:1
const __61__6118007221448236302723 = (l_a___0, l_b___1) =>
	__61__616392919738123306753(to__45array__45view10480319256574783196(l_a___0), to__45array__45view10480319256574783196(l_b___1))
// ==@(json) file:///home/andy/keen/lib/col/array.keen 136:1
const __61__611036285718101168614 = (l_a___0, l_b___1) =>
	__61__619025087476339086631(to__45array__45view17680616894627027943(l_a___0), to__45array__45view17680616894627027943(l_b___1))
// ==@(symbol) file:///home/andy/keen/lib/col/array.keen 136:1
const __61__6118065116955672002101 = (l_a___0, l_b___1) =>
	__61__615132598825104128594(to__45array__45view2017459252276364375(l_a___0), to__45array__45view2017459252276364375(l_b___1))
// ==@(json) file:///home/andy/keen/lib/col/array.keen 139:1
const __61__619025087476339086631 = (l_a___0, l_b___1) => {
	if (((Object.is(inner6681968607105233481(l_a___0), inner6681968607105233481(l_b___1)) ? Object.is(low1130076515557150166(l_a___0), low1130076515557150166(l_b___1)) : false) ? Object.is(high103722714395777183(l_a___0), high103722714395777183(l_b___1)) : false)) {
		return true
	} else {
		if (__33__618396056177400121463(size7379232933016869549(l_a___0), size7379232933016869549(l_b___1))) {
			return false
		} else {
			let l_i___2 = 0n
			while (true){
				const l_temp___3 = (() => {
					if (Object.is(l_i___2, size7379232933016869549(l_a___0))) {
						return true
					} else {
						if (__33__612262779385746097002(subscript8697605701975486371(l_a___0, l_i___2), subscript8697605701975486371(l_b___1, l_i___2))) {
							return false
						} else {
							l_i___2 = __431000895641751717785(l_i___2, 1n)
							return c____558()
						}
					}
				})()
				const x_matched___0 = l_temp___3
				if ((x_matched___0 instanceof none12752313651180151000)) {
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
// ==@(char8) file:///home/andy/keen/lib/col/array.keen 139:1
const __61__616392919738123306753 = (l_a___0, l_b___1) => {
	if (((Object.is(inner11946998456022976079(l_a___0), inner11946998456022976079(l_b___1)) ? Object.is(low13243092189785230564(l_a___0), low13243092189785230564(l_b___1)) : false) ? Object.is(high18345099074896224277(l_a___0), high18345099074896224277(l_b___1)) : false)) {
		return true
	} else {
		if (__33__618396056177400121463(size4088222861950865375(l_a___0), size4088222861950865375(l_b___1))) {
			return false
		} else {
			let l_i___2 = 0n
			while (true){
				const l_temp___3 = (() => {
					if (Object.is(l_i___2, size4088222861950865375(l_a___0))) {
						return true
					} else {
						if (__33__613528396309692303628(subscript2889502930794356245(l_a___0, l_i___2), subscript2889502930794356245(l_b___1, l_i___2))) {
							return false
						} else {
							l_i___2 = __431000895641751717785(l_i___2, 1n)
							return c____558()
						}
					}
				})()
				const x_matched___0 = l_temp___3
				if ((x_matched___0 instanceof none12752313651180151000)) {
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
// ==@(symbol) file:///home/andy/keen/lib/col/array.keen 139:1
const __61__615132598825104128594 = (l_a___0, l_b___1) => {
	if (((Object.is(inner16640552788994453305(l_a___0), inner16640552788994453305(l_b___1)) ? Object.is(low10217099313870001158(l_a___0), low10217099313870001158(l_b___1)) : false) ? Object.is(high2595102453365030671(l_a___0), high2595102453365030671(l_b___1)) : false)) {
		return true
	} else {
		if (__33__618396056177400121463(size1976810991608200656(l_a___0), size1976810991608200656(l_b___1))) {
			return false
		} else {
			let l_i___2 = 0n
			while (true){
				const l_temp___3 = (() => {
					if (Object.is(l_i___2, size1976810991608200656(l_a___0))) {
						return true
					} else {
						if (__33__6117279925434460065169(subscript14187249216236425598(l_a___0, l_i___2), subscript14187249216236425598(l_b___1, l_i___2))) {
							return false
						} else {
							l_i___2 = __431000895641751717785(l_i___2, 1n)
							return c____558()
						}
					}
				})()
				const x_matched___0 = l_temp___3
				if ((x_matched___0 instanceof none12752313651180151000)) {
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
// <=>@(char8) file:///home/andy/keen/lib/col/array.keen 155:1
const __60__61__6217916713383637463827 = (l_a___0, l_b___1) =>
	__60__61__627629410181932050264(to__45array__45view10480319256574783196(l_a___0), to__45array__45view10480319256574783196(l_b___1))
// <=>@(char8) file:///home/andy/keen/lib/col/array.keen 157:1
const __60__61__627629410181932050264 = (l_a___0, l_b___1) => {
	if (Object.is(l_a___0, l_b___1)) {
		return 1
	} else {
		let l_i___2 = 0n
		const l_limit___3 = min5984887149101995087(size4088222861950865375(l_a___0), size4088222861950865375(l_b___1))
		while (true){
			const l_temp___4 = (() => {
				if (Object.is(l_i___2, l_limit___3)) {
					return _compareIntegral(size4088222861950865375(l_a___0), size4088222861950865375(l_b___1))
				} else {
					const l_res___5 = _compareIntegral(subscript2889502930794356245(l_a___0, l_i___2), subscript2889502930794356245(l_b___1, l_i___2))
					const x_matched___0 = l_res___5
					switch (x_matched___0) {
						case 1:{
							l_i___2 = __431000895641751717785(l_i___2, 1n)
							return c____558()
						}
						default:{
							return l_res___5
						}
					}
				}
			})()
			const x_matched___1 = l_temp___4
			if ((x_matched___1 instanceof none12752313651180151000)) {
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
// hash@(char8) file:///home/andy/keen/lib/col/array.keen 205:1
const hash5884828301612844590 = (l_a___0, l_state___1) =>
	hash12694538543419358769(to__45array__45view10480319256574783196(l_a___0), l_state___1)
// hash@(char8) file:///home/andy/keen/lib/col/array.keen 207:1
const hash12694538543419358769 = (l_a___1, l_state___2) => {
	let l_i___0 = 0n
	x_loop___0: while (true){
		if (Object.is(l_i___0, size4088222861950865375(l_a___1))) {
			(void 0)
			break  x_loop___0
		} else {
			hash12940848068242855152(subscript2889502930794356245(l_a___1, l_i___0), l_state___2)
			l_i___0 = __431000895641751717785(l_i___0, 1n)
			continue
		}
	}
}
// some@(char8) file:///home/andy/keen/lib/col/array.keen 214:1
const some15532294202059772837 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript13188540832821584219(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@(js-any array-view) file:///home/andy/keen/lib/col/array.keen 214:1
const some14772969522700560268 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript6134984895959391832(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@((symbol, json) node) file:///home/andy/keen/lib/col/array.keen 214:1
const some7317338605488611940 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript7341098650577123260(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/array.keen 214:1
const some14079183715108909801 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript2651044573057141976(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@((json, json) tuple2) file:///home/andy/keen/lib/col/array.keen 214:1
const some7795452553417415122 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript12926550078258174299(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@(lsp-diagnostic) file:///home/andy/keen/lib/col/array.keen 214:1
const some15946314695741497498 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript12048779277294055666(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@(lsp-diagnostic) file:///home/andy/keen/lib/col/array.keen 214:1
const _async_some15946314695741497498 = async (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (await (async () => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if ((await l_f___3(subscript12048779277294055666(l_a___2, l_i___0)))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})())
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@(to-kid-result) file:///home/andy/keen/lib/col/array.keen 214:1
const some17952449376902373714 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript6289751800055532814(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@(js-any) file:///home/andy/keen/lib/col/array.keen 214:1
const _async_some9998979276228626006 = async (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (await (async () => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if ((await l_f___3(subscript9322066793325914931(l_a___2, l_i___0)))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})())
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@(language) file:///home/andy/keen/lib/col/array.keen 214:1
const some12389303152544213740 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript10479804247450744555(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@((symbol, json) tuple2) file:///home/andy/keen/lib/col/array.keen 214:1
const some12617336626473952259 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript13928125321971497704(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@(char8 array array-view) file:///home/andy/keen/lib/col/array.keen 214:1
const some12954411136815466512 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript6679875168136680377(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@((symbol, string) tuple2) file:///home/andy/keen/lib/col/array.keen 214:1
const some4456382396105079607 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript16681309832497912394(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@((symbol, string) node) file:///home/andy/keen/lib/col/array.keen 214:1
const some10515253929151109667 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript5486913831024974850(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@(json) file:///home/andy/keen/lib/col/array.keen 214:1
const some9306278523113539137 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript6296670998813432154(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) node) file:///home/andy/keen/lib/col/array.keen 214:1
const some8085394312162138150 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript8754165954382740689(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@(symbol) file:///home/andy/keen/lib/col/array.keen 214:1
const some6698690281439332310 = (l_a___2, l_f___3) => {
	let l_i___0 = 0n
	while (true){
		const l_temp___1 = (() => {
			if (Object.is(l_i___0, BigInt(l_a___2.length))) {
				return false
			} else {
				if (l_f___3(subscript5211016159918201165(l_a___2, l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___1
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@(char8 array) file:///home/andy/keen/lib/col/array.keen 224:1
const some13651071537836656079 = (l_a___1, l_f___3) => {
	let l_i___0 = low4364951268334377023(l_a___1)
	while (true){
		const l_temp___2 = (() => {
			if (Object.is(l_i___0, high12343989300082986998(l_a___1))) {
				return false
			} else {
				if (l_f___3(subscript13355245170471554981(inner1816149123879175188(l_a___1), l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@((symbol, json) tuple2) file:///home/andy/keen/lib/col/array.keen 224:1
const some16946768562539215233 = (l_a___1, l_f___3) => {
	let l_i___0 = low5833781831263273328(l_a___1)
	while (true){
		const l_temp___2 = (() => {
			if (Object.is(l_i___0, high449060238231408817(l_a___1))) {
				return false
			} else {
				if (l_f___3(subscript13928125321971497704(inner9705949447374275723(l_a___1), l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/array.keen 224:1
const some15110223799684909316 = (l_a___1, l_f___3) => {
	let l_i___0 = low3946178672028260102(l_a___1)
	while (true){
		const l_temp___2 = (() => {
			if (Object.is(l_i___0, high12197786612656997903(l_a___1))) {
				return false
			} else {
				if (l_f___3(subscript2651044573057141976(inner2869414503756537401(l_a___1), l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// some@((symbol, string) tuple2) file:///home/andy/keen/lib/col/array.keen 224:1
const some829836533376232637 = (l_a___1, l_f___3) => {
	let l_i___0 = low15956577804495702210(l_a___1)
	while (true){
		const l_temp___2 = (() => {
			if (Object.is(l_i___0, high7615525486373111835(l_a___1))) {
				return false
			} else {
				if (l_f___3(subscript16681309832497912394(inner11426169652213451877(l_a___1), l_i___0))) {
					return true
				} else {
					l_i___0 = __431000895641751717785(l_i___0, 1n)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// new@(char8) file:///home/andy/keen/lib/col/array.keen 249:1
const new11228984323991077230 = (l_array___0, l_start___1, l_cur___2, l_end___3) =>
	new (array__45iterator11262599198005585220)(l_array___0, l_start___1, l_cur___2, l_end___3)
// array@(char8) file:///home/andy/keen/lib/col/array.keen 250:5
const array5717261683175586626 = l_a___0 =>
	l_a___0.array
// start@(char8) file:///home/andy/keen/lib/col/array.keen 251:5
const start789302133386029812 = l_a___0 =>
	l_a___0.start
// cur@(char8) file:///home/andy/keen/lib/col/array.keen 252:5
const cur16264311820748833873 = l_a___0 =>
	l_a___0.cur
// set-cur@(char8) file:///home/andy/keen/lib/col/array.keen 252:5
const set__45cur3225358802529743681 = (l_a___0, l_cur___1) => {
	l_a___0.cur = l_cur___1
}
// end@(char8) file:///home/andy/keen/lib/col/array.keen 253:5
const end516545279147290942 = l_a___0 =>
	l_a___0.end
// begin@(char8) file:///home/andy/keen/lib/col/array.keen 254:1
const begin6893840641899948696 = l_a___0 =>
	new11228984323991077230(l_a___0, 0n, 0n, BigInt(l_a___0.length))
// begin@(char8) file:///home/andy/keen/lib/col/array.keen 256:1
const begin12904237301496444362 = l_a___0 =>
	new11228984323991077230(inner11946998456022976079(l_a___0), low13243092189785230564(l_a___0), low13243092189785230564(l_a___0), high18345099074896224277(l_a___0))
// end@(char8) file:///home/andy/keen/lib/col/array.keen 258:1
const end7887716361478169370 = l_a___0 =>
	new11228984323991077230(l_a___0, 0n, BigInt(l_a___0.length), BigInt(l_a___0.length))
// copy@(char8) file:///home/andy/keen/lib/col/array.keen 262:1
const copy10866195281237217353 = l_a___0 =>
	new11228984323991077230(array5717261683175586626(l_a___0), start789302133386029812(l_a___0), cur16264311820748833873(l_a___0), end516545279147290942(l_a___0))
// is-at-end@(char8) file:///home/andy/keen/lib/col/array.keen 266:1
const is__45at__45end18265995694961723280 = l_a___0 =>
	Object.is(cur16264311820748833873(l_a___0), end516545279147290942(l_a___0))
// index@(char8) file:///home/andy/keen/lib/col/array.keen 269:1
const index8524565038565477203 = l_a___0 =>
	__459429596346129747750(cur16264311820748833873(l_a___0), start789302133386029812(l_a___0))
// set-index@(char8) file:///home/andy/keen/lib/col/array.keen 271:1
const set__45index2256938323223038016 = (l_a___0, l_index___1) => {
	if (__60__616269385802849585881(__431000895641751717785(start789302133386029812(l_a___0), l_index___1), end516545279147290942(l_a___0))) {
		set__45cur3225358802529743681(l_a___0, __431000895641751717785(start789302133386029812(l_a___0), l_index___1))
	} else {
		throw new (error14987278044892349075)(c____387())
	}
}
// take-prev@(char8) file:///home/andy/keen/lib/col/array.keen 274:1
const take__45prev5487767419746825104 = l_a___0 => {
	if (__625060923374247189753(cur16264311820748833873(l_a___0), start789302133386029812(l_a___0))) {
		set__45cur3225358802529743681(l_a___0, __459429596346129747750(cur16264311820748833873(l_a___0), 1n))
		return subscript13188540832821584219(array5717261683175586626(l_a___0), cur16264311820748833873(l_a___0))
	} else {
		throw iterator__45out__45of__45bounds10912921435610323677()
	}
}
// peek@(char8) file:///home/andy/keen/lib/col/array.keen 278:1
const peek13606136736990828314 = l_a___0 =>
	(__6010307380702345989795(cur16264311820748833873(l_a___0), end516545279147290942(l_a___0)) ? subscript13188540832821584219(array5717261683175586626(l_a___0), cur16264311820748833873(l_a___0)) : c____558())
// peek-by@(char8) file:///home/andy/keen/lib/col/array.keen 282:1
const peek__45by9004676165229744763 = (l_a___1, l_relative__45index___2) => {
	let l_index___0
	return ((l_index___0 = __431000895641751717785(cur16264311820748833873(l_a___1), l_relative__45index___2)) , (__6010307380702345989795(l_index___0, end516545279147290942(l_a___1)) ? subscript13188540832821584219(array5717261683175586626(l_a___1), l_index___0) : c____558()))
}
// take-next@(char8) file:///home/andy/keen/lib/col/array.keen 289:1
const take__45next3000444236349839320 = l_a___0 => {
	if (__6010307380702345989795(cur16264311820748833873(l_a___0), end516545279147290942(l_a___0))) {
		const l_res___1 = subscript13188540832821584219(array5717261683175586626(l_a___0), cur16264311820748833873(l_a___0))
		set__45cur3225358802529743681(l_a___0, __431000895641751717785(cur16264311820748833873(l_a___0), 1n))
		return l_res___1
	} else {
		throw iterator__45out__45of__45bounds10912921435610323677()
	}
}
// take-next-n@(char8) file:///home/andy/keen/lib/col/array.keen 294:1
const take__45next__45n13276995637913821271 = (l_a___0, l_n___1) => {
	if (__60__616269385802849585881(__431000895641751717785(cur16264311820748833873(l_a___0), l_n___1), end516545279147290942(l_a___0))) {
		const l_res___2 = subscript2978548572343441637(array5717261683175586626(l_a___0), __46__467720007973451370645(cur16264311820748833873(l_a___0), __431000895641751717785(cur16264311820748833873(l_a___0), l_n___1)))
		set__45cur3225358802529743681(l_a___0, __431000895641751717785(cur16264311820748833873(l_a___0), l_n___1))
		return l_res___2
	} else {
		throw iterator__45out__45of__45bounds10912921435610323677()
	}
}
// take-prev-n@(char8) file:///home/andy/keen/lib/col/array.keen 299:1
const take__45prev__45n147074171912767261 = (l_a___0, l_n___1) => {
	if (__60__616269385802849585881(__431000895641751717785(start789302133386029812(l_a___0), l_n___1), cur16264311820748833873(l_a___0))) {
		const l_end___2 = cur16264311820748833873(l_a___0)
		set__45cur3225358802529743681(l_a___0, __459429596346129747750(cur16264311820748833873(l_a___0), l_n___1))
		return subscript2978548572343441637(array5717261683175586626(l_a___0), __46__467720007973451370645(cur16264311820748833873(l_a___0), l_end___2))
	} else {
		throw iterator__45out__45of__45bounds10912921435610323677()
	}
}
// skip-next-n@(char8) file:///home/andy/keen/lib/col/array.keen 304:1
const skip__45next__45n11663049513603354438 = (l_a___0, l_n___1) => {
	(void take__45next__45n13276995637913821271(l_a___0, l_n___1))
	;(void 0)
}
// skip-prev-n@(char8) file:///home/andy/keen/lib/col/array.keen 306:1
const skip__45prev__45n8721873208264622161 = (l_a___0, l_n___1) => {
	(void take__45prev__45n147074171912767261(l_a___0, l_n___1))
	;(void 0)
}
// slice@(char8) file:///home/andy/keen/lib/col/array.keen 308:1
const slice4867597206389270175 = (l_begin___0, l_end___1) => {
	if ((Object.is(start789302133386029812(l_begin___0), start789302133386029812(l_end___1)) ? Object.is(end516545279147290942(l_begin___0), end516545279147290942(l_end___1)) : false)) {
		return subscript2978548572343441637(array5717261683175586626(l_begin___0), __46__467720007973451370645(cur16264311820748833873(l_begin___0), cur16264311820748833873(l_end___1)))
	} else {
		throw new (error14987278044892349075)(c____386())
	}
}
// to-buffer-view@((string, void) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view11227020157927426476 = l_a___0 =>
	buffer__45view15282193117543572088(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@(json) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view18089566257153568157 = l_a___0 =>
	buffer__45view662411626235235663(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@(string) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view14183311606036790756 = l_a___0 =>
	buffer__45view5688304380324953365(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@(js-any) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view10967676748533592346 = l_a___0 =>
	buffer__45view3951271158359476115(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view8989867521854904723 = l_a___0 =>
	buffer__45view1207187923694840792(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view13544126161332235095 = l_a___0 =>
	buffer__45view2511404793212045132(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@(symbol) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view10868543494054774156 = l_a___0 =>
	buffer__45view10920161132596428565(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@(nat64) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view55256984083150298 = l_a___0 =>
	buffer__45view5204514869414665555(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@(char8) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view16780464223254375052 = l_a___0 =>
	buffer__45view6022500876807843485(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@(write) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view1003629660688808899 = l_a___0 =>
	buffer__45view2546651914804592200(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view13759332254730271816 = l_a___0 =>
	buffer__45view4967463795748849364(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@(char8 array-view) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view2338981656231415129 = l_a___0 =>
	buffer__45view9520788285311582118(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@(char8 array) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view3416838137598657396 = l_a___0 =>
	buffer__45view13525549721684109157(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view6956030532788575339 = l_a___0 =>
	buffer__45view6930081592514700071(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@(lsp-diagnostic) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view2117360665233279685 = l_a___0 =>
	buffer__45view11931444935479713698(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view9046591802122357834 = l_a___0 =>
	buffer__45view13893814197239730934(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view11177168223290667454 = l_a___0 =>
	buffer__45view771959112192360551(l_a___0, 0n, BigInt(l_a___0.length))
// to-buffer-view@(container) file:///home/andy/keen/lib/col/buffer.keen 21:1
const to__45buffer__45view10311927552878621111 = l_a___0 =>
	buffer__45view12141521395337135660(l_a___0, 0n, BigInt(l_a___0.length))
// list-new@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 24:1
const list__45new15226650622981551957 = l_a___0 =>
	to15301643402489192992(l_a___0)
// list-new@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 24:1
const list__45new3579009712696609999 = l_a___0 =>
	to11199130658418388066(l_a___0)
// list-new@((string, void) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 24:1
const list__45new12960721793473520169 = l_a___0 =>
	to11892167900927373316(l_a___0)
// list-new@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 24:1
const list__45new9565452593385576082 = l_a___0 =>
	to7165352246455314883(l_a___0)
// list-new@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 24:1
const list__45new7232889064777701164 = l_a___0 =>
	to16047387101658701219(l_a___0)
// list-new@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 24:1
const list__45new12024070235391471045 = l_a___0 =>
	to3969097178928902132(l_a___0)
// list-new@(nat64) file:///home/andy/keen/lib/col/buffer.keen 24:1
const list__45new8524199218665778372 = l_a___0 =>
	to10354469968097383028(l_a___0)
// list-new@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 24:1
const list__45new10970483815663742999 = l_a___0 =>
	to1903475899312950820(l_a___0)
// list-new@(write) file:///home/andy/keen/lib/col/buffer.keen 24:1
const list__45new11528379970044086209 = l_a___0 =>
	to8812442469789706448(l_a___0)
// list-new@(js-any) file:///home/andy/keen/lib/col/buffer.keen 24:1
const list__45new9812965031301167447 = l_a___0 =>
	to7433555355977436427(l_a___0)
// cast-immutable@(char8 array-view) file:///home/andy/keen/lib/col/buffer.keen 30:1
const cast__45immutable15186541162591041511 = l_a___0 =>
	array__45view3044084328022043804(cast__45immutable18148872116493618412(inner12074162200244706116(l_a___0)), low16498539521284589301(l_a___0), high8993901700075881490(l_a___0))
// cast-immutable@(js-any) file:///home/andy/keen/lib/col/buffer.keen 30:1
const cast__45immutable13248124441511867851 = l_a___0 =>
	array__45view15702253897469667760(cast__45immutable6716579314827176193(inner11311711689064119033(l_a___0)), low8261516025681847494(l_a___0), high6714142873301233871(l_a___0))
// cast-immutable@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 30:1
const cast__45immutable14146498481380489217 = l_a___0 =>
	array__45view1762096714659694319(cast__45immutable10765307802391043216(inner2942920701126672218(l_a___0)), low11868775384877238483(l_a___0), high7744690758808713752(l_a___0))
// cast-immutable@(string) file:///home/andy/keen/lib/col/buffer.keen 30:1
const cast__45immutable16723438655129703821 = l_a___0 =>
	array__45view9896856644206820554(cast__45immutable11101463694283278588(inner14761671961931696203(l_a___0)), low14785700805310212656(l_a___0), high8648863549547805297(l_a___0))
// cast-immutable@(char8) file:///home/andy/keen/lib/col/buffer.keen 30:1
const cast__45immutable12176215869936872342 = l_a___0 =>
	array__45view8762532083386392749(cast__45immutable2674649864579937666(inner5201505297485464851(l_a___0)), low9256670159745536344(l_a___0), high14012147141240943737(l_a___0))
// cast-immutable@(container) file:///home/andy/keen/lib/col/buffer.keen 30:1
const cast__45immutable12749191890386558773 = l_a___0 =>
	array__45view1609775702364768082(cast__45immutable2197764547243915115(inner4627218152067619130(l_a___0)), low10821665102065694003(l_a___0), high9118536482457872120(l_a___0))
// cast-immutable@(write) file:///home/andy/keen/lib/col/buffer.keen 30:1
const cast__45immutable1329896377109242912 = l_a___0 =>
	array__45view14867542618575731105(cast__45immutable13827858657026735903(inner17868120078453151414(l_a___0)), low14251902709343045631(l_a___0), high1403451048970070228(l_a___0))
// cast-immutable@(json) file:///home/andy/keen/lib/col/buffer.keen 30:1
const cast__45immutable10825291543475950816 = l_a___0 =>
	array__45view12988669135028027548(cast__45immutable652598698568391768(inner9480835402066902240(l_a___0)), low15618294005981172577(l_a___0), high17056179631405189877(l_a___0))
// cast-immutable@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 30:1
const cast__45immutable16098872521838808009 = l_a___0 =>
	array__45view15540065174232533334(cast__45immutable8320426461937191125(inner8716165494631018768(l_a___0)), low1429300861419982801(l_a___0), high11839530622809001503(l_a___0))
// cast-immutable@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 30:1
const cast__45immutable2172095232474796943 = l_a___0 =>
	array__45view4760858545430602020(cast__45immutable4956731320325544819(inner16774520990887944686(l_a___0)), low17001325983603132631(l_a___0), high3561719128747716437(l_a___0))
// to@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 33:1
const to12811730040321087757 = l_a___0 =>
	cast__45immutable8320426461937191125(to14025308537631244525(l_a___0))
// to@(json) file:///home/andy/keen/lib/col/buffer.keen 33:1
const to17633910069442925949 = l_a___0 =>
	cast__45immutable652598698568391768(to18294623435239524858(l_a___0))
// to@(string) file:///home/andy/keen/lib/col/buffer.keen 33:1
const to13968889051495777208 = l_a___0 =>
	cast__45immutable11101463694283278588(to12341795244791410521(l_a___0))
// to@(write) file:///home/andy/keen/lib/col/buffer.keen 33:1
const to9963873249488166197 = l_a___0 =>
	cast__45immutable13827858657026735903(to17304735616210087250(l_a___0))
// to@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 33:1
const to6678503148378598962 = l_a___0 =>
	cast__45immutable10765307802391043216(to8925528701619137739(l_a___0))
// to@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 33:1
const to18056832818132995811 = l_a___0 =>
	cast__45immutable4956731320325544819(to18081981804485082707(l_a___0))
// to@(js-any) file:///home/andy/keen/lib/col/buffer.keen 33:1
const to16397016265239311406 = l_a___0 =>
	cast__45immutable6716579314827176193(to5089474045960078692(l_a___0))
// to@(char8) file:///home/andy/keen/lib/col/buffer.keen 33:1
const to1213724640967123398 = l_a___0 =>
	cast__45immutable2674649864579937666(to16289050270615595471(l_a___0))
// to@(char8 array-view) file:///home/andy/keen/lib/col/buffer.keen 33:1
const to9114977376189503869 = l_a___0 =>
	cast__45immutable18148872116493618412(to8743325145876505899(l_a___0))
// to@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 35:1
const to18081981804485082707 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size1065220973704784668(l_a___1))).fill(null)
	copy__45from9653565883300110744(to__45buffer__45view11177168223290667454(l_res___0), l_a___1)
	return l_res___0
}
// to@(js-any) file:///home/andy/keen/lib/col/buffer.keen 35:1
const to5089474045960078692 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size14830017229778878936(l_a___1))).fill(null)
	copy__45from14790797936951152277(to__45buffer__45view10967676748533592346(l_res___0), l_a___1)
	return l_res___0
}
// to@(string) file:///home/andy/keen/lib/col/buffer.keen 35:1
const to12341795244791410521 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size9641889363299018674(l_a___1))).fill(null)
	copy__45from8711160475086558430(to__45buffer__45view14183311606036790756(l_res___0), l_a___1)
	return l_res___0
}
// to@(write) file:///home/andy/keen/lib/col/buffer.keen 35:1
const to17304735616210087250 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size3865195569347586729(l_a___1))).fill(null)
	copy__45from1289338260578687301(to__45buffer__45view1003629660688808899(l_res___0), l_a___1)
	return l_res___0
}
// to@(char8) file:///home/andy/keen/lib/col/buffer.keen 35:1
const to16289050270615595471 = l_a___1 => {
	const l_res___0 = new (Uint8Array)(Number(size3959147132211238042(l_a___1)))
	copy__45from14503544539163057929(to__45buffer__45view16780464223254375052(l_res___0), l_a___1)
	return l_res___0
}
// to@(char8 array-view) file:///home/andy/keen/lib/col/buffer.keen 35:1
const to8743325145876505899 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size101226376468744751(l_a___1))).fill(null)
	copy__45from2788759625231850896(to__45buffer__45view2338981656231415129(l_res___0), l_a___1)
	return l_res___0
}
// to@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 35:1
const to8925528701619137739 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size18027608494695026523(l_a___1))).fill(null)
	copy__45from6531401867675195392(to__45buffer__45view13544126161332235095(l_res___0), l_a___1)
	return l_res___0
}
// to@(json) file:///home/andy/keen/lib/col/buffer.keen 35:1
const to18294623435239524858 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size16606202018401915952(l_a___1))).fill(null)
	copy__45from15009764371765185467(to__45buffer__45view18089566257153568157(l_res___0), l_a___1)
	return l_res___0
}
// to@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 35:1
const to14025308537631244525 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size10155486268514705094(l_a___1))).fill(null)
	copy__45from282185373415914666(to__45buffer__45view8989867521854904723(l_res___0), l_a___1)
	return l_res___0
}
// size@(char8) file:///home/andy/keen/lib/col/buffer.keen 43:1
const size3959147132211238042 = l_a___0 =>
	__459429596346129747750(high14012147141240943737(l_a___0), low9256670159745536344(l_a___0))
// size@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 43:1
const size10155486268514705094 = l_a___0 =>
	__459429596346129747750(high11839530622809001503(l_a___0), low1429300861419982801(l_a___0))
// size@(char8 array-view) file:///home/andy/keen/lib/col/buffer.keen 43:1
const size101226376468744751 = l_a___0 =>
	__459429596346129747750(high8993901700075881490(l_a___0), low16498539521284589301(l_a___0))
// size@(write) file:///home/andy/keen/lib/col/buffer.keen 43:1
const size3865195569347586729 = l_a___0 =>
	__459429596346129747750(high1403451048970070228(l_a___0), low14251902709343045631(l_a___0))
// size@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 43:1
const size18027608494695026523 = l_a___0 =>
	__459429596346129747750(high7744690758808713752(l_a___0), low11868775384877238483(l_a___0))
// size@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 43:1
const size1065220973704784668 = l_a___0 =>
	__459429596346129747750(high3561719128747716437(l_a___0), low17001325983603132631(l_a___0))
// size@(string) file:///home/andy/keen/lib/col/buffer.keen 43:1
const size9641889363299018674 = l_a___0 =>
	__459429596346129747750(high8648863549547805297(l_a___0), low14785700805310212656(l_a___0))
// size@(char8 array) file:///home/andy/keen/lib/col/buffer.keen 43:1
const size3910726182588336066 = l_a___0 =>
	__459429596346129747750(high3111845369126136257(l_a___0), low3447833770475514048(l_a___0))
// size@(symbol) file:///home/andy/keen/lib/col/buffer.keen 43:1
const size8791553585132395083 = l_a___0 =>
	__459429596346129747750(high15467134755580164114(l_a___0), low16430187390060687223(l_a___0))
// size@(js-any) file:///home/andy/keen/lib/col/buffer.keen 43:1
const size14830017229778878936 = l_a___0 =>
	__459429596346129747750(high6714142873301233871(l_a___0), low8261516025681847494(l_a___0))
// size@(json) file:///home/andy/keen/lib/col/buffer.keen 43:1
const size16606202018401915952 = l_a___0 =>
	__459429596346129747750(high17056179631405189877(l_a___0), low15618294005981172577(l_a___0))
// size@(container) file:///home/andy/keen/lib/col/buffer.keen 43:1
const size17512863540695591357 = l_a___0 =>
	__459429596346129747750(high9118536482457872120(l_a___0), low10821665102065694003(l_a___0))
// subscript@(symbol) file:///home/andy/keen/lib/col/buffer.keen 46:1
const subscript13708057024034888817 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, size8791553585132395083(l_a___1))) {
		return subscript14157769522497367599(inner1925547039433508622(l_a___1), __431000895641751717785(low16430187390060687223(l_a___1), l_index___0))
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size8791553585132395083(l_a___1))
	}
}
// subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 46:1
const subscript5437495731169276617 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, size1065220973704784668(l_a___1))) {
		return subscript12402752052135311052(inner16774520990887944686(l_a___1), __431000895641751717785(low17001325983603132631(l_a___1), l_index___0))
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size1065220973704784668(l_a___1))
	}
}
// subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 46:1
const subscript5939571422085453059 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, size10155486268514705094(l_a___1))) {
		return subscript15393968468724643518(inner8716165494631018768(l_a___1), __431000895641751717785(low1429300861419982801(l_a___1), l_index___0))
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size10155486268514705094(l_a___1))
	}
}
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 46:1
const subscript9864463184586062056 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, size18027608494695026523(l_a___1))) {
		return subscript3082251864539807484(inner2942920701126672218(l_a___1), __431000895641751717785(low11868775384877238483(l_a___1), l_index___0))
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size18027608494695026523(l_a___1))
	}
}
// subscript@(json) file:///home/andy/keen/lib/col/buffer.keen 46:1
const subscript11390493588088933692 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, size16606202018401915952(l_a___1))) {
		return subscript10655256862005726963(inner9480835402066902240(l_a___1), __431000895641751717785(low15618294005981172577(l_a___1), l_index___0))
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size16606202018401915952(l_a___1))
	}
}
// subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 49:1
const subscript4484875829852869879 = (l_a___0, l_index___1) =>
	subscript5939571422085453059(l_a___0, to__45index11614418243670674547(l_a___0, l_index___1))
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 49:1
const subscript14871778437823834469 = (l_a___0, l_index___1) =>
	subscript9864463184586062056(l_a___0, to__45index8965393381753164480(l_a___0, l_index___1))
// subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 49:1
const subscript1795401241318921154 = (l_a___0, l_index___1) =>
	subscript5437495731169276617(l_a___0, to__45index2828757378095408577(l_a___0, l_index___1))
// set-subscript@(json) file:///home/andy/keen/lib/col/buffer.keen 52:1
const set__45subscript8791729112147023757 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, size16606202018401915952(l_a___1))) {
		set__45subscript10257308038564830589(inner9480835402066902240(l_a___1), __431000895641751717785(low15618294005981172577(l_a___1), l_index___0), l_value___2)
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size16606202018401915952(l_a___1))
	}
}
// set-subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 52:1
const set__45subscript9355737573813490262 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, size18027608494695026523(l_a___1))) {
		set__45subscript3459794504644078354(inner2942920701126672218(l_a___1), __431000895641751717785(low11868775384877238483(l_a___1), l_index___0), l_value___2)
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size18027608494695026523(l_a___1))
	}
}
// set-subscript@(symbol) file:///home/andy/keen/lib/col/buffer.keen 52:1
const set__45subscript6317975469413682910 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, size8791553585132395083(l_a___1))) {
		set__45subscript921798028483318105(inner1925547039433508622(l_a___1), __431000895641751717785(low16430187390060687223(l_a___1), l_index___0), l_value___2)
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size8791553585132395083(l_a___1))
	}
}
// set-subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 52:1
const set__45subscript3285112504153836831 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, size1065220973704784668(l_a___1))) {
		set__45subscript8199566139078030845(inner16774520990887944686(l_a___1), __431000895641751717785(low17001325983603132631(l_a___1), l_index___0), l_value___2)
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size1065220973704784668(l_a___1))
	}
}
// set-subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 52:1
const set__45subscript7966972918960996598 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, size10155486268514705094(l_a___1))) {
		set__45subscript18141869102783312143(inner8716165494631018768(l_a___1), __431000895641751717785(low1429300861419982801(l_a___1), l_index___0), l_value___2)
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size10155486268514705094(l_a___1))
	}
}
// subscript@(write) file:///home/andy/keen/lib/col/buffer.keen 58:1
const subscript4979193087136831612 = (l_a___0, l_indices___1) =>
	subscript5649528559852753930(to__45buffer__45view1003629660688808899(l_a___0), l_indices___1)
// subscript@(char8 array-view) file:///home/andy/keen/lib/col/buffer.keen 58:1
const subscript15132309034164185843 = (l_a___0, l_indices___1) =>
	subscript10093616169430964664(to__45buffer__45view2338981656231415129(l_a___0), l_indices___1)
// subscript@(char8) file:///home/andy/keen/lib/col/buffer.keen 58:1
const subscript9604316733717454766 = (l_a___0, l_indices___1) =>
	subscript2938872339214263191(to__45buffer__45view16780464223254375052(l_a___0), l_indices___1)
// subscript@(json) file:///home/andy/keen/lib/col/buffer.keen 58:1
const subscript12724038510294748933 = (l_a___0, l_indices___1) =>
	subscript17710222348974050409(to__45buffer__45view18089566257153568157(l_a___0), l_indices___1)
// subscript@(string) file:///home/andy/keen/lib/col/buffer.keen 58:1
const subscript1133646315536580985 = (l_a___0, l_indices___1) =>
	subscript5528053468175113039(to__45buffer__45view14183311606036790756(l_a___0), l_indices___1)
// subscript@(js-any) file:///home/andy/keen/lib/col/buffer.keen 58:1
const subscript15575604829903262476 = (l_a___0, l_indices___1) =>
	subscript5244954475450879261(to__45buffer__45view10967676748533592346(l_a___0), l_indices___1)
// subscript@(container) file:///home/andy/keen/lib/col/buffer.keen 58:1
const subscript923745599977249697 = (l_a___0, l_indices___1) =>
	subscript3020222170836957774(to__45buffer__45view10311927552878621111(l_a___0), l_indices___1)
// subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 58:1
const subscript13544033556275940791 = (l_a___0, l_indices___1) =>
	subscript13782411389313120237(to__45buffer__45view11177168223290667454(l_a___0), l_indices___1)
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 58:1
const subscript4715983855980805812 = (l_a___0, l_indices___1) =>
	subscript11060608013061223682(to__45buffer__45view13544126161332235095(l_a___0), l_indices___1)
// subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 58:1
const subscript17597295987698015917 = (l_a___0, l_indices___1) =>
	subscript17475044905854214863(to__45buffer__45view8989867521854904723(l_a___0), l_indices___1)
// subscript@(char8 array) file:///home/andy/keen/lib/col/buffer.keen 58:1
const subscript11931905626136877142 = (l_a___0, l_indices___1) =>
	subscript11614023042517070111(to__45buffer__45view3416838137598657396(l_a___0), l_indices___1)
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 62:1
const subscript11060608013061223682 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size18027608494695026523(l_a___1))) {
		return buffer__45view2511404793212045132(inner2942920701126672218(l_a___1), __431000895641751717785(low11868775384877238483(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low11868775384877238483(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size18027608494695026523(l_a___1))
	}
}
// subscript@(write) file:///home/andy/keen/lib/col/buffer.keen 62:1
const subscript5649528559852753930 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size3865195569347586729(l_a___1))) {
		return buffer__45view2546651914804592200(inner17868120078453151414(l_a___1), __431000895641751717785(low14251902709343045631(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low14251902709343045631(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size3865195569347586729(l_a___1))
	}
}
// subscript@(container) file:///home/andy/keen/lib/col/buffer.keen 62:1
const subscript3020222170836957774 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size17512863540695591357(l_a___1))) {
		return buffer__45view12141521395337135660(inner4627218152067619130(l_a___1), __431000895641751717785(low10821665102065694003(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low10821665102065694003(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size17512863540695591357(l_a___1))
	}
}
// subscript@(char8 array) file:///home/andy/keen/lib/col/buffer.keen 62:1
const subscript11614023042517070111 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size3910726182588336066(l_a___1))) {
		return buffer__45view13525549721684109157(inner4468533650675391259(l_a___1), __431000895641751717785(low3447833770475514048(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low3447833770475514048(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size3910726182588336066(l_a___1))
	}
}
// subscript@(string) file:///home/andy/keen/lib/col/buffer.keen 62:1
const subscript5528053468175113039 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size9641889363299018674(l_a___1))) {
		return buffer__45view5688304380324953365(inner14761671961931696203(l_a___1), __431000895641751717785(low14785700805310212656(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low14785700805310212656(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size9641889363299018674(l_a___1))
	}
}
// subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 62:1
const subscript17475044905854214863 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size10155486268514705094(l_a___1))) {
		return buffer__45view1207187923694840792(inner8716165494631018768(l_a___1), __431000895641751717785(low1429300861419982801(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low1429300861419982801(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size10155486268514705094(l_a___1))
	}
}
// subscript@(json) file:///home/andy/keen/lib/col/buffer.keen 62:1
const subscript17710222348974050409 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size16606202018401915952(l_a___1))) {
		return buffer__45view662411626235235663(inner9480835402066902240(l_a___1), __431000895641751717785(low15618294005981172577(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low15618294005981172577(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size16606202018401915952(l_a___1))
	}
}
// subscript@(char8 array-view) file:///home/andy/keen/lib/col/buffer.keen 62:1
const subscript10093616169430964664 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size101226376468744751(l_a___1))) {
		return buffer__45view9520788285311582118(inner12074162200244706116(l_a___1), __431000895641751717785(low16498539521284589301(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low16498539521284589301(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size101226376468744751(l_a___1))
	}
}
// subscript@(js-any) file:///home/andy/keen/lib/col/buffer.keen 62:1
const subscript5244954475450879261 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size14830017229778878936(l_a___1))) {
		return buffer__45view3951271158359476115(inner11311711689064119033(l_a___1), __431000895641751717785(low8261516025681847494(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low8261516025681847494(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size14830017229778878936(l_a___1))
	}
}
// subscript@(symbol) file:///home/andy/keen/lib/col/buffer.keen 62:1
const subscript13344082051213131528 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size8791553585132395083(l_a___1))) {
		return buffer__45view10920161132596428565(inner1925547039433508622(l_a___1), __431000895641751717785(low16430187390060687223(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low16430187390060687223(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size8791553585132395083(l_a___1))
	}
}
// subscript@(char8) file:///home/andy/keen/lib/col/buffer.keen 62:1
const subscript2938872339214263191 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size3959147132211238042(l_a___1))) {
		return buffer__45view6022500876807843485(inner5201505297485464851(l_a___1), __431000895641751717785(low9256670159745536344(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low9256670159745536344(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size3959147132211238042(l_a___1))
	}
}
// subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 62:1
const subscript13782411389313120237 = (l_a___1, l_indices___0) => {
	if (__60__616269385802849585881(high10874758830701415314(l_indices___0), size1065220973704784668(l_a___1))) {
		return buffer__45view771959112192360551(inner16774520990887944686(l_a___1), __431000895641751717785(low17001325983603132631(l_a___1), low7409345081503915125(l_indices___0)), __431000895641751717785(low17001325983603132631(l_a___1), high10874758830701415314(l_indices___0)))
	} else {
		throw index__45too__45big17082524477655533791(high10874758830701415314(l_indices___0), size1065220973704784668(l_a___1))
	}
}
// subscript@(symbol) file:///home/andy/keen/lib/col/buffer.keen 65:1
const subscript11775682188563613046 = (l_a___0, l_indices___1) =>
	subscript13344082051213131528(l_a___0, to__45range14325715860776732386(l_a___0, l_indices___1))
// subscript@(json) file:///home/andy/keen/lib/col/buffer.keen 65:1
const subscript16955560921830064063 = (l_a___0, l_indices___1) =>
	subscript17710222348974050409(l_a___0, to__45range7305901180267509140(l_a___0, l_indices___1))
// subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 65:1
const subscript1455897807079253930 = (l_a___0, l_indices___1) =>
	subscript13782411389313120237(l_a___0, to__45range11537637848762666957(l_a___0, l_indices___1))
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 65:1
const subscript14927627326419387619 = (l_a___0, l_indices___1) =>
	subscript11060608013061223682(l_a___0, to__45range12877292752922315713(l_a___0, l_indices___1))
// subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 65:1
const subscript11441518693042407371 = (l_a___0, l_indices___1) =>
	subscript17475044905854214863(l_a___0, to__45range17382549170678239194(l_a___0, l_indices___1))
// to@((string, void) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 81:1
const to11892167900927373316 = l_a___0 =>
	(Object.is(BigInt(l_a___0.length), 0n) ? cast__45mutable11406156094773651154(l_a___0) : to11533711611907522795(to__45array__45view9097025251500090385(l_a___0)))
// to@(nat64) file:///home/andy/keen/lib/col/buffer.keen 81:1
const to10354469968097383028 = l_a___0 =>
	(Object.is(BigInt(l_a___0.length), 0n) ? cast__45mutable9382481476833488578(l_a___0) : to4770497868538967579(to__45array__45view5518144486035143873(l_a___0)))
// to@(write) file:///home/andy/keen/lib/col/buffer.keen 81:1
const to8812442469789706448 = l_a___0 =>
	(Object.is(BigInt(l_a___0.length), 0n) ? cast__45mutable18330318903252212881(l_a___0) : to9232242185846174846(to__45array__45view3845560436016299047(l_a___0)))
// to@(js-any) file:///home/andy/keen/lib/col/buffer.keen 81:1
const to7433555355977436427 = l_a___0 =>
	(Object.is(BigInt(l_a___0.length), 0n) ? cast__45mutable12648595030937665520(l_a___0) : to7166828361302510897(to__45array__45view12862255755891182376(l_a___0)))
// to@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 81:1
const to3969097178928902132 = l_a___0 =>
	(Object.is(BigInt(l_a___0.length), 0n) ? cast__45mutable10531655026416994370(l_a___0) : to8736064847099720091(to__45array__45view5635519402630394728(l_a___0)))
// to@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 81:1
const to15301643402489192992 = l_a___0 =>
	(Object.is(BigInt(l_a___0.length), 0n) ? cast__45mutable1526943374422535758(l_a___0) : to3641040565874529719(to__45array__45view9794092465065815485(l_a___0)))
// to@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 81:1
const to1903475899312950820 = l_a___0 =>
	(Object.is(BigInt(l_a___0.length), 0n) ? cast__45mutable13279455110518020181(l_a___0) : to3739313268926935538(to__45array__45view14079080899297940875(l_a___0)))
// to@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 81:1
const to7165352246455314883 = l_a___0 =>
	(Object.is(BigInt(l_a___0.length), 0n) ? cast__45mutable3926607821527979080(l_a___0) : to8814196775767591081(to__45array__45view15600247917562469558(l_a___0)))
// to@(container) file:///home/andy/keen/lib/col/buffer.keen 81:1
const to2145181676725057099 = l_a___0 =>
	(Object.is(BigInt(l_a___0.length), 0n) ? cast__45mutable8735614264465168497(l_a___0) : to13621360687745948382(to__45array__45view14772177813672237831(l_a___0)))
// to@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 81:1
const to16047387101658701219 = l_a___0 =>
	(Object.is(BigInt(l_a___0.length), 0n) ? cast__45mutable13398278821909880713(l_a___0) : to9705894257899880982(to__45array__45view3670710065647878964(l_a___0)))
// to@(json) file:///home/andy/keen/lib/col/buffer.keen 81:1
const to18025172407507859328 = l_a___0 =>
	(Object.is(BigInt(l_a___0.length), 0n) ? cast__45mutable5686687897169605008(l_a___0) : to3359110514461091409(to__45array__45view17680616894627027943(l_a___0)))
// to@(symbol) file:///home/andy/keen/lib/col/buffer.keen 81:1
const to3541038080517056642 = l_a___0 =>
	(Object.is(BigInt(l_a___0.length), 0n) ? cast__45mutable6054293154118496832(l_a___0) : to9064858757224944961(to__45array__45view2017459252276364375(l_a___0)))
// to@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 81:1
const to11199130658418388066 = l_a___0 =>
	(Object.is(BigInt(l_a___0.length), 0n) ? cast__45mutable5295443553945575008(l_a___0) : to478520094957156065(to__45array__45view3978663113078537975(l_a___0)))
// to@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to9705894257899880982 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size17337870902235946459(l_a___1))).fill(null)
	copy__45from5989365095266755712(to__45buffer__45view6956030532788575339(l_res___0), l_a___1)
	return l_res___0
}
// to@((string, void) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to11533711611907522795 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size5983597492535433564(l_a___1))).fill(null)
	copy__45from983159166288468269(to__45buffer__45view11227020157927426476(l_res___0), l_a___1)
	return l_res___0
}
// to@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to8814196775767591081 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size17097222766767494655(l_a___1))).fill(null)
	copy__45from4608283705564204985(to__45buffer__45view11177168223290667454(l_res___0), l_a___1)
	return l_res___0
}
// to@(lsp-diagnostic) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to7800391160993039401 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size3497829227189195318(l_a___1))).fill(null)
	copy__45from13816632607142591871(to__45buffer__45view2117360665233279685(l_res___0), l_a___1)
	return l_res___0
}
// to@(js-any) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to7166828361302510897 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size10229572614846029982(l_a___1))).fill(null)
	copy__45from4892180954386414386(to__45buffer__45view10967676748533592346(l_res___0), l_a___1)
	return l_res___0
}
// to@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to3739313268926935538 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size8599847328996572784(l_a___1))).fill(null)
	copy__45from132766811275460579(to__45buffer__45view8989867521854904723(l_res___0), l_a___1)
	return l_res___0
}
// to@(char8) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to2296013195134151646 = l_a___1 => {
	const l_res___0 = new (Uint8Array)(Number(size9302942522686527495(l_a___1)))
	copy__45from11048095324691516544(to__45buffer__45view16780464223254375052(l_res___0), l_a___1)
	return l_res___0
}
// to@(container) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to13621360687745948382 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size6937764251621341500(l_a___1))).fill(null)
	copy__45from6391952914021076710(to__45buffer__45view10311927552878621111(l_res___0), l_a___1)
	return l_res___0
}
// to@(symbol) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to9064858757224944961 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size14245599111927819354(l_a___1))).fill(null)
	copy__45from4782803971257610707(to__45buffer__45view10868543494054774156(l_res___0), l_a___1)
	return l_res___0
}
// to@(json) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to3359110514461091409 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size18332832041732176170(l_a___1))).fill(null)
	copy__45from18196712068300350051(to__45buffer__45view18089566257153568157(l_res___0), l_a___1)
	return l_res___0
}
// to@(write) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to9232242185846174846 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size443825253306657756(l_a___1))).fill(null)
	copy__45from15301150307191647266(to__45buffer__45view1003629660688808899(l_res___0), l_a___1)
	return l_res___0
}
// to@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to478520094957156065 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size8515533719584950138(l_a___1))).fill(null)
	copy__45from7180251414402340467(to__45buffer__45view9046591802122357834(l_res___0), l_a___1)
	return l_res___0
}
// to@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to8736064847099720091 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size10420960236265823552(l_a___1))).fill(null)
	copy__45from4163854781737804865(to__45buffer__45view13544126161332235095(l_res___0), l_a___1)
	return l_res___0
}
// to@(nat64) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to4770497868538967579 = l_a___1 => {
	const l_res___0 = new (BigUint64Array)(Number(size4325507109570328535(l_a___1)))
	copy__45from9141351865027393996(to__45buffer__45view55256984083150298(l_res___0), l_a___1)
	return l_res___0
}
// to@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 87:1
const to3641040565874529719 = l_a___1 => {
	const l_res___0 = new (Array)(Number(size12480933949686561528(l_a___1))).fill(null)
	copy__45from18036373029733885337(to__45buffer__45view13759332254730271816(l_res___0), l_a___1)
	return l_res___0
}
// is-empty@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 104:1
const is__45empty422007899288351504 = l_a___0 =>
	Object.is(BigInt(l_a___0.length), 0n)
// is-empty@((string, void) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 104:1
const is__45empty13462983688160375810 = l_a___0 =>
	Object.is(BigInt(l_a___0.length), 0n)
// is-empty@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 104:1
const is__45empty15692532838056652516 = l_a___0 =>
	Object.is(BigInt(l_a___0.length), 0n)
// is-empty@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 104:1
const is__45empty5258263102325580414 = l_a___0 =>
	Object.is(BigInt(l_a___0.length), 0n)
// subscript@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript17769568730049911319 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(container) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript10101980326416264607 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript3082251864539807484 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((string, void) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript11318573161502620209 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(symbol) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript14157769522497367599 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(json) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript10655256862005726963 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(symbol weak-ref) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript3661040528037494651 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(js-any) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript6773229619361593043 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript9454272730545132376 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript2575787253453640476 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript15393968468724643518 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript12402752052135311052 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(write) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript8343901716697289946 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// subscript@(nat64) file:///home/andy/keen/lib/col/buffer.keen 112:1
const subscript8061027114076276496 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		return l_a___1[l_index___0]
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(symbol) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript921798028483318105 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(container) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript17582272160129566442 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@((string, void) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript617963672125780248 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(symbol weak-ref) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript12791206262159549902 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript14149303107754187177 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(lsp-diagnostic) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript11603534311013315236 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(json) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript10257308038564830589 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(nat64) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript11252697668255268030 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(token) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript3981904068051310634 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript3971504643566504457 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(string) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript7104771549754922142 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript5696097553867002406 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(to-kid-result) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript16272556305403441295 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript18141869102783312143 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(write) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript1604259959832778482 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(js-any) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript2753674786437724068 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(char8 array-view) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript9315069588955649691 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(char8) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript15235425381790505473 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript3459794504644078354 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@((json, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript6771076378827149079 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 124:1
const set__45subscript8199566139078030845 = (l_a___1, l_index___0, l_value___2) => {
	if (__6010307380702345989795(l_index___0, BigInt(l_a___1.length))) {
		l_a___1[l_index___0] = l_value___2
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, BigInt(l_a___1.length))
	}
}
// set-subscript@(char8) file:///home/andy/keen/lib/col/buffer.keen 135:1
const set__45subscript6324136427967088108 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from11048095324691516544(subscript9604316733717454766(l_dest___0, l_range___1), to__45array__45view10480319256574783196(l_source___2))
// set-subscript@(js-any) file:///home/andy/keen/lib/col/buffer.keen 137:1
const set__45subscript419546580692685588 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from4892180954386414386(subscript15575604829903262476(l_dest___0, l_range___1), l_source___2)
// set-subscript@(char8) file:///home/andy/keen/lib/col/buffer.keen 137:1
const set__45subscript13684078888055384884 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from11048095324691516544(subscript9604316733717454766(l_dest___0, l_range___1), l_source___2)
// set-subscript@(char8 array) file:///home/andy/keen/lib/col/buffer.keen 137:1
const set__45subscript655132423736442652 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from6111829727388618472(subscript11931905626136877142(l_dest___0, l_range___1), l_source___2)
// set-subscript@(write) file:///home/andy/keen/lib/col/buffer.keen 141:1
const set__45subscript14860236310332733470 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from1289338260578687301(subscript4979193087136831612(l_dest___0, l_range___1), l_source___2)
// set-subscript@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 141:1
const set__45subscript3540254546207344206 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from9653565883300110744(subscript13544033556275940791(l_dest___0, l_range___1), l_source___2)
// set-subscript@(json) file:///home/andy/keen/lib/col/buffer.keen 141:1
const set__45subscript8810507403269082516 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from15009764371765185467(subscript12724038510294748933(l_dest___0, l_range___1), l_source___2)
// set-subscript@(js-any) file:///home/andy/keen/lib/col/buffer.keen 141:1
const set__45subscript13024379930591495813 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from14790797936951152277(subscript15575604829903262476(l_dest___0, l_range___1), l_source___2)
// set-subscript@(char8 array-view) file:///home/andy/keen/lib/col/buffer.keen 141:1
const set__45subscript12101196968109907520 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from2788759625231850896(subscript15132309034164185843(l_dest___0, l_range___1), l_source___2)
// set-subscript@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 141:1
const set__45subscript9205509705108398431 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from6531401867675195392(subscript4715983855980805812(l_dest___0, l_range___1), l_source___2)
// set-subscript@(container) file:///home/andy/keen/lib/col/buffer.keen 141:1
const set__45subscript3038677120867693051 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from2107155380643176857(subscript923745599977249697(l_dest___0, l_range___1), l_source___2)
// set-subscript@(string) file:///home/andy/keen/lib/col/buffer.keen 141:1
const set__45subscript12907419351611509267 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from8711160475086558430(subscript1133646315536580985(l_dest___0, l_range___1), l_source___2)
// set-subscript@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 141:1
const set__45subscript169241441085826268 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from282185373415914666(subscript17597295987698015917(l_dest___0, l_range___1), l_source___2)
// set-subscript@(char8) file:///home/andy/keen/lib/col/buffer.keen 141:1
const set__45subscript16434415026781237539 = (l_dest___0, l_range___1, l_source___2) =>
	copy__45from14503544539163057929(subscript9604316733717454766(l_dest___0, l_range___1), l_source___2)
// copy-from@(json) file:///home/andy/keen/lib/col/buffer.keen 171:1
const copy__45from15009764371765185467 = (l_dest___0, l_source___1) =>
	copy__45from18196712068300350051(l_dest___0, cast__45immutable10825291543475950816(l_source___1))
// copy-from@(char8 array-view) file:///home/andy/keen/lib/col/buffer.keen 171:1
const copy__45from2788759625231850896 = (l_dest___0, l_source___1) =>
	copy__45from14296991104750051921(l_dest___0, cast__45immutable15186541162591041511(l_source___1))
// copy-from@(write) file:///home/andy/keen/lib/col/buffer.keen 171:1
const copy__45from1289338260578687301 = (l_dest___0, l_source___1) =>
	copy__45from15301150307191647266(l_dest___0, cast__45immutable1329896377109242912(l_source___1))
// copy-from@(js-any) file:///home/andy/keen/lib/col/buffer.keen 171:1
const copy__45from14790797936951152277 = (l_dest___0, l_source___1) =>
	copy__45from4892180954386414386(l_dest___0, cast__45immutable13248124441511867851(l_source___1))
// copy-from@(string) file:///home/andy/keen/lib/col/buffer.keen 171:1
const copy__45from8711160475086558430 = (l_dest___0, l_source___1) =>
	copy__45from12110225998522666247(l_dest___0, cast__45immutable16723438655129703821(l_source___1))
// copy-from@(container) file:///home/andy/keen/lib/col/buffer.keen 171:1
const copy__45from2107155380643176857 = (l_dest___0, l_source___1) =>
	copy__45from6391952914021076710(l_dest___0, cast__45immutable12749191890386558773(l_source___1))
// copy-from@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 171:1
const copy__45from9653565883300110744 = (l_dest___0, l_source___1) =>
	copy__45from4608283705564204985(l_dest___0, cast__45immutable2172095232474796943(l_source___1))
// copy-from@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 171:1
const copy__45from6531401867675195392 = (l_dest___0, l_source___1) =>
	copy__45from4163854781737804865(l_dest___0, cast__45immutable14146498481380489217(l_source___1))
// copy-from@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 171:1
const copy__45from282185373415914666 = (l_dest___0, l_source___1) =>
	copy__45from132766811275460579(l_dest___0, cast__45immutable16098872521838808009(l_source___1))
// copy-from@(char8) file:///home/andy/keen/lib/col/buffer.keen 171:1
const copy__45from14503544539163057929 = (l_dest___0, l_source___1) =>
	copy__45from11048095324691516544(l_dest___0, cast__45immutable12176215869936872342(l_source___1))
// copy-from@(json) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from18196712068300350051 = (l_dest___0, l_source___1) =>
	copy__45from8395681037865396328(inner9480835402066902240(l_dest___0), __46__467720007973451370645(low15618294005981172577(l_dest___0), high17056179631405189877(l_dest___0)), inner6681968607105233481(l_source___1), __46__467720007973451370645(low1130076515557150166(l_source___1), high103722714395777183(l_source___1)))
// copy-from@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from7180251414402340467 = (l_dest___0, l_source___1) =>
	copy__45from13073673444866293560(inner17087429285913051113(l_dest___0), __46__467720007973451370645(low13889029968547358396(l_dest___0), high9315802989057580803(l_dest___0)), inner12937935715526321369(l_source___1), __46__467720007973451370645(low10445493155090407718(l_source___1), high18329008213481336239(l_source___1)))
// copy-from@(char8 array-view) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from14296991104750051921 = (l_dest___0, l_source___1) =>
	copy__45from12804819942148832109(inner12074162200244706116(l_dest___0), __46__467720007973451370645(low16498539521284589301(l_dest___0), high8993901700075881490(l_dest___0)), inner2173340428848842026(l_source___1), __46__467720007973451370645(low17118361414048644707(l_source___1), high1530739970243515496(l_source___1)))
// copy-from@(char8) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from11048095324691516544 = (l_dest___0, l_source___1) =>
	copy__45from10336497809325228102(inner5201505297485464851(l_dest___0), __46__467720007973451370645(low9256670159745536344(l_dest___0), high14012147141240943737(l_dest___0)), inner11946998456022976079(l_source___1), __46__467720007973451370645(low13243092189785230564(l_source___1), high18345099074896224277(l_source___1)))
// copy-from@(write) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from15301150307191647266 = (l_dest___0, l_source___1) =>
	copy__45from385693605550538830(inner17868120078453151414(l_dest___0), __46__467720007973451370645(low14251902709343045631(l_dest___0), high1403451048970070228(l_dest___0)), inner10381292896226672567(l_source___1), __46__467720007973451370645(low12832322251908267052(l_source___1), high5171915085260613565(l_source___1)))
// copy-from@((string, void) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from983159166288468269 = (l_dest___0, l_source___1) =>
	copy__45from6233464693665677290(inner2597800509632892595(l_dest___0), __46__467720007973451370645(low16377466782512132558(l_dest___0), high5773381196889982781(l_dest___0)), inner16815717186589282851(l_source___1), __46__467720007973451370645(low5021399424278220072(l_source___1), high16749301630502987785(l_source___1)))
// copy-from@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from132766811275460579 = (l_dest___0, l_source___1) =>
	copy__45from2232760108811000948(inner8716165494631018768(l_dest___0), __46__467720007973451370645(low1429300861419982801(l_dest___0), high11839530622809001503(l_dest___0)), inner11426169652213451877(l_source___1), __46__467720007973451370645(low15956577804495702210(l_source___1), high7615525486373111835(l_source___1)))
// copy-from@(symbol) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from4782803971257610707 = (l_dest___0, l_source___1) =>
	copy__45from14419854263296880408(inner1925547039433508622(l_dest___0), __46__467720007973451370645(low16430187390060687223(l_dest___0), high15467134755580164114(l_dest___0)), inner16640552788994453305(l_source___1), __46__467720007973451370645(low10217099313870001158(l_source___1), high2595102453365030671(l_source___1)))
// copy-from@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from5989365095266755712 = (l_dest___0, l_source___1) =>
	copy__45from12086169493454940801(inner3080103843219855230(l_dest___0), __46__467720007973451370645(low7781441003158338613(l_dest___0), high3792731834499617744(l_dest___0)), inner9514086865350473646(l_source___1), __46__467720007973451370645(low6205240433782659991(l_source___1), high1706005646674707084(l_source___1)))
// copy-from@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from4163854781737804865 = (l_dest___0, l_source___1) =>
	copy__45from16904116326763723869(inner2942920701126672218(l_dest___0), __46__467720007973451370645(low11868775384877238483(l_dest___0), high7744690758808713752(l_dest___0)), inner2869414503756537401(l_source___1), __46__467720007973451370645(low3946178672028260102(l_source___1), high12197786612656997903(l_source___1)))
// copy-from@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from18036373029733885337 = (l_dest___0, l_source___1) =>
	copy__45from12239494136373887718(inner4658032288833314303(l_dest___0), __46__467720007973451370645(low15245588275609903626(l_dest___0), high902431604328222889(l_dest___0)), inner17074270359373634671(l_source___1), __46__467720007973451370645(low17362901395779375236(l_source___1), high629833701662106421(l_source___1)))
// copy-from@(nat64) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from9141351865027393996 = (l_dest___0, l_source___1) =>
	copy__45from10348950776366716056(inner15915376308281493177(l_dest___0), __46__467720007973451370645(low9981003736235128198(l_dest___0), high16890420672510616207(l_dest___0)), inner8454337527897113636(l_source___1), __46__467720007973451370645(low3533937260951459413(l_source___1), high9302913667711850482(l_source___1)))
// copy-from@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from4608283705564204985 = (l_dest___0, l_source___1) =>
	copy__45from9294591848698543346(inner16774520990887944686(l_dest___0), __46__467720007973451370645(low17001325983603132631(l_dest___0), high3561719128747716437(l_dest___0)), inner9705949447374275723(l_source___1), __46__467720007973451370645(low5833781831263273328(l_source___1), high449060238231408817(l_source___1)))
// copy-from@(js-any) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from4892180954386414386 = (l_dest___0, l_source___1) =>
	copy__45from13742110007969817585(inner11311711689064119033(l_dest___0), __46__467720007973451370645(low8261516025681847494(l_dest___0), high6714142873301233871(l_dest___0)), inner15449032482414092382(l_source___1), __46__467720007973451370645(low1497446415983219335(l_source___1), high18439820822484466364(l_source___1)))
// copy-from@(container) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from6391952914021076710 = (l_dest___0, l_source___1) =>
	copy__45from2512543834925678225(inner4627218152067619130(l_dest___0), __46__467720007973451370645(low10821665102065694003(l_dest___0), high9118536482457872120(l_dest___0)), inner12412804879894670974(l_source___1), __46__467720007973451370645(low17189750349762194983(l_source___1), high13103898408104113628(l_source___1)))
// copy-from@(lsp-diagnostic) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from13816632607142591871 = (l_dest___0, l_source___1) =>
	copy__45from9629171579289437088(inner15728292011917476641(l_dest___0), __46__467720007973451370645(low15522617842246446030(l_dest___0), high17241577090204902711(l_dest___0)), inner10775026925193598858(l_source___1), __46__467720007973451370645(low10737707123401464131(l_source___1), high14663091662523215304(l_source___1)))
// copy-from@(char8 array) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from6111829727388618472 = (l_dest___0, l_source___1) =>
	copy__45from15141699301989946862(inner4468533650675391259(l_dest___0), __46__467720007973451370645(low3447833770475514048(l_dest___0), high3111845369126136257(l_dest___0)), inner1816149123879175188(l_source___1), __46__467720007973451370645(low4364951268334377023(l_source___1), high12343989300082986998(l_source___1)))
// copy-from@(string) file:///home/andy/keen/lib/col/buffer.keen 173:1
const copy__45from12110225998522666247 = (l_dest___0, l_source___1) =>
	copy__45from7057510032090670467(inner14761671961931696203(l_dest___0), __46__467720007973451370645(low14785700805310212656(l_dest___0), high8648863549547805297(l_dest___0)), inner6468625081219323144(l_source___1), __46__467720007973451370645(low11019153336510917225(l_source___1), high5597066221257067382(l_source___1)))
// copy-from@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from9294591848698543346 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@(js-any) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from13742110007969817585 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@(lsp-diagnostic) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from9629171579289437088 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@(container) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from2512543834925678225 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@((string, void) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from6233464693665677290 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from2232760108811000948 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@(char8 array) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from15141699301989946862 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from12086169493454940801 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@(char8 array-view) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from12804819942148832109 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from16904116326763723869 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@(char8) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from10336497809325228102 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@(json) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from8395681037865396328 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@(nat64) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from10348950776366716056 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@(symbol) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from14419854263296880408 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@(string) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from7057510032090670467 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from12239494136373887718 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from13073673444866293560 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// copy-from@(write) file:///home/andy/keen/lib/col/buffer.keen 175:1
const copy__45from385693605550538830 = (l_dest___3, l_dest__45range___1, l_src___4, l_src__45range___2) => {
	const l_size___0 = size10776324995955828462(l_dest__45range___1)
	if (Object.is(size10776324995955828462(l_src__45range___2), l_size___0)) {
		if (__60__616269385802849585881(high10874758830701415314(l_dest__45range___1), BigInt(l_dest___3.length))) {
			if (__60__616269385802849585881(high10874758830701415314(l_src__45range___2), BigInt(l_src___4.length))) {
				const l_dl___5 = low7409345081503915125(l_dest__45range___1)
				const l_sl___6 = low7409345081503915125(l_src__45range___2)
				let l_i___7 = 0n
				x_loop___0: while (true){
					if (Object.is(l_i___7, l_size___0)) {
						(void 0)
						break  x_loop___0
					} else {
						l_dest___3[__431000895641751717785(l_dl___5, l_i___7)] = l_src___4[__431000895641751717785(l_sl___6, l_i___7)]
						l_i___7 = __431000895641751717785(l_i___7, 1n)
						continue
					}
				}
			} else {
				throw new (error14987278044892349075)(c____330())
			}
		} else {
			throw new (error14987278044892349075)(c____331())
		}
	} else {
		throw new (error14987278044892349075)(c____332())
	}
}
// swap@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 193:1
const swap14951315430081133582 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript2575787253453640476(l_a___1, l_i___2)
	set__45subscript5696097553867002406(l_a___1, l_i___2, subscript2575787253453640476(l_a___1, l_j___3))
	set__45subscript5696097553867002406(l_a___1, l_j___3, l_temp___0)
}
// map=@(nat64) file:///home/andy/keen/lib/col/buffer.keen 199:1
const map__6113872312201773602509 = (l_a___1, l_f___2) => {
	let l_i___0 = 0n
	x_loop___0: while (true){
		if (Object.is(l_i___0, BigInt(l_a___1.length))) {
			(void 0)
			break  x_loop___0
		} else {
			set__45subscript11252697668255268030(l_a___1, l_i___0, l_f___2(subscript8061027114076276496(l_a___1, l_i___0)))
			l_i___0 = __431000895641751717785(l_i___0, 1n)
			continue
		}
	}
}
// cast-immutable@(json) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable652598698568391768 = l_a___0 =>
	l_a___0
// cast-immutable@(to-kid-result) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable15443004882236380245 = l_a___0 =>
	l_a___0
// cast-immutable@(symbol) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable8065540784903085075 = l_a___0 =>
	l_a___0
// cast-immutable@(char8 array-view) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable18148872116493618412 = l_a___0 =>
	l_a___0
// cast-immutable@((string, void) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable286593472270857830 = l_a___0 =>
	l_a___0
// cast-immutable@(token) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable18363312447423733608 = l_a___0 =>
	l_a___0
// cast-immutable@(char8 array) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable14706923612487769002 = l_a___0 =>
	l_a___0
// cast-immutable@(string) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable11101463694283278588 = l_a___0 =>
	l_a___0
// cast-immutable@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable3103504821178580756 = l_a___0 =>
	l_a___0
// cast-immutable@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable13910353320725199394 = l_a___0 =>
	l_a___0
// cast-immutable@(nat64) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable6738434174005710678 = l_a___0 =>
	l_a___0
// cast-immutable@(write) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable13827858657026735903 = l_a___0 =>
	l_a___0
// cast-immutable@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable4097567730802464941 = l_a___0 =>
	l_a___0
// cast-immutable@(char8) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable2674649864579937666 = l_a___0 =>
	l_a___0
// cast-immutable@(container) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable2197764547243915115 = l_a___0 =>
	l_a___0
// cast-immutable@(lsp-diagnostic) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable5745005442141039344 = l_a___0 =>
	l_a___0
// cast-immutable@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable8320426461937191125 = l_a___0 =>
	l_a___0
// cast-immutable@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable10765307802391043216 = l_a___0 =>
	l_a___0
// cast-immutable@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable4956731320325544819 = l_a___0 =>
	l_a___0
// cast-immutable@(js-any) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable6716579314827176193 = l_a___0 =>
	l_a___0
// cast-immutable@((json, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 222:1
const cast__45immutable10678559018630022685 = l_a___0 =>
	l_a___0
// cast-mutable@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 226:1
const cast__45mutable5295443553945575008 = l_a___0 =>
	l_a___0
// cast-mutable@(write) file:///home/andy/keen/lib/col/buffer.keen 226:1
const cast__45mutable18330318903252212881 = l_a___0 =>
	l_a___0
// cast-mutable@(json) file:///home/andy/keen/lib/col/buffer.keen 226:1
const cast__45mutable5686687897169605008 = l_a___0 =>
	l_a___0
// cast-mutable@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 226:1
const cast__45mutable1526943374422535758 = l_a___0 =>
	l_a___0
// cast-mutable@(js-any) file:///home/andy/keen/lib/col/buffer.keen 226:1
const cast__45mutable12648595030937665520 = l_a___0 =>
	l_a___0
// cast-mutable@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 226:1
const cast__45mutable13398278821909880713 = l_a___0 =>
	l_a___0
// cast-mutable@((string, void) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 226:1
const cast__45mutable11406156094773651154 = l_a___0 =>
	l_a___0
// cast-mutable@(symbol) file:///home/andy/keen/lib/col/buffer.keen 226:1
const cast__45mutable6054293154118496832 = l_a___0 =>
	l_a___0
// cast-mutable@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 226:1
const cast__45mutable10531655026416994370 = l_a___0 =>
	l_a___0
// cast-mutable@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 226:1
const cast__45mutable13279455110518020181 = l_a___0 =>
	l_a___0
// cast-mutable@(container) file:///home/andy/keen/lib/col/buffer.keen 226:1
const cast__45mutable8735614264465168497 = l_a___0 =>
	l_a___0
// cast-mutable@(nat64) file:///home/andy/keen/lib/col/buffer.keen 226:1
const cast__45mutable9382481476833488578 = l_a___0 =>
	l_a___0
// cast-mutable@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 226:1
const cast__45mutable3926607821527979080 = l_a___0 =>
	l_a___0
// size@((symbol, json) tuple2) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size17097222766767494655 = l_a___0 =>
	__459429596346129747750(high449060238231408817(l_a___0), low5833781831263273328(l_a___0))
// size@(nat64) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size4325507109570328535 = l_a___0 =>
	__459429596346129747750(high9302913667711850482(l_a___0), low3533937260951459413(l_a___0))
// size@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size12480933949686561528 = l_a___0 =>
	__459429596346129747750(high629833701662106421(l_a___0), low17362901395779375236(l_a___0))
// size@(json) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size18332832041732176170 = l_a___0 =>
	__459429596346129747750(high103722714395777183(l_a___0), low1130076515557150166(l_a___0))
// size@(char8) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size9302942522686527495 = l_a___0 =>
	__459429596346129747750(high18345099074896224277(l_a___0), low13243092189785230564(l_a___0))
// size@(lsp-diagnostic) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size3497829227189195318 = l_a___0 =>
	__459429596346129747750(high14663091662523215304(l_a___0), low10737707123401464131(l_a___0))
// size@(symbol) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size14245599111927819354 = l_a___0 =>
	__459429596346129747750(high2595102453365030671(l_a___0), low10217099313870001158(l_a___0))
// size@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size10420960236265823552 = l_a___0 =>
	__459429596346129747750(high12197786612656997903(l_a___0), low3946178672028260102(l_a___0))
// size@(js-any) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size10229572614846029982 = l_a___0 =>
	__459429596346129747750(high18439820822484466364(l_a___0), low1497446415983219335(l_a___0))
// size@(write) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size443825253306657756 = l_a___0 =>
	__459429596346129747750(high5171915085260613565(l_a___0), low12832322251908267052(l_a___0))
// size@((string, void) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size5983597492535433564 = l_a___0 =>
	__459429596346129747750(high16749301630502987785(l_a___0), low5021399424278220072(l_a___0))
// size@(container) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size6937764251621341500 = l_a___0 =>
	__459429596346129747750(high13103898408104113628(l_a___0), low17189750349762194983(l_a___0))
// size@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size17337870902235946459 = l_a___0 =>
	__459429596346129747750(high1706005646674707084(l_a___0), low6205240433782659991(l_a___0))
// size@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size8515533719584950138 = l_a___0 =>
	__459429596346129747750(high18329008213481336239(l_a___0), low10445493155090407718(l_a___0))
// size@((symbol, string) tuple2) file:///home/andy/keen/lib/col/buffer.keen 244:1
const size8599847328996572784 = l_a___0 =>
	__459429596346129747750(high7615525486373111835(l_a___0), low15956577804495702210(l_a___0))
// index-too-big file:///home/andy/keen/lib/col/collection.keen 11:1
const index__45too__45big17082524477655533791 = (l_actual___0, l_max__45exclusive___1) =>
	new (index__45too__45big2628637778731366537)(l_actual___0, l_max__45exclusive___1)
// was-locked file:///home/andy/keen/lib/col/collection.keen 18:1
const was__45locked1163620713516753779 = () =>
	new (was__45locked658591519880986109)()
// iterator-out-of-bounds file:///home/andy/keen/lib/col/collection.keen 23:1
const iterator__45out__45of__45bounds10912921435610323677 = () =>
	new (iterator__45out__45of__45bounds15075223189503120726)()
// try-take-prev@(char8, char8 array-iterator) file:///home/andy/keen/lib/col/collection.keen 66:1
const try__45take__45prev13947153345326789900 = l_a___0 => {
	try {
		return take__45prev5487767419746825104(l_a___0)
	} catch (x_error___0) {
		if ((x_error___0 instanceof iterator__45out__45of__45bounds15075223189503120726)) {
			return c____558()
		} else {
			throw x_error___0
		}
	}
}
// try-take-next@(char8, char8 array-iterator) file:///home/andy/keen/lib/col/collection.keen 71:1
const try__45take__45next4456695352035296389 = l_a___0 => {
	try {
		return take__45next3000444236349839320(l_a___0)
	} catch (x_error___0) {
		if ((x_error___0 instanceof iterator__45out__45of__45bounds15075223189503120726)) {
			return c____558()
		} else {
			throw x_error___0
		}
	}
}
// new file:///home/andy/keen/lib/col/collection.keen 90:1
const new3303130361285867204 = l_subtract___0 =>
	new (index__45relative__45to__45end8245774424878029406)(l_subtract___0)
// subtract file:///home/andy/keen/lib/col/collection.keen 90:31
const subtract7308658022449593656 = l_a___0 =>
	l_a___0.subtract
// to-index@(json buffer-view) file:///home/andy/keen/lib/col/collection.keen 93:1
const to__45index4851402809759717125 = (l_a___1, l_index___3) => {
	const l_size___0 = size16606202018401915952(l_a___1)
	const l_sub___2 = subtract7308658022449593656(l_index___3)
	if (__60__616269385802849585881(l_sub___2, l_size___0)) {
		return __459429596346129747750(size16606202018401915952(l_a___1), subtract7308658022449593656(l_index___3))
	} else {
		throw index__45too__45big17082524477655533791(l_sub___2, __431000895641751717785(l_size___0, 1n))
	}
}
// to-index@((symbol, string) tuple2 array-view) file:///home/andy/keen/lib/col/collection.keen 93:1
const to__45index1358065719458271400 = (l_a___1, l_index___3) => {
	const l_size___0 = size6427707796724790572(l_a___1)
	const l_sub___2 = subtract7308658022449593656(l_index___3)
	if (__60__616269385802849585881(l_sub___2, l_size___0)) {
		return __459429596346129747750(size6427707796724790572(l_a___1), subtract7308658022449593656(l_index___3))
	} else {
		throw index__45too__45big17082524477655533791(l_sub___2, __431000895641751717785(l_size___0, 1n))
	}
}
// to-index@(container mut-array) file:///home/andy/keen/lib/col/collection.keen 93:1
const to__45index10475341101703608214 = (l_a___1, l_index___3) => {
	const l_size___0 = size14517749307210698983(l_a___1)
	const l_sub___2 = subtract7308658022449593656(l_index___3)
	if (__60__616269385802849585881(l_sub___2, l_size___0)) {
		return __459429596346129747750(size14517749307210698983(l_a___1), subtract7308658022449593656(l_index___3))
	} else {
		throw index__45too__45big17082524477655533791(l_sub___2, __431000895641751717785(l_size___0, 1n))
	}
}
// to-index@(char8 array-view) file:///home/andy/keen/lib/col/collection.keen 93:1
const to__45index2709654156222237099 = (l_a___1, l_index___3) => {
	const l_size___0 = size4088222861950865375(l_a___1)
	const l_sub___2 = subtract7308658022449593656(l_index___3)
	if (__60__616269385802849585881(l_sub___2, l_size___0)) {
		return __459429596346129747750(size4088222861950865375(l_a___1), subtract7308658022449593656(l_index___3))
	} else {
		throw index__45too__45big17082524477655533791(l_sub___2, __431000895641751717785(l_size___0, 1n))
	}
}
// to-index@(char8 array array-view) file:///home/andy/keen/lib/col/collection.keen 93:1
const to__45index7950559149171855593 = (l_a___1, l_index___3) => {
	const l_size___0 = size1846468246877964291(l_a___1)
	const l_sub___2 = subtract7308658022449593656(l_index___3)
	if (__60__616269385802849585881(l_sub___2, l_size___0)) {
		return __459429596346129747750(size1846468246877964291(l_a___1), subtract7308658022449593656(l_index___3))
	} else {
		throw index__45too__45big17082524477655533791(l_sub___2, __431000895641751717785(l_size___0, 1n))
	}
}
// to-index@((symbol, json) tuple2 buffer-view) file:///home/andy/keen/lib/col/collection.keen 93:1
const to__45index2828757378095408577 = (l_a___1, l_index___3) => {
	const l_size___0 = size1065220973704784668(l_a___1)
	const l_sub___2 = subtract7308658022449593656(l_index___3)
	if (__60__616269385802849585881(l_sub___2, l_size___0)) {
		return __459429596346129747750(size1065220973704784668(l_a___1), subtract7308658022449593656(l_index___3))
	} else {
		throw index__45too__45big17082524477655533791(l_sub___2, __431000895641751717785(l_size___0, 1n))
	}
}
// to-index@(symbol buffer-view) file:///home/andy/keen/lib/col/collection.keen 93:1
const to__45index16846540729888347067 = (l_a___1, l_index___3) => {
	const l_size___0 = size8791553585132395083(l_a___1)
	const l_sub___2 = subtract7308658022449593656(l_index___3)
	if (__60__616269385802849585881(l_sub___2, l_size___0)) {
		return __459429596346129747750(size8791553585132395083(l_a___1), subtract7308658022449593656(l_index___3))
	} else {
		throw index__45too__45big17082524477655533791(l_sub___2, __431000895641751717785(l_size___0, 1n))
	}
}
// to-index@((symbol, string) tuple2 buffer-view) file:///home/andy/keen/lib/col/collection.keen 93:1
const to__45index11614418243670674547 = (l_a___1, l_index___3) => {
	const l_size___0 = size10155486268514705094(l_a___1)
	const l_sub___2 = subtract7308658022449593656(l_index___3)
	if (__60__616269385802849585881(l_sub___2, l_size___0)) {
		return __459429596346129747750(size10155486268514705094(l_a___1), subtract7308658022449593656(l_index___3))
	} else {
		throw index__45too__45big17082524477655533791(l_sub___2, __431000895641751717785(l_size___0, 1n))
	}
}
// to-index@((symbol, json) tuple2 array-view) file:///home/andy/keen/lib/col/collection.keen 93:1
const to__45index14772629666362974180 = (l_a___1, l_index___3) => {
	const l_size___0 = size10721725010120609664(l_a___1)
	const l_sub___2 = subtract7308658022449593656(l_index___3)
	if (__60__616269385802849585881(l_sub___2, l_size___0)) {
		return __459429596346129747750(size10721725010120609664(l_a___1), subtract7308658022449593656(l_index___3))
	} else {
		throw index__45too__45big17082524477655533791(l_sub___2, __431000895641751717785(l_size___0, 1n))
	}
}
// to-index@(char8 array array) file:///home/andy/keen/lib/col/collection.keen 93:1
const to__45index7821201294792252162 = (l_a___1, l_index___3) => {
	const l_size___0 = BigInt(l_a___1.length)
	const l_sub___2 = subtract7308658022449593656(l_index___3)
	if (__60__616269385802849585881(l_sub___2, l_size___0)) {
		return __459429596346129747750(BigInt(l_a___1.length), subtract7308658022449593656(l_index___3))
	} else {
		throw index__45too__45big17082524477655533791(l_sub___2, __431000895641751717785(l_size___0, 1n))
	}
}
// to-index@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer-view) file:///home/andy/keen/lib/col/collection.keen 93:1
const to__45index8965393381753164480 = (l_a___1, l_index___3) => {
	const l_size___0 = size18027608494695026523(l_a___1)
	const l_sub___2 = subtract7308658022449593656(l_index___3)
	if (__60__616269385802849585881(l_sub___2, l_size___0)) {
		return __459429596346129747750(size18027608494695026523(l_a___1), subtract7308658022449593656(l_index___3))
	} else {
		throw index__45too__45big17082524477655533791(l_sub___2, __431000895641751717785(l_size___0, 1n))
	}
}
// to-index@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view) file:///home/andy/keen/lib/col/collection.keen 93:1
const to__45index18187232723525657879 = (l_a___1, l_index___3) => {
	const l_size___0 = size15015691447912114022(l_a___1)
	const l_sub___2 = subtract7308658022449593656(l_index___3)
	if (__60__616269385802849585881(l_sub___2, l_size___0)) {
		return __459429596346129747750(size15015691447912114022(l_a___1), subtract7308658022449593656(l_index___3))
	} else {
		throw index__45too__45big17082524477655533791(l_sub___2, __431000895641751717785(l_size___0, 1n))
	}
}
// - file:///home/andy/keen/lib/col/collection.keen 99:1
const __452101191994244905068 = (l_a___0, l_n___1) =>
	new3303130361285867204(__431000895641751717785(subtract7308658022449593656(l_a___0), l_n___1))
// new file:///home/andy/keen/lib/col/collection.keen 103:1
const new10168213504558997213 = (l_low___0, l_high___1) =>
	new (range__45relative__45to__45end15042407024875787184)(l_low___0, l_high___1)
// low file:///home/andy/keen/lib/col/collection.keen 103:31
const low9596797178650390355 = l_a___0 =>
	l_a___0.low
// high file:///home/andy/keen/lib/col/collection.keen 103:64
const high10442526621520215704 = l_a___0 =>
	l_a___0.high
// .. file:///home/andy/keen/lib/col/collection.keen 104:1
const __46__463392754618358187143 = (l_low___0, l_high___1) =>
	new10168213504558997213(l_low___0, l_high___1)
// first@(char32, nat64 range, nat64) file:///home/andy/keen/lib/col/collection.keen 114:1
const first7603305952895111487 = (l_a___1, l_f___3) => {
	let l_res___0 = c____558()
	;(void some15196038435874883717(l_a___1, l_x___2 => {
			l_res___0 = l_f___3(l_x___2)
			return ((typeof l_res___0) === "number")
		}))
	return l_res___0
}
// find@(lsp-diagnostic array, lsp-diagnostic) file:///home/andy/keen/lib/col/collection.keen 132:1
const _async_find2645277749695112387 = async (l_a___1, l_f___3) => {
	let l_res___0 = c____558()
	;(void (await _async_some15946314695741497498(l_a___1, async l_x___2 => {
			if ((await l_f___3(l_x___2))) {
				l_res___0 = l_x___2
				return true
			} else {
				return false
			}
		})))
	return l_res___0
}
// find-index@(language array, language) file:///home/andy/keen/lib/col/collection.keen 149:1
const find__45index17342758776033227445 = (l_a___2, l_f___4) => {
	let l_ok___1, l_i___0
	return ((l_i___0 = 0n) , ((l_ok___1 = some12389303152544213740(l_a___2, l_x___3 => {
			if (l_f___4(l_x___3)) {
				return true
			} else {
				l_i___0 = __431000895641751717785(l_i___0, 1n)
				return false
			}
		})) , (l_ok___1 ? l_i___0 : c____558())))
}
// find-index@(char8 array, char8) file:///home/andy/keen/lib/col/collection.keen 149:1
const find__45index15723125231045412085 = (l_a___2, l_f___4) => {
	let l_ok___1, l_i___0
	return ((l_i___0 = 0n) , ((l_ok___1 = some15532294202059772837(l_a___2, l_x___3 => {
			if (l_f___4(l_x___3)) {
				return true
			} else {
				l_i___0 = __431000895641751717785(l_i___0, 1n)
				return false
			}
		})) , (l_ok___1 ? l_i___0 : c____558())))
}
// index-of@(char8 array, char8) file:///home/andy/keen/lib/col/collection.keen 188:1
const index__45of6695115875000308109 = (l_a___0, l_search__45value___2) =>
	find__45index15723125231045412085(l_a___0, l_it___1 =>
			Object.is(l_it___1, l_search__45value___2))
// index-of@(language array, language) file:///home/andy/keen/lib/col/collection.keen 188:1
const index__45of8417315473479866296 = (l_a___0, l_search__45value___2) =>
	find__45index17342758776033227445(l_a___0, l_it___1 =>
			__61__613727600471881965811(l_it___1, l_search__45value___2))
// every@((json, json) tuple2 array, (json, json) tuple2) file:///home/andy/keen/lib/col/collection.keen 197:1
const every11988348574375815504 = (l_a___0, l_f___2) =>
	(!some7795452553417415122(l_a___0, l_it___1 =>
			(!l_f___2(l_it___1))))
// from-option@(js-any array-view, js-any) file:///home/andy/keen/lib/col/collection.keen 228:1
const from__45option11546042617594812940 = l_a___0 =>
	((l_a___0.index === 1) ? to__45array__45view12862255755891182376(list__45new16687999342081306217([l_a___0.value])) : to__45array__45view12862255755891182376(c____258()))
// new@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 16:1
const new2432937684954804618 = (l_max__45cost___0, l_capacity__45log__452___1, l_index__45mask___2, l_entries___3) =>
	new (object__45memoizer18285240245868561688)(l_max__45cost___0, l_capacity__45log__452___1, l_index__45mask___2, l_entries___3)
// max-cost@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 19:5
const max__45cost11788433426015259453 = l_a___0 =>
	l_a___0["max-cost"]
// set-max-cost@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 19:5
const set__45max__45cost9705554457847479482 = (l_a___0, l_max__45cost___1) => {
	l_a___0["max-cost"] = l_max__45cost___1
}
// capacity-log-2@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 21:5
const capacity__45log__45216266747752350313062 = l_a___0 =>
	l_a___0["capacity-log-2"]
// set-capacity-log-2@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 21:5
const set__45capacity__45log__4526126697247531293465 = (l_a___0, l_capacity__45log__452___1) => {
	l_a___0["capacity-log-2"] = l_capacity__45log__452___1
}
// set-index-mask@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 23:5
const set__45index__45mask10675222467519073775 = (l_a___0, l_index__45mask___1) => {
	l_a___0["index-mask"] = l_index__45mask___1
}
// index-mask@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 23:5
const index__45mask2414638169679180950 = l_a___0 =>
	l_a___0["index-mask"]
// set-entries@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 24:5
const set__45entries206910906133136388 = (l_a___0, l_entries___1) => {
	l_a___0.entries = l_entries___1
}
// entries@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 24:5
const entries9360042149167869344 = l_a___0 =>
	l_a___0.entries
// new@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 25:1
const new15809701376150553813 = () =>
	new2432937684954804618(0n, 1n, index__45mask__45for4650067224790133571(1n), new (Array)(Number(2n)).fill(null))
// index-mask-for file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 36:1
const index__45mask__45for4650067224790133571 = l_capacity__45log__452___0 =>
	low__45n__45bits15912832071311386153(l_capacity__45log__452___0)
// memoize@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 40:1
const memoize13570954530624692179 = (l_a___1, l_key___2, l_make__45value___4) => {
	let l_temp___5
	const l_member2___0 = find2119704468448496694(l_a___1, l_key___2)
	const x_matched___0 = l_member2___0
	if ((x_matched___0 instanceof none12752313651180151000)) {
		const l_value___3 = l_make__45value___4((void 0))
		must__45insert2235298336378935892(l_a___1, l_value___3)
		return l_value___3
	} else {
		if ((x_matched___0 instanceof symbol11978982047599604571)) {
			return ((l_temp___5 = l_member2___0) , l_temp___5)
		} else {
			return _unreachable()
		}
	}
}
// find@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 46:1
const find2119704468448496694 = (l_a___1, l_key___2) => {
	let x_got___0
	let l_i___0 = ideal__45index8503847951526431941(l_a___1, l_key___2)
	let l_cost___3 = 0n
	while (true){
		const l_temp___4 = (() => {
			if (__625060923374247189753(l_cost___3, max__45cost11788433426015259453(l_a___1))) {
				return new (option924936842999394469)(1, c____558())
			} else {
				const l_temp___5 = ((x_got___0 = subscript3661040528037494651(entries9360042149167869344(l_a___1), l_i___0)?.deref()) , ((x_got___0 === (void 0)) ? new (none12752313651180151000)() : x_got___0))
				const l_v___6 = l_temp___5
				if (((l_temp___5 instanceof symbol11978982047599604571) ? __61__61279176413746745943(memoizer__45key14449044796098788189(l_v___6), l_key___2) : false)) {
					return new (option924936842999394469)(1, l_v___6)
				} else {
					l_i___0 = next__45index17862801579067284908(l_a___1, l_i___0)
					l_cost___3 = __431000895641751717785(l_cost___3, 1n)
					return new (option924936842999394469)(0, c____558())
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
// must-insert@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 60:1
const must__45insert2235298336378935892 = (l_a___3, l_top__45value___1) => {
	let x_got___1
	let l_value___0 = l_top__45value___1
	let l_i___2 = ideal__45index8503847951526431941(l_a___3, memoizer__45key14449044796098788189(l_value___0))
	let l_cost___4 = 0n
	x_loop___0: while (true){
		const l_temp___5 = ((x_got___1 = subscript3661040528037494651(entries9360042149167869344(l_a___3), l_i___2)?.deref()) , ((x_got___1 === (void 0)) ? new (none12752313651180151000)() : x_got___1))
		const l_v___6 = l_temp___5
		if ((l_temp___5 instanceof symbol11978982047599604571)) {
			const l_its__45home___7 = ideal__45index8503847951526431941(l_a___3, memoizer__45key14449044796098788189(l_v___6))
			const l_its__45cost___8 = cost9449131651437290785(l_a___3, l_its__45home___7, l_i___2)
			if (__625060923374247189753(l_cost___4, l_its__45cost___8)) {
				set__45subscript12791206262159549902(entries9360042149167869344(l_a___3), l_i___2, new (WeakRef)(l_value___0))
				l_value___0 = l_v___6
				l_cost___4 = l_its__45cost___8
			} else {
				(void 0)
			}
			l_i___2 = next__45index17862801579067284908(l_a___3, l_i___2)
			l_cost___4 = __431000895641751717785(l_cost___4, 1n)
			if (__62__618892781134906463570(l_cost___4, max__45cost11788433426015259453(l_a___3))) {
				set__45max__45cost9705554457847479482(l_a___3, l_cost___4)
				if (__625060923374247189753(max__45cost11788433426015259453(l_a___3), max__45max__45cost11663747383421694643(l_a___3))) {
					increase__45capacity12498774192184456824(l_a___3)
					l_i___2 = ideal__45index8503847951526431941(l_a___3, memoizer__45key14449044796098788189(l_value___0))
					l_cost___4 = 0n
				} else {
					(void 0)
				}
			} else {
				(void 0)
			}
			continue
		} else {
			(void 0)
			break  x_loop___0
		}
	}
	set__45subscript12791206262159549902(entries9360042149167869344(l_a___3), l_i___2, new (WeakRef)(l_value___0))
}
// max-max-cost@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 81:1
const max__45max__45cost11663747383421694643 = l_a___0 =>
	__473463626361574020402(capacity__45log__45216266747752350313062(l_a___0), 2n)
// increase-capacity@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 84:1
const increase__45capacity12498774192184456824 = l_a___1 => {
	let x_got___0, l_v___4, l_temp___3
	const l_old__45entries___0 = entries9360042149167869344(l_a___1)
	set__45max__45cost9705554457847479482(l_a___1, 0n)
	set__45capacity__45log__4526126697247531293465(l_a___1, __431000895641751717785(capacity__45log__45216266747752350313062(l_a___1), 1n))
	set__45index__45mask10675222467519073775(l_a___1, index__45mask__45for4650067224790133571(capacity__45log__45216266747752350313062(l_a___1)))
	set__45entries206910906133136388(l_a___1, new (Array)(Number(__60__6010136694790643423161(1n, capacity__45log__45216266747752350313062(l_a___1)))).fill(null))
	for (const l_x___2 of l_old__45entries___0) {
		((l_temp___3 = ((x_got___0 = l_x___2?.deref()) , ((x_got___0 === (void 0)) ? new (none12752313651180151000)() : x_got___0))) , ((l_v___4 = l_temp___3) , ((l_temp___3 instanceof symbol11978982047599604571) ? must__45insert2235298336378935892(l_a___1, l_v___4) : (void 0))))
	}
}
// ideal-index@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 94:1
const ideal__45index8503847951526431941 = (l_a___1, l_key___0) =>
	(hash13893151282647077466(l_key___0) & index__45mask2414638169679180950(l_a___1))
// next-index@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 96:1
const next__45index17862801579067284908 = (l_a___1, l_index___0) =>
	(BigInt.asUintN(64, (l_index___0 + 1n)) & index__45mask2414638169679180950(l_a___1))
// cost@(symbol, symbol-key) file:///home/andy/keen/lib/col/experimental/object-memoizer.keen 98:1
const cost9449131651437290785 = (l_a___2, l_ideal__45index___0, l_actual__45index___1) =>
	(__60__616269385802849585881(l_ideal__45index___0, l_actual__45index___1) ? __459429596346129747750(l_actual__45index___1, l_ideal__45index___0) : __431000895641751717785(__459429596346129747750(BigInt(entries9360042149167869344(l_a___2).length), l_ideal__45index___0), l_actual__45index___1))
// new@(symbol, json) file:///home/andy/keen/lib/col/map.keen 27:1
const new747245929187780740 = l_root___0 =>
	new (map13779824056774216095)(l_root___0)
// new@(symbol, string) file:///home/andy/keen/lib/col/map.keen 27:1
const new12499651889658553079 = l_root___0 =>
	new (map1545462317922802610)(l_root___0)
// new@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 27:1
const new8512769841668596041 = l_root___0 =>
	new (map1109280453227245716)(l_root___0)
// root@(symbol, string) file:///home/andy/keen/lib/col/map.keen 28:5
const root14825135577843310893 = l_a___0 =>
	l_a___0.root
// root@(symbol, json) file:///home/andy/keen/lib/col/map.keen 28:5
const root6487773350044236230 = l_a___0 =>
	l_a___0.root
// root@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 28:5
const root16196509427705288665 = l_a___0 =>
	l_a___0.root
// to@(symbol, json) file:///home/andy/keen/lib/col/map.keen 40:1
const to17873013641985653784 = l_a___1 => {
	let l_key___4, l_value___3, l_parts___0
	return ((l_parts___0 = for__45loop4415201674689982703(l_a___1, l_destruct___2 =>
			((l_value___3 = l_destruct___2.b) , ((l_key___4 = l_destruct___2.a) , new1834493116592655285(to6946154876139669136(l_key___4), to15387696512002785389(l_value___3)))))) , (every11988348574375815504(l_parts___0, l_it___5 =>
			(as__45string17685518606457434897(a13190002216079534334(l_it___5)) instanceof string9092701471797383860)) ? named__45new6710044013026329874(map11004464224184768557(l_parts___0, l_it___6 =>
				to9088973396303820521(to13461298867722084777(a13190002216079534334(l_it___6)))), map9381099685663729955(l_parts___0, l_it___7 =>
				b13735090799345817353(l_it___7))) : to14956145119846910815(l_parts___0)))
}
// as-string file:///home/andy/keen/lib/col/map.keen 47:1
const as__45string17685518606457434897 = l_a___0 => {
	try {
		return to13461298867722084777(l_a___0)
	} catch (x_error___0) {
		if ((x_error___0 instanceof deserialize__45error7319880037343575041)) {
			return c____558()
		} else {
			throw x_error___0
		}
	}
}
// nodes@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 69:26
const nodes15617901467245700242 = l_a___0 =>
	l_a___0.nodes
// nodes@(symbol, json) file:///home/andy/keen/lib/col/map.keen 69:26
const nodes17191235268232435376 = l_a___0 =>
	l_a___0.nodes
// nodes@(symbol, string) file:///home/andy/keen/lib/col/map.keen 69:26
const nodes17813878019067808863 = l_a___0 =>
	l_a___0.nodes
// list-new@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 84:1
const list__45new15262798617984212093 = l_a___0 =>
	to15299339459414547356(l_a___0)
// list-new@(symbol, json) file:///home/andy/keen/lib/col/map.keen 84:1
const list__45new17278182394804174401 = l_a___0 =>
	to6139232716965862118(l_a___0)
// list-new@(symbol, string) file:///home/andy/keen/lib/col/map.keen 84:1
const list__45new15738010718011681032 = l_a___0 =>
	to2087268213407447777(l_a___0)
// named-new@(string) file:///home/andy/keen/lib/col/map.keen 88:1
const named__45new14405854769415967817 = (l_keys___0, l_values___4) => {
	let l_i___3, l_key___2
	return for__45loop17456319261313168750(with__45index11022831463217673804(l_keys___0), l_destruct___1 =>
			((l_key___2 = l_destruct___1.b) , ((l_i___3 = l_destruct___1.a) , new9294282750249516893(l_key___2, subscript9327272106425501274(l_values___4, l_i___3)))))
}
// named-new@((js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 88:1
const named__45new11519956692467603063 = (l_keys___0, l_values___4) => {
	let l_i___3, l_key___2
	return for__45loop12365011971162998010(with__45index11022831463217673804(l_keys___0), l_destruct___1 =>
			((l_key___2 = l_destruct___1.b) , ((l_i___3 = l_destruct___1.a) , new13964893598962448568(l_key___2, subscript14544511950344716377(l_values___4, l_i___3)))))
}
// to@(symbol, string) file:///home/andy/keen/lib/col/map.keen 94:1
const to2087268213407447777 = l_a___0 =>
	((__60__616269385802849585881(BigInt(l_a___0.length), 4n) ? (!has__45duplicate__45keys16722848707130243214(to__45array__45view14079080899297940875(l_a___0))) : false) ? new12499651889658553079(l_a___0) : new12499651889658553079(to15522856330671156844(l_a___0)))
// to@(symbol, json) file:///home/andy/keen/lib/col/map.keen 94:1
const to6139232716965862118 = l_a___0 =>
	((__60__616269385802849585881(BigInt(l_a___0.length), 4n) ? (!has__45duplicate__45keys12299942522205017199(to__45array__45view15600247917562469558(l_a___0))) : false) ? new747245929187780740(l_a___0) : new747245929187780740(to16115970503674207029(l_a___0)))
// to@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 94:1
const to15299339459414547356 = l_a___0 =>
	((__60__616269385802849585881(BigInt(l_a___0.length), 4n) ? (!has__45duplicate__45keys8938440590673202218(to__45array__45view5635519402630394728(l_a___0))) : false) ? new8512769841668596041(l_a___0) : new8512769841668596041(to4575800010291843286(l_a___0)))
// has-duplicate-keys@(symbol, json) file:///home/andy/keen/lib/col/map.keen 110:1
const has__45duplicate__45keys12299942522205017199 = l_a___0 => {
	const x_matched___0 = size10721725010120609664(l_a___0)
	switch (x_matched___0) {
		case 0n:{
			return false
		}
		case 1n:{
			return false
		}
		case 2n:{
			return __61__611154543819848657072(a13517452400068764641(subscript11989252377175373575(l_a___0, 0n)), a13517452400068764641(subscript11989252377175373575(l_a___0, 1n)))
		}
		case 3n:{
			return ((__61__611154543819848657072(a13517452400068764641(subscript11989252377175373575(l_a___0, 0n)), a13517452400068764641(subscript11989252377175373575(l_a___0, 1n))) ? true : __61__611154543819848657072(a13517452400068764641(subscript11989252377175373575(l_a___0, 0n)), a13517452400068764641(subscript11989252377175373575(l_a___0, 2n)))) ? true : has__45duplicate__45keys12299942522205017199(subscript2946746943340336347(l_a___0, __46__467720007973451370645(1n, size10721725010120609664(l_a___0)))))
		}
		case 4n:{
			return (((__61__611154543819848657072(a13517452400068764641(subscript11989252377175373575(l_a___0, 0n)), a13517452400068764641(subscript11989252377175373575(l_a___0, 1n))) ? true : __61__611154543819848657072(a13517452400068764641(subscript11989252377175373575(l_a___0, 0n)), a13517452400068764641(subscript11989252377175373575(l_a___0, 2n)))) ? true : __61__611154543819848657072(a13517452400068764641(subscript11989252377175373575(l_a___0, 0n)), a13517452400068764641(subscript11989252377175373575(l_a___0, 3n)))) ? true : has__45duplicate__45keys12299942522205017199(subscript2946746943340336347(l_a___0, __46__467720007973451370645(1n, size10721725010120609664(l_a___0)))))
		}
		default:{
			throw unreachable15541723113030349832()
		}
	}
}
// has-duplicate-keys@(symbol, string) file:///home/andy/keen/lib/col/map.keen 110:1
const has__45duplicate__45keys16722848707130243214 = l_a___0 => {
	const x_matched___0 = size6427707796724790572(l_a___0)
	switch (x_matched___0) {
		case 0n:{
			return false
		}
		case 1n:{
			return false
		}
		case 2n:{
			return __61__611154543819848657072(a16321909526332198610(subscript2008825528521929111(l_a___0, 0n)), a16321909526332198610(subscript2008825528521929111(l_a___0, 1n)))
		}
		case 3n:{
			return ((__61__611154543819848657072(a16321909526332198610(subscript2008825528521929111(l_a___0, 0n)), a16321909526332198610(subscript2008825528521929111(l_a___0, 1n))) ? true : __61__611154543819848657072(a16321909526332198610(subscript2008825528521929111(l_a___0, 0n)), a16321909526332198610(subscript2008825528521929111(l_a___0, 2n)))) ? true : has__45duplicate__45keys16722848707130243214(subscript2312824591634726071(l_a___0, __46__467720007973451370645(1n, size6427707796724790572(l_a___0)))))
		}
		case 4n:{
			return (((__61__611154543819848657072(a16321909526332198610(subscript2008825528521929111(l_a___0, 0n)), a16321909526332198610(subscript2008825528521929111(l_a___0, 1n))) ? true : __61__611154543819848657072(a16321909526332198610(subscript2008825528521929111(l_a___0, 0n)), a16321909526332198610(subscript2008825528521929111(l_a___0, 2n)))) ? true : __61__611154543819848657072(a16321909526332198610(subscript2008825528521929111(l_a___0, 0n)), a16321909526332198610(subscript2008825528521929111(l_a___0, 3n)))) ? true : has__45duplicate__45keys16722848707130243214(subscript2312824591634726071(l_a___0, __46__467720007973451370645(1n, size6427707796724790572(l_a___0)))))
		}
		default:{
			throw unreachable15541723113030349832()
		}
	}
}
// has-duplicate-keys@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 110:1
const has__45duplicate__45keys8938440590673202218 = l_a___0 => {
	const x_matched___0 = size15015691447912114022(l_a___0)
	switch (x_matched___0) {
		case 0n:{
			return false
		}
		case 1n:{
			return false
		}
		case 2n:{
			return __61__611154543819848657072(a9842936203065675719(subscript4094799913261040478(l_a___0, 0n)), a9842936203065675719(subscript4094799913261040478(l_a___0, 1n)))
		}
		case 3n:{
			return ((__61__611154543819848657072(a9842936203065675719(subscript4094799913261040478(l_a___0, 0n)), a9842936203065675719(subscript4094799913261040478(l_a___0, 1n))) ? true : __61__611154543819848657072(a9842936203065675719(subscript4094799913261040478(l_a___0, 0n)), a9842936203065675719(subscript4094799913261040478(l_a___0, 2n)))) ? true : has__45duplicate__45keys8938440590673202218(subscript10360121647892212761(l_a___0, __46__467720007973451370645(1n, size15015691447912114022(l_a___0)))))
		}
		case 4n:{
			return (((__61__611154543819848657072(a9842936203065675719(subscript4094799913261040478(l_a___0, 0n)), a9842936203065675719(subscript4094799913261040478(l_a___0, 1n))) ? true : __61__611154543819848657072(a9842936203065675719(subscript4094799913261040478(l_a___0, 0n)), a9842936203065675719(subscript4094799913261040478(l_a___0, 2n)))) ? true : __61__611154543819848657072(a9842936203065675719(subscript4094799913261040478(l_a___0, 0n)), a9842936203065675719(subscript4094799913261040478(l_a___0, 3n)))) ? true : has__45duplicate__45keys8938440590673202218(subscript10360121647892212761(l_a___0, __46__467720007973451370645(1n, size15015691447912114022(l_a___0)))))
		}
		default:{
			throw unreachable15541723113030349832()
		}
	}
}
// size@(symbol, string) file:///home/andy/keen/lib/col/map.keen 138:1
const size8161541508586761726 = l_a___0 =>
	size18308700185923109212(root14825135577843310893(l_a___0))
// size@(symbol, json) file:///home/andy/keen/lib/col/map.keen 138:1
const size2498100917716367718 = l_a___0 =>
	size1186539112103068665(root6487773350044236230(l_a___0))
// size@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 138:1
const size7664020732169260666 = l_a___0 =>
	size70207013887057464(root16196509427705288665(l_a___0))
// size@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 140:1
const size70207013887057464 = l_a___0 => {
	const x_matched___0 = l_a___0
	if ((x_matched___0 instanceof frozen__45map17330447661197982178)) {
		return size4248118483495851553(l_a___0)
	} else {
		if ((x_matched___0 instanceof inner__45node7440087989924078177)) {
			let l_acc___1 = 0n
			for (const l_child___2 of nodes15617901467245700242(l_a___0)) {
				l_acc___1 = __431000895641751717785(l_acc___1, size70207013887057464(l_child___2))
			}
			return l_acc___1
		} else {
			if ((x_matched___0 instanceof Array)) {
				return BigInt(l_a___0.length)
			} else {
				return _unreachable()
			}
		}
	}
}
// size@(symbol, string) file:///home/andy/keen/lib/col/map.keen 140:1
const size18308700185923109212 = l_a___0 => {
	const x_matched___0 = l_a___0
	if ((x_matched___0 instanceof frozen__45map12255235111266041392)) {
		return size12681194139969857514(l_a___0)
	} else {
		if ((x_matched___0 instanceof inner__45node199949891438391559)) {
			let l_acc___1 = 0n
			for (const l_child___2 of nodes17813878019067808863(l_a___0)) {
				l_acc___1 = __431000895641751717785(l_acc___1, size18308700185923109212(l_child___2))
			}
			return l_acc___1
		} else {
			if ((x_matched___0 instanceof Array)) {
				return BigInt(l_a___0.length)
			} else {
				return _unreachable()
			}
		}
	}
}
// size@(symbol, json) file:///home/andy/keen/lib/col/map.keen 140:1
const size1186539112103068665 = l_a___0 => {
	const x_matched___0 = l_a___0
	if ((x_matched___0 instanceof frozen__45map12918844883644871653)) {
		return size11809978137178022351(l_a___0)
	} else {
		if ((x_matched___0 instanceof inner__45node5984648194967059355)) {
			let l_acc___1 = 0n
			for (const l_child___2 of nodes17191235268232435376(l_a___0)) {
				l_acc___1 = __431000895641751717785(l_acc___1, size1186539112103068665(l_child___2))
			}
			return l_acc___1
		} else {
			if ((x_matched___0 instanceof Array)) {
				return BigInt(l_a___0.length)
			} else {
				return _unreachable()
			}
		}
	}
}
// some@(symbol, string) file:///home/andy/keen/lib/col/map.keen 404:1
const some7808882300005051336 = (l_a___0, l_f___3) =>
	some4456382396105079607(sort17893584610839031994(map4541501034238783983(unsorted14646690892190676149(l_a___0), l_it___1 =>
					l_it___1), l_it___2 =>
				a16321909526332198610(l_it___2)), l_f___3)
// some@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 404:1
const some11156243683291731469 = (l_a___0, l_f___3) =>
	some14079183715108909801(sort9763057825635895871(map9212457334841285984(unsorted16032305893912746894(l_a___0), l_it___1 =>
					l_it___1), l_it___2 =>
				a9842936203065675719(l_it___2)), l_f___3)
// some@(symbol, json) file:///home/andy/keen/lib/col/map.keen 404:1
const some10603882724621043225 = (l_a___0, l_f___3) =>
	some12617336626473952259(sort8788258484377128169(map4392193162952967522(unsorted18136033289874546528(l_a___0), l_it___1 =>
					l_it___1), l_it___2 =>
				a13517452400068764641(l_it___2)), l_f___3)
// new@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 407:1
const new11427040429552454135 = l_inner___0 =>
	new (map__45unsorted8697784728381805410)(l_inner___0)
// new@(symbol, json) file:///home/andy/keen/lib/col/map.keen 407:1
const new14368479471747689870 = l_inner___0 =>
	new (map__45unsorted5081736359004696596)(l_inner___0)
// new@(symbol, string) file:///home/andy/keen/lib/col/map.keen 407:1
const new3504442623619893483 = l_inner___0 =>
	new (map__45unsorted3889173285187788569)(l_inner___0)
// inner@(symbol, json) file:///home/andy/keen/lib/col/map.keen 408:5
const inner587139313701487279 = l_a___0 =>
	l_a___0.inner
// inner@(symbol, string) file:///home/andy/keen/lib/col/map.keen 408:5
const inner9157210413124376487 = l_a___0 =>
	l_a___0.inner
// inner@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 408:5
const inner10847460176419787123 = l_a___0 =>
	l_a___0.inner
// unsorted@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 409:1
const unsorted16032305893912746894 = l_a___0 =>
	new11427040429552454135(l_a___0)
// unsorted@(symbol, json) file:///home/andy/keen/lib/col/map.keen 409:1
const unsorted18136033289874546528 = l_a___0 =>
	new14368479471747689870(l_a___0)
// unsorted@(symbol, string) file:///home/andy/keen/lib/col/map.keen 409:1
const unsorted14646690892190676149 = l_a___0 =>
	new3504442623619893483(l_a___0)
// size@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 411:1
const size2077642984053261883 = l_a___0 =>
	size7664020732169260666(inner10847460176419787123(l_a___0))
// size@(symbol, json) file:///home/andy/keen/lib/col/map.keen 411:1
const size15193453693627703173 = l_a___0 =>
	size2498100917716367718(inner587139313701487279(l_a___0))
// size@(symbol, string) file:///home/andy/keen/lib/col/map.keen 411:1
const size12989540777537068646 = l_a___0 =>
	size8161541508586761726(inner9157210413124376487(l_a___0))
// some@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 413:1
const some15879958075316921733 = (l_a___0, l_f___1) =>
	some__45recur4864664750052218471(root16196509427705288665(inner10847460176419787123(l_a___0)), l_f___1)
// some@(symbol, json) file:///home/andy/keen/lib/col/map.keen 413:1
const some3207937214708331583 = (l_a___0, l_f___1) =>
	some__45recur12352778565155572164(root6487773350044236230(inner587139313701487279(l_a___0)), l_f___1)
// some@(symbol, string) file:///home/andy/keen/lib/col/map.keen 413:1
const some1178994941072263800 = (l_a___0, l_f___1) =>
	some__45recur11538375780992617217(root14825135577843310893(inner9157210413124376487(l_a___0)), l_f___1)
// some-recur@(symbol, json) file:///home/andy/keen/lib/col/map.keen 415:1
const some__45recur12352778565155572164 = (l_a___0, l_f___1) => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof frozen__45map12918844883644871653) ? some7006936601024607093(l_a___0, l_f___1) : ((x_matched___0 instanceof inner__45node5984648194967059355) ? some7317338605488611940(nodes17191235268232435376(l_a___0), l_it___2 =>
			some__45recur12352778565155572164(l_it___2, l_f___1)) : ((x_matched___0 instanceof Array) ? some12617336626473952259(l_a___0, l_f___1) : _unreachable()))))
}
// some-recur@(symbol, string) file:///home/andy/keen/lib/col/map.keen 415:1
const some__45recur11538375780992617217 = (l_a___0, l_f___1) => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof frozen__45map12255235111266041392) ? some662559339954925102(l_a___0, l_f___1) : ((x_matched___0 instanceof inner__45node199949891438391559) ? some10515253929151109667(nodes17813878019067808863(l_a___0), l_it___2 =>
			some__45recur11538375780992617217(l_it___2, l_f___1)) : ((x_matched___0 instanceof Array) ? some4456382396105079607(l_a___0, l_f___1) : _unreachable()))))
}
// some-recur@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/map.keen 415:1
const some__45recur4864664750052218471 = (l_a___0, l_f___1) => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof frozen__45map17330447661197982178) ? some3308616840624081180(l_a___0, l_f___1) : ((x_matched___0 instanceof inner__45node7440087989924078177) ? some8085394312162138150(nodes15617901467245700242(l_a___0), l_it___2 =>
			some__45recur4864664750052218471(l_it___2, l_f___1)) : ((x_matched___0 instanceof Array) ? some14079183715108909801(l_a___0, l_f___1) : _unreachable()))))
}
// new@(write) file:///home/andy/keen/lib/col/mut-array.keen 20:1
const new34054028022048475 = (l_backing___0, l_size__45and__45locked___1) =>
	new (mut__45array16197001839536043381)(l_backing___0, l_size__45and__45locked___1)
// new@(container) file:///home/andy/keen/lib/col/mut-array.keen 20:1
const new5205512998836768178 = (l_backing___0, l_size__45and__45locked___1) =>
	new (mut__45array9223221294599271429)(l_backing___0, l_size__45and__45locked___1)
// new@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 20:1
const new12791611598875387976 = (l_backing___0, l_size__45and__45locked___1) =>
	new (mut__45array15883105039927384425)(l_backing___0, l_size__45and__45locked___1)
// set-backing@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 23:5
const set__45backing16001982219133964312 = (l_a___0, l_backing___1) => {
	l_a___0.backing = l_backing___1
}
// backing@(container) file:///home/andy/keen/lib/col/mut-array.keen 23:5
const backing12250459608012383732 = l_a___0 =>
	l_a___0.backing
// set-backing@(write) file:///home/andy/keen/lib/col/mut-array.keen 23:5
const set__45backing13554053915986317395 = (l_a___0, l_backing___1) => {
	l_a___0.backing = l_backing___1
}
// backing@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 23:5
const backing11226434369964917313 = l_a___0 =>
	l_a___0.backing
// backing@(write) file:///home/andy/keen/lib/col/mut-array.keen 23:5
const backing13435497807709260059 = l_a___0 =>
	l_a___0.backing
// set-backing@(container) file:///home/andy/keen/lib/col/mut-array.keen 23:5
const set__45backing9466007772095454021 = (l_a___0, l_backing___1) => {
	l_a___0.backing = l_backing___1
}
// size-and-locked@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 24:5
const size__45and__45locked10753429291357246541 = l_a___0 =>
	l_a___0["size-and-locked"]
// set-size-and-locked@(write) file:///home/andy/keen/lib/col/mut-array.keen 24:5
const set__45size__45and__45locked6613409827376247225 = (l_a___0, l_size__45and__45locked___1) => {
	l_a___0["size-and-locked"] = l_size__45and__45locked___1
}
// size-and-locked@(write) file:///home/andy/keen/lib/col/mut-array.keen 24:5
const size__45and__45locked17974764582750471843 = l_a___0 =>
	l_a___0["size-and-locked"]
// size-and-locked@(container) file:///home/andy/keen/lib/col/mut-array.keen 24:5
const size__45and__45locked13754372555424806527 = l_a___0 =>
	l_a___0["size-and-locked"]
// set-size-and-locked@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 24:5
const set__45size__45and__45locked4934535547540675846 = (l_a___0, l_size__45and__45locked___1) => {
	l_a___0["size-and-locked"] = l_size__45and__45locked___1
}
// set-size-and-locked@(container) file:///home/andy/keen/lib/col/mut-array.keen 24:5
const set__45size__45and__45locked540755980346924077 = (l_a___0, l_size__45and__45locked___1) => {
	l_a___0["size-and-locked"] = l_size__45and__45locked___1
}
// assert-can-read@(container) file:///home/andy/keen/lib/col/mut-array.keen 46:1
const assert__45can__45read6200464036447702838 = l_a___0 => {
	if (can__45read17324845487725974868(l_a___0)) {
		(void 0)
	} else {
		throw was__45locked1163620713516753779()
	}
}
// assert-can-read@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 46:1
const assert__45can__45read7771808478475449596 = l_a___0 => {
	if (can__45read17080624761688802442(l_a___0)) {
		(void 0)
	} else {
		throw was__45locked1163620713516753779()
	}
}
// assert-can-read@(write) file:///home/andy/keen/lib/col/mut-array.keen 46:1
const assert__45can__45read11930020883128899178 = l_a___0 => {
	if (can__45read6452131378574084008(l_a___0)) {
		(void 0)
	} else {
		throw was__45locked1163620713516753779()
	}
}
// can-read@(write) file:///home/andy/keen/lib/col/mut-array.keen 48:1
const can__45read6452131378574084008 = l_a___0 =>
	Object.is((size__45and__45locked17974764582750471843(l_a___0) & top__45bit642561335718838851()), 0n)
// can-read@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 48:1
const can__45read17080624761688802442 = l_a___0 =>
	Object.is((size__45and__45locked10753429291357246541(l_a___0) & top__45bit642561335718838851()), 0n)
// can-read@(container) file:///home/andy/keen/lib/col/mut-array.keen 48:1
const can__45read17324845487725974868 = l_a___0 =>
	Object.is((size__45and__45locked13754372555424806527(l_a___0) & top__45bit642561335718838851()), 0n)
// assert-can-write@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 50:1
const assert__45can__45write5460238932577694528 = l_a___0 => {
	if (can__45write9500770310075097800(l_a___0)) {
		(void 0)
	} else {
		throw was__45locked1163620713516753779()
	}
}
// assert-can-write@(write) file:///home/andy/keen/lib/col/mut-array.keen 50:1
const assert__45can__45write6707263295467627877 = l_a___0 => {
	if (can__45write16258515375501865097(l_a___0)) {
		(void 0)
	} else {
		throw was__45locked1163620713516753779()
	}
}
// assert-can-write@(container) file:///home/andy/keen/lib/col/mut-array.keen 50:1
const assert__45can__45write8592600939843492843 = l_a___0 => {
	if (can__45write6975883008493693992(l_a___0)) {
		(void 0)
	} else {
		throw was__45locked1163620713516753779()
	}
}
// can-write@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 52:1
const can__45write9500770310075097800 = l_a___0 =>
	Object.is((size__45and__45locked10753429291357246541(l_a___0) & top__45two__45bits1033924631487567145()), 0n)
// can-write@(container) file:///home/andy/keen/lib/col/mut-array.keen 52:1
const can__45write6975883008493693992 = l_a___0 =>
	Object.is((size__45and__45locked13754372555424806527(l_a___0) & top__45two__45bits1033924631487567145()), 0n)
// can-write@(write) file:///home/andy/keen/lib/col/mut-array.keen 52:1
const can__45write16258515375501865097 = l_a___0 =>
	Object.is((size__45and__45locked17974764582750471843(l_a___0) & top__45two__45bits1033924631487567145()), 0n)
// top-bit file:///home/andy/keen/lib/col/mut-array.keen 55:1
const top__45bit642561335718838851 = () =>
	__60__6010136694790643423161(1n, 63n)
// top-two-bits file:///home/andy/keen/lib/col/mut-array.keen 60:1
const top__45two__45bits1033924631487567145 = () =>
	__60__6010136694790643423161(3n, 62n)
// is-empty@(container) file:///home/andy/keen/lib/col/mut-array.keen 64:1
const is__45empty16022283827309739344 = l_a___0 =>
	Object.is(size14517749307210698983(l_a___0), 0n)
// size@(container) file:///home/andy/keen/lib/col/mut-array.keen 67:1
const size14517749307210698983 = l_a___0 => {
	assert__45can__45read6200464036447702838(l_a___0)
	return (size__45and__45locked13754372555424806527(l_a___0) & 1152921504606846975n)
}
// size@(write) file:///home/andy/keen/lib/col/mut-array.keen 67:1
const size4108111086484111040 = l_a___0 => {
	assert__45can__45read11930020883128899178(l_a___0)
	return (size__45and__45locked17974764582750471843(l_a___0) & 1152921504606846975n)
}
// size@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 67:1
const size8954378871197361262 = l_a___0 => {
	assert__45can__45read7771808478475449596(l_a___0)
	return (size__45and__45locked10753429291357246541(l_a___0) & 1152921504606846975n)
}
// set-size@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 70:1
const set__45size18353414223462169657 = (l_a___0, l_size___1) => {
	assert__45can__45write5460238932577694528(l_a___0)
	set__45size__45and__45locked4934535547540675846(l_a___0, l_size___1)
}
// set-size@(container) file:///home/andy/keen/lib/col/mut-array.keen 70:1
const set__45size214049139304695900 = (l_a___0, l_size___1) => {
	assert__45can__45write8592600939843492843(l_a___0)
	set__45size__45and__45locked540755980346924077(l_a___0, l_size___1)
}
// set-size@(write) file:///home/andy/keen/lib/col/mut-array.keen 70:1
const set__45size1475337038230539160 = (l_a___0, l_size___1) => {
	assert__45can__45write6707263295467627877(l_a___0)
	set__45size__45and__45locked6613409827376247225(l_a___0, l_size___1)
}
// subscript@(container) file:///home/andy/keen/lib/col/mut-array.keen 74:1
const subscript12935626427853864777 = (l_a___0, l_index___1) => {
	check__45index11143681066835023574(l_a___0, l_index___1)
	return subscript10101980326416264607(backing12250459608012383732(l_a___0), l_index___1)
}
// subscript@(container) file:///home/andy/keen/lib/col/mut-array.keen 77:1
const subscript2508056794084842249 = (l_a___0, l_index___1) =>
	subscript12935626427853864777(l_a___0, to__45index10475341101703608214(l_a___0, l_index___1))
// set-subscript@(container) file:///home/andy/keen/lib/col/mut-array.keen 79:1
const set__45subscript11061870105065331966 = (l_a___0, l_index___1, l_value___2) => {
	assert__45can__45write8592600939843492843(l_a___0)
	check__45index11143681066835023574(l_a___0, l_index___1)
	set__45subscript17582272160129566442(backing12250459608012383732(l_a___0), l_index___1, l_value___2)
}
// list-new@(write) file:///home/andy/keen/lib/col/mut-array.keen 86:1
const list__45new17085285506804348843 = l_a___0 =>
	new34054028022048475(to8812442469789706448(l_a___0), BigInt(l_a___0.length))
// list-new@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 86:1
const list__45new14873167745082155644 = l_a___0 =>
	new12791611598875387976(to7433555355977436427(l_a___0), BigInt(l_a___0.length))
// list-new@(container) file:///home/andy/keen/lib/col/mut-array.keen 86:1
const list__45new16270892627368113124 = l_a___0 =>
	new5205512998836768178(to2145181676725057099(l_a___0), BigInt(l_a___0.length))
// move-to@(write) file:///home/andy/keen/lib/col/mut-array.keen 123:1
const move__45to10813684173798219350 = l_a___0 =>
	cast__45immutable13827858657026735903(move__45to18014698859608455540(l_a___0))
// move-to@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 123:1
const move__45to6134052159628344429 = l_a___0 =>
	cast__45immutable6716579314827176193(move__45to10621802449291567003(l_a___0))
// move-to@(write) file:///home/andy/keen/lib/col/mut-array.keen 125:1
const move__45to18014698859608455540 = l_a___0 => {
	assert__45can__45write6707263295467627877(l_a___0)
	const l_res___1 = (Object.is(BigInt(backing13435497807709260059(l_a___0).length), size4108111086484111040(l_a___0)) ? backing13435497807709260059(l_a___0) : with__45block12785756685867473902(build12971615191504386060(size4108111086484111040(l_a___0)), l_out___2 => {
			let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(0n, size4108111086484111040(l_a___0))
			while ((x_cur___0 < x_end___1)){
				const l_i___3 = x_cur___0
				__126__614551491732000135133(l_out___2, subscript8343901716697289946(backing13435497807709260059(l_a___0), l_i___3))
				x_cur___0 = (x_cur___0 + 1n)
			}
		}))
	set__45backing13554053915986317395(l_a___0, list__45new11528379970044086209(c____296()))
	set__45size1475337038230539160(l_a___0, 0n)
	return l_res___1
}
// move-to@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 125:1
const move__45to10621802449291567003 = l_a___0 => {
	assert__45can__45write5460238932577694528(l_a___0)
	const l_res___1 = (Object.is(BigInt(backing11226434369964917313(l_a___0).length), size8954378871197361262(l_a___0)) ? backing11226434369964917313(l_a___0) : with__45block12386006206508186956(build12971615191504386060(size8954378871197361262(l_a___0)), l_out___2 => {
			let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(0n, size8954378871197361262(l_a___0))
			while ((x_cur___0 < x_end___1)){
				const l_i___3 = x_cur___0
				__126__6112272457109475534170(l_out___2, subscript6773229619361593043(backing11226434369964917313(l_a___0), l_i___3))
				x_cur___0 = (x_cur___0 + 1n)
			}
		}))
	set__45backing16001982219133964312(l_a___0, list__45new9812965031301167447(c____258()))
	set__45size18353414223462169657(l_a___0, 0n)
	return l_res___1
}
// check-index@(container) file:///home/andy/keen/lib/col/mut-array.keen 160:1
const check__45index11143681066835023574 = (l_a___1, l_index___0) => {
	if (__6010307380702345989795(l_index___0, size14517749307210698983(l_a___1))) {
		(void 0)
	} else {
		throw index__45too__45big17082524477655533791(l_index___0, size14517749307210698983(l_a___1))
	}
}
// peek@(container) file:///home/andy/keen/lib/col/mut-array.keen 165:1
const peek3730836223819749536 = l_a___0 =>
	(is__45empty16022283827309739344(l_a___0) ? new (option8382729855974258299)(0, c____558()) : new (option8382729855974258299)(1, subscript2508056794084842249(l_a___0, __452101191994244905068(c____304(), 1n))))
// pop@(container) file:///home/andy/keen/lib/col/mut-array.keen 172:1
const pop5762832291804711118 = l_a___0 => {
	assert__45can__45write8592600939843492843(l_a___0)
	if (is__45empty16022283827309739344(l_a___0)) {
		return new (option8382729855974258299)(0, c____558())
	} else {
		const l_new__45size___1 = __459429596346129747750(size14517749307210698983(l_a___0), 1n)
		const l_res___2 = subscript12935626427853864777(l_a___0, l_new__45size___1)
		set__45subscript11061870105065331966(l_a___0, l_new__45size___1, null)
		set__45size214049139304695900(l_a___0, l_new__45size___1)
		return new (option8382729855974258299)(1, l_res___2)
	}
}
// ~=@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 222:1
const __126__6111546880776814955033 = (l_a___0, l_value___1) => {
	ensure__45room__45for__45one__45more5716460563619124463(l_a___0)
	set__45subscript2753674786437724068(backing11226434369964917313(l_a___0), size8954378871197361262(l_a___0), l_value___1)
	set__45size18353414223462169657(l_a___0, __431000895641751717785(size8954378871197361262(l_a___0), 1n))
}
// ~=@(container) file:///home/andy/keen/lib/col/mut-array.keen 222:1
const __126__6115042260835953553950 = (l_a___0, l_value___1) => {
	ensure__45room__45for__45one__45more17133036417923648681(l_a___0)
	set__45subscript17582272160129566442(backing12250459608012383732(l_a___0), size14517749307210698983(l_a___0), l_value___1)
	set__45size214049139304695900(l_a___0, __431000895641751717785(size14517749307210698983(l_a___0), 1n))
}
// ~=@(write) file:///home/andy/keen/lib/col/mut-array.keen 222:1
const __126__613999760345777666257 = (l_a___0, l_value___1) => {
	ensure__45room__45for__45one__45more8381517953807352031(l_a___0)
	set__45subscript1604259959832778482(backing13435497807709260059(l_a___0), size4108111086484111040(l_a___0), l_value___1)
	set__45size1475337038230539160(l_a___0, __431000895641751717785(size4108111086484111040(l_a___0), 1n))
}
// ensure-room-for-one-more@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 246:1
const ensure__45room__45for__45one__45more5716460563619124463 = l_a___0 => {
	assert__45can__45write5460238932577694528(l_a___0)
	;(Object.is(size8954378871197361262(l_a___0), BigInt(backing11226434369964917313(l_a___0).length)) ? ensure__45capacity__45round__45up1143153586559860484(l_a___0, __431000895641751717785(size8954378871197361262(l_a___0), 1n)) : (void 0))
}
// ensure-room-for-one-more@(container) file:///home/andy/keen/lib/col/mut-array.keen 246:1
const ensure__45room__45for__45one__45more17133036417923648681 = l_a___0 => {
	assert__45can__45write8592600939843492843(l_a___0)
	;(Object.is(size14517749307210698983(l_a___0), BigInt(backing12250459608012383732(l_a___0).length)) ? ensure__45capacity__45round__45up17358773029547315382(l_a___0, __431000895641751717785(size14517749307210698983(l_a___0), 1n)) : (void 0))
}
// ensure-room-for-one-more@(write) file:///home/andy/keen/lib/col/mut-array.keen 246:1
const ensure__45room__45for__45one__45more8381517953807352031 = l_a___0 => {
	assert__45can__45write6707263295467627877(l_a___0)
	;(Object.is(size4108111086484111040(l_a___0), BigInt(backing13435497807709260059(l_a___0).length)) ? ensure__45capacity__45round__45up14545912664163141684(l_a___0, __431000895641751717785(size4108111086484111040(l_a___0), 1n)) : (void 0))
}
// increase-capacity-to@(write) file:///home/andy/keen/lib/col/mut-array.keen 251:1
const increase__45capacity__45to9398129379324648066 = (l_a___1, l_new__45capacity___0) => {
	if (__625060923374247189753(l_new__45capacity___0, BigInt(backing13435497807709260059(l_a___1).length))) {
		const l_old__45backing___2 = backing13435497807709260059(l_a___1)
		set__45backing13554053915986317395(l_a___1, new (Array)(Number(l_new__45capacity___0)).fill(null))
		set__45subscript14860236310332733470(backing13435497807709260059(l_a___1), __46__467720007973451370645(0n, size4108111086484111040(l_a___1)), subscript4979193087136831612(l_old__45backing___2, __46__467720007973451370645(0n, size4108111086484111040(l_a___1))))
	} else {
		throw new (error14987278044892349075)(c____418())
	}
}
// increase-capacity-to@(container) file:///home/andy/keen/lib/col/mut-array.keen 251:1
const increase__45capacity__45to15047802660985647828 = (l_a___1, l_new__45capacity___0) => {
	if (__625060923374247189753(l_new__45capacity___0, BigInt(backing12250459608012383732(l_a___1).length))) {
		const l_old__45backing___2 = backing12250459608012383732(l_a___1)
		set__45backing9466007772095454021(l_a___1, new (Array)(Number(l_new__45capacity___0)).fill(null))
		set__45subscript3038677120867693051(backing12250459608012383732(l_a___1), __46__467720007973451370645(0n, size14517749307210698983(l_a___1)), subscript923745599977249697(l_old__45backing___2, __46__467720007973451370645(0n, size14517749307210698983(l_a___1))))
	} else {
		throw new (error14987278044892349075)(c____418())
	}
}
// increase-capacity-to@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 251:1
const increase__45capacity__45to13011818937183473106 = (l_a___1, l_new__45capacity___0) => {
	if (__625060923374247189753(l_new__45capacity___0, BigInt(backing11226434369964917313(l_a___1).length))) {
		const l_old__45backing___2 = backing11226434369964917313(l_a___1)
		set__45backing16001982219133964312(l_a___1, new (Array)(Number(l_new__45capacity___0)).fill(null))
		set__45subscript13024379930591495813(backing11226434369964917313(l_a___1), __46__467720007973451370645(0n, size8954378871197361262(l_a___1)), subscript15575604829903262476(l_old__45backing___2, __46__467720007973451370645(0n, size8954378871197361262(l_a___1))))
	} else {
		throw new (error14987278044892349075)(c____418())
	}
}
// ensure-capacity-round-up@(container) file:///home/andy/keen/lib/col/mut-array.keen 258:1
const ensure__45capacity__45round__45up17358773029547315382 = (l_a___0, l_min__45capacity___1) =>
	ensure__45capacity__45exact9584557636883167743(l_a___0, round__45up__45to__45power__45of__45two6348294377224655184(l_min__45capacity___1))
// ensure-capacity-round-up@(write) file:///home/andy/keen/lib/col/mut-array.keen 258:1
const ensure__45capacity__45round__45up14545912664163141684 = (l_a___0, l_min__45capacity___1) =>
	ensure__45capacity__45exact11381250806684908837(l_a___0, round__45up__45to__45power__45of__45two6348294377224655184(l_min__45capacity___1))
// ensure-capacity-round-up@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 258:1
const ensure__45capacity__45round__45up1143153586559860484 = (l_a___0, l_min__45capacity___1) =>
	ensure__45capacity__45exact16641712942055362485(l_a___0, round__45up__45to__45power__45of__45two6348294377224655184(l_min__45capacity___1))
// ensure-capacity-exact@(js-any) file:///home/andy/keen/lib/col/mut-array.keen 261:1
const ensure__45capacity__45exact16641712942055362485 = (l_a___0, l_min__45capacity___1) => {
	assert__45can__45write5460238932577694528(l_a___0)
	;(__6010307380702345989795(BigInt(backing11226434369964917313(l_a___0).length), l_min__45capacity___1) ? increase__45capacity__45to13011818937183473106(l_a___0, l_min__45capacity___1) : (void 0))
}
// ensure-capacity-exact@(container) file:///home/andy/keen/lib/col/mut-array.keen 261:1
const ensure__45capacity__45exact9584557636883167743 = (l_a___0, l_min__45capacity___1) => {
	assert__45can__45write8592600939843492843(l_a___0)
	;(__6010307380702345989795(BigInt(backing12250459608012383732(l_a___0).length), l_min__45capacity___1) ? increase__45capacity__45to15047802660985647828(l_a___0, l_min__45capacity___1) : (void 0))
}
// ensure-capacity-exact@(write) file:///home/andy/keen/lib/col/mut-array.keen 261:1
const ensure__45capacity__45exact11381250806684908837 = (l_a___0, l_min__45capacity___1) => {
	assert__45can__45write6707263295467627877(l_a___0)
	;(__6010307380702345989795(BigInt(backing13435497807709260059(l_a___0).length), l_min__45capacity___1) ? increase__45capacity__45to9398129379324648066(l_a___0, l_min__45capacity___1) : (void 0))
}
// new@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 18:1
const new1398414654174824827 = (l_locked___0, l_size____1, l_entries___2) =>
	new (mut__45map13355323242943736379)(l_locked___0, l_size____1, l_entries___2)
// new@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 18:1
const new7240257048379858409 = (l_locked___0, l_size____1, l_entries___2) =>
	new (mut__45map17052756008813012091)(l_locked___0, l_size____1, l_entries___2)
// new@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 18:1
const new5206906914329256135 = (l_locked___0, l_size____1, l_entries___2) =>
	new (mut__45map6550711960370863065)(l_locked___0, l_size____1, l_entries___2)
// new@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 18:1
const new2983398066069563859 = (l_locked___0, l_size____1, l_entries___2) =>
	new (mut__45map16880255461643360402)(l_locked___0, l_size____1, l_entries___2)
// locked@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 19:5
const locked14728808788806055773 = l_a___0 =>
	l_a___0.locked
// locked@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 19:5
const locked10099659801216846152 = l_a___0 =>
	l_a___0.locked
// locked@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 19:5
const locked10796998360851814890 = l_a___0 =>
	l_a___0.locked
// locked@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 19:5
const locked2769698004522914668 = l_a___0 =>
	l_a___0.locked
// set-size_@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 20:5
const set__45size_2102946483736456619 = (l_a___0, l_size____1) => {
	l_a___0.size_ = l_size____1
}
// set-size_@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 20:5
const set__45size_13882987973521121058 = (l_a___0, l_size____1) => {
	l_a___0.size_ = l_size____1
}
// size_@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 20:5
const size_3551930023590215893 = l_a___0 =>
	l_a___0.size_
// set-size_@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 20:5
const set__45size_15599900321417334274 = (l_a___0, l_size____1) => {
	l_a___0.size_ = l_size____1
}
// set-size_@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 20:5
const set__45size_14274793939654699172 = (l_a___0, l_size____1) => {
	l_a___0.size_ = l_size____1
}
// size_@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 20:5
const size_10803710455274821371 = l_a___0 =>
	l_a___0.size_
// size_@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 20:5
const size_15869947707210626139 = l_a___0 =>
	l_a___0.size_
// size_@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 20:5
const size_11779651824972291088 = l_a___0 =>
	l_a___0.size_
// entries@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 21:5
const entries3302066448168531752 = l_a___0 =>
	l_a___0.entries
// set-entries@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 21:5
const set__45entries15730329190429827361 = (l_a___0, l_entries___1) => {
	l_a___0.entries = l_entries___1
}
// set-entries@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 21:5
const set__45entries887480476199409613 = (l_a___0, l_entries___1) => {
	l_a___0.entries = l_entries___1
}
// set-entries@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 21:5
const set__45entries8707441302716624260 = (l_a___0, l_entries___1) => {
	l_a___0.entries = l_entries___1
}
// entries@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 21:5
const entries1266099478612490713 = l_a___0 =>
	l_a___0.entries
// set-entries@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 21:5
const set__45entries12653185814743297671 = (l_a___0, l_entries___1) => {
	l_a___0.entries = l_entries___1
}
// entries@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 21:5
const entries13828486512896018074 = l_a___0 =>
	l_a___0.entries
// entries@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 21:5
const entries13917532943516974035 = l_a___0 =>
	l_a___0.entries
// list-new@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 24:1
const list__45new16896646768212936853 = l_a___0 =>
	to7042386957627195339(l_a___0)
// list-new@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 24:1
const list__45new136611645598973979 = l_a___0 =>
	to7000812944496576280(l_a___0)
// list-new@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 24:1
const list__45new1690338353938863809 = l_a___0 =>
	to9770083799032597748(l_a___0)
// list-new@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 24:1
const list__45new9475043253826290789 = l_a___0 =>
	to8988770602907286524(l_a___0)
// mut-map-with-capacity@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 32:1
const mut__45map__45with__45capacity17604900272937259749 = l_capacity___0 =>
	new2983398066069563859(false, 0n, n__45of11049225662584343189(l_capacity___0, c____558()))
// mut-map-with-capacity@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 32:1
const mut__45map__45with__45capacity4147616691278392240 = l_capacity___0 =>
	new7240257048379858409(false, 0n, n__45of15955837396641139583(l_capacity___0, c____558()))
// mut-map-with-capacity@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 32:1
const mut__45map__45with__45capacity17179386754008846157 = l_capacity___0 =>
	new1398414654174824827(false, 0n, n__45of6710949406958341259(l_capacity___0, c____558()))
// mut-map-with-capacity@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 32:1
const mut__45map__45with__45capacity7235257549511714617 = l_capacity___0 =>
	new5206906914329256135(false, 0n, n__45of6870776905430143546(l_capacity___0, c____558()))
// to@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 37:1
const to7042386957627195339 = l_a___1 => {
	const l_out___0 = mut__45map__45with__45capacity4147616691278392240(BigInt(l_a___1.length))
	for (const l_x___2 of l_a___1) {
		__126__617264586994066272065(l_out___0, l_x___2)
	}
	return l_out___0
}
// to@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 37:1
const to9770083799032597748 = l_a___1 => {
	const l_out___0 = mut__45map__45with__45capacity17604900272937259749(BigInt(l_a___1.length))
	for (const l_x___2 of l_a___1) {
		__126__6113642187012231740503(l_out___0, l_x___2)
	}
	return l_out___0
}
// to@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 37:1
const to8988770602907286524 = l_a___1 => {
	const l_out___0 = mut__45map__45with__45capacity17179386754008846157(BigInt(l_a___1.length))
	for (const l_x___2 of l_a___1) {
		__126__615281869661632223615(l_out___0, l_x___2)
	}
	return l_out___0
}
// to@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 37:1
const to7000812944496576280 = l_a___1 => {
	const l_out___0 = mut__45map__45with__45capacity7235257549511714617(BigInt(l_a___1.length))
	for (const l_x___2 of l_a___1) {
		__126__612578333016659091467(l_out___0, l_x___2)
	}
	return l_out___0
}
// subscript@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 87:1
const subscript13619933128707826267 = (l_a___1, l_key___2) => {
	let l_temp___5, l_index___3, l_temp___0
	return ((l_temp___0 = get__45index11491468844597993050(entries13917532943516974035(l_a___1), l_key___2)) , ((l_index___3 = l_temp___0) , (((typeof l_temp___0) === "bigint") ? b2297566177032367872((() => {
			const l_member2___4 = subscript11318573161502620209(entries13917532943516974035(l_a___1), l_index___3)
			const x_matched___0 = l_member2___4
			if ((x_matched___0 instanceof none12752313651180151000)) {
				throw new (error14987278044892349075)(c____440())
			} else {
				if ((x_matched___0 instanceof tuple2996480197648150176)) {
					return ((l_temp___5 = l_member2___4) , l_temp___5)
				} else {
					return _unreachable()
				}
			}
		})()) : c____558())))
}
// subscript@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 87:1
const subscript353994119549764007 = (l_a___1, l_key___2) => {
	let l_temp___5, l_index___3, l_temp___0
	return ((l_temp___0 = get__45index17480563290956211235(entries3302066448168531752(l_a___1), l_key___2)) , ((l_index___3 = l_temp___0) , (((typeof l_temp___0) === "bigint") ? b7320525045178919377((() => {
			const l_member2___4 = subscript17769568730049911319(entries3302066448168531752(l_a___1), l_index___3)
			const x_matched___0 = l_member2___4
			if ((x_matched___0 instanceof none12752313651180151000)) {
				throw new (error14987278044892349075)(c____440())
			} else {
				if ((x_matched___0 instanceof tuple28221928096440926123)) {
					return ((l_temp___5 = l_member2___4) , l_temp___5)
				} else {
					return _unreachable()
				}
			}
		})()) : c____558())))
}
// subscript@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 87:1
const subscript11035535348380650903 = (l_a___1, l_key___2) => {
	let l_temp___5, l_index___3, l_temp___0
	return ((l_temp___0 = get__45index5151431572058450077(entries13828486512896018074(l_a___1), l_key___2)) , ((l_index___3 = l_temp___0) , (((typeof l_temp___0) === "bigint") ? b12799316035677851411((() => {
			const l_member2___4 = subscript9454272730545132376(entries13828486512896018074(l_a___1), l_index___3)
			const x_matched___0 = l_member2___4
			if ((x_matched___0 instanceof none12752313651180151000)) {
				throw new (error14987278044892349075)(c____440())
			} else {
				if ((x_matched___0 instanceof tuple210256334102407564326)) {
					return ((l_temp___5 = l_member2___4) , l_temp___5)
				} else {
					return _unreachable()
				}
			}
		})()) : c____558())))
}
// set-subscript@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 93:1
const set__45subscript1910673667124566829 = (l_a___0, l_key___2, l_value___4) => {
	let l_index___3, l_temp___1
	if (locked10796998360851814890(l_a___0)) {
		throw was__45locked1163620713516753779()
	} else {
		((l_temp___1 = get__45index17480563290956211235(entries3302066448168531752(l_a___0), l_key___2)) , ((l_index___3 = l_temp___1) , (((typeof l_temp___1) === "bigint") ? set__45subscript3971504643566504457(entries3302066448168531752(l_a___0), l_index___3, new2841691230671714966(l_key___2, l_value___4)) : must__45add9676943175238432351(l_a___0, l_key___2, l_value___4))))
	}
}
// set-subscript@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 93:1
const set__45subscript17390896262415053692 = (l_a___0, l_key___2, l_value___4) => {
	let l_index___3, l_temp___1
	if (locked10099659801216846152(l_a___0)) {
		throw was__45locked1163620713516753779()
	} else {
		((l_temp___1 = get__45index5151431572058450077(entries13828486512896018074(l_a___0), l_key___2)) , ((l_index___3 = l_temp___1) , (((typeof l_temp___1) === "bigint") ? set__45subscript14149303107754187177(entries13828486512896018074(l_a___0), l_index___3, new6649702605338581430(l_key___2, l_value___4)) : must__45add5295364142591233791(l_a___0, l_key___2, l_value___4))))
	}
}
// set-subscript@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 93:1
const set__45subscript7845334332166752318 = (l_a___0, l_key___2, l_value___4) => {
	let l_index___3, l_temp___1
	if (locked2769698004522914668(l_a___0)) {
		throw was__45locked1163620713516753779()
	} else {
		((l_temp___1 = get__45index1861208248118675512(entries1266099478612490713(l_a___0), l_key___2)) , ((l_index___3 = l_temp___1) , (((typeof l_temp___1) === "bigint") ? set__45subscript5696097553867002406(entries1266099478612490713(l_a___0), l_index___3, new10998768713586559663(l_key___2, l_value___4)) : must__45add6532943160907690436(l_a___0, l_key___2, l_value___4))))
	}
}
// set-subscript@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 93:1
const set__45subscript13772189362318970444 = (l_a___0, l_key___2, l_value___4) => {
	let l_index___3, l_temp___1
	if (locked14728808788806055773(l_a___0)) {
		throw was__45locked1163620713516753779()
	} else {
		((l_temp___1 = get__45index11491468844597993050(entries13917532943516974035(l_a___0), l_key___2)) , ((l_index___3 = l_temp___1) , (((typeof l_temp___1) === "bigint") ? set__45subscript617963672125780248(entries13917532943516974035(l_a___0), l_index___3, new17217374229703192151(l_key___2, l_value___4)) : must__45add14121376931546302777(l_a___0, l_key___2, l_value___4))))
	}
}
// remove@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 119:1
const remove18187661914701305496 = (l_a___0, l_key___2) => {
	let l_temp___6
	if (locked2769698004522914668(l_a___0)) {
		throw was__45locked1163620713516753779()
	} else {
		const l_temp___1 = get__45index1861208248118675512(entries1266099478612490713(l_a___0), l_key___2)
		const l_index___3 = l_temp___1
		if (((typeof l_temp___1) === "bigint")) {
			const l_value___4 = b9732658926027494587((() => {
					const l_member2___5 = subscript2575787253453640476(entries1266099478612490713(l_a___0), l_index___3)
					const x_matched___0 = l_member2___5
					if ((x_matched___0 instanceof none12752313651180151000)) {
						throw new (error14987278044892349075)(c____440())
					} else {
						if ((x_matched___0 instanceof tuple212663747997492605280)) {
							return ((l_temp___6 = l_member2___5) , l_temp___6)
						} else {
							return _unreachable()
						}
					}
				})())
			remove__45at__45index16756016402498431456(l_a___0, l_index___3)
			return l_value___4
		} else {
			return c____558()
		}
	}
}
// remove-at-index@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 126:1
const remove__45at__45index16756016402498431456 = (l_a___2, l_index___1) => {
	let l_hole___0 = l_index___1
	set__45subscript5696097553867002406(entries1266099478612490713(l_a___2), l_hole___0, c____558())
	let l_from___3 = next__45index11258280562031728355(l_index___1, entries1266099478612490713(l_a___2))
	x_loop___0: while (true){
		const l_temp___4 = subscript2575787253453640476(entries1266099478612490713(l_a___2), l_from___3)
		const l_key___5 = ((l_temp___4 instanceof tuple212663747997492605280) ? l_temp___4.a : c____558())
		if ((l_temp___4 instanceof tuple212663747997492605280)) {
			const l_key__45desired__45index___6 = __376728767376110028882(seeded__45hash6320026335509711958(l_key___5), BigInt(entries1266099478612490713(l_a___2).length))
			if (__6010307380702345989795(walk__45distance15432641472777396968(entries1266099478612490713(l_a___2), l_key__45desired__45index___6, l_hole___0), walk__45distance15432641472777396968(entries1266099478612490713(l_a___2), l_key__45desired__45index___6, l_from___3))) {
				swap14951315430081133582(entries1266099478612490713(l_a___2), l_hole___0, l_from___3)
				l_hole___0 = l_from___3
			} else {
				(void 0)
			}
			l_from___3 = next__45index11258280562031728355(l_from___3, entries1266099478612490713(l_a___2))
			continue
		} else {
			(void 0)
			break  x_loop___0
		}
	}
	set__45size_2102946483736456619(l_a___2, __459429596346129747750(size_11779651824972291088(l_a___2), 1n))
}
// must-add@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 157:1
const must__45add6532943160907690436 = (l_a___0, l_key___1, l_value___2) => {
	(should__45expand__45before__45add9902714052557159285(l_a___0) ? do__45expand6653320903886274194(l_a___0) : (void 0))
	set__45size_2102946483736456619(l_a___0, __431000895641751717785(size_11779651824972291088(l_a___0), 1n))
	must__45add__45to__45entries4429451801438789329(entries1266099478612490713(l_a___0), l_key___1, l_value___2)
}
// must-add@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 157:1
const must__45add14121376931546302777 = (l_a___0, l_key___1, l_value___2) => {
	(should__45expand__45before__45add10554197710269212166(l_a___0) ? do__45expand11120254300893931791(l_a___0) : (void 0))
	set__45size_14274793939654699172(l_a___0, __431000895641751717785(size_3551930023590215893(l_a___0), 1n))
	must__45add__45to__45entries15966570912387141746(entries13917532943516974035(l_a___0), l_key___1, l_value___2)
}
// must-add@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 157:1
const must__45add9676943175238432351 = (l_a___0, l_key___1, l_value___2) => {
	(should__45expand__45before__45add17893103266045079476(l_a___0) ? do__45expand15299734058081201829(l_a___0) : (void 0))
	set__45size_15599900321417334274(l_a___0, __431000895641751717785(size_15869947707210626139(l_a___0), 1n))
	must__45add__45to__45entries14576627158820886784(entries3302066448168531752(l_a___0), l_key___1, l_value___2)
}
// must-add@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 157:1
const must__45add5295364142591233791 = (l_a___0, l_key___1, l_value___2) => {
	(should__45expand__45before__45add8960626107476403156(l_a___0) ? do__45expand8723759559441266757(l_a___0) : (void 0))
	set__45size_13882987973521121058(l_a___0, __431000895641751717785(size_10803710455274821371(l_a___0), 1n))
	must__45add__45to__45entries9056278848077877024(entries13828486512896018074(l_a___0), l_key___1, l_value___2)
}
// must-add-to-entries@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 163:1
const must__45add__45to__45entries14576627158820886784 = (l_entries___5, l_initial__45key___1, l_initial__45value___3) => {
	let l_key___0 = l_initial__45key___1
	let l_value___2 = l_initial__45value___3
	let l_index___4 = ideal__45index8808147589246870785(l_key___0, BigInt(l_entries___5.length))
	let l_my__45cost___6 = 0n
	x_loop___0: while (true){
		const l_temp___7 = subscript17769568730049911319(l_entries___5, l_index___4)
		const l_existing__45key___8 = ((l_temp___7 instanceof tuple28221928096440926123) ? l_temp___7.a : c____558())
		const l_existing__45value___9 = ((l_temp___7 instanceof tuple28221928096440926123) ? l_temp___7.b : c____558())
		if ((l_temp___7 instanceof tuple28221928096440926123)) {
			if (__61__613700936344027211856(l_existing__45key___8, l_key___0)) {
				throw new (error14987278044892349075)(c____361())
			} else {
				const l_its__45cost___10 = cost4273686239507859741(l_entries___5, l_existing__45key___8, l_index___4)
				if (__625060923374247189753(l_my__45cost___6, l_its__45cost___10)) {
					set__45subscript3971504643566504457(l_entries___5, l_index___4, new2841691230671714966(l_key___0, l_value___2))
					l_key___0 = l_existing__45key___8
					l_value___2 = l_existing__45value___9
					l_my__45cost___6 = l_its__45cost___10
				} else {
					(void 0)
				}
				l_index___4 = next__45index1952200477999250714(l_index___4, l_entries___5)
				l_my__45cost___6 = __431000895641751717785(l_my__45cost___6, 1n)
			}
			continue
		} else {
			(void 0)
			break  x_loop___0
		}
	}
	set__45subscript3971504643566504457(l_entries___5, l_index___4, new2841691230671714966(l_key___0, l_value___2))
}
// must-add-to-entries@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 163:1
const must__45add__45to__45entries15966570912387141746 = (l_entries___5, l_initial__45key___1, l_initial__45value___3) => {
	let l_key___0 = l_initial__45key___1
	let l_value___2 = l_initial__45value___3
	let l_index___4 = ideal__45index9983072750784934411(l_key___0, BigInt(l_entries___5.length))
	let l_my__45cost___6 = 0n
	x_loop___0: while (true){
		const l_temp___7 = subscript11318573161502620209(l_entries___5, l_index___4)
		const l_existing__45key___8 = ((l_temp___7 instanceof tuple2996480197648150176) ? l_temp___7.a : c____558())
		const l_existing__45value___9 = ((l_temp___7 instanceof tuple2996480197648150176) ? (() => {
			(void l_temp___7)
			;(void 0)
		})() : c____558())
		if ((l_temp___7 instanceof tuple2996480197648150176)) {
			if (__61__618774367296004624587(l_existing__45key___8, l_key___0)) {
				throw new (error14987278044892349075)(c____361())
			} else {
				const l_its__45cost___10 = cost5222754449959588551(l_entries___5, l_existing__45key___8, l_index___4)
				if (__625060923374247189753(l_my__45cost___6, l_its__45cost___10)) {
					set__45subscript617963672125780248(l_entries___5, l_index___4, new17217374229703192151(l_key___0, l_value___2))
					l_key___0 = l_existing__45key___8
					l_value___2 = l_existing__45value___9
					l_my__45cost___6 = l_its__45cost___10
				} else {
					(void 0)
				}
				l_index___4 = next__45index2330335937341654524(l_index___4, l_entries___5)
				l_my__45cost___6 = __431000895641751717785(l_my__45cost___6, 1n)
			}
			continue
		} else {
			(void 0)
			break  x_loop___0
		}
	}
	set__45subscript617963672125780248(l_entries___5, l_index___4, new17217374229703192151(l_key___0, l_value___2))
}
// must-add-to-entries@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 163:1
const must__45add__45to__45entries9056278848077877024 = (l_entries___5, l_initial__45key___1, l_initial__45value___3) => {
	let l_key___0 = l_initial__45key___1
	let l_value___2 = l_initial__45value___3
	let l_index___4 = ideal__45index8808147589246870785(l_key___0, BigInt(l_entries___5.length))
	let l_my__45cost___6 = 0n
	x_loop___0: while (true){
		const l_temp___7 = subscript9454272730545132376(l_entries___5, l_index___4)
		const l_existing__45key___8 = ((l_temp___7 instanceof tuple210256334102407564326) ? l_temp___7.a : c____558())
		const l_existing__45value___9 = ((l_temp___7 instanceof tuple210256334102407564326) ? l_temp___7.b : c____558())
		if ((l_temp___7 instanceof tuple210256334102407564326)) {
			if (__61__613700936344027211856(l_existing__45key___8, l_key___0)) {
				throw new (error14987278044892349075)(c____361())
			} else {
				const l_its__45cost___10 = cost6363053812216055969(l_entries___5, l_existing__45key___8, l_index___4)
				if (__625060923374247189753(l_my__45cost___6, l_its__45cost___10)) {
					set__45subscript14149303107754187177(l_entries___5, l_index___4, new6649702605338581430(l_key___0, l_value___2))
					l_key___0 = l_existing__45key___8
					l_value___2 = l_existing__45value___9
					l_my__45cost___6 = l_its__45cost___10
				} else {
					(void 0)
				}
				l_index___4 = next__45index431143465872857621(l_index___4, l_entries___5)
				l_my__45cost___6 = __431000895641751717785(l_my__45cost___6, 1n)
			}
			continue
		} else {
			(void 0)
			break  x_loop___0
		}
	}
	set__45subscript14149303107754187177(l_entries___5, l_index___4, new6649702605338581430(l_key___0, l_value___2))
}
// must-add-to-entries@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 163:1
const must__45add__45to__45entries4429451801438789329 = (l_entries___5, l_initial__45key___1, l_initial__45value___3) => {
	let l_key___0 = l_initial__45key___1
	let l_value___2 = l_initial__45value___3
	let l_index___4 = ideal__45index6332877121567398334(l_key___0, BigInt(l_entries___5.length))
	let l_my__45cost___6 = 0n
	x_loop___0: while (true){
		const l_temp___7 = subscript2575787253453640476(l_entries___5, l_index___4)
		const l_existing__45key___8 = ((l_temp___7 instanceof tuple212663747997492605280) ? l_temp___7.a : c____558())
		const l_existing__45value___9 = ((l_temp___7 instanceof tuple212663747997492605280) ? l_temp___7.b : c____558())
		if ((l_temp___7 instanceof tuple212663747997492605280)) {
			if (Object.is(l_existing__45key___8, l_key___0)) {
				throw new (error14987278044892349075)(c____361())
			} else {
				const l_its__45cost___10 = cost15961793039149305770(l_entries___5, l_existing__45key___8, l_index___4)
				if (__625060923374247189753(l_my__45cost___6, l_its__45cost___10)) {
					set__45subscript5696097553867002406(l_entries___5, l_index___4, new10998768713586559663(l_key___0, l_value___2))
					l_key___0 = l_existing__45key___8
					l_value___2 = l_existing__45value___9
					l_my__45cost___6 = l_its__45cost___10
				} else {
					(void 0)
				}
				l_index___4 = next__45index11258280562031728355(l_index___4, l_entries___5)
				l_my__45cost___6 = __431000895641751717785(l_my__45cost___6, 1n)
			}
			continue
		} else {
			(void 0)
			break  x_loop___0
		}
	}
	set__45subscript5696097553867002406(l_entries___5, l_index___4, new10998768713586559663(l_key___0, l_value___2))
}
// cost@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 180:1
const cost5222754449959588551 = (l_entries___0, l_key___1, l_actual__45index___2) =>
	walk__45distance3286254965920797005(l_entries___0, ideal__45index9983072750784934411(l_key___1, BigInt(l_entries___0.length)), l_actual__45index___2)
// cost@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 180:1
const cost6363053812216055969 = (l_entries___0, l_key___1, l_actual__45index___2) =>
	walk__45distance1095135607958184782(l_entries___0, ideal__45index8808147589246870785(l_key___1, BigInt(l_entries___0.length)), l_actual__45index___2)
// cost@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 180:1
const cost4273686239507859741 = (l_entries___0, l_key___1, l_actual__45index___2) =>
	walk__45distance13713349503009072019(l_entries___0, ideal__45index8808147589246870785(l_key___1, BigInt(l_entries___0.length)), l_actual__45index___2)
// cost@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 180:1
const cost15961793039149305770 = (l_entries___0, l_key___1, l_actual__45index___2) =>
	walk__45distance15432641472777396968(l_entries___0, ideal__45index6332877121567398334(l_key___1, BigInt(l_entries___0.length)), l_actual__45index___2)
// ideal-index@(string) file:///home/andy/keen/lib/col/mut-map.keen 183:1
const ideal__45index9983072750784934411 = (l_key___0, l_array__45size___1) =>
	__376728767376110028882(seeded__45hash18372390626742224707(l_key___0), l_array__45size___1)
// ideal-index@(nat64) file:///home/andy/keen/lib/col/mut-map.keen 183:1
const ideal__45index6332877121567398334 = (l_key___0, l_array__45size___1) =>
	__376728767376110028882(seeded__45hash6320026335509711958(l_key___0), l_array__45size___1)
// ideal-index@(uri) file:///home/andy/keen/lib/col/mut-map.keen 183:1
const ideal__45index8808147589246870785 = (l_key___0, l_array__45size___1) =>
	__376728767376110028882(seeded__45hash2293041488785028857(l_key___0), l_array__45size___1)
// ~=@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 188:1
const __126__6113642187012231740503 = (l_a___3, l_destruct___1) => {
	let l_key___2, l_value___0
	return ((l_value___0 = l_destruct___1.b) , ((l_key___2 = l_destruct___1.a) , set__45subscript1910673667124566829(l_a___3, l_key___2, l_value___0)))
}
// ~=@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 188:1
const __126__615281869661632223615 = (l_a___3, l_destruct___1) => {
	let l_key___2, l_value___0
	return ((l_value___0 = l_destruct___1.b) , ((l_key___2 = l_destruct___1.a) , set__45subscript7845334332166752318(l_a___3, l_key___2, l_value___0)))
}
// ~=@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 188:1
const __126__617264586994066272065 = (l_a___3, l_destruct___1) => {
	let l_key___2, l_value___0
	return ((l_value___0 = (() => {
		(void l_destruct___1)
		;(void 0)
	})()) , ((l_key___2 = l_destruct___1.a) , set__45subscript13772189362318970444(l_a___3, l_key___2, l_value___0)))
}
// ~=@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 188:1
const __126__612578333016659091467 = (l_a___3, l_destruct___1) => {
	let l_key___2, l_value___0
	return ((l_value___0 = l_destruct___1.b) , ((l_key___2 = l_destruct___1.a) , set__45subscript17390896262415053692(l_a___3, l_key___2, l_value___0)))
}
// get-index@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 195:1
const get__45index11491468844597993050 = (l_entries___0, l_key___2) => {
	if (is__45empty13462983688160375810(l_entries___0)) {
		return c____558()
	} else {
		const l_start__45i___1 = ideal__45index9983072750784934411(l_key___2, BigInt(l_entries___0.length))
		let l_i___3 = l_start__45i___1
		while (true){
			const l_temp___4 = (() => {
				const l_temp___5 = subscript11318573161502620209(l_entries___0, l_i___3)
				const l_k___6 = ((l_temp___5 instanceof tuple2996480197648150176) ? l_temp___5.a : c____558())
				if ((l_temp___5 instanceof tuple2996480197648150176)) {
					if (__61__618774367296004624587(l_key___2, l_k___6)) {
						return new (option10694819152045853148)(1, l_i___3)
					} else {
						l_i___3 = next__45index2330335937341654524(l_i___3, l_entries___0)
						return (Object.is(l_i___3, l_start__45i___1) ? new (option10694819152045853148)(1, c____558()) : new (option10694819152045853148)(0, c____558()))
					}
				} else {
					return new (option10694819152045853148)(1, c____558())
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
	}
}
// get-index@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 195:1
const get__45index5151431572058450077 = (l_entries___0, l_key___2) => {
	if (is__45empty15692532838056652516(l_entries___0)) {
		return c____558()
	} else {
		const l_start__45i___1 = ideal__45index8808147589246870785(l_key___2, BigInt(l_entries___0.length))
		let l_i___3 = l_start__45i___1
		while (true){
			const l_temp___4 = (() => {
				const l_temp___5 = subscript9454272730545132376(l_entries___0, l_i___3)
				const l_k___6 = ((l_temp___5 instanceof tuple210256334102407564326) ? l_temp___5.a : c____558())
				if ((l_temp___5 instanceof tuple210256334102407564326)) {
					if (__61__613700936344027211856(l_key___2, l_k___6)) {
						return new (option10694819152045853148)(1, l_i___3)
					} else {
						l_i___3 = next__45index431143465872857621(l_i___3, l_entries___0)
						return (Object.is(l_i___3, l_start__45i___1) ? new (option10694819152045853148)(1, c____558()) : new (option10694819152045853148)(0, c____558()))
					}
				} else {
					return new (option10694819152045853148)(1, c____558())
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
	}
}
// get-index@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 195:1
const get__45index1861208248118675512 = (l_entries___0, l_key___2) => {
	if (is__45empty5258263102325580414(l_entries___0)) {
		return c____558()
	} else {
		const l_start__45i___1 = ideal__45index6332877121567398334(l_key___2, BigInt(l_entries___0.length))
		let l_i___3 = l_start__45i___1
		while (true){
			const l_temp___4 = (() => {
				const l_temp___5 = subscript2575787253453640476(l_entries___0, l_i___3)
				const l_k___6 = ((l_temp___5 instanceof tuple212663747997492605280) ? l_temp___5.a : c____558())
				if ((l_temp___5 instanceof tuple212663747997492605280)) {
					if (Object.is(l_key___2, l_k___6)) {
						return new (option10694819152045853148)(1, l_i___3)
					} else {
						l_i___3 = next__45index11258280562031728355(l_i___3, l_entries___0)
						return (Object.is(l_i___3, l_start__45i___1) ? new (option10694819152045853148)(1, c____558()) : new (option10694819152045853148)(0, c____558()))
					}
				} else {
					return new (option10694819152045853148)(1, c____558())
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
	}
}
// get-index@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 195:1
const get__45index17480563290956211235 = (l_entries___0, l_key___2) => {
	if (is__45empty422007899288351504(l_entries___0)) {
		return c____558()
	} else {
		const l_start__45i___1 = ideal__45index8808147589246870785(l_key___2, BigInt(l_entries___0.length))
		let l_i___3 = l_start__45i___1
		while (true){
			const l_temp___4 = (() => {
				const l_temp___5 = subscript17769568730049911319(l_entries___0, l_i___3)
				const l_k___6 = ((l_temp___5 instanceof tuple28221928096440926123) ? l_temp___5.a : c____558())
				if ((l_temp___5 instanceof tuple28221928096440926123)) {
					if (__61__613700936344027211856(l_key___2, l_k___6)) {
						return new (option10694819152045853148)(1, l_i___3)
					} else {
						l_i___3 = next__45index1952200477999250714(l_i___3, l_entries___0)
						return (Object.is(l_i___3, l_start__45i___1) ? new (option10694819152045853148)(1, c____558()) : new (option10694819152045853148)(0, c____558()))
					}
				} else {
					return new (option10694819152045853148)(1, c____558())
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
	}
}
// next-index@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/mut-map.keen 207:1
const next__45index431143465872857621 = (l_index___1, l_array___2) => {
	let l_res___0
	return ((l_res___0 = __431000895641751717785(l_index___1, 1n)) , (Object.is(l_res___0, BigInt(l_array___2.length)) ? 0n : l_res___0))
}
// next-index@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/mut-map.keen 207:1
const next__45index1952200477999250714 = (l_index___1, l_array___2) => {
	let l_res___0
	return ((l_res___0 = __431000895641751717785(l_index___1, 1n)) , (Object.is(l_res___0, BigInt(l_array___2.length)) ? 0n : l_res___0))
}
// next-index@((string, void) tuple2 option) file:///home/andy/keen/lib/col/mut-map.keen 207:1
const next__45index2330335937341654524 = (l_index___1, l_array___2) => {
	let l_res___0
	return ((l_res___0 = __431000895641751717785(l_index___1, 1n)) , (Object.is(l_res___0, BigInt(l_array___2.length)) ? 0n : l_res___0))
}
// next-index@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/mut-map.keen 207:1
const next__45index11258280562031728355 = (l_index___1, l_array___2) => {
	let l_res___0
	return ((l_res___0 = __431000895641751717785(l_index___1, 1n)) , (Object.is(l_res___0, BigInt(l_array___2.length)) ? 0n : l_res___0))
}
// walk-distance@((string, void) tuple2 option) file:///home/andy/keen/lib/col/mut-map.keen 215:1
const walk__45distance3286254965920797005 = (l_entries___2, l_from___0, l_to___1) =>
	(__60__616269385802849585881(l_from___0, l_to___1) ? __459429596346129747750(l_to___1, l_from___0) : __459429596346129747750(__431000895641751717785(BigInt(l_entries___2.length), l_to___1), l_from___0))
// walk-distance@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/mut-map.keen 215:1
const walk__45distance15432641472777396968 = (l_entries___2, l_from___0, l_to___1) =>
	(__60__616269385802849585881(l_from___0, l_to___1) ? __459429596346129747750(l_to___1, l_from___0) : __459429596346129747750(__431000895641751717785(BigInt(l_entries___2.length), l_to___1), l_from___0))
// walk-distance@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/mut-map.keen 215:1
const walk__45distance1095135607958184782 = (l_entries___2, l_from___0, l_to___1) =>
	(__60__616269385802849585881(l_from___0, l_to___1) ? __459429596346129747750(l_to___1, l_from___0) : __459429596346129747750(__431000895641751717785(BigInt(l_entries___2.length), l_to___1), l_from___0))
// walk-distance@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/mut-map.keen 215:1
const walk__45distance13713349503009072019 = (l_entries___2, l_from___0, l_to___1) =>
	(__60__616269385802849585881(l_from___0, l_to___1) ? __459429596346129747750(l_to___1, l_from___0) : __459429596346129747750(__431000895641751717785(BigInt(l_entries___2.length), l_to___1), l_from___0))
// should-expand-before-add@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 221:1
const should__45expand__45before__45add8960626107476403156 = l_a___0 =>
	(__60__616269385802849585881(size_10803710455274821371(l_a___0), 8n) ? Object.is(size_10803710455274821371(l_a___0), BigInt(entries13828486512896018074(l_a___0).length)) : __62__618892781134906463570(__473463626361574020402(__4210985385519932138510(size_10803710455274821371(l_a___0), 4n), 3n), BigInt(entries13828486512896018074(l_a___0).length)))
// should-expand-before-add@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 221:1
const should__45expand__45before__45add17893103266045079476 = l_a___0 =>
	(__60__616269385802849585881(size_15869947707210626139(l_a___0), 8n) ? Object.is(size_15869947707210626139(l_a___0), BigInt(entries3302066448168531752(l_a___0).length)) : __62__618892781134906463570(__473463626361574020402(__4210985385519932138510(size_15869947707210626139(l_a___0), 4n), 3n), BigInt(entries3302066448168531752(l_a___0).length)))
// should-expand-before-add@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 221:1
const should__45expand__45before__45add9902714052557159285 = l_a___0 =>
	(__60__616269385802849585881(size_11779651824972291088(l_a___0), 8n) ? Object.is(size_11779651824972291088(l_a___0), BigInt(entries1266099478612490713(l_a___0).length)) : __62__618892781134906463570(__473463626361574020402(__4210985385519932138510(size_11779651824972291088(l_a___0), 4n), 3n), BigInt(entries1266099478612490713(l_a___0).length)))
// should-expand-before-add@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 221:1
const should__45expand__45before__45add10554197710269212166 = l_a___0 =>
	(__60__616269385802849585881(size_3551930023590215893(l_a___0), 8n) ? Object.is(size_3551930023590215893(l_a___0), BigInt(entries13917532943516974035(l_a___0).length)) : __62__618892781134906463570(__473463626361574020402(__4210985385519932138510(size_3551930023590215893(l_a___0), 4n), 3n), BigInt(entries13917532943516974035(l_a___0).length)))
// do-expand@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 227:1
const do__45expand11120254300893931791 = l_a___0 =>
	expand__45to__45capacity15874416858875511752(l_a___0, (__6010307380702345989795(BigInt(entries13917532943516974035(l_a___0).length), 2n) ? 2n : __4210985385519932138510(BigInt(entries13917532943516974035(l_a___0).length), 2n)))
// do-expand@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 227:1
const do__45expand15299734058081201829 = l_a___0 =>
	expand__45to__45capacity2338170520062243014(l_a___0, (__6010307380702345989795(BigInt(entries3302066448168531752(l_a___0).length), 2n) ? 2n : __4210985385519932138510(BigInt(entries3302066448168531752(l_a___0).length), 2n)))
// do-expand@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 227:1
const do__45expand8723759559441266757 = l_a___0 =>
	expand__45to__45capacity9510252145328809655(l_a___0, (__6010307380702345989795(BigInt(entries13828486512896018074(l_a___0).length), 2n) ? 2n : __4210985385519932138510(BigInt(entries13828486512896018074(l_a___0).length), 2n)))
// do-expand@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 227:1
const do__45expand6653320903886274194 = l_a___0 =>
	expand__45to__45capacity16541204223699339556(l_a___0, (__6010307380702345989795(BigInt(entries1266099478612490713(l_a___0).length), 2n) ? 2n : __4210985385519932138510(BigInt(entries1266099478612490713(l_a___0).length), 2n)))
// expand-to-capacity@(string, void) file:///home/andy/keen/lib/col/mut-map.keen 230:1
const expand__45to__45capacity15874416858875511752 = (l_a___2, l_new__45capacity___1) => {
	let l_v___6, l_k___5, l_temp___4
	const l_new__45entries___0 = n__45of15955837396641139583(l_new__45capacity___1, c____558())
	for (const l_e___3 of entries13917532943516974035(l_a___2)) {
		((l_temp___4 = l_e___3) , ((l_k___5 = ((l_temp___4 instanceof tuple2996480197648150176) ? l_temp___4.a : c____558())) , ((l_v___6 = ((l_temp___4 instanceof tuple2996480197648150176) ? (() => {
			(void l_temp___4)
			;(void 0)
		})() : c____558())) , ((l_temp___4 instanceof tuple2996480197648150176) ? must__45add__45to__45entries15966570912387141746(l_new__45entries___0, l_k___5, l_v___6) : (void 0)))))
	}
	set__45entries15730329190429827361(l_a___2, l_new__45entries___0)
}
// expand-to-capacity@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/col/mut-map.keen 230:1
const expand__45to__45capacity9510252145328809655 = (l_a___2, l_new__45capacity___1) => {
	let l_v___6, l_k___5, l_temp___4
	const l_new__45entries___0 = n__45of6870776905430143546(l_new__45capacity___1, c____558())
	for (const l_e___3 of entries13828486512896018074(l_a___2)) {
		((l_temp___4 = l_e___3) , ((l_k___5 = ((l_temp___4 instanceof tuple210256334102407564326) ? l_temp___4.a : c____558())) , ((l_v___6 = ((l_temp___4 instanceof tuple210256334102407564326) ? l_temp___4.b : c____558())) , ((l_temp___4 instanceof tuple210256334102407564326) ? must__45add__45to__45entries9056278848077877024(l_new__45entries___0, l_k___5, l_v___6) : (void 0)))))
	}
	set__45entries8707441302716624260(l_a___2, l_new__45entries___0)
}
// expand-to-capacity@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/col/mut-map.keen 230:1
const expand__45to__45capacity2338170520062243014 = (l_a___2, l_new__45capacity___1) => {
	let l_v___6, l_k___5, l_temp___4
	const l_new__45entries___0 = n__45of11049225662584343189(l_new__45capacity___1, c____558())
	for (const l_e___3 of entries3302066448168531752(l_a___2)) {
		((l_temp___4 = l_e___3) , ((l_k___5 = ((l_temp___4 instanceof tuple28221928096440926123) ? l_temp___4.a : c____558())) , ((l_v___6 = ((l_temp___4 instanceof tuple28221928096440926123) ? l_temp___4.b : c____558())) , ((l_temp___4 instanceof tuple28221928096440926123) ? must__45add__45to__45entries14576627158820886784(l_new__45entries___0, l_k___5, l_v___6) : (void 0)))))
	}
	set__45entries12653185814743297671(l_a___2, l_new__45entries___0)
}
// expand-to-capacity@(nat64, json deferred) file:///home/andy/keen/lib/col/mut-map.keen 230:1
const expand__45to__45capacity16541204223699339556 = (l_a___2, l_new__45capacity___1) => {
	let l_v___6, l_k___5, l_temp___4
	const l_new__45entries___0 = n__45of6710949406958341259(l_new__45capacity___1, c____558())
	for (const l_e___3 of entries1266099478612490713(l_a___2)) {
		((l_temp___4 = l_e___3) , ((l_k___5 = ((l_temp___4 instanceof tuple212663747997492605280) ? l_temp___4.a : c____558())) , ((l_v___6 = ((l_temp___4 instanceof tuple212663747997492605280) ? l_temp___4.b : c____558())) , ((l_temp___4 instanceof tuple212663747997492605280) ? must__45add__45to__45entries4429451801438789329(l_new__45entries___0, l_k___5, l_v___6) : (void 0)))))
	}
	set__45entries887480476199409613(l_a___2, l_new__45entries___0)
}
// new@(string) file:///home/andy/keen/lib/col/mut-set.keen 14:1
const new547108333150021476 = l_inner___0 =>
	new (mut__45set15935972040150848162)(l_inner___0)
// inner@(string) file:///home/andy/keen/lib/col/mut-set.keen 15:5
const inner8765292113105816942 = l_a___0 =>
	l_a___0.inner
// list-new@(string) file:///home/andy/keen/lib/col/mut-set.keen 17:1
const list__45new8758761107204814534 = l_a___0 =>
	to6313327153994455759(l_a___0)
// to@(string) file:///home/andy/keen/lib/col/mut-set.keen 35:1
const to6313327153994455759 = l_a___1 => {
	const l_res___0 = new547108333150021476(list__45new16896646768212936853(c____298()))
	for (const l_x___2 of l_a___1) {
		__126__6115490001894066517056(l_res___0, l_x___2)
	}
	return l_res___0
}
// ~=@(string) file:///home/andy/keen/lib/col/mut-set.keen 59:1
const __126__6115490001894066517056 = (l_a___0, l_value___1) =>
	__126__617264586994066272065(inner8765292113105816942(l_a___0), new17217374229703192151(l_value___1, (void 0)))
// subscript@(string) file:///home/andy/keen/lib/col/mut-set.keen 69:1
const subscript13173192302474347675 = (l_a___0, l_value___1) =>
	((typeof subscript13619933128707826267(inner8765292113105816942(l_a___0), l_value___1)) === "undefined")
// try-add@(string) file:///home/andy/keen/lib/col/mut-set.keen 74:1
const try__45add11271474842386506396 = (l_a___0, l_value___1) => {
	if (subscript13173192302474347675(l_a___0, l_value___1)) {
		return false
	} else {
		__126__6115490001894066517056(l_a___0, l_value___1)
		return true
	}
}
// new@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 18:1
const new1415182604502127416 = (l_pairs___0, l_bucket__45starts___1) =>
	new (frozen__45map12255235111266041392)(l_pairs___0, l_bucket__45starts___1)
// new@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 18:1
const new14654224681373792913 = (l_pairs___0, l_bucket__45starts___1) =>
	new (frozen__45map12918844883644871653)(l_pairs___0, l_bucket__45starts___1)
// new@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 18:1
const new6201922083224710961 = (l_pairs___0, l_bucket__45starts___1) =>
	new (frozen__45map17330447661197982178)(l_pairs___0, l_bucket__45starts___1)
// pairs@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 19:5
const pairs10238436826591380810 = l_a___0 =>
	l_a___0.pairs
// pairs@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 19:5
const pairs10691248272041580288 = l_a___0 =>
	l_a___0.pairs
// pairs@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 19:5
const pairs2888858963499863101 = l_a___0 =>
	l_a___0.pairs
// bucket-starts@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 20:5
const bucket__45starts1641689657994571042 = l_a___0 =>
	l_a___0["bucket-starts"]
// bucket-starts@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 20:5
const bucket__45starts4586728587191272726 = l_a___0 =>
	l_a___0["bucket-starts"]
// bucket-starts@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 20:5
const bucket__45starts2605575043167252535 = l_a___0 =>
	l_a___0["bucket-starts"]
// to@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 25:1
const to4575800010291843286 = l_a___0 =>
	as__45frozen__45map7479621055686746015(to3969097178928902132(l_a___0))
// to@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 25:1
const to15522856330671156844 = l_a___0 =>
	as__45frozen__45map23968913127931133(to1903475899312950820(l_a___0))
// to@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 25:1
const to16115970503674207029 = l_a___0 =>
	as__45frozen__45map7492132024802579282(to7165352246455314883(l_a___0))
// size@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 37:1
const size11809978137178022351 = l_a___0 =>
	BigInt(pairs10238436826591380810(l_a___0).length)
// size@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 37:1
const size4248118483495851553 = l_a___0 =>
	BigInt(pairs2888858963499863101(l_a___0).length)
// size@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 37:1
const size12681194139969857514 = l_a___0 =>
	BigInt(pairs10691248272041580288(l_a___0).length)
// bucket-indices-at-index@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 51:1
const bucket__45indices__45at__45index1592865539432075598 = (l_a___1, l_bucket__45index___2) => {
	let l_bucket__45end___3, l_bucket__45start___0
	return ((l_bucket__45start___0 = subscript13750466444187217361(bucket__45starts1641689657994571042(l_a___1), l_bucket__45index___2)) , ((l_bucket__45end___3 = (Object.is(l_bucket__45index___2, __459429596346129747750(BigInt(bucket__45starts1641689657994571042(l_a___1).length), 1n)) ? BigInt(pairs10691248272041580288(l_a___1).length) : subscript13750466444187217361(bucket__45starts1641689657994571042(l_a___1), __431000895641751717785(l_bucket__45index___2, 1n)))) , __46__467720007973451370645(l_bucket__45start___0, l_bucket__45end___3)))
}
// bucket-indices-at-index@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 51:1
const bucket__45indices__45at__45index5149706730529833090 = (l_a___1, l_bucket__45index___2) => {
	let l_bucket__45end___3, l_bucket__45start___0
	return ((l_bucket__45start___0 = subscript13750466444187217361(bucket__45starts4586728587191272726(l_a___1), l_bucket__45index___2)) , ((l_bucket__45end___3 = (Object.is(l_bucket__45index___2, __459429596346129747750(BigInt(bucket__45starts4586728587191272726(l_a___1).length), 1n)) ? BigInt(pairs10238436826591380810(l_a___1).length) : subscript13750466444187217361(bucket__45starts4586728587191272726(l_a___1), __431000895641751717785(l_bucket__45index___2, 1n)))) , __46__467720007973451370645(l_bucket__45start___0, l_bucket__45end___3)))
}
// bucket-indices-at-index@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 51:1
const bucket__45indices__45at__45index7398773497766292344 = (l_a___1, l_bucket__45index___2) => {
	let l_bucket__45end___3, l_bucket__45start___0
	return ((l_bucket__45start___0 = subscript13750466444187217361(bucket__45starts2605575043167252535(l_a___1), l_bucket__45index___2)) , ((l_bucket__45end___3 = (Object.is(l_bucket__45index___2, __459429596346129747750(BigInt(bucket__45starts2605575043167252535(l_a___1).length), 1n)) ? BigInt(pairs2888858963499863101(l_a___1).length) : subscript13750466444187217361(bucket__45starts2605575043167252535(l_a___1), __431000895641751717785(l_bucket__45index___2, 1n)))) , __46__467720007973451370645(l_bucket__45start___0, l_bucket__45end___3)))
}
// bucket-at-index@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 59:1
const bucket__45at__45index1063483922238876090 = (l_a___0, l_bucket__45index___1) =>
	subscript13998309180526795699(pairs2888858963499863101(l_a___0), bucket__45indices__45at__45index7398773497766292344(l_a___0, l_bucket__45index___1))
// bucket-at-index@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 59:1
const bucket__45at__45index16882313826606267956 = (l_a___0, l_bucket__45index___1) =>
	subscript8776442670321154853(pairs10238436826591380810(l_a___0), bucket__45indices__45at__45index5149706730529833090(l_a___0, l_bucket__45index___1))
// bucket-at-index@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 59:1
const bucket__45at__45index1595491037645458720 = (l_a___0, l_bucket__45index___1) =>
	subscript7444904594231619233(pairs10691248272041580288(l_a___0), bucket__45indices__45at__45index1592865539432075598(l_a___0, l_bucket__45index___1))
// as-frozen-map@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 62:1
const as__45frozen__45map7479621055686746015 = l_a___0 =>
	remove__45duplicates12630836058093739787(make__45frozen__45map3358766815593441776(l_a___0))
// as-frozen-map@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 62:1
const as__45frozen__45map23968913127931133 = l_a___0 =>
	remove__45duplicates7627200169169943418(make__45frozen__45map1583311982828010099(l_a___0))
// as-frozen-map@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 62:1
const as__45frozen__45map7492132024802579282 = l_a___0 =>
	remove__45duplicates1655111541582500715(make__45frozen__45map11006292060691955408(l_a___0))
// make-frozen-map@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 65:1
const make__45frozen__45map1583311982828010099 = l_a___0 => {
	if (__60__616269385802849585881(BigInt(l_a___0.length), 4n)) {
		return new1415182604502127416(cast__45immutable8320426461937191125(l_a___0), c____290())
	} else {
		const l_n__45buckets___1 = __473463626361574020402(BigInt(l_a___0.length), 2n)
		const l_bucket__45starts___2 = get__45bucket__45starts3078448299938092326(l_a___0, l_n__45buckets___1)
		const l_bucket__45counts___3 = n__45of17290336012054583925(l_n__45buckets___1, 0n)
		let l_cur___4 = 0n
		while (true){
			if (Object.is(l_cur___4, BigInt(l_a___0.length))) {
				return new1415182604502127416(cast__45immutable8320426461937191125(l_a___0), l_bucket__45starts___2)
			} else {
				const l_bucket__45index___5 = get__45bucket__45index15587637067324125586(a16321909526332198610(subscript15393968468724643518(l_a___0, l_cur___4)), BigInt(l_bucket__45counts___3.length))
				const l_bucket__45count___6 = subscript8061027114076276496(l_bucket__45counts___3, l_bucket__45index___5)
				const l_bucket__45start___7 = subscript13750466444187217361(l_bucket__45starts___2, l_bucket__45index___5)
				const l_bucket__45cur__45end___8 = __431000895641751717785(l_bucket__45start___7, l_bucket__45count___6)
				if ((__60__616269385802849585881(l_bucket__45start___7, l_cur___4) ? __60__616269385802849585881(l_cur___4, l_bucket__45cur__45end___8) : false)) {
					(Object.is(l_cur___4, l_bucket__45cur__45end___8) ? set__45subscript11252697668255268030(l_bucket__45counts___3, l_bucket__45index___5, __431000895641751717785(l_bucket__45count___6, 1n)) : (void 0))
					l_cur___4 = __431000895641751717785(l_cur___4, 1n)
				} else {
					set__45subscript11252697668255268030(l_bucket__45counts___3, l_bucket__45index___5, __431000895641751717785(l_bucket__45count___6, 1n))
					swap__45at1609377236298854247(l_a___0, l_cur___4, l_bucket__45cur__45end___8)
				}
				continue
			}
		}
	}
}
// make-frozen-map@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 65:1
const make__45frozen__45map3358766815593441776 = l_a___0 => {
	if (__60__616269385802849585881(BigInt(l_a___0.length), 4n)) {
		return new6201922083224710961(cast__45immutable10765307802391043216(l_a___0), c____290())
	} else {
		const l_n__45buckets___1 = __473463626361574020402(BigInt(l_a___0.length), 2n)
		const l_bucket__45starts___2 = get__45bucket__45starts5653168489085262494(l_a___0, l_n__45buckets___1)
		const l_bucket__45counts___3 = n__45of17290336012054583925(l_n__45buckets___1, 0n)
		let l_cur___4 = 0n
		while (true){
			if (Object.is(l_cur___4, BigInt(l_a___0.length))) {
				return new6201922083224710961(cast__45immutable10765307802391043216(l_a___0), l_bucket__45starts___2)
			} else {
				const l_bucket__45index___5 = get__45bucket__45index15587637067324125586(a9842936203065675719(subscript3082251864539807484(l_a___0, l_cur___4)), BigInt(l_bucket__45counts___3.length))
				const l_bucket__45count___6 = subscript8061027114076276496(l_bucket__45counts___3, l_bucket__45index___5)
				const l_bucket__45start___7 = subscript13750466444187217361(l_bucket__45starts___2, l_bucket__45index___5)
				const l_bucket__45cur__45end___8 = __431000895641751717785(l_bucket__45start___7, l_bucket__45count___6)
				if ((__60__616269385802849585881(l_bucket__45start___7, l_cur___4) ? __60__616269385802849585881(l_cur___4, l_bucket__45cur__45end___8) : false)) {
					(Object.is(l_cur___4, l_bucket__45cur__45end___8) ? set__45subscript11252697668255268030(l_bucket__45counts___3, l_bucket__45index___5, __431000895641751717785(l_bucket__45count___6, 1n)) : (void 0))
					l_cur___4 = __431000895641751717785(l_cur___4, 1n)
				} else {
					set__45subscript11252697668255268030(l_bucket__45counts___3, l_bucket__45index___5, __431000895641751717785(l_bucket__45count___6, 1n))
					swap__45at14801990343348459085(l_a___0, l_cur___4, l_bucket__45cur__45end___8)
				}
				continue
			}
		}
	}
}
// make-frozen-map@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 65:1
const make__45frozen__45map11006292060691955408 = l_a___0 => {
	if (__60__616269385802849585881(BigInt(l_a___0.length), 4n)) {
		return new14654224681373792913(cast__45immutable4956731320325544819(l_a___0), c____290())
	} else {
		const l_n__45buckets___1 = __473463626361574020402(BigInt(l_a___0.length), 2n)
		const l_bucket__45starts___2 = get__45bucket__45starts13112088303703554686(l_a___0, l_n__45buckets___1)
		const l_bucket__45counts___3 = n__45of17290336012054583925(l_n__45buckets___1, 0n)
		let l_cur___4 = 0n
		while (true){
			if (Object.is(l_cur___4, BigInt(l_a___0.length))) {
				return new14654224681373792913(cast__45immutable4956731320325544819(l_a___0), l_bucket__45starts___2)
			} else {
				const l_bucket__45index___5 = get__45bucket__45index15587637067324125586(a13517452400068764641(subscript12402752052135311052(l_a___0, l_cur___4)), BigInt(l_bucket__45counts___3.length))
				const l_bucket__45count___6 = subscript8061027114076276496(l_bucket__45counts___3, l_bucket__45index___5)
				const l_bucket__45start___7 = subscript13750466444187217361(l_bucket__45starts___2, l_bucket__45index___5)
				const l_bucket__45cur__45end___8 = __431000895641751717785(l_bucket__45start___7, l_bucket__45count___6)
				if ((__60__616269385802849585881(l_bucket__45start___7, l_cur___4) ? __60__616269385802849585881(l_cur___4, l_bucket__45cur__45end___8) : false)) {
					(Object.is(l_cur___4, l_bucket__45cur__45end___8) ? set__45subscript11252697668255268030(l_bucket__45counts___3, l_bucket__45index___5, __431000895641751717785(l_bucket__45count___6, 1n)) : (void 0))
					l_cur___4 = __431000895641751717785(l_cur___4, 1n)
				} else {
					set__45subscript11252697668255268030(l_bucket__45counts___3, l_bucket__45index___5, __431000895641751717785(l_bucket__45count___6, 1n))
					swap__45at6041771058159127079(l_a___0, l_cur___4, l_bucket__45cur__45end___8)
				}
				continue
			}
		}
	}
}
// remove-duplicates@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 89:1
const remove__45duplicates1655111541582500715 = l_a___0 =>
	(has__45duplicates8087036002939008163(l_a___0) ? make__45frozen__45map11006292060691955408(with__45block3856942796151020968(build12971615191504386060(size11809978137178022351(l_a___0)), l_out___1 =>
				write__45without__45duplicates11384597397779762825(l_out___1, l_a___0))) : l_a___0)
// remove-duplicates@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 89:1
const remove__45duplicates7627200169169943418 = l_a___0 =>
	(has__45duplicates16796055826821367624(l_a___0) ? make__45frozen__45map1583311982828010099(with__45block6690588850203279273(build12971615191504386060(size12681194139969857514(l_a___0)), l_out___1 =>
				write__45without__45duplicates15427479966113563092(l_out___1, l_a___0))) : l_a___0)
// remove-duplicates@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 89:1
const remove__45duplicates12630836058093739787 = l_a___0 =>
	(has__45duplicates2002592107161919316(l_a___0) ? make__45frozen__45map3358766815593441776(with__45block9867656983851878050(build12971615191504386060(size4248118483495851553(l_a___0)), l_out___1 =>
				write__45without__45duplicates1365869274329760462(l_out___1, l_a___0))) : l_a___0)
// write-without-duplicates@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 98:1
const write__45without__45duplicates15427479966113563092 = (l_out___1, l_a___0) => {
	if (is__45empty8129857972852358725(bucket__45starts1641689657994571042(l_a___0))) {
		write__45bucket__45without__45duplicates9614707390018587899(l_out___1, to__45array__45view14079080899297940875(pairs10691248272041580288(l_a___0)))
	} else {
		let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(0n, BigInt(bucket__45starts1641689657994571042(l_a___0).length))
		while ((x_cur___0 < x_end___1)){
			const l_i___2 = x_cur___0
			write__45bucket__45without__45duplicates9614707390018587899(l_out___1, bucket__45at__45index1595491037645458720(l_a___0, l_i___2))
			x_cur___0 = (x_cur___0 + 1n)
		}
	}
}
// write-without-duplicates@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 98:1
const write__45without__45duplicates11384597397779762825 = (l_out___1, l_a___0) => {
	if (is__45empty8129857972852358725(bucket__45starts4586728587191272726(l_a___0))) {
		write__45bucket__45without__45duplicates666225182981099231(l_out___1, to__45array__45view15600247917562469558(pairs10238436826591380810(l_a___0)))
	} else {
		let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(0n, BigInt(bucket__45starts4586728587191272726(l_a___0).length))
		while ((x_cur___0 < x_end___1)){
			const l_i___2 = x_cur___0
			write__45bucket__45without__45duplicates666225182981099231(l_out___1, bucket__45at__45index16882313826606267956(l_a___0, l_i___2))
			x_cur___0 = (x_cur___0 + 1n)
		}
	}
}
// write-without-duplicates@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 98:1
const write__45without__45duplicates1365869274329760462 = (l_out___1, l_a___0) => {
	if (is__45empty8129857972852358725(bucket__45starts2605575043167252535(l_a___0))) {
		write__45bucket__45without__45duplicates2071531829713765036(l_out___1, to__45array__45view5635519402630394728(pairs2888858963499863101(l_a___0)))
	} else {
		let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(0n, BigInt(bucket__45starts2605575043167252535(l_a___0).length))
		while ((x_cur___0 < x_end___1)){
			const l_i___2 = x_cur___0
			write__45bucket__45without__45duplicates2071531829713765036(l_out___1, bucket__45at__45index1063483922238876090(l_a___0, l_i___2))
			x_cur___0 = (x_cur___0 + 1n)
		}
	}
}
// write-bucket-without-duplicates@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 105:1
const write__45bucket__45without__45duplicates666225182981099231 = (l_out___4, l_pairs___0) => {
	let l_i___3, l_pair___2
	return for__45loop6329664641129725850(with__45index3304259637576692824(l_pairs___0), l_destruct___1 =>
			((l_pair___2 = l_destruct___1.b) , ((l_i___3 = l_destruct___1.a) , (key__45in__45range5565023686556326777(a13517452400068764641(l_pair___2), subscript3861112582004398918(l_pairs___0, __46__463392754618358187143(__431000895641751717785(l_i___3, 1n), c____304()))) ? (void 0) : __126__6116067417997219459418(l_out___4, l_pair___2)))))
}
// write-bucket-without-duplicates@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 105:1
const write__45bucket__45without__45duplicates9614707390018587899 = (l_out___4, l_pairs___0) => {
	let l_i___3, l_pair___2
	return for__45loop3351291664685991398(with__45index9182083458239253380(l_pairs___0), l_destruct___1 =>
			((l_pair___2 = l_destruct___1.b) , ((l_i___3 = l_destruct___1.a) , (key__45in__45range4604882766132331061(a16321909526332198610(l_pair___2), subscript10265119331026038354(l_pairs___0, __46__463392754618358187143(__431000895641751717785(l_i___3, 1n), c____304()))) ? (void 0) : __126__6111647352200313770603(l_out___4, l_pair___2)))))
}
// write-bucket-without-duplicates@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 105:1
const write__45bucket__45without__45duplicates2071531829713765036 = (l_out___4, l_pairs___0) => {
	let l_i___3, l_pair___2
	return for__45loop12893732745043417361(with__45index17957258180421635239(l_pairs___0), l_destruct___1 =>
			((l_pair___2 = l_destruct___1.b) , ((l_i___3 = l_destruct___1.a) , (key__45in__45range17216909371152355932(a9842936203065675719(l_pair___2), subscript2965052065971379757(l_pairs___0, __46__463392754618358187143(__431000895641751717785(l_i___3, 1n), c____304()))) ? (void 0) : __126__6111971055254624379114(l_out___4, l_pair___2)))))
}
// has-duplicates@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 110:1
const has__45duplicates2002592107161919316 = l_a___0 =>
	(is__45empty8129857972852358725(bucket__45starts2605575043167252535(l_a___0)) ? bucket__45has__45duplicates1205038366752387825(to__45array__45view5635519402630394728(pairs2888858963499863101(l_a___0))) : some15196038435874883717(__46__467720007973451370645(0n, BigInt(bucket__45starts2605575043167252535(l_a___0).length)), l_it___1 =>
			bucket__45has__45duplicates1205038366752387825(bucket__45at__45index1063483922238876090(l_a___0, l_it___1))))
// has-duplicates@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 110:1
const has__45duplicates8087036002939008163 = l_a___0 =>
	(is__45empty8129857972852358725(bucket__45starts4586728587191272726(l_a___0)) ? bucket__45has__45duplicates5906212983576061662(to__45array__45view15600247917562469558(pairs10238436826591380810(l_a___0))) : some15196038435874883717(__46__467720007973451370645(0n, BigInt(bucket__45starts4586728587191272726(l_a___0).length)), l_it___1 =>
			bucket__45has__45duplicates5906212983576061662(bucket__45at__45index16882313826606267956(l_a___0, l_it___1))))
// has-duplicates@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 110:1
const has__45duplicates16796055826821367624 = l_a___0 =>
	(is__45empty8129857972852358725(bucket__45starts1641689657994571042(l_a___0)) ? bucket__45has__45duplicates12312832140013233582(to__45array__45view14079080899297940875(pairs10691248272041580288(l_a___0))) : some15196038435874883717(__46__467720007973451370645(0n, BigInt(bucket__45starts1641689657994571042(l_a___0).length)), l_it___1 =>
			bucket__45has__45duplicates12312832140013233582(bucket__45at__45index1595491037645458720(l_a___0, l_it___1))))
// bucket-has-duplicates@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 116:1
const bucket__45has__45duplicates1205038366752387825 = l_pairs___0 => {
	let l_i___4, l_k___3, l_destruct___2
	return some14901728061074231733(with__45index17957258180421635239(l_pairs___0), l_destruct___1 =>
			((l_destruct___2 = l_destruct___1.b) , ((l_k___3 = l_destruct___2.a) , ((l_i___4 = l_destruct___1.a) , key__45in__45range17216909371152355932(l_k___3, subscript2965052065971379757(l_pairs___0, __46__463392754618358187143(__431000895641751717785(l_i___4, 1n), c____304())))))))
}
// bucket-has-duplicates@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 116:1
const bucket__45has__45duplicates5906212983576061662 = l_pairs___0 => {
	let l_i___4, l_k___3, l_destruct___2
	return some15060815591339072174(with__45index3304259637576692824(l_pairs___0), l_destruct___1 =>
			((l_destruct___2 = l_destruct___1.b) , ((l_k___3 = l_destruct___2.a) , ((l_i___4 = l_destruct___1.a) , key__45in__45range5565023686556326777(l_k___3, subscript3861112582004398918(l_pairs___0, __46__463392754618358187143(__431000895641751717785(l_i___4, 1n), c____304())))))))
}
// bucket-has-duplicates@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 116:1
const bucket__45has__45duplicates12312832140013233582 = l_pairs___0 => {
	let l_i___4, l_k___3, l_destruct___2
	return some9205118169912614970(with__45index9182083458239253380(l_pairs___0), l_destruct___1 =>
			((l_destruct___2 = l_destruct___1.b) , ((l_k___3 = l_destruct___2.a) , ((l_i___4 = l_destruct___1.a) , key__45in__45range4604882766132331061(l_k___3, subscript10265119331026038354(l_pairs___0, __46__463392754618358187143(__431000895641751717785(l_i___4, 1n), c____304())))))))
}
// key-in-range@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 120:1
const key__45in__45range4604882766132331061 = (l_key___2, l_pairs___0) =>
	some829836533376232637(l_pairs___0, l_it___1 =>
			__61__611154543819848657072(a16321909526332198610(l_it___1), l_key___2))
// key-in-range@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 120:1
const key__45in__45range5565023686556326777 = (l_key___2, l_pairs___0) =>
	some16946768562539215233(l_pairs___0, l_it___1 =>
			__61__611154543819848657072(a13517452400068764641(l_it___1), l_key___2))
// key-in-range@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 120:1
const key__45in__45range17216909371152355932 = (l_key___2, l_pairs___0) =>
	some15110223799684909316(l_pairs___0, l_it___1 =>
			__61__611154543819848657072(a9842936203065675719(l_it___1), l_key___2))
// get-bucket-starts@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 123:1
const get__45bucket__45starts3078448299938092326 = (l_a___2, l_n__45buckets___1) => {
	let l_k___4
	const l_res___0 = n__45of17290336012054583925(l_n__45buckets___1, 0n)
	for (const l_destruct___3 of l_a___2) {
		((l_k___4 = l_destruct___3.a) , set__45subscript11252697668255268030(l_res___0, get__45bucket__45index15587637067324125586(l_k___4, l_n__45buckets___1), __431000895641751717785(subscript8061027114076276496(l_res___0, get__45bucket__45index15587637067324125586(l_k___4, l_n__45buckets___1)), 1n)))
	}
	running__45sum6876803109513318780(l_res___0)
	return cast__45immutable6738434174005710678(l_res___0)
}
// get-bucket-starts@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 123:1
const get__45bucket__45starts13112088303703554686 = (l_a___2, l_n__45buckets___1) => {
	let l_k___4
	const l_res___0 = n__45of17290336012054583925(l_n__45buckets___1, 0n)
	for (const l_destruct___3 of l_a___2) {
		((l_k___4 = l_destruct___3.a) , set__45subscript11252697668255268030(l_res___0, get__45bucket__45index15587637067324125586(l_k___4, l_n__45buckets___1), __431000895641751717785(subscript8061027114076276496(l_res___0, get__45bucket__45index15587637067324125586(l_k___4, l_n__45buckets___1)), 1n)))
	}
	running__45sum6876803109513318780(l_res___0)
	return cast__45immutable6738434174005710678(l_res___0)
}
// get-bucket-starts@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 123:1
const get__45bucket__45starts5653168489085262494 = (l_a___2, l_n__45buckets___1) => {
	let l_k___4
	const l_res___0 = n__45of17290336012054583925(l_n__45buckets___1, 0n)
	for (const l_destruct___3 of l_a___2) {
		((l_k___4 = l_destruct___3.a) , set__45subscript11252697668255268030(l_res___0, get__45bucket__45index15587637067324125586(l_k___4, l_n__45buckets___1), __431000895641751717785(subscript8061027114076276496(l_res___0, get__45bucket__45index15587637067324125586(l_k___4, l_n__45buckets___1)), 1n)))
	}
	running__45sum6876803109513318780(l_res___0)
	return cast__45immutable6738434174005710678(l_res___0)
}
// get-bucket-index@(symbol) file:///home/andy/keen/lib/col/private/frozen-map.keen 130:1
const get__45bucket__45index15587637067324125586 = (l_key___0, l_n__45buckets___1) =>
	__376728767376110028882(seeded__45hash16463488197760757224(l_key___0), l_n__45buckets___1)
// running-sum file:///home/andy/keen/lib/col/private/frozen-map.keen 133:1
const running__45sum6876803109513318780 = l_a___1 => {
	let l_acc___0
	return ((l_acc___0 = 0n) , map__6113872312201773602509(l_a___1, l_x___2 => {
			const l_start___3 = l_acc___0
			l_acc___0 = __431000895641751717785(l_acc___0, l_x___2)
			return l_start___3
		}))
}
// some@(symbol, string) file:///home/andy/keen/lib/col/private/frozen-map.keen 140:1
const some662559339954925102 = (l_a___0, l_f___1) =>
	some4456382396105079607(pairs10691248272041580288(l_a___0), l_f___1)
// some@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/col/private/frozen-map.keen 140:1
const some3308616840624081180 = (l_a___0, l_f___1) =>
	some14079183715108909801(pairs2888858963499863101(l_a___0), l_f___1)
// some@(symbol, json) file:///home/andy/keen/lib/col/private/frozen-map.keen 140:1
const some7006936601024607093 = (l_a___0, l_f___1) =>
	some12617336626473952259(pairs10238436826591380810(l_a___0), l_f___1)
// to-range@(char8 array-view) file:///home/andy/keen/lib/col/private/private-util.keen 8:1
const to__45range14770365445325474450 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = low9596797178650390355(l_range___2)) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "bigint") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end8245774424878029406) ? to__45index2709654156222237099(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index2709654156222237099(l_col___3, high10442526621520215704(l_range___2))
	if (__60__616269385802849585881(l_low___0, l_high___4)) {
		return __46__467720007973451370645(l_low___0, l_high___4)
	} else {
		throw index__45too__45big17082524477655533791(l_low___0, l_high___4)
	}
}
// to-range@((symbol, string) tuple2 array-view) file:///home/andy/keen/lib/col/private/private-util.keen 8:1
const to__45range6165893281196594083 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = low9596797178650390355(l_range___2)) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "bigint") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end8245774424878029406) ? to__45index1358065719458271400(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index1358065719458271400(l_col___3, high10442526621520215704(l_range___2))
	if (__60__616269385802849585881(l_low___0, l_high___4)) {
		return __46__467720007973451370645(l_low___0, l_high___4)
	} else {
		throw index__45too__45big17082524477655533791(l_low___0, l_high___4)
	}
}
// to-range@((symbol, string) tuple2 buffer-view) file:///home/andy/keen/lib/col/private/private-util.keen 8:1
const to__45range17382549170678239194 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = low9596797178650390355(l_range___2)) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "bigint") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end8245774424878029406) ? to__45index11614418243670674547(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index11614418243670674547(l_col___3, high10442526621520215704(l_range___2))
	if (__60__616269385802849585881(l_low___0, l_high___4)) {
		return __46__467720007973451370645(l_low___0, l_high___4)
	} else {
		throw index__45too__45big17082524477655533791(l_low___0, l_high___4)
	}
}
// to-range@(symbol buffer-view) file:///home/andy/keen/lib/col/private/private-util.keen 8:1
const to__45range14325715860776732386 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = low9596797178650390355(l_range___2)) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "bigint") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end8245774424878029406) ? to__45index16846540729888347067(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index16846540729888347067(l_col___3, high10442526621520215704(l_range___2))
	if (__60__616269385802849585881(l_low___0, l_high___4)) {
		return __46__467720007973451370645(l_low___0, l_high___4)
	} else {
		throw index__45too__45big17082524477655533791(l_low___0, l_high___4)
	}
}
// to-range@(json buffer-view) file:///home/andy/keen/lib/col/private/private-util.keen 8:1
const to__45range7305901180267509140 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = low9596797178650390355(l_range___2)) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "bigint") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end8245774424878029406) ? to__45index4851402809759717125(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index4851402809759717125(l_col___3, high10442526621520215704(l_range___2))
	if (__60__616269385802849585881(l_low___0, l_high___4)) {
		return __46__467720007973451370645(l_low___0, l_high___4)
	} else {
		throw index__45too__45big17082524477655533791(l_low___0, l_high___4)
	}
}
// to-range@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer-view) file:///home/andy/keen/lib/col/private/private-util.keen 8:1
const to__45range12877292752922315713 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = low9596797178650390355(l_range___2)) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "bigint") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end8245774424878029406) ? to__45index8965393381753164480(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index8965393381753164480(l_col___3, high10442526621520215704(l_range___2))
	if (__60__616269385802849585881(l_low___0, l_high___4)) {
		return __46__467720007973451370645(l_low___0, l_high___4)
	} else {
		throw index__45too__45big17082524477655533791(l_low___0, l_high___4)
	}
}
// to-range@(char8 array array-view) file:///home/andy/keen/lib/col/private/private-util.keen 8:1
const to__45range304264817012696456 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = low9596797178650390355(l_range___2)) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "bigint") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end8245774424878029406) ? to__45index7950559149171855593(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index7950559149171855593(l_col___3, high10442526621520215704(l_range___2))
	if (__60__616269385802849585881(l_low___0, l_high___4)) {
		return __46__467720007973451370645(l_low___0, l_high___4)
	} else {
		throw index__45too__45big17082524477655533791(l_low___0, l_high___4)
	}
}
// to-range@((symbol, json) tuple2 array-view) file:///home/andy/keen/lib/col/private/private-util.keen 8:1
const to__45range12996506484922729807 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = low9596797178650390355(l_range___2)) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "bigint") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end8245774424878029406) ? to__45index14772629666362974180(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index14772629666362974180(l_col___3, high10442526621520215704(l_range___2))
	if (__60__616269385802849585881(l_low___0, l_high___4)) {
		return __46__467720007973451370645(l_low___0, l_high___4)
	} else {
		throw index__45too__45big17082524477655533791(l_low___0, l_high___4)
	}
}
// to-range@((symbol, json) tuple2 buffer-view) file:///home/andy/keen/lib/col/private/private-util.keen 8:1
const to__45range11537637848762666957 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = low9596797178650390355(l_range___2)) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "bigint") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end8245774424878029406) ? to__45index2828757378095408577(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index2828757378095408577(l_col___3, high10442526621520215704(l_range___2))
	if (__60__616269385802849585881(l_low___0, l_high___4)) {
		return __46__467720007973451370645(l_low___0, l_high___4)
	} else {
		throw index__45too__45big17082524477655533791(l_low___0, l_high___4)
	}
}
// to-range@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view) file:///home/andy/keen/lib/col/private/private-util.keen 8:1
const to__45range16540565430851835694 = (l_col___3, l_range___2) => {
	let x_matched___0, l_x___1
	const l_low___0 = ((l_x___1 = low9596797178650390355(l_range___2)) , ((x_matched___0 = l_x___1) , (((typeof x_matched___0) === "bigint") ? l_x___1 : ((x_matched___0 instanceof index__45relative__45to__45end8245774424878029406) ? to__45index18187232723525657879(l_col___3, l_x___1) : _unreachable()))))
	const l_high___4 = to__45index18187232723525657879(l_col___3, high10442526621520215704(l_range___2))
	if (__60__616269385802849585881(l_low___0, l_high___4)) {
		return __46__467720007973451370645(l_low___0, l_high___4)
	} else {
		throw index__45too__45big17082524477655533791(l_low___0, l_high___4)
	}
}
// binary-search-exact@(symbol) file:///home/andy/keen/lib/col/private/sort-utils.keen 17:1
const binary__45search__45exact5129374079994534489 = (l_a___1, l_value___2) => {
	let l_res___0
	return ((l_res___0 = binary__45search__45insert8698685149434955942(l_a___1, l_value___2)) , ((__33__618396056177400121463(l_res___0, size1976810991608200656(l_a___1)) ? __61__611154543819848657072(subscript14187249216236425598(l_a___1, l_res___0), l_value___2) : false) ? l_res___0 : c____558()))
}
// binary-search-insert@(symbol) file:///home/andy/keen/lib/col/private/sort-utils.keen 28:1
const binary__45search__45insert8698685149434955942 = (l_a___0, l_value___2) =>
	binary__45search__45insert__45cb3085398836404428591(l_a___0, l_it___1 =>
			__60__61__623713351476808003786(l_value___2, l_it___1))
// binary-search-insert-cb@(symbol) file:///home/andy/keen/lib/col/private/sort-utils.keen 37:1
const binary__45search__45insert__45cb3085398836404428591 = (l_a___2, l_compare___5) => {
	let l_left___0 = 0n
	let l_right___1 = size1976810991608200656(l_a___2)
	while (true){
		const l_temp___3 = (() => {
			if (Object.is(l_left___0, l_right___1)) {
				return l_left___0
			} else {
				const l_mid___4 = __431000895641751717785(l_left___0, __473463626361574020402(__459429596346129747750(l_right___1, l_left___0), 2n))
				const x_matched___0 = l_compare___5(subscript14187249216236425598(l_a___2, l_mid___4))
				switch (x_matched___0) {
					case 0:{
						l_right___1 = l_mid___4
						return c____558()
					}
					case 1:{
						return l_mid___4
					}
					case 2:{
						l_left___0 = __431000895641751717785(l_mid___4, 1n)
						return c____558()
					}
					default:{
						return _unreachable()
					}
				}
			}
		})()
		const x_matched___1 = l_temp___3
		if ((x_matched___1 instanceof none12752313651180151000)) {
			continue
		} else {
			if (((typeof x_matched___1) === "bigint")) {
				return l_temp___3
			} else {
				return _unreachable()
			}
		}
	}
}
// sort@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, symbol) file:///home/andy/keen/lib/col/sort.keen 36:1
const sort9763057825635895871 = (l_a___1, l_get__45key___3) => {
	const l_res___0 = map12241303111672561133(l_a___1, l_it___2 =>
			l_it___2)
	sort__61105264379139700138(to__45buffer__45view13544126161332235095(l_res___0), l_get__45key___3)
	return list__45new11433585782200486390(cast__45immutable10765307802391043216(l_res___0))
}
// sort@((symbol, string) tuple2 array, (symbol, string) tuple2, symbol) file:///home/andy/keen/lib/col/sort.keen 36:1
const sort17893584610839031994 = (l_a___1, l_get__45key___3) => {
	const l_res___0 = map8700599446887062796(l_a___1, l_it___2 =>
			l_it___2)
	sort__612042424213234568989(to__45buffer__45view8989867521854904723(l_res___0), l_get__45key___3)
	return list__45new10053370444108870060(cast__45immutable8320426461937191125(l_res___0))
}
// sort@((symbol, json) tuple2 array, (symbol, json) tuple2, symbol) file:///home/andy/keen/lib/col/sort.keen 36:1
const sort8788258484377128169 = (l_a___1, l_get__45key___3) => {
	const l_res___0 = map1317885933127624107(l_a___1, l_it___2 =>
			l_it___2)
	sort__616154986535939650576(to__45buffer__45view11177168223290667454(l_res___0), l_get__45key___3)
	return list__45new8473885969665954184(cast__45immutable4956731320325544819(l_res___0))
}
// sort=@((symbol, json) tuple2, symbol) file:///home/andy/keen/lib/col/sort.keen 62:1
const sort__616154986535939650576 = (l_a___0, l_get__45key___1) => {
	if (__625060923374247189753(size1065220973704784668(l_a___0), 4n)) {
		sort__616154986535939650576(subscript13782411389313120237(l_a___0, __46__467720007973451370645(0n, __473463626361574020402(size1065220973704784668(l_a___0), 2n))), l_get__45key___1)
		sort__616154986535939650576(subscript1455897807079253930(l_a___0, __46__463392754618358187143(__473463626361574020402(size1065220973704784668(l_a___0), 2n), c____304())), l_get__45key___1)
		const l_left___2 = to18056832818132995811(subscript13782411389313120237(l_a___0, __46__467720007973451370645(0n, __473463626361574020402(size1065220973704784668(l_a___0), 2n))))
		let l_l___3 = 0n
		let l_r___4 = __473463626361574020402(size1065220973704784668(l_a___0), 2n)
		let l_out___5 = 0n
		x_loop___0: while (true){
			if ((__6010307380702345989795(l_l___3, BigInt(l_left___2.length)) ? __6010307380702345989795(l_r___4, size1065220973704784668(l_a___0)) : false)) {
				const l_x___6 = subscript13928125321971497704(l_left___2, l_l___3)
				const l_y___7 = subscript5437495731169276617(l_a___0, l_r___4)
				if (__60__6110501617898216894088(l_get__45key___1(l_x___6), l_get__45key___1(l_y___7))) {
					set__45subscript3285112504153836831(l_a___0, l_out___5, l_x___6)
					l_l___3 = __431000895641751717785(l_l___3, 1n)
				} else {
					set__45subscript3285112504153836831(l_a___0, l_out___5, l_y___7)
					l_r___4 = __431000895641751717785(l_r___4, 1n)
				}
				l_out___5 = __431000895641751717785(l_out___5, 1n)
				continue
			} else {
				(void 0)
				break  x_loop___0
			}
		}
		x_loop___1: while (true){
			if (__6010307380702345989795(l_l___3, BigInt(l_left___2.length))) {
				set__45subscript3285112504153836831(l_a___0, l_out___5, subscript13928125321971497704(l_left___2, l_l___3))
				l_out___5 = __431000895641751717785(l_out___5, 1n)
				l_l___3 = __431000895641751717785(l_l___3, 1n)
				continue
			} else {
				(void 0)
				break  x_loop___1
			}
		}
		x_loop___2: while (true){
			if (__6010307380702345989795(l_r___4, size1065220973704784668(l_a___0))) {
				set__45subscript3285112504153836831(l_a___0, l_out___5, subscript5437495731169276617(l_a___0, l_r___4))
				l_out___5 = __431000895641751717785(l_out___5, 1n)
				l_r___4 = __431000895641751717785(l_r___4, 1n)
				continue
			} else {
				(void 0)
				break  x_loop___2
			}
		}
		if (Object.is(l_out___5, size1065220973704784668(l_a___0))) {
			(void 0)
		} else {
			throw new (error14987278044892349075)(c____328())
		}
	} else {
		small__45sort8651859276371734388(l_a___0, l_get__45key___1)
	}
}
// sort=@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, symbol) file:///home/andy/keen/lib/col/sort.keen 62:1
const sort__61105264379139700138 = (l_a___0, l_get__45key___1) => {
	if (__625060923374247189753(size18027608494695026523(l_a___0), 4n)) {
		sort__61105264379139700138(subscript11060608013061223682(l_a___0, __46__467720007973451370645(0n, __473463626361574020402(size18027608494695026523(l_a___0), 2n))), l_get__45key___1)
		sort__61105264379139700138(subscript14927627326419387619(l_a___0, __46__463392754618358187143(__473463626361574020402(size18027608494695026523(l_a___0), 2n), c____304())), l_get__45key___1)
		const l_left___2 = to6678503148378598962(subscript11060608013061223682(l_a___0, __46__467720007973451370645(0n, __473463626361574020402(size18027608494695026523(l_a___0), 2n))))
		let l_l___3 = 0n
		let l_r___4 = __473463626361574020402(size18027608494695026523(l_a___0), 2n)
		let l_out___5 = 0n
		x_loop___0: while (true){
			if ((__6010307380702345989795(l_l___3, BigInt(l_left___2.length)) ? __6010307380702345989795(l_r___4, size18027608494695026523(l_a___0)) : false)) {
				const l_x___6 = subscript2651044573057141976(l_left___2, l_l___3)
				const l_y___7 = subscript9864463184586062056(l_a___0, l_r___4)
				if (__60__6110501617898216894088(l_get__45key___1(l_x___6), l_get__45key___1(l_y___7))) {
					set__45subscript9355737573813490262(l_a___0, l_out___5, l_x___6)
					l_l___3 = __431000895641751717785(l_l___3, 1n)
				} else {
					set__45subscript9355737573813490262(l_a___0, l_out___5, l_y___7)
					l_r___4 = __431000895641751717785(l_r___4, 1n)
				}
				l_out___5 = __431000895641751717785(l_out___5, 1n)
				continue
			} else {
				(void 0)
				break  x_loop___0
			}
		}
		x_loop___1: while (true){
			if (__6010307380702345989795(l_l___3, BigInt(l_left___2.length))) {
				set__45subscript9355737573813490262(l_a___0, l_out___5, subscript2651044573057141976(l_left___2, l_l___3))
				l_out___5 = __431000895641751717785(l_out___5, 1n)
				l_l___3 = __431000895641751717785(l_l___3, 1n)
				continue
			} else {
				(void 0)
				break  x_loop___1
			}
		}
		x_loop___2: while (true){
			if (__6010307380702345989795(l_r___4, size18027608494695026523(l_a___0))) {
				set__45subscript9355737573813490262(l_a___0, l_out___5, subscript9864463184586062056(l_a___0, l_r___4))
				l_out___5 = __431000895641751717785(l_out___5, 1n)
				l_r___4 = __431000895641751717785(l_r___4, 1n)
				continue
			} else {
				(void 0)
				break  x_loop___2
			}
		}
		if (Object.is(l_out___5, size18027608494695026523(l_a___0))) {
			(void 0)
		} else {
			throw new (error14987278044892349075)(c____328())
		}
	} else {
		small__45sort10657654263912162079(l_a___0, l_get__45key___1)
	}
}
// sort=@((symbol, string) tuple2, symbol) file:///home/andy/keen/lib/col/sort.keen 62:1
const sort__612042424213234568989 = (l_a___0, l_get__45key___1) => {
	if (__625060923374247189753(size10155486268514705094(l_a___0), 4n)) {
		sort__612042424213234568989(subscript17475044905854214863(l_a___0, __46__467720007973451370645(0n, __473463626361574020402(size10155486268514705094(l_a___0), 2n))), l_get__45key___1)
		sort__612042424213234568989(subscript11441518693042407371(l_a___0, __46__463392754618358187143(__473463626361574020402(size10155486268514705094(l_a___0), 2n), c____304())), l_get__45key___1)
		const l_left___2 = to12811730040321087757(subscript17475044905854214863(l_a___0, __46__467720007973451370645(0n, __473463626361574020402(size10155486268514705094(l_a___0), 2n))))
		let l_l___3 = 0n
		let l_r___4 = __473463626361574020402(size10155486268514705094(l_a___0), 2n)
		let l_out___5 = 0n
		x_loop___0: while (true){
			if ((__6010307380702345989795(l_l___3, BigInt(l_left___2.length)) ? __6010307380702345989795(l_r___4, size10155486268514705094(l_a___0)) : false)) {
				const l_x___6 = subscript16681309832497912394(l_left___2, l_l___3)
				const l_y___7 = subscript5939571422085453059(l_a___0, l_r___4)
				if (__60__6110501617898216894088(l_get__45key___1(l_x___6), l_get__45key___1(l_y___7))) {
					set__45subscript7966972918960996598(l_a___0, l_out___5, l_x___6)
					l_l___3 = __431000895641751717785(l_l___3, 1n)
				} else {
					set__45subscript7966972918960996598(l_a___0, l_out___5, l_y___7)
					l_r___4 = __431000895641751717785(l_r___4, 1n)
				}
				l_out___5 = __431000895641751717785(l_out___5, 1n)
				continue
			} else {
				(void 0)
				break  x_loop___0
			}
		}
		x_loop___1: while (true){
			if (__6010307380702345989795(l_l___3, BigInt(l_left___2.length))) {
				set__45subscript7966972918960996598(l_a___0, l_out___5, subscript16681309832497912394(l_left___2, l_l___3))
				l_out___5 = __431000895641751717785(l_out___5, 1n)
				l_l___3 = __431000895641751717785(l_l___3, 1n)
				continue
			} else {
				(void 0)
				break  x_loop___1
			}
		}
		x_loop___2: while (true){
			if (__6010307380702345989795(l_r___4, size10155486268514705094(l_a___0))) {
				set__45subscript7966972918960996598(l_a___0, l_out___5, subscript5939571422085453059(l_a___0, l_r___4))
				l_out___5 = __431000895641751717785(l_out___5, 1n)
				l_r___4 = __431000895641751717785(l_r___4, 1n)
				continue
			} else {
				(void 0)
				break  x_loop___2
			}
		}
		if (Object.is(l_out___5, size10155486268514705094(l_a___0))) {
			(void 0)
		} else {
			throw new (error14987278044892349075)(c____328())
		}
	} else {
		small__45sort9568251063037916479(l_a___0, l_get__45key___1)
	}
}
// small-sort@((symbol, string) tuple2, symbol) file:///home/andy/keen/lib/col/sort.keen 93:1
const small__45sort9568251063037916479 = (l_a___0, l_get__45key___2) => {
	if (__625060923374247189753(size10155486268514705094(l_a___0), 1n)) {
		let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(2n, __431000895641751717785(size10155486268514705094(l_a___0), 1n))
		while ((x_cur___0 < x_end___1)){
			const l_i___1 = x_cur___0
			move__45last__45into__45sorted15393377535432383713(subscript17475044905854214863(l_a___0, __46__467720007973451370645(0n, l_i___1)), l_get__45key___2)
			x_cur___0 = (x_cur___0 + 1n)
		}
	} else {
		(void 0)
	}
}
// small-sort@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, symbol) file:///home/andy/keen/lib/col/sort.keen 93:1
const small__45sort10657654263912162079 = (l_a___0, l_get__45key___2) => {
	if (__625060923374247189753(size18027608494695026523(l_a___0), 1n)) {
		let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(2n, __431000895641751717785(size18027608494695026523(l_a___0), 1n))
		while ((x_cur___0 < x_end___1)){
			const l_i___1 = x_cur___0
			move__45last__45into__45sorted4753806361676860788(subscript11060608013061223682(l_a___0, __46__467720007973451370645(0n, l_i___1)), l_get__45key___2)
			x_cur___0 = (x_cur___0 + 1n)
		}
	} else {
		(void 0)
	}
}
// small-sort@((symbol, json) tuple2, symbol) file:///home/andy/keen/lib/col/sort.keen 93:1
const small__45sort8651859276371734388 = (l_a___0, l_get__45key___2) => {
	if (__625060923374247189753(size1065220973704784668(l_a___0), 1n)) {
		let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(2n, __431000895641751717785(size1065220973704784668(l_a___0), 1n))
		while ((x_cur___0 < x_end___1)){
			const l_i___1 = x_cur___0
			move__45last__45into__45sorted18273630940453200741(subscript13782411389313120237(l_a___0, __46__467720007973451370645(0n, l_i___1)), l_get__45key___2)
			x_cur___0 = (x_cur___0 + 1n)
		}
	} else {
		(void 0)
	}
}
// move-last-into-sorted@((symbol, json) tuple2, symbol) file:///home/andy/keen/lib/col/sort.keen 98:1
const move__45last__45into__45sorted18273630940453200741 = (l_a___0, l_get__45key___1) => {
	if ((__625060923374247189753(size1065220973704784668(l_a___0), 1n) ? __62536657173123134094(l_get__45key___1(subscript1795401241318921154(l_a___0, __452101191994244905068(c____304(), 2n))), l_get__45key___1(subscript1795401241318921154(l_a___0, __452101191994244905068(c____304(), 1n)))) : false)) {
		swap__45at466984550709770011(l_a___0, __452101191994244905068(c____304(), 2n), __452101191994244905068(c____304(), 1n))
		move__45last__45into__45sorted18273630940453200741(subscript1455897807079253930(l_a___0, __46__463392754618358187143(0n, __452101191994244905068(c____304(), 1n))), l_get__45key___1)
	} else {
		(void 0)
	}
}
// move-last-into-sorted@((symbol, string) tuple2, symbol) file:///home/andy/keen/lib/col/sort.keen 98:1
const move__45last__45into__45sorted15393377535432383713 = (l_a___0, l_get__45key___1) => {
	if ((__625060923374247189753(size10155486268514705094(l_a___0), 1n) ? __62536657173123134094(l_get__45key___1(subscript4484875829852869879(l_a___0, __452101191994244905068(c____304(), 2n))), l_get__45key___1(subscript4484875829852869879(l_a___0, __452101191994244905068(c____304(), 1n)))) : false)) {
		swap__45at895860138272227069(l_a___0, __452101191994244905068(c____304(), 2n), __452101191994244905068(c____304(), 1n))
		move__45last__45into__45sorted15393377535432383713(subscript11441518693042407371(l_a___0, __46__463392754618358187143(0n, __452101191994244905068(c____304(), 1n))), l_get__45key___1)
	} else {
		(void 0)
	}
}
// move-last-into-sorted@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, symbol) file:///home/andy/keen/lib/col/sort.keen 98:1
const move__45last__45into__45sorted4753806361676860788 = (l_a___0, l_get__45key___1) => {
	if ((__625060923374247189753(size18027608494695026523(l_a___0), 1n) ? __62536657173123134094(l_get__45key___1(subscript14871778437823834469(l_a___0, __452101191994244905068(c____304(), 2n))), l_get__45key___1(subscript14871778437823834469(l_a___0, __452101191994244905068(c____304(), 1n)))) : false)) {
		swap__45at2012136483774325186(l_a___0, __452101191994244905068(c____304(), 2n), __452101191994244905068(c____304(), 1n))
		move__45last__45into__45sorted4753806361676860788(subscript14927627326419387619(l_a___0, __46__463392754618358187143(0n, __452101191994244905068(c____304(), 1n))), l_get__45key___1)
	} else {
		(void 0)
	}
}
// sort-by-first@(symbol, json) file:///home/andy/keen/lib/col/sort.keen 124:1
const sort__45by__45first10833573261253160214 = (l_a___1, l_b___3) => {
	const l_mut__45a___0 = to3541038080517056642(l_a___1)
	const l_mut__45b___2 = to18025172407507859328(l_b___3)
	sort__45in__45place__45by__45first7131863377022927233(to__45buffer__45view10868543494054774156(l_mut__45a___0), to__45buffer__45view18089566257153568157(l_mut__45b___2))
	return new13571496891516364698(cast__45immutable8065540784903085075(l_mut__45a___0), cast__45immutable652598698568391768(l_mut__45b___2))
}
// sort-in-place-by-first@(symbol, json) file:///home/andy/keen/lib/col/sort.keen 131:1
const sort__45in__45place__45by__45first7131863377022927233 = (l_a___0, l_b___1) => {
	if (Object.is(size8791553585132395083(l_a___0), size16606202018401915952(l_b___1))) {
		if (__625060923374247189753(size8791553585132395083(l_a___0), 1n)) {
			swap__45at17465476278573498119(l_a___0, 0n, __473463626361574020402(size8791553585132395083(l_a___0), 2n))
			swap__45at7902712280062940874(l_b___1, 0n, __473463626361574020402(size16606202018401915952(l_b___1), 2n))
			const l_pivot___2 = subscript13708057024034888817(l_a___0, 0n)
			const l_new__45pivot__45index___3 = __459429596346129747750(set__45partition__45by__45first14472451401931421571(l_a___0, l_b___1, l_pivot___2, 1n, __459429596346129747750(size8791553585132395083(l_a___0), 1n)), 1n)
			swap__45at17465476278573498119(l_a___0, 0n, l_new__45pivot__45index___3)
			swap__45at7902712280062940874(l_b___1, 0n, l_new__45pivot__45index___3)
			sort__45in__45place__45by__45first7131863377022927233(subscript13344082051213131528(l_a___0, __46__467720007973451370645(0n, l_new__45pivot__45index___3)), subscript17710222348974050409(l_b___1, __46__467720007973451370645(0n, l_new__45pivot__45index___3)))
			sort__45in__45place__45by__45first7131863377022927233(subscript11775682188563613046(l_a___0, __46__463392754618358187143(__431000895641751717785(l_new__45pivot__45index___3, 1n), c____304())), subscript16955560921830064063(l_b___1, __46__463392754618358187143(__431000895641751717785(l_new__45pivot__45index___3, 1n), c____304())))
		} else {
			(void 0)
		}
	} else {
		throw new (error14987278044892349075)(c____365())
	}
}
// set-partition-by-first@(symbol, json) file:///home/andy/keen/lib/col/sort.keen 143:1
const set__45partition__45by__45first14472451401931421571 = (l_a___4, l_b___6, l_pivot___5, l_left___1, l_right___3) => {
	let l_l___0 = l_left___1
	let l_r___2 = l_right___3
	x_loop___0: while (true){
		if (__60__616269385802849585881(l_l___0, l_r___2)) {
			if (__6010307380702345989795(l_r___2, size8791553585132395083(l_a___4))) {
				if (__6010433963323282268396(subscript13708057024034888817(l_a___4, l_l___0), l_pivot___5)) {
					l_l___0 = __431000895641751717785(l_l___0, 1n)
				} else {
					swap__45at17465476278573498119(l_a___4, l_l___0, l_r___2)
					swap__45at7902712280062940874(l_b___6, l_l___0, l_r___2)
					l_r___2 = __459429596346129747750(l_r___2, 1n)
				}
			} else {
				throw new (error14987278044892349075)(c____366())
			}
			continue
		} else {
			(void 0)
			break  x_loop___0
		}
	}
	return l_l___0
}
// for-loop@((symbol, json) tuple2 array-view with-index, (nat64, (symbol, json) tuple2) tuple2) file:///home/andy/keen/lib/col/util.keen 22:1
const for__45loop6329664641129725850 = (l_a___1, l_f___3) => {
	const l_res___0 = some15060815591339072174(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error14987278044892349075)(c____327())
	} else {
		(void 0)
	}
}
// for-loop@(string, char8) file:///home/andy/keen/lib/col/util.keen 22:1
const for__45loop16746952800157756851 = (l_a___1, l_f___3) => {
	const l_res___0 = some12041932949930921533(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error14987278044892349075)(c____327())
	} else {
		(void 0)
	}
}
// for-loop@(char8 array array-view, char8 array) file:///home/andy/keen/lib/col/util.keen 22:1
const for__45loop728422034229236786 = (l_a___1, l_f___3) => {
	const l_res___0 = some13651071537836656079(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error14987278044892349075)(c____327())
	} else {
		(void 0)
	}
}
// for-loop@((symbol, string) map, (symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 22:1
const for__45loop10829419920935895094 = (l_a___1, l_f___3) => {
	const l_res___0 = some7808882300005051336(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error14987278044892349075)(c____327())
	} else {
		(void 0)
	}
}
// for-loop@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) map, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 22:1
const for__45loop13818880380200538954 = (l_a___1, l_f___3) => {
	const l_res___0 = some11156243683291731469(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error14987278044892349075)(c____327())
	} else {
		(void 0)
	}
}
// for-loop@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view with-index, (nat64, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) tuple2) file:///home/andy/keen/lib/col/util.keen 22:1
const for__45loop12893732745043417361 = (l_a___1, l_f___3) => {
	const l_res___0 = some14901728061074231733(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error14987278044892349075)(c____327())
	} else {
		(void 0)
	}
}
// for-loop@((symbol, string) tuple2 array-view with-index, (nat64, (symbol, string) tuple2) tuple2) file:///home/andy/keen/lib/col/util.keen 22:1
const for__45loop3351291664685991398 = (l_a___1, l_f___3) => {
	const l_res___0 = some9205118169912614970(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error14987278044892349075)(c____327())
	} else {
		(void 0)
	}
}
// for-loop@(to-kid-result array with-index, (nat64, to-kid-result) tuple2) file:///home/andy/keen/lib/col/util.keen 22:1
const for__45loop2225344829820469212 = (l_a___1, l_f___3) => {
	const l_res___0 = some14558381409136213200(l_a___1, l_x___2 => {
			l_f___3(l_x___2)
			return false
		})
	if (l_res___0) {
		throw new (error14987278044892349075)(c____327())
	} else {
		(void 0)
	}
}
// for-loop@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) map-unsorted, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 30:1
const for__45loop5894507418355861868 = (l_a___1, l_f___5) => {
	const l_size___0 = size2077642984053261883(l_a___1)
	const l_res___2 = new (Array)(Number(l_size___0)).fill(null)
	let l_i___3 = 0n
	;(void some15879958075316921733(l_a___1, l_x___4 => {
			set__45subscript3459794504644078354(l_res___2, l_i___3, l_f___5(l_x___4))
			l_i___3 = __431000895641751717785(l_i___3, 1n)
			return false
		}))
	if (Object.is(l_i___3, l_size___0)) {
		return list__45new11433585782200486390(cast__45immutable10765307802391043216(l_res___2))
	} else {
		throw new (error14987278044892349075)(c____326())
	}
}
// for-loop@((symbol, json) tuple2 array, (symbol, json) tuple2, (symbol, json) map-unsorted, (symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 30:1
const for__45loop5305852345221493751 = (l_a___1, l_f___5) => {
	const l_size___0 = size15193453693627703173(l_a___1)
	const l_res___2 = new (Array)(Number(l_size___0)).fill(null)
	let l_i___3 = 0n
	;(void some3207937214708331583(l_a___1, l_x___4 => {
			set__45subscript8199566139078030845(l_res___2, l_i___3, l_f___5(l_x___4))
			l_i___3 = __431000895641751717785(l_i___3, 1n)
			return false
		}))
	if (Object.is(l_i___3, l_size___0)) {
		return list__45new8473885969665954184(cast__45immutable4956731320325544819(l_res___2))
	} else {
		throw new (error14987278044892349075)(c____326())
	}
}
// for-loop@(token array, token, decode-semantic-tokens, token) file:///home/andy/keen/lib/col/util.keen 30:1
const for__45loop3921570470401466087 = (l_a___1, l_f___5) => {
	const l_size___0 = size3788412255788927120(l_a___1)
	const l_res___2 = new (Array)(Number(l_size___0)).fill(null)
	let l_i___3 = 0n
	;(void some3962690105988799531(l_a___1, l_x___4 => {
			set__45subscript3981904068051310634(l_res___2, l_i___3, l_f___5(l_x___4))
			l_i___3 = __431000895641751717785(l_i___3, 1n)
			return false
		}))
	if (Object.is(l_i___3, l_size___0)) {
		return list__45new1822560916058830610(cast__45immutable18363312447423733608(l_res___2))
	} else {
		throw new (error14987278044892349075)(c____326())
	}
}
// for-loop@((symbol, string) tuple2 array, (symbol, string) tuple2, (symbol, string) map-unsorted, (symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 30:1
const for__45loop693246647370982992 = (l_a___1, l_f___5) => {
	const l_size___0 = size12989540777537068646(l_a___1)
	const l_res___2 = new (Array)(Number(l_size___0)).fill(null)
	let l_i___3 = 0n
	;(void some1178994941072263800(l_a___1, l_x___4 => {
			set__45subscript18141869102783312143(l_res___2, l_i___3, l_f___5(l_x___4))
			l_i___3 = __431000895641751717785(l_i___3, 1n)
			return false
		}))
	if (Object.is(l_i___3, l_size___0)) {
		return list__45new10053370444108870060(cast__45immutable8320426461937191125(l_res___2))
	} else {
		throw new (error14987278044892349075)(c____326())
	}
}
// for-loop@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) map, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, symbol array with-index, (nat64, symbol) tuple2) file:///home/andy/keen/lib/col/util.keen 30:1
const for__45loop12365011971162998010 = (l_a___1, l_f___5) => {
	const l_size___0 = size13018077405350180673(l_a___1)
	const l_res___2 = new (Array)(Number(l_size___0)).fill(null)
	let l_i___3 = 0n
	;(void some819309246884331252(l_a___1, l_x___4 => {
			set__45subscript3459794504644078354(l_res___2, l_i___3, l_f___5(l_x___4))
			l_i___3 = __431000895641751717785(l_i___3, 1n)
			return false
		}))
	if (Object.is(l_i___3, l_size___0)) {
		return list__45new15262798617984212093(cast__45immutable10765307802391043216(l_res___2))
	} else {
		throw new (error14987278044892349075)(c____326())
	}
}
// for-loop@(char8 array, char8, string, char8) file:///home/andy/keen/lib/col/util.keen 30:1
const for__45loop11074923301510535215 = (l_a___1, l_f___5) => {
	const l_size___0 = size17451724000551404641(l_a___1)
	const l_res___2 = new (Uint8Array)(Number(l_size___0))
	let l_i___3 = 0n
	;(void some12041932949930921533(l_a___1, l_x___4 => {
			set__45subscript15235425381790505473(l_res___2, l_i___3, l_f___5(l_x___4))
			l_i___3 = __431000895641751717785(l_i___3, 1n)
			return false
		}))
	if (Object.is(l_i___3, l_size___0)) {
		return list__45new14621505958909631849(cast__45immutable2674649864579937666(l_res___2))
	} else {
		throw new (error14987278044892349075)(c____326())
	}
}
// for-loop@(string array, string, to-kid-result array with-index, (nat64, to-kid-result) tuple2) file:///home/andy/keen/lib/col/util.keen 30:1
const for__45loop6365842150537704214 = (l_a___1, l_f___5) => {
	const l_size___0 = size18293749903590700169(l_a___1)
	const l_res___2 = new (Array)(Number(l_size___0)).fill(null)
	let l_i___3 = 0n
	;(void some14558381409136213200(l_a___1, l_x___4 => {
			set__45subscript7104771549754922142(l_res___2, l_i___3, l_f___5(l_x___4))
			l_i___3 = __431000895641751717785(l_i___3, 1n)
			return false
		}))
	if (Object.is(l_i___3, l_size___0)) {
		return list__45new7074563262074605452(cast__45immutable11101463694283278588(l_res___2))
	} else {
		throw new (error14987278044892349075)(c____326())
	}
}
// for-loop@(to-kid-result array, to-kid-result, json array with-index, (nat64, json) tuple2) file:///home/andy/keen/lib/col/util.keen 30:1
const for__45loop15049189437396930604 = (l_a___1, l_f___5) => {
	const l_size___0 = size665060268830155703(l_a___1)
	const l_res___2 = new (Array)(Number(l_size___0)).fill(null)
	let l_i___3 = 0n
	;(void some4070818446446953467(l_a___1, l_x___4 => {
			set__45subscript16272556305403441295(l_res___2, l_i___3, l_f___5(l_x___4))
			l_i___3 = __431000895641751717785(l_i___3, 1n)
			return false
		}))
	if (Object.is(l_i___3, l_size___0)) {
		return list__45new9284655307363033122(cast__45immutable15443004882236380245(l_res___2))
	} else {
		throw new (error14987278044892349075)(c____326())
	}
}
// for-loop@((json, json) tuple2 array, (json, json) tuple2, (symbol, json) map, (symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 30:1
const for__45loop4415201674689982703 = (l_a___1, l_f___5) => {
	const l_size___0 = size2498100917716367718(l_a___1)
	const l_res___2 = new (Array)(Number(l_size___0)).fill(null)
	let l_i___3 = 0n
	;(void some10603882724621043225(l_a___1, l_x___4 => {
			set__45subscript6771076378827149079(l_res___2, l_i___3, l_f___5(l_x___4))
			l_i___3 = __431000895641751717785(l_i___3, 1n)
			return false
		}))
	if (Object.is(l_i___3, l_size___0)) {
		return list__45new9416857024007826808(cast__45immutable10678559018630022685(l_res___2))
	} else {
		throw new (error14987278044892349075)(c____326())
	}
}
// for-loop@((symbol, string) map, (symbol, string) tuple2, symbol array with-index, (nat64, symbol) tuple2) file:///home/andy/keen/lib/col/util.keen 30:1
const for__45loop17456319261313168750 = (l_a___1, l_f___5) => {
	const l_size___0 = size13018077405350180673(l_a___1)
	const l_res___2 = new (Array)(Number(l_size___0)).fill(null)
	let l_i___3 = 0n
	;(void some819309246884331252(l_a___1, l_x___4 => {
			set__45subscript18141869102783312143(l_res___2, l_i___3, l_f___5(l_x___4))
			l_i___3 = __431000895641751717785(l_i___3, 1n)
			return false
		}))
	if (Object.is(l_i___3, l_size___0)) {
		return list__45new15738010718011681032(cast__45immutable8320426461937191125(l_res___2))
	} else {
		throw new (error14987278044892349075)(c____326())
	}
}
// for-loop@(string array, string, (symbol array, json array) zip, (symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 30:1
const for__45loop15788390743551178767 = (l_a___1, l_f___5) => {
	const l_size___0 = size1577565090124402950(l_a___1)
	const l_res___2 = new (Array)(Number(l_size___0)).fill(null)
	let l_i___3 = 0n
	;(void some11628199441445444307(l_a___1, l_x___4 => {
			set__45subscript7104771549754922142(l_res___2, l_i___3, l_f___5(l_x___4))
			l_i___3 = __431000895641751717785(l_i___3, 1n)
			return false
		}))
	if (Object.is(l_i___3, l_size___0)) {
		return list__45new7074563262074605452(cast__45immutable11101463694283278588(l_res___2))
	} else {
		throw new (error14987278044892349075)(c____326())
	}
}
// filter@(lsp-diagnostic array, lsp-diagnostic, lsp-diagnostic array) file:///home/andy/keen/lib/col/util.keen 47:1
const filter2766775638570728792 = (l_a___1, l_f___5) => {
	const l_in__45size___0 = BigInt(l_a___1.length)
	const l_res___2 = new (Array)(Number(l_in__45size___0)).fill(null)
	let l_out__45size___3 = 0n
	;(void some15946314695741497498(l_a___1, l_x___4 => {
			if (l_f___5(l_x___4)) {
				set__45subscript11603534311013315236(l_res___2, l_out__45size___3, l_x___4)
				l_out__45size___3 = __431000895641751717785(l_out__45size___3, 1n)
			} else {
				(void 0)
			}
			return false
		}))
	return list__45new1469454970023237260(to664645885465232085(subscript512725627697464331(cast__45immutable5745005442141039344(l_res___2), __46__467720007973451370645(0n, l_out__45size___3))))
}
// map@(json array, json, json array, json) file:///home/andy/keen/lib/col/util.keen 94:1
const map4471500142199874876 = (l_a___0, l_f___2) =>
	l_a___0.map(l_temp___1 =>
			l_f___2(l_temp___1))
// map@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) map-unsorted, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 94:1
const map9212457334841285984 = (l_a___0, l_f___1) =>
	for__45loop5894507418355861868(l_a___0, l_f___1)
// map@((symbol, string) tuple2 array, (symbol, string) tuple2, (symbol, string) map-unsorted, (symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 94:1
const map4541501034238783983 = (l_a___0, l_f___1) =>
	for__45loop693246647370982992(l_a___0, l_f___1)
// map@(symbol array, symbol, (json, json) tuple2 array, (json, json) tuple2) file:///home/andy/keen/lib/col/util.keen 94:1
const map11004464224184768557 = (l_a___0, l_f___2) =>
	l_a___0.map(l_temp___1 =>
			l_f___2(l_temp___1))
// map@(char8 array array, char8 array, char8 array-view array, char8 array-view) file:///home/andy/keen/lib/col/util.keen 94:1
const map5957718311786268760 = (l_a___0, l_f___2) =>
	l_a___0.map(l_temp___1 =>
			l_f___2(l_temp___1))
// map@(nat64 array, nat64, json array, json) file:///home/andy/keen/lib/col/util.keen 94:1
const map16646484652472819777 = (l_a___0, l_f___2) =>
	BigUint64Array.from(l_a___0.map(l_temp___1 =>
				l_f___2(l_temp___1)))
// map@(lsp-diagnostic array, lsp-diagnostic, json array, json) file:///home/andy/keen/lib/col/util.keen 94:1
const map15991525019948570645 = (l_a___0, l_f___2) =>
	l_a___0.map(l_temp___1 =>
			l_f___2(l_temp___1))
// map@(json array, json, uri array, uri) file:///home/andy/keen/lib/col/util.keen 94:1
const map4643061250173955443 = (l_a___0, l_f___2) =>
	l_a___0.map(l_temp___1 =>
			l_f___2(l_temp___1))
// map@(token array, token, decode-semantic-tokens, token) file:///home/andy/keen/lib/col/util.keen 94:1
const map6872015901666177361 = (l_a___0, l_f___1) =>
	for__45loop3921570470401466087(l_a___0, l_f___1)
// map@((symbol, json) tuple2 array, (symbol, json) tuple2, (symbol, json) map-unsorted, (symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 94:1
const map4392193162952967522 = (l_a___0, l_f___1) =>
	for__45loop5305852345221493751(l_a___0, l_f___1)
// map@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 94:1
const map12241303111672561133 = (l_a___0, l_f___2) =>
	l_a___0.map(l_temp___1 =>
			l_f___2(l_temp___1))
// map@(json array, json, (json, json) tuple2 array, (json, json) tuple2) file:///home/andy/keen/lib/col/util.keen 94:1
const map9381099685663729955 = (l_a___0, l_f___2) =>
	l_a___0.map(l_temp___1 =>
			l_f___2(l_temp___1))
// map@((symbol, string) tuple2 buffer, (symbol, string) tuple2, (symbol, string) tuple2 array, (symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 94:1
const map8700599446887062796 = (l_a___0, l_f___2) =>
	l_a___0.map(l_temp___1 =>
			l_f___2(l_temp___1))
// map@((symbol, json) tuple2 buffer, (symbol, json) tuple2, (symbol, json) tuple2 array, (symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 94:1
const map1317885933127624107 = (l_a___0, l_f___2) =>
	l_a___0.map(l_temp___1 =>
			l_f___2(l_temp___1))
// map@(char8 array, char8, string, char8) file:///home/andy/keen/lib/col/util.keen 94:1
const map5681546231552727415 = (l_a___0, l_f___1) =>
	for__45loop11074923301510535215(l_a___0, l_f___1)
// map@(string array, string, json array, json) file:///home/andy/keen/lib/col/util.keen 94:1
const map14586403352741400908 = (l_a___0, l_f___2) =>
	l_a___0.map(l_temp___1 =>
			l_f___2(l_temp___1))
// map@(nat32 array, nat32, json array, json) file:///home/andy/keen/lib/col/util.keen 94:1
const map12676680064136668156 = (l_a___0, l_f___2) =>
	Uint32Array.from(l_a___0.map(l_temp___1 =>
				l_f___2(l_temp___1)))
// n-of@(nat64 buffer, nat64) file:///home/andy/keen/lib/col/util.keen 122:1
const n__45of17290336012054583925 = (l_n___1, l_value___3) => {
	const l_res___0 = new (BigUint64Array)(Number(l_n___1))
	let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(0n, l_n___1)
	while ((x_cur___0 < x_end___1)){
		const l_i___2 = x_cur___0
		set__45subscript11252697668255268030(l_res___0, l_i___2, l_value___3)
		x_cur___0 = (x_cur___0 + 1n)
	}
	return list__45new8524199218665778372(cast__45immutable6738434174005710678(l_res___0))
}
// n-of@((string, void) tuple2 option buffer, (string, void) tuple2 option) file:///home/andy/keen/lib/col/util.keen 122:1
const n__45of15955837396641139583 = (l_n___1, l_value___3) => {
	const l_res___0 = new (Array)(Number(l_n___1)).fill(null)
	let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(0n, l_n___1)
	while ((x_cur___0 < x_end___1)){
		const l_i___2 = x_cur___0
		set__45subscript617963672125780248(l_res___0, l_i___2, l_value___3)
		x_cur___0 = (x_cur___0 + 1n)
	}
	return list__45new12960721793473520169(cast__45immutable286593472270857830(l_res___0))
}
// n-of@((nat64, json deferred) tuple2 option buffer, (nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/col/util.keen 122:1
const n__45of6710949406958341259 = (l_n___1, l_value___3) => {
	const l_res___0 = new (Array)(Number(l_n___1)).fill(null)
	let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(0n, l_n___1)
	while ((x_cur___0 < x_end___1)){
		const l_i___2 = x_cur___0
		set__45subscript5696097553867002406(l_res___0, l_i___2, l_value___3)
		x_cur___0 = (x_cur___0 + 1n)
	}
	return list__45new15226650622981551957(cast__45immutable13910353320725199394(l_res___0))
}
// n-of@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option buffer, (uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/col/util.keen 122:1
const n__45of11049225662584343189 = (l_n___1, l_value___3) => {
	const l_res___0 = new (Array)(Number(l_n___1)).fill(null)
	let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(0n, l_n___1)
	while ((x_cur___0 < x_end___1)){
		const l_i___2 = x_cur___0
		set__45subscript3971504643566504457(l_res___0, l_i___2, l_value___3)
		x_cur___0 = (x_cur___0 + 1n)
	}
	return list__45new3579009712696609999(cast__45immutable3103504821178580756(l_res___0))
}
// n-of@((uri, lsp-diagnostic array) tuple2 option buffer, (uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/col/util.keen 122:1
const n__45of6870776905430143546 = (l_n___1, l_value___3) => {
	const l_res___0 = new (Array)(Number(l_n___1)).fill(null)
	let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(0n, l_n___1)
	while ((x_cur___0 < x_end___1)){
		const l_i___2 = x_cur___0
		set__45subscript14149303107754187177(l_res___0, l_i___2, l_value___3)
		x_cur___0 = (x_cur___0 + 1n)
	}
	return list__45new7232889064777701164(cast__45immutable4097567730802464941(l_res___0))
}
// for-star@(js-any array, js-any, js-any array, js-any) file:///home/andy/keen/lib/col/util.keen 138:1
const _async_for__45star16349909717125624255 = async (l_a___1, l_f___3) => {
	const l_out___0 = new13970664848198334300()
	;(void (await _async_some9998979276228626006(l_a___1, async l_x___2 => {
			__126__126__6116148180612731051821(l_out___0, to__45array__45view12862255755891182376((await l_f___3(l_x___2))))
			return false
		})))
	return finish11506433418931523081(l_out___0)
}
// with-index@((symbol, string) tuple2 array-view) file:///home/andy/keen/lib/col/util.keen 148:1
const with__45index9182083458239253380 = l_inner___0 =>
	new (with__45index3633457434373451827)(l_inner___0)
// with-index@((symbol, json) tuple2 array-view) file:///home/andy/keen/lib/col/util.keen 148:1
const with__45index3304259637576692824 = l_inner___0 =>
	new (with__45index18132111711419564695)(l_inner___0)
// with-index@(to-kid-result array) file:///home/andy/keen/lib/col/util.keen 148:1
const with__45index10450463021464586858 = l_inner___0 =>
	new (with__45index6798077853849460881)(l_inner___0)
// with-index@(symbol array) file:///home/andy/keen/lib/col/util.keen 148:1
const with__45index11022831463217673804 = l_inner___0 =>
	new (with__45index12490183017769180389)(l_inner___0)
// with-index@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view) file:///home/andy/keen/lib/col/util.keen 148:1
const with__45index17957258180421635239 = l_inner___0 =>
	new (with__45index15081844335267981266)(l_inner___0)
// with-index@(json array) file:///home/andy/keen/lib/col/util.keen 148:1
const with__45index5518204707589239610 = l_inner___0 =>
	new (with__45index17642999489198635040)(l_inner___0)
// inner@((symbol, string) tuple2 array-view) file:///home/andy/keen/lib/col/util.keen 148:25
const inner13094900282322595862 = l_a___0 =>
	l_a___0.inner
// inner@(json array) file:///home/andy/keen/lib/col/util.keen 148:25
const inner1493791475164988849 = l_a___0 =>
	l_a___0.inner
// inner@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view) file:///home/andy/keen/lib/col/util.keen 148:25
const inner1753194812089961501 = l_a___0 =>
	l_a___0.inner
// inner@(to-kid-result array) file:///home/andy/keen/lib/col/util.keen 148:25
const inner11882582214815893678 = l_a___0 =>
	l_a___0.inner
// inner@((symbol, json) tuple2 array-view) file:///home/andy/keen/lib/col/util.keen 148:25
const inner17791677257656031666 = l_a___0 =>
	l_a___0.inner
// inner@(symbol array) file:///home/andy/keen/lib/col/util.keen 148:25
const inner5292826275720053297 = l_a___0 =>
	l_a___0.inner
// size@(symbol array) file:///home/andy/keen/lib/col/util.keen 149:1
const size13018077405350180673 = l_a___0 =>
	BigInt(inner5292826275720053297(l_a___0).length)
// size@(json array) file:///home/andy/keen/lib/col/util.keen 149:1
const size665060268830155703 = l_a___0 =>
	BigInt(inner1493791475164988849(l_a___0).length)
// size@(to-kid-result array) file:///home/andy/keen/lib/col/util.keen 149:1
const size18293749903590700169 = l_a___0 =>
	BigInt(inner11882582214815893678(l_a___0).length)
// some@((symbol, string) tuple2 array-view, (symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 151:1
const some9205118169912614970 = (l_a___1, l_f___4) => {
	let l_i___0
	return ((l_i___0 = 0n) , some829836533376232637(inner13094900282322595862(l_a___1), l_x___2 => {
			const l_res___3 = l_f___4(new18363166484442259764(l_i___0, l_x___2))
			l_i___0 = __431000895641751717785(l_i___0, 1n)
			return l_res___3
		}))
}
// some@(json array, json) file:///home/andy/keen/lib/col/util.keen 151:1
const some4070818446446953467 = (l_a___1, l_f___4) => {
	let l_i___0
	return ((l_i___0 = 0n) , some9306278523113539137(inner1493791475164988849(l_a___1), l_x___2 => {
			const l_res___3 = l_f___4(new7302679732856523335(l_i___0, l_x___2))
			l_i___0 = __431000895641751717785(l_i___0, 1n)
			return l_res___3
		}))
}
// some@(to-kid-result array, to-kid-result) file:///home/andy/keen/lib/col/util.keen 151:1
const some14558381409136213200 = (l_a___1, l_f___4) => {
	let l_i___0
	return ((l_i___0 = 0n) , some17952449376902373714(inner11882582214815893678(l_a___1), l_x___2 => {
			const l_res___3 = l_f___4(new768004480104862432(l_i___0, l_x___2))
			l_i___0 = __431000895641751717785(l_i___0, 1n)
			return l_res___3
		}))
}
// some@((symbol, json) tuple2 array-view, (symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 151:1
const some15060815591339072174 = (l_a___1, l_f___4) => {
	let l_i___0
	return ((l_i___0 = 0n) , some16946768562539215233(inner17791677257656031666(l_a___1), l_x___2 => {
			const l_res___3 = l_f___4(new10910183378474626096(l_i___0, l_x___2))
			l_i___0 = __431000895641751717785(l_i___0, 1n)
			return l_res___3
		}))
}
// some@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 array-view, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 151:1
const some14901728061074231733 = (l_a___1, l_f___4) => {
	let l_i___0
	return ((l_i___0 = 0n) , some15110223799684909316(inner1753194812089961501(l_a___1), l_x___2 => {
			const l_res___3 = l_f___4(new6974291735633534611(l_i___0, l_x___2))
			l_i___0 = __431000895641751717785(l_i___0, 1n)
			return l_res___3
		}))
}
// some@(symbol array, symbol) file:///home/andy/keen/lib/col/util.keen 151:1
const some819309246884331252 = (l_a___1, l_f___4) => {
	let l_i___0
	return ((l_i___0 = 0n) , some6698690281439332310(inner5292826275720053297(l_a___1), l_x___2 => {
			const l_res___3 = l_f___4(new7844032219794201287(l_i___0, l_x___2))
			l_i___0 = __431000895641751717785(l_i___0, 1n)
			return l_res___3
		}))
}
// split@(char8 array-view, string, char8 array-iterator, char8) file:///home/andy/keen/lib/col/util.keen 158:1
const split4387416293401962831 = (l_a___2, l_split__45by___6) => {
	const l_out___0 = new17039752076147272456()
	let l_part__45start___1 = begin1652849595900823797(l_a___2)
	const l_iter___3 = copy10866195281237217353(l_part__45start___1)
	while (true){
		const l_temp___4 = (() => {
			const l_before___5 = copy10866195281237217353(l_iter___3)
			if (try__45take__45all6396026918720803190(l_iter___3, l_split__45by___6)) {
				__126__614708244854203816895(l_out___0, slice4867597206389270175(l_part__45start___1, l_before___5))
				l_part__45start___1 = copy10866195281237217353(l_iter___3)
				return c____558()
			} else {
				if (((typeof try__45take__45next4456695352035296389(l_iter___3)) === "number")) {
					return c____558()
				} else {
					__126__614708244854203816895(l_out___0, slice4867597206389270175(l_part__45start___1, l_iter___3))
					return finish__45array13933044359192171269(l_out___0)
				}
			}
		})()
		const x_matched___0 = l_temp___4
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// swap-at@((symbol, json) tuple2 buffer-view, (symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 228:1
const swap__45at18413308812503782592 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript5437495731169276617(l_a___1, l_i___2)
	set__45subscript3285112504153836831(l_a___1, l_i___2, subscript5437495731169276617(l_a___1, l_j___3))
	set__45subscript3285112504153836831(l_a___1, l_j___3, l_temp___0)
}
// swap-at@(symbol buffer-view, symbol) file:///home/andy/keen/lib/col/util.keen 228:1
const swap__45at17465476278573498119 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript13708057024034888817(l_a___1, l_i___2)
	set__45subscript6317975469413682910(l_a___1, l_i___2, subscript13708057024034888817(l_a___1, l_j___3))
	set__45subscript6317975469413682910(l_a___1, l_j___3, l_temp___0)
}
// swap-at@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 228:1
const swap__45at14801990343348459085 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript3082251864539807484(l_a___1, l_i___2)
	set__45subscript3459794504644078354(l_a___1, l_i___2, subscript3082251864539807484(l_a___1, l_j___3))
	set__45subscript3459794504644078354(l_a___1, l_j___3, l_temp___0)
}
// swap-at@(json buffer-view, json) file:///home/andy/keen/lib/col/util.keen 228:1
const swap__45at7902712280062940874 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript11390493588088933692(l_a___1, l_i___2)
	set__45subscript8791729112147023757(l_a___1, l_i___2, subscript11390493588088933692(l_a___1, l_j___3))
	set__45subscript8791729112147023757(l_a___1, l_j___3, l_temp___0)
}
// swap-at@((symbol, json) tuple2 buffer, (symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 228:1
const swap__45at6041771058159127079 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript12402752052135311052(l_a___1, l_i___2)
	set__45subscript8199566139078030845(l_a___1, l_i___2, subscript12402752052135311052(l_a___1, l_j___3))
	set__45subscript8199566139078030845(l_a___1, l_j___3, l_temp___0)
}
// swap-at@((symbol, string) tuple2 buffer, (symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 228:1
const swap__45at1609377236298854247 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript15393968468724643518(l_a___1, l_i___2)
	set__45subscript18141869102783312143(l_a___1, l_i___2, subscript15393968468724643518(l_a___1, l_j___3))
	set__45subscript18141869102783312143(l_a___1, l_j___3, l_temp___0)
}
// swap-at@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer-view, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 228:1
const swap__45at4227949902382558491 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript9864463184586062056(l_a___1, l_i___2)
	set__45subscript9355737573813490262(l_a___1, l_i___2, subscript9864463184586062056(l_a___1, l_j___3))
	set__45subscript9355737573813490262(l_a___1, l_j___3, l_temp___0)
}
// swap-at@((symbol, string) tuple2 buffer-view, (symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 228:1
const swap__45at18073115686719083898 = (l_a___1, l_i___2, l_j___3) => {
	const l_temp___0 = subscript5939571422085453059(l_a___1, l_i___2)
	set__45subscript7966972918960996598(l_a___1, l_i___2, subscript5939571422085453059(l_a___1, l_j___3))
	set__45subscript7966972918960996598(l_a___1, l_j___3, l_temp___0)
}
// swap-at@((symbol, string) tuple2 buffer-view, (symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 238:1
const swap__45at895860138272227069 = (l_a___0, l_i___1, l_j___2) =>
	swap__45at18073115686719083898(l_a___0, to__45index11614418243670674547(l_a___0, l_i___1), to__45index11614418243670674547(l_a___0, l_j___2))
// swap-at@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer-view, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 238:1
const swap__45at2012136483774325186 = (l_a___0, l_i___1, l_j___2) =>
	swap__45at4227949902382558491(l_a___0, to__45index8965393381753164480(l_a___0, l_i___1), to__45index8965393381753164480(l_a___0, l_j___2))
// swap-at@((symbol, json) tuple2 buffer-view, (symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 238:1
const swap__45at466984550709770011 = (l_a___0, l_i___1, l_j___2) =>
	swap__45at18413308812503782592(l_a___0, to__45index2828757378095408577(l_a___0, l_i___1), to__45index2828757378095408577(l_a___0, l_j___2))
// take-while@(char8 array-view, char8 array-view, char8 array-iterator, char8) file:///home/andy/keen/lib/col/util.keen 260:1
const take__45while16634515640083278467 = (l_a___1, l_f___6) => {
	let l_x___5, l_temp___4, l_before___3
	const l_iter___0 = begin12904237301496444362(l_a___1)
	while (true){
		const l_temp___2 = ((l_before___3 = copy10866195281237217353(l_iter___0)) , ((l_temp___4 = try__45take__45next4456695352035296389(l_iter___0)) , ((l_x___5 = l_temp___4) , ((((typeof l_temp___4) === "number") ? l_f___6(l_x___5) : false) ? c____558() : slice4867597206389270175(begin12904237301496444362(l_a___1), l_before___3)))))
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none12752313651180151000)) {
			continue
		} else {
			if ((x_matched___0 instanceof array__45view15480539823764319015)) {
				return l_temp___2
			} else {
				return _unreachable()
			}
		}
	}
}
// ends-with@(string, char8 array-iterator, char8) file:///home/andy/keen/lib/col/util.keen 303:1
const ends__45with309784259149118 = (l_a___0, l_b___1) =>
	try__45take__45all__45prev12033016611625134103(end148137516881154859(l_a___0), l_b___1)
// try-take-all@(char8 array, char8 array-iterator, char8) file:///home/andy/keen/lib/col/util.keen 342:1
const try__45take__45all16593940086008292822 = (l_a___1, l_start___3) => {
	let l_value___8, l_temp___7
	const l_copy___0 = copy10866195281237217353(l_a___1)
	const l_iter__45start___2 = begin6893840641899948696(l_start___3)
	while (true){
		const l_temp___4 = (() => {
			const l_temp___5 = try__45take__45next4456695352035296389(l_iter__45start___2)
			const l_x___6 = l_temp___5
			if (((typeof l_temp___5) === "number")) {
				return ((l_temp___7 = try__45take__45next4456695352035296389(l_copy___0)) , ((l_value___8 = l_temp___7) , ((((typeof l_temp___7) === "number") ? Object.is(l_value___8, l_x___6) : false) ? c____558() : false)))
			} else {
				skip__45next__45n11663049513603354438(l_a___1, BigInt(l_start___3.length))
				return true
			}
		})()
		const x_matched___0 = l_temp___4
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// try-take-all@(string, char8 array-iterator, char8) file:///home/andy/keen/lib/col/util.keen 342:1
const try__45take__45all6396026918720803190 = (l_a___1, l_start___3) => {
	let l_value___8, l_temp___7
	const l_copy___0 = copy10866195281237217353(l_a___1)
	const l_iter__45start___2 = begin1652849595900823797(l_start___3)
	while (true){
		const l_temp___4 = (() => {
			const l_temp___5 = try__45take__45next4456695352035296389(l_iter__45start___2)
			const l_x___6 = l_temp___5
			if (((typeof l_temp___5) === "number")) {
				return ((l_temp___7 = try__45take__45next4456695352035296389(l_copy___0)) , ((l_value___8 = l_temp___7) , ((((typeof l_temp___7) === "number") ? Object.is(l_value___8, l_x___6) : false) ? c____558() : false)))
			} else {
				skip__45next__45n11663049513603354438(l_a___1, size17451724000551404641(l_start___3))
				return true
			}
		})()
		const x_matched___0 = l_temp___4
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// try-take-all-prev@(string, char8 array-iterator, char8) file:///home/andy/keen/lib/col/util.keen 355:1
const try__45take__45all__45prev12033016611625134103 = (l_a___1, l_end___3) => {
	let l_value___8, l_temp___7
	const l_copy___0 = copy10866195281237217353(l_a___1)
	const l_iter__45end___2 = end148137516881154859(l_end___3)
	while (true){
		const l_temp___4 = (() => {
			const l_temp___5 = try__45take__45prev13947153345326789900(l_iter__45end___2)
			const l_x___6 = l_temp___5
			if (((typeof l_temp___5) === "number")) {
				return ((l_temp___7 = try__45take__45prev13947153345326789900(l_copy___0)) , ((l_value___8 = l_temp___7) , ((((typeof l_temp___7) === "number") ? Object.is(l_value___8, l_x___6) : false) ? c____558() : false)))
			} else {
				skip__45prev__45n8721873208264622161(l_a___1, size17451724000551404641(l_end___3))
				return true
			}
		})()
		const x_matched___0 = l_temp___4
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// new@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 427:1
const new12413050201809114288 = (l_buffer___0, l_cur__45size___1) =>
	new (builder12323288060082735227)(l_buffer___0, l_cur__45size___1)
// new@(string) file:///home/andy/keen/lib/col/util.keen 427:1
const new7656508309887383974 = (l_buffer___0, l_cur__45size___1) =>
	new (builder3188125740036671108)(l_buffer___0, l_cur__45size___1)
// new@((symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 427:1
const new13947992422343171481 = (l_buffer___0, l_cur__45size___1) =>
	new (builder16402866696858817879)(l_buffer___0, l_cur__45size___1)
// new@(char8 array-view) file:///home/andy/keen/lib/col/util.keen 427:1
const new7187666998203500398 = (l_buffer___0, l_cur__45size___1) =>
	new (builder3410877773743268554)(l_buffer___0, l_cur__45size___1)
// new@(write) file:///home/andy/keen/lib/col/util.keen 427:1
const new8077938195730539883 = (l_buffer___0, l_cur__45size___1) =>
	new (builder7032837947966339799)(l_buffer___0, l_cur__45size___1)
// new@(char8) file:///home/andy/keen/lib/col/util.keen 427:1
const new11216581334749334116 = (l_buffer___0, l_cur__45size___1) =>
	new (builder8588567801563707425)(l_buffer___0, l_cur__45size___1)
// new@(json) file:///home/andy/keen/lib/col/util.keen 427:1
const new18303502649467586291 = (l_buffer___0, l_cur__45size___1) =>
	new (builder15502675838613290396)(l_buffer___0, l_cur__45size___1)
// new@((symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 427:1
const new1356058464940101761 = (l_buffer___0, l_cur__45size___1) =>
	new (builder10333849375514757046)(l_buffer___0, l_cur__45size___1)
// new@(js-any) file:///home/andy/keen/lib/col/util.keen 427:1
const new7345100107139796795 = (l_buffer___0, l_cur__45size___1) =>
	new (builder5671747725312963582)(l_buffer___0, l_cur__45size___1)
// set-buffer@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 428:5
const set__45buffer1705474817243976101 = (l_a___0, l_buffer___1) => {
	l_a___0.buffer = l_buffer___1
}
// buffer@((symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 428:5
const buffer2262021515335078289 = l_a___0 =>
	l_a___0.buffer
// set-buffer@(js-any) file:///home/andy/keen/lib/col/util.keen 428:5
const set__45buffer4261588935923483138 = (l_a___0, l_buffer___1) => {
	l_a___0.buffer = l_buffer___1
}
// buffer@(string) file:///home/andy/keen/lib/col/util.keen 428:5
const buffer14959680522471390092 = l_a___0 =>
	l_a___0.buffer
// set-buffer@(write) file:///home/andy/keen/lib/col/util.keen 428:5
const set__45buffer17260521581890294221 = (l_a___0, l_buffer___1) => {
	l_a___0.buffer = l_buffer___1
}
// buffer@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 428:5
const buffer5014203118940395048 = l_a___0 =>
	l_a___0.buffer
// buffer@(json) file:///home/andy/keen/lib/col/util.keen 428:5
const buffer12113580474395509865 = l_a___0 =>
	l_a___0.buffer
// buffer@(char8 array-view) file:///home/andy/keen/lib/col/util.keen 428:5
const buffer9790933376506063072 = l_a___0 =>
	l_a___0.buffer
// set-buffer@(json) file:///home/andy/keen/lib/col/util.keen 428:5
const set__45buffer8517954699960540898 = (l_a___0, l_buffer___1) => {
	l_a___0.buffer = l_buffer___1
}
// set-buffer@((symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 428:5
const set__45buffer41541391384998444 = (l_a___0, l_buffer___1) => {
	l_a___0.buffer = l_buffer___1
}
// buffer@(write) file:///home/andy/keen/lib/col/util.keen 428:5
const buffer16695690420522265380 = l_a___0 =>
	l_a___0.buffer
// set-buffer@(char8 array-view) file:///home/andy/keen/lib/col/util.keen 428:5
const set__45buffer7320989087468883809 = (l_a___0, l_buffer___1) => {
	l_a___0.buffer = l_buffer___1
}
// buffer@(char8) file:///home/andy/keen/lib/col/util.keen 428:5
const buffer13539915451272774098 = l_a___0 =>
	l_a___0.buffer
// set-buffer@(string) file:///home/andy/keen/lib/col/util.keen 428:5
const set__45buffer4365532501832190278 = (l_a___0, l_buffer___1) => {
	l_a___0.buffer = l_buffer___1
}
// set-buffer@((symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 428:5
const set__45buffer18252874982155990890 = (l_a___0, l_buffer___1) => {
	l_a___0.buffer = l_buffer___1
}
// buffer@((symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 428:5
const buffer17719552216038034939 = l_a___0 =>
	l_a___0.buffer
// set-buffer@(char8) file:///home/andy/keen/lib/col/util.keen 428:5
const set__45buffer9961797441104576552 = (l_a___0, l_buffer___1) => {
	l_a___0.buffer = l_buffer___1
}
// buffer@(js-any) file:///home/andy/keen/lib/col/util.keen 428:5
const buffer2828278016774025893 = l_a___0 =>
	l_a___0.buffer
// set-cur-size@(json) file:///home/andy/keen/lib/col/util.keen 429:5
const set__45cur__45size7221201359814866879 = (l_a___0, l_cur__45size___1) => {
	l_a___0["cur-size"] = l_cur__45size___1
}
// cur-size@(string) file:///home/andy/keen/lib/col/util.keen 429:5
const cur__45size5883229968917108887 = l_a___0 =>
	l_a___0["cur-size"]
// cur-size@(json) file:///home/andy/keen/lib/col/util.keen 429:5
const cur__45size13095296705094342408 = l_a___0 =>
	l_a___0["cur-size"]
// cur-size@(js-any) file:///home/andy/keen/lib/col/util.keen 429:5
const cur__45size13697524458807106143 = l_a___0 =>
	l_a___0["cur-size"]
// set-cur-size@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 429:5
const set__45cur__45size15819110351699161494 = (l_a___0, l_cur__45size___1) => {
	l_a___0["cur-size"] = l_cur__45size___1
}
// cur-size@(char8) file:///home/andy/keen/lib/col/util.keen 429:5
const cur__45size8409001998888817412 = l_a___0 =>
	l_a___0["cur-size"]
// cur-size@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 429:5
const cur__45size3267445355569176355 = l_a___0 =>
	l_a___0["cur-size"]
// set-cur-size@(js-any) file:///home/andy/keen/lib/col/util.keen 429:5
const set__45cur__45size10320494943715509172 = (l_a___0, l_cur__45size___1) => {
	l_a___0["cur-size"] = l_cur__45size___1
}
// set-cur-size@(char8 array-view) file:///home/andy/keen/lib/col/util.keen 429:5
const set__45cur__45size13951088927413825467 = (l_a___0, l_cur__45size___1) => {
	l_a___0["cur-size"] = l_cur__45size___1
}
// set-cur-size@((symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 429:5
const set__45cur__45size10857039045445719969 = (l_a___0, l_cur__45size___1) => {
	l_a___0["cur-size"] = l_cur__45size___1
}
// cur-size@(write) file:///home/andy/keen/lib/col/util.keen 429:5
const cur__45size16044417865002927503 = l_a___0 =>
	l_a___0["cur-size"]
// set-cur-size@(string) file:///home/andy/keen/lib/col/util.keen 429:5
const set__45cur__45size7523001013201915290 = (l_a___0, l_cur__45size___1) => {
	l_a___0["cur-size"] = l_cur__45size___1
}
// cur-size@((symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 429:5
const cur__45size9882174168112976336 = l_a___0 =>
	l_a___0["cur-size"]
// set-cur-size@(char8) file:///home/andy/keen/lib/col/util.keen 429:5
const set__45cur__45size9663518143472761617 = (l_a___0, l_cur__45size___1) => {
	l_a___0["cur-size"] = l_cur__45size___1
}
// set-cur-size@(write) file:///home/andy/keen/lib/col/util.keen 429:5
const set__45cur__45size16525515734381172363 = (l_a___0, l_cur__45size___1) => {
	l_a___0["cur-size"] = l_cur__45size___1
}
// set-cur-size@((symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 429:5
const set__45cur__45size5109847336830236967 = (l_a___0, l_cur__45size___1) => {
	l_a___0["cur-size"] = l_cur__45size___1
}
// cur-size@(char8 array-view) file:///home/andy/keen/lib/col/util.keen 429:5
const cur__45size14605573949925724898 = l_a___0 =>
	l_a___0["cur-size"]
// cur-size@((symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 429:5
const cur__45size17862761351125258786 = l_a___0 =>
	l_a___0["cur-size"]
// new@(char8 array-view) file:///home/andy/keen/lib/col/util.keen 430:1
const new17039752076147272456 = () =>
	new15731330843045695809(0n)
// new@(js-any) file:///home/andy/keen/lib/col/util.keen 430:1
const new13970664848198334300 = () =>
	new13712687728735297634(0n)
// new@(char8 array-view) file:///home/andy/keen/lib/col/util.keen 432:1
const new15731330843045695809 = l_size__45hint___0 =>
	new7187666998203500398(new (Array)(Number(l_size__45hint___0)).fill(null), 0n)
// new@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 432:1
const new5588437873161234374 = l_size__45hint___0 =>
	new12413050201809114288(new (Array)(Number(l_size__45hint___0)).fill(null), 0n)
// new@(js-any) file:///home/andy/keen/lib/col/util.keen 432:1
const new13712687728735297634 = l_size__45hint___0 =>
	new7345100107139796795(new (Array)(Number(l_size__45hint___0)).fill(null), 0n)
// new@(char8) file:///home/andy/keen/lib/col/util.keen 432:1
const new5918734782291795482 = l_size__45hint___0 =>
	new11216581334749334116(new (Uint8Array)(Number(l_size__45hint___0)), 0n)
// new@(json) file:///home/andy/keen/lib/col/util.keen 432:1
const new15994309337674763105 = l_size__45hint___0 =>
	new18303502649467586291(new (Array)(Number(l_size__45hint___0)).fill(null), 0n)
// new@(write) file:///home/andy/keen/lib/col/util.keen 432:1
const new12096282031524839321 = l_size__45hint___0 =>
	new8077938195730539883(new (Array)(Number(l_size__45hint___0)).fill(null), 0n)
// new@(string) file:///home/andy/keen/lib/col/util.keen 432:1
const new2458076471182022380 = l_size__45hint___0 =>
	new7656508309887383974(new (Array)(Number(l_size__45hint___0)).fill(null), 0n)
// new@((symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 432:1
const new3883337310812807717 = l_size__45hint___0 =>
	new1356058464940101761(new (Array)(Number(l_size__45hint___0)).fill(null), 0n)
// new@((symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 432:1
const new17839240131052430781 = l_size__45hint___0 =>
	new13947992422343171481(new (Array)(Number(l_size__45hint___0)).fill(null), 0n)
// ~=@(json) file:///home/andy/keen/lib/col/util.keen 434:1
const __126__6115681950958875131434 = (l_a___0, l_value___2) => {
	if (Object.is(cur__45size13095296705094342408(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_capacity___1 = BigInt(buffer12113580474395509865(l_a___0).length)
		;(Object.is(cur__45size13095296705094342408(l_a___0), l_capacity___1) ? expand__45capacity10335483308580183414(l_a___0, (Object.is(l_capacity___1, 0n) ? 4n : __4210985385519932138510(l_capacity___1, 2n))) : (void 0))
		set__45subscript10257308038564830589(buffer12113580474395509865(l_a___0), cur__45size13095296705094342408(l_a___0), l_value___2)
		set__45cur__45size7221201359814866879(l_a___0, __431000895641751717785(cur__45size13095296705094342408(l_a___0), 1n))
	}
}
// ~=@((symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 434:1
const __126__6111647352200313770603 = (l_a___0, l_value___2) => {
	if (Object.is(cur__45size9882174168112976336(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_capacity___1 = BigInt(buffer2262021515335078289(l_a___0).length)
		;(Object.is(cur__45size9882174168112976336(l_a___0), l_capacity___1) ? expand__45capacity14580274481010541950(l_a___0, (Object.is(l_capacity___1, 0n) ? 4n : __4210985385519932138510(l_capacity___1, 2n))) : (void 0))
		set__45subscript18141869102783312143(buffer2262021515335078289(l_a___0), cur__45size9882174168112976336(l_a___0), l_value___2)
		set__45cur__45size5109847336830236967(l_a___0, __431000895641751717785(cur__45size9882174168112976336(l_a___0), 1n))
	}
}
// ~=@(char8 array-view) file:///home/andy/keen/lib/col/util.keen 434:1
const __126__614708244854203816895 = (l_a___0, l_value___2) => {
	if (Object.is(cur__45size14605573949925724898(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_capacity___1 = BigInt(buffer9790933376506063072(l_a___0).length)
		;(Object.is(cur__45size14605573949925724898(l_a___0), l_capacity___1) ? expand__45capacity4527472477547553090(l_a___0, (Object.is(l_capacity___1, 0n) ? 4n : __4210985385519932138510(l_capacity___1, 2n))) : (void 0))
		set__45subscript9315069588955649691(buffer9790933376506063072(l_a___0), cur__45size14605573949925724898(l_a___0), l_value___2)
		set__45cur__45size13951088927413825467(l_a___0, __431000895641751717785(cur__45size14605573949925724898(l_a___0), 1n))
	}
}
// ~=@((symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 434:1
const __126__6116067417997219459418 = (l_a___0, l_value___2) => {
	if (Object.is(cur__45size17862761351125258786(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_capacity___1 = BigInt(buffer17719552216038034939(l_a___0).length)
		;(Object.is(cur__45size17862761351125258786(l_a___0), l_capacity___1) ? expand__45capacity505160868682578464(l_a___0, (Object.is(l_capacity___1, 0n) ? 4n : __4210985385519932138510(l_capacity___1, 2n))) : (void 0))
		set__45subscript8199566139078030845(buffer17719552216038034939(l_a___0), cur__45size17862761351125258786(l_a___0), l_value___2)
		set__45cur__45size10857039045445719969(l_a___0, __431000895641751717785(cur__45size17862761351125258786(l_a___0), 1n))
	}
}
// ~=@(write) file:///home/andy/keen/lib/col/util.keen 434:1
const __126__614551491732000135133 = (l_a___0, l_value___2) => {
	if (Object.is(cur__45size16044417865002927503(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_capacity___1 = BigInt(buffer16695690420522265380(l_a___0).length)
		;(Object.is(cur__45size16044417865002927503(l_a___0), l_capacity___1) ? expand__45capacity7529590951880520021(l_a___0, (Object.is(l_capacity___1, 0n) ? 4n : __4210985385519932138510(l_capacity___1, 2n))) : (void 0))
		set__45subscript1604259959832778482(buffer16695690420522265380(l_a___0), cur__45size16044417865002927503(l_a___0), l_value___2)
		set__45cur__45size16525515734381172363(l_a___0, __431000895641751717785(cur__45size16044417865002927503(l_a___0), 1n))
	}
}
// ~=@(char8) file:///home/andy/keen/lib/col/util.keen 434:1
const __126__6114764821344557714604 = (l_a___0, l_value___2) => {
	if (Object.is(cur__45size8409001998888817412(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_capacity___1 = BigInt(buffer13539915451272774098(l_a___0).length)
		;(Object.is(cur__45size8409001998888817412(l_a___0), l_capacity___1) ? expand__45capacity16187068317969039339(l_a___0, (Object.is(l_capacity___1, 0n) ? 4n : __4210985385519932138510(l_capacity___1, 2n))) : (void 0))
		set__45subscript15235425381790505473(buffer13539915451272774098(l_a___0), cur__45size8409001998888817412(l_a___0), l_value___2)
		set__45cur__45size9663518143472761617(l_a___0, __431000895641751717785(cur__45size8409001998888817412(l_a___0), 1n))
	}
}
// ~=@(js-any) file:///home/andy/keen/lib/col/util.keen 434:1
const __126__6112272457109475534170 = (l_a___0, l_value___2) => {
	if (Object.is(cur__45size13697524458807106143(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_capacity___1 = BigInt(buffer2828278016774025893(l_a___0).length)
		;(Object.is(cur__45size13697524458807106143(l_a___0), l_capacity___1) ? expand__45capacity4481951256495981375(l_a___0, (Object.is(l_capacity___1, 0n) ? 4n : __4210985385519932138510(l_capacity___1, 2n))) : (void 0))
		set__45subscript2753674786437724068(buffer2828278016774025893(l_a___0), cur__45size13697524458807106143(l_a___0), l_value___2)
		set__45cur__45size10320494943715509172(l_a___0, __431000895641751717785(cur__45size13697524458807106143(l_a___0), 1n))
	}
}
// ~=@(string) file:///home/andy/keen/lib/col/util.keen 434:1
const __126__617676049230832921251 = (l_a___0, l_value___2) => {
	if (Object.is(cur__45size5883229968917108887(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_capacity___1 = BigInt(buffer14959680522471390092(l_a___0).length)
		;(Object.is(cur__45size5883229968917108887(l_a___0), l_capacity___1) ? expand__45capacity13436228072914512797(l_a___0, (Object.is(l_capacity___1, 0n) ? 4n : __4210985385519932138510(l_capacity___1, 2n))) : (void 0))
		set__45subscript7104771549754922142(buffer14959680522471390092(l_a___0), cur__45size5883229968917108887(l_a___0), l_value___2)
		set__45cur__45size7523001013201915290(l_a___0, __431000895641751717785(cur__45size5883229968917108887(l_a___0), 1n))
	}
}
// ~=@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 434:1
const __126__6111971055254624379114 = (l_a___0, l_value___2) => {
	if (Object.is(cur__45size3267445355569176355(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_capacity___1 = BigInt(buffer5014203118940395048(l_a___0).length)
		;(Object.is(cur__45size3267445355569176355(l_a___0), l_capacity___1) ? expand__45capacity3360777497635372297(l_a___0, (Object.is(l_capacity___1, 0n) ? 4n : __4210985385519932138510(l_capacity___1, 2n))) : (void 0))
		set__45subscript3459794504644078354(buffer5014203118940395048(l_a___0), cur__45size3267445355569176355(l_a___0), l_value___2)
		set__45cur__45size15819110351699161494(l_a___0, __431000895641751717785(cur__45size3267445355569176355(l_a___0), 1n))
	}
}
// ~~=@(char8) file:///home/andy/keen/lib/col/util.keen 441:1
const __126__126__611782433431129225455 = (l_a___0, l_values___3) => {
	if (Object.is(cur__45size8409001998888817412(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_capacity___1 = BigInt(buffer13539915451272774098(l_a___0).length)
		const l_new__45size___2 = __431000895641751717785(cur__45size8409001998888817412(l_a___0), size4088222861950865375(l_values___3))
		;(__625060923374247189753(l_new__45size___2, l_capacity___1) ? expand__45capacity16187068317969039339(l_a___0, round__45up__45to__45power__45of__45two6348294377224655184(__431000895641751717785(cur__45size8409001998888817412(l_a___0), size4088222861950865375(l_values___3)))) : (void 0))
		set__45subscript13684078888055384884(buffer13539915451272774098(l_a___0), __46__467720007973451370645(cur__45size8409001998888817412(l_a___0), l_new__45size___2), l_values___3)
		set__45cur__45size9663518143472761617(l_a___0, __431000895641751717785(cur__45size8409001998888817412(l_a___0), size4088222861950865375(l_values___3)))
	}
}
// ~~=@(js-any) file:///home/andy/keen/lib/col/util.keen 441:1
const __126__126__6116148180612731051821 = (l_a___0, l_values___3) => {
	if (Object.is(cur__45size13697524458807106143(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_capacity___1 = BigInt(buffer2828278016774025893(l_a___0).length)
		const l_new__45size___2 = __431000895641751717785(cur__45size13697524458807106143(l_a___0), size16095144483816130294(l_values___3))
		;(__625060923374247189753(l_new__45size___2, l_capacity___1) ? expand__45capacity4481951256495981375(l_a___0, round__45up__45to__45power__45of__45two6348294377224655184(__431000895641751717785(cur__45size13697524458807106143(l_a___0), size16095144483816130294(l_values___3)))) : (void 0))
		set__45subscript419546580692685588(buffer2828278016774025893(l_a___0), __46__467720007973451370645(cur__45size13697524458807106143(l_a___0), l_new__45size___2), l_values___3)
		set__45cur__45size10320494943715509172(l_a___0, __431000895641751717785(cur__45size13697524458807106143(l_a___0), size16095144483816130294(l_values___3)))
	}
}
// expand-capacity@(char8 array-view) file:///home/andy/keen/lib/col/util.keen 449:1
const expand__45capacity4527472477547553090 = (l_a___1, l_new__45capacity___0) => {
	if (__625060923374247189753(l_new__45capacity___0, BigInt(buffer9790933376506063072(l_a___1).length))) {
		const l_new__45buffer___2 = new (Array)(Number(l_new__45capacity___0)).fill(null)
		set__45subscript12101196968109907520(l_new__45buffer___2, __46__467720007973451370645(0n, cur__45size14605573949925724898(l_a___1)), subscript15132309034164185843(buffer9790933376506063072(l_a___1), __46__467720007973451370645(0n, cur__45size14605573949925724898(l_a___1))))
		set__45buffer7320989087468883809(l_a___1, l_new__45buffer___2)
	} else {
		throw new (error14987278044892349075)(c____352())
	}
}
// expand-capacity@(json) file:///home/andy/keen/lib/col/util.keen 449:1
const expand__45capacity10335483308580183414 = (l_a___1, l_new__45capacity___0) => {
	if (__625060923374247189753(l_new__45capacity___0, BigInt(buffer12113580474395509865(l_a___1).length))) {
		const l_new__45buffer___2 = new (Array)(Number(l_new__45capacity___0)).fill(null)
		set__45subscript8810507403269082516(l_new__45buffer___2, __46__467720007973451370645(0n, cur__45size13095296705094342408(l_a___1)), subscript12724038510294748933(buffer12113580474395509865(l_a___1), __46__467720007973451370645(0n, cur__45size13095296705094342408(l_a___1))))
		set__45buffer8517954699960540898(l_a___1, l_new__45buffer___2)
	} else {
		throw new (error14987278044892349075)(c____352())
	}
}
// expand-capacity@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 449:1
const expand__45capacity3360777497635372297 = (l_a___1, l_new__45capacity___0) => {
	if (__625060923374247189753(l_new__45capacity___0, BigInt(buffer5014203118940395048(l_a___1).length))) {
		const l_new__45buffer___2 = new (Array)(Number(l_new__45capacity___0)).fill(null)
		set__45subscript9205509705108398431(l_new__45buffer___2, __46__467720007973451370645(0n, cur__45size3267445355569176355(l_a___1)), subscript4715983855980805812(buffer5014203118940395048(l_a___1), __46__467720007973451370645(0n, cur__45size3267445355569176355(l_a___1))))
		set__45buffer1705474817243976101(l_a___1, l_new__45buffer___2)
	} else {
		throw new (error14987278044892349075)(c____352())
	}
}
// expand-capacity@((symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 449:1
const expand__45capacity505160868682578464 = (l_a___1, l_new__45capacity___0) => {
	if (__625060923374247189753(l_new__45capacity___0, BigInt(buffer17719552216038034939(l_a___1).length))) {
		const l_new__45buffer___2 = new (Array)(Number(l_new__45capacity___0)).fill(null)
		set__45subscript3540254546207344206(l_new__45buffer___2, __46__467720007973451370645(0n, cur__45size17862761351125258786(l_a___1)), subscript13544033556275940791(buffer17719552216038034939(l_a___1), __46__467720007973451370645(0n, cur__45size17862761351125258786(l_a___1))))
		set__45buffer41541391384998444(l_a___1, l_new__45buffer___2)
	} else {
		throw new (error14987278044892349075)(c____352())
	}
}
// expand-capacity@(string) file:///home/andy/keen/lib/col/util.keen 449:1
const expand__45capacity13436228072914512797 = (l_a___1, l_new__45capacity___0) => {
	if (__625060923374247189753(l_new__45capacity___0, BigInt(buffer14959680522471390092(l_a___1).length))) {
		const l_new__45buffer___2 = new (Array)(Number(l_new__45capacity___0)).fill(null)
		set__45subscript12907419351611509267(l_new__45buffer___2, __46__467720007973451370645(0n, cur__45size5883229968917108887(l_a___1)), subscript1133646315536580985(buffer14959680522471390092(l_a___1), __46__467720007973451370645(0n, cur__45size5883229968917108887(l_a___1))))
		set__45buffer4365532501832190278(l_a___1, l_new__45buffer___2)
	} else {
		throw new (error14987278044892349075)(c____352())
	}
}
// expand-capacity@(write) file:///home/andy/keen/lib/col/util.keen 449:1
const expand__45capacity7529590951880520021 = (l_a___1, l_new__45capacity___0) => {
	if (__625060923374247189753(l_new__45capacity___0, BigInt(buffer16695690420522265380(l_a___1).length))) {
		const l_new__45buffer___2 = new (Array)(Number(l_new__45capacity___0)).fill(null)
		set__45subscript14860236310332733470(l_new__45buffer___2, __46__467720007973451370645(0n, cur__45size16044417865002927503(l_a___1)), subscript4979193087136831612(buffer16695690420522265380(l_a___1), __46__467720007973451370645(0n, cur__45size16044417865002927503(l_a___1))))
		set__45buffer17260521581890294221(l_a___1, l_new__45buffer___2)
	} else {
		throw new (error14987278044892349075)(c____352())
	}
}
// expand-capacity@((symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 449:1
const expand__45capacity14580274481010541950 = (l_a___1, l_new__45capacity___0) => {
	if (__625060923374247189753(l_new__45capacity___0, BigInt(buffer2262021515335078289(l_a___1).length))) {
		const l_new__45buffer___2 = new (Array)(Number(l_new__45capacity___0)).fill(null)
		set__45subscript169241441085826268(l_new__45buffer___2, __46__467720007973451370645(0n, cur__45size9882174168112976336(l_a___1)), subscript17597295987698015917(buffer2262021515335078289(l_a___1), __46__467720007973451370645(0n, cur__45size9882174168112976336(l_a___1))))
		set__45buffer18252874982155990890(l_a___1, l_new__45buffer___2)
	} else {
		throw new (error14987278044892349075)(c____352())
	}
}
// expand-capacity@(js-any) file:///home/andy/keen/lib/col/util.keen 449:1
const expand__45capacity4481951256495981375 = (l_a___1, l_new__45capacity___0) => {
	if (__625060923374247189753(l_new__45capacity___0, BigInt(buffer2828278016774025893(l_a___1).length))) {
		const l_new__45buffer___2 = new (Array)(Number(l_new__45capacity___0)).fill(null)
		set__45subscript13024379930591495813(l_new__45buffer___2, __46__467720007973451370645(0n, cur__45size13697524458807106143(l_a___1)), subscript15575604829903262476(buffer2828278016774025893(l_a___1), __46__467720007973451370645(0n, cur__45size13697524458807106143(l_a___1))))
		set__45buffer4261588935923483138(l_a___1, l_new__45buffer___2)
	} else {
		throw new (error14987278044892349075)(c____352())
	}
}
// expand-capacity@(char8) file:///home/andy/keen/lib/col/util.keen 449:1
const expand__45capacity16187068317969039339 = (l_a___1, l_new__45capacity___0) => {
	if (__625060923374247189753(l_new__45capacity___0, BigInt(buffer13539915451272774098(l_a___1).length))) {
		const l_new__45buffer___2 = new (Uint8Array)(Number(l_new__45capacity___0))
		set__45subscript16434415026781237539(l_new__45buffer___2, __46__467720007973451370645(0n, cur__45size8409001998888817412(l_a___1)), subscript9604316733717454766(buffer13539915451272774098(l_a___1), __46__467720007973451370645(0n, cur__45size8409001998888817412(l_a___1))))
		set__45buffer9961797441104576552(l_a___1, l_new__45buffer___2)
	} else {
		throw new (error14987278044892349075)(c____352())
	}
}
// finish-array@((symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 455:1
const finish__45array17852254272079733376 = l_a___0 => {
	if (Object.is(cur__45size9882174168112976336(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_size___1 = cur__45size9882174168112976336(l_a___0)
		set__45cur__45size5109847336830236967(l_a___0, 18446744073709551615n)
		const l_buffer___2 = buffer2262021515335078289(l_a___0)
		set__45buffer18252874982155990890(l_a___0, new (Array)(Number(0n)).fill(null))
		return (Object.is(BigInt(l_buffer___2.length), l_size___1) ? cast__45immutable8320426461937191125(l_buffer___2) : to12811730040321087757(subscript17597295987698015917(l_buffer___2, __46__467720007973451370645(0n, l_size___1))))
	}
}
// finish-array@(write) file:///home/andy/keen/lib/col/util.keen 455:1
const finish__45array15666978035401110148 = l_a___0 => {
	if (Object.is(cur__45size16044417865002927503(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_size___1 = cur__45size16044417865002927503(l_a___0)
		set__45cur__45size16525515734381172363(l_a___0, 18446744073709551615n)
		const l_buffer___2 = buffer16695690420522265380(l_a___0)
		set__45buffer17260521581890294221(l_a___0, new (Array)(Number(0n)).fill(null))
		return (Object.is(BigInt(l_buffer___2.length), l_size___1) ? cast__45immutable13827858657026735903(l_buffer___2) : to9963873249488166197(subscript4979193087136831612(l_buffer___2, __46__467720007973451370645(0n, l_size___1))))
	}
}
// finish-array@(json) file:///home/andy/keen/lib/col/util.keen 455:1
const finish__45array17282362250425694444 = l_a___0 => {
	if (Object.is(cur__45size13095296705094342408(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_size___1 = cur__45size13095296705094342408(l_a___0)
		set__45cur__45size7221201359814866879(l_a___0, 18446744073709551615n)
		const l_buffer___2 = buffer12113580474395509865(l_a___0)
		set__45buffer8517954699960540898(l_a___0, new (Array)(Number(0n)).fill(null))
		return (Object.is(BigInt(l_buffer___2.length), l_size___1) ? cast__45immutable652598698568391768(l_buffer___2) : to17633910069442925949(subscript12724038510294748933(l_buffer___2, __46__467720007973451370645(0n, l_size___1))))
	}
}
// finish-array@(char8) file:///home/andy/keen/lib/col/util.keen 455:1
const finish__45array6775183997622635513 = l_a___0 => {
	if (Object.is(cur__45size8409001998888817412(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_size___1 = cur__45size8409001998888817412(l_a___0)
		set__45cur__45size9663518143472761617(l_a___0, 18446744073709551615n)
		const l_buffer___2 = buffer13539915451272774098(l_a___0)
		set__45buffer9961797441104576552(l_a___0, new (Uint8Array)(Number(0n)))
		return (Object.is(BigInt(l_buffer___2.length), l_size___1) ? cast__45immutable2674649864579937666(l_buffer___2) : to1213724640967123398(subscript9604316733717454766(l_buffer___2, __46__467720007973451370645(0n, l_size___1))))
	}
}
// finish-array@(js-any) file:///home/andy/keen/lib/col/util.keen 455:1
const finish__45array16476635874697653910 = l_a___0 => {
	if (Object.is(cur__45size13697524458807106143(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_size___1 = cur__45size13697524458807106143(l_a___0)
		set__45cur__45size10320494943715509172(l_a___0, 18446744073709551615n)
		const l_buffer___2 = buffer2828278016774025893(l_a___0)
		set__45buffer4261588935923483138(l_a___0, new (Array)(Number(0n)).fill(null))
		return (Object.is(BigInt(l_buffer___2.length), l_size___1) ? cast__45immutable6716579314827176193(l_buffer___2) : to16397016265239311406(subscript15575604829903262476(l_buffer___2, __46__467720007973451370645(0n, l_size___1))))
	}
}
// finish-array@((symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 455:1
const finish__45array16382752233168605944 = l_a___0 => {
	if (Object.is(cur__45size17862761351125258786(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_size___1 = cur__45size17862761351125258786(l_a___0)
		set__45cur__45size10857039045445719969(l_a___0, 18446744073709551615n)
		const l_buffer___2 = buffer17719552216038034939(l_a___0)
		set__45buffer41541391384998444(l_a___0, new (Array)(Number(0n)).fill(null))
		return (Object.is(BigInt(l_buffer___2.length), l_size___1) ? cast__45immutable4956731320325544819(l_buffer___2) : to18056832818132995811(subscript13544033556275940791(l_buffer___2, __46__467720007973451370645(0n, l_size___1))))
	}
}
// finish-array@(char8 array-view) file:///home/andy/keen/lib/col/util.keen 455:1
const finish__45array13933044359192171269 = l_a___0 => {
	if (Object.is(cur__45size14605573949925724898(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_size___1 = cur__45size14605573949925724898(l_a___0)
		set__45cur__45size13951088927413825467(l_a___0, 18446744073709551615n)
		const l_buffer___2 = buffer9790933376506063072(l_a___0)
		set__45buffer7320989087468883809(l_a___0, new (Array)(Number(0n)).fill(null))
		return (Object.is(BigInt(l_buffer___2.length), l_size___1) ? cast__45immutable18148872116493618412(l_buffer___2) : to9114977376189503869(subscript15132309034164185843(l_buffer___2, __46__467720007973451370645(0n, l_size___1))))
	}
}
// finish-array@(string) file:///home/andy/keen/lib/col/util.keen 455:1
const finish__45array5453443184277306611 = l_a___0 => {
	if (Object.is(cur__45size5883229968917108887(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_size___1 = cur__45size5883229968917108887(l_a___0)
		set__45cur__45size7523001013201915290(l_a___0, 18446744073709551615n)
		const l_buffer___2 = buffer14959680522471390092(l_a___0)
		set__45buffer4365532501832190278(l_a___0, new (Array)(Number(0n)).fill(null))
		return (Object.is(BigInt(l_buffer___2.length), l_size___1) ? cast__45immutable11101463694283278588(l_buffer___2) : to13968889051495777208(subscript1133646315536580985(l_buffer___2, __46__467720007973451370645(0n, l_size___1))))
	}
}
// finish-array@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 455:1
const finish__45array3530319145195171221 = l_a___0 => {
	if (Object.is(cur__45size3267445355569176355(l_a___0), 18446744073709551615n)) {
		throw new (error14987278044892349075)(c____350())
	} else {
		const l_size___1 = cur__45size3267445355569176355(l_a___0)
		set__45cur__45size15819110351699161494(l_a___0, 18446744073709551615n)
		const l_buffer___2 = buffer5014203118940395048(l_a___0)
		set__45buffer1705474817243976101(l_a___0, new (Array)(Number(0n)).fill(null))
		return (Object.is(BigInt(l_buffer___2.length), l_size___1) ? cast__45immutable10765307802391043216(l_buffer___2) : to6678503148378598962(subscript4715983855980805812(l_buffer___2, __46__467720007973451370645(0n, l_size___1))))
	}
}
// finish@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 466:1
const finish11685526559947735140 = l_a___0 =>
	list__45new12024070235391471045(finish__45array3530319145195171221(l_a___0))
// finish@(js-any buffer, js-any) file:///home/andy/keen/lib/col/util.keen 466:1
const finish17483244799684622194 = l_a___0 =>
	list__45new9812965031301167447(finish__45array16476635874697653910(l_a___0))
// finish@(write buffer, write) file:///home/andy/keen/lib/col/util.keen 466:1
const finish5009481450119300719 = l_a___0 =>
	list__45new11528379970044086209(finish__45array15666978035401110148(l_a___0))
// finish@(js-any array, js-any) file:///home/andy/keen/lib/col/util.keen 466:1
const finish11506433418931523081 = l_a___0 =>
	list__45new16687999342081306217(finish__45array16476635874697653910(l_a___0))
// finish@((symbol, string) tuple2 buffer, (symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 466:1
const finish18437496280386835419 = l_a___0 =>
	list__45new10970483815663742999(finish__45array17852254272079733376(l_a___0))
// finish@(json array, json) file:///home/andy/keen/lib/col/util.keen 466:1
const finish12194420442319202167 = l_a___0 =>
	list__45new10311441051806328311(finish__45array17282362250425694444(l_a___0))
// finish@((symbol, json) tuple2 buffer, (symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 466:1
const finish7370333964800250993 = l_a___0 =>
	list__45new9565452593385576082(finish__45array16382752233168605944(l_a___0))
// finish@(char8 array, char8) file:///home/andy/keen/lib/col/util.keen 466:1
const finish11883293804507739864 = l_a___0 =>
	list__45new14621505958909631849(finish__45array6775183997622635513(l_a___0))
// finish@((symbol, json) map, (symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 466:1
const finish6969693663194992947 = l_a___0 =>
	list__45new17278182394804174401(finish__45array16382752233168605944(l_a___0))
// finish@(string array, string) file:///home/andy/keen/lib/col/util.keen 466:1
const finish11950244138036140026 = l_a___0 =>
	list__45new7074563262074605452(finish__45array5453443184277306611(l_a___0))
// new file:///home/andy/keen/lib/col/util.keen 468:1
const new10100956007475499310 = l_size__45hint___0 =>
	new (build__45options14619063373532228768)(l_size__45hint___0)
// size-hint file:///home/andy/keen/lib/col/util.keen 469:5
const size__45hint2983372112923627037 = l_a___0 =>
	l_a___0["size-hint"]
// build file:///home/andy/keen/lib/col/util.keen 472:1
const build12971615191504386060 = l_size__45hint___0 =>
	new10100956007475499310(l_size__45hint___0)
// with-block@((symbol, string) tuple2 buffer, (symbol, string) tuple2) file:///home/andy/keen/lib/col/util.keen 474:1
const with__45block6690588850203279273 = (l_a___1, l_f___2) => {
	const l_out___0 = new3883337310812807717(size__45hint2983372112923627037(l_a___1))
	l_f___2(l_out___0)
	return finish18437496280386835419(l_out___0)
}
// with-block@(char8 array, char8) file:///home/andy/keen/lib/col/util.keen 474:1
const with__45block1895107485688960791 = (l_a___1, l_f___2) => {
	const l_out___0 = new5918734782291795482(size__45hint2983372112923627037(l_a___1))
	l_f___2(l_out___0)
	return finish11883293804507739864(l_out___0)
}
// with-block@(string array, string) file:///home/andy/keen/lib/col/util.keen 474:1
const with__45block9571222819310529135 = (l_a___1, l_f___2) => {
	const l_out___0 = new2458076471182022380(size__45hint2983372112923627037(l_a___1))
	l_f___2(l_out___0)
	return finish11950244138036140026(l_out___0)
}
// with-block@(js-any buffer, js-any) file:///home/andy/keen/lib/col/util.keen 474:1
const with__45block12386006206508186956 = (l_a___1, l_f___2) => {
	const l_out___0 = new13712687728735297634(size__45hint2983372112923627037(l_a___1))
	l_f___2(l_out___0)
	return finish17483244799684622194(l_out___0)
}
// with-block@((symbol, json) tuple2 buffer, (symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 474:1
const with__45block3856942796151020968 = (l_a___1, l_f___2) => {
	const l_out___0 = new17839240131052430781(size__45hint2983372112923627037(l_a___1))
	l_f___2(l_out___0)
	return finish7370333964800250993(l_out___0)
}
// with-block@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2 buffer, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/col/util.keen 474:1
const with__45block9867656983851878050 = (l_a___1, l_f___2) => {
	const l_out___0 = new5588437873161234374(size__45hint2983372112923627037(l_a___1))
	l_f___2(l_out___0)
	return finish11685526559947735140(l_out___0)
}
// with-block@(write buffer, write) file:///home/andy/keen/lib/col/util.keen 474:1
const with__45block12785756685867473902 = (l_a___1, l_f___2) => {
	const l_out___0 = new12096282031524839321(size__45hint2983372112923627037(l_a___1))
	l_f___2(l_out___0)
	return finish5009481450119300719(l_out___0)
}
// with-block@((symbol, json) map, (symbol, json) tuple2) file:///home/andy/keen/lib/col/util.keen 474:1
const with__45block11396783854258024558 = (l_a___1, l_f___2) => {
	const l_out___0 = new17839240131052430781(size__45hint2983372112923627037(l_a___1))
	l_f___2(l_out___0)
	return finish6969693663194992947(l_out___0)
}
// with-block@(json array, json) file:///home/andy/keen/lib/col/util.keen 474:1
const with__45block8931266565154417895 = (l_a___1, l_f___2) => {
	const l_out___0 = new15994309337674763105(size__45hint2983372112923627037(l_a___1))
	l_f___2(l_out___0)
	return finish12194420442319202167(l_out___0)
}
// zip@(symbol array, json array) file:///home/andy/keen/lib/col/util.keen 545:1
const zip8821230832327354325 = (l_a___0, l_b___1) =>
	new (zip12891861950613267480)(l_a___0, l_b___1)
// a@(symbol array, json array) file:///home/andy/keen/lib/col/util.keen 545:19
const a16116523375806674632 = l_a___0 =>
	l_a___0.a
// b@(symbol array, json array) file:///home/andy/keen/lib/col/util.keen 545:24
const b7805230885044099369 = l_a___0 =>
	l_a___0.b
// size@(symbol array, json array) file:///home/andy/keen/lib/col/util.keen 546:1
const size1577565090124402950 = l_a___0 => {
	if (Object.is(BigInt(a16116523375806674632(l_a___0).length), BigInt(b7805230885044099369(l_a___0).length))) {
		return BigInt(a16116523375806674632(l_a___0).length)
	} else {
		throw new (error14987278044892349075)(c____349())
	}
}
// some@(symbol array, symbol, json array, json) file:///home/andy/keen/lib/col/util.keen 549:1
const some11628199441445444307 = (l_a___0, l_f___2) =>
	some15196038435874883717(__46__467720007973451370645(0n, size1577565090124402950(l_a___0)), l_it___1 =>
			l_f___2(new9565238027521497727(subscript5211016159918201165(a16116523375806674632(l_a___0), l_it___1), subscript6296670998813432154(b7805230885044099369(l_a___0), l_it___1))))
// !=@(nat64) file:///home/andy/keen/lib/compare.keen 51:1
const __33__618396056177400121463 = (l_a___0, l_b___1) =>
	(Object.is(l_a___0, l_b___1) ? false : true)
// !=@(string option) file:///home/andy/keen/lib/compare.keen 51:1
const __33__6116024188522381867246 = (l_a___0, l_b___1) =>
	(__61__615447986899631667393(l_a___0, l_b___1) ? false : true)
// !=@(lsp-diagnostic-severity) file:///home/andy/keen/lib/compare.keen 51:1
const __33__611398649682775379014 = (l_a___0, l_b___1) =>
	(__61__612073437058700587129(l_a___0, l_b___1) ? false : true)
// !=@(nat8) file:///home/andy/keen/lib/compare.keen 51:1
const __33__61757946918014977495 = (l_a___0, l_b___1) =>
	(Object.is(l_a___0, l_b___1) ? false : true)
// !=@(js-any) file:///home/andy/keen/lib/compare.keen 51:1
const __33__6115318761368630375209 = (l_a___0, l_b___1) =>
	((l_a___0 === l_b___1) ? false : true)
// !=@(json) file:///home/andy/keen/lib/compare.keen 51:1
const __33__612262779385746097002 = (l_a___0, l_b___1) =>
	(__61__6113058398162984935724(l_a___0, l_b___1) ? false : true)
// !=@(line-and-character) file:///home/andy/keen/lib/compare.keen 51:1
const __33__619888018645014495013 = (l_a___0, l_b___1) =>
	(__61__6117024194640619852340(l_a___0, l_b___1) ? false : true)
// !=@(symbol) file:///home/andy/keen/lib/compare.keen 51:1
const __33__6117279925434460065169 = (l_a___0, l_b___1) =>
	(__61__611154543819848657072(l_a___0, l_b___1) ? false : true)
// !=@(char8) file:///home/andy/keen/lib/compare.keen 51:1
const __33__613528396309692303628 = (l_a___0, l_b___1) =>
	(Object.is(l_a___0, l_b___1) ? false : true)
// !=@(nat32) file:///home/andy/keen/lib/compare.keen 51:1
const __33__6110088886279708845662 = (l_a___0, l_b___1) =>
	(Object.is(l_a___0, l_b___1) ? false : true)
// <@(line-and-character) file:///home/andy/keen/lib/compare.keen 55:1
const __6013544777056381821656 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = __60__61__6211466630830516482839(l_a___0, l_b___1)) , ((x_matched___0 === 0) ? true : false))
}
// <@(nat8) file:///home/andy/keen/lib/compare.keen 55:1
const __6012245267698233631771 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0, l_b___1)) , ((x_matched___0 === 0) ? true : false))
}
// <@(float64) file:///home/andy/keen/lib/compare.keen 55:1
const __6014891222131997099809 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareFloat(l_a___0, l_b___1)) , ((x_matched___0 === 0) ? true : false))
}
// <@(nat64) file:///home/andy/keen/lib/compare.keen 55:1
const __6010307380702345989795 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0, l_b___1)) , ((x_matched___0 === 0) ? true : false))
}
// <@(nat32) file:///home/andy/keen/lib/compare.keen 55:1
const __606561095768024586357 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0, l_b___1)) , ((x_matched___0 === 0) ? true : false))
}
// <@(symbol) file:///home/andy/keen/lib/compare.keen 55:1
const __6010433963323282268396 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = __60__61__623713351476808003786(l_a___0, l_b___1)) , ((x_matched___0 === 0) ? true : false))
}
// <@(int64) file:///home/andy/keen/lib/compare.keen 55:1
const __606931787592191359368 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0, l_b___1)) , ((x_matched___0 === 0) ? true : false))
}
// <=@(nat32) file:///home/andy/keen/lib/compare.keen 61:1
const __60__6110217549696008110577 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0, l_b___1)) , ((x_matched___0 === 2) ? false : true))
}
// <=@(symbol) file:///home/andy/keen/lib/compare.keen 61:1
const __60__6110501617898216894088 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = __60__61__623713351476808003786(l_a___0, l_b___1)) , ((x_matched___0 === 2) ? false : true))
}
// <=@(nat64) file:///home/andy/keen/lib/compare.keen 61:1
const __60__616269385802849585881 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0, l_b___1)) , ((x_matched___0 === 2) ? false : true))
}
// <=@(line-and-character) file:///home/andy/keen/lib/compare.keen 61:1
const __60__619399543158548096012 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = __60__61__6211466630830516482839(l_a___0, l_b___1)) , ((x_matched___0 === 2) ? false : true))
}
// <=@(char8) file:///home/andy/keen/lib/compare.keen 61:1
const __60__6115930536883178209620 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0, l_b___1)) , ((x_matched___0 === 2) ? false : true))
}
// >@(int64) file:///home/andy/keen/lib/compare.keen 67:1
const __624041988286447589396 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0, l_b___1)) , ((x_matched___0 === 2) ? true : false))
}
// >@(nat64) file:///home/andy/keen/lib/compare.keen 67:1
const __625060923374247189753 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0, l_b___1)) , ((x_matched___0 === 2) ? true : false))
}
// >@(symbol) file:///home/andy/keen/lib/compare.keen 67:1
const __62536657173123134094 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = __60__61__623713351476808003786(l_a___0, l_b___1)) , ((x_matched___0 === 2) ? true : false))
}
// >=@(nat32) file:///home/andy/keen/lib/compare.keen 73:1
const __62__611783117445644909805 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0, l_b___1)) , ((x_matched___0 === 0) ? false : true))
}
// >=@(nat64) file:///home/andy/keen/lib/compare.keen 73:1
const __62__618892781134906463570 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0, l_b___1)) , ((x_matched___0 === 0) ? false : true))
}
// >=@(int64) file:///home/andy/keen/lib/compare.keen 73:1
const __62__611142658809551672718 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0, l_b___1)) , ((x_matched___0 === 0) ? false : true))
}
// >=@(nat8) file:///home/andy/keen/lib/compare.keen 73:1
const __62__6111202619623246333350 = (l_a___0, l_b___1) => {
	let x_matched___0
	return ((x_matched___0 = _compareIntegral(l_a___0, l_b___1)) , ((x_matched___0 === 0) ? false : true))
}
// min@(nat64) file:///home/andy/keen/lib/compare.keen 80:1
const min5984887149101995087 = (l_a___0, l_b___1) =>
	(__6010307380702345989795(l_a___0, l_b___1) ? l_a___0 : l_b___1)
// todo file:///home/andy/keen/lib/exception.keen 7:1
const todo10094731776182666185 = () =>
	new (todo11797122415505553379)()
// show file:///home/andy/keen/lib/exception.keen 16:15
const show9662701914369401736 = l_a___0 =>
	l_a___0.show
// unreachable file:///home/andy/keen/lib/exception.keen 18:1
const unreachable15541723113030349832 = () =>
	new (unreachable14113598576212083658)()
// new file:///home/andy/keen/lib/hash.keen 28:1
const new17448970398976988447 = l_seed___0 =>
	new1845203213606230927(l_seed___0, (void 0))
// finish file:///home/andy/keen/lib/hash.keen 30:1
const finish6979333805424110437 = l_a___0 =>
	state2892644743179828162(l_a___0)
// global-hash-seed file:///home/andy/keen/lib/hash.keen 38:1
const global__45hash__45seed1492198020980692852 = () =>
	global__45hash__45seed__45value17578348003282845467()
// global-hash-seed-value file:///home/andy/keen/lib/hash.keen 41:1
const global__45hash__45seed__45value17578348003282845467 = () =>
	_varget_v17067892823588717216()
// seeded-hash@(string) file:///home/andy/keen/lib/hash.keen 46:1
const seeded__45hash18372390626742224707 = l_a___1 => {
	const l_state___0 = new17448970398976988447(global__45hash__45seed1492198020980692852())
	hash11834971208188134887(l_a___1, l_state___0)
	return finish6979333805424110437(l_state___0)
}
// seeded-hash@(symbol) file:///home/andy/keen/lib/hash.keen 46:1
const seeded__45hash16463488197760757224 = l_a___1 => {
	const l_state___0 = new17448970398976988447(global__45hash__45seed1492198020980692852())
	hash17452654822403524995(l_a___1, l_state___0)
	return finish6979333805424110437(l_state___0)
}
// seeded-hash@(uri) file:///home/andy/keen/lib/hash.keen 46:1
const seeded__45hash2293041488785028857 = l_a___1 => {
	const l_state___0 = new17448970398976988447(global__45hash__45seed1492198020980692852())
	hash6431576184767856638(l_a___1, l_state___0)
	return finish6979333805424110437(l_state___0)
}
// seeded-hash@(nat64) file:///home/andy/keen/lib/hash.keen 46:1
const seeded__45hash6320026335509711958 = l_a___1 => {
	const l_state___0 = new17448970398976988447(global__45hash__45seed1492198020980692852())
	hash16287967374996838925(l_a___1, l_state___0)
	return finish6979333805424110437(l_state___0)
}
// seeded-hash@(char8 array-view) file:///home/andy/keen/lib/hash.keen 46:1
const seeded__45hash6899078035375192014 = l_a___1 => {
	const l_state___0 = new17448970398976988447(global__45hash__45seed1492198020980692852())
	hash12694538543419358769(l_a___1, l_state___0)
	return finish6979333805424110437(l_state___0)
}
// deterministic-hash@(char8 array-view) file:///home/andy/keen/lib/hash.keen 52:1
const deterministic__45hash7266208415776701854 = l_a___0 =>
	deterministic__45hash13236628718222177991(l_a___0, 1003370060459199230n)
// deterministic-hash@(char8 array-view) file:///home/andy/keen/lib/hash.keen 53:1
const deterministic__45hash13236628718222177991 = (l_a___2, l_seed___1) => {
	const l_state___0 = new17448970398976988447(l_seed___1)
	hash12694538543419358769(l_a___2, l_state___0)
	return finish6979333805424110437(l_state___0)
}
// new file:///home/andy/keen/lib/io/duration.keen 3:1
const new2220658337368847985 = l_seconds___0 =>
	new (duration11429026632846930866)(l_seconds___0)
// seconds file:///home/andy/keen/lib/io/duration.keen 5:5
const seconds954058902226661180 = l_a___0 =>
	l_a___0.seconds
// milliseconds file:///home/andy/keen/lib/io/duration.keen 17:1
const milliseconds3899873555825239115 = l_a___0 =>
	new2220658337368847985((l_a___0 * 0.001))
// milliseconds file:///home/andy/keen/lib/io/duration.keen 24:1
const milliseconds12567785926848768263 = l_a___0 =>
	(seconds954058902226661180(l_a___0) * 1000)
// monotime file:///home/andy/keen/lib/io/time.keen 13:1
const monotime17862611753135022422 = () => {
	let l_msec___0
	return ((l_msec___0 = to16122815567382831054(_global.performance.now())) , milliseconds3899873555825239115(l_msec___0))
}
// to file:///home/andy/keen/lib/js.keen 101:1
const to8207508256539019784 = l_a___0 =>
	l_a___0
// to file:///home/andy/keen/lib/js.keen 103:1
const to7922626875503340678 = l_a___0 => {
	if (((typeof l_a___0) === "boolean")) {
		return l_a___0
	} else {
		throw new (error14987278044892349075)(c____310())
	}
}
// to file:///home/andy/keen/lib/js.keen 114:1
const to14834047168491810918 = l_a___0 =>
	l_a___0
// to file:///home/andy/keen/lib/js.keen 116:1
const to10120165855316472489 = l_a___0 =>
	l_a___0
// to file:///home/andy/keen/lib/js.keen 133:1
const to14357848481777319600 = l_a___0 =>
	l_a___0
// to file:///home/andy/keen/lib/js.keen 135:1
const to16122815567382831054 = l_a___0 => {
	if (((typeof l_a___0) === "number")) {
		return l_a___0
	} else {
		throw new (error14987278044892349075)(c____369())
	}
}
// to file:///home/andy/keen/lib/js.keen 159:1
const to6394483040598368986 = l_a___0 => {
	if (to7922626875503340678(eval("x => x === (x >>> 0)")(l_a___0))) {
		return l_a___0
	} else {
		throw new (error14987278044892349075)(c____362())
	}
}
// to file:///home/andy/keen/lib/js.keen 165:1
const to5474718503984457374 = l_a___0 => {
	if (((typeof l_a___0) === "bigint")) {
		if ((l_a___0 === BigInt6762911427501363789().asUintN(64, l_a___0))) {
			return l_a___0
		} else {
			throw new (error14987278044892349075)(c____452())
		}
	} else {
		if (((typeof l_a___0) === "number")) {
			if (to7922626875503340678(Number5083144947861631043().isInteger(l_a___0))) {
				return to5474718503984457374(BigInt6762911427501363789()(l_a___0))
			} else {
				throw new (error14987278044892349075)(c____453())
			}
		} else {
			throw new (error14987278044892349075)(c____369())
		}
	}
}
// to file:///home/andy/keen/lib/js.keen 175:1
const to7876981377693269494 = l_a___0 => {
	let l_chars___1
	if (((typeof l_a___0) === "string")) {
		return ((l_chars___1 = new (_global.TextEncoder)().encode(l_a___0)) , new16542246385619872033(l_chars___1))
	} else {
		throw new (error14987278044892349075)(c____549())
	}
}
// to file:///home/andy/keen/lib/js.keen 180:1
const to11394861970819088114 = l_a___0 =>
	new (_global.TextDecoder)().decode(chars8694273362434023454(l_a___0))
// Array file:///home/andy/keen/lib/js.keen 183:1
const Array15335589691504036896 = () =>
	_global.Array
// BigInt file:///home/andy/keen/lib/js.keen 185:1
const BigInt6762911427501363789 = () =>
	_global.BigInt
// Number file:///home/andy/keen/lib/js.keen 187:1
const Number5083144947861631043 = () =>
	_global.Number
// Object file:///home/andy/keen/lib/js.keen 189:1
const Object2431823968245642323 = () =>
	_global.Object
// String file:///home/andy/keen/lib/js.keen 191:1
const String10883208873309072263 = () =>
	_global.String
// to file:///home/andy/keen/lib/js.keen 253:1
const to15021661615405738442 = l_a___0 =>
	l_a___0
// to file:///home/andy/keen/lib/js.keen 256:1
const to6727171463857493026 = l_a___0 => {
	if ((l_a___0 instanceof Array15335589691504036896())) {
		return l_a___0
	} else {
		throw new (error14987278044892349075)(c____311())
	}
}
// new@(void) file:///home/andy/keen/lib/js/deferred.keen 8:1
const new253831030863515807 = (l_promise___0, l_resolve___1) =>
	new (deferred14824656033275453911)(l_promise___0, l_resolve___1)
// new@(json) file:///home/andy/keen/lib/js/deferred.keen 8:1
const new1946321109938267242 = (l_promise___0, l_resolve___1) =>
	new (deferred6160713746550163298)(l_promise___0, l_resolve___1)
// promise@(json) file:///home/andy/keen/lib/js/deferred.keen 9:5
const promise7993941093397618737 = l_a___0 =>
	l_a___0.promise
// resolve@(json) file:///home/andy/keen/lib/js/deferred.keen 10:5
const resolve15470021730714501239 = l_a___0 =>
	l_a___0.resolve
// new@(void) file:///home/andy/keen/lib/js/deferred.keen 12:1
const new756562774359710668 = () => {
	let l_promise___3, l_f___1, l_resolve___0
	return ((l_resolve___0 = null) , ((l_f___1 = l_resolve____2 => {
		l_resolve___0 = l_resolve____2
	}) , ((l_promise___3 = new (_global.Promise)(to10120165855316472489(l_f___1))) , new253831030863515807(l_promise___3, l_resolve___0))))
}
// new@(json) file:///home/andy/keen/lib/js/deferred.keen 12:1
const new12143027758111233873 = () => {
	let l_promise___3, l_f___1, l_resolve___0
	return ((l_resolve___0 = null) , ((l_f___1 = l_resolve____2 => {
		l_resolve___0 = l_resolve____2
	}) , ((l_promise___3 = new (_global.Promise)(to10120165855316472489(l_f___1))) , new1946321109938267242(l_promise___3, l_resolve___0))))
}
// await@(json) file:///home/andy/keen/lib/js/deferred.keen 22:1
const _async_await11695185140952543398 = async l_a___0 =>
	(await promise7993941093397618737(l_a___0))
// resolve@(json) file:///home/andy/keen/lib/js/deferred.keen 27:1
const resolve13500435106860640083 = (l_a___0, l_value___1) => {
	(void resolve15470021730714501239(l_a___0)(l_value___1))
	;(void 0)
}
// create-node file:///home/andy/keen/lib/js/dom.keen 14:1
const create__45node8155601788828585795 = l_tag__45name___0 =>
	document10104092556957017792().createElement(to1007405755162848852(l_tag__45name___0))
// create-node file:///home/andy/keen/lib/js/dom.keen 17:1
const create__45node4048612157800518248 = (l_tag__45name___1, l_attr___2) => {
	const l_node___0 = create__45node8155601788828585795(l_tag__45name___1)
	for__45loop10829419920935895094(l_attr___2, l_destruct___3 => {
			const l_value___4 = l_destruct___3.b
			const l_key___5 = l_destruct___3.a
			;(void l_node___0.setAttribute(to1007405755162848852(l_key___5), to11394861970819088114(l_value___4)))
			;(void 0)
		})
	return l_node___0
}
// create-node file:///home/andy/keen/lib/js/dom.keen 22:1
const create__45node380069253245485333 = (l_tag__45name___1, l_attr___2, l_class__45name___3, l_children___4) => {
	const l_node___0 = create__45node4048612157800518248(l_tag__45name___1, l_attr___2)
	if ((l_class__45name___3 instanceof string9092701471797383860)) {
		l_node___0.className = to11394861970819088114(l_class__45name___3)
	} else {
		(void 0)
	}
	;(void l_node___0.append(...l_children___4))
	return l_node___0
}
// create-button file:///home/andy/keen/lib/js/dom.keen 35:1
const create__45button8454460037437004333 = (l_title___1, l_class__45name___2, l_children___3, l_on__45click___4) => {
	const l_res___0 = create__45node380069253245485333(_symbol51, list__45new15738010718011681032([new9294282750249516893(_symbol52, l_title___1)]), l_class__45name___2, l_children___3)
	l_res___0.onclick = to14834047168491810918(l_on__45click___4)
	return l_res___0
}
// style file:///home/andy/keen/lib/js/dom.keen 46:1
const style2323177492917899861 = l_node___0 =>
	new (style562961296817762340)(l_node___0)
// node file:///home/andy/keen/lib/js/dom.keen 46:15
const node2372778884772746526 = l_a___0 =>
	l_a___0.node
// set-subscript file:///home/andy/keen/lib/js/dom.keen 47:1
const set__45subscript5359101018827809713 = (l_a___0, l_key___1, l_value___2) => {
	node2372778884772746526(l_a___0).style[to1007405755162848852(l_key___1)] = to11394861970819088114(l_value___2)
}
// ~~= file:///home/andy/keen/lib/js/dom.keen 50:1
const __126__126__6114700015330332376719 = (l_a___4, l_properties___0) => {
	let l_key___3, l_value___2
	return for__45loop10829419920935895094(l_properties___0, l_destruct___1 =>
			((l_value___2 = l_destruct___1.b) , ((l_key___3 = l_destruct___1.a) , set__45subscript5359101018827809713(l_a___4, l_key___3, l_value___2))))
}
// classes file:///home/andy/keen/lib/js/dom.keen 54:1
const classes10076868907359993050 = l_node___0 =>
	new (classes11373242258454798301)(l_node___0)
// node file:///home/andy/keen/lib/js/dom.keen 54:17
const node12815006873139312981 = l_a___0 =>
	l_a___0.node
// ~= file:///home/andy/keen/lib/js/dom.keen 55:1
const __126__6112374103362291366922 = (l_a___0, l_class__45name___1) => {
	(void node12815006873139312981(l_a___0).classList.add(to11394861970819088114(l_class__45name___1)))
	;(void 0)
}
// -= file:///home/andy/keen/lib/js/dom.keen 57:1
const __45__615390983692247253955 = (l_a___0, l_class__45name___1) => {
	(void node12815006873139312981(l_a___0).classList.remove(to11394861970819088114(l_class__45name___1)))
	;(void 0)
}
// set-classes file:///home/andy/keen/lib/js/dom.keen 59:1
const set__45classes9907877374112971136 = (l_a___0, l_class__45names___1) => {
	l_a___0.className = to11394861970819088114(join3173081693262575807(c____382(), l_class__45names___1))
}
// toggle file:///home/andy/keen/lib/js/dom.keen 62:1
const toggle13689653920217606348 = (l_a___0, l_class__45name___1) =>
	set__45subscript15543183802825480275(l_a___0, l_class__45name___1, (!subscript1059029496257132985(l_a___0, l_class__45name___1)))
// subscript file:///home/andy/keen/lib/js/dom.keen 64:1
const subscript1059029496257132985 = (l_a___0, l_class__45name___1) =>
	to7922626875503340678(node12815006873139312981(l_a___0).classList.contains(to11394861970819088114(l_class__45name___1)))
// set-subscript file:///home/andy/keen/lib/js/dom.keen 66:1
const set__45subscript15543183802825480275 = (l_a___1, l_class__45name___2, l_value___0) =>
	(l_value___0 ? __126__6112374103362291366922(l_a___1, l_class__45name___2) : __45__615390983692247253955(l_a___1, l_class__45name___2))
// text-content file:///home/andy/keen/lib/js/dom.keen 72:1
const text__45content2237261504801362903 = l_a___0 =>
	to7876981377693269494(l_a___0.textContent)
// set-text-content file:///home/andy/keen/lib/js/dom.keen 74:1
const set__45text__45content8221937257971663238 = (l_a___0, l_text___1) => {
	l_a___0.textContent = to11394861970819088114(l_text___1)
}
// add-event-listener file:///home/andy/keen/lib/js/dom.keen 78:1
const add__45event__45listener12755357720431330007 = (l_a___0, l_event__45name___1, l_fn___2) => {
	(void l_a___0.addEventListener(to11394861970819088114(l_event__45name___1), to10120165855316472489(l_fn___2)))
	;(void 0)
}
// create-input-text file:///home/andy/keen/lib/js/dom.keen 82:1
const create__45input__45text14326232395005306174 = (l_on__45input___2, l_value___1) => {
	const l_res___0 = create__45node4048612157800518248(_symbol5, named__45new14405854769415967817(c____261(), [c____325(), l_value___1]))
	;(void l_res___0.addEventListener("input", to10120165855316472489(l_on__45input___2)))
	return l_res___0
}
// create-div file:///home/andy/keen/lib/js/dom.keen 90:1
const create__45div3550168679176634520 = () =>
	create__45div5581806103065025864(c____319())
// create-div file:///home/andy/keen/lib/js/dom.keen 92:1
const create__45div5581806103065025864 = l_class__45name___0 =>
	create__45div7678826057371039427(l_class__45name___0, c____258())
// create-div file:///home/andy/keen/lib/js/dom.keen 94:1
const create__45div7678826057371039427 = (l_class__45name___0, l_children___1) =>
	create__45node380069253245485333(_symbol20, list__45new15738010718011681032(c____294()), l_class__45name___0, l_children___1)
// create-span file:///home/andy/keen/lib/js/dom.keen 97:1
const create__45span17916826921793801086 = l_children___0 =>
	create__45span6220041900778670653(c____319(), list__45new15738010718011681032(c____294()), l_children___0)
// create-span file:///home/andy/keen/lib/js/dom.keen 99:1
const create__45span6096211447345230907 = (l_class__45name___0, l_children___1) =>
	create__45span6220041900778670653(l_class__45name___0, list__45new15738010718011681032(c____294()), l_children___1)
// create-span file:///home/andy/keen/lib/js/dom.keen 101:1
const create__45span6220041900778670653 = (l_class__45name___1, l_attr___0, l_children___2) =>
	create__45node380069253245485333(_symbol23, l_attr___0, l_class__45name___1, l_children___2)
// create-text-node file:///home/andy/keen/lib/js/dom.keen 104:1
const create__45text__45node16218478718735299168 = l_text___0 =>
	document10104092556957017792().createTextNode(to11394861970819088114(l_text___0))
// document file:///home/andy/keen/lib/js/dom.keen 107:1
const document10104092556957017792 = () =>
	_global.document
// is-text-node file:///home/andy/keen/lib/js/dom.keen 112:1
const is__45text__45node3298223931404228869 = l_a___0 =>
	Object.is(to6394483040598368986(l_a___0.nodeType), 3)
// attributes file:///home/andy/keen/lib/js/dom.keen 115:1
const attributes14633218357381336038 = l_node___0 =>
	new (attributes5212489950917554841)(l_node___0)
// node file:///home/andy/keen/lib/js/dom.keen 115:20
const node12618156793414814548 = l_a___0 =>
	l_a___0.node
// subscript file:///home/andy/keen/lib/js/dom.keen 116:1
const subscript16319589180780115891 = (l_a___1, l_attr__45name___2) => {
	let l_res___0
	return ((l_res___0 = node12618156793414814548(l_a___1).getAttribute(to1007405755162848852(l_attr__45name___2))) , ((l_res___0 === null) ? c____558() : to7876981377693269494(l_res___0)))
}
// set-subscript file:///home/andy/keen/lib/js/dom.keen 120:1
const set__45subscript17358677160123636728 = (l_a___0, l_attr__45name___1, l_value___2) => {
	(void node12618156793414814548(l_a___0).setAttribute(to1007405755162848852(l_attr__45name___1), to11394861970819088114(l_value___2)))
	;(void 0)
}
// ~~= file:///home/andy/keen/lib/js/dom.keen 126:1
const __126__126__613189257787936604857 = (l_a___4, l_attributes___0) => {
	let l_key___3, l_value___2
	return for__45loop10829419920935895094(l_attributes___0, l_destruct___1 =>
			((l_value___2 = l_destruct___1.b) , ((l_key___3 = l_destruct___1.a) , set__45subscript17358677160123636728(l_a___4, l_key___3, l_value___2))))
}
// value file:///home/andy/keen/lib/js/dom.keen 131:1
const value16397312992932854084 = l_a___1 => {
	let l_value___0
	return ((l_value___0 = l_a___1.value) , ((l_value___0 === (void 0)) ? c____319() : to7876981377693269494(l_value___0)))
}
// set-value file:///home/andy/keen/lib/js/dom.keen 136:1
const set__45value12227261877023038251 = (l_a___0, l_value___1) => {
	l_a___0.value = to11394861970819088114(l_value___1)
}
// query file:///home/andy/keen/lib/js/dom.keen 143:1
const query13781569289072002030 = (l_parent___1, l_selector___2) => {
	let l_res___0
	return ((l_res___0 = l_parent___1.querySelector(to11394861970819088114(l_selector___2))) , ((l_res___0 === null) ? new (option17597932037503078337)(0, c____558()) : new (option17597932037503078337)(1, l_res___0)))
}
// query-all file:///home/andy/keen/lib/js/dom.keen 148:1
const query__45all11850692382578512155 = (l_parent___0, l_selector___1) =>
	array__45of__45node__45list7945298692798538053(l_parent___0.querySelectorAll(to11394861970819088114(l_selector___1)))
// child-nodes file:///home/andy/keen/lib/js/dom.keen 151:1
const child__45nodes2391162592786005318 = l_a___0 =>
	array__45of__45node__45list7945298692798538053(l_a___0.childNodes)
// array-of-node-list file:///home/andy/keen/lib/js/dom.keen 154:1
const array__45of__45node__45list7945298692798538053 = l_node__45list___0 =>
	to6727171463857493026(_global.Array.from(l_node__45list___0))
// first-child file:///home/andy/keen/lib/js/dom.keen 163:1
const first__45child8957881742938708760 = l_a___1 => {
	let l_res___0
	return ((l_res___0 = l_a___1.firstChild) , ((l_res___0 === null) ? new (option17597932037503078337)(0, c____558()) : new (option17597932037503078337)(1, l_res___0)))
}
// ~= file:///home/andy/keen/lib/js/dom.keen 188:1
const __126__613104040282438970899 = (l_a___0, l_b___1) => {
	(void l_a___0.appendChild(l_b___1))
	;(void 0)
}
// ~~= file:///home/andy/keen/lib/js/dom.keen 192:1
const __126__126__614422656202344497047 = (l_a___2, l_b___0) => {
	for (const l_x___1 of l_b___0) {
		__126__613104040282438970899(l_a___2, l_x___1)
	}
}
// set-children file:///home/andy/keen/lib/js/dom.keen 197:1
const set__45children11014010319367545746 = (l_a___0, l_children___1) => {
	remove__45all__45children16510151441912951815(l_a___0)
	__126__126__614422656202344497047(l_a___0, l_children___1)
}
// remove-all-children file:///home/andy/keen/lib/js/dom.keen 201:1
const remove__45all__45children16510151441912951815 = l_a___1 => {
	x_loop___0: while (true){
		const l_temp___0 = first__45child8957881742938708760(l_a___1)
		const l_child___2 = l_temp___0.value
		if ((l_temp___0.index === 1)) {
			(void l_a___1.removeChild(l_child___2))
			;(void 0)
			continue
		} else {
			(void 0)
			break  x_loop___0
		}
	}
	;(void 0)
}
// remove-self file:///home/andy/keen/lib/js/dom.keen 205:1
const remove__45self3944075802663549677 = l_a___0 => {
	(void l_a___0.remove())
	;(void 0)
}
// new file:///home/andy/keen/lib/js/dom.keen 210:1
const new15910411991053171863 = l_styles___0 =>
	new (custom__45element__45options9367161635018646401)(l_styles___0)
// styles file:///home/andy/keen/lib/js/dom.keen 211:5
const styles5086029813172754061 = l_a___0 =>
	l_a___0.styles
// new file:///home/andy/keen/lib/js/dom.keen 212:1
const new2859235513343379324 = l_style___0 =>
	new15910411991053171863(list__45new7074563262074605452([l_style___0]))
// define-custom-element file:///home/andy/keen/lib/js/dom.keen 214:1
const define__45custom__45element12420477442320166964 = (l_element__45name___0, l_connected___1) =>
	define__45custom__45element16761374808165769600(l_element__45name___0, c____555(), l_connected___1)
// define-custom-element file:///home/andy/keen/lib/js/dom.keen 214:1
const _async_define__45custom__45element12420477442320166964 = async (l_element__45name___0, l_connected___1) =>
	(await _async_define__45custom__45element16761374808165769600(l_element__45name___0, c____555(), l_connected___1))
// define-custom-element file:///home/andy/keen/lib/js/dom.keen 216:1
const define__45custom__45element16761374808165769600 = (l_element__45name___13, l_options___5, l_connected___11) => {
	let l_this___10
	const l_constructor___0 = l_destruct___1 => {
		const l_this___2 = l_destruct___1.a
		const l_root___3 = l_this___2.attachShadow(named__45new7732794263064867294(c____264(), c____259()))
		const l_sheets___4 = styles5086029813172754061(l_options___5).map(l_style___6 => {
				const l_sheet___7 = new (_global.CSSStyleSheet)()
				;(void l_sheet___7.replace(to11394861970819088114(l_style___6)))
				return l_sheet___7
			})
		l_root___3.adoptedStyleSheets = to15021661615405738442(l_sheets___4)
		return new8258304608311545475()
	}
	const l_connected__45callback___8 = l_destruct___9 =>
		((l_this___10 = l_destruct___9.a) , to8207508256539019784(l_connected___11(as__45custom__45element__45node14147785565494708342(l_this___10))))
	const l_cls___12 = make__45class4181115265076954815(_global.HTMLElement, l_constructor___0, named__45new11519956692467603063(c____265(), [l_connected__45callback___8]))
	;(void _global.customElements.define(to11394861970819088114(l_element__45name___13), l_cls___12))
	;(void 0)
}
// define-custom-element file:///home/andy/keen/lib/js/dom.keen 216:1
const _async_define__45custom__45element16761374808165769600 = async (l_element__45name___13, l_options___5, l_connected___11) => {
	let l_this___10
	const l_constructor___0 = async l_destruct___1 => {
		const l_this___2 = l_destruct___1.a
		const l_root___3 = l_this___2.attachShadow(named__45new7732794263064867294(c____264(), c____259()))
		const l_sheets___4 = (await Array.fromAsync(styles5086029813172754061(l_options___5), async l_style___6 => {
				const l_sheet___7 = new (_global.CSSStyleSheet)()
				;(void l_sheet___7.replace(to11394861970819088114(l_style___6)))
				return l_sheet___7
			}))
		l_root___3.adoptedStyleSheets = to15021661615405738442(l_sheets___4)
		return new8258304608311545475()
	}
	const l_connected__45callback___8 = async l_destruct___9 =>
		((l_this___10 = l_destruct___9.a) , to8207508256539019784((await l_connected___11(as__45custom__45element__45node14147785565494708342(l_this___10)))))
	const l_cls___12 = make__45class4181115265076954815(_global.HTMLElement, l_constructor___0, named__45new11519956692467603063(c____265(), [l_connected__45callback___8]))
	;(void _global.customElements.define(to11394861970819088114(l_element__45name___13), l_cls___12))
	;(void 0)
}
// as-js file:///home/andy/keen/lib/js/dom.keen 241:1
const as__45js15437408219672390333 = l_a___0 =>
	l_a___0
// as-custom-element-node file:///home/andy/keen/lib/js/dom.keen 243:1
const as__45custom__45element__45node14147785565494708342 = l_a___0 =>
	l_a___0
// as-node file:///home/andy/keen/lib/js/dom.keen 245:1
const as__45node13279775024470589263 = l_a___0 =>
	l_a___0
// attributes file:///home/andy/keen/lib/js/dom.keen 247:1
const attributes4346206551487305592 = l_a___0 =>
	attributes14633218357381336038(as__45node13279775024470589263(l_a___0))
// shadow-root file:///home/andy/keen/lib/js/dom.keen 249:1
const shadow__45root18170719147303732824 = l_a___0 =>
	as__45node13279775024470589263(l_a___0).shadowRoot
// new file:///home/andy/keen/lib/js/util.keen 5:1
const new8258304608311545475 = () =>
	null
// named-new file:///home/andy/keen/lib/js/util.keen 8:1
const named__45new7732794263064867294 = (l_keys___0, l_values___1) => {
	is__45impl7431509400009918682(BigInt(l_keys___0.length), BigInt(l_values___1.length))
	const l_res___2 = new (Object2431823968245642323())()
	let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(0n, BigInt(l_keys___0.length))
	while ((x_cur___0 < x_end___1)){
		const l_i___3 = x_cur___0
		l_res___2[to1007405755162848852(subscript5211016159918201165(l_keys___0, l_i___3))] = subscript9322066793325914931(l_values___1, l_i___3)
		x_cur___0 = (x_cur___0 + 1n)
	}
	return l_res___2
}
// make-class file:///home/andy/keen/lib/js/util.keen 50:1
const make__45class4181115265076954815 = (l_super__45class___2, l_constructor___1, l_methods___3) => {
	const l_res___0 = eval("(ctor, Super) => class extends Super {\n\tconstructor(...args) {\n\t\tsuper()\n\t\tctor({ a: this, b: args })\n\t}\n}")(l_constructor___1, l_super__45class___2)
	for__45loop13818880380200538954(l_methods___3, l_destruct___4 => {
			const l_method___5 = l_destruct___4.b
			const l_name___6 = l_destruct___4.a
			l_res___0.prototype[to1007405755162848852(l_name___6)] = make__45method11771659309035018755(l_method___5)
		})
	return l_res___0
}
// make-method file:///home/andy/keen/lib/js/util.keen 70:1
const make__45method11771659309035018755 = l_fn___0 =>
	eval("fn => function(...args) { return fn({ a: this, b: args }) }")(l_fn___0)
// is-empty file:///home/andy/keen/lib/json.keen 28:1
const is__45empty14635968583754689535 = l_a___0 =>
	is__45empty4685394845175495892(keys8134600976524241778(l_a___0))
// new-json-object file:///home/andy/keen/lib/json.keen 36:1
const new__45json__45object2418991300895114664 = (l_keys___1, l_values___2) => {
	let l_sorted__45keys___4, l_sorted__45values___3, l_destruct___0
	return ((l_destruct___0 = sort__45by__45first10833573261253160214(l_keys___1, l_values___2)) , ((l_sorted__45values___3 = l_destruct___0.b) , ((l_sorted__45keys___4 = l_destruct___0.a) , new__45json__45object__45from__45sorted1232804983025817311(l_sorted__45keys___4, l_sorted__45values___3))))
}
// subscript file:///home/andy/keen/lib/json.keen 39:1
const subscript15877300616259565306 = (l_a___1, l_key___3) => {
	let l_destruct___4, x_matched___0, l_member2___2, l_destruct___0
	return ((l_destruct___0 = values2713219819661029643(l_a___1)) , ((l_member2___2 = binary__45search__45exact5129374079994534489(to__45array__45view2017459252276364375(keys8134600976524241778(l_a___1)), l_key___3)) , ((x_matched___0 = l_member2___2) , ((x_matched___0 instanceof none12752313651180151000) ? new (option14900042547235985021)(0, c____558()) : (((typeof x_matched___0) === "bigint") ? ((l_destruct___4 = l_member2___2) , new (option14900042547235985021)(1, subscript6296670998813432154(l_destruct___0, l_destruct___4))) : _unreachable())))))
}
// == file:///home/andy/keen/lib/json.keen 42:1
const __61__617814748812334940015 = (l_a___0, l_b___1) =>
	(__61__6118065116955672002101(keys8134600976524241778(l_a___0), keys8134600976524241778(l_b___1)) ? __61__611036285718101168614(values2713219819661029643(l_a___0), values2713219819661029643(l_b___1)) : false)
// deserialize-error file:///home/andy/keen/lib/json.keen 57:1
const deserialize__45error9925614702821423006 = (l_expected___0, l_value___1) =>
	new (deserialize__45error7319880037343575041)(l_expected___0, l_value___1)
// expected file:///home/andy/keen/lib/json.keen 57:27
const expected4243710483666616631 = l_a___0 =>
	l_a___0.expected
// value file:///home/andy/keen/lib/json.keen 57:44
const value8983882866368397228 = l_a___0 =>
	l_a___0.value
// show file:///home/andy/keen/lib/json.keen 58:1
const show3878734917429198339 = l_a___0 =>
	interpolate16033570998297636535([c____550(), interpolate__45value3612249313584056128(expected4243710483666616631(l_a___0)), c____551(), interpolate__45value809670319875899172(value8983882866368397228(l_a___0))])
// == file:///home/andy/keen/lib/json.keen 68:1
const __61__6113058398162984935724 = (l_a___0, l_b___1) =>
	__61__6112715920928213232698(as__45copy14598419965874485124(l_a___0), as__45copy14598419965874485124(l_b___1))
// == file:///home/andy/keen/lib/json.keen 72:1
const __61__6112715920928213232698 = (l_a___0, l_b___1) => {
	let x_matched___1, x_matched___2, x_matched___3, x_matched___4, x_matched___5, x_matched___6, x_matched___7, x_matched___8, x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 0) ? ((x_matched___1 = l_b___1) , ((x_matched___1.index === 0) ? true : false)) : ((x_matched___0.index === 1) ? ((x_matched___2 = l_b___1) , ((x_matched___2.index === 1) ? Object.is(l_a___0.value, l_b___1.value) : false)) : ((x_matched___0.index === 2) ? ((x_matched___3 = l_b___1) , ((x_matched___3.index === 2) ? Object.is(l_a___0.value, l_b___1.value) : false)) : ((x_matched___0.index === 3) ? ((x_matched___4 = l_b___1) , ((x_matched___4.index === 3) ? Object.is(l_a___0.value, l_b___1.value) : false)) : ((x_matched___0.index === 4) ? ((x_matched___5 = l_b___1) , ((x_matched___5.index === 4) ? Object.is(l_a___0.value, l_b___1.value) : false)) : ((x_matched___0.index === 5) ? ((x_matched___6 = l_b___1) , ((x_matched___6.index === 5) ? __61__618774367296004624587(l_a___0.value, l_b___1.value) : false)) : ((x_matched___0.index === 6) ? ((x_matched___7 = l_b___1) , ((x_matched___7.index === 6) ? __61__611036285718101168614(l_a___0.value, l_b___1.value) : false)) : ((x_matched___0.index === 7) ? ((x_matched___8 = l_b___1) , ((x_matched___8.index === 7) ? __61__617814748812334940015(l_a___0.value, l_b___1.value) : false)) : _unreachable())))))))))
}
// as-copy file:///home/andy/keen/lib/json.keen 73:1
const as__45copy14598419965874485124 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 0) ? new (json__45copy9133080952047553587)(0, l_a___0.value) : ((x_matched___0.index === 1) ? new (json__45copy9133080952047553587)(1, l_a___0.value) : ((x_matched___0.index === 2) ? new (json__45copy9133080952047553587)(2, l_a___0.value) : ((x_matched___0.index === 3) ? new (json__45copy9133080952047553587)(3, l_a___0.value) : ((x_matched___0.index === 4) ? new (json__45copy9133080952047553587)(4, l_a___0.value) : ((x_matched___0.index === 5) ? new (json__45copy9133080952047553587)(5, l_a___0.value) : ((x_matched___0.index === 6) ? new (json__45copy9133080952047553587)(6, l_a___0.value) : ((x_matched___0.index === 7) ? new (json__45copy9133080952047553587)(7, l_a___0.value) : _unreachable())))))))))
}
// list-new file:///home/andy/keen/lib/json.keen 108:1
const list__45new4011499042526205552 = l_args___0 =>
	(is__45empty12576060890182098883(l_args___0) ? new (json11387066671148698414)(0, c____559()) : new (json11387066671148698414)(6, l_args___0))
// named-new file:///home/andy/keen/lib/json.keen 113:1
const named__45new6710044013026329874 = (l_keys___0, l_values___1) =>
	new (json11387066671148698414)(7, (() => {
			if (Object.is(BigInt(l_keys___0.length), BigInt(l_values___1.length))) {
				return new__45json__45object2418991300895114664(l_keys___0, l_values___1)
			} else {
				throw new (error14987278044892349075)(c____364())
			}
		})())
// to file:///home/andy/keen/lib/json.keen 119:1
const to15387696512002785389 = l_a___0 =>
	l_a___0
// to file:///home/andy/keen/lib/json.keen 130:1
const to5826787255917315874 = l_a___0 =>
	new (json11387066671148698414)(5, l_a___0)
// to file:///home/andy/keen/lib/json.keen 131:1
const to13461298867722084777 = l_a___1 => {
	let l_temp___2
	const l_member2___0 = string1937295505575574809(l_a___1)
	const x_matched___0 = l_member2___0
	if ((x_matched___0 instanceof none12752313651180151000)) {
		throw deserialize__45error9925614702821423006(c____371(), l_a___1)
	} else {
		if ((x_matched___0 instanceof string9092701471797383860)) {
			return ((l_temp___2 = l_member2___0) , l_temp___2)
		} else {
			return _unreachable()
		}
	}
}
// to file:///home/andy/keen/lib/json.keen 136:1
const to13883903483809172788 = l_a___0 =>
	new (json11387066671148698414)(2, BigInt.asUintN(64, BigInt(l_a___0)))
// to file:///home/andy/keen/lib/json.keen 137:1
const to10034770207190155702 = l_a___0 =>
	to13152219174195707203(to6592466256914416072(l_a___0))
// to file:///home/andy/keen/lib/json.keen 138:1
const to12121664362602533419 = l_a___0 =>
	new (json11387066671148698414)(2, l_a___0)
// to file:///home/andy/keen/lib/json.keen 139:1
const to6592466256914416072 = l_a___0 =>
	to7907213884141111337(to1793605831983711798(l_a___0))
// to file:///home/andy/keen/lib/json.keen 151:1
const to1793605831983711798 = l_a___0 => {
	const x_matched___0 = l_a___0
	if ((x_matched___0.index === 2)) {
		return Number(l_a___0.value)
	} else {
		if ((x_matched___0.index === 3)) {
			return Number(l_a___0.value)
		} else {
			if ((x_matched___0.index === 4)) {
				return l_a___0.value
			} else {
				throw deserialize__45error9925614702821423006(c____368(), l_a___0)
			}
		}
	}
}
// to file:///home/andy/keen/lib/json.keen 157:1
const to6946154876139669136 = l_a___0 =>
	new (json11387066671148698414)(5, to10430906571710337221(l_a___0))
// to file:///home/andy/keen/lib/json.keen 158:1
const to8213088765813293489 = l_a___0 =>
	to9088973396303820521(to13461298867722084777(l_a___0))
// to@(json) file:///home/andy/keen/lib/json.keen 160:1
const to12912120979862233814 = l_a___0 =>
	new (json11387066671148698414)(6, map4471500142199874876(l_a___0, l_it___1 =>
				to15387696512002785389(l_it___1)))
// to@(uri) file:///home/andy/keen/lib/json.keen 160:1
const to17200755302369134049 = l_a___0 =>
	new (json11387066671148698414)(6, map4643061250173955443(l_a___0, l_it___1 =>
				to16242417281509899286(l_it___1)))
// to@((json, json) tuple2) file:///home/andy/keen/lib/json.keen 160:1
const to14956145119846910815 = l_a___0 =>
	new (json11387066671148698414)(6, map9381099685663729955(l_a___0, l_it___1 =>
				to6920843051365548950(l_it___1)))
// to@(lsp-diagnostic) file:///home/andy/keen/lib/json.keen 162:1
const to14795486065361282276 = l_a___1 => {
	const l_x___0 = l_a___1
	const x_matched___0 = l_x___0
	if ((x_matched___0.index === 0)) {
		return c____292()
	} else {
		if ((x_matched___0.index === 6)) {
			return map15991525019948570645(l_x___0.value, l_it___2 =>
					to970397054013406799(l_it___2))
		} else {
			throw deserialize__45error9925614702821423006(c____367(), l_a___1)
		}
	}
}
// to@(nat32) file:///home/andy/keen/lib/json.keen 162:1
const to2753238265257367295 = l_a___1 => {
	const l_x___0 = l_a___1
	const x_matched___0 = l_x___0
	if ((x_matched___0.index === 0)) {
		return c____287()
	} else {
		if ((x_matched___0.index === 6)) {
			return map12676680064136668156(l_x___0.value, l_it___2 =>
					to10034770207190155702(l_it___2))
		} else {
			throw deserialize__45error9925614702821423006(c____367(), l_a___1)
		}
	}
}
// to@(nat64) file:///home/andy/keen/lib/json.keen 162:1
const to7880722111372567736 = l_a___1 => {
	const l_x___0 = l_a___1
	const x_matched___0 = l_x___0
	if ((x_matched___0.index === 0)) {
		return c____290()
	} else {
		if ((x_matched___0.index === 6)) {
			return map16646484652472819777(l_x___0.value, l_it___2 =>
					to6592466256914416072(l_it___2))
		} else {
			throw deserialize__45error9925614702821423006(c____367(), l_a___1)
		}
	}
}
// to@(uri array) file:///home/andy/keen/lib/json.keen 180:1
const to2986427323046012814 = l_a___0 =>
	((l_a___0 instanceof Array) ? to17200755302369134049(l_a___0) : new (json11387066671148698414)(0, c____559()))
// to@(string) file:///home/andy/keen/lib/json.keen 185:1
const to2927217778786738018 = l_a___0 =>
	(__61__6113058398162984935724(l_a___0, new (json11387066671148698414)(0, c____559())) ? c____558() : to13461298867722084777(l_a___0))
// to@(json, json) file:///home/andy/keen/lib/json.keen 188:1
const to6920843051365548950 = l_a___0 =>
	list__45new4011499042526205552([to15387696512002785389(a13190002216079534334(l_a___0)), to15387696512002785389(b13735090799345817353(l_a___0))])
// subscript file:///home/andy/keen/lib/json.keen 263:1
const subscript9660048510646087161 = (l_a___2, l_key___4) => {
	let l_destruct___3, x_matched___0, l_member2___1, l_temp___5, x_matched___1, l_member2___0
	return ((l_member2___0 = ((l_member2___1 = json__45object15666135835072805560(l_a___2)) , ((x_matched___0 = l_member2___1) , ((x_matched___0 instanceof none12752313651180151000) ? new (option14900042547235985021)(0, c____558()) : ((x_matched___0 instanceof json__45object4052534663485263901) ? ((l_destruct___3 = l_member2___1) , subscript15877300616259565306(l_destruct___3, l_key___4)) : _unreachable()))))) , ((x_matched___1 = l_member2___0) , ((x_matched___1.index === 0) ? new (json11387066671148698414)(0, c____559()) : ((x_matched___1.index === 1) ? ((l_temp___5 = l_member2___0.value) , l_temp___5) : _unreachable()))))
}
// has-key file:///home/andy/keen/lib/json.keen 267:1
const has__45key2112788514118445018 = (l_a___1, l_key___3) => {
	let l_destruct___2, x_matched___0, l_member2___0
	return (((l_member2___0 = json__45object15666135835072805560(l_a___1)) , ((x_matched___0 = l_member2___0) , ((x_matched___0 instanceof none12752313651180151000) ? new (option14900042547235985021)(0, c____558()) : ((x_matched___0 instanceof json__45object4052534663485263901) ? ((l_destruct___2 = l_member2___0) , subscript15877300616259565306(l_destruct___2, l_key___3)) : _unreachable())))).index === 1)
}
// show file:///home/andy/keen/lib/json.keen 276:1
const show5188695076911786383 = l_a___0 =>
	to__45kid17024692149046229643(l_a___0)
// to-json@(json) file:///home/andy/keen/lib/json.keen 280:1
const to__45json4246243633140508202 = l_a___1 => {
	let l_k___6, l_v___5, l_parts___3, x_matched___0, l_x___0
	return ((l_x___0 = to15387696512002785389(l_a___1)) , ((x_matched___0 = l_x___0) , ((x_matched___0.index === 0) ? c____342() : ((x_matched___0.index === 1) ? interpolate16033570998297636535([interpolate__45value8674553829118123368(l_x___0.value)]) : ((x_matched___0.index === 2) ? interpolate16033570998297636535([interpolate__45value8652404409959891785(l_x___0.value)]) : ((x_matched___0.index === 3) ? interpolate16033570998297636535([interpolate__45value3192889795443724703(l_x___0.value)]) : ((x_matched___0.index === 4) ? interpolate16033570998297636535([interpolate__45value3567273479283112933(l_x___0.value)]) : ((x_matched___0.index === 5) ? quoted2736989189582119490(l_x___0.value, false) : ((x_matched___0.index === 6) ? interpolate16033570998297636535([c____343(), interpolate__45value3612249313584056128(join3173081693262575807(c____344(), map14586403352741400908(l_x___0.value, l_it___2 =>
							to__45json4246243633140508202(l_it___2)))), c____345()]) : ((x_matched___0.index === 7) ? ((l_parts___3 = join3173081693262575807(c____344(), for__45loop15788390743551178767(zip8821230832327354325(keys8134600976524241778(l_x___0.value), values2713219819661029643(l_x___0.value)), l_destruct___4 =>
				((l_v___5 = l_destruct___4.b) , ((l_k___6 = l_destruct___4.a) , interpolate16033570998297636535([interpolate__45value3612249313584056128(quoted2736989189582119490(to10430906571710337221(l_k___6), false)), c____346(), interpolate__45value3612249313584056128(to__45json4246243633140508202(l_v___5))])))))) , interpolate16033570998297636535([c____347(), interpolate__45value3612249313584056128(l_parts___3), c____348()])) : _unreachable()))))))))))
}
// to-json@(string) file:///home/andy/keen/lib/json.keen 280:1
const to__45json16309191150150197206 = l_a___1 => {
	let l_k___6, l_v___5, l_parts___3, x_matched___0, l_x___0
	return ((l_x___0 = to5826787255917315874(l_a___1)) , ((x_matched___0 = l_x___0) , ((x_matched___0.index === 0) ? c____342() : ((x_matched___0.index === 1) ? interpolate16033570998297636535([interpolate__45value8674553829118123368(l_x___0.value)]) : ((x_matched___0.index === 2) ? interpolate16033570998297636535([interpolate__45value8652404409959891785(l_x___0.value)]) : ((x_matched___0.index === 3) ? interpolate16033570998297636535([interpolate__45value3192889795443724703(l_x___0.value)]) : ((x_matched___0.index === 4) ? interpolate16033570998297636535([interpolate__45value3567273479283112933(l_x___0.value)]) : ((x_matched___0.index === 5) ? quoted2736989189582119490(l_x___0.value, false) : ((x_matched___0.index === 6) ? interpolate16033570998297636535([c____343(), interpolate__45value3612249313584056128(join3173081693262575807(c____344(), map14586403352741400908(l_x___0.value, l_it___2 =>
							to__45json4246243633140508202(l_it___2)))), c____345()]) : ((x_matched___0.index === 7) ? ((l_parts___3 = join3173081693262575807(c____344(), for__45loop15788390743551178767(zip8821230832327354325(keys8134600976524241778(l_x___0.value), values2713219819661029643(l_x___0.value)), l_destruct___4 =>
				((l_v___5 = l_destruct___4.b) , ((l_k___6 = l_destruct___4.a) , interpolate16033570998297636535([interpolate__45value3612249313584056128(quoted2736989189582119490(to10430906571710337221(l_k___6), false)), c____346(), interpolate__45value3612249313584056128(to__45json4246243633140508202(l_v___5))])))))) , interpolate16033570998297636535([c____347(), interpolate__45value3612249313584056128(l_parts___3), c____348()])) : _unreachable()))))))))))
}
// quoted file:///home/andy/keen/lib/json.keen 301:1
const quoted2736989189582119490 = (l_a___1, l_is__45kid___4) => {
	let l_esc___5, l_temp___3
	return with__45block10857829225077824123(c____561(), l_out___0 => {
			__126__6114764821344557714604(l_out___0, 34)
			for__45loop16746952800157756851(l_a___1, l_x___2 =>
					((l_temp___3 = escape5318933752927592806(l_x___2, l_is__45kid___4)) , ((l_esc___5 = l_temp___3) , ((l_temp___3 instanceof Uint8Array) ? __126__126__611782433431129225455(l_out___0, to__45array__45view10480319256574783196(l_esc___5)) : __126__6114764821344557714604(l_out___0, l_x___2)))))
			__126__6114764821344557714604(l_out___0, 34)
		})
}
// escape file:///home/andy/keen/lib/json.keen 311:1
const escape5318933752927592806 = (l_a___1, l_is__45kid___0) => {
	let x_matched___0
	return ((x_matched___0 = l_a___1) , ((x_matched___0 === 0) ? c____55() : ((x_matched___0 === 9) ? c____51() : ((x_matched___0 === 10) ? c____49() : ((x_matched___0 === 13) ? c____50() : ((x_matched___0 === 34) ? c____48() : ((x_matched___0 === 92) ? c____52() : ((x_matched___0 === 123) ? (l_is__45kid___0 ? c____53() : c____558()) : ((x_matched___0 === 125) ? (l_is__45kid___0 ? c____54() : c____558()) : c____558())))))))))
}
// to-kid@(json) file:///home/andy/keen/lib/json.keen 361:1
const to__45kid17024692149046229643 = l_a___1 => {
	let x_matched___0, l_x___0
	return ((l_x___0 = to__45kid__45inner1350502534723101511(to15387696512002785389(l_a___1), 100n)) , ((x_matched___0 = l_x___0) , ((x_matched___0 instanceof lines12939704884693284529) ? join3173081693262575807(c____374(), lines19181078395202684(l_x___0)) : ((x_matched___0 instanceof single15714947171587583006) ? text9674185389991450061(l_x___0) : _unreachable()))))
}
// single file:///home/andy/keen/lib/json.keen 367:1
const single9817704884347473538 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 instanceof single15714947171587583006) ? l_a___0 : c____558()))
}
// new file:///home/andy/keen/lib/json.keen 368:1
const new15235974900025739494 = l_lines___0 =>
	new (lines12939704884693284529)(l_lines___0)
// lines file:///home/andy/keen/lib/json.keen 368:15
const lines19181078395202684 = l_a___0 =>
	l_a___0.lines
// new file:///home/andy/keen/lib/json.keen 369:1
const new11515892672142052059 = (l_text___0, l_needs__45parens___1) =>
	new (single15714947171587583006)(l_text___0, l_needs__45parens___1)
// single file:///home/andy/keen/lib/json.keen 369:1
const single11782986319943518218 = (l_text___0, l_needs__45parens___1) =>
	new (single15714947171587583006)(l_text___0, l_needs__45parens___1)
// text file:///home/andy/keen/lib/json.keen 369:16
const text9674185389991450061 = l_a___0 =>
	l_a___0.text
// needs-parens file:///home/andy/keen/lib/json.keen 369:29
const needs__45parens7448185993718697344 = l_a___0 =>
	l_a___0["needs-parens"]
// parenthesize file:///home/andy/keen/lib/json.keen 370:1
const parenthesize3848434665885391924 = l_a___0 =>
	(needs__45parens7448185993718697344(l_a___0) ? interpolate16033570998297636535([c____384(), interpolate__45value3612249313584056128(text9674185389991450061(l_a___0)), c____385()]) : text9674185389991450061(l_a___0))
// to-kid-inner file:///home/andy/keen/lib/json.keen 372:1
const to__45kid__45inner1350502534723101511 = (l_a___0, l_max__45columns___1) => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 0) ? c____562() : ((x_matched___0.index === 1) ? single11782986319943518218(interpolate16033570998297636535([interpolate__45value8674553829118123368(l_a___0.value)]), false) : ((x_matched___0.index === 2) ? single11782986319943518218(interpolate16033570998297636535([interpolate__45value8652404409959891785(l_a___0.value)]), false) : ((x_matched___0.index === 3) ? single11782986319943518218(interpolate16033570998297636535([interpolate__45value3192889795443724703(l_a___0.value)]), false) : ((x_matched___0.index === 4) ? single11782986319943518218(interpolate16033570998297636535([interpolate__45value3567273479283112933(l_a___0.value)]), false) : ((x_matched___0.index === 5) ? single11782986319943518218(quoted2736989189582119490(l_a___0.value, true), false) : ((x_matched___0.index === 6) ? (is__45empty12576060890182098883(l_a___0.value) ? c____563() : to__45kid__45array__45or__45object9113739995787088456(c____558(), l_a___0.value, l_max__45columns___1)) : ((x_matched___0.index === 7) ? (is__45empty14635968583754689535(l_a___0.value) ? c____564() : to__45kid__45array__45or__45object9113739995787088456(keys8134600976524241778(l_a___0.value), values2713219819661029643(l_a___0.value), l_max__45columns___1)) : _unreachable())))))))))
}
// to-kid-array-or-object file:///home/andy/keen/lib/json.keen 398:1
const to__45kid__45array__45or__45object9113739995787088456 = (l_keys___1, l_values___0, l_max__45columns___10) => {
	let l_temp___23, l_p___21, l_index___20, l_part___19, l_text___17
	if (is__45empty12576060890182098883(l_values___0)) {
		throw new (error14987278044892349075)(c____378())
	} else {
		if ((l_keys___1 instanceof Array)) {
			if (Object.is(BigInt(l_keys___1.length), BigInt(l_values___0.length))) {
				(void 0)
			} else {
				throw new (error14987278044892349075)(c____364())
			}
		} else {
			(void 0)
		}
		let l_size___2 = 0n
		let l_multi__45line___3 = false
		const l_parts___4 = for__45loop15049189437396930604(with__45index5518204707589239610(l_values___0), l_destruct___5 => {
				const l_x___6 = l_destruct___5.b
				const l_index___7 = l_destruct___5.a
				const l_key__45size___8 = ((l_keys___1 instanceof Array) ? __431000895641751717785(size17451724000551404641(quote__45if__45necessary12537415427844818739(subscript5211016159918201165(l_keys___1, l_index___7))), size17451724000551404641(c____379())) : 0n)
				const l_part___9 = to__45kid__45inner1350502534723101511(l_x___6, safe__45subtract10319780632257548536(l_max__45columns___10, __431000895641751717785(4n, l_key__45size___8)))
				const x_matched___0 = l_part___9
				if ((x_matched___0 instanceof lines12939704884693284529)) {
					l_multi__45line___3 = true
				} else {
					if ((x_matched___0 instanceof single15714947171587583006)) {
						if ((l_keys___1 instanceof Array)) {
							l_size___2 = __431000895641751717785(l_size___2, __431000895641751717785(l_key__45size___8, 1n))
						} else {
							(void 0)
						}
						l_size___2 = __431000895641751717785(l_size___2, size17451724000551404641(text9674185389991450061(l_part___9)))
					} else {
						_unreachable()
					}
				}
				return l_part___9
			})
		l_size___2 = __431000895641751717785(l_size___2, __459429596346129747750(__4210985385519932138510(size17451724000551404641(c____380()), BigInt(l_values___0.length)), 1n))
		return ((l_multi__45line___3 ? true : __625060923374247189753(l_size___2, l_max__45columns___10)) ? new15235974900025739494(with__45block9571222819310529135(c____561(), l_out___11 =>
					for__45loop2225344829820469212(with__45index10450463021464586858(l_parts___4), l_destruct___12 => {
							const l_part___13 = l_destruct___12.b
							const l_index___14 = l_destruct___12.a
							const l_key___15 = ((l_keys___1 instanceof Array) ? interpolate16033570998297636535([interpolate__45value3612249313584056128(quote__45if__45necessary12537415427844818739(subscript5211016159918201165(l_keys___1, l_index___14))), c____346()]) : c____355())
							const x_matched___1 = l_part___13
							if ((x_matched___1 instanceof lines12939704884693284529)) {
								__126__617676049230832921251(l_out___11, l_key___15)
								for (const l_line___16 of lines19181078395202684(l_part___13)) {
									__126__617676049230832921251(l_out___11, interpolate16033570998297636535([c____381(), interpolate__45value3612249313584056128(l_line___16)]))
								}
							} else {
								if ((x_matched___1 instanceof single15714947171587583006)) {
									__126__617676049230832921251(l_out___11, interpolate16033570998297636535([interpolate__45value3612249313584056128(l_key___15), c____382(), interpolate__45value3612249313584056128(text9674185389991450061(l_part___13))]))
								} else {
									_unreachable()
								}
							}
						}))) : ((l_text___17 = join3173081693262575807(c____380(), for__45loop6365842150537704214(with__45index10450463021464586858(l_parts___4), l_destruct___18 =>
					((l_part___19 = l_destruct___18.b) , ((l_index___20 = l_destruct___18.a) , ((l_p___21 = parenthesize3848434665885391924((() => {
							const l_member2___22 = single9817704884347473538(l_part___19)
							const x_matched___2 = l_member2___22
							if ((x_matched___2 instanceof none12752313651180151000)) {
								throw new (error14987278044892349075)(c____383())
							} else {
								if ((x_matched___2 instanceof single15714947171587583006)) {
									return ((l_temp___23 = l_member2___22) , l_temp___23)
								} else {
									return _unreachable()
								}
							}
						})())) , ((l_keys___1 instanceof Array) ? interpolate16033570998297636535([interpolate__45value3612249313584056128(quote__45if__45necessary12537415427844818739(subscript5211016159918201165(l_keys___1, l_index___20))), c____379(), interpolate__45value3612249313584056128(l_p___21)]) : l_p___21))))))) , new11515892672142052059((((!(l_keys___1 instanceof Array)) ? Object.is(BigInt(l_parts___4.length), 1n) : false) ? interpolate16033570998297636535([interpolate__45value3612249313584056128(l_text___17), c____344()]) : l_text___17), true)))
	}
}
// safe-subtract file:///home/andy/keen/lib/json.keen 433:1
const safe__45subtract10319780632257548536 = (l_a___0, l_b___1) =>
	(__62__618892781134906463570(l_a___0, l_b___1) ? __459429596346129747750(l_a___0, l_b___1) : 0n)
// quote-if-necessary file:///home/andy/keen/lib/json.keen 435:1
const quote__45if__45necessary12537415427844818739 = l_key___1 => {
	let l_s___0
	return ((l_s___0 = to10430906571710337221(l_key___1)) , (is__45keen__45identifier7402476339939785775(l_s___0) ? l_s___0 : quoted2736989189582119490(l_s___0, true)))
}
// to file:///home/andy/keen/lib/log.keen 14:1
const to3333333330177738562 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 0) ? _symbol54 : ((x_matched___0 === 1) ? _symbol55 : ((x_matched___0 === 2) ? _symbol56 : _unreachable()))))
}
// show file:///home/andy/keen/lib/log.keen 22:1
const show6796557662033429151 = l_a___0 =>
	show12579694647004009701(to3333333330177738562(l_a___0))
// log-error@(string) file:///home/andy/keen/lib/log.keen 45:1
const log__45error5118968110143466282 = l_value___0 =>
	log__45with__45level13042633869047213155(2, to__45json16309191150150197206(l_value___0))
// log-with-level file:///home/andy/keen/lib/log.keen 50:1
const log__45with__45level13042633869047213155 = (l_level___0, l_message___1) => {
	(void _global.console[to11394861970819088114(show6796557662033429151(l_level___0))](interpolate16185060539014347245([interpolate__45value14162406563345700596(l_level___0), c____379(), interpolate__45value3612249313584056128(l_message___1)])))
	;(void 0)
}
// new file:///home/andy/keen/lib/math/vec.keen 7:1
const new8815799574096410963 = (l_x___0, l_y___1) =>
	new (vec2__45646885811654597736479)(l_x___0, l_y___1)
// x file:///home/andy/keen/lib/math/vec.keen 7:17
const x250077784616492939 = l_a___0 =>
	l_a___0.x
// y file:///home/andy/keen/lib/math/vec.keen 7:28
const y1119538586925252720 = l_a___0 =>
	l_a___0.y
// new@(js-any option) file:///home/andy/keen/lib/misc.keen 38:1
const new6646894806830163624 = l_value___0 =>
	reference2921620855947648148(l_value___0)
// get@(js-any option) file:///home/andy/keen/lib/misc.keen 39:1
const get16085910903584459623 = l_a___0 =>
	reference__45value7270536816843676136(l_a___0)
// set=@(js-any option) file:///home/andy/keen/lib/misc.keen 40:1
const set__613103107860952198826 = (l_a___0, l_value___1) =>
	set__45reference__45value2196423018448390627(l_a___0, l_value___1)
// to file:///home/andy/keen/lib/number.keen 154:1
const to1057557571117463609 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 0) ? new (json11387066671148698414)(2, l_a___0.value) : ((x_matched___0.index === 1) ? new (json11387066671148698414)(3, l_a___0.value) : ((x_matched___0.index === 2) ? new (json11387066671148698414)(4, l_a___0.value) : _unreachable()))))
}
// new file:///home/andy/keen/lib/number.keen 165:1
const new1475788046635242460 = (l_operation___0, l_inputs___1) =>
	new (arithmetic__45error8744457142948490603)(l_operation___0, l_inputs___1)
// arithmetic-error file:///home/andy/keen/lib/number.keen 166:1
const arithmetic__45error16942717281569864426 = (l_operation___0, l_input___1) =>
	new1475788046635242460(l_operation___0, list__45new14337490503080583597([l_input___1]))
// arithmetic-error file:///home/andy/keen/lib/number.keen 167:1
const arithmetic__45error12235599124356858919 = (l_operation___0, l_a___1, l_b___2) =>
	new1475788046635242460(l_operation___0, list__45new14337490503080583597([l_a___1, l_b___2]))
// list-new@(number) file:///home/andy/keen/lib/number.keen 168:1
const list__45new14337490503080583597 = l_a___0 =>
	l_a___0
// + file:///home/andy/keen/lib/number.keen 174:1
const __4315336841759981629368 = (l_a___1, l_b___2) => {
	const l_res___0 = ((l_a___1 + l_b___2) & 255)
	if (__62__6111202619623246333350(l_res___0, l_a___1)) {
		return l_res___0
	} else {
		throw arithmetic__45error12235599124356858919(c____487(), new (number17074854190323093712)(0, BigInt.asUintN(64, BigInt(l_a___1))), new (number17074854190323093712)(0, BigInt.asUintN(64, BigInt(l_b___2))))
	}
}
// + file:///home/andy/keen/lib/number.keen 182:1
const __437467979216580978677 = (l_a___1, l_b___2) => {
	const l_res___0 = ((l_a___1 + l_b___2) >>> 0)
	if (__62__611783117445644909805(l_res___0, l_a___1)) {
		return l_res___0
	} else {
		throw arithmetic__45error12235599124356858919(c____419(), new (number17074854190323093712)(0, BigInt.asUintN(64, BigInt(l_a___1))), new (number17074854190323093712)(0, BigInt.asUintN(64, BigInt(l_b___2))))
	}
}
// + file:///home/andy/keen/lib/number.keen 186:1
const __431000895641751717785 = (l_a___1, l_b___2) => {
	const l_res___0 = BigInt.asUintN(64, (l_a___1 + l_b___2))
	if (__62__618892781134906463570(l_res___0, l_a___1)) {
		return l_res___0
	} else {
		throw arithmetic__45error12235599124356858919(c____312(), new (number17074854190323093712)(0, l_a___1), new (number17074854190323093712)(0, l_b___2))
	}
}
// - file:///home/andy/keen/lib/number.keen 192:1
const __4511411275747325339589 = (l_a___0, l_b___1) => {
	if (__62__6111202619623246333350(l_a___0, l_b___1)) {
		return ((l_a___0 - l_b___1) & 255)
	} else {
		throw arithmetic__45error12235599124356858919(c____538(), new (number17074854190323093712)(0, BigInt.asUintN(64, BigInt(l_a___0))), new (number17074854190323093712)(0, BigInt.asUintN(64, BigInt(l_b___1))))
	}
}
// - file:///home/andy/keen/lib/number.keen 198:1
const __4516392089175466206236 = (l_a___0, l_b___1) => {
	if (__62__611783117445644909805(l_a___0, l_b___1)) {
		return ((l_a___0 - l_b___1) >>> 0)
	} else {
		throw arithmetic__45error12235599124356858919(c____390(), new (number17074854190323093712)(0, BigInt.asUintN(64, BigInt(l_a___0))), new (number17074854190323093712)(0, BigInt.asUintN(64, BigInt(l_b___1))))
	}
}
// - file:///home/andy/keen/lib/number.keen 201:1
const __459429596346129747750 = (l_a___0, l_b___1) => {
	if (__62__618892781134906463570(l_a___0, l_b___1)) {
		return BigInt.asUintN(64, (l_a___0 - l_b___1))
	} else {
		throw arithmetic__45error12235599124356858919(c____329(), new (number17074854190323093712)(0, l_a___0), new (number17074854190323093712)(0, l_b___1))
	}
}
// * file:///home/andy/keen/lib/number.keen 218:1
const __4210985385519932138510 = (l_a___0, l_b___1) => {
	if ((__60__616269385802849585881(l_a___0, BigInt.asUintN(64, BigInt(4.294967295E9))) ? __60__616269385802849585881(l_b___1, BigInt.asUintN(64, BigInt(4.294967295E9))) : false)) {
		return BigInt.asUintN(64, (l_a___0 * l_b___1))
	} else {
		if ((Object.is(l_a___0, 0n) ? true : Object.is(l_b___1, 0n))) {
			return 0n
		} else {
			const l_res___2 = BigInt.asUintN(64, (l_a___0 * l_b___1))
			if ((Object.is(__473463626361574020402(l_res___2, l_b___1), l_a___0) ? Object.is(__473463626361574020402(l_res___2, l_a___0), l_b___1) : false)) {
				return l_res___2
			} else {
				throw arithmetic__45error12235599124356858919(c____341(), new (number17074854190323093712)(0, l_a___0), new (number17074854190323093712)(0, l_b___1))
			}
		}
	}
}
// / file:///home/andy/keen/lib/number.keen 239:1
const __473463626361574020402 = (l_a___1, l_b___0) => {
	if (Object.is(l_b___0, 0n)) {
		throw arithmetic__45error12235599124356858919(c____333(), new (number17074854190323093712)(0, l_a___1), new (number17074854190323093712)(0, l_b___0))
	} else {
		(void 0)
	}
	return (l_a___1 / l_b___0)
}
// % file:///home/andy/keen/lib/number.keen 260:1
const __376728767376110028882 = (l_a___1, l_b___0) => {
	if (Object.is(l_b___0, 0n)) {
		throw arithmetic__45error12235599124356858919(c____338(), new (number17074854190323093712)(0, l_a___1), new (number17074854190323093712)(0, l_b___0))
	} else {
		(void 0)
	}
	return (l_a___1 % l_b___0)
}
// * file:///home/andy/keen/lib/number.keen 331:1
const __4217323325886501092415 = (l_a___1, l_b___2) => {
	const l_overflow___0 = (Object.is(l_a___1, -1n) ? Object.is(l_b___2, -9223372036854775808n) : (Object.is(l_b___2, -1n) ? Object.is(l_a___1, -9223372036854775808n) : (Object.is(l_b___2, 0n) ? false : (__624041988286447589396(l_a___1, __471160809350022014853(9223372036854775807n, l_b___2)) ? true : (__606931787592191359368(l_a___1, __471160809350022014853(-9223372036854775808n, l_b___2)) ? true : false)))))
	if (l_overflow___0) {
		throw arithmetic__45error12235599124356858919(c____356(), new (number17074854190323093712)(1, l_a___1), new (number17074854190323093712)(1, l_b___2))
	} else {
		return BigInt.asIntN(64, (l_a___1 * l_b___2))
	}
}
// - file:///home/andy/keen/lib/number.keen 355:1
const __4511484304649738863606 = l_a___0 =>
	__4217323325886501092415(l_a___0, -1n)
// - file:///home/andy/keen/lib/number.keen 363:1
const __459326987608157900488 = l_a___0 =>
	(Object.is(l_a___0, __431000895641751717785(to14302471061019628777(9223372036854775807n), 1n)) ? -9223372036854775808n : __4511484304649738863606(to43078756347777321(l_a___0)))
// / file:///home/andy/keen/lib/number.keen 382:1
const __471160809350022014853 = (l_a___1, l_b___0) => {
	if ((Object.is(l_b___0, 0n) ? true : (Object.is(l_a___1, -9223372036854775808n) ? Object.is(l_b___0, -1n) : false))) {
		throw arithmetic__45error12235599124356858919(c____357(), new (number17074854190323093712)(1, l_a___1), new (number17074854190323093712)(1, l_b___0))
	} else {
		return (l_a___1 / l_b___0)
	}
}
// abs file:///home/andy/keen/lib/number.keen 396:1
const abs11348242274778557770 = l_a___0 =>
	to14302471061019628777((__606931787592191359368(l_a___0, 0n) ? __4511484304649738863606(l_a___0) : l_a___0))
// abs file:///home/andy/keen/lib/number.keen 401:1
const abs307563132689475500 = l_a___0 =>
	(__6014891222131997099809(l_a___0, 0) ? __452467979145405863610(l_a___0) : l_a___0)
// - file:///home/andy/keen/lib/number.keen 420:1
const __452467979145405863610 = l_a___0 =>
	(l_a___0 * -1)
// / file:///home/andy/keen/lib/number.keen 437:1
const __4714455254453016816432 = (l_a___1, l_b___0) => {
	if (Object.is(l_b___0, 0)) {
		throw arithmetic__45error12235599124356858919(c____445(), new (number17074854190323093712)(2, l_a___1), new (number17074854190323093712)(2, l_b___0))
	} else {
		(void 0)
	}
	return (l_a___1 / l_b___0)
}
// to file:///home/andy/keen/lib/number.keen 476:1
const to5005763315551948485 = l_a___0 =>
	BigInt(Math.trunc(round5010756549578510715(l_a___0)))
// round file:///home/andy/keen/lib/number.keen 481:1
const round5010756549578510715 = l_a___1 => {
	let l_js__45round___2, l_sign___0
	return ((l_sign___0 = (__6014891222131997099809(l_a___1, 0) ? -1 : 1)) , ((l_js__45round___2 = to16122815567382831054(Math17645743227242645815().round(to14357848481777319600(abs307563132689475500(l_a___1))))) , (l_sign___0 * l_js__45round___2)))
}
// round-down file:///home/andy/keen/lib/number.keen 494:1
const round__45down10642979807465663819 = l_a___0 =>
	to16122815567382831054(Math17645743227242645815().floor(to14357848481777319600(l_a___0)))
// Math file:///home/andy/keen/lib/number.keen 512:1
const Math17645743227242645815 = () =>
	_global.Math
// to file:///home/andy/keen/lib/number.keen 515:1
const to7907213884141111337 = l_a___0 =>
	to14302471061019628777(to5005763315551948485(l_a___0))
// to file:///home/andy/keen/lib/number.keen 518:1
const to43078756347777321 = l_a___0 => {
	if (__60__616269385802849585881(l_a___0, to14302471061019628777(9223372036854775807n))) {
		return BigInt.asIntN(64, l_a___0)
	} else {
		throw arithmetic__45error16942717281569864426(c____536(), new (number17074854190323093712)(0, l_a___0))
	}
}
// clamp-to file:///home/andy/keen/lib/number.keen 560:1
const clamp__45to10724471832502870719 = l_a___0 =>
	(__62__611142658809551672718(l_a___0, 0n) ? BigInt.asUintN(64, l_a___0) : 0n)
// clamp-to file:///home/andy/keen/lib/number.keen 563:1
const clamp__45to3834421729709457586 = l_a___0 =>
	clamp__45to10724471832502870719(to5005763315551948485(l_a___0))
// to file:///home/andy/keen/lib/number.keen 567:1
const to14302471061019628777 = l_a___0 => {
	if (__62__611142658809551672718(l_a___0, 0n)) {
		return BigInt.asUintN(64, l_a___0)
	} else {
		throw arithmetic__45error16942717281569864426(c____358(), new (number17074854190323093712)(1, l_a___0))
	}
}
// to file:///home/andy/keen/lib/number.keen 570:1
const to7120868342645815149 = l_a___0 => {
	if (__60__616269385802849585881(l_a___0, BigInt.asUintN(64, BigInt(255)))) {
		return (Number(l_a___0) & 255)
	} else {
		throw arithmetic__45error16942717281569864426(c____547(), new (number17074854190323093712)(0, l_a___0))
	}
}
// to file:///home/andy/keen/lib/number.keen 576:1
const to13152219174195707203 = l_a___0 => {
	if (__60__616269385802849585881(l_a___0, BigInt.asUintN(64, BigInt(4.294967295E9)))) {
		return (Number(l_a___0) >>> 0)
	} else {
		throw arithmetic__45error16942717281569864426(c____370(), new (number17074854190323093712)(0, l_a___0))
	}
}
// next file:///home/andy/keen/lib/number.keen 610:1
const next8081526569989856532 = l_a___0 =>
	__431000895641751717785(l_a___0, 1n)
// hash file:///home/andy/keen/lib/number.keen 647:1
const hash3240496780436305649 = (l_a___0, l_state___1) =>
	hash16287967374996838925(BigInt.asUintN(64, BigInt(l_a___0)), l_state___1)
// hash file:///home/andy/keen/lib/number.keen 653:1
const hash16287967374996838925 = (l_a___1, l_state___0) => {
	set__45state6689730104399791421(l_state___0, (state2892644743179828162(l_state___0) ^ l_a___1))
	set__45state6689730104399791421(l_state___0, BigInt.asUintN(64, (BigInt.asUintN(64, (6364136223846793005n * state2892644743179828162(l_state___0))) + 1n)))
}
// ==@(char8) file:///home/andy/keen/lib/option.keen 12:1
const __61__61690953950980746224 = (l_a___0, l_b___1) =>
	(((typeof l_a___0) === "number") ? (((typeof l_b___1) === "number") ? Object.is(l_a___0, l_b___1) : false) : (((typeof l_b___1) === "number") ? false : true))
// ==@(theme) file:///home/andy/keen/lib/option.keen 12:1
const __61__619125758492689299197 = (l_a___0, l_b___1) =>
	(((typeof l_a___0) === "number") ? (((typeof l_b___1) === "number") ? __61__612605041792446992492(l_a___0, l_b___1) : false) : (((typeof l_b___1) === "number") ? false : true))
// ==@(string) file:///home/andy/keen/lib/option.keen 12:1
const __61__615447986899631667393 = (l_a___0, l_b___1) =>
	((l_a___0 instanceof string9092701471797383860) ? ((l_b___1 instanceof string9092701471797383860) ? __61__618774367296004624587(l_a___0, l_b___1) : false) : ((l_b___1 instanceof string9092701471797383860) ? false : true))
// ==@(keydown-kind) file:///home/andy/keen/lib/option.keen 12:1
const __61__615609069574490488885 = (l_a___0, l_b___1) =>
	(((typeof l_a___0) === "number") ? (((typeof l_b___1) === "number") ? __61__612158153613745959279(l_a___0, l_b___1) : false) : (((typeof l_b___1) === "number") ? false : true))
// try-take file:///home/andy/keen/lib/parse.keen 11:1
const try__45take1038993671379095377 = (l_a___0, l_start___1) =>
	try__45take__45all16593940086008292822(l_a___0, to5062813879059210936(l_start___1))
// parse-error file:///home/andy/keen/lib/parse.keen 34:1
const parse__45error1656537427315988372 = (l_input___0, l_index___1, l_expected___2) =>
	new (parse__45error14814424712875317110)(l_input___0, l_index___1, l_expected___2)
// input file:///home/andy/keen/lib/parse.keen 36:5
const input6503608124567255266 = l_a___0 =>
	l_a___0.input
// index file:///home/andy/keen/lib/parse.keen 39:5
const index7555887193504190725 = l_a___0 =>
	l_a___0.index
// expected file:///home/andy/keen/lib/parse.keen 41:5
const expected11746322018998201697 = l_a___0 =>
	l_a___0.expected
// show file:///home/andy/keen/lib/parse.keen 42:1
const show6903594590388038079 = l_a___1 => {
	let l_peek___0
	return ((l_peek___0 = (Object.is(index7555887193504190725(l_a___1), size17451724000551404641(input6503608124567255266(l_a___1))) ? c____482() : interpolate16033570998297636535([c____483(), interpolate__45value1419626476691701472(subscript13188540832821584219(to5062813879059210936(input6503608124567255266(l_a___1)), index7555887193504190725(l_a___1))), c____483()]))) , interpolate16033570998297636535([c____484(), interpolate__45value3612249313584056128(expected11746322018998201697(l_a___1)), c____485(), interpolate__45value3612249313584056128(l_peek___0)]))
}
// inner-parse-error file:///home/andy/keen/lib/parse.keen 47:1
const inner__45parse__45error9445694994164104009 = l_expected___0 =>
	new (inner__45parse__45error10218544602784777059)(l_expected___0)
// expected file:///home/andy/keen/lib/parse.keen 47:27
const expected15539735453510315907 = l_a___0 =>
	l_a___0.expected
// show file:///home/andy/keen/lib/parse.keen 48:1
const show7314411803973743976 = l_a___0 =>
	interpolate16033570998297636535([c____484(), interpolate__45value3612249313584056128(expected15539735453510315907(l_a___0))])
// skip-whitespace file:///home/andy/keen/lib/parse.keen 213:1
const skip__45whitespace8371819686262295083 = l_a___1 => {
	x_loop___0: while (true){
		const l_temp___0 = peek13606136736990828314(l_a___1)
		const l_x___2 = l_temp___0
		if ((((typeof l_temp___0) === "number") ? is__45space15875073203781262992(l_x___2) : false)) {
			(void take__45next3000444236349839320(l_a___1))
			;(void 0)
			continue
		} else {
			(void 0)
			break  x_loop___0
		}
	}
	;(void 0)
}
// is-space file:///home/andy/keen/lib/parse.keen 216:1
const is__45space15875073203781262992 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 9) ? true : ((x_matched___0 === 10) ? true : ((x_matched___0 === 13) ? true : ((x_matched___0 === 32) ? true : false)))))
}
// take-quoted-string file:///home/andy/keen/lib/parse.keen 232:1
const take__45quoted__45string16120549439303817029 = l_iter___0 => {
	if (try__45take1038993671379095377(l_iter___0, c____531())) {
		return take__45quoted__45string__45after__45quote12593330468085822(l_iter___0)
	} else {
		throw inner__45parse__45error9445694994164104009(c____544())
	}
}
// take-quoted-string-after-quote file:///home/andy/keen/lib/parse.keen 235:1
const take__45quoted__45string__45after__45quote12593330468085822 = l_iter___1 =>
	with__45block10857829225077824123(c____561(), l_out___0 => {
			x_loop___0: while (true){
				if ((() => {
							if (is__45at__45end18265995694961723280(l_iter___1)) {
								throw inner__45parse__45error9445694994164104009(c____544())
							} else {
								const l_char___2 = take__45next3000444236349839320(l_iter___1)
								const x_matched___1 = l_char___2
								switch (x_matched___1) {
									case 10:{
										throw inner__45parse__45error9445694994164104009(c____546())
									}
									case 34:{
										return true
									}
									case 92:{
										if (take__45string__45escape9293923925740717496(l_out___0, l_iter___1)) {
											return false
										} else {
											throw inner__45parse__45error9445694994164104009(c____545())
										}
									}
									default:{
										__126__6114764821344557714604(l_out___0, l_char___2)
										return false
									}
								}
							}
						})()) {
					(void 0)
					break  x_loop___0
				} else {
					continue
				}
			}
		})
// take-string-escape file:///home/andy/keen/lib/parse.keen 251:1
const take__45string__45escape9293923925740717496 = (l_out___0, l_iter___1) => {
	let l_temp___3, x_matched___1, l_member2___2
	const x_matched___0 = ((l_member2___2 = try__45take__45next4456695352035296389(l_iter___1)) , ((x_matched___1 = l_member2___2) , ((x_matched___1 instanceof none12752313651180151000) ? 0 : (((typeof x_matched___1) === "number") ? ((l_temp___3 = l_member2___2) , l_temp___3) : _unreachable()))))
	switch (x_matched___0) {
		case 34:{
			__126__6114764821344557714604(l_out___0, 34)
			return true
		}
		case 48:{
			__126__6114764821344557714604(l_out___0, 0)
			return true
		}
		case 85:{
			return take__45unicode__45escape8572044680752056665(l_out___0, l_iter___1, 8n)
		}
		case 92:{
			__126__6114764821344557714604(l_out___0, 92)
			return true
		}
		case 110:{
			__126__6114764821344557714604(l_out___0, 10)
			return true
		}
		case 114:{
			__126__6114764821344557714604(l_out___0, 13)
			return true
		}
		case 116:{
			__126__6114764821344557714604(l_out___0, 9)
			return true
		}
		case 117:{
			return take__45unicode__45escape8572044680752056665(l_out___0, l_iter___1, 4n)
		}
		case 120:{
			return take__45unicode__45escape8572044680752056665(l_out___0, l_iter___1, 2n)
		}
		case 123:{
			__126__6114764821344557714604(l_out___0, 123)
			return true
		}
		case 125:{
			__126__6114764821344557714604(l_out___0, 125)
			return true
		}
		default:{
			return false
		}
	}
}
// take-unicode-escape file:///home/andy/keen/lib/parse.keen 286:1
const take__45unicode__45escape8572044680752056665 = (l_out___7, l_iter___4, l_sequence__45length___1) => {
	let l_destruct___5, x_matched___2, l_member2___3
	try {
		let l_full__45char___0 = 0
		let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(0n, l_sequence__45length___1)
		while ((x_cur___0 < x_end___1)){
			const l_temp___2 = ((l_member2___3 = peek13606136736990828314(l_iter___4)) , ((x_matched___2 = l_member2___3) , ((x_matched___2 instanceof none12752313651180151000) ? c____558() : (((typeof x_matched___2) === "number") ? ((l_destruct___5 = l_member2___3) , decode__45hex__45digit2365052609394697775(l_destruct___5)) : _unreachable()))))
			const l_x___6 = l_temp___2
			if (((typeof l_temp___2) === "number")) {
				(void take__45next3000444236349839320(l_iter___4))
				l_full__45char___0 = ((__60__605844911385871066220(l_full__45char___0, 4) | to13152219174195707203(BigInt.asUintN(64, BigInt(l_x___6)))) >>> 0)
			} else {
				throw invalid__45unicode__45character996187487110418450(0)
			}
			x_cur___0 = (x_cur___0 + 1n)
		}
		__126__126__611782433431129225455(l_out___7, to__45array__45view10480319256574783196(to5062813879059210936(to13901929641757802795((l_full__45char___0 >>> 0)))))
		return true
	} catch (x_error___3) {
		if ((x_error___3 instanceof invalid__45unicode__45character8514911918857176900)) {
			return false
		} else {
			throw x_error___3
		}
	}
}
// int-of-nat file:///home/andy/keen/lib/parse.keen 322:1
const int__45of__45nat4195890211353157187 = (l_sign___0, l_a___1) => {
	let x_matched___0
	try {
		return (((typeof l_sign___0) === "number") ? ((x_matched___0 = l_sign___0) , ((x_matched___0 === 0) ? __459326987608157900488(l_a___1) : ((x_matched___0 === 1) ? to43078756347777321(l_a___1) : _unreachable()))) : to43078756347777321(l_a___1))
	} catch (x_error___1) {
		if ((x_error___1 instanceof arithmetic__45error8744457142948490603)) {
			throw inner__45parse__45error9445694994164104009(c____535())
		} else {
			throw x_error___1
		}
	}
}
// take-base-and-nat file:///home/andy/keen/lib/parse.keen 335:1
const take__45base__45and__45nat6098070912618703115 = l_iter___0 => {
	let l_temp___3, x_matched___0, l_member2___2
	if (peek__45digit2330692733923651617(l_iter___0)) {
		const l_base___1 = ((l_member2___2 = try__45take__450__45base7861940590793659598(l_iter___0)) , ((x_matched___0 = l_member2___2) , ((x_matched___0 instanceof none12752313651180151000) ? 10n : (((typeof x_matched___0) === "bigint") ? ((l_temp___3 = l_member2___2) , l_temp___3) : _unreachable()))))
		const l_temp___4 = next__45digit17762059030675110343(l_iter___0, l_base___1)
		let l_nat__45value___5 = l_temp___4
		if (((typeof l_temp___4) === "bigint")) {
			x_loop___1: while (true){
				if ((() => {
							skip__45underscore__45if__45before__45digit6545709818277702814(l_iter___0)
							const l_temp___6 = next__45digit17762059030675110343(l_iter___0, l_base___1)
							const l_digit___7 = l_temp___6
							if (((typeof l_temp___6) === "bigint")) {
								try {
									l_nat__45value___5 = __431000895641751717785(__4210985385519932138510(l_nat__45value___5, l_base___1), l_digit___7)
								} catch (x_error___2) {
									if ((x_error___2 instanceof arithmetic__45error8744457142948490603)) {
										throw inner__45parse__45error9445694994164104009(c____535())
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
					(void 0)
					break  x_loop___1
				}
			}
			return new1285689431429929527(l_base___1, l_nat__45value___5)
		} else {
			throw inner__45parse__45error9445694994164104009(c____427())
		}
	} else {
		throw inner__45parse__45error9445694994164104009(c____427())
	}
}
// next-digit file:///home/andy/keen/lib/parse.keen 350:1
const next__45digit17762059030675110343 = (l_a___1, l_base___4) => {
	const l_temp___0 = peek13606136736990828314(l_a___1)
	const l_char___2 = l_temp___0
	if (((typeof l_temp___0) === "number")) {
		const l_temp___3 = char__45to__45nat6411554699260729119359(l_char___2, l_base___4)
		const l_digit___5 = l_temp___3
		if (((typeof l_temp___3) === "bigint")) {
			(void take__45next3000444236349839320(l_a___1))
			return l_digit___5
		} else {
			return c____558()
		}
	} else {
		return c____558()
	}
}
// is-digit file:///home/andy/keen/lib/parse.keen 356:1
const is__45digit15073479106166211744 = l_a___0 =>
	(__60__6115930536883178209620(48, l_a___0) ? __60__6115930536883178209620(l_a___0, 57) : false)
// char-to-nat64 file:///home/andy/keen/lib/parse.keen 358:1
const char__45to__45nat6411554699260729119359 = (l_c___1, l_base___0) => {
	let l_res___2, l_res___3
	if (__60__616269385802849585881(l_base___0, 36n)) {
		return ((__60__6115930536883178209620(48, l_c___1) ? __60__6115930536883178209620(l_c___1, 57) : false) ? ((l_res___2 = BigInt.asUintN(64, BigInt(__4511411275747325339589((l_c___1 & 255), (48 & 255))))) , (__6010307380702345989795(l_res___2, l_base___0) ? l_res___2 : c____558())) : ((__60__6115930536883178209620(97, l_c___1) ? __60__6115930536883178209620(l_c___1, 122) : false) ? ((l_res___3 = __431000895641751717785(10n, BigInt.asUintN(64, BigInt(__4511411275747325339589((l_c___1 & 255), (97 & 255)))))) , (__6010307380702345989795(l_res___3, l_base___0) ? l_res___3 : c____558())) : c____558()))
	} else {
		throw new (error14987278044892349075)(c____537())
	}
}
// == file:///home/andy/keen/lib/parse.keen 376:1
const __61__6111662731501423497293 = (l_a___0, l_b___1) =>
	Object.is(l_a___0, l_b___1)
// take-number file:///home/andy/keen/lib/parse.keen 377:1
const take__45number16608826037160782086 = l_iter___1 => {
	const l_start___0 = copy10866195281237217353(l_iter___1)
	const l_sign___2 = try__45take__45sign5786583354481926101(l_iter___1)
	const l_destruct___3 = take__45base__45and__45nat6098070912618703115(l_iter___1)
	const l_nat__45value___4 = l_destruct___3.b
	const l_base___5 = l_destruct___3.a
	if (((Object.is(l_base___5, 10n) ? __61__61690953950980746224(peek13606136736990828314(l_iter___1), 46) : false) ? peek__45digit__45next6824609308310751537(l_iter___1) : false)) {
		(void take__45next3000444236349839320(l_iter___1))
		x_loop___0: while (true){
			if ((() => {
						skip__45underscore__45if__45before__45digit6545709818277702814(l_iter___1)
						return ((typeof next__45digit17762059030675110343(l_iter___1, 10n)) === "bigint")
					})()) {
				continue
			} else {
				(void 0)
				break  x_loop___0
			}
		}
		return new (number17074854190323093712)(2, parse__45float11110645763454361852(slice4867597206389270175(l_start___0, l_iter___1)))
	} else {
		return (((typeof l_sign___2) === "number") ? ((__61__6111662731501423497293(l_sign___2, 0) ? Object.is(l_nat__45value___4, 0n) : false) ? new (number17074854190323093712)(2, -0) : new (number17074854190323093712)(1, int__45of__45nat4195890211353157187(l_sign___2, l_nat__45value___4))) : new (number17074854190323093712)(0, l_nat__45value___4))
	}
}
// try-take-sign file:///home/andy/keen/lib/parse.keen 397:1
const try__45take__45sign5786583354481926101 = l_a___0 =>
	(try__45take1038993671379095377(l_a___0, c____355()) ? 0 : (try__45take1038993671379095377(l_a___0, c____542()) ? 1 : c____558()))
// try-take-0-base file:///home/andy/keen/lib/parse.keen 403:1
const try__45take__450__45base7861940590793659598 = l_iter___0 =>
	(try__45take1038993671379095377(l_iter___0, c____539()) ? 2n : (try__45take1038993671379095377(l_iter___0, c____540()) ? 8n : (try__45take1038993671379095377(l_iter___0, c____541()) ? 16n : c____558())))
// peek-digit file:///home/andy/keen/lib/parse.keen 411:1
const peek__45digit2330692733923651617 = l_a___1 => {
	let l_x___2, l_temp___0
	return ((l_temp___0 = peek13606136736990828314(l_a___1)) , ((l_x___2 = l_temp___0) , (((typeof l_temp___0) === "number") ? is__45digit15073479106166211744(l_x___2) : false)))
}
// peek-digit-next file:///home/andy/keen/lib/parse.keen 413:1
const peek__45digit__45next6824609308310751537 = l_a___1 => {
	let l_x___2, l_temp___0
	return ((l_temp___0 = peek__45by9004676165229744763(l_a___1, 1n)) , ((l_x___2 = l_temp___0) , (((typeof l_temp___0) === "number") ? is__45digit15073479106166211744(l_x___2) : false)))
}
// skip-underscore-if-before-digit file:///home/andy/keen/lib/parse.keen 416:1
const skip__45underscore__45if__45before__45digit6545709818277702814 = l_a___0 => {
	if ((__61__61690953950980746224(peek13606136736990828314(l_a___0), 95) ? peek__45digit__45next6824609308310751537(l_a___0) : false)) {
		(void take__45next3000444236349839320(l_a___0))
		;(void 0)
	} else {
		(void 0)
	}
}
// parse-float file:///home/andy/keen/lib/parse.keen 421:1
const parse__45float11110645763454361852 = l_a___0 =>
	to16122815567382831054(Number5083144947861631043()(to11394861970819088114(to6073813863926623175(l_a___0))))
// parse-json file:///home/andy/keen/lib/parse.keen 449:1
const parse__45json17391161396750161629 = l_a___1 => {
	const l_iter___0 = begin1652849595900823797(l_a___1)
	const l_res___2 = parse__45json15688951418461314322(l_iter___0)
	skip__45whitespace8371819686262295083(l_iter___0)
	if (is__45at__45end18265995694961723280(l_iter___0)) {
		return l_res___2
	} else {
		throw parse__45error1656537427315988372(l_a___1, index8524565038565477203(l_iter___0), c____530())
	}
}
// parse-json file:///home/andy/keen/lib/parse.keen 455:1
const parse__45json15688951418461314322 = l_a___0 => {
	let l_res___1, l_res___3
	skip__45whitespace8371819686262295083(l_a___0)
	if (try__45take1038993671379095377(l_a___0, c____360())) {
		return new (json11387066671148698414)(1, false)
	} else {
		if (try__45take1038993671379095377(l_a___0, c____359())) {
			return new (json11387066671148698414)(1, true)
		} else {
			if (try__45take1038993671379095377(l_a___0, c____342())) {
				return new (json11387066671148698414)(0, c____559())
			} else {
				if (try__45take1038993671379095377(l_a___0, c____531())) {
					return to5826787255917315874(take__45quoted__45string__45after__45quote12593330468085822(l_a___0))
				} else {
					if (try__45take1038993671379095377(l_a___0, c____343())) {
						skip__45whitespace8371819686262295083(l_a___0)
						return ((l_res___1 = (try__45take1038993671379095377(l_a___0, c____345()) ? c____291() : with__45block8931266565154417895(c____561(), l_out___2 => {
								__126__6115681950958875131434(l_out___2, parse__45json15688951418461314322(l_a___0))
								skip__45whitespace8371819686262295083(l_a___0)
								x_loop___0: while (true){
									if (try__45take1038993671379095377(l_a___0, c____344())) {
										__126__6115681950958875131434(l_out___2, parse__45json15688951418461314322(l_a___0))
										continue
									} else {
										(void 0)
										break  x_loop___0
									}
								}
								skip__45whitespace8371819686262295083(l_a___0)
								if (try__45take1038993671379095377(l_a___0, c____345())) {
									(void 0)
								} else {
									throw inner__45parse__45error9445694994164104009(c____532())
								}
							}))) , to12912120979862233814(l_res___1))
					} else {
						if (try__45take1038993671379095377(l_a___0, c____347())) {
							skip__45whitespace8371819686262295083(l_a___0)
							return ((l_res___3 = (try__45take1038993671379095377(l_a___0, c____348()) ? list__45new17278182394804174401(c____302()) : with__45block11396783854258024558(c____561(), l_out___4 => {
									__126__6116067417997219459418(l_out___4, take__45key__45value4210232594272817875(l_a___0))
									x_loop___1: while (true){
										if (try__45take1038993671379095377(l_a___0, c____344())) {
											__126__6116067417997219459418(l_out___4, take__45key__45value4210232594272817875(l_a___0))
											continue
										} else {
											(void 0)
											break  x_loop___1
										}
									}
									skip__45whitespace8371819686262295083(l_a___0)
									if (try__45take1038993671379095377(l_a___0, c____348())) {
										(void 0)
									} else {
										throw inner__45parse__45error9445694994164104009(c____533())
									}
								}))) , to17873013641985653784(l_res___3))
						} else {
							try {
								return to1057557571117463609(take__45number16608826037160782086(l_a___0))
							} catch (x_error___2) {
								if ((x_error___2 instanceof inner__45parse__45error10218544602784777059)) {
									throw inner__45parse__45error9445694994164104009(c____534())
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
// take-key-value file:///home/andy/keen/lib/parse.keen 491:1
const take__45key__45value4210232594272817875 = l_a___0 => {
	skip__45whitespace8371819686262295083(l_a___0)
	const l_key___1 = take__45quoted__45string16120549439303817029(l_a___0)
	skip__45whitespace8371819686262295083(l_a___0)
	if (try__45take1038993671379095377(l_a___0, c____346())) {
		skip__45whitespace8371819686262295083(l_a___0)
		const l_value___2 = parse__45json15688951418461314322(l_a___0)
		skip__45whitespace8371819686262295083(l_a___0)
		return new9565238027521497727(to9088973396303820521(l_key___1), l_value___2)
	} else {
		throw inner__45parse__45error9445694994164104009(c____543())
	}
}
// array-view@(container) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view1609775702364768082 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view1539156142368323695)(l_inner___0, l_low___1, l_high___2)
// array-view@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view1762096714659694319 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view7959381185096989027)(l_inner___0, l_low___1, l_high___2)
// array-view@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view6436616925539883628 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view13799921455024358542)(l_inner___0, l_low___1, l_high___2)
// array-view@(js-any) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view15702253897469667760 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view8872559116412833258)(l_inner___0, l_low___1, l_high___2)
// array-view@(json) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view12988669135028027548 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view6906104235665091390)(l_inner___0, l_low___1, l_high___2)
// array-view@(char8) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view8762532083386392749 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view15480539823764319015)(l_inner___0, l_low___1, l_high___2)
// array-view@(symbol) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view2186238327565642828 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view4665325390507424622)(l_inner___0, l_low___1, l_high___2)
// array-view@(nat64) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view10608440467701165294 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view9776576073286985664)(l_inner___0, l_low___1, l_high___2)
// array-view@(write) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view14867542618575731105 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view870808357113815035)(l_inner___0, l_low___1, l_high___2)
// array-view@((string, void) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view7536421171533743614 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view9400498415358213712)(l_inner___0, l_low___1, l_high___2)
// array-view@(lsp-diagnostic) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view11703407279588233212 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view15178845661211372146)(l_inner___0, l_low___1, l_high___2)
// array-view@(string) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view9896856644206820554 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view561589902681146172)(l_inner___0, l_low___1, l_high___2)
// array-view@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view7382918850406636581 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view16145528282488670175)(l_inner___0, l_low___1, l_high___2)
// array-view@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view548205828792028474 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view2578656777550010924)(l_inner___0, l_low___1, l_high___2)
// array-view@((symbol, string) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view15540065174232533334 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view5216778068209014760)(l_inner___0, l_low___1, l_high___2)
// array-view@(char8 array-view) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view3044084328022043804 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view14288610044726605630)(l_inner___0, l_low___1, l_high___2)
// array-view@((symbol, json) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view4760858545430602020 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view15132187800601660038)(l_inner___0, l_low___1, l_high___2)
// array-view@(char8 array) file:///home/andy/keen/lib/private/bootstrap.keen 13:1
const array__45view10395534566007739405 = (l_inner___0, l_low___1, l_high___2) =>
	new (array__45view18403251639396120164)(l_inner___0, l_low___1, l_high___2)
// inner@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner17074270359373634671 = l_a___0 =>
	l_a___0.inner
// inner@(char8) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner11946998456022976079 = l_a___0 =>
	l_a___0.inner
// inner@(char8 array-view) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner2173340428848842026 = l_a___0 =>
	l_a___0.inner
// inner@(json) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner6681968607105233481 = l_a___0 =>
	l_a___0.inner
// inner@(nat64) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner8454337527897113636 = l_a___0 =>
	l_a___0.inner
// inner@(write) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner10381292896226672567 = l_a___0 =>
	l_a___0.inner
// inner@((string, void) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner16815717186589282851 = l_a___0 =>
	l_a___0.inner
// inner@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner9514086865350473646 = l_a___0 =>
	l_a___0.inner
// inner@(symbol) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner16640552788994453305 = l_a___0 =>
	l_a___0.inner
// inner@(lsp-diagnostic) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner10775026925193598858 = l_a___0 =>
	l_a___0.inner
// inner@(js-any) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner15449032482414092382 = l_a___0 =>
	l_a___0.inner
// inner@((symbol, string) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner11426169652213451877 = l_a___0 =>
	l_a___0.inner
// inner@(char8 array) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner1816149123879175188 = l_a___0 =>
	l_a___0.inner
// inner@(string) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner6468625081219323144 = l_a___0 =>
	l_a___0.inner
// inner@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner12937935715526321369 = l_a___0 =>
	l_a___0.inner
// inner@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner2869414503756537401 = l_a___0 =>
	l_a___0.inner
// inner@((symbol, json) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner9705949447374275723 = l_a___0 =>
	l_a___0.inner
// inner@(container) file:///home/andy/keen/lib/private/bootstrap.keen 14:5
const inner12412804879894670974 = l_a___0 =>
	l_a___0.inner
// low@(char8) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low13243092189785230564 = l_a___0 =>
	l_a___0.low
// low@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low3946178672028260102 = l_a___0 =>
	l_a___0.low
// low@(string) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low11019153336510917225 = l_a___0 =>
	l_a___0.low
// low@(nat64) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low3533937260951459413 = l_a___0 =>
	l_a___0.low
// low@(container) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low17189750349762194983 = l_a___0 =>
	l_a___0.low
// low@(char8 array-view) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low17118361414048644707 = l_a___0 =>
	l_a___0.low
// low@(lsp-diagnostic) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low10737707123401464131 = l_a___0 =>
	l_a___0.low
// low@(symbol) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low10217099313870001158 = l_a___0 =>
	l_a___0.low
// low@(js-any) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low1497446415983219335 = l_a___0 =>
	l_a___0.low
// low@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low10445493155090407718 = l_a___0 =>
	l_a___0.low
// low@((symbol, string) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low15956577804495702210 = l_a___0 =>
	l_a___0.low
// low@(write) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low12832322251908267052 = l_a___0 =>
	l_a___0.low
// low@(json) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low1130076515557150166 = l_a___0 =>
	l_a___0.low
// low@((symbol, json) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low5833781831263273328 = l_a___0 =>
	l_a___0.low
// low@((string, void) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low5021399424278220072 = l_a___0 =>
	l_a___0.low
// low@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low17362901395779375236 = l_a___0 =>
	l_a___0.low
// low@(char8 array) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low4364951268334377023 = l_a___0 =>
	l_a___0.low
// low@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 15:5
const low6205240433782659991 = l_a___0 =>
	l_a___0.low
// high@(json) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high103722714395777183 = l_a___0 =>
	l_a___0.high
// high@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high629833701662106421 = l_a___0 =>
	l_a___0.high
// high@(char8 array-view) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high1530739970243515496 = l_a___0 =>
	l_a___0.high
// high@((symbol, string) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high7615525486373111835 = l_a___0 =>
	l_a___0.high
// high@(symbol) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high2595102453365030671 = l_a___0 =>
	l_a___0.high
// high@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high1706005646674707084 = l_a___0 =>
	l_a___0.high
// high@(nat64) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high9302913667711850482 = l_a___0 =>
	l_a___0.high
// high@(string) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high5597066221257067382 = l_a___0 =>
	l_a___0.high
// high@(write) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high5171915085260613565 = l_a___0 =>
	l_a___0.high
// high@(js-any) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high18439820822484466364 = l_a___0 =>
	l_a___0.high
// high@(char8 array) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high12343989300082986998 = l_a___0 =>
	l_a___0.high
// high@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high18329008213481336239 = l_a___0 =>
	l_a___0.high
// high@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high12197786612656997903 = l_a___0 =>
	l_a___0.high
// high@((symbol, json) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high449060238231408817 = l_a___0 =>
	l_a___0.high
// high@((string, void) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high16749301630502987785 = l_a___0 =>
	l_a___0.high
// high@(char8) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high18345099074896224277 = l_a___0 =>
	l_a___0.high
// high@(container) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high13103898408104113628 = l_a___0 =>
	l_a___0.high
// high@(lsp-diagnostic) file:///home/andy/keen/lib/private/bootstrap.keen 16:5
const high14663091662523215304 = l_a___0 =>
	l_a___0.high
// buffer-view@(char8) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view6022500876807843485 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view3750434435755209345)(l_inner___0, l_low___1, l_high___2)
// buffer-view@((symbol, string) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view1207187923694840792 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view6087494128730688282)(l_inner___0, l_low___1, l_high___2)
// buffer-view@(js-any) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view3951271158359476115 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view8026343756339215895)(l_inner___0, l_low___1, l_high___2)
// buffer-view@(write) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view2546651914804592200 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view5826670876611313479)(l_inner___0, l_low___1, l_high___2)
// buffer-view@((string, void) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view15282193117543572088 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view17651792463811375927)(l_inner___0, l_low___1, l_high___2)
// buffer-view@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view6930081592514700071 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view5965882061129654354)(l_inner___0, l_low___1, l_high___2)
// buffer-view@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view4967463795748849364 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view15794038716062724547)(l_inner___0, l_low___1, l_high___2)
// buffer-view@(container) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view12141521395337135660 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view15724133442252246560)(l_inner___0, l_low___1, l_high___2)
// buffer-view@(json) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view662411626235235663 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view10560204057896667799)(l_inner___0, l_low___1, l_high___2)
// buffer-view@(char8 array) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view13525549721684109157 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view13122600021497247433)(l_inner___0, l_low___1, l_high___2)
// buffer-view@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view13893814197239730934 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view11689099277984535309)(l_inner___0, l_low___1, l_high___2)
// buffer-view@(symbol) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view10920161132596428565 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view11590763453411951278)(l_inner___0, l_low___1, l_high___2)
// buffer-view@(lsp-diagnostic) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view11931444935479713698 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view1438560336382251092)(l_inner___0, l_low___1, l_high___2)
// buffer-view@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view2511404793212045132 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view10527044545370562158)(l_inner___0, l_low___1, l_high___2)
// buffer-view@(char8 array-view) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view9520788285311582118 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view1363287095204429306)(l_inner___0, l_low___1, l_high___2)
// buffer-view@((symbol, json) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view771959112192360551 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view305042617080059601)(l_inner___0, l_low___1, l_high___2)
// buffer-view@(string) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view5688304380324953365 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view12470964373396697688)(l_inner___0, l_low___1, l_high___2)
// buffer-view@(nat64) file:///home/andy/keen/lib/private/bootstrap.keen 19:1
const buffer__45view5204514869414665555 = (l_inner___0, l_low___1, l_high___2) =>
	new (buffer__45view2646452298954775773)(l_inner___0, l_low___1, l_high___2)
// inner@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner4658032288833314303 = l_a___0 =>
	l_a___0.inner
// inner@(write) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner17868120078453151414 = l_a___0 =>
	l_a___0.inner
// inner@((string, void) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner2597800509632892595 = l_a___0 =>
	l_a___0.inner
// inner@(char8 array-view) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner12074162200244706116 = l_a___0 =>
	l_a___0.inner
// inner@(char8) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner5201505297485464851 = l_a___0 =>
	l_a___0.inner
// inner@(container) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner4627218152067619130 = l_a___0 =>
	l_a___0.inner
// inner@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner17087429285913051113 = l_a___0 =>
	l_a___0.inner
// inner@(json) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner9480835402066902240 = l_a___0 =>
	l_a___0.inner
// inner@((symbol, string) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner8716165494631018768 = l_a___0 =>
	l_a___0.inner
// inner@(char8 array) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner4468533650675391259 = l_a___0 =>
	l_a___0.inner
// inner@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner3080103843219855230 = l_a___0 =>
	l_a___0.inner
// inner@(symbol) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner1925547039433508622 = l_a___0 =>
	l_a___0.inner
// inner@(lsp-diagnostic) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner15728292011917476641 = l_a___0 =>
	l_a___0.inner
// inner@(nat64) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner15915376308281493177 = l_a___0 =>
	l_a___0.inner
// inner@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner2942920701126672218 = l_a___0 =>
	l_a___0.inner
// inner@(string) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner14761671961931696203 = l_a___0 =>
	l_a___0.inner
// inner@((symbol, json) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner16774520990887944686 = l_a___0 =>
	l_a___0.inner
// inner@(js-any) file:///home/andy/keen/lib/private/bootstrap.keen 20:5
const inner11311711689064119033 = l_a___0 =>
	l_a___0.inner
// low@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low13889029968547358396 = l_a___0 =>
	l_a___0.low
// low@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low15245588275609903626 = l_a___0 =>
	l_a___0.low
// low@(symbol) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low16430187390060687223 = l_a___0 =>
	l_a___0.low
// low@(js-any) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low8261516025681847494 = l_a___0 =>
	l_a___0.low
// low@(char8) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low9256670159745536344 = l_a___0 =>
	l_a___0.low
// low@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low7781441003158338613 = l_a___0 =>
	l_a___0.low
// low@(lsp-diagnostic) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low15522617842246446030 = l_a___0 =>
	l_a___0.low
// low@((string, void) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low16377466782512132558 = l_a___0 =>
	l_a___0.low
// low@(char8 array-view) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low16498539521284589301 = l_a___0 =>
	l_a___0.low
// low@(nat64) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low9981003736235128198 = l_a___0 =>
	l_a___0.low
// low@(container) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low10821665102065694003 = l_a___0 =>
	l_a___0.low
// low@(string) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low14785700805310212656 = l_a___0 =>
	l_a___0.low
// low@(write) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low14251902709343045631 = l_a___0 =>
	l_a___0.low
// low@((symbol, string) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low1429300861419982801 = l_a___0 =>
	l_a___0.low
// low@(json) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low15618294005981172577 = l_a___0 =>
	l_a___0.low
// low@((symbol, json) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low17001325983603132631 = l_a___0 =>
	l_a___0.low
// low@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low11868775384877238483 = l_a___0 =>
	l_a___0.low
// low@(char8 array) file:///home/andy/keen/lib/private/bootstrap.keen 21:5
const low3447833770475514048 = l_a___0 =>
	l_a___0.low
// high@((nat64, json deferred) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high902431604328222889 = l_a___0 =>
	l_a___0.high
// high@(symbol) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high15467134755580164114 = l_a___0 =>
	l_a___0.high
// high@(js-any) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high6714142873301233871 = l_a___0 =>
	l_a___0.high
// high@(nat64) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high16890420672510616207 = l_a___0 =>
	l_a___0.high
// high@(lsp-diagnostic) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high17241577090204902711 = l_a___0 =>
	l_a___0.high
// high@((symbol, string) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high11839530622809001503 = l_a___0 =>
	l_a___0.high
// high@((uri, lsp-diagnostic array) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high3792731834499617744 = l_a___0 =>
	l_a___0.high
// high@((string, void) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high5773381196889982781 = l_a___0 =>
	l_a___0.high
// high@((symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high7744690758808713752 = l_a___0 =>
	l_a___0.high
// high@(json) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high17056179631405189877 = l_a___0 =>
	l_a___0.high
// high@((uri, (void, lsp-diagnostic array) lambda-mut) tuple2 option) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high9315802989057580803 = l_a___0 =>
	l_a___0.high
// high@((symbol, json) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high3561719128747716437 = l_a___0 =>
	l_a___0.high
// high@(char8) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high14012147141240943737 = l_a___0 =>
	l_a___0.high
// high@(char8 array-view) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high8993901700075881490 = l_a___0 =>
	l_a___0.high
// high@(char8 array) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high3111845369126136257 = l_a___0 =>
	l_a___0.high
// high@(string) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high8648863549547805297 = l_a___0 =>
	l_a___0.high
// high@(write) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high1403451048970070228 = l_a___0 =>
	l_a___0.high
// high@(container) file:///home/andy/keen/lib/private/bootstrap.keen 22:5
const high9118536482457872120 = l_a___0 =>
	l_a___0.high
// new file:///home/andy/keen/lib/private/bootstrap.keen 36:1
const new8745881605120202251 = (l_symbol__45seeded__45hash___0, l_symbol__45deterministic__45hash___1, l_symbol__45chars___2) =>
	new (symbol11978982047599604571)(l_symbol__45seeded__45hash___0, l_symbol__45deterministic__45hash___1, l_symbol__45chars___2)
// symbol-seeded-hash file:///home/andy/keen/lib/private/bootstrap.keen 37:5
const symbol__45seeded__45hash13753515466697770587 = l_a___0 =>
	l_a___0["symbol-seeded-hash"]
// symbol-deterministic-hash file:///home/andy/keen/lib/private/bootstrap.keen 38:5
const symbol__45deterministic__45hash5775330607833456780 = l_a___0 =>
	l_a___0["symbol-deterministic-hash"]
// symbol-chars file:///home/andy/keen/lib/private/bootstrap.keen 39:5
const symbol__45chars7278066593402585504 = l_a___0 =>
	l_a___0["symbol-chars"]
// new@(json, json) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new1834493116592655285 = (l_a___0, l_b___1) =>
	new (tuple29187502997329124282)(l_a___0, l_b___1)
// new@(string, void) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new17217374229703192151 = (l_a___0, l_b___1) =>
	new (tuple2996480197648150176)(l_a___0, l_b___1)
// new@(nat64, json) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new7302679732856523335 = (l_a___0, l_b___1) =>
	new (tuple212942074040942771617)(l_a___0, l_b___1)
// new@(symbol, string) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new9294282750249516893 = (l_a___0, l_b___1) =>
	new (tuple26452499447382064753)(l_a___0, l_b___1)
// new@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new13964893598962448568 = (l_a___0, l_b___1) =>
	new (tuple21932746293587380923)(l_a___0, l_b___1)
// new@(nat64, (symbol, string) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new18363166484442259764 = (l_a___0, l_b___1) =>
	new (tuple28241260321252476408)(l_a___0, l_b___1)
// new@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new6649702605338581430 = (l_a___0, l_b___1) =>
	new (tuple210256334102407564326)(l_a___0, l_b___1)
// new@(nat64, (symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new6974291735633534611 = (l_a___0, l_b___1) =>
	new (tuple29848229988263964139)(l_a___0, l_b___1)
// new@(nat64, json deferred) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new10998768713586559663 = (l_a___0, l_b___1) =>
	new (tuple212663747997492605280)(l_a___0, l_b___1)
// new@(symbol array, json array) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new13571496891516364698 = (l_a___0, l_b___1) =>
	new (tuple215552198414961759881)(l_a___0, l_b___1)
// new@(nat64, symbol) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new7844032219794201287 = (l_a___0, l_b___1) =>
	new (tuple21582738628210929474)(l_a___0, l_b___1)
// new@(symbol, json) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new9565238027521497727 = (l_a___0, l_b___1) =>
	new (tuple210381644676499725263)(l_a___0, l_b___1)
// new@(nat64, to-kid-result) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new768004480104862432 = (l_a___0, l_b___1) =>
	new (tuple21322332467824830590)(l_a___0, l_b___1)
// new@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new2841691230671714966 = (l_a___0, l_b___1) =>
	new (tuple28221928096440926123)(l_a___0, l_b___1)
// new@(nat64, nat64) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new1285689431429929527 = (l_a___0, l_b___1) =>
	new (tuple28688078643798573938)(l_a___0, l_b___1)
// new@(nat64, (symbol, json) tuple2) file:///home/andy/keen/lib/private/bootstrap.keen 75:1
const new10910183378474626096 = (l_a___0, l_b___1) =>
	new (tuple27945273125401615756)(l_a___0, l_b___1)
// a@(symbol, json) file:///home/andy/keen/lib/private/bootstrap.keen 75:24
const a13517452400068764641 = l_a___0 =>
	l_a___0.a
// a@(symbol, (js-any, (js-any, js-any array) tuple2) lambda-mut) file:///home/andy/keen/lib/private/bootstrap.keen 75:24
const a9842936203065675719 = l_a___0 =>
	l_a___0.a
// a@(symbol, string) file:///home/andy/keen/lib/private/bootstrap.keen 75:24
const a16321909526332198610 = l_a___0 =>
	l_a___0.a
// a@(json, json) file:///home/andy/keen/lib/private/bootstrap.keen 75:24
const a13190002216079534334 = l_a___0 =>
	l_a___0.a
// b@(uri, lsp-diagnostic array) file:///home/andy/keen/lib/private/bootstrap.keen 75:30
const b12799316035677851411 = l_a___0 =>
	l_a___0.b
// b@(uri, (void, lsp-diagnostic array) lambda-mut) file:///home/andy/keen/lib/private/bootstrap.keen 75:30
const b7320525045178919377 = l_a___0 =>
	l_a___0.b
// b@(string, void) file:///home/andy/keen/lib/private/bootstrap.keen 75:30
const b2297566177032367872 = l_a___0 => {
	(void l_a___0)
	;(void 0)
}
// b@(json, json) file:///home/andy/keen/lib/private/bootstrap.keen 75:30
const b13735090799345817353 = l_a___0 =>
	l_a___0.b
// b@(nat64, json deferred) file:///home/andy/keen/lib/private/bootstrap.keen 75:30
const b9732658926027494587 = l_a___0 =>
	l_a___0.b
// show file:///home/andy/keen/lib/private/bootstrap.keen 96:5
const show3552818353380165450 = l_ignore___0 => {
	let x_matched___0
	return ((x_matched___0 = l_ignore___0) , ((x_matched___0 instanceof deserialize__45error7319880037343575041) ? show3878734917429198339(l_ignore___0) : ((x_matched___0 instanceof error14987278044892349075) ? show9662701914369401736(l_ignore___0) : ((x_matched___0 instanceof arithmetic__45error8744457142948490603) ? c____313() : ((x_matched___0 instanceof index__45too__45big2628637778731366537) ? c____314() : ((x_matched___0 instanceof unreachable14113598576212083658) ? c____339() : ((x_matched___0 instanceof was__45locked658591519880986109) ? c____363() : ((x_matched___0 instanceof expected__45equal14446889629956317080) ? show14835770171004810681(l_ignore___0) : ((x_matched___0 instanceof unicode__45decode__45error4554044903108079804) ? c____389() : ((x_matched___0 instanceof iterator__45out__45of__45bounds15075223189503120726) ? c____391() : ((x_matched___0 instanceof parse__45error14814424712875317110) ? show6903594590388038079(l_ignore___0) : ((x_matched___0 instanceof todo11797122415505553379) ? c____514() : ((x_matched___0 instanceof inner__45parse__45error10218544602784777059) ? show7314411803973743976(l_ignore___0) : ((x_matched___0 instanceof invalid__45unicode__45character8514911918857176900) ? show14464314580939686645(l_ignore___0) : _unreachable()))))))))))))))
}
// new file:///home/andy/keen/lib/private/bootstrap.keen 100:1
const new16542246385619872033 = l_chars___0 =>
	new (string9092701471797383860)(l_chars___0)
// chars file:///home/andy/keen/lib/private/bootstrap.keen 101:5
const chars8694273362434023454 = l_a___0 =>
	l_a___0.chars
// reference@(js-any option) file:///home/andy/keen/lib/private/bootstrap.keen 104:1
const reference2921620855947648148 = l_reference__45value___0 =>
	new (reference2025217208433836451)(l_reference__45value___0)
// reference-value@(js-any option) file:///home/andy/keen/lib/private/bootstrap.keen 105:5
const reference__45value7270536816843676136 = l_a___0 =>
	l_a___0["reference-value"]
// set-reference-value@(js-any option) file:///home/andy/keen/lib/private/bootstrap.keen 105:5
const set__45reference__45value2196423018448390627 = (l_a___0, l_reference__45value___1) => {
	l_a___0["reference-value"] = l_reference__45value___1
}
// new file:///home/andy/keen/lib/private/bootstrap.keen 129:1
const new1845203213606230927 = (l_state___0, l_dummy___1) =>
	new (hash__45state18388613448778446686)(l_state___0, l_dummy___1)
// set-state file:///home/andy/keen/lib/private/bootstrap.keen 130:5
const set__45state6689730104399791421 = (l_a___0, l_state___1) => {
	l_a___0.state = l_state___1
}
// state file:///home/andy/keen/lib/private/bootstrap.keen 130:5
const state2892644743179828162 = l_a___0 =>
	l_a___0.state
// string file:///home/andy/keen/lib/private/bootstrap.keen 133:1
const string1937295505575574809 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 5) ? l_a___0.value : c____558()))
}
// json-object file:///home/andy/keen/lib/private/bootstrap.keen 133:1
const json__45object15666135835072805560 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0.index === 7) ? l_a___0.value : c____558()))
}
// new file:///home/andy/keen/lib/private/bootstrap.keen 137:1
const new17441915584051308084 = (l_keys___0, l_values___1) =>
	new (json__45object4052534663485263901)(l_keys___0, l_values___1)
// keys file:///home/andy/keen/lib/private/bootstrap.keen 138:5
const keys8134600976524241778 = l_a___0 =>
	l_a___0.keys
// values file:///home/andy/keen/lib/private/bootstrap.keen 139:5
const values2713219819661029643 = l_a___0 =>
	l_a___0.values
// new-json-object-from-sorted file:///home/andy/keen/lib/private/bootstrap.keen 140:1
const new__45json__45object__45from__45sorted1232804983025817311 = (l_keys___0, l_values___1) =>
	new17441915584051308084(l_keys___0, l_values___1)
// pos file:///home/andy/keen/lib/private/parse-util.keen 18:1
const pos3314308867312380391 = l_a___0 =>
	to13152219174195707203(index8524565038565477203(l_a___0))
// set-pos file:///home/andy/keen/lib/private/parse-util.keen 20:1
const set__45pos10668923459724743638 = (l_a___0, l_pos___1) =>
	set__45index2256938323223038016(l_a___0, BigInt.asUintN(64, BigInt(l_pos___1)))
// slice-from file:///home/andy/keen/lib/private/parse-util.keen 23:1
const slice__45from1046443943977635939 = (l_a___1, l_start__45pos___2) => {
	const l_start___0 = copy10866195281237217353(l_a___1)
	set__45pos10668923459724743638(l_start___0, l_start__45pos___2)
	return slice4867597206389270175(l_start___0, l_a___1)
}
// is-utf8-initial-or-continue-code file:///home/andy/keen/lib/private/parse-util.keen 28:1
const is__45utf8__45initial__45or__45continue__45code11483997124416252614 = l_a___0 =>
	__33__61757946918014977495(((l_a___0 & 255) & 128), 0)
// must-take-one-unicode-char file:///home/andy/keen/lib/private/parse-util.keen 33:1
const must__45take__45one__45unicode__45char14378302740292844388 = l_a___0 => {
	try {
		return next__45char3210292185848419639431(l_a___0)
	} catch (x_error___0) {
		if ((x_error___0 instanceof unicode__45decode__45error4554044903108079804)) {
			(void take__45next3000444236349839320(l_a___0))
			return 65533
		} else {
			throw x_error___0
		}
	}
}
// decode-hex-digit file:///home/andy/keen/lib/private/parse-util.keen 40:1
const decode__45hex__45digit2365052609394697775 = l_a___0 =>
	((__60__6115930536883178209620(48, l_a___0) ? __60__6115930536883178209620(l_a___0, 57) : false) ? __4511411275747325339589((l_a___0 & 255), (48 & 255)) : ((__60__6115930536883178209620(97, l_a___0) ? __60__6115930536883178209620(l_a___0, 102) : false) ? __4315336841759981629368(10, __4511411275747325339589((l_a___0 & 255), (97 & 255))) : ((__60__6115930536883178209620(65, l_a___0) ? __60__6115930536883178209620(l_a___0, 70) : false) ? __4315336841759981629368(10, __4511411275747325339589((l_a___0 & 255), (65 & 255))) : c____558())))
// try-take-keen-identifier file:///home/andy/keen/lib/private/parse-util.keen 49:1
const try__45take__45keen__45identifier13047627731905230635 = l_iter___1 => {
	const l_start___0 = pos3314308867312380391(l_iter___1)
	const l_state___2 = new17448970398976988447(global__45hash__45seed1492198020980692852())
	if (try__45take__45initial__45identifier__45char10369228500969830044(l_iter___1, l_state___2)) {
		x_loop___0: while (true){
			if (try__45take__45one__45identifier__45char10692805180576529773(l_iter___1, l_state___2)) {
				continue
			} else {
				(void 0)
				break  x_loop___0
			}
		}
		return to__45symbol__45with__45hash8555703631970049834(slice__45from1046443943977635939(l_iter___1, l_start___0), finish6979333805424110437(l_state___2))
	} else {
		return c____558()
	}
}
// try-take-initial-identifier-char file:///home/andy/keen/lib/private/parse-util.keen 55:1
const try__45take__45initial__45identifier__45char10369228500969830044 = (l_iter___1, l_state___3) => {
	const l_temp___0 = peek13606136736990828314(l_iter___1)
	const l_x___2 = l_temp___0
	if ((((typeof l_temp___0) === "number") ? is__45initial__45single__45byte__45identifier__45char14721086588241828826(l_x___2) : false)) {
		hash12940848068242855152(take__45next3000444236349839320(l_iter___1), l_state___3)
		return true
	} else {
		return try__45take__45unicode__45identifier__45char14485675832784214265(l_iter___1, l_state___3)
	}
}
// try-take-one-identifier-char file:///home/andy/keen/lib/private/parse-util.keen 61:1
const try__45take__45one__45identifier__45char10692805180576529773 = (l_iter___1, l_state___3) => {
	const l_temp___0 = peek13606136736990828314(l_iter___1)
	const l_x___2 = l_temp___0
	if ((((typeof l_temp___0) === "number") ? is__45single__45byte__45identifier__45char15473337412410340755(l_x___2) : false)) {
		hash12940848068242855152(take__45next3000444236349839320(l_iter___1), l_state___3)
		return true
	} else {
		return try__45take__45unicode__45identifier__45char14485675832784214265(l_iter___1, l_state___3)
	}
}
// try-take-unicode-identifier-char file:///home/andy/keen/lib/private/parse-util.keen 68:1
const try__45take__45unicode__45identifier__45char14485675832784214265 = (l_iter___1, l_state___5) => {
	const l_temp___0 = peek13606136736990828314(l_iter___1)
	const l_p___2 = l_temp___0
	if ((((typeof l_temp___0) === "number") ? is__45utf8__45initial__45or__45continue__45code11483997124416252614(l_p___2) : false)) {
		const l_before___3 = pos3314308867312380391(l_iter___1)
		const l_x___4 = must__45take__45one__45unicode__45char14378302740292844388(l_iter___1)
		if (is__45allowed__45unicode__45identifier__45char6131381359656766613(l_x___4)) {
			hash12694538543419358769(slice__45from1046443943977635939(l_iter___1, l_before___3), l_state___5)
			return true
		} else {
			set__45pos10668923459724743638(l_iter___1, l_before___3)
			return false
		}
	} else {
		return false
	}
}
// is-keen-identifier file:///home/andy/keen/lib/private/parse-util.keen 80:1
const is__45keen__45identifier7402476339939785775 = l_a___1 => {
	let l_iter___0
	return ((l_iter___0 = begin1652849595900823797(l_a___1)) , ((try__45take__45keen__45identifier13047627731905230635(l_iter___0) instanceof symbol11978982047599604571) ? is__45at__45end18265995694961723280(l_iter___0) : false))
}
// is-initial-single-byte-identifier-char file:///home/andy/keen/lib/private/parse-util.keen 84:1
const is__45initial__45single__45byte__45identifier__45char14721086588241828826 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 65) ? true : ((x_matched___0 === 66) ? true : ((x_matched___0 === 67) ? true : ((x_matched___0 === 68) ? true : ((x_matched___0 === 69) ? true : ((x_matched___0 === 70) ? true : ((x_matched___0 === 71) ? true : ((x_matched___0 === 72) ? true : ((x_matched___0 === 73) ? true : ((x_matched___0 === 74) ? true : ((x_matched___0 === 75) ? true : ((x_matched___0 === 76) ? true : ((x_matched___0 === 77) ? true : ((x_matched___0 === 78) ? true : ((x_matched___0 === 79) ? true : ((x_matched___0 === 80) ? true : ((x_matched___0 === 81) ? true : ((x_matched___0 === 82) ? true : ((x_matched___0 === 83) ? true : ((x_matched___0 === 84) ? true : ((x_matched___0 === 85) ? true : ((x_matched___0 === 86) ? true : ((x_matched___0 === 87) ? true : ((x_matched___0 === 88) ? true : ((x_matched___0 === 89) ? true : ((x_matched___0 === 90) ? true : ((x_matched___0 === 95) ? true : ((x_matched___0 === 97) ? true : ((x_matched___0 === 98) ? true : ((x_matched___0 === 99) ? true : ((x_matched___0 === 100) ? true : ((x_matched___0 === 101) ? true : ((x_matched___0 === 102) ? true : ((x_matched___0 === 103) ? true : ((x_matched___0 === 104) ? true : ((x_matched___0 === 105) ? true : ((x_matched___0 === 106) ? true : ((x_matched___0 === 107) ? true : ((x_matched___0 === 108) ? true : ((x_matched___0 === 109) ? true : ((x_matched___0 === 110) ? true : ((x_matched___0 === 111) ? true : ((x_matched___0 === 112) ? true : ((x_matched___0 === 113) ? true : ((x_matched___0 === 114) ? true : ((x_matched___0 === 115) ? true : ((x_matched___0 === 116) ? true : ((x_matched___0 === 117) ? true : ((x_matched___0 === 118) ? true : ((x_matched___0 === 119) ? true : ((x_matched___0 === 120) ? true : ((x_matched___0 === 121) ? true : ((x_matched___0 === 122) ? true : false))))))))))))))))))))))))))))))))))))))))))))))))))))))
}
// is-single-byte-identifier-char file:///home/andy/keen/lib/private/parse-util.keen 141:1
const is__45single__45byte__45identifier__45char15473337412410340755 = l_a___0 => {
	let x_matched___0
	return ((x_matched___0 = l_a___0) , ((x_matched___0 === 45) ? true : ((x_matched___0 === 48) ? true : ((x_matched___0 === 49) ? true : ((x_matched___0 === 50) ? true : ((x_matched___0 === 51) ? true : ((x_matched___0 === 52) ? true : ((x_matched___0 === 53) ? true : ((x_matched___0 === 54) ? true : ((x_matched___0 === 55) ? true : ((x_matched___0 === 56) ? true : ((x_matched___0 === 57) ? true : ((x_matched___0 === 65) ? true : ((x_matched___0 === 66) ? true : ((x_matched___0 === 67) ? true : ((x_matched___0 === 68) ? true : ((x_matched___0 === 69) ? true : ((x_matched___0 === 70) ? true : ((x_matched___0 === 71) ? true : ((x_matched___0 === 72) ? true : ((x_matched___0 === 73) ? true : ((x_matched___0 === 74) ? true : ((x_matched___0 === 75) ? true : ((x_matched___0 === 76) ? true : ((x_matched___0 === 77) ? true : ((x_matched___0 === 78) ? true : ((x_matched___0 === 79) ? true : ((x_matched___0 === 80) ? true : ((x_matched___0 === 81) ? true : ((x_matched___0 === 82) ? true : ((x_matched___0 === 83) ? true : ((x_matched___0 === 84) ? true : ((x_matched___0 === 85) ? true : ((x_matched___0 === 86) ? true : ((x_matched___0 === 87) ? true : ((x_matched___0 === 88) ? true : ((x_matched___0 === 89) ? true : ((x_matched___0 === 90) ? true : ((x_matched___0 === 95) ? true : ((x_matched___0 === 97) ? true : ((x_matched___0 === 98) ? true : ((x_matched___0 === 99) ? true : ((x_matched___0 === 100) ? true : ((x_matched___0 === 101) ? true : ((x_matched___0 === 102) ? true : ((x_matched___0 === 103) ? true : ((x_matched___0 === 104) ? true : ((x_matched___0 === 105) ? true : ((x_matched___0 === 106) ? true : ((x_matched___0 === 107) ? true : ((x_matched___0 === 108) ? true : ((x_matched___0 === 109) ? true : ((x_matched___0 === 110) ? true : ((x_matched___0 === 111) ? true : ((x_matched___0 === 112) ? true : ((x_matched___0 === 113) ? true : ((x_matched___0 === 114) ? true : ((x_matched___0 === 115) ? true : ((x_matched___0 === 116) ? true : ((x_matched___0 === 117) ? true : ((x_matched___0 === 118) ? true : ((x_matched___0 === 119) ? true : ((x_matched___0 === 120) ? true : ((x_matched___0 === 121) ? true : ((x_matched___0 === 122) ? true : false)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
}
// is-allowed-unicode-identifier-char file:///home/andy/keen/lib/private/parse-util.keen 217:1
const is__45allowed__45unicode__45identifier__45char6131381359656766613 = l_a___0 =>
	is__45allowed__45unicode__45identifier__45char7728391145514344754((l_a___0 >>> 0))
// is-allowed-unicode-identifier-char file:///home/andy/keen/lib/private/parse-util.keen 219:1
const is__45allowed__45unicode__45identifier__45char7728391145514344754 = l_a___0 =>
	((((__60__6110217549696008110577(192, l_a___0) ? __60__6110217549696008110577(l_a___0, 255) : false) ? __33__6110088886279708845662(l_a___0, (215 >>> 0)) : false) ? __33__6110088886279708845662(l_a___0, (247 >>> 0)) : false) ? true : ((__60__6110217549696008110577(880, l_a___0) ? __60__6110217549696008110577(l_a___0, 1023) : false) ? true : ((__60__6110217549696008110577(1024, l_a___0) ? __60__6110217549696008110577(l_a___0, 1279) : false) ? true : ((__60__6110217549696008110577(1425, l_a___0) ? __60__6110217549696008110577(l_a___0, 1524) : false) ? true : ((__60__6110217549696008110577(1536, l_a___0) ? __60__6110217549696008110577(l_a___0, 1791) : false) ? true : (((__60__6110217549696008110577(2308, l_a___0) ? __60__6110217549696008110577(l_a___0, 2431) : false) ? (!(__60__6110217549696008110577(2404, l_a___0) ? __60__6110217549696008110577(l_a___0, 2417) : false)) : false) ? true : ((__60__6110217549696008110577(2437, l_a___0) ? __60__6110217549696008110577(l_a___0, 2531) : false) ? true : ((__60__6110217549696008110577(2561, l_a___0) ? __60__6110217549696008110577(l_a___0, 2654) : false) ? true : ((__60__6110217549696008110577(2689, l_a___0) ? __60__6110217549696008110577(l_a___0, 2815) : false) ? true : ((__60__6110217549696008110577(2946, l_a___0) ? __60__6110217549696008110577(l_a___0, 3066) : false) ? true : ((__60__6110217549696008110577(3072, l_a___0) ? __60__6110217549696008110577(l_a___0, 3199) : false) ? true : ((__60__6110217549696008110577(3840, l_a___0) ? __60__6110217549696008110577(l_a___0, 4058) : false) ? true : ((__60__6110217549696008110577(7680, l_a___0) ? __60__6110217549696008110577(l_a___0, 7935) : false) ? true : ((__60__6110217549696008110577(12353, l_a___0) ? __60__6110217549696008110577(l_a___0, 12447) : false) ? true : ((__60__6110217549696008110577(12448, l_a___0) ? __60__6110217549696008110577(l_a___0, 12543) : false) ? true : ((__60__6110217549696008110577(19968, l_a___0) ? __60__6110217549696008110577(l_a___0, 40959) : false) ? true : ((__60__6110217549696008110577(44032, l_a___0) ? __60__6110217549696008110577(l_a___0, 55203) : false) ? true : false)))))))))))))))))
// next file:///home/andy/keen/lib/random/secure-random.keen 24:1
const next1510819248379280576 = l_ignore___1 => {
	const l_xs___0 = new (_global.Uint32Array)(2)
	;(void _global.crypto.getRandomValues(l_xs___0))
	return bits__45cat9134299186829090269(to6394483040598368986(l_xs___0[0]), to6394483040598368986(l_xs___0[1]))
}
// new@(nat32) file:///home/andy/keen/lib/range.keen 12:1
const new12888620346613255121 = (l_low___0, l_high___1) =>
	new (range13642156005642883755)(l_low___0, l_high___1)
// new@(nat64) file:///home/andy/keen/lib/range.keen 12:1
const new15265833301727031174 = (l_low___0, l_high___1) =>
	new (range4416311233428082532)(l_low___0, l_high___1)
// low@(nat32) file:///home/andy/keen/lib/range.keen 12:18
const low6995297863554826942 = l_a___0 =>
	l_a___0.low
// low@(nat64) file:///home/andy/keen/lib/range.keen 12:18
const low7409345081503915125 = l_a___0 =>
	l_a___0.low
// high@(nat64) file:///home/andy/keen/lib/range.keen 12:25
const high10874758830701415314 = l_a___0 =>
	l_a___0.high
// high@(nat32) file:///home/andy/keen/lib/range.keen 12:25
const high7947264686578122087 = l_a___0 =>
	l_a___0.high
// ..@(nat64) file:///home/andy/keen/lib/range.keen 15:1
const __46__467720007973451370645 = (l_low___0, l_high___1) => {
	if (__60__616269385802849585881(l_low___0, l_high___1)) {
		return new15265833301727031174(l_low___0, l_high___1)
	} else {
		throw new (error14987278044892349075)(c____334())
	}
}
// ..@(nat32) file:///home/andy/keen/lib/range.keen 15:1
const __46__468506382510782831888 = (l_low___0, l_high___1) => {
	if (__60__6110217549696008110577(l_low___0, l_high___1)) {
		return new12888620346613255121(l_low___0, l_high___1)
	} else {
		throw new (error14987278044892349075)(c____334())
	}
}
// difference@(nat64) file:///home/andy/keen/lib/range.keen 28:1
const difference5593574984380325569 = (l_a___0, l_b___1) =>
	__459429596346129747750(l_a___0, l_b___1)
// size@(nat64) file:///home/andy/keen/lib/range.keen 35:1
const size10776324995955828462 = l_a___0 =>
	difference5593574984380325569(high10874758830701415314(l_a___0), low7409345081503915125(l_a___0))
// some@(nat64) file:///home/andy/keen/lib/range.keen 42:1
const some15196038435874883717 = (l_a___1, l_f___3) => {
	let l_cur___0 = low7409345081503915125(l_a___1)
	while (true){
		const l_temp___2 = (() => {
			if (__62__618892781134906463570(l_cur___0, high10874758830701415314(l_a___1))) {
				return false
			} else {
				if (l_f___3(l_cur___0)) {
					return true
				} else {
					l_cur___0 = next8081526569989856532(l_cur___0)
					return c____558()
				}
			}
		})()
		const x_matched___0 = l_temp___2
		if ((x_matched___0 instanceof none12752313651180151000)) {
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
// in@(nat32) file:///home/andy/keen/lib/range.keen 83:1
const in9120403046999906194 = (l_a___1, l_b___0) =>
	(__60__6110217549696008110577(low6995297863554826942(l_b___0), l_a___1) ? __606561095768024586357(l_a___1, high7947264686578122087(l_b___0)) : false)
// ~~ file:///home/andy/keen/lib/string.keen 37:1
const __126__12615501865809042506805 = (l_a___0, l_b___1) =>
	to11893448832805940642(__126__12613857300491063851984(chars8694273362434023454(l_a___0), chars8694273362434023454(l_b___1)))
// interpolate-value@(bool) file:///home/andy/keen/lib/string.keen 46:1
const interpolate__45value8674553829118123368 = l_a___0 =>
	show8414468440849386339(l_a___0)
// interpolate-value@(float64) file:///home/andy/keen/lib/string.keen 46:1
const interpolate__45value3567273479283112933 = l_a___0 =>
	show2259387076811586036(l_a___0)
// interpolate-value@(int64) file:///home/andy/keen/lib/string.keen 46:1
const interpolate__45value3192889795443724703 = l_a___0 =>
	show4785563361210698454(l_a___0)
// interpolate-value@(char8) file:///home/andy/keen/lib/string.keen 46:1
const interpolate__45value1419626476691701472 = l_a___0 =>
	show378143585736449467(l_a___0)
// interpolate-value@(nat64) file:///home/andy/keen/lib/string.keen 46:1
const interpolate__45value8652404409959891785 = l_a___0 =>
	show10524197838620688358(l_a___0)
// interpolate-value@(string) file:///home/andy/keen/lib/string.keen 46:1
const interpolate__45value3612249313584056128 = l_a___0 =>
	show14062531620621648795(l_a___0)
// interpolate-value@(nat32) file:///home/andy/keen/lib/string.keen 46:1
const interpolate__45value136912606860311098 = l_a___0 =>
	show4041195328500379325(l_a___0)
// interpolate-value@(log-level) file:///home/andy/keen/lib/string.keen 46:1
const interpolate__45value14162406563345700596 = l_a___0 =>
	show6796557662033429151(l_a___0)
// interpolate-value@(json) file:///home/andy/keen/lib/string.keen 46:1
const interpolate__45value809670319875899172 = l_a___0 =>
	show5188695076911786383(l_a___0)
// interpolate file:///home/andy/keen/lib/string.keen 48:1
const interpolate16033570998297636535 = l_parts___0 =>
	join14739509516894838(l_parts___0)
// interpolate file:///home/andy/keen/lib/string.keen 52:1
const interpolate16185060539014347245 = l_parts___0 =>
	to11394861970819088114(interpolate16033570998297636535(l_parts___0))
// is-empty file:///home/andy/keen/lib/string.keen 60:1
const is__45empty14055059243533451519 = l_a___0 =>
	is__45empty5119020319533462417(to5062813879059210936(l_a___0))
// size file:///home/andy/keen/lib/string.keen 63:1
const size17451724000551404641 = l_a___0 =>
	BigInt(to5062813879059210936(l_a___0).length)
// == file:///home/andy/keen/lib/string.keen 66:1
const __61__618774367296004624587 = (l_a___0, l_b___1) =>
	__61__6118007221448236302723(chars8694273362434023454(l_a___0), chars8694273362434023454(l_b___1))
// <=> file:///home/andy/keen/lib/string.keen 68:1
const __60__61__628487960339157068957 = (l_a___0, l_b___1) =>
	__60__61__6217916713383637463827(chars8694273362434023454(l_a___0), chars8694273362434023454(l_b___1))
// hash file:///home/andy/keen/lib/string.keen 76:1
const hash11834971208188134887 = (l_a___0, l_state___1) =>
	hash5884828301612844590(chars8694273362434023454(l_a___0), l_state___1)
// hash file:///home/andy/keen/lib/string.keen 78:1
const hash12940848068242855152 = (l_a___0, l_state___1) =>
	hash3240496780436305649((l_a___0 & 255), l_state___1)
// to file:///home/andy/keen/lib/string.keen 94:1
const to5062813879059210936 = l_a___0 =>
	chars8694273362434023454(l_a___0)
// to file:///home/andy/keen/lib/string.keen 98:1
const to11893448832805940642 = l_a___0 =>
	new16542246385619872033(l_a___0)
// to file:///home/andy/keen/lib/string.keen 100:1
const to6073813863926623175 = l_a___0 =>
	to11893448832805940642(to1694745619930020520(l_a___0))
// show file:///home/andy/keen/lib/string.keen 120:1
const show8414468440849386339 = l_a___0 =>
	(l_a___0 ? c____359() : c____360())
// to file:///home/andy/keen/lib/string.keen 124:1
const to14057288857931280956 = l_a___0 =>
	new16542246385619872033(list__45new14621505958909631849(new (Uint8Array)([l_a___0])))
// show file:///home/andy/keen/lib/string.keen 126:1
const show378143585736449467 = l_a___0 =>
	(is__45valid__45single__45byte__45character14952041293511272010(l_a___0) ? to14057288857931280956(l_a___0) : interpolate16033570998297636535([c____486(), interpolate__45value3612249313584056128(to__45hex15111511703522810126(BigInt.asUintN(64, BigInt((l_a___0 & 255)))))]))
// is-valid-single-byte-character file:///home/andy/keen/lib/string.keen 147:1
const is__45valid__45single__45byte__45character14952041293511272010 = l_a___0 =>
	__6012245267698233631771((l_a___0 & 255), 128)
// show file:///home/andy/keen/lib/string.keen 154:1
const show4041195328500379325 = l_a___0 =>
	show10524197838620688358(BigInt.asUintN(64, BigInt(l_a___0)))
// show file:///home/andy/keen/lib/string.keen 158:1
const show10524197838620688358 = l_a___0 =>
	to__45base3660263301171287407(l_a___0, 10n)
// js-to-string file:///home/andy/keen/lib/string.keen 161:1
const js__45to__45string17070510400776470219 = l_a___0 =>
	to7876981377693269494(String10883208873309072263()(l_a___0))
// digit-to-string file:///home/andy/keen/lib/string.keen 164:1
const digit__45to__45string14298422738553230724 = l_a___0 =>
	to14057288857931280956(digit__45to__45char7315829743949863053(l_a___0))
// digit-to-char file:///home/andy/keen/lib/string.keen 166:1
const digit__45to__45char7315829743949863053 = l_a___0 => {
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
			throw unreachable15541723113030349832()
		}
	}
}
// to-hex file:///home/andy/keen/lib/string.keen 205:1
const to__45hex15111511703522810126 = l_a___0 =>
	to__45base3660263301171287407(l_a___0, 16n)
// to-base file:///home/andy/keen/lib/string.keen 208:1
const to__45base3660263301171287407 = (l_a___0, l_base___1) =>
	(__6010307380702345989795(l_a___0, l_base___1) ? digit__45to__45string14298422738553230724(l_a___0) : __126__12615501865809042506805(to__45base3660263301171287407(__473463626361574020402(l_a___0, l_base___1), l_base___1), digit__45to__45string14298422738553230724(__376728767376110028882(l_a___0, l_base___1))))
// show file:///home/andy/keen/lib/string.keen 214:1
const show14062531620621648795 = l_a___0 =>
	l_a___0
// show file:///home/andy/keen/lib/string.keen 223:1
const show4785563361210698454 = l_a___0 => {
	let l_s___1
	return (Object.is(l_a___0, -9223372036854775808n) ? c____354() : ((l_s___1 = interpolate16033570998297636535([interpolate__45value8652404409959891785(abs11348242274778557770(l_a___0))])) , (__606931787592191359368(l_a___0, 0n) ? interpolate16033570998297636535([c____355(), interpolate__45value3612249313584056128(l_s___1)]) : l_s___1)))
}
// show file:///home/andy/keen/lib/string.keen 232:1
const show2259387076811586036 = l_a___0 =>
	(Object.is(l_a___0, -0) ? c____353() : js__45to__45string17070510400776470219(to14357848481777319600(l_a___0)))
// some file:///home/andy/keen/lib/string.keen 245:1
const some12041932949930921533 = (l_a___0, l_f___1) =>
	some15532294202059772837(to5062813879059210936(l_a___0), l_f___1)
// begin file:///home/andy/keen/lib/string.keen 252:1
const begin1652849595900823797 = l_a___0 =>
	begin6893840641899948696(to5062813879059210936(l_a___0))
// end file:///home/andy/keen/lib/string.keen 254:1
const end148137516881154859 = l_a___0 =>
	end7887716361478169370(to5062813879059210936(l_a___0))
// with-block file:///home/andy/keen/lib/string.keen 257:1
const with__45block10857829225077824123 = (l_a___0, l_f___1) =>
	to11893448832805940642(with__45block1895107485688960791(build12971615191504386060(size__45hint2983372112923627037(l_a___0)), l_f___1))
// join file:///home/andy/keen/lib/string.keen 262:1
const join14739509516894838 = l_parts___0 =>
	join3173081693262575807(c____319(), l_parts___0)
// join file:///home/andy/keen/lib/string.keen 265:1
const join3173081693262575807 = (l_joiner___1, l_parts___0) => {
	let x_matched___0
	return ((x_matched___0 = BigInt(l_parts___0.length)) , ((x_matched___0 === 0n) ? c____319() : ((x_matched___0 === 1n) ? subscript9327272106425501274(l_parts___0, 0n) : join__45with__45multiple__45parts1726252392456813204(l_joiner___1, l_parts___0))))
}
// join-with-multiple-parts file:///home/andy/keen/lib/string.keen 273:1
const join__45with__45multiple__45parts1726252392456813204 = (l_joiner___3, l_parts___1) => {
	let l_res__45size___0 = 0n
	for (const l_part___2 of l_parts___1) {
		l_res__45size___0 = __431000895641751717785(l_res__45size___0, size17451724000551404641(l_part___2))
	}
	l_res__45size___0 = __431000895641751717785(l_res__45size___0, __4210985385519932138510(size17451724000551404641(l_joiner___3), __459429596346129747750(BigInt(l_parts___1.length), 1n)))
	const l_res___4 = new (Uint8Array)(Number(l_res__45size___0))
	let l_out__45i___5 = 0n
	let { low: x_cur___0, high: x_end___1 } = __46__467720007973451370645(0n, BigInt(l_parts___1.length))
	while ((x_cur___0 < x_end___1)){
		const l_i___6 = x_cur___0
		if (__33__618396056177400121463(l_i___6, 0n)) {
			set__45subscript6324136427967088108(l_res___4, __46__467720007973451370645(l_out__45i___5, __431000895641751717785(l_out__45i___5, size17451724000551404641(l_joiner___3))), chars8694273362434023454(l_joiner___3))
			l_out__45i___5 = __431000895641751717785(l_out__45i___5, size17451724000551404641(l_joiner___3))
		} else {
			(void 0)
		}
		const l_part___7 = chars8694273362434023454(subscript9327272106425501274(l_parts___1, l_i___6))
		set__45subscript6324136427967088108(l_res___4, __46__467720007973451370645(l_out__45i___5, __431000895641751717785(l_out__45i___5, BigInt(l_part___7.length))), l_part___7)
		l_out__45i___5 = __431000895641751717785(l_out__45i___5, BigInt(l_part___7.length))
		x_cur___0 = (x_cur___0 + 1n)
	}
	if (Object.is(l_out__45i___5, BigInt(l_res___4.length))) {
		return to11893448832805940642(cast__45immutable2674649864579937666(l_res___4))
	} else {
		throw new (error14987278044892349075)(c____340())
	}
}
// invalid-unicode-character file:///home/andy/keen/lib/string/unicode.keen 15:1
const invalid__45unicode__45character996187487110418450 = l_character___0 =>
	new (invalid__45unicode__45character8514911918857176900)(l_character___0)
// character file:///home/andy/keen/lib/string/unicode.keen 15:35
const character7096054389668020328 = l_a___0 =>
	l_a___0.character
// show file:///home/andy/keen/lib/string/unicode.keen 16:1
const show14464314580939686645 = l_a___0 =>
	interpolate16033570998297636535([c____541(), interpolate__45value3612249313584056128(to__45hex15111511703522810126(BigInt.asUintN(64, BigInt(character7096054389668020328(l_a___0))))), c____548()])
// unicode-decode-error file:///home/andy/keen/lib/string/unicode.keen 18:1
const unicode__45decode__45error15450649037674612322 = () =>
	new (unicode__45decode__45error4554044903108079804)()
// to file:///home/andy/keen/lib/string/unicode.keen 26:1
const to13901929641757802795 = l_a___0 =>
	to11893448832805940642(to12106566034316331408(l_a___0))
// to file:///home/andy/keen/lib/string/unicode.keen 39:1
const to12106566034316331408 = l_a___1 => {
	const l_n___0 = (l_a___1 >>> 0)
	if (__606561095768024586357(l_n___0, __60__605844911385871066220(1, 7))) {
		return list__45new14621505958909631849(new (Uint8Array)([to18254074917972352593(l_n___0)]))
	} else {
		if (__606561095768024586357(l_n___0, __60__605844911385871066220(1, 11))) {
			return list__45new14621505958909631849(new (Uint8Array)([to18254074917972352593(((to13152219174195707203(BigInt.asUintN(64, BigInt(__62__6213312477514063446846(l_n___0, 6)))) | (192 >>> 0)) >>> 0)), ((last__456__45bits9768898951210269437(l_n___0) | 128) & 255)]))
		} else {
			if (__606561095768024586357(l_n___0, __60__605844911385871066220(1, 16))) {
				if (in9120403046999906194(l_n___0, __46__468506382510782831888(55296, 57344))) {
					throw invalid__45unicode__45character996187487110418450(l_n___0)
				} else {
					return list__45new14621505958909631849(new (Uint8Array)([to18254074917972352593(((to13152219174195707203(BigInt.asUintN(64, BigInt(__62__6213312477514063446846(l_n___0, 12)))) | 224) >>> 0)), ((last__456__45bits9768898951210269437(__62__6213312477514063446846(l_n___0, 6)) | 128) & 255), ((last__456__45bits9768898951210269437(l_n___0) | 128) & 255)]))
				}
			} else {
				if (__606561095768024586357(l_n___0, 1114112)) {
					return list__45new14621505958909631849(new (Uint8Array)([to18254074917972352593(((to13152219174195707203(BigInt.asUintN(64, BigInt(__62__6213312477514063446846(l_n___0, 18)))) | 240) >>> 0)), ((last__456__45bits9768898951210269437(__62__6213312477514063446846(l_n___0, 12)) | 128) & 255), ((last__456__45bits9768898951210269437(__62__6213312477514063446846(l_n___0, 6)) | 128) & 255), ((last__456__45bits9768898951210269437(l_n___0) | 128) & 255)]))
				} else {
					throw invalid__45unicode__45character996187487110418450(l_n___0)
				}
			}
		}
	}
}
// to file:///home/andy/keen/lib/string/unicode.keen 57:1
const to18254074917972352593 = l_a___0 =>
	(to7120868342645815149(BigInt.asUintN(64, BigInt(l_a___0))) & 255)
// next-char32 file:///home/andy/keen/lib/string/unicode.keen 65:1
const next__45char3210292185848419639431 = l_iter___1 => {
	let l_temp___8, l_temp___11
	const l_first__45char___0 = take__45next3000444236349839320(l_iter___1)
	if (is__45valid__45single__45byte__45character14952041293511272010(l_first__45char___0)) {
		return (l_first__45char___0 >>> 0)
	} else {
		if (is__45first__45byte8916019666188786312(l_first__45char___0)) {
			let l_res___2 = to13152219174195707203(BigInt.asUintN(64, BigInt((l_first__45char___0 & 255))))
			let l_flag___3 = __60__6011894400612917666281((l_first__45char___0 & 255), 1)
			const l_result___4 = first7603305952895111487(__46__467720007973451370645(1n, 4n), l_i___5 => {
					const l_next__45char___6 = (() => {
						const l_member2___7 = try__45take__45next4456695352035296389(l_iter___1)
						const x_matched___0 = l_member2___7
						if ((x_matched___0 instanceof none12752313651180151000)) {
							throw unicode__45decode__45error15450649037674612322()
						} else {
							if (((typeof x_matched___0) === "number")) {
								return ((l_temp___8 = l_member2___7) , l_temp___8)
							} else {
								return _unreachable()
							}
						}
					})()
					const l_code___9 = (l_next__45char___6 & 255)
					if (Object.is((l_code___9 & 192), 128)) {
						l_res___2 = ((__60__605844911385871066220(l_res___2, 6) | (last__456__45bits9768898951210269437(to13152219174195707203(BigInt.asUintN(64, BigInt(l_code___9)))) >>> 0)) >>> 0)
						l_flag___3 = __60__6011894400612917666281(l_flag___3, 1)
						return (Object.is((l_flag___3 & 128), 0) ? (() => {
							if (bits__45intersect9735454670106304890(l_res___2, ((~mask14583896180495214904(__459429596346129747750(l_i___5, 1n))) >>> 0))) {
								l_res___2 = ((l_res___2 & mask14583896180495214904(l_i___5)) >>> 0)
								if (is__45valid__45unicode__45character10896621653634816806(l_res___2)) {
									return (l_res___2 >>> 0)
								} else {
									throw unicode__45decode__45error15450649037674612322()
								}
							} else {
								throw unicode__45decode__45error15450649037674612322()
							}
						})() : c____558())
					} else {
						throw unicode__45decode__45error15450649037674612322()
					}
				})
			const l_member2___10 = l_result___4
			const x_matched___1 = l_member2___10
			if ((x_matched___1 instanceof none12752313651180151000)) {
				throw unicode__45decode__45error15450649037674612322()
			} else {
				if (((typeof x_matched___1) === "number")) {
					return ((l_temp___11 = l_member2___10) , l_temp___11)
				} else {
					return _unreachable()
				}
			}
		} else {
			throw unicode__45decode__45error15450649037674612322()
		}
	}
}
// mask file:///home/andy/keen/lib/string/unicode.keen 92:1
const mask14583896180495214904 = l_i___0 => {
	const x_matched___0 = l_i___0
	switch (x_matched___0) {
		case 0n:{
			return __4516392089175466206236(__60__605844911385871066220(1, 7), 1)
		}
		case 1n:{
			return __4516392089175466206236(__60__605844911385871066220(1, 11), 1)
		}
		case 2n:{
			return __4516392089175466206236(__60__605844911385871066220(1, 16), 1)
		}
		case 3n:{
			return __4516392089175466206236(__60__605844911385871066220(1, 21), 1)
		}
		default:{
			throw unreachable15541723113030349832()
		}
	}
}
// last-6-bits file:///home/andy/keen/lib/string/unicode.keen 105:1
const last__456__45bits9768898951210269437 = l_a___0 =>
	((Number(BigInt.asUintN(64, BigInt(l_a___0))) & 255) & 63)
// is-first-byte file:///home/andy/keen/lib/string/unicode.keen 110:1
const is__45first__45byte8916019666188786312 = l_a___0 =>
	has__45all__45bits746299444323791598((l_a___0 & 255), 192)
// is-valid-unicode-character file:///home/andy/keen/lib/string/unicode.keen 119:1
const is__45valid__45unicode__45character10896621653634816806 = l_a___0 =>
	(__606561095768024586357(l_a___0, 55296) ? true : in9120403046999906194(l_a___0, __46__468506382510782831888(57344, 1114112)))
// lower-case file:///home/andy/keen/lib/string/util.keen 6:1
const lower__45case1392267883188381289 = l_a___0 =>
	to11893448832805940642(map5681546231552727415(l_a___0, l_it___1 =>
				lower__45case11657283300219803517(l_it___1)))
// lower-case file:///home/andy/keen/lib/string/util.keen 9:1
const lower__45case11657283300219803517 = l_a___1 => {
	let l_diff___0
	return ((l_diff___0 = (((l_a___1 & 255) - (65 & 255)) & 255)) , (__6012245267698233631771(l_diff___0, 26) ? (__4315336841759981629368((97 & 255), l_diff___0) & 255) : l_a___1))
}
// new file:///home/andy/keen/lib/symbol.keen 19:1
const new7824073829767693426 = (l_hash___0, l_chars___1) =>
	new (symbol__45key2816707517888012876)(l_hash___0, l_chars___1)
// hash file:///home/andy/keen/lib/symbol.keen 21:5
const hash13893151282647077466 = l_a___0 =>
	l_a___0.hash
// chars file:///home/andy/keen/lib/symbol.keen 22:5
const chars3461872188105620014 = l_a___0 =>
	l_a___0.chars
// memoizer-key file:///home/andy/keen/lib/symbol.keen 23:1
const memoizer__45key14449044796098788189 = l_a___0 =>
	new7824073829767693426(symbol__45seeded__45hash13753515466697770587(l_a___0), to__45array__45view10480319256574783196(symbol__45chars7278066593402585504(l_a___0)))
// == file:///home/andy/keen/lib/symbol.keen 25:1
const __61__61279176413746745943 = (l_a___0, l_b___1) =>
	__61__616392919738123306753(chars3461872188105620014(l_a___0), chars3461872188105620014(l_b___1))
// == file:///home/andy/keen/lib/symbol.keen 31:1
const __61__611154543819848657072 = (l_a___0, l_b___1) =>
	Object.is(l_a___0, l_b___1)
// <=> file:///home/andy/keen/lib/symbol.keen 35:1
const __60__61__623713351476808003786 = (l_a___0, l_b___1) =>
	__60__61__628487960339157068957(to10430906571710337221(l_a___0), to10430906571710337221(l_b___1))
// to file:///home/andy/keen/lib/symbol.keen 38:1
const to10430906571710337221 = l_a___0 =>
	to11893448832805940642(to4751408649415549819(l_a___0))
// to file:///home/andy/keen/lib/symbol.keen 40:1
const to4751408649415549819 = l_a___0 =>
	symbol__45chars7278066593402585504(l_a___0)
// to file:///home/andy/keen/lib/symbol.keen 43:1
const to9088973396303820521 = l_a___0 =>
	to9674523392959168289(to__45array__45view10480319256574783196(to5062813879059210936(l_a___0)))
// to file:///home/andy/keen/lib/symbol.keen 45:1
const to9674523392959168289 = l_a___0 =>
	to__45symbol__45with__45hash8555703631970049834(l_a___0, seeded__45hash6899078035375192014(l_a___0))
// to-symbol-with-hash file:///home/andy/keen/lib/symbol.keen 48:1
const to__45symbol__45with__45hash8555703631970049834 = (l_a___1, l_hash___0) =>
	memoize13570954530624692179(lookup10341363494438206628(), new7824073829767693426(l_hash___0, l_a___1), l_it___2 =>
			new8745881605120202251(l_hash___0, deterministic__45hash7266208415776701854(l_a___1), to1694745619930020520(l_a___1)))
// lookup file:///home/andy/keen/lib/symbol.keen 54:1
const lookup10341363494438206628 = () =>
	_varget_v13564251612953089981()
// show file:///home/andy/keen/lib/symbol.keen 56:1
const show12579694647004009701 = l_a___0 =>
	to10430906571710337221(l_a___0)
// hash file:///home/andy/keen/lib/symbol.keen 59:1
const hash17452654822403524995 = (l_a___0, l_state___1) =>
	hash16287967374996838925(symbol__45deterministic__45hash5775330607833456780(l_a___0), l_state___1)
// to file:///home/andy/keen/lib/symbol.keen 66:1
const to1007405755162848852 = l_a___0 =>
	to11394861970819088114(to10430906571710337221(l_a___0))
// expected-equal file:///home/andy/keen/lib/test-util.keen 10:1
const expected__45equal4039848311192418438 = (l_a___0, l_b___1) =>
	new (expected__45equal14446889629956317080)(l_a___0, l_b___1)
// a file:///home/andy/keen/lib/test-util.keen 10:24
const a17531354040042976597 = l_a___0 =>
	l_a___0.a
// b file:///home/andy/keen/lib/test-util.keen 10:32
const b14448618095790476018 = l_a___0 =>
	l_a___0.b
// show file:///home/andy/keen/lib/test-util.keen 11:1
const show14835770171004810681 = l_a___0 =>
	interpolate16033570998297636535([c____372(), interpolate__45value809670319875899172(a17531354040042976597(l_a___0)), c____373(), interpolate__45value809670319875899172(b14448618095790476018(l_a___0))])
// is-impl@(nat64) file:///home/andy/keen/lib/test-util.keen 20:1
const is__45impl7431509400009918682 = (l_a___0, l_b___1) => {
	if (Object.is(l_a___0, l_b___1)) {
		(void 0)
	} else {
		throw expected__45equal4039848311192418438(to12121664362602533419(l_a___0), to12121664362602533419(l_b___1))
	}
}
const _varget_v17067892823588717216 = () => {
	if ((v17067892823588717216 === (void 0))) {
		v17067892823588717216 = next1510819248379280576(c____560())
	}
	return v17067892823588717216
}
const _varget_v13564251612953089981 = () => {
	if ((v13564251612953089981 === (void 0))) {
		v13564251612953089981 = new15809701376150553813()
	}
	return v13564251612953089981
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
	new (TextEncoder)().encode("+::nat64"))
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
	new (TextEncoder)().encode("Forbidden expression is true: res"))
const c____23 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: out == a.size"))
const c____24 = _memoize(() =>
	new (TextEncoder)().encode("-::nat64"))
const c____25 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: src-range.high <= src.size"))
const c____26 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: dest-range.high <= dest.size"))
const c____27 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: src-range.size == size"))
const c____28 = _memoize(() =>
	new (TextEncoder)().encode("/"))
const c____29 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: low <= high"))
const c____30 = _memoize(() =>
	new (TextEncoder)().encode("c"))
const c____31 = _memoize(() =>
	new (TextEncoder)().encode("keen"))
const c____32 = _memoize(() =>
	new (TextEncoder)().encode("Parse error at position "))
const c____33 = _memoize(() =>
	new (TextEncoder)().encode("%"))
const c____34 = _memoize(() =>
	new (TextEncoder)().encode("Should be unreachable"))
const c____35 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: out-i == res.size"))
const c____36 = _memoize(() =>
	new (TextEncoder)().encode("*::nat64"))
const c____37 = _memoize(() =>
	new (TextEncoder)().encode("null"))
const c____38 = _memoize(() =>
	new (TextEncoder)().encode("["))
const c____39 = _memoize(() =>
	new (TextEncoder)().encode(","))
const c____40 = _memoize(() =>
	new (TextEncoder)().encode("]"))
const c____41 = _memoize(() =>
	new (TextEncoder)().encode(":"))
const c____42 = _memoize(() =>
	new (TextEncoder)().encode("{"))
const c____43 = _memoize(() =>
	new (TextEncoder)().encode("}"))
const c____44 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a.a.size == a.b.size"))
const c____45 = _memoize(() =>
	new (TextEncoder)().encode("Forbidden expression is true: a.cur-size == max-value"))
const c____46 = _memoize(() =>
	new (TextEncoder)().encode("round-up-to-power-of-two"))
const c____47 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: new-capacity > a.buffer.size"))
const c____48 = _memoize(() =>
	new (TextEncoder)().encode("\\\""))
const c____49 = _memoize(() =>
	new (TextEncoder)().encode("\\n"))
const c____50 = _memoize(() =>
	new (TextEncoder)().encode("\\r"))
const c____51 = _memoize(() =>
	new (TextEncoder)().encode("\\t"))
const c____52 = _memoize(() =>
	new (TextEncoder)().encode("\\\\"))
const c____53 = _memoize(() =>
	new (TextEncoder)().encode("\\{"))
const c____54 = _memoize(() =>
	new (TextEncoder)().encode("\\}"))
const c____55 = _memoize(() =>
	new (TextEncoder)().encode("\\0"))
const c____56 = _memoize(() =>
	new (TextEncoder)().encode("-0"))
const c____57 = _memoize(() =>
	new (TextEncoder)().encode("-9223372036854775808"))
const c____58 = _memoize(() =>
	new (TextEncoder)().encode("-"))
const c____59 = _memoize(() =>
	new (TextEncoder)().encode("*::int64"))
const c____60 = _memoize(() =>
	new (TextEncoder)().encode("/::int64"))
const c____61 = _memoize(() =>
	new (TextEncoder)().encode("to::nat64"))
const c____62 = _memoize(() =>
	new (TextEncoder)().encode("true"))
const c____63 = _memoize(() =>
	new (TextEncoder)().encode("false"))
const c____64 = _memoize(() =>
	new (TextEncoder)().encode("Forbidden expression is true: existing-key == key"))
const c____65 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: call \"x => x === (x >>> 0)\".eval, a 'to"))
const c____66 = _memoize(() =>
	new (TextEncoder)().encode("The collection is temporarily in a state where this can not be done."))
const c____67 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: keys.size == values.size"))
const c____68 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a.size == b.size"))
const c____69 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: r < a.size"))
const c____70 = _memoize(() =>
	new (TextEncoder)().encode("array"))
const c____71 = _memoize(() =>
	new (TextEncoder)().encode("float"))
const c____72 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a.typeof == \"number\""))
const c____73 = _memoize(() =>
	new (TextEncoder)().encode("to::nat32"))
const c____74 = _memoize(() =>
	new (TextEncoder)().encode("string"))
const c____75 = _memoize(() =>
	new (TextEncoder)().encode("Expected:\n"))
const c____76 = _memoize(() =>
	new (TextEncoder)().encode("\nis:\n"))
const c____77 = _memoize(() =>
	new (TextEncoder)().encode("\n"))
const c____78 = _memoize(() =>
	new (TextEncoder)().encode("()"))
const c____79 = _memoize(() =>
	new (TextEncoder)().encode("empty-array"))
const c____80 = _memoize(() =>
	new (TextEncoder)().encode("empty-object"))
const c____81 = _memoize(() =>
	new (TextEncoder)().encode("Forbidden expression is true: is-empty values"))
const c____82 = _memoize(() =>
	new (TextEncoder)().encode(": "))
const c____83 = _memoize(() =>
	new (TextEncoder)().encode(", "))
const c____84 = _memoize(() =>
	new (TextEncoder)().encode("\t"))
const c____85 = _memoize(() =>
	new (TextEncoder)().encode(" "))
const c____86 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'part.single'"))
const c____87 = _memoize(() =>
	new (TextEncoder)().encode("("))
const c____88 = _memoize(() =>
	new (TextEncoder)().encode(")"))
const c____89 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: begin.start == end.start and begin.end == end.end"))
const c____90 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a.start + index <= a.end"))
const c____91 = _memoize(() =>
	new (TextEncoder)().encode("low-n-bits::nat64"))
const c____92 = _memoize(() =>
	new (TextEncoder)().encode("Error decoding bytes as UTF-8"))
const c____93 = _memoize(() =>
	new (TextEncoder)().encode("-::nat32"))
const c____94 = _memoize(() =>
	new (TextEncoder)().encode("Iterator out of bounds"))
const c____95 = _memoize(() =>
	new (TextEncoder)().encode("keen-loading-spinner"))
const c____96 = _memoize(() =>
	new (TextEncoder)().encode(".root {\n\tdisplay: inline-block;\n\tposition: relative;\n\theight: 2em;\n}\n.child-0, .child-1, .child-2, .child-3 {\n\tposition: absolute;\n\ttop: 0.75em;\n\twidth: 0.666em;\n\theight: 0.666em;\n\tborder-radius: 50%;\n\tbackground: #ab9df2;\n\tanimation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.child-0 { left: 1em; animation: ani0 0.8s infinite; }\n.child-1 { left: 1em; animation: ani1 0.8s infinite; }\n.child-2 { left: 2em; animation: ani1 0.8s infinite; }\n.child-3 { left: 3em; animation: ani2 0.8s infinite; }\n@keyframes ani0 {\n\t0% { transform: scale(0); }\n\t100% { transform: scale(1); }\n}\n@keyframes ani1 {\n\t0% { transform: translate(0, 0); }\n\t100% { transform: translate(1em, 0); }\n}\n@keyframes ani2 {\n\t0% { transform: scale(1); }\n\t100% { transform: scale(0); }\n}\n"))
const c____97 = _memoize(() =>
	new (TextEncoder)().encode("root"))
const c____98 = _memoize(() =>
	new (TextEncoder)().encode("child-0"))
const c____99 = _memoize(() =>
	new (TextEncoder)().encode("child-1"))
const c____100 = _memoize(() =>
	new (TextEncoder)().encode("child-2"))
const c____101 = _memoize(() =>
	new (TextEncoder)().encode("child-3"))
const c____102 = _memoize(() =>
	new (TextEncoder)().encode("keen-text"))
const c____103 = _memoize(() =>
	new (TextEncoder)().encode(":host {\n\tdisplay: flex;\n\tbackground: var(--color-background-code);\n\tfont-family: \"hack\";\n}\n.line-numbers {\n\tdisplay: inline-block;\n\twidth: 1.5em;\n\tcolor: var(--color-faint);\n\tborder-right: 0.1em solid var(--color-faint);\n\tline-height: 20px;\n\ttext-align: right;\n\twhite-space: pre;\n\tpadding-right: 0.25em;\n\tmargin-right: 0.25em;\n}\n.measurer {\n\tvisibility: hidden;\n\theight: 0;\n}\n.code {\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tposition: relative;\n\ttab-size: 4;\n\tfont-size: 1em;\n\tline-height: 20px;\n\twhite-space: pre;\n\tdisplay: inline-block;\n}\n.highlight {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 10;\n}\n.line {\n\theight: 20px;\n}\ntextarea {\n\tz-index: 0;\n\tmargin: 0;\n\tpadding: 0;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcolor: transparent;\n\tcaret-color: var(--color-text);\n\tbackground: transparent;\n\tline-height: 20px;\n\tfont-size: 1em;\n\tborder: none;\n\toutline: none;\n\tresize: none;\n\toverflow: hidden;\n\twhite-space: pre;\n\tfont-family: \"hack\";\n}\n\nspan.diagnostic {\n\tborder-bottom: 0.2em dotted #e87878;\n}\n\n.code[data-tooltip]::after {\n\t/* why not just move this to the below rule? */\n\tposition: absolute;\n\tleft: calc(var(--tooltip-x) + 1em);\n\ttop: calc(var(--tooltip-y) + 0.5em);\n\tcontent: attr(data-tooltip);\n\tbackground: var(--color-background-body);\n\tpadding: 0.5em;\n\tcolor: var(--color-text);\n\tborder: var(--color-faint);\n\tmax-width: 50em;\n\ttext-wrap: wrap;\n}\n.code.hover-diagnostic[data-tooltip]::after {\n\tborder: 1px dotted var(--color-danger);\n}\n"))
const c____104 = _memoize(() =>
	new (TextEncoder)().encode("highlight"))
const c____105 = _memoize(() =>
	new (TextEncoder)().encode("keydown"))
const c____106 = _memoize(() =>
	new (TextEncoder)().encode("input"))
const c____107 = _memoize(() =>
	new (TextEncoder)().encode("a"))
const c____108 = _memoize(() =>
	new (TextEncoder)().encode("line-numbers"))
const c____109 = _memoize(() =>
	new (TextEncoder)().encode("code"))
const c____110 = _memoize(() =>
	new (TextEncoder)().encode("measurer"))
const c____111 = _memoize(() =>
	new (TextEncoder)().encode("mousemove"))
const c____112 = _memoize(() =>
	new (TextEncoder)().encode("mouseout"))
const c____113 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'a.nodes'"))
const c____114 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'a.container-stack[0].all-container'"))
const c____115 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a.container-stack.size == 1"))
const c____116 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'peek! container-stack a'"))
const c____117 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'pop! container-stack a'"))
const c____118 = _memoize(() =>
	new (TextEncoder)().encode("line"))
const c____119 = _memoize(() =>
	new (TextEncoder)().encode("diagnostic"))
const c____120 = _memoize(() =>
	new (TextEncoder)().encode("Forbidden option is non-empty: text-container last-container"))
const c____121 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: new-capacity > a.backing.size"))
const c____122 = _memoize(() =>
	new (TextEncoder)().encode("+::nat32"))
const c____123 = _memoize(() =>
	new (TextEncoder)().encode("comment"))
const c____124 = _memoize(() =>
	new (TextEncoder)().encode("enum"))
const c____125 = _memoize(() =>
	new (TextEncoder)().encode("enumMember"))
const c____126 = _memoize(() =>
	new (TextEncoder)().encode("function"))
const c____127 = _memoize(() =>
	new (TextEncoder)().encode("interface"))
const c____128 = _memoize(() =>
	new (TextEncoder)().encode("keyword"))
const c____129 = _memoize(() =>
	new (TextEncoder)().encode("namespace"))
const c____130 = _memoize(() =>
	new (TextEncoder)().encode("number"))
const c____131 = _memoize(() =>
	new (TextEncoder)().encode("parameter"))
const c____132 = _memoize(() =>
	new (TextEncoder)().encode("property"))
const c____133 = _memoize(() =>
	new (TextEncoder)().encode("type"))
const c____134 = _memoize(() =>
	new (TextEncoder)().encode("typeParameter"))
const c____135 = _memoize(() =>
	new (TextEncoder)().encode("variable"))
const c____136 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'a.container-stack.peek'"))
const c____137 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: i == res.size"))
const c____138 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: start.line == end.line"))
const c____139 = _memoize(() =>
	new (TextEncoder)().encode("Forbidden option is non-empty: text-container new-last"))
const c____140 = _memoize(() =>
	new (TextEncoder)().encode("no-token"))
const c____141 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: start-pos < a.pos"))
const c____142 = _memoize(() =>
	new (TextEncoder)().encode("Forbidden option is non-empty: a.diagnostics-handlers[uri]"))
const c____143 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'a.entries[index]'"))
const c____144 = _memoize(() =>
	new (TextEncoder)().encode("hover-tooltip"))
const c____145 = _memoize(() =>
	new (TextEncoder)().encode("manual"))
const c____146 = _memoize(() =>
	new (TextEncoder)().encode("tooltip"))
const c____147 = _memoize(() =>
	new (TextEncoder)().encode("px"))
const c____148 = _memoize(() =>
	new (TextEncoder)().encode("/::float64"))
const c____149 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'data_[i + 3].to'"))
const c____150 = _memoize(() =>
	new (TextEncoder)().encode("Home"))
const c____151 = _memoize(() =>
	new (TextEncoder)().encode("Enter"))
const c____152 = _memoize(() =>
	new (TextEncoder)().encode("Tab"))
const c____153 = _memoize(() =>
	new (TextEncoder)().encode("PageUp"))
const c____154 = _memoize(() =>
	new (TextEncoder)().encode("PageDown"))
const c____155 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a == (call-property BigInt, \"asUintN\", 64, a)"))
const c____156 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: call-property Number, \"isInteger\", a 'to"))
const c____157 = _memoize(() =>
	new (TextEncoder)().encode("keen-runnable"))
const c____158 = _memoize(() =>
	new (TextEncoder)().encode(":host {\n\tdisplay: block;\n\tmax-width: 44em;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground: var(--color-background-code);\n}\n:host(.wide) {\n\tmax-width: none;\n}\n.name {\n\tfont-family: \"hack\";\n\tmargin-left: 0em;\n\ttext-align: center;\n}\n.output {\n\twidth: 100%;\n\tcolor: var(--color-text);\n\twhite-space: pre-wrap;\n\ttab-size: 4;\n\toverflow: hidden;\n\tborder-top: 1px solid var(--color-faint);\n}\n/* Need to use a more specific style to override the browser default */\n.output > code {\n\tfont-family: \"hack\";\n}\n.output.running { transition: none; }\n.output > .stderr { color: var(--color-danger); }\nbutton {\n\tborder: none;\n\toutline: none;\n\tcolor: var(--color-button);\n\tbackground: transparent;\n\tcursor: pointer;\n}\n.bottom {\n\tmargin: 0;\n}\ndiv.icon svg { height: 1.5em; }\nbutton.collapsed { display: none; }\n"))
const c____159 = _memoize(() =>
	new (TextEncoder)().encode("file:///"))
const c____160 = _memoize(() =>
	new (TextEncoder)().encode("name"))
const c____161 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'keen-text'"))
const c____162 = _memoize(() =>
	new (TextEncoder)().encode("Hide output"))
const c____163 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'collapse-button-ref'"))
const c____164 = _memoize(() =>
	new (TextEncoder)().encode("right"))
const c____165 = _memoize(() =>
	new (TextEncoder)().encode("Run"))
const c____166 = _memoize(() =>
	new (TextEncoder)().encode("bottom"))
const c____167 = _memoize(() =>
	new (TextEncoder)().encode("running"))
const c____168 = _memoize(() =>
	new (TextEncoder)().encode("stdout"))
const c____169 = _memoize(() =>
	new (TextEncoder)().encode("stderr"))
const c____170 = _memoize(() =>
	new (TextEncoder)().encode("<<no output>>"))
const c____171 = _memoize(() =>
	new (TextEncoder)().encode("error"))
const c____172 = _memoize(() =>
	new (TextEncoder)().encode("Line "))
const c____173 = _memoize(() =>
	new (TextEncoder)().encode("main"))
const c____174 = _memoize(() =>
	new (TextEncoder)().encode("tests"))
const c____175 = _memoize(() =>
	new (TextEncoder)().encode("\n// ensure unique: "))
const c____176 = _memoize(() =>
	new (TextEncoder)().encode("output"))
const c____177 = _memoize(() =>
	new (TextEncoder)().encode("2em"))
const c____178 = _memoize(() =>
	new (TextEncoder)().encode("<polygon\n\tstroke-linecap=\"round\"\n\tstroke-linejoin=\"round\"\n\tstroke-width=\"2\"\n\tfill=\"none\"\n\tpoints=\"6,6 6,18 18,12\" />"))
const c____179 = _memoize(() =>
	new (TextEncoder)().encode("icon"))
const c____180 = _memoize(() =>
	new (TextEncoder)().encode("<svg\n\txmlns=\"http://www.w3.org/2000/svg\"\n\tfill=\"none\"\n\tviewBox=\"0 0 24 24\"\n\tstroke=\"currentColor\">\n\t"))
const c____181 = _memoize(() =>
	new (TextEncoder)().encode("\n</svg>"))
const c____182 = _memoize(() =>
	new (TextEncoder)().encode("0"))
const c____183 = _memoize(() =>
	new (TextEncoder)().encode("<path\n\tstroke-linecap=\"round\"\n\tstroke-linejoin=\"round\"\n\tstroke-width=\"2\"\n\td=\"M5 15l7-7 7 7\"\n/>"))
const c____184 = _memoize(() =>
	new (TextEncoder)().encode("/C%3A"))
const c____185 = _memoize(() =>
	new (TextEncoder)().encode("URI"))
const c____186 = _memoize(() =>
	new (TextEncoder)().encode("EOF"))
const c____187 = _memoize(() =>
	new (TextEncoder)().encode("'"))
const c____188 = _memoize(() =>
	new (TextEncoder)().encode("Expected "))
const c____189 = _memoize(() =>
	new (TextEncoder)().encode(", got "))
const c____190 = _memoize(() =>
	new (TextEncoder)().encode("\\u"))
const c____191 = _memoize(() =>
	new (TextEncoder)().encode("+::nat8"))
const c____192 = _memoize(() =>
	new (TextEncoder)().encode("file://"))
const c____193 = _memoize(() =>
	new (TextEncoder)().encode(".keen"))
const c____194 = _memoize(() =>
	new (TextEncoder)().encode(".kid"))
const c____195 = _memoize(() =>
	new (TextEncoder)().encode("Two keen-runnable have the same name "))
const c____196 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: ends-with name, \".keen\" or ends-with name, \".kid\""))
const c____197 = _memoize(() =>
	new (TextEncoder)().encode("demo"))
const c____198 = _memoize(() =>
	new (TextEncoder)().encode("theme-switcher"))
const c____199 = _memoize(() =>
	new (TextEncoder)().encode(".icon {\n\twidth: 1em;\n\theight: 1em;\n\tstroke-width: 0.15em;\n\tcursor: pointer;\n}\n"))
const c____200 = _memoize(() =>
	new (TextEncoder)().encode("dark-mode"))
const c____201 = _memoize(() =>
	new (TextEncoder)().encode("light-mode"))
const c____202 = _memoize(() =>
	new (TextEncoder)().encode("M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 "))
const c____203 = _memoize(() =>
	new (TextEncoder)().encode("18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 "))
const c____204 = _memoize(() =>
	new (TextEncoder)().encode("12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"))
const c____205 = _memoize(() =>
	new (TextEncoder)().encode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\""))
const c____206 = _memoize(() =>
	new (TextEncoder)().encode("\" />"))
const c____207 = _memoize(() =>
	new (TextEncoder)().encode("M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 "))
const c____208 = _memoize(() =>
	new (TextEncoder)().encode("0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 "))
const c____209 = _memoize(() =>
	new (TextEncoder)().encode("12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"))
const c____210 = _memoize(() =>
	new (TextEncoder)().encode("<path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\""))
const c____211 = _memoize(() =>
	new (TextEncoder)().encode("keen-icon"))
const c____212 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'this.attributes[\"icon\"]'"))
const c____213 = _memoize(() =>
	new (TextEncoder)().encode("download"))
const c____214 = _memoize(() =>
	new (TextEncoder)().encode("external-link"))
const c____215 = _memoize(() =>
	new (TextEncoder)().encode("home"))
const c____216 = _memoize(() =>
	new (TextEncoder)().encode("up"))
const c____217 = _memoize(() =>
	new (TextEncoder)().encode("play"))
const c____218 = _memoize(() =>
	new (TextEncoder)().encode("TODO"))
const c____219 = _memoize(() =>
	new (TextEncoder)().encode("m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 "))
const c____220 = _memoize(() =>
	new (TextEncoder)().encode("1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 "))
const c____221 = _memoize(() =>
	new (TextEncoder)().encode("1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"))
const c____222 = _memoize(() =>
	new (TextEncoder)().encode("M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"))
const c____223 = _memoize(() =>
	new (TextEncoder)().encode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\""))
const c____224 = _memoize(() =>
	new (TextEncoder)().encode("\"/>"))
const c____225 = _memoize(() =>
	new (TextEncoder)().encode("<path\n\tstroke-linecap=\"round\"\n\tstroke-linejoin=\"round\"\n\tstroke-width=\"2\"\n\td=\"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4\"\n/>"))
const c____226 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'remove! server.responses, id'"))
const c____227 = _memoize(() =>
	new (TextEncoder)().encode("Took "))
const c____228 = _memoize(() =>
	new (TextEncoder)().encode(" to load Keen server"))
const c____229 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'a.to::nat32.to'"))
const c____230 = _memoize(() =>
	new (TextEncoder)().encode("s"))
const c____231 = _memoize(() =>
	new (TextEncoder)().encode("ms"))
const c____232 = _memoize(() =>
	Uint8Array.fromBase64("zrxz"))
const c____233 = _memoize(() =>
	new (TextEncoder)().encode("ns"))
const c____234 = _memoize(() =>
	new (TextEncoder)().encode("string continues past end of parse"))
const c____235 = _memoize(() =>
	new (TextEncoder)().encode("\""))
const c____236 = _memoize(() =>
	new (TextEncoder)().encode("']'"))
const c____237 = _memoize(() =>
	new (TextEncoder)().encode("'}'"))
const c____238 = _memoize(() =>
	new (TextEncoder)().encode("JSON value"))
const c____239 = _memoize(() =>
	new (TextEncoder)().encode("numeric overflow"))
const c____240 = _memoize(() =>
	new (TextEncoder)().encode("to::int64"))
const c____241 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: base <= 36"))
const c____242 = _memoize(() =>
	new (TextEncoder)().encode("-::nat8"))
const c____243 = _memoize(() =>
	new (TextEncoder)().encode("0b"))
const c____244 = _memoize(() =>
	new (TextEncoder)().encode("0o"))
const c____245 = _memoize(() =>
	new (TextEncoder)().encode("0x"))
const c____246 = _memoize(() =>
	new (TextEncoder)().encode("+"))
const c____247 = _memoize(() =>
	new (TextEncoder)().encode("':'"))
const c____248 = _memoize(() =>
	new (TextEncoder)().encode("quoted string"))
const c____249 = _memoize(() =>
	new (TextEncoder)().encode("Valid escape sequence"))
const c____250 = _memoize(() =>
	new (TextEncoder)().encode("closing quote"))
const c____251 = _memoize(() =>
	new (TextEncoder)().encode("to::nat8"))
const c____252 = _memoize(() =>
	new (TextEncoder)().encode(" is not a valid Unicode character."))
const c____253 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: a.typeof == \"string\""))
const c____254 = _memoize(() =>
	new (TextEncoder)().encode("Expected to deserialize the json value as "))
const c____255 = _memoize(() =>
	new (TextEncoder)().encode(". Actual: "))
const c____256 = _memoize(() =>
	new (TextEncoder)().encode("Option was empty: 'only! a.values'"))
const c____257 = _memoize(() =>
	new (TextEncoder)().encode("Asserted expression is false: values.size == 1"))
const c____258 = _memoize(() =>
	[])
const c____259 = _memoize(() =>
	["open"])
const c____260 = _memoize(() =>
	["module"])
const c____261 = _memoize(() =>
	[_symbol6, _symbol7])
const c____262 = _memoize(() =>
	[_symbol11, _symbol12, _symbol13])
const c____263 = _memoize(() =>
	[_symbol14, _symbol15, _symbol16])
const c____264 = _memoize(() =>
	[_symbol18])
const c____265 = _memoize(() =>
	[_symbol19])
const c____266 = _memoize(() =>
	[_symbol24, _symbol25])
const c____267 = _memoize(() =>
	[_symbol26, _symbol27])
const c____268 = _memoize(() =>
	[_symbol30])
const c____269 = _memoize(() =>
	[_symbol31, _symbol32])
const c____270 = _memoize(() =>
	[_symbol33, _symbol34])
const c____271 = _memoize(() =>
	[_symbol34])
const c____272 = _memoize(() =>
	[_symbol38, _symbol30])
const c____273 = _memoize(() =>
	[_symbol15, _symbol16])
const c____274 = _memoize(() =>
	[_symbol48, _symbol49, _symbol30])
const c____275 = _memoize(() =>
	[_symbol6])
const c____276 = _memoize(() =>
	[])
const c____277 = _memoize(() =>
	[])
const c____278 = _memoize(() =>
	[])
const c____279 = _memoize(() =>
	[c____317(), c____318()])
const c____280 = _memoize(() =>
	[c____395(), c____396(), c____397(), c____398()])
const c____281 = _memoize(() =>
	[c____317(), c____400()])
const c____282 = _memoize(() =>
	[c____442(), c____443()])
const c____283 = _memoize(() =>
	[c____317(), c____455()])
const c____284 = _memoize(() =>
	[c____473(), c____464()])
const c____285 = _memoize(() =>
	[c____496()])
const c____286 = _memoize(() =>
	[c____497()])
const c____287 = _memoize(() =>
	new (Uint32Array)([]))
const c____288 = _memoize(() =>
	[])
const c____289 = _memoize(() =>
	[])
const c____290 = _memoize(() =>
	new (BigUint64Array)([]))
const c____291 = _memoize(() =>
	[])
const c____292 = _memoize(() =>
	[])
const c____293 = _memoize(() =>
	[])
const c____294 = _memoize(() =>
	[])
const c____295 = _memoize(() =>
	new (Uint8Array)([1, 0]))
const c____296 = _memoize(() =>
	[])
const c____297 = _memoize(() =>
	[])
const c____298 = _memoize(() =>
	[])
const c____299 = _memoize(() =>
	[])
const c____300 = _memoize(() =>
	[])
const c____301 = _memoize(() =>
	[])
const c____302 = _memoize(() =>
	[])
const c____303 = _memoize(() =>
	new (line__45and__45character615878410298802810)(0, 0))
const c____304 = _memoize(() =>
	new (index__45relative__45to__45end8245774424878029406)(0n))
const c____305 = _memoize(() =>
	new (string9092701471797383860)(c____0()))
const c____306 = _memoize(() =>
	new (string9092701471797383860)(c____1()))
const c____307 = _memoize(() =>
	new (string9092701471797383860)(c____2()))
const c____308 = _memoize(() =>
	new (string9092701471797383860)(c____3()))
const c____309 = _memoize(() =>
	new (string9092701471797383860)(c____4()))
const c____310 = _memoize(() =>
	new (string9092701471797383860)(c____5()))
const c____311 = _memoize(() =>
	new (string9092701471797383860)(c____6()))
const c____312 = _memoize(() =>
	new (string9092701471797383860)(c____7()))
const c____313 = _memoize(() =>
	new (string9092701471797383860)(c____8()))
const c____314 = _memoize(() =>
	new (string9092701471797383860)(c____9()))
const c____315 = _memoize(() =>
	new (string9092701471797383860)(c____10()))
const c____316 = _memoize(() =>
	new (string9092701471797383860)(c____11()))
const c____317 = _memoize(() =>
	new (string9092701471797383860)(c____12()))
const c____318 = _memoize(() =>
	new (string9092701471797383860)(c____13()))
const c____319 = _memoize(() =>
	new (string9092701471797383860)(c____14()))
const c____320 = _memoize(() =>
	new (string9092701471797383860)(c____15()))
const c____321 = _memoize(() =>
	new (string9092701471797383860)(c____16()))
const c____322 = _memoize(() =>
	new (string9092701471797383860)(c____17()))
const c____323 = _memoize(() =>
	new (string9092701471797383860)(c____18()))
const c____324 = _memoize(() =>
	new (string9092701471797383860)(c____19()))
const c____325 = _memoize(() =>
	new (string9092701471797383860)(c____20()))
const c____326 = _memoize(() =>
	new (string9092701471797383860)(c____21()))
const c____327 = _memoize(() =>
	new (string9092701471797383860)(c____22()))
const c____328 = _memoize(() =>
	new (string9092701471797383860)(c____23()))
const c____329 = _memoize(() =>
	new (string9092701471797383860)(c____24()))
const c____330 = _memoize(() =>
	new (string9092701471797383860)(c____25()))
const c____331 = _memoize(() =>
	new (string9092701471797383860)(c____26()))
const c____332 = _memoize(() =>
	new (string9092701471797383860)(c____27()))
const c____333 = _memoize(() =>
	new (string9092701471797383860)(c____28()))
const c____334 = _memoize(() =>
	new (string9092701471797383860)(c____29()))
const c____335 = _memoize(() =>
	new (string9092701471797383860)(c____30()))
const c____336 = _memoize(() =>
	new (string9092701471797383860)(c____31()))
const c____337 = _memoize(() =>
	new (string9092701471797383860)(c____32()))
const c____338 = _memoize(() =>
	new (string9092701471797383860)(c____33()))
const c____339 = _memoize(() =>
	new (string9092701471797383860)(c____34()))
const c____340 = _memoize(() =>
	new (string9092701471797383860)(c____35()))
const c____341 = _memoize(() =>
	new (string9092701471797383860)(c____36()))
const c____342 = _memoize(() =>
	new (string9092701471797383860)(c____37()))
const c____343 = _memoize(() =>
	new (string9092701471797383860)(c____38()))
const c____344 = _memoize(() =>
	new (string9092701471797383860)(c____39()))
const c____345 = _memoize(() =>
	new (string9092701471797383860)(c____40()))
const c____346 = _memoize(() =>
	new (string9092701471797383860)(c____41()))
const c____347 = _memoize(() =>
	new (string9092701471797383860)(c____42()))
const c____348 = _memoize(() =>
	new (string9092701471797383860)(c____43()))
const c____349 = _memoize(() =>
	new (string9092701471797383860)(c____44()))
const c____350 = _memoize(() =>
	new (string9092701471797383860)(c____45()))
const c____351 = _memoize(() =>
	new (string9092701471797383860)(c____46()))
const c____352 = _memoize(() =>
	new (string9092701471797383860)(c____47()))
const c____353 = _memoize(() =>
	new (string9092701471797383860)(c____56()))
const c____354 = _memoize(() =>
	new (string9092701471797383860)(c____57()))
const c____355 = _memoize(() =>
	new (string9092701471797383860)(c____58()))
const c____356 = _memoize(() =>
	new (string9092701471797383860)(c____59()))
const c____357 = _memoize(() =>
	new (string9092701471797383860)(c____60()))
const c____358 = _memoize(() =>
	new (string9092701471797383860)(c____61()))
const c____359 = _memoize(() =>
	new (string9092701471797383860)(c____62()))
const c____360 = _memoize(() =>
	new (string9092701471797383860)(c____63()))
const c____361 = _memoize(() =>
	new (string9092701471797383860)(c____64()))
const c____362 = _memoize(() =>
	new (string9092701471797383860)(c____65()))
const c____363 = _memoize(() =>
	new (string9092701471797383860)(c____66()))
const c____364 = _memoize(() =>
	new (string9092701471797383860)(c____67()))
const c____365 = _memoize(() =>
	new (string9092701471797383860)(c____68()))
const c____366 = _memoize(() =>
	new (string9092701471797383860)(c____69()))
const c____367 = _memoize(() =>
	new (string9092701471797383860)(c____70()))
const c____368 = _memoize(() =>
	new (string9092701471797383860)(c____71()))
const c____369 = _memoize(() =>
	new (string9092701471797383860)(c____72()))
const c____370 = _memoize(() =>
	new (string9092701471797383860)(c____73()))
const c____371 = _memoize(() =>
	new (string9092701471797383860)(c____74()))
const c____372 = _memoize(() =>
	new (string9092701471797383860)(c____75()))
const c____373 = _memoize(() =>
	new (string9092701471797383860)(c____76()))
const c____374 = _memoize(() =>
	new (string9092701471797383860)(c____77()))
const c____375 = _memoize(() =>
	new (string9092701471797383860)(c____78()))
const c____376 = _memoize(() =>
	new (string9092701471797383860)(c____79()))
const c____377 = _memoize(() =>
	new (string9092701471797383860)(c____80()))
const c____378 = _memoize(() =>
	new (string9092701471797383860)(c____81()))
const c____379 = _memoize(() =>
	new (string9092701471797383860)(c____82()))
const c____380 = _memoize(() =>
	new (string9092701471797383860)(c____83()))
const c____381 = _memoize(() =>
	new (string9092701471797383860)(c____84()))
const c____382 = _memoize(() =>
	new (string9092701471797383860)(c____85()))
const c____383 = _memoize(() =>
	new (string9092701471797383860)(c____86()))
const c____384 = _memoize(() =>
	new (string9092701471797383860)(c____87()))
const c____385 = _memoize(() =>
	new (string9092701471797383860)(c____88()))
const c____386 = _memoize(() =>
	new (string9092701471797383860)(c____89()))
const c____387 = _memoize(() =>
	new (string9092701471797383860)(c____90()))
const c____388 = _memoize(() =>
	new (string9092701471797383860)(c____91()))
const c____389 = _memoize(() =>
	new (string9092701471797383860)(c____92()))
const c____390 = _memoize(() =>
	new (string9092701471797383860)(c____93()))
const c____391 = _memoize(() =>
	new (string9092701471797383860)(c____94()))
const c____392 = _memoize(() =>
	new (string9092701471797383860)(c____95()))
const c____393 = _memoize(() =>
	new (string9092701471797383860)(c____96()))
const c____394 = _memoize(() =>
	new (string9092701471797383860)(c____97()))
const c____395 = _memoize(() =>
	new (string9092701471797383860)(c____98()))
const c____396 = _memoize(() =>
	new (string9092701471797383860)(c____99()))
const c____397 = _memoize(() =>
	new (string9092701471797383860)(c____100()))
const c____398 = _memoize(() =>
	new (string9092701471797383860)(c____101()))
const c____399 = _memoize(() =>
	new (string9092701471797383860)(c____102()))
const c____400 = _memoize(() =>
	new (string9092701471797383860)(c____103()))
const c____401 = _memoize(() =>
	new (string9092701471797383860)(c____104()))
const c____402 = _memoize(() =>
	new (string9092701471797383860)(c____105()))
const c____403 = _memoize(() =>
	new (string9092701471797383860)(c____106()))
const c____404 = _memoize(() =>
	new (string9092701471797383860)(c____107()))
const c____405 = _memoize(() =>
	new (string9092701471797383860)(c____108()))
const c____406 = _memoize(() =>
	new (string9092701471797383860)(c____109()))
const c____407 = _memoize(() =>
	new (string9092701471797383860)(c____110()))
const c____408 = _memoize(() =>
	new (string9092701471797383860)(c____111()))
const c____409 = _memoize(() =>
	new (string9092701471797383860)(c____112()))
const c____410 = _memoize(() =>
	new (string9092701471797383860)(c____113()))
const c____411 = _memoize(() =>
	new (string9092701471797383860)(c____114()))
const c____412 = _memoize(() =>
	new (string9092701471797383860)(c____115()))
const c____413 = _memoize(() =>
	new (string9092701471797383860)(c____116()))
const c____414 = _memoize(() =>
	new (string9092701471797383860)(c____117()))
const c____415 = _memoize(() =>
	new (string9092701471797383860)(c____118()))
const c____416 = _memoize(() =>
	new (string9092701471797383860)(c____119()))
const c____417 = _memoize(() =>
	new (string9092701471797383860)(c____120()))
const c____418 = _memoize(() =>
	new (string9092701471797383860)(c____121()))
const c____419 = _memoize(() =>
	new (string9092701471797383860)(c____122()))
const c____420 = _memoize(() =>
	new (string9092701471797383860)(c____123()))
const c____421 = _memoize(() =>
	new (string9092701471797383860)(c____124()))
const c____422 = _memoize(() =>
	new (string9092701471797383860)(c____125()))
const c____423 = _memoize(() =>
	new (string9092701471797383860)(c____126()))
const c____424 = _memoize(() =>
	new (string9092701471797383860)(c____127()))
const c____425 = _memoize(() =>
	new (string9092701471797383860)(c____128()))
const c____426 = _memoize(() =>
	new (string9092701471797383860)(c____129()))
const c____427 = _memoize(() =>
	new (string9092701471797383860)(c____130()))
const c____428 = _memoize(() =>
	new (string9092701471797383860)(c____131()))
const c____429 = _memoize(() =>
	new (string9092701471797383860)(c____132()))
const c____430 = _memoize(() =>
	new (string9092701471797383860)(c____133()))
const c____431 = _memoize(() =>
	new (string9092701471797383860)(c____134()))
const c____432 = _memoize(() =>
	new (string9092701471797383860)(c____135()))
const c____433 = _memoize(() =>
	new (string9092701471797383860)(c____136()))
const c____434 = _memoize(() =>
	new (string9092701471797383860)(c____137()))
const c____435 = _memoize(() =>
	new (string9092701471797383860)(c____138()))
const c____436 = _memoize(() =>
	new (string9092701471797383860)(c____139()))
const c____437 = _memoize(() =>
	new (string9092701471797383860)(c____140()))
const c____438 = _memoize(() =>
	new (string9092701471797383860)(c____141()))
const c____439 = _memoize(() =>
	new (string9092701471797383860)(c____142()))
const c____440 = _memoize(() =>
	new (string9092701471797383860)(c____143()))
const c____441 = _memoize(() =>
	new (string9092701471797383860)(c____144()))
const c____442 = _memoize(() =>
	new (string9092701471797383860)(c____145()))
const c____443 = _memoize(() =>
	new (string9092701471797383860)(c____146()))
const c____444 = _memoize(() =>
	new (string9092701471797383860)(c____147()))
const c____445 = _memoize(() =>
	new (string9092701471797383860)(c____148()))
const c____446 = _memoize(() =>
	new (string9092701471797383860)(c____149()))
const c____447 = _memoize(() =>
	new (string9092701471797383860)(c____150()))
const c____448 = _memoize(() =>
	new (string9092701471797383860)(c____151()))
const c____449 = _memoize(() =>
	new (string9092701471797383860)(c____152()))
const c____450 = _memoize(() =>
	new (string9092701471797383860)(c____153()))
const c____451 = _memoize(() =>
	new (string9092701471797383860)(c____154()))
const c____452 = _memoize(() =>
	new (string9092701471797383860)(c____155()))
const c____453 = _memoize(() =>
	new (string9092701471797383860)(c____156()))
const c____454 = _memoize(() =>
	new (string9092701471797383860)(c____157()))
const c____455 = _memoize(() =>
	new (string9092701471797383860)(c____158()))
const c____456 = _memoize(() =>
	new (string9092701471797383860)(c____159()))
const c____457 = _memoize(() =>
	new (string9092701471797383860)(c____160()))
const c____458 = _memoize(() =>
	new (string9092701471797383860)(c____161()))
const c____459 = _memoize(() =>
	new (string9092701471797383860)(c____162()))
const c____460 = _memoize(() =>
	new (string9092701471797383860)(c____163()))
const c____461 = _memoize(() =>
	new (string9092701471797383860)(c____164()))
const c____462 = _memoize(() =>
	new (string9092701471797383860)(c____165()))
const c____463 = _memoize(() =>
	new (string9092701471797383860)(c____166()))
const c____464 = _memoize(() =>
	new (string9092701471797383860)(c____167()))
const c____465 = _memoize(() =>
	new (string9092701471797383860)(c____168()))
const c____466 = _memoize(() =>
	new (string9092701471797383860)(c____169()))
const c____467 = _memoize(() =>
	new (string9092701471797383860)(c____170()))
const c____468 = _memoize(() =>
	new (string9092701471797383860)(c____171()))
const c____469 = _memoize(() =>
	new (string9092701471797383860)(c____172()))
const c____470 = _memoize(() =>
	new (string9092701471797383860)(c____173()))
const c____471 = _memoize(() =>
	new (string9092701471797383860)(c____174()))
const c____472 = _memoize(() =>
	new (string9092701471797383860)(c____175()))
const c____473 = _memoize(() =>
	new (string9092701471797383860)(c____176()))
const c____474 = _memoize(() =>
	new (string9092701471797383860)(c____177()))
const c____475 = _memoize(() =>
	new (string9092701471797383860)(c____178()))
const c____476 = _memoize(() =>
	new (string9092701471797383860)(c____179()))
const c____477 = _memoize(() =>
	new (string9092701471797383860)(c____180()))
const c____478 = _memoize(() =>
	new (string9092701471797383860)(c____181()))
const c____479 = _memoize(() =>
	new (string9092701471797383860)(c____182()))
const c____480 = _memoize(() =>
	new (string9092701471797383860)(c____183()))
const c____481 = _memoize(() =>
	new (string9092701471797383860)(c____185()))
const c____482 = _memoize(() =>
	new (string9092701471797383860)(c____186()))
const c____483 = _memoize(() =>
	new (string9092701471797383860)(c____187()))
const c____484 = _memoize(() =>
	new (string9092701471797383860)(c____188()))
const c____485 = _memoize(() =>
	new (string9092701471797383860)(c____189()))
const c____486 = _memoize(() =>
	new (string9092701471797383860)(c____190()))
const c____487 = _memoize(() =>
	new (string9092701471797383860)(c____191()))
const c____488 = _memoize(() =>
	new (string9092701471797383860)(c____192()))
const c____489 = _memoize(() =>
	new (string9092701471797383860)(c____193()))
const c____490 = _memoize(() =>
	new (string9092701471797383860)(c____194()))
const c____491 = _memoize(() =>
	new (string9092701471797383860)(c____195()))
const c____492 = _memoize(() =>
	new (string9092701471797383860)(c____196()))
const c____493 = _memoize(() =>
	new (string9092701471797383860)(c____197()))
const c____494 = _memoize(() =>
	new (string9092701471797383860)(c____198()))
const c____495 = _memoize(() =>
	new (string9092701471797383860)(c____199()))
const c____496 = _memoize(() =>
	new (string9092701471797383860)(c____200()))
const c____497 = _memoize(() =>
	new (string9092701471797383860)(c____201()))
const c____498 = _memoize(() =>
	new (string9092701471797383860)(c____202()))
const c____499 = _memoize(() =>
	new (string9092701471797383860)(c____203()))
const c____500 = _memoize(() =>
	new (string9092701471797383860)(c____204()))
const c____501 = _memoize(() =>
	new (string9092701471797383860)(c____205()))
const c____502 = _memoize(() =>
	new (string9092701471797383860)(c____206()))
const c____503 = _memoize(() =>
	new (string9092701471797383860)(c____207()))
const c____504 = _memoize(() =>
	new (string9092701471797383860)(c____208()))
const c____505 = _memoize(() =>
	new (string9092701471797383860)(c____209()))
const c____506 = _memoize(() =>
	new (string9092701471797383860)(c____210()))
const c____507 = _memoize(() =>
	new (string9092701471797383860)(c____211()))
const c____508 = _memoize(() =>
	new (string9092701471797383860)(c____212()))
const c____509 = _memoize(() =>
	new (string9092701471797383860)(c____213()))
const c____510 = _memoize(() =>
	new (string9092701471797383860)(c____214()))
const c____511 = _memoize(() =>
	new (string9092701471797383860)(c____215()))
const c____512 = _memoize(() =>
	new (string9092701471797383860)(c____216()))
const c____513 = _memoize(() =>
	new (string9092701471797383860)(c____217()))
const c____514 = _memoize(() =>
	new (string9092701471797383860)(c____218()))
const c____515 = _memoize(() =>
	new (string9092701471797383860)(c____219()))
const c____516 = _memoize(() =>
	new (string9092701471797383860)(c____220()))
const c____517 = _memoize(() =>
	new (string9092701471797383860)(c____221()))
const c____518 = _memoize(() =>
	new (string9092701471797383860)(c____222()))
const c____519 = _memoize(() =>
	new (string9092701471797383860)(c____223()))
const c____520 = _memoize(() =>
	new (string9092701471797383860)(c____224()))
const c____521 = _memoize(() =>
	new (string9092701471797383860)(c____225()))
const c____522 = _memoize(() =>
	new (string9092701471797383860)(c____226()))
const c____523 = _memoize(() =>
	new (string9092701471797383860)(c____227()))
const c____524 = _memoize(() =>
	new (string9092701471797383860)(c____228()))
const c____525 = _memoize(() =>
	new (string9092701471797383860)(c____229()))
const c____526 = _memoize(() =>
	new (string9092701471797383860)(c____230()))
const c____527 = _memoize(() =>
	new (string9092701471797383860)(c____231()))
const c____528 = _memoize(() =>
	new (string9092701471797383860)(c____232()))
const c____529 = _memoize(() =>
	new (string9092701471797383860)(c____233()))
const c____530 = _memoize(() =>
	new (string9092701471797383860)(c____234()))
const c____531 = _memoize(() =>
	new (string9092701471797383860)(c____235()))
const c____532 = _memoize(() =>
	new (string9092701471797383860)(c____236()))
const c____533 = _memoize(() =>
	new (string9092701471797383860)(c____237()))
const c____534 = _memoize(() =>
	new (string9092701471797383860)(c____238()))
const c____535 = _memoize(() =>
	new (string9092701471797383860)(c____239()))
const c____536 = _memoize(() =>
	new (string9092701471797383860)(c____240()))
const c____537 = _memoize(() =>
	new (string9092701471797383860)(c____241()))
const c____538 = _memoize(() =>
	new (string9092701471797383860)(c____242()))
const c____539 = _memoize(() =>
	new (string9092701471797383860)(c____243()))
const c____540 = _memoize(() =>
	new (string9092701471797383860)(c____244()))
const c____541 = _memoize(() =>
	new (string9092701471797383860)(c____245()))
const c____542 = _memoize(() =>
	new (string9092701471797383860)(c____246()))
const c____543 = _memoize(() =>
	new (string9092701471797383860)(c____247()))
const c____544 = _memoize(() =>
	new (string9092701471797383860)(c____248()))
const c____545 = _memoize(() =>
	new (string9092701471797383860)(c____249()))
const c____546 = _memoize(() =>
	new (string9092701471797383860)(c____250()))
const c____547 = _memoize(() =>
	new (string9092701471797383860)(c____251()))
const c____548 = _memoize(() =>
	new (string9092701471797383860)(c____252()))
const c____549 = _memoize(() =>
	new (string9092701471797383860)(c____253()))
const c____550 = _memoize(() =>
	new (string9092701471797383860)(c____254()))
const c____551 = _memoize(() =>
	new (string9092701471797383860)(c____255()))
const c____552 = _memoize(() =>
	new (string9092701471797383860)(c____256()))
const c____553 = _memoize(() =>
	new (string9092701471797383860)(c____257()))
const c____554 = _memoize(() =>
	new (custom__45element__45options9367161635018646401)(c____279()))
const c____555 = _memoize(() =>
	new (custom__45element__45options9367161635018646401)(c____278()))
const c____556 = _memoize(() =>
	new (custom__45element__45options9367161635018646401)(c____281()))
const c____557 = _memoize(() =>
	new (custom__45element__45options9367161635018646401)(c____283()))
const c____558 = _memoize(() =>
	new (none12752313651180151000)())
const c____559 = _memoize(() =>
	new (null13632064846172113175)())
const c____560 = _memoize(() =>
	new (secure__45random14152235312814091713)())
const c____561 = _memoize(() =>
	new (build__45options14619063373532228768)(0n))
const c____562 = _memoize(() =>
	new (single15714947171587583006)(c____375(), false))
const c____563 = _memoize(() =>
	new (single15714947171587583006)(c____376(), false))
const c____564 = _memoize(() =>
	new (single15714947171587583006)(c____377(), false))
const c____565 = _memoize(() =>
	new (local__45storage18297336827894256865)())
let v17067892823588717216
let v13564251612953089981
let v12573860492985904132 = 0n
const _symbol0 = to9088973396303820521(to7876981377693269494("table"))
const _symbol1 = to9088973396303820521(to7876981377693269494("thead"))
const _symbol2 = to9088973396303820521(to7876981377693269494("tr"))
const _symbol3 = to9088973396303820521(to7876981377693269494("tbody"))
const _symbol4 = to9088973396303820521(to7876981377693269494("td"))
const _symbol5 = to9088973396303820521(to7876981377693269494("input"))
const _symbol6 = to9088973396303820521(to7876981377693269494("type"))
const _symbol7 = to9088973396303820521(to7876981377693269494("value"))
const _symbol8 = to9088973396303820521(to7876981377693269494("output"))
const _symbol9 = to9088973396303820521(to7876981377693269494("diagnostics"))
const _symbol10 = to9088973396303820521(to7876981377693269494("custom/syntax-translate"))
const _symbol11 = to9088973396303820521(to7876981377693269494("from-language"))
const _symbol12 = to9088973396303820521(to7876981377693269494("source"))
const _symbol13 = to9088973396303820521(to7876981377693269494("to-language"))
const _symbol14 = to9088973396303820521(to7876981377693269494("id"))
const _symbol15 = to9088973396303820521(to7876981377693269494("method"))
const _symbol16 = to9088973396303820521(to7876981377693269494("params"))
const _symbol17 = to9088973396303820521(to7876981377693269494("th"))
const _symbol18 = to9088973396303820521(to7876981377693269494("mode"))
const _symbol19 = to9088973396303820521(to7876981377693269494("connectedCallback"))
const _symbol20 = to9088973396303820521(to7876981377693269494("div"))
const _symbol21 = to9088973396303820521(to7876981377693269494("textarea"))
const _symbol22 = to9088973396303820521(to7876981377693269494("spellcheck"))
const _symbol23 = to9088973396303820521(to7876981377693269494("span"))
const _symbol24 = to9088973396303820521(to7876981377693269494("popover"))
const _symbol25 = to9088973396303820521(to7876981377693269494("role"))
const _symbol26 = to9088973396303820521(to7876981377693269494("left"))
const _symbol27 = to9088973396303820521(to7876981377693269494("top"))
const _symbol28 = to9088973396303820521(to7876981377693269494("textDocument/hover"))
const _symbol29 = to9088973396303820521(to7876981377693269494("contents"))
const _symbol30 = to9088973396303820521(to7876981377693269494("uri"))
const _symbol31 = to9088973396303820521(to7876981377693269494("character"))
const _symbol32 = to9088973396303820521(to7876981377693269494("line"))
const _symbol33 = to9088973396303820521(to7876981377693269494("position"))
const _symbol34 = to9088973396303820521(to7876981377693269494("textDocument"))
const _symbol35 = to9088973396303820521(to7876981377693269494("textDocument/semanticTokens/full"))
const _symbol36 = to9088973396303820521(to7876981377693269494("data"))
const _symbol37 = to9088973396303820521(to7876981377693269494("textDocument/didOpen"))
const _symbol38 = to9088973396303820521(to7876981377693269494("text"))
const _symbol39 = to9088973396303820521(to7876981377693269494("name"))
const _symbol40 = to9088973396303820521(to7876981377693269494("no-run"))
const _symbol41 = to9088973396303820521(to7876981377693269494("test"))
const _symbol42 = to9088973396303820521(to7876981377693269494("float"))
const _symbol43 = to9088973396303820521(to7876981377693269494("height"))
const _symbol44 = to9088973396303820521(to7876981377693269494("code"))
const _symbol45 = to9088973396303820521(to7876981377693269494("br"))
const _symbol46 = to9088973396303820521(to7876981377693269494("script"))
const _symbol47 = to9088973396303820521(to7876981377693269494("custom/build-js-script"))
const _symbol48 = to9088973396303820521(to7876981377693269494("diagnosticsOnlyForUris"))
const _symbol49 = to9088973396303820521(to7876981377693269494("main-kind"))
const _symbol50 = to9088973396303820521(to7876981377693269494("keen-loading-spinner"))
const _symbol51 = to9088973396303820521(to7876981377693269494("button"))
const _symbol52 = to9088973396303820521(to7876981377693269494("title"))
const _symbol53 = to9088973396303820521(to7876981377693269494("keen-text"))
const _symbol54 = to9088973396303820521(to7876981377693269494("info"))
const _symbol55 = to9088973396303820521(to7876981377693269494("warn"))
const _symbol56 = to9088973396303820521(to7876981377693269494("error"))
const _symbol57 = to9088973396303820521(to7876981377693269494("theme"))
const _symbol58 = to9088973396303820521(to7876981377693269494("dark"))
const _symbol59 = to9088973396303820521(to7876981377693269494("light"))
const _symbol60 = to9088973396303820521(to7876981377693269494("icon"))
const _symbol61 = to9088973396303820521(to7876981377693269494("result"))
const _symbol62 = to9088973396303820521(to7876981377693269494("custom/perf-report"))
const _symbol63 = to9088973396303820521(to7876981377693269494("textDocument/publishDiagnostics"))
const _symbol64 = to9088973396303820521(to7876981377693269494("initialize"))
const _symbol65 = to9088973396303820521(to7876981377693269494("start"))
const _symbol66 = to9088973396303820521(to7876981377693269494("end"))
const _symbol67 = to9088973396303820521(to7876981377693269494("range"))
const _symbol68 = to9088973396303820521(to7876981377693269494("severity"))
const _symbol69 = to9088973396303820521(to7876981377693269494("message"))
const _symbol70 = to9088973396303820521(to7876981377693269494(""))

;(await _async_main7646332251047535124())