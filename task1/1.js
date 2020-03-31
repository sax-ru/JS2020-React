"use strict";

let money = +prompt("Ваш бюджет на месяц?", "");
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

    if ( (typeof (question1)) === "string" && (typeof (question1)) != null && (typeof (question2)) != null
    && question1 != "" && question2 !="" && question1.length < 50 ) {
        console.log("done");
        appData.expenses[question1] = question2;
        i++;
    } else {

    }

}

appData.moneyPerDay = appData.cash / 30;

alert(`бюджет на 1 день ${appData.moneyPerDay} руб.`);

console.log(appData);

if (appData.moneyPerDay < 367) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 367 && appData.moneyPerDay < 567) {
    console.log("Средний класс");
} else if (appData.moneyPerDay > 567) {
    console.log("Олигарх");
} else {
    console.log("Ошибка!")
}