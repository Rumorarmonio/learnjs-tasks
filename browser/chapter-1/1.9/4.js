// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

// 1. clientWidth возвращает число, а getComputedStyle(elem).width – строку с px на конце.

// 2. getComputedStyle не всегда даст ширину, он может вернуть, к примеру, "auto" для строчного элемента.

// 3. clientWidth соответствует внутренней области элемента, включая внутренние отступы padding, а CSS-ширина
// (при стандартном значении box-sizing) соответствует внутренней области без внутренних отступов padding.

// 4. Если есть полоса прокрутки, и для неё зарезервировано место, то некоторые браузеры вычитают его из CSS-ширины
// (т.к. оно больше недоступно для содержимого), а некоторые – нет. Свойство clientWidth всегда ведёт себя одинаково:
// оно всегда обозначает размер за вычетом прокрутки, т.е. реально доступный для содержимого.
