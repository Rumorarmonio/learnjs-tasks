console.log(null || 2 && 3 || 4);
// выводится 3, так как сначала выполняется оператор &&, возвращается 3
// затем выполняется выражение null || 3 || 4,
// здесь результатом является первое истинное значение 3