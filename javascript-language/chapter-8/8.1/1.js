let animal = {
    jumps: null
};

let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // true (взялось из rabbit)

delete rabbit.jumps;

console.log(rabbit.jumps); // null (взялось из animal)

delete animal.jumps;

console.log(rabbit.jumps); // undefined (свойство удалилось из прототипа и его больше нет)
