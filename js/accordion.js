/*
  4. Практичне завдання:

  Реалізувати функціонал 'акордеону', коли ми натискаємо
  на кнопку елементу та в нас відкривається або закривається
  вміст який до цього елементу відноситься
*/

// const buttonEls = document.querySelectorAll(".js-accordion-btn");

// // console.log(buttonEls);

// const handleButtonClick = (e) => {
//   e.target.nextElementSibling.classList.toggle('closed')
// };

// buttonEls.forEach((el) => {
//   el.addEventListener("click", handleButtonClick);
// });

const buttonEls = document.querySelectorAll(".js-accordion-btn");

// console.log(buttonEls);

const handleShowElement = (e) => {
  e.target.nextElementSibling.classList.remove("closed");
};

const handleHideElement = (e) => {
  e.target.nextElementSibling.classList.add("closed");
};

buttonEls.forEach((el) => {
  el.addEventListener("mouseenter", handleShowElement);
  el.addEventListener("mouseleave", handleHideElement);
});
