"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
    cash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};


function chooseExpenses() {
    let i = 1;
    while (i < 3) {
        let question1 = prompt("Введите обязательную статью расходов в этом месяце", "");
        let question2 = prompt("Во сколько обойдется?", "");

        if ((typeof (question1)) === "string" && (typeof (question1)) != null && (typeof (question2)) != null
            && question1 !== "" && question2 !== "" && question1.length < 50) {
            console.log("done");
            appData.expenses[question1] = question2;
            i++;
        } else {
            console.log("Некорректный ввод");
        }
    }
}
chooseExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.cash / 30).toFixed(2);
    alert(`Бюджет на 1 день составляет: ${appData.moneyPerDay} руб.`);
    // console.log(appData);
    detectLevel();
}
detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 367) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 367 && appData.moneyPerDay < 567) {
        console.log("Средний класс");
    } else if (appData.moneyPerDay > 567) {
        console.log("Олигарх");
    } else {
        console.log("Ошибка!")
    }
}


function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?");
        let percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        console.log("Доход в месяц с депозита: " + appData.monthIncome);

    }
}
checkSavings();


function chooseOptExpenses() {
    let i = 1;
    while (i < 4) {
        let question = prompt("Статья необязательных расходов?", "");

        if ( (typeof (question)) === "string" && (typeof (question)) !== null && question !== "" && question.length < 50) {
            console.log("done");
            appData.optionalExpenses[i] = question;
            i++;
        } else {
            console.log("Некорректный ввод");
        }
    }
    console.log(appData.optionalExpenses);
}
chooseOptExpenses();