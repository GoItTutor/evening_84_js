"use strict";
/*
  2. Події елементів форм: focus, blur, change, input, submit

  Об'єкт події

  Реалізувати функціонал додавання та прибирання кастомного 
  outline у інпуту імені

  Реалізувати функціонал виведення введено ім'я у елемент span

  Реалізувати функціонал за яким кнопка сабміту стане 
  активною коли введене ім'я та вибраний checkbox

  Реалізувати функціонал при сабміті за яким у консоль 
  виводиться введене ім'я користувача, очищається форма та
  не перезавантажується сторінка - preventDefault
*/

const formEl = document.querySelector(".js-contact-form");
const formInputEl = document.querySelector(".js-username-input");
const formCheckboxEl = document.querySelector(".js-policy-checkbox");
const userNameOutputEl = document.querySelector(".js-username-output");
const formSubmitBtnEl = document.querySelector(".js-contact-form-submit");

formInputEl.addEventListener("focus", ({ currentTarget }) => {
  currentTarget.style.outline = "5px solid red";
});

formInputEl.addEventListener("blur", ({ currentTarget }) => {
  currentTarget.style.outline = "none";
});

formInputEl.addEventListener("input", (e) => {
  userNameOutputEl.textContent = e.target.value;
});

formCheckboxEl.addEventListener("change", (e) => {
  // 1
  if (e.target.checked === true && formInputEl.value.trim() !== "") {
    formSubmitBtnEl.disabled = false;

    return;
  }

  formSubmitBtnEl.disabled = true;

  // 2
  // formSubmitBtnEl.disabled = !(e.target.checked && formInputEl.value.trim());

  // 3
  // formSubmitBtnEl.disabled =
  //   e.target.checked && formInputEl.value.trim() ? false : true;
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(formInputEl.value);

  formEl.reset();

  formSubmitBtnEl.disabled = true;

  userNameOutputEl.textContent = "";
});
