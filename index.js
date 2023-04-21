// 1. Що буде виведено у консоль ?

// console.log(10 >= "7");

// console.log("2" > "12");

// console.log("2" < "12");

// console.log("4" == 4);

// console.log("6" === 6);

// console.log("false" === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log("0" == false);

// console.log("0" === false);

// console.log("Papaya" < "papaya");

// console.log("Papaya" === "papaya");

// console.log(undefined == null);

// console.log(undefined === null);

// if (5 > 7) {
//   console.log("Більше!");
// } else if (5 > 5) {
//   console.log("Рівне!");
// } else {
//   console.log("Менше!");
// }

/*
  2. Використовуючи конструкцію if...else та prompt, напиши код, який 
  запитуватиме: 'Який стандарт мови JavaScript?'. Якщо користувач вводить
  ECMAScript, то показуй alert з рядком 'Вірно!', інакше - 'Не знаєте? ECMAScript!'
*/

// const inputText = prompt("Який стандарт мови JavaScript?");

// console.log(inputText);

// if (inputText.toLowerCase() === "ecmascript") {
//   console.log("Вірно!");
// } else {
//   console.log("Не знаєте? ECMAScript!");
// }

/*
  3. Напиши скрипт, який приводить у консоль рядок 'Це додатнє число', якщо
  в prompt користував ввів число більше за нуль. Якщо було введено нуль,
  виводь у консоль рядок 'Це нуль'. Якщо передали від'ємне число, у консолі
  має бути рядок 'Це від`ємне число'
*/

// const numberFromPrompt = Number(prompt("Write your random number"));

// if (numberFromPrompt > 0) {
//   console.log("Це додатнє число");
// } else if (numberFromPrompt === 0) {
//   console.log("Це нуль");
// } else {
//   console.log("Це від`ємне число");
// }

/*
  4. Напиши скрипт, який перевіряє чи закінчується значення змінної link
  символом '/'. Якщо ні, додай у кінець посилання цей символ  
*/

// let link = "https://instagram.com/andrii_shevchukk";

// if (!link.endsWith("/")) {
//   link += "/";
// }

// console.log(link);

/*
  5. Напиши скрипт для відображення дедлайну - часу здачі проєкту. Використовуй
  конструкцію switch...case

  Якщо до дедлайну 0 днів - виведи рядок 'Cьогодні'
  Якщо до дедлайну 1 день - виведи рядок 'Завтра'
  Якщо до дедлайну 2 дні - виведи рядок 'Післязавтра'
  Якщо до дедлайну 3+ днів - виведи рядок 'Можна відпочити :)'
*/

// const deadlineDays = 5;

// switch (deadlineDays) {
//   case 0:
//     console.log("Cьогодні");
//     break;

//   case 1:
//     console.log("Завтра");
//     break;

//   case 2:
//     console.log("Післязавтра");
//     break;

//   default:
//     console.log("Можна відпочити :)");
//     break;
// }

// debugger;

// for (let index = 1; index <= 10; index += 1) {
//   console.log(index);
// }

/*
  6. Напиши скрипт котрий порахує суму чисел від 1 до 10 та виведе у консоль результат 
*/

// debugger;

// let total = null;

// for (let index = 1; index <= 10; index += 1) {
//   total += index;
// }

// console.log(total);

/*
  7. Напиши цикл for який виводить у консоль браузера числа за зростанням від
  min дo max, але якщо число кратне 5
*/

// const min = 16;

// const max = 100;

// for (let index = min; index <= max; index += 1) {
//   if (index % 5 !== 0) {
//     continue;
//   }

//   console.log(index);
// }

/*
  8. Напишіть скрипт який порахує скільки на проміжку від from до to було чисел,
  які є кратними 7
*/

// const from = 5;

// const to = 21;

// let total = null;

// for (let index = from; index <= to; index += 1) {
//   if (index % 7 === 0) {
//     total += 1;
//   }
// }

// console.log(total);

/* 
  9. Напишіть скрипт для світлофора, де користувач може ввести назву кольору
  у prompt і в залежності від того який був введений колір відображатимуться
  різні повідомлення через alert. Використовуй конструкцію switch case
  
  red - 'STOP!!!!'

  green - 'GO!'

  yellow - 'Wait a little!'
*/

// const trafficLightColor = prompt("Write your color").toLowerCase();

// switch (trafficLightColor) {
//   case "red":
//     alert("STOP!!!!");
//     break;

//   case "green":
//     alert("GO!");
//     break;

//   case "yellow":
//     alert("Wait a little!");
//     break;

//   default:
//     alert("This color for traffic light is undefined");
//     break;
// }

/*
  10. Напиши скрипт який буде просити нас ввести число більше за 100, доки
  ми таке не введемо
*/

// for (
//   let promptText = null;
//   Number(promptText) <= 100;
//   promptText = prompt(`Write number that is bigger than 100`)
// ) {}

let index = 1;

debugger;

do {
  console.log(index);
  index += 1;
} while (false);
