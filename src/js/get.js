'use strict';

import axios from 'axios';

/*
 * Method (GET).
 */

const BASE_URL = 'http://localhost:3000';

// const getComments = () =>
//   fetch(`${BASE_URL}/comments`, { method: 'GET' }).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });

const getComments = () => axios.get(`${BASE_URL}/comments`);

getComments()
  .then(response => console.log(response.data))
  .catch(console.warn);
