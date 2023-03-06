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
function printList(list) {
    while (list) {
        console.log(list.value);
        list = list.next;
    }
}

printList(list);

// рекурсия
function printList(list) {
    console.log(list.value);
    if (list.next != null)
        printList(list.next);
}

printList(list);

// решение с циклом эффективнее, так как в нём нет никакой вложенности в отличие от рекурсии