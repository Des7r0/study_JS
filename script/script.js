    'use strict';
const buttonCalculate = document.getElementById('start'); 
const buttonPlus1 = document.getElementsByTagName('button')[0];
const buttonPlus2 = document.getElementsByTagName('button')[1];
const checkBox = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const budgetDayValue = document.getElementByClassName('budget_day-value');
const expensesMonthValue = document.getElementsByClassName('expenses_month-value');
const additionalIncomeValue = document.getElementsByClassName('additional_income-value');
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value');
const incomePeriodValue = document.getElementsByClassName('income_period-value');
const targetMonthValue = document.getElementsByClassName('target_month-value');
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('input.income-title');
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelector('input.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');


const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function(){                    
    money = prompt('Ваш месячный доход?');
        while (!isNumber(money)) {   
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
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    sum: 0,
    percentDeposit: 0, 
    moneyDeposit: 0,
    period: 3,
    missionDone: 0,
    asking: function (){
            let cashIncome;
            let itemIncome;
                if (confirm('Есть ли у вас дополнительный источник заработка? ')) {
            itemIncome = prompt('Какой у вас дополнительный заработок?', 'Репетиторство');
                while (isNumber(itemIncome)) {
            itemIncome = prompt('Какой у вас дополнительный заработок?', 'Репетиторство');
                }
            cashIncome = prompt('Сколько вы зарабатываете на этом?', 10000); 
                while (!isNumber(cashIncome)) {
            cashIncome = prompt('Сколько вы зарабатываете на этом?', 10000);
            }
            appData.income[itemIncome] = cashIncome;
            }
            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.deposit = !!confirm('Есть ли у вас депозит в банке?');
            appData.addExpenses = addExpenses.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ,');
            let question;
            let sum = 0;
                for (let i = 0; i < 2; i++)  {         
            question = prompt('Введите обязательную статью расходов' , 
                        'Аренда автомобиля');   
                while (isNumber(question))    {
            question = prompt('Введите обязательную статью расходов' , 
                        'Аренда автомобиля');   
            }                                          
            sum = prompt('Во сколько это обойдется?' , 4000);   
                while (!isNumber(sum)) {
            sum = prompt('Во сколько это обойдется?' , 4000);   
            }
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
    },
    getInfoDeposit: function(){
            if (appData.deposit) {
                appData.percentDeposit = prompt('Какой годовой процент?' , 10);
                while (!isNumber(appData.percentDeposit)) {
                    appData.percentDeposit = prompt('Какой годовой процент?' , 10); 
                }          
                appData.moneyDeposit = prompt('Какая сумма заложена?' , 10000);   
                while (!isNumber(appData.moneyDeposit)) { 
                appData.moneyDeposit = prompt('Какая сумма заложена?' , 10000);   
                }
            }

    },
    calcSavedMoney: function(){
            return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getInfoDeposit();
appData.getBudget();
console.log('Накопления за месяц: ' , appData.budgetMonth);
console.log('Cумму всех обязательных расходов за месяц: ' , appData.sum);
console.log(appData.getStatusIncome());
console.log('Возможные расходы:' ,appData.addExpenses);

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
}