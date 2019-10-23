//构造函数
const map = new Map();
map.set('foo', true);
map.set('bar', false);

//size属性
map.size // 2

//Map.prototype.set(key, value)
const m = new Map();

m.set('edition', 6)        // 键是字符串
m.set(262, 'standard')     // 键是数值
m.set(undefined, 'nah')    // 键是 undefined

//返回是当前的Map对象，所以可以使用链式写法
let map = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

//Map.prototype.get(key)
const m = new Map();

const hello = function() {console.log('hello');};
m.set(hello, 'Hello ES6!') // 键是函数

m.get(hello)  // Hello ES6!

//Map.prototype.has(key)
const m = new Map();

m.set('edition', 6);
m.set(262, 'standard');
m.set(undefined, 'nah');

m.has('edition')     // true
m.has('years')       // false
m.has(262)           // true
m.has(undefined)     // true

// Map.prototype.delete(key)
const m = new Map();
m.set(undefined, 'nah');
m.has(undefined)     // true

m.delete(undefined)
m.has(undefined)       // false

//Map.prototype.clear()
let map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
map.clear()
map.size // 0