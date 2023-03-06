function getLocalDay(date) {
    let day = date.getDay();
    return day == 0 ? 7 : day;
}

let date = new Date(2021, 0, 3);  // 3 января 2021 года
console.log(getLocalDay(date));  // воскресенье, нужно показать 7