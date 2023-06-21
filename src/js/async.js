'use strict';
/*
 * Синхронний vs Асинхронний JS
 */

// Стек виклику функцій
// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!

// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// Очищення інтервалів і таймаутів clearInterval(intervalID), clearTimeout(timeoutID)

// setTimeout(() => {
//   clearInterval(intervalID);
// }, 3500);

// const intervalID = setInterval(() => {
//   console.count('hi!');
// }, 1000);

setTimeout(() => {
  clearTimeout(timeoutID);
}, 3000);

const timeoutID = setTimeout(() => {
  console.log(true);
}, 3000);
