    'use strict';
const buttonCalculate = document.getElementById('start'); 
buttonCalculate.disabled = true;
const cancelButton = document.querySelector('#cancel');
const incomePlus = document.querySelector('.income_add');
const expensesPlus = document.querySelector('.expenses_add');
const checkBox = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const budgetDayValue = document.querySelector('.budget_day-value');
const expensesMonthValue = document.querySelector('.expenses_month-value');
const budgetMonthValue = document.querySelector('.budget_month-value');
const additionalIncomeValue = document.querySelector('.additional_income-value');
const additionalExpensesValue = document.querySelector('.additional_expenses-value');
const incomePeriodValue = document.querySelector('.income_period-value');
const targetMonthValue = document.querySelector('.target_month-value');
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('input.income-title');
const expensesTitle = document.querySelector('input.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const incomeAmount = document.querySelector('.income-amount');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const namePlaceholderInputs = document.querySelectorAll('.data input[placeholder="Наименование"]');
const digitPlaceholderInputs = document.querySelectorAll('.data input[placeholder="Сумма"]');
let expensesItems = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll('.income-items');
let periodAmount = document.querySelector('.period-amount');

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
    income:  {},
    addIncome: [],
    expenses: {}, 
    addExpenses: [],
    deposit: false, 
    incomeMonth: 0, 
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    sum: 0,
    percentDeposit: 0, 
    moneyDeposit: 0,
    missionDone: 0,
    start: function(){               
            [...document.querySelectorAll('.data input')].map(item => item.disabled = true);
            this.budget = +salaryAmount.value;
            this.getExpenses();
            this.getIncome();
            this.getAddIncome();
            this.getExpensesMonth();
            this.getAddExpenses();
            this.getBudget();
            this.getAddIncome();
            this.showResult();
            buttonCalculate.style.display = 'none';
            cancelButton.style.display = 'block';
    },

    reset: function() {
            this.deposit = false;
            this.percentDeposit = 0;
            this.moneyDeposit = 0;
            this.income = {};
            this.incomeMonth = 0;
            this.addIncome = [];
            this.expenses = {};
            this.sum = 0;
            this.addExpenses = [];
            this.budget = 0;
            this.budgetDay = 0;
            this.budgetMonth = 0;
            this.missionDone = 0;
            [...document.querySelectorAll('input')].map(item => item.value = ''); 
            [...document.querySelectorAll('.data input')].map(item => item.disabled = false); 
            cancelButton.style.display = 'none';
            buttonCalculate.style.display = 'block';
            buttonCalculate.disabled = true;
            incomePlus.removeAttribute('disabled', '');
            expensesPlus.removeAttribute('disabled', '');
            buttonCalculate.setAttribute('disabled', '');
            periodSelect.value = 1;
            periodAmount.textContent = periodSelect.value;
                for (let i = 1; i < incomeItems.length; i++) {
                if (incomeItems[i] !== 0) {
                    incomeItems[i].remove();
                    incomePlus.style.display = 'block';
                    }
                }
                for (let i = 1; i < expensesItems.length; i++) {
                if (expensesItems[i] !== 0) {
                    expensesItems[i].remove();
                    expensesPlus.style.display = 'block';
                    }
    }
    },

    showResult: function() {
            budgetMonthValue.value = this.budgetMonth;
            budgetDayValue.value = this.budgetDay;
            expensesMonthValue.value = this.sum;
            additionalExpensesValue.value = this.addExpenses.join(', ');
            additionalIncomeValue.value = this.addIncome.join(', ');
            targetMonthValue.value = this.getTargetMonth();
                periodSelect.addEventListener('input', () => {
                incomePeriodValue.value = this.calcSavedMoney();
    }); 
    },

    addExpensesBlock: function(){
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem,expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
                if(expensesItems.length === 3) {
                    expensesPlus.style.display = 'none';
                }      
    },    

    addIncomeBlock: function(){
            let cloneIncomeItem = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
            incomeItems = document.querySelectorAll('.income-items');
                if(incomeItems.length === 3) {
                    incomePlus.style.display = 'none';
                }      
    },    

    getExpenses: function(){ 
            expensesItems.forEach(item => {     
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                this.expenses[itemExpenses] = +cashExpenses; 
            }
        });
    },

    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(item => {
            item = item.trim();
            if (item !== ''){
                    this.addExpenses.push(item);
            }
        });
    },

    getAddIncome: function (){
        additionalIncomeItem.forEach(item => {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        });
    },

    getIncome: function() {
             incomeItems.forEach(item => {     //псевдомассив
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
                if(itemIncome !== '' && cashIncome !== ''){
                this.income[itemIncome] = cashIncome; 
            }
            });
                for (let key in this.income) {
                    this.incomeMonth += +appData.income[key];
                }
        },

    getExpensesMonth: function () {
                for ( let key in this.expenses ) { 
            this.sum += +this.expenses[key];
            }
                return this.sum;
    },

    getBudget: function () {               
            this.budgetMonth = this.budget + this.incomeMonth - this.sum;
            this.budgetDay = Math.floor(this.budgetMonth / 30); 
            
    },

    getTargetMonth: function () {
            return  Math.ceil(targetAmount.value / this.budgetMonth); 
    },

    // getStatusIncome: function () {
    //             if (appData.budgetDay >= 1200) {
    //         return('У вас высокий уровень дохода');
    //             } else if ((appData.budgetDay >= 600) && (appData.budgetDay < 1200)){
    //         return('У вас средний уровень дохода');
    //             } else if ((appData.budgetDay < 600) && (appData.budgetDay >= 0)){
    //         return('К сожалению у вас уровень дохода ниже среднего');
    //             } else { 
    //         return('Что то пошло не так');
    //             }
    // },

    // getInfoDeposit: function(){
    //         if (appData.deposit) {
    //             appData.percentDeposit = prompt('Какой годовой процент?' , 10);
    //             while (!isNumber(appData.percentDeposit)) {
    //                 appData.percentDeposit = prompt('Какой годовой процент?' , 10); 
    //             }          
    //             appData.moneyDeposit = prompt('Какая сумма заложена?' , 10000);   
    //             while (!isNumber(appData.moneyDeposit)) { 
    //             appData.moneyDeposit = prompt('Какая сумма заложена?' , 10000);   
    //             }
    //         }

    // },
    calcSavedMoney: function(){
            return this.budgetMonth * periodSelect.value;
    }
};
cancelButton.addEventListener('click', appData.reset.bind(appData));
buttonCalculate.addEventListener('click', appData.start.bind(appData));
salaryAmount.addEventListener('input', () => buttonCalculate.disabled = salaryAmount.value.trim() === '');
incomePlus.addEventListener('click' , appData.addIncomeBlock);
expensesPlus.addEventListener('click' , appData.addExpensesBlock);
periodSelect.addEventListener('change', function() {
periodAmount.textContent = periodSelect.value;
});



// console.log('Накопления за месяц: ' , appData.budgetMonth);
// console.log('Возможные расходы:' ,appData.addExpenses);

// for (let key in appData) {
//     console.log('Наша программа включает в себя данные: ' + key);
// }

