function sayHi() {
    alert(this.name);
}

sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log(bound.test); // undefined

// при вызове bind создаётся новый объект, у которого нет свойства test
