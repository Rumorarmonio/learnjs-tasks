let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
})

arr[2]();

// вывелось: 'a', 'b', [Function (anonymous)]