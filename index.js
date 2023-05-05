"use strict";

/*
  1. Операція spread як заміна concat і slice
*/

//*  Копія масиву

// const array = [1, 2, 3, 4, 5];

// const copiedArray = array.concat();

// const copiedArray = [...array];

// console.log(copiedArray);

// console.log(copiedArray === array);

//* Об'єднання масивів через spread замість concat

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9];

// const joinedArray = array1.concat(array2);
// const joinedArray = [...array1, ...array2];

// console.log(joinedArray);

/*
  2. Копія об'єкту

  - Перезапис однакових ключів при копіюванні
*/

// const user = {
//   firstName: "Andrii",
//   lastName: "Shevchuk",
//   age: 30,
// };

// const user2 = {
//   ...user,
//   friends: ["Olya", "Mariya", "Ivan", "Mykola"],
//   hairColor: "brown",
//   age: 50,
// };

// console.log(user2 === user);

// console.log(user2);

/*
  3. Spread + Rest

  Напишіть функцію getMinNumber яка приймає довільну кількість чисел
  та повертає найменше із них
*/

// function getMinNumber() {
//   return Math.min(...arguments);
// }

// function getMinNumber(...rest) {
//   return Math.min(...rest);
// }

// console.log(getMinNumber(1, 0, 618, -Infinity, 5));

/*
  4. Деструктуризація об'єктів, які проблеми вирішує

  Напишіть деструктуризуюче присвоювання, яке:

  властивість firstName присвоїть у змінну firstName

  властивість age присвоїть у змінну userAge

  властивість isAdmin присвоїть у змінну isAdmin (false, по дефолту
  якщо, у об'єкта данної властивості не буде)

  всі інші властивості зібрати у об'єкт features
*/

// const user = {
//   firstName: "Andrii",
//   lastName: "Shevchuk",
//   age: 30,
//   eyeColor: "green",
//   hobbies: [],
//   isAdmin: true,
// };

// const { isAdmin = false, age: userAge = 50, firstName, ...features } = user;

// console.log(firstName, userAge, isAdmin, features);

// const user = {
//   firstName: "Andrii",
//   lastName: "Shevchuk",
//   age: 30,
//   eyeColor: "green",
//   hobbies: [],
//   isAdmin: true,
// };

// const firstName = user.firstName;

// const userAge = user.age;

// const isAdmin = user.isAdmin || false;

// console.log(firstName, userAge, isAdmin);

// const features = {
//   lastName: user.lastName,
//   lastName: user.lastName,
//   lastName: user.lastName,
//   lastName: user.lastName,
// }

/*
  5. Глубока деструктуризація об'єктів

  Потрібно дістати значення усіх властивостей, включно
  з вкладеними у об'єкт langs
*/

// const team = {
//   number: 4,
//   flag: "./images/flag.jpg",
//   employees: ["Anton", "Oleg", "Ronnie", "Carr"],
//   langs: {
//     original: "uk",
//     secondary: "en",
//   },
// };

// const {
//   number,
//   flag,
//   employees,
//   langs: { original, secondary },
// } = team;

// console.log(number, flag, employees, original, secondary);

/*
  6. Деструктуризація масивів
*/

/*
  Дістати перший та третій елементи масиву, всі інші після 
  третього занести в окремий масив
*/

// const names = [
//   "Herbert Todd",
//   "Belle Soto",
//   "Roger Marsh",
//   "Ethan Lindsey",
//   "Leo Dicaprio",
//   "Arnold Polo",
// ];

// const [first, , third, ...rest] = names;

// console.log(first, third, rest);

/*
  Дістати значення кольорів та властивість alpha
*/

// const rgb = [0, 255, 34];

// const [red, green, blue, alpha = 1] = rgb;

// console.log(red, green, blue, alpha);

/*
  У нас є об'єкт salaries з зарплатами

  Створіть функцію topSalary(salaries), яка повертає ім'я найбільш
  високооплачуваного працівника

  Якщо об'єкт salaries пустий то повернути null

  Якщо декілька людей з одною тою самою зарплатою є найбільш високооплачуваними, 
  можна повернути будь-якого з них
 
  Використовуйте Object.entries та деструктуризацію, щоб перебрати пари ключ/значение.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(salariesData) {
//   let topPaidEmployeeName = null;
//   let topSalary = null;

//   const entries = Object.entries(salariesData);

//   for (let [name, salary] of entries) {
//     if (topSalary < salary) {
//       topSalary = salary;
//       topPaidEmployeeName = name;
//     }
//   }

//   return topPaidEmployeeName;
// }

// console.log(topSalary(salaries));

/*
  7. Паттерн 'об'єкт параметрів', яку проблему вирішує

  Перепишіть функцію sayHi, щоб вона відповідала заданому паттерну
*/

// function sayHi(name, age, height, weight) {
//   console.log(
//     `Hi, ${name}! Your age is ${age}, your heigth is ${height}, your weight is ${weight}`
//   );
// }

// sayHi(13, "Olya", 160, 50);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// function sayHi({ height, weight, name, age }) {
//   console.log(
//     `Hi, ${name}! Your age is ${age}, your heigth is ${height}, your weight is ${weight}`
//   );
// }

// sayHi({ name: "Zoya", age: 25, height: 170, weight: 55 });

// function sayHi([name, age]) {
//   console.log(`Hi, ${name}! Your age is ${age}`);
// }

// sayHi(["Yuliya", 23]);

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";

  return { completed, category, priority, ...data };
}

makeTask({ text: "Some text" });
