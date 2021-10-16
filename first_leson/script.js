// money и time
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (i = 0; i < 2; i++) {
    let firstQuesion = prompt("Введите обязательную статью расходов в этом месяце");
    let secondQuesion = +prompt("Во сколько обойдется?");

    if ((typeof(firstQuesion)) === 'string' && (typeof(firstQuesion)) != null && (typeof(secondQuesion)) != null
    && firstQuesion != '' && secondQuesion != '' && firstQuesion.length < 50) {
        console.log ("Done");
    } else{ }

    appData.expenses[firstQuesion] = secondQuesion;

};
let dailyBudget = (appData.budget / 30).toFixed(2);
alert("Ваш бюджет на день " + dailyBudget);

