login = 'Сотрудник'

let message = login == 'Сотрудник' ? 'Привет' : login == 'Директор' ? 'Здравствуйте' : login == '' ? 'Нет логина' : message = '';

console.log(login, message);