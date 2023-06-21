'use strict';
// Створення нової дати

// const date = new Date(2020, 2, 5, 14, 5, 2);

// Методи дат

// const date = new Date();

// console.log(date);

// date.setFullYear(2025);

// console.log(date);

//? TASK 01
// Створіть об'єкт Date для дати: 20 лютого 2012 року, 3 години 12 хвилин.

// const date = new Date(2012, 1, 20, 3, 12);

// const currentDate = Date.now();

// console.log(currentDate === currentDate);

//? TASK 02
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const weeksDays = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

// const getWeekDay = date => {
//   console.log(weeksDays[date.getDay()]);
// };

// console.log(getWeekDay(new Date(2023, 5, 20)));

//? TASK 03
// Створіть функцію getLastDayOfMonth(year, month), яка повертає останнє число місяця.
// Інколи це 30, 31 або навіть 28/29 у лютому.
// Параметри:
// year – рік з чотирьох цифр, наприклад, 2012.
// month – місяць від 0 до 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

// const getLastDayOfMonth = (year, month) =>
//   new Date(year, month + 1, 0).getDate();

// Date.prototype.getLastDayOfMonth = function () {
//   return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
// };

// console.log(new Date().getLastDayOfMonth());

// const outerDayEl = document.querySelector('.date-outer');

// const butonsEls = document.querySelectorAll('button');

// let date = new Date();

// outerDayEl.textContent = date;

// butonsEls.forEach(el => {
//   el.addEventListener('click', e => {
//     date.setDate(
//       date.getDate() + (e.target.classList.contains('move-next-btn') ? 1 : -1)
//     );

//     outerDayEl.textContent = date;
//   });
// });

// nextDayBtnEl.addEventListener('click', () => {
//   date.setDate(date.getDate() + 1);

//   outerDayEl.textContent = date;
// });

// prevDayBtnEl.addEventListener('click', () => {
//   date.setDate(date.getDate() - 1);

//   outerDayEl.textContent = date;
// });

// let counter = 0;

// const getCounterValue = () => ++counter;

// console.log(getCounterValue());
// console.log(getCounterValue());
// console.log(getCounterValue());
// console.log(getCounterValue());
// console.log(getCounterValue());
