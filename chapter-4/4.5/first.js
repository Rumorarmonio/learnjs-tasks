let obj = {};

function A() { return obj; }
function B() { return obj; }

console.log(new A() == new B()); // true

// две функции просто возвращают один и тот же объект, определённый до этого