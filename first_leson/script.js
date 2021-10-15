// money и time
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let firstQuesion = prompt("Введите обязательную статью расходов в этом месяце");
let secondQuesion = +prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        [firstQuesion]:[secondQuesion]
    },
    optionalExpenses: {},
    income: [],
    "savings": false
}
let pricePerDay = (money - secondQuesion)/30;
alert("Ваш буджет на один день" + " " + pricePerDay.toFixed(2));
