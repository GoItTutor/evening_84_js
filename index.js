/*
  1. Об'єкти window та document

  Cучасні методи пошуку елементів (querySelector, querySelectorAll)

  Поняття вузлів та їх типи

  Представлення документу як дерева об'єктів
  
  Навігація по DOM дереву (children, etc.)
*/

// console.log(document);

// const imgEl = document.querySelector("fdsf");

// console.log(imgEl);

// const liEls = document.querySelectorAll("li");

// liEls.forEach((el) => {
//   console.log(el);
// });

// const containerEl = document.querySelector(".container");
// const headingEl = document.querySelector(".main-title");

// console.log(containerEl.children[2].firstElementChild.firstElementChild);
// console.log(containerEl.lastElementChild);

/* 
  2. Доступ до атрибутів у елемента

  elem.attributes
  elem.hasAttribute(name)
  elem.getAttribute(name)
  elem.setAttribute(name, value)
  elem.removeAttribute(name)

  доступ до атрибуту через .

  show on img with class some-img
*/

// const imgEl = document.querySelector(".some-img");

// console.log(imgEl);

// imgEl.removeAttribute("src");

// console.log(imgEl.hasAttribute("title"));
// console.log(imgEl.getAttribute("fsdfsd"));

// imgEl.title = `dog`;

// console.log(imgEl.title);

// imgEl.setAttribute("src", "https://picsum.photos/id/238/200/300");

/*
  3. Об'єкт style, властивість cssText

  show on heading with class main-title
*/

// const headingEl = document.querySelector("#title");

// headingEl.style.color = "red";
// headingEl.style.fontSize = "69px";
// headingEl.style.backgroundColor = "rgb(1, 255, 255)";

// console.log(headingEl);

// headingEl.style.cssText =
//   "color: red; font-size: 69px; background-color: rgb(1, 255, 255)";

/*
  4. Об'єкт classList та його методи (add, remove, toggle, contains)

  take dissapear and red classes from main.css
*/

// const headingEl = document.querySelector(".main-title");

// console.log(headingEl.classList.contains("main-title"));

// // headingEl.classList.add("dissapear");

// headingEl.classList.toggle("red");

// headingEl.classList.toggle("red");

// console.log(headingEl);
