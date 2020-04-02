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




