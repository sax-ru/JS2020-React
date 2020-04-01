let menu = document.querySelector(".menu");
let menuItem = document.querySelectorAll(".menu-item");
let titleText = document.querySelector(".title");
let adv = document.querySelector(".adv");
let promptApple = document.querySelector(".prompt");

menu.insertBefore(menuItem[2], menuItem[1]); // Поменяли местами два элемента

// let menuItemNew = menuItem[0].cloneNode(false); // клонировал эл-нт с классом и текстом
// menuItemNew.innerHTML = "Пятый пункт";
// menu.appendChild(menuItemNew);

let menuItemLi = document.createElement("li"); // Добавляем новый li, с классом и текстом
menuItemLi.classList.add("menu-item");
menuItemLi.textContent = "Пятый пункт";
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон

titleText.textContent = "Мы продаем только подлинную технику Apple";  // Заменить текст

adv.style.opacity = "0";  // скрыть элемент рекламы
// adv.remove();  // // Удалить рекламу со страницы

let answer = prompt("Как Вы относитесь к технике apple?", "");

promptApple.textContent = answer;