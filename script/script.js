  'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};



  let money = 0;
  const income = 'фриланс';
  let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
  let deposit = !!prompt('Есть ли у вас депозит в банке?');
  const mission = 400000;
  const period = 9;


/*let start = function(){                    //функция проверит то, что ввел пользлватель
  money = prompt('Ваш месячный доход?');

  while (!isNumber(money)) {   // если число NaN , если пустая строка , если ничего не ввели
  money = prompt('Ваш месячный доход?');
}
};  
*/

do {
money = prompt('Ваш месячный доход?');
}
while (!isNumber(money));




const showTypeOf = function(data) {
  console.log(typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Возможные расходы: ' , addExpenses.split(', '));

let expenses1,expenses2;

let  getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++)    {               // prompt - наше условие 

      if (i === 0) {                                                   //когда i = 0 выполняется первая иттерация
        expenses1 = prompt('Введите обязательную статью расходов');
      } else if (i === 1) {                                             //когда i = 1 выполняется вторая иттерация
        expenses2 = prompt('Введите обязательную статью расходов');     
      }

do {
sum = prompt('Во сколько это обойдется?');
}
while (!isNumber(sum));

}                       
  console.log(sum);
  return sum;
};


const expensesAmount =  getExpensesMonth();

console.log('Cумму всех обязательных расходов за месяц: ' , expensesAmount);


const getAccumulatedMonth = function () {
  return money - expensesAmount;
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

let target = getTargetMonth();

if ( target > 0) {
  console.log('За какой период будет достигнута цель:' , target)
}
else {
  console.log('Цель не будет достигнута');
}
