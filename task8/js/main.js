"use strict";

let startBtn = document.getElementById("start");

let budgetValue = document.getElementsByClassName('budget-value')[0];
let dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName("expenses-item");
let expensesItemName = document.getElementsByClassName("expenses-item-name");
let expensesItemPrice = document.getElementsByClassName("expenses-item-price");

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


let money, time;
expensesBtn.disabled = true;
expensesBtn.classList.add("btn-disable");

optionalExpensesBtn.disabled = true;
optionalExpensesBtn.classList.add("btn-disable");

countBtn.disabled = true;
countBtn.classList.add("btn-disable");

startBtn.addEventListener("click", function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
    // while (!checkNumber(money)) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
    expensesBtn.classList.remove("btn-disable");
    optionalExpensesBtn.classList.remove("btn-disable");
    countBtn.classList.remove("btn-disable");
});

expensesBtn.addEventListener("click", function () {
    let sum = 0;
    let i = 0;
    while (i < expensesItemName.length) {
        let question1 = expensesItemName[i].value;
        let question2 = expensesItemPrice[i].value;

        // if ((typeof (question1)) != null && (typeof (question2)) != null
        //     && question1 != "" && question2 != "" && question1.length < 50) {
        if (checkEmpty(question1) && checkNumber(question2)) {
            appData.expenses[question1] = question2;
            sum += +question2;
            i++;
        } else {
            console.log("Некорректный ввод");
            appData.expenses = {};
            break;
        }

    }
    expensesValue.textContent = sum;
    appData.expensesSum = sum;
});

optionalExpensesBtn.addEventListener("click", function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let question = optionalExpensesItem[i].value;
        if (checkEmpty(optionalExpensesItem[i])) {
            appData.optionalExpenses[i] = question;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
        } else {
            optionalExpensesItem = {};
            console.log("Некорректный ввод 2");
            break;
        }
    }
});

countBtn.addEventListener("click", function () {

    if (appData.budget !== undefined) {

        appData.moneyPerDay = ((appData.budget - appData.expensesSum) / 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 367) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 367 && appData.moneyPerDay < 567) {
            levelValue.textContent = "Средний класс";
        } else if (appData.moneyPerDay > 567) {
            levelValue.textContent = "Олигарх";
        } else {
            levelValue.textContent = "Ошибка!";
        }
    } else {
        dayBudgetValue.textContent = "Не введен доход!";
    }
});

incomeItem.addEventListener("input", function () {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function () {
    if (appData.savings === true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener("input", function () {
    if (appData.savings === true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});

percentValue.addEventListener("input", function () {
    if (appData.savings === true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};


function checkNumber(str) {
    return (!isNaN(str) && str != null && str !== "");
}

function checkEmpty(str) {
    return ((typeof (str)) != null && str !== "");
}

