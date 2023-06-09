'use strict';

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const sectionElements = document.querySelectorAll('.section');

const animatedSectionEl = document.querySelector('.animated-section');

sectionElements.forEach(section => {
  section.style.backgroundColor = randomColor();
});

const handleDocumentScroll = _.throttle(() => {
  console.log(pageYOffset);

  if (window.pageYOffset > 425) {
    animatedSectionEl.classList.remove('animated-section');

    document.removeEventListener('scroll', handleDocumentScroll);
  }
}, 200);

document.addEventListener('scroll', handleDocumentScroll);
