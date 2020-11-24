  let money = +prompt('Ваш месячный доход?' , '50000');
  const income = 'фриланс';
  let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); 
  let deposit = !!prompt('Есть ли у вас депозит в банке?');
  const mission = 400000;
  const period = 9;

const showTypeOf = function(data) {
  console.log(typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Возможные расходы: ' , addExpenses.split(', '));

let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?' , '10000');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = +prompt('Во сколько это обойдется?' , '10000');



const  getExpensesMonth = function () {
  return amount1+amount2;
}
const monthAmount =  getExpensesMonth();
console.log('Cумму всех обязательных расходов за месяц: ' , monthAmount);


const getAccumulatedMonth = function () {
  return money-monthAmount;
}
let monthProfit =  getAccumulatedMonth();
console.log('Накопления за месяц: ' , monthProfit);

const accumulatedMonth = monthProfit ; 

let budgetDay = accumulatedMonth / 30 ;
console.log('Бюджет на день:', Math.floor(budgetDay));

const getStatusIncome = function () {
if (budgetDay >= 1200) {
  return('У вас высокий уровень дохода');
} else if ((budgetDay >= 600) && (budgetDay < 1200)){
  return('У вас средний уровень дохода');
} else if ((budgetDay < 600) && (budgetDay >= 0)){
  return('К сожалению у вас уровень дохода ниже среднего');
} else { 
  return('Что то пошло не так');
}
}
console.log(getStatusIncome());

const getTargetMonth = function () {
  return Math.ceil(mission/accumulatedMonth);
}
const target = getTargetMonth();
console.log('За какой период будет достигнута цель: ' , target);

