let a = 1, b = 1;

let c = ++a; // 2 префиксная форма вернула новое значение
let d = b++; // 1 постфиксная форма вернула старое значение

console.log(a, b, c, d)

// a = b = 2, так как значение обеих переменных было увеличено 1 раз