function fib(num) {
    if (num <= 1)
        return num;
    return fib(num - 1) + fib(num - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13

function fib(num) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(77)); // 5527939700884757