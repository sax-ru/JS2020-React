"use strict";

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    cash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};


let question1_1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let question1_2 = prompt("Во сколько обойдется?", "");

appData.expenses[question1_1] = question1_2;


let question2_1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let question2_2 = prompt("Во сколько обойдется?", "");

appData.expenses[question2_1] = question2_2;


alert(`бюджет на 1 день ${appData.cash / 30} руб.`);

console.log(appData);