let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// цикл
function printReverseList(list) {
    let result = [];
    temp = list;

    while (temp) {
        result.push(temp.value);
        temp = temp.next;
    }

    result.reverse().forEach(num => console.log(num));
}

printReverseList(list);

// рекурсия
function printReverseList(list) {
    if (list.next)
        printReverseList(list.next);

    console.log(list.value);
}

printReverseList(list);

// решение с циклом эффективнее, так как в нём нет никакой вложенности в отличие от рекурсии