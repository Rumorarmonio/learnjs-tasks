function getMaxSubSum(arr) {
    let max = 0;
    let currentSum = 0;

    for (let item of arr) {
        currentSum += item;
        max = Math.max(max, currentSum);
        if (currentSum < 0)
            currentSum = 0;
    }

    return max;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));