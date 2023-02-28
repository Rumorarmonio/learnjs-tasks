if (-1 || 0)
    console.log('first');

if (-1 && 0)
    console.log('second');

if (null || -1 && 1)
    console.log('third');

// выполнилось первое и третье, так как во втором -1 && 0 даёт false,
// а в двух других примерах условие возвращает true