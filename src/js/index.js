'use strict';

// import Obj, { add } from './math';

// console.log(Obj);
// console.log(add);

// import * as MathModule from './math';

// console.log(MathModule);

// const user = {
//   firstname: 'Pavel',
//   lastname: 'Nekrasov',
//   age: 30,
//   gender: 'male',

//   showName() {
//     console.log(this.firstname);
//   },

//   city: null,
//   occupation: undefined,
//   family: {
//     mom: 'Lidiya',
//   },
//   hobbies: [],
// };

// const userJSON = JSON.stringify(user);

// const userJS = JSON.parse('"Hello!"');

// console.log(userJSON);
// console.log(userJS);

// const newUser = JSON.parse(JSON.stringify(user));

// console.log(newUser);
// console.log(newUser === user);

// console.log(`First`);

// const user = '"Hello!"';

// let userJSON = null;

// try {
//   userJSON = JSON.parse(user);

//   console.log(`Finish of try block`);
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log(`Finish`);
// }

// console.log(userJSON);

// console.log(`Second`);

const user = {
  firstname: 'Tomas',
  lastname: 'Shelby',
  age: 45,
};

localStorage.setItem('user', JSON.stringify(user));

localStorage.setItem('name', JSON.stringify('Andrii'));

const value = JSON.parse(localStorage.getItem('user'));

// localStorage.clear();

localStorage.removeItem('user');
