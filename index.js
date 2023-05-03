/*
  1. Основи об'єктів:
  
  - Призначення
  - Створення об'єктів
  - Формат зберігання даних
  - Додавання та зміна властивостей (різниця між . та [])
  - Shorthand запис властивостей
  - Отримання значень з об'єкту
  - Специфіка типу даних об'єкт - передача за посиланням
  - Перебір for...in
*/

// const number = "AH3618AM";

// const car = {
//   mark: "Ford",
//   model: "Mondeo",
//   detailedInfo: {},
//   // number: number,
//   number,
// };

// car.wheels = 4;
// car.isFromUSA = false;

// car.wheels = 10;

// const key = "whee";

// car[key + "ls"] = 4;

// console.log(car.mark);
// console.log(car["ma" + "rk"]);

// console.log(car);

// const user1 = {
//   name: "Olya",
//   age: 35,
//   eyeColor: "blue",
// };

// const user2 = user1;

// user1.eyeColor = "green";

// console.log(user1);
// console.log(user2);

// console.log(user1 === user2);

// console.log(user1);

// for (let keyValue in user1) {
//   console.log(user1[keyValue]);
// }

/*
  2. Напиши скрипт, який для об'єкта user послідовно:
  
  - Додає поле mood зі значенням 'happy'
  - Замінює значення hobby на 'skydiving'
  - Замінює значення premium на false
  - Виводить вміст об'єкта user у форматі ключ: значення,
    для цього скористайся Object.keys()
*/

// const user = {
//   hobby: "guitar",
//   premium: true,
//   occupation: "software engineer",
// };

// user.mood = "happy";
// user.hobby = "skydiving";

// user.premium = false;

// console.log(user);

// for (let key in user) {
//   console.log(`${key}:`, user[key]);
// }

// const keysList = Object.keys(user);

// for (let key of keysList) {
//   console.log(`${key}:`, user[key]);
// }

// console.log(keysList);

/*
  3. Метод Object.values()

  Є об'єкт, де зберігаються зарплати нашої команди. Напиши
  функцію getResult для підсумовування усіх зарплат.

  Функція повинна отримувати об'єкт з інформацію про зарплати та
  повертати загальну їх суму.

  Якщо об'єкт salaries порожній, результат має бути 0 
*/

// const salaries = {
//   Andrii: 3000,
//   Anna: 1200,
//   Sofiya: 2000,
// };

// function getResult(salariesData) {
//   const values = Object.values(salariesData);

//   let totalSum = 0;

//   for (let value of values) {
//     totalSum += value;
//   }

//   return totalSum;
// }

// console.log(getResult(salaries));

/*
  4. Масив об'єктів

  Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає
  масив об'єктів та рядок з назвою каменю. 
  
  Функція рахує і повертає загальну вартість каміння з ім'ям stoneName
*/

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Топаз", price: 500, quantity: 10 },
//   { name: "Аквамарин", price: 200, quantity: 8 },
// ];

// function calcTotalPrice(stonesList, stoneName) {
//   for (let stone of stonesList) {
//     if (stone.name.toLowerCase() === stoneName.toLowerCase()) {
//       return stone.price * stone.quantity;
//     }
//   }

//   return `${stoneName} does not exist in the store`;
// }

// console.log(calcTotalPrice(stones, "ТоПаз"));
// console.log(calcTotalPrice(stones, "Смаfsdfdsрагд"));

/*
  5. Методи об'єкта та робота з this
  
  Напиши скрипт управління особистим кабінетом інтернет-банку
  
  Є об'єкт account, в якому необхідно реалізувати методи для роботи
  з балансом та історією транзакцій
*/

// Типів транзакцій лише два:
// Можна покласти чи зняти гроші з балансу
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   // Поточний баланс
//   balance: 0,

//   // Исторія транзакцій
//   transactions: [],

//   createTransaction(amount, type) {
//     const transaction = {
//       amount,
//       type,
//       id: Math.round(Math.random().toFixed(3) * 1000000) * 1000000,
//     };

//     return transaction;
//   },

//   deposit(amount) {
//     this.balance += amount;

//     const depositTransaction = this.createTransaction(
//       amount,
//       Transaction.DEPOSIT
//     );

//     this.transactions.push(depositTransaction);
//   },

//   withdraw(amount) {
//     if (this.balance < amount) {
//       console.log(
//         `Зняття такої суми (${amount}) не можливе - недостатньо коштів. Баланс акаунту - ${this.balance}`
//       );
//       return;
//     }

//     this.balance -= amount;

//     const withdrawTransaction = this.createTransaction(
//       amount,
//       Transaction.WITHDRAW
//     );

//     this.transactions.push(withdrawTransaction);
//   },
// };

// account.deposit(7000);
// account.deposit(13000);
// account.deposit(7000);
// account.deposit(7000);

// account.withdraw(15000);
account.withdraw(15000);

console.log(account);
// Методи які необхнідно реалізувати:

/*
  Метод createTransaction створює та повертає об'єкт транзакції.

  Кожна транзакція - об'єкт з полями id, amount, type

  Приймає суму та тип транзакції.
*/

/*
  Метод deposit, що відповідає за додавання суми до балансу

  Приймає суму транзакції

  Викликає createTransaction для створення об'єкта транзакції
  та занесення його в історію транзакцій
*/

/*
  Метод withdraw, що відповідає за зняття суми з балансу.

  Приймає суму транзакції

  Якщо сума зняття більша за поточний баланс, виводь повідомлення
  про те, що зняття такої суми не можливе - недостатньо коштів
    
  Викликає createTransaction для створення об'єкта транзакції
  та занесення його в історію транзакцій.
*/

// const user1 = {
//   name: "Vyacheslav",

//   showName: function () {
//     console.log(this.name);
//   },
// };

// // user1.showName();

// const user2 = {
//   name: "Tetyana",
//   showName: user1.showName,
// };

// // user1.showName();
// user2.showName();
