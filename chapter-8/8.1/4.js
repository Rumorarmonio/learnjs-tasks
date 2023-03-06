let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],
    __proto__: hamster
};

let lazy = {
    stomach: [],
    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// Теперь живот второго хомяка пуст
console.log(lazy.stomach); // ничего

// Задача решилась простым созданием массивов stomach для каждого хомяка
