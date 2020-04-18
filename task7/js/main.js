"use strict";

let startBtn = document.getElementById("start");

let budgetValue = document.getElementsByClassName('budget-value');
let dayBudgetValue = document.getElementsByClassName('daybudget-value');
let levelValue = document.getElementsByClassName('level-value');
let expensesValue = document.getElementsByClassName('expenses-value');
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value');
let incomeValue = document.getElementsByClassName('income-value');
let monthSavingsValue = document.getElementsByClassName('monthsavings-value');
let yearSavingsValue = document.getElementsByClassName('yearsavings-value');

let expensesItem = document.getElementsByClassName("expenses-item");
let expensesBtn = document.getElementsByTagName("button")[0];
let optionalExpensesBtn = document.getElementsByTagName("button")[1];
let countBtn = document.getElementsByTagName("button")[2];

let optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");

let incomeItem = document.querySelector(".choose-income");
let checkSavings = document.querySelector("#savings");
let sumValue = document.querySelector(".choose-sum");
let percentValue = document.querySelector(".choose-percent");
let yearValue = document.querySelector(".year-value");
let monthValue = document.querySelector(".month-value");
let dayValue = document.querySelector(".day-value");


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
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.cash / 30).toFixed(2);
        alert(`Бюджет на 1 день составляет: ${appData.moneyPerDay} руб.`);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 367) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 367 && appData.moneyPerDay < 567) {
            console.log("Средний класс");
        } else if (appData.moneyPerDay > 567) {
            console.log("Олигарх");
        } else {
            console.log("Ошибка!")
        }
    },
    checkSavings: function () {
        if (appData.savings) {
            let save = +prompt("Какова сумма накоплений?");
            let percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            console.log("Доход в месяц с депозита: " + appData.monthIncome);

        }
    },
    chooseOptExpenses: function () {
        let i = 1;
        while (i < 4) {
            let question = prompt("Статья необязательных расходов?", "");

            if (checkString) {
                console.log("done");
                appData.optionalExpenses[i] = question;
                i++;
            } else {
                console.log("Некорректный ввод");
            }
        }
        console.log(appData.optionalExpenses);
    },
    chooseIncome: function () {
        let items = prompt("Что принесет доп. доход? (Перечислите через ,", "");

        if (checkString(items)) {
            console.log("done");
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то ещё?", ""));
            appData.income.sort();
        } else {
            console.log("Некорректный ввод");
            this.chooseIncome();
        }

        // if ((typeof (items)) === "string" && (typeof (items)) != null && items !== "") {
        //     console.log("done");
        //     appData.income = items.split(", ");
        //     appData.income.push(prompt("Может что-то ещё?", ""));
        //     appData.income.sort();
        //
        // } else {
        //     console.log("Некорректный ввод");
        //     this.chooseIncome();
        // }

        appData.income.forEach(function (item, index) {
            console.log(`Способы доп. заработка: ${index+1}: ${item}`);
        })
    }
};

for (let key in appData) {
    console.log(`Наша программа включает в себя данные: ${key} - ${appData[key]}`);
}

function checkString(str) {
    if ((typeof (str)) === "string" && (typeof (str)) != null && str !== "") {
        return true;
    } else {
        return false;
    }

}

