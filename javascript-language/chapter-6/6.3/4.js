function sum(first) {
    return function (second) {
        return first + second;
    };
}

console.log(sum(1)(2)); // = 3
console.log(sum(5)(-1)); // = 4
