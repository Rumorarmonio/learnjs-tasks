function f() {
    console.log(this); // ?
}

let user = {
    g: f.bind(null)
};

user.g();

/*
<ref *1> Object [global] {
    global: [Circular *1],
        queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    structuredClone: [Function: structuredClone],
    clearInterval: [Function: clearInterval],
    environment: 24.880800008773804,
        loopStart: -1,
        loopExit: -1,
        idleTime: 0
},
timeOrigin: 1678093947957.466
},
fetch: [AsyncFunction: fetch]
}
*/
