function unique(arr) {
    let unique = [];

    arr.forEach(element => {
        if (!unique.includes(element))
            unique.push(element);
    });

    return unique;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O