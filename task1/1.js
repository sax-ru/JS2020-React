let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let qwestion1_1 = prompt("Введите обязательную статью расходов в этом месяце");
let qwestion1_2 = prompt("Во сколько обойдется?");

let expenses = {
    [qwestion1_1]: qwestion1_2,
};

let qwestion2_1 = prompt("Введите обязательную статью расходов в этом месяце");
let qwestion2_2 = prompt("Во сколько обойдется?");

expenses[qwestion2_1] = qwestion2_2;


let appData = {
    cash: money,
    timeData: time,
    expenses,
    optionalExpenses: "",
    income: "",
    savings: false,

};

alert(`бюджет на 1 день ${appData.cash / 30} руб.`);

console.log(appData);