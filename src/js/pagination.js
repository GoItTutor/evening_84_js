'use strict';

import { JSONPlaceholderAPI } from './jsonplaceholder-api';

import createPostCard from '../templates/posts.hbs';

const postsWrapperEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const postsQuantity = 100;

const jsonplaceholderInstance = new JSONPlaceholderAPI();

jsonplaceholderInstance
  .fetchPosts()
  .then(data => {
    postsWrapperEl.innerHTML = createPostCard(data);
  })
  .catch(err => {
    console.log(err);
  });

const handleLoadMoreBtnClick = () => {
  jsonplaceholderInstance.page += 1;

  if (jsonplaceholderInstance.page >= postsQuantity / 70) {
    loadMoreBtnEl.remove();
  }
  jsonplaceholderInstance
    .fetchPosts()
    .then(data => {
      postsWrapperEl.insertAdjacentHTML('beforeend', createPostCard(data));
    })

    .catch(err => {
      console.log(err);
    });
};

loadMoreBtnEl.addEventListener('click', handleLoadMoreBtnClick);
