  let money = 70000;
  let income = 'фриланс';
  let addExpenses = 'Интернет, Развлечения, Коммуналка'; 
  let deposit = true;
  let mission = 400000;
  let period = 9;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев.' + ' Цель заработать '  + mission + ' рублей');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

let budgetDay = 70000 / 30 ;
console.log(budgetDay);