function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log(user.ref.name); // Каким будет результат?

// undefined, так как this при создании объекта в функции равен undefined