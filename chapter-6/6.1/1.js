// 1. использование цикла
function sumTo(num) {
    result = 0;
    for (let i = 1; i <= num; i++)
        result += i;
    return result;
}

console.log(sumTo(100));

// 2. использование рекурсии
function sumTo(num) {
    if (num == 1)
        return 1;
    return num + sumTo(num - 1);
}

console.log(sumTo(100));

// 3. использование формулы
let sumToFormula = num => num * (num + 1) / 2;

console.log(sumToFormula(100));

// Очевидно, что самое эффективное решение - это нахождение суммы по формуле,
// так как в нём нет итераций и происходит мало операций

// Второе решение по скорости - это цикл.
// Третье - это рекурсия, так как в ней присутствует вложенность.

// При попытке посчитать при помощи рекурсии 100000 консоль выдаёт ошибку Maximum call stack size exceeded,
// другие варианты справляются с подсчётом