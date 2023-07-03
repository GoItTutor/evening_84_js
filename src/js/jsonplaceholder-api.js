'use strict';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export class JSONPlaceholderAPI {
  page = 1;

  fetchPosts() {
    return fetch(`${BASE_URL}/posts?_limit=70&_page=${this.page}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      }
    );
  }
}
