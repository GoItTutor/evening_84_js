'use strict';

// https://habr.com/ru/post/495698/

// https://jsonplaceholder.typicode.com/

const BASE_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${BASE_URL}/udadasdassers`)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  })
  .then(data => {
    console.log('Success', data);
  })
  .catch(err => {
    console.log('Failure', err);
  });
