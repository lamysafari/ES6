const sym = Symbol('foo');

String(sym) // "Symbol(foo)"
sym.toString() // "Symbol(foo)"

//ES2019
const sym = Symbol('foo');

sym.description // "foo"