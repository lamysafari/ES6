//Set特点：没有重复的值
//定义方法
const set = new Set([1, 2, 3, 4, 4]);
[...set]

//数组去重
const array = [1, 2, 3, 4, 4];
console.log([...new Set(array)])

//去除字符串里的重复字母
console.log([...new Set('ababbc')].join(''));

//严格相等，但是NaN等于NaN
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}

//对象是不相等的
let set = new Set();

set.add({});
set .size // 1

set.add({});
set.size // 2