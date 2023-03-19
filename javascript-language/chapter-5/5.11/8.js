function formatDate(date) {
    let diff = new Date() - date,
        sec = Math.floor(diff / 1000),
        min = Math.floor(diff / 60000);

    if (diff < 1000)
        return 'прямо сейчас';

    if (sec < 60)
        return sec + ' сек. назад';

    if (min < 60)
        return min + ' мин. назад';

    date = [
        '0' + date.getDate(),
        '0' + (date.getMonth() + 1),
        '' + date.getFullYear(),
        '0' + date.getHours(),
        '0' + date.getMinutes()
    ].map(element => element.slice(-2));

    return date.slice(0, 3).join('.') + ' ' + date.slice(3).join(':');
}

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));