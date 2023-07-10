'use strict';

/*
 * async/await
 * асинхронна (async) функція Завжди повертає проміс.
 * await змушує функцію чекати виконання промісу.
 * await не можна використовувати поза асинхронними функціями.
 * try/catch для відлову помилок
 */

// const greet = async username => {
//   console.log(1);

//   const response = await fetch('https://jsonplaceholder.typicode.com');

//   console.log(response);

//   console.log(2);
// };

// greet();

// console.log(1);

// greet();

// console.log(3);

// const getSum = async (a, b) => a + b;

// getSum(1, 2).then(data => {
//   console.log(data);
// });

// console.log(getSum(1, 1));

const BASE_URL = 'https://jsonplaceholder.typicode.com';

//? TASK 01
// Перепиши функцію на синтаксис async/await

// const loadPosts = url => {
//   return fetch(url).then(postsResponse => {
//     if (!postsResponse.ok) {
//       throw new Error(postsResponse.status);
//     }

//     return postsResponse.json();
//   });
// };

// const loadPosts = async url => {
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return await response.json();
// };

// const loader = async () => {
//   try {
//     console.log(await loadPosts(`${BASE_URL}/posts`));
//   } catch {
//     console.log(`Error happened!`);
//   }
// };

// loader();

// loadPosts(`${BASE_URL}/posts`)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
