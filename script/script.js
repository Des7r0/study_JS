  'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    start = function(){                    //функция проверит то, что ввел пользлватель
    money = prompt('Ваш месячный доход?');
        while (!isNumber(money)) {   // если число NaN , если пустая строка , если ничего не ввели
    money = prompt('Ваш месячный доход?');
}
};  
start();

let appData = {
    income:  {},
    addIncome: [],
    expenses: {}, 
    addExpenses: [],
    deposit: false, 
    mission: 500000,
    budget : money,
    budgetDay : 0,
    budgetMonth : 0,
    sum : 0,
    period: 3,
    missionDone: 0,
    asking: function (){
            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.deposit = !!prompt('Есть ли у вас депозит в банке?');
            appData.addExpenses = addExpenses.split(', ');
            let question;
            let sum = 0;
                for (let i = 0; i < 2; i++)  {               
                  {                                                  
            question = prompt('Введите обязательную статью расходов');
            }   do  {                                            
            sum = prompt('Во сколько это обойдется?');     
            }
                while (!isNumber(sum));
                appData.expenses[question] = sum;
            }                       
                return sum;
    },

    getExpensesMonth: function () {
            for ( let key in appData.expenses ) { 
            appData.sum += +appData.expenses[key];
            }
            return appData.sum;
    },

    getBudget: function () {               
            appData.budgetMonth = appData.budget - appData.sum;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30); 
            
    },
    getTargetMonth: function () {
            appData.missionDone = Math.ceil(appData.mission / appData.budgetMonth); 
            if ( appData.missionDone > 0) {
            console.log('За какой период будет достигнута цель:' + appData.missionDone + 'месяца/ев');
            }
            else {
            console.log('Цель не будет достигнута');
            return ('Цель будет достигнута за: ' + appData.missionDone + ' месяцев');
            }
    },
    getStatusIncome: function () {
            if (appData.budgetDay >= 1200) {
            return('У вас высокий уровень дохода');
              } else if ((appData.budgetDay >= 600) && (appData.budgetDay < 1200)){
            return('У вас средний уровень дохода');
              } else if ((appData.budgetDay < 600) && (appData.budgetDay >= 0)){
            return('К сожалению у вас уровень дохода ниже среднего');
              } else { 
            return('Что то пошло не так');
              }
    }    
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log('Накопления за месяц: ' , appData.budgetMonth);
console.log('Cумму всех обязательных расходов за месяц: ' , appData.sum);
console.log(appData.getStatusIncome());

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
  }
