const books = document.querySelectorAll('.books'),
book = document.querySelectorAll('.book'),
body = document.querySelector('body'),
h2 = document.querySelectorAll('h2 > a'),
advRemove = document.querySelector('.adv'),
li = document.querySelectorAll('li');

books[0].append(book[2]); 
books[0].prepend(book[1]);
book[4].after(book[3]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

h2[4].textContent = 'Книга 3. this и Прототипы Объектов';

advRemove.remove();

li[3].after(li[6]);
li[6].after(li[8]);
li[47].after(li[55]);
li[55].after(li[49]);
li[48].before(li[50]);
li[25].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');


console.log(li);