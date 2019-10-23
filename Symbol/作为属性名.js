let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"

//不能使用点运算符
const mySymbol = Symbol();
const a = {};

a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"

//对象内部，Symbol值必须放在方括号里
let s = Symbol();

let obj = {
    [s]: function (arg) { ... }
};
//等价于
let obj = {
    [s](arg) { ... }
};

obj[s](123);