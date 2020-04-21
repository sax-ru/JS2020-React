// У вас есть код:
//     -----------------------------------------------------------------------------------
//     <input id="age" value="30">
//     let age = document.getElementById('age');
// function showUser(surname, name) {
//     alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
// showUser();
// -----------------------------------------------------------------------------------
//
//     Выведите на экран правильное сообщение, которое берет значение из input
// Написать скрипт в отдельном js файле.
//
//     Проверить, чтобы все работало и не было ошибок в консоли.
//     Добавить папку с уроком на GitHub

let age = document.getElementById('age');

function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.apply(age ,["Pupkin", "Vasya"]);