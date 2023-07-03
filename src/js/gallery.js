'use strict';
// https://unsplash.com/

import { UnsplashAPI } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const inputEl = searchFormEl.firstElementChild;
const galleryLIstEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashInstance = new UnsplashAPI();

let isLabelActive = false;

const handleSearchFormSubmit = event => {
  event.preventDefault();

  const searchQuery = inputEl.value.trim();

  if (!searchQuery) {
    return;
  }

  unsplashInstance.query = searchQuery;

  isLabelActive = true;

  unsplashInstance
    .fetchPhotos()
    .then(data => {
      console.log(data);

      if (!data.results.length) {
        console.log('Images not found');

        return;
      }

      galleryLIstEl.innerHTML = createGalleryCards(data.results);
      loadMoreBtnEl.classList.remove('is-hidden');
    })
    .catch(console.warn)
    .finally(() => (isLabelActive = false));
};

const handleLoadMoreBtnClick = () => {
  unsplashInstance.page += 1;

  unsplashInstance
    .fetchPhotos()
    .then(data => {
      if (unsplashInstance.page === data.total_pages) {
        loadMoreBtnEl.classList.add('is-hidden');
      }

      galleryLIstEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCards(data.results)
      );
    })
    .catch(console.warn);
};

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', handleLoadMoreBtnClick);
