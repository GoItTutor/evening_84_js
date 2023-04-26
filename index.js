"use strict";

// https://www.codewars.com/join?language=javascript
// ---------------Kahoot---------//

// Мутабельні та імутабельні типи даних
// https://developer.mozilla.org/en-US/docs/Glossary/Mutable
// const clients = ["Mango", "Poly", "Ajax"];
// let string = "script";

// // Імутабельні
// string[0] = "q";

// console.log(string);

// // Мутабельні

// clients.splice(1, 1);
// clients[0] = "242244";
// console.log(clients);

// За посиланням
// Складні (якщо говорити правильно то тільки Object)
//  Object
//  Array

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// console.log(arr1 === arr2);

// arr2[0] = 618;

// console.log(arr1);
// console.log(arr2);

// За значенням
// Примітивні
// String
// Number
// Boolean
// null
// undefined

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// b = 11;

// console.log(a);
// console.log(b);

/*
  Example 1 - Базові операції з масивом

  [] літерал масиву

  Властивість length та індексація
  
  Створіть масив genres з елементами Jazz і Blues

  Додайте 'Rock&roll' у кінець масиву

  Виведіть у консоль перший елемент масиву

  Виведіть у консоль останній елемент масиву. 
  Код має працювати для масиву довільної довжини.

  Вставте 'Contry' та 'Reggie' на початок масиву

  Подивиттсь методи push unshift shift splice
*/

// const array = [];

// console.log(array);
// console.log(array[4]);
// console.log(array.length);

// const genres = ["Jazz", "Blues"];

// genres[genres.length] = "Rock&roll";
// genres.push("Rock&roll", 12);

// genres.unshift("Contry", "Reggie");

// console.log(genres);

// console.log(genres[0]);

// console.log(genres[genres.length - 1]);

// genres.pop();

// const genres = ["Jazz", "Blues"];

// genres.splice(0, 1, "Rock&Roll");

// console.log(genres);

/*  
  Example 2 - Масиви та рядки

  Напиши скрипт для обчислення площі прямокутника зі сторонами, 
  значення яких зберігаються в змінній величин у вигляді рядка.
  Значення гарантовано розділені пробілом. 

  Метод split
*/

// const values = "10 120";

// const array = values.split(" ");

// const result = array[0] * array[1];

// console.log(result);

/*
  Example 3 - Перебір масиву

  Напиши скрипт для перебору масиву fruits циклом for.
  Для кожного елемента масиву виведіть у консоль рядок у 
  форматі номер_елемента: значення_елемента. 
  
  Нумерація елементів має починатися з першого.
*/

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let index = 0; index < fruits.length; index += 1) {
//   console.log(`${index + 1}: ${fruits[index]}`);
// }

/*
  Example 4 - Масиви та цикли

  Напиши скрипт, який виводить у консоль ім'я та телефонний 
  номер користувача. У змінних names і phones зберігаються 
  рядки імен та телефонних номерів, розділені комами. 
  
  Порядковий номер імен та телефонів у рядках вказують на 
  відповідність. Кількість імен та телефонів гарантовано однакова.

  Метод split
*/

// const names = "Jacob,William,Solomon,Kate";
// const phones = "38001234567,38001112233,380055566377,38099912233";

// const namesList = names.split(",");
// const phonesList = phones.split(",");

// for (let index = 0; index < namesList.length; index += 1) {
//   console.log(`${namesList[index]}: ${phonesList[index]}`);
// }

/*
  Example 5 - Масиви та рядки

  Напиши скрипт який виводить у консоль усі слова рядка крім першого 
  та останнього. Результуючий рядок не повинен починатися або закінчуватися 
  пробілом. Скрипт повинен працювати для будь-якого рядка.

  методи pop shift join
*/

// const string = " Welcome to the future ";

// const wordsList = string.trim().split(" ");

// 1 variant
// for (let index = 1; index < wordsList.length - 1; index += 1) {
//   console.log(wordsList[index]);
// }

// 2 variant

// wordsList.pop();
// wordsList.shift();

// for (let index = 0; index < wordsList.length; index += 1) {
//   console.log(wordsList[index]);
// }

// console.log(wordsList);

/*
  Example 6 - Масиви та рядки
  Напиши скрипт, який «розвертає» рядок (зворотній порядок літер)
  і виводить його в консоль.

  Методи split reverse join
*/

// const string = "Welcome to the future";

// const reversedString = string.split(" ").reverse().join(" ");

// console.log(reversedString);

// const string = "Welcome to the future";

// const reversedString = string.split("").reverse().join("");

// console.log(reversedString);

/*
  Example 7 - Пошук елемента

  Напиши скрипт пошуку найменшого числа у масиві. 
  Код має працювати для будь-якого масиву чисел. 
  Використовуй цикл for of для розв'язання задачі.
*/

// const numbers = [5, 11, 9];

// let smallestNumber = Infinity;

// for (let value of numbers) {
//   if (value < smallestNumber) {
//     smallestNumber = value;
//   }
// }

// console.log(smallestNumber);

// function func(name) {
//   console.log(name);
// }

// func('Andrii')
