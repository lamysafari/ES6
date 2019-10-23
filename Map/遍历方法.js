//keys()，values()，entries() 返回的都是遍历器对象
//遍历顺序为插入顺序
const map = new Map([
    ['F', 'no'],
    ['T',  'yes'],
  ]);
  
  for (let key of map.keys()) {
    console.log(key);
  }
  // "F"
  // "T"
  
  for (let value of map.values()) {
    console.log(value);
  }
  // "no"
  // "yes"
  
  for (let item of map.entries()) {
    console.log(item[0], item[1]);
  }
  // "F" "no"
  // "T" "yes"
  
  // 或者
  for (let [key, value] of map.entries()) {
    console.log(key, value);
  }
  // "F" "no"
  // "T" "yes"
  
  // 等同于使用map.entries()
  for (let [key, value] of map) {
    console.log(key, value);
  }
  // "F" "no"
  // "T" "yes"

//默认遍历器接口
map[Symbol.iterator] === map.entries
// true

//forEach()
const reporter = {
    report: function(key, value) {
      console.log("Key: %s, Value: %s", key, value);
    }
};

map.forEach(function(value, key, map) {
this.report(key, value);
}, reporter);

//使用数组的map和filter方法
const map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

const map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
// 产生 Map 结构 {1 => 'a', 2 => 'b'}

const map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
    );
// 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}