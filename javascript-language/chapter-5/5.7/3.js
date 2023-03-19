let map = new Map();

map.set("name", "John");

// map.keys() возвращает итерируемый объект, а не массив,
// поэтому необходимо конвертировать его в массив при помощи Array.from
let keys = Array.from(map.keys());

keys.push("more");

console.log(keys); // name, more