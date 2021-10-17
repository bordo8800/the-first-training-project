// money и time
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("введите дату в формате год-месяц-день");

    while (money == null || isNaN(money) || money == "") {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

function runCycle() {
    for (i = 0; i < 2; i++) {
        let firstQuesion = prompt("Введите обязательную статью расходов в этом месяце");
        let secondQuesion = +prompt("Во сколько обойдется?");


        if ((typeof (firstQuesion)) === 'string' && (typeof (firstQuesion)) != null && (typeof (secondQuesion)) != null &&
            firstQuesion != '' && secondQuesion != '' && firstQuesion.length < 50) {
            console.log("Done");

        } else {
            console.log("Всё пошло не по плану");
            i--;
            alert("Миша,всё хуйня, давай по-новой!"); //тут нужно как-то зациклить возможно, я пока не умею, нужно разобраться!
        }

        appData.expenses[firstQuesion] = secondQuesion;

    };
}

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// for (i = 0; i < 2; i++) {
//     let firstQuesion = prompt("Введите обязательную статью расходов в этом месяце");
//     let secondQuesion = +prompt("Во сколько обойдется?");


//     if ((typeof (firstQuesion)) === 'string' && (typeof (firstQuesion)) != null && (typeof (secondQuesion)) != null &&
//         firstQuesion != '' && secondQuesion != '' && firstQuesion.length < 50) {
//         console.log("Done");

//     } else {
//         console.log("Всё пошло не по плану");
//         i--;
//         alert("Миша,всё хуйня, давай по-новой!"); //тут нужно как-то зациклить возможно, я пока не умею, нужно разобраться!
//     }

//     appData.expenses[firstQuesion] = secondQuesion;

// };

// let i = 0;
// while (i < 2) {
//     let firstQuesion = prompt("Введите обязательную статью расходов в этом месяце");
//     let secondQuesion = +prompt("Во сколько обойдется?");
//     i++;

//     if ((typeof (firstQuesion)) === 'string' && (typeof (firstQuesion)) != null && (typeof (secondQuesion)) != null &&
//         firstQuesion != '' && secondQuesion != '' && firstQuesion.length < 50) {
//         console.log("done");
//     } else {
//         console.log("problems")
//     };
// }

let i = 0;
do {
    let firstQuesion = prompt("Введите обязательную статью расходов в этом месяце");
    let secondQuesion = +prompt("Во сколько обойдется?");
    i++;

    if ((typeof (firstQuesion)) === 'string' && (typeof (firstQuesion)) != null && (typeof (secondQuesion)) != null &&
        firstQuesion != '' && secondQuesion != '' && firstQuesion.length < 50) {
        console.log("done");
    } else {
        console.log("problems")
    };
} while (i < 2);



appData.dailyBudget = appData.budget / 30;

alert("Ваш бюджет на день" + " " + appData.dailyBudget.toFixed(2));

if (appData.dailyBudget < 100) {
    console.log("низкий уровень дохода");
} else if (appData.dailyBudget > 100 && appData.dailyBudget < 2000) {
    console.log("средний уровень дохода");
} else {
    console.log("высокий уровень дохода");
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какие у Вас есть накопления"),
            depositIncome = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * depositIncome;
        alert("доход от процентов в месяц будет " + appData.monthIncome);
    }
};

checkSavings();