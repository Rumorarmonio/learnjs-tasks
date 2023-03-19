function Calculator() {
    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '**': (a, b) => a ** b,
        '%': (a, b) => a % b
    };

    this.calculate = function (str) {
        let strings = str.split(' '),
            a = +strings[0],
            operator = strings[1],
            b = +strings[2];

        return (!this.methods[operator] || isNaN(a) || isNaN(b)) ? NaN :
            this.methods[operator](a, b);
    }

    this.addMethod = (name, func) => this.methods[name] = func;
}

let myCalc = new Calculator;

console.log(myCalc.calculate('6 + 3'));
console.log(myCalc.calculate('6 - 3'));
console.log(myCalc.calculate('6 * 3'));
console.log(myCalc.calculate('6 / 3'));
console.log(myCalc.calculate('6 ** 3'));
console.log(myCalc.calculate('6 % 3'));