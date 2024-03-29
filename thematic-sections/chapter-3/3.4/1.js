// 1. Почему нужен Origin, если Referer содержит даже больше информации?
// 2. Возможно ли отсутствие Referer или Origin, или это неправильно?

// Нам нужен Origin, потому что иногда Referer отсутствует. Например, когда мы запрашиваем через fetch HTTP-страницу с HTTPS , то Referer нет.

// Content Security Policy  может запретить отправление Referer.

// У fetch есть опции, которые предотвращают отправку Referer и даже позволяют изменять его (в пределах того же сайта).

// Согласно спецификации, Referer является необязательным HTTP-заголовком.

// Именно потому что Referer ненадёжен, был изобретён Origin. Браузер гарантирует наличие правильного Origin при запросах на другой источник.
