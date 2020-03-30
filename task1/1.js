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

// for (let i = 1; i < 3; i++) {
//     let question1 = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let question2 = prompt("Во сколько обойдется?", "");
//     appData.expenses[question1] = question2;
// }

let i = 1;
while (i < 3) {
    let question1 = prompt("Введите обязательную статью расходов в этом месяце", "");
    let question2 = prompt("Во сколько обойдется?", "");
    appData.expenses[question1] = question2;
    i++;
}

alert(`бюджет на 1 день ${appData.cash / 30} руб.`);

console.log(appData);