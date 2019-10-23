//与Set的区别：1、成员只能是对象 2、弱引用
const ws = new WeakSet();
ws.add(1)
// TypeError: Invalid value used in weak set
ws.add(Symbol())
// TypeError: invalid value used in weak set

//可以使用数组或类似数组的对象作为参数
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}

//b的成员不是对象
const b = [3, 4];
const ws = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)

//语法
const ws = new WeakSet();
const obj = {};
const foo = {};

// WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
ws.add(window);
ws.add(obj);

// WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
ws.has(window); // true
ws.has(foo);    // false
``
// WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
ws.delete(window);
ws.has(window);    // false

//无size，无法遍历
ws.size // undefined
ws.forEach // undefined

ws.forEach(function(item){ console.log('WeakSet has ' + item)})
// TypeError: undefined is not a function

//应用：储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。
const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
    }
  }
}