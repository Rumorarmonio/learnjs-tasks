let getLastDayOfMonth = (year, month) => new Date(year, month + 1, 0).getDate();

console.log(getLastDayOfMonth(2021, 3)); // 30
console.log(getLastDayOfMonth(2022, 2)); // 31
console.log(getLastDayOfMonth(2023, 1)); // 28