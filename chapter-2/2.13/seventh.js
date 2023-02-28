// использовал функции, хотя они будут в следующих главах,
// потому что без функций решать эту задачу неудобно

function isPrime(n) {
    if (n <= 1)
        return false;

    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;

    return true;
}

function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i))
            console.log(i);
    }
}

printPrimes(133769);