//构造函数
let s = new Symbol();
//Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
s.add(1).add(2).add(2);
// 注意2被加入了两次

// Set.prototype.size：返回Set实例的成员总数。
s.size // 2

// Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
s.has(1) // true
s.has(2) // true
s.has(3) // false

// Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
s.delete(2);

s.has(2) // false

//Set.prototype.clear()：清除所有成员，没有返回值。
s.clear();
console.log(s);

// 对比是否包括一个键
// 对象的写法
const properties = {
    'width': 1,
    'height': 1
  };
  
  if (properties[someName]) {
    // do something
  }
  
// Set的写法
const properties = new Set();

properties.add('width');
properties.add('height');

if (properties.has(someName)) {
// do something
}

//转化为数组
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);