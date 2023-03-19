function f(x) {
    console.log(x);
}

function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

delay(f, 1000)("test");
delay(f, 5000)("test");
