"use strict";

// const user = {
//   name: "Andrii",
//   age: 45,
//   height: 200,
//   weight: 70,
//   isAdmin: true,
//   family: {
//     mom: "Nadiya",
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.height);
// console.log(user.weight);

// const {
//   //   name: userName,
//   //   age,
//   //   height,
//   //   weight,
//   //   isAdmin: isUserAdmin = false,
//   family: { mom },
// } = user;

// console.log(mom);

// console.log(height, userName, height, weight, isUserAdmin);

// const greetUser = (username, age, greeting) => {
//   console.log(`${greeting}, ${username}, your age is ${age}`);
// };

// greetUser(45, "Hello!", "Andrii");

// const greetUser = (props) => {
//   const { username, age, greeting } = props;

//   console.log(`${greeting}, ${username}, your age is ${age}`);
// };

// greetUser({ greeting: "Greeting!", username: "Nadiya", age: 23 });

// const greetUser = ([age, name]) => {
//   console.log(`${age}, ${name}`);
// };

// greetUser([50, "Andrii"]);

// const HighOrderFunction = (callback, data) => {
//   callback(data);
// };

// HighOrderFunction(console.log, "Hello, Andrii!");

// delete Array.prototype.map;

// Array.prototype.map = function (callback) {
//   const newArray = [];

//   for (let index = 0; index < this.length; index += 1) {
//     newArray.push(callback(this[index], index, this));
//   }

//   return newArray;
// };

// const result = [1, 2, 3, 4, 5].map((el, index) => index);

// console.log(result);

// let value = 0;

// const counter = () => {
//   console.log(++value);
// };

// counter();
// counter();
// counter();
// counter();

// console.log(value);

// const user = {
//     name: "Andrii",
//     age: 45,
//     height: 200,
// };

// user[(user.name = "Andrii")] = "name";

// console.log(user);

// const user = {
//   name: "Andrii",
//   age: 45,
//   height: 200,
// };

// const getKeyByValue = (obj, valueFromObject) => {
//   for (let [name, value] of Object.entries(obj)) {
//     if (value === valueFromObject) {
//       return name;
//     }
//   }
// };

// console.log(getKeyByValue(user, 200));

// (function sayHi() {
//   console.log(`Hello!`);
// })();

// sayHi();

// function arrowFunc() {
//   console.log(this.name);
// }

// const user = {
//   name: "Andrii",
//   age: 45,
//   height: 200,
//   logName: arrowFunc,
// };

// user.logName();

// function arrowFunc() {
//   console.log(this.name);
// }

// arrowFunc.call({ name: "Andrii" });
// arrowFunc.apply({ name: "Andrii" });

// const bindedFunc = arrowFunc.bind({ name: "Andrii" });

// bindedFunc();

// яку запис if (), правильно використовувати??
// const max = 100;
// const min = 80;

// for (let i = min; i >= min && i <= max; i += 1) {
//   // if (!(i % 5)) {
//   //   console.log(i);
//   // }
//   //   if (i % 5 === 0) {
//   //     console.log(i);
//   //   }
// }

// function logCarParams() {
//   console.log(`${this.mark} ${this.model} has ${this.wheelsCount} wheels`);
// }

// const boundFunc = logCarParams
//   .bind({
//     mark: "Ford",
//     model: "Focus",
//     wheelsCount: 4,
//   })
//   .bind({});

// boundFunc();

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes);

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

const makeCounter = () => {
  let iterator = 0;

  return () => {
    console.log(++iterator);
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

counter1();
counter1();
counter1();
counter1();

counter2();
counter2();
