let myRandom = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

console.log(myRandom(1, 5));