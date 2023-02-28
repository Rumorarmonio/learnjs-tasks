let filterRange = (arr, a, b) => arr.filter(item => (a <= item && item <= b));

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);