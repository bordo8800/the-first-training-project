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


let dailyBudget = (appData.budget / 30);
alert("Ваш бюджет на день" + " " + dailyBudget.toFixed(2));