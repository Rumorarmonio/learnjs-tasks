let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let messagesRead = new WeakSet();

messagesRead.add(messages[0]);
messagesRead.add(messages[1]);
messagesRead.add(messages[0]);

console.log("Read message 0: " + messagesRead.has(messages[0])); // true

messages.shift();

// символьное свойство вместо имени, которое известно только нашему коду
let isRead = Symbol("isRead");
messages[0][isRead] = true;

console.log(messagesRead[0]);