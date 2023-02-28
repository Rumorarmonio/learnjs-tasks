function getSecondsToday() {
    let now = new Date(),
        today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return Math.round((now - today) / 1000);
}

console.log(getSecondsToday());