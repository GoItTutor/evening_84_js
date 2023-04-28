/*
  1. Приклади з областями видимості
*/

// -------------------------------//

// let a = 10;

// if (true) {
//   const a = 5;
// }

// console.log(a);

// let a = 10;

// {
//   let a = 5;

//   console.log(a);
// }

// ------------------------------//
// const b = 10;

// if (true) {
//   // let b = 5;

//   // b = 15;

//   console.log(b);
// }

// console.log(b);

// ------------------------------//
// let c = 10;

// if (true) {
//   // let c = 100;
//   c = 1;
//   if (true) {
//     // let c = 25;
//     c = 15;
//   }
// }

// console.log(c);

// ------------------------------//

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// let total = 0;

// for (const number of numbers) {

//     total += number;
//     console.log(total);

// }

// console.log(total);

/*
  2. Створення та види функцій

  - Призначення
  - Cигнатура функції (синтаксис)
  - Що таке параметр, а що таке аргумент?
  - Параметри по замовчуванню
  - Дериктива return
  - Всплиття function declaration
*/

// function showName(name = "Anonymous", age = "unknown") {
//   console.log(`Hi, ${name}! Your age is ${age}`);
// }

// showName(undefined, 30);

// console.log(getSum(5, 7));

// function getSum(a, b) {
//   return a + b;
// }

// const result = getSum(1, 5);

// console.log(result);

// function expression
// викликається тільки після оголошення

// const getSum = function (a, b) {
//   return a + b;
// };

// console.log(getSum(7, 12));

/*
  3. Псевдомасив arguments

  Написати функцію getSum, яка повертає суму переданих у неї
  аргументів

  Використати цикл for для вирішення задачі
*/

// function getSum() {
//   let total = 0;

//   for (let index = 0; index < arguments.length; index += 1) {
//     total += arguments[index];
//   }

//   return total;
// }

// console.log(getSum(1, 5, 3, 10, 20));

/*
  4. Стек викликів

  Розібрати роботу стеку викликів на прикладі функцій:
*/

// function foo() {
//   console.log("start foo");

//   console.log("end foo");
// }

// function boo() {
//   console.log("start boo");

//   foo();

//   console.log("end boo");
// }

// boo();

/*
  5. Практичне завдання

  Напишіть функції для роботи з колекцією навчальних курсів courses:
  
  addCourse(name) - додає курс в кінець колекції, якщо раніше він не 
  був доданий

  removeCourse(name) - видаляє курс з колекції

  updateCourse(oldName, newName) - замінює назву курсу на нову
*/

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(name) {
//   if (!courses.includes(name)) {
//     courses.push(name);
//   }
// }

// 1 variant
// function removeCourse(name) {
//   const courseIndex = courses.indexOf(name);

//   if (courseIndex !== -1) {
//     return;
//   }

//   courses.splice(courseIndex, 1);
// }

// 2 variant

// function removeCourse(name) {
//   const courseIndex = courses.indexOf(name);

//   if (courseIndex !== -1) {
//     courses.splice(courseIndex, 1);
//   }
// }

// function updateCourse(oldName, newName) {
//   const courseIndex = courses.indexOf(oldName);

//   if (courseIndex !== -1) {
//     courses.splice(courseIndex, 1, newName);
//   }
// }

// addCourse("React Native");

// removeCourse("HTML");

// updateCourse("CSS", "HTML&CSS");

// console.log(courses);

// let iteration = 0;

// function b() {
//   iteration += 1;

//   console.log("Function is working", iteration);

//   b();
// }

// b();

// function longestString() {
//   let longest = "";

//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i].length > longest.length) {
//       longest = arguments[i];
//     }
//   }

//   return longest;
// }
// console.log(longestString(`1`, `12`, `2`, `53535`));

const fruits = ["apple", "orange", "banana", "onion", "kiwi"];

for (let index = 0; index < fruits.length; index += 1) {
  console.log(`${index}: ${fruits[index]}`);
}
