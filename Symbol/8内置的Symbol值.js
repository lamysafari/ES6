//1.Symbol.hasInstance
class MyClass {
    [Symbol.hasInstance](foo) {
        return foo instanceof Array;
    }
}

[1, 2, 3] instanceof new MyClass() // true

//2.Symbol.isConcatSpreadable
let arr1 = ['c', 'd'];
['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
arr1[Symbol.isConcatSpreadable] // undefined

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
['a', 'b'].concat(arr2, 'e') // ['a', 'b', ['c','d'], 'e']

//3.Symbol.species 指向一个构造函数。创建衍生对象时，会使用该属性。
class MyArray extends Array {
}

const a = new MyArray(1, 2, 3);
const b = a.map(x => x);
const c = a.filter(x => x > 1);

b instanceof MyArray // true
c instanceof MyArray // true

//4.Symbol.match
String.prototype.match(regexp)
// 等同于
regexp[Symbol.match](this)

class MyMatcher {
    [Symbol.match](string) {
        return 'hello world'.indexOf(string);
    }
}

'e'.match(new MyMatcher()) // 1

//5.Symbol.replace
String.prototype.replace(searchValue, replaceValue)
// 等同于
searchValue[Symbol.replace](this, replaceValue)

const x = {};
x[Symbol.replace] = (...s) => console.log(s);

'Hello'.replace(x, 'World') // ["Hello", "World"]

//6.Symbol.search
String.prototype.search(regexp)
// 等同于
regexp[Symbol.search](this)

class MySearch {
    constructor(value) {
        this.value = value;
    }
    [Symbol.search](string) {
        return string.indexOf(this.value);
    }
}
'foobar'.search(new MySearch('foo')) // 0

//7.Symbol.split
String.prototype.split(separator, limit)
// 等同于
separator[Symbol.split](this, limit)
class MySplitter {
    constructor(value) {
        this.value = value;
    }
    [Symbol.split](string) {
        let index = string.indexOf(this.value);
        if (index === -1) {
            return string;
        }
        return [
            string.substr(0, index),
            string.substr(index + this.value.length)
        ];
    }
}

'foobar'.split(new MySplitter('foo'))
// ['', 'bar']

'foobar'.split(new MySplitter('bar'))
// ['foo', '']

'foobar'.split(new MySplitter('baz'))
// 'foobar'

//8.Symbol.iterator
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

[...myIterable] // [1, 2, 3]
// 9.Symbol.toPrimitive
let obj = {
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number':
                return 123;
            case 'string':
                return 'str';
            case 'default':
                return 'default';
            default:
                throw new Error();
        }
    }
};

2 * obj // 246
3 + obj // '3default'
obj == 'default' // true
String(obj) // 'str'

// 10.Symbol.toStringTag
// 例一
({[Symbol.toStringTag]: 'Foo'}.toString())
// "[object Foo]"

// 例二
class Collection {
  get [Symbol.toStringTag]() {
    return 'xxx';
  }
}
let x = new Collection();
Object.prototype.toString.call(x) // "[object xxx]"

// 11.Symbol.unscopables指向一个对象。该对象指定了使用with关键字时，哪些属性会被with环境排除。
Array.prototype[Symbol.unscopables]
// {
//   copyWithin: true,
//   entries: true,
//   fill: true,
//   find: true,
//   findIndex: true,
//   includes: true,
//   keys: true
// }

Object.keys(Array.prototype[Symbol.unscopables])
// ['copyWithin', 'entries', 'fill', 'find', 'findIndex', 'includes', 'keys']