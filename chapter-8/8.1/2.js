let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};

console.log(pockets.pen);
console.log(bed.glasses);

// неважно, откуда берётся свойство: из объекта или прототипа, скорость одинаковая
