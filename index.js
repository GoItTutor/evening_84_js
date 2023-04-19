/*
  Виведіть у консоль загальну кількість яблук та винограду та їх різницю
*/

// const number = 1;

// number = 5;

// let stringValue = `Andrii`;

// console.log(stringValue);

// const apples = 47;

// const grapes = 135;

// console.log(apples + grapes);

// console.log(apples - grapes);

/*
  Заміни вираз перевизначення комбінованим оператором +=
*/

// let students = 100;

// students = students + 50;

// students += 50;

// console.log(students);

/*
  Розбери пріоритет операторів в інструкції присвоєння
*/

// const result = 108 + (223 - 2) * 5;

// console.log(result);

/*
  Напиши скрипт, який виводить у консоль заокруглені значення value

  Використовуй методи Math.round(), Math.floor(), Math.ceil()

  Перевірте, що буде в консолі при значеннях 27.3 та 27.9
*/

// const value = -5.5;

// console.log(Math.round(value));

// console.log(Math.floor(value));

// console.log(Math.ceil(value));

// console.log(Math.trunc(value));

/*
  Склади за допомогою шаблонних рядків речення: A has B bots in stock,
  де A та В - змінні вставлені в рядок
*/

// const companyName = "Cyberdyne Systems";

// const repairBots = 150;

// const defenceBots = 50;

// const result =
//   companyName + " has " + (repairBots + defenceBots) + " bots in stock";

// const result = `${companyName} has ${repairBots + defenceBots} bots in stock`;

// console.log(result);

/*
  Методи рядків та чейнінг

  Напиши скрипт, який розраховує індекс маси тіла людини

  Для цього потрібно розділити вагу в кілограмах на квадрат висоти у метрах

  Вага та висота зберігаються в змінних weight і height, але не як числа, а у вигляді рядків (спеціально для завдання)

  Нецілі числа можуть бути задані у вигляді 24.7 або 24,7 тобто як роздільник дробної частини числа може бути кома

  Індекс маси тіла необхідно округлити до однієї цифри після коми
  */

// const weight = "88,3";
// const height = "1,98";

// const numericWeight = Number(weight.replace(",", "."));
// const numericHeight = Number(height.replace(",", "."));

// console.log(numericWeight);
// console.log(numericHeight);

// const bmi = Number((numericWeight / numericHeight ** 2).toFixed(1));

// console.log(bmi);

// console.log(bmi)

// console.log(true > true);

// console.log(false === "");
