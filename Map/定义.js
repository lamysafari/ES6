//特点Object只能使用字符串作为键、而Map各种类型的值（包括对象）都可以当作键
const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
  ]);

// 相当于
const items = [
    ['name', '张三'],
    ['title', 'Author']
  ];
  
const map = new Map();

items.forEach(
([key, value]) => map.set(key, value)
);

//参数可以是每个成员都是一个双元素的数组的数据结构
const set = new Set([
    ['foo', 1],
    ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo') // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
m3.get('baz') // 3

//未知键名
new Map().get('asfddfsasadf')
// undefined

//只有对同一个对象的引用，才视为同一个键
const map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined

//相同值的两个实例
const map = new Map();

const k1 = ['a'];
const k2 = ['a'];

map
.set(k1, 111)
.set(k2, 222);

map.get(k1) // 111
map.get(k2) // 222

//简单类型 严格相等
let map = new Map();

map.set(-0, 123);
map.get(+0) // 123

map.set(true, 1);
map.set('true', 2);
map.get(true) // 1

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined) // 3

map.set(NaN, 123);
map.get(NaN) // 123