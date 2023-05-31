/*
  5. Метод document.createElement('tagname')

  Створити картку галереї і вставити у елемент з класом gallery:

  <li class="gallery-item">
    <a href="#">
      <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
    </a>
  </li>
*/

// 1

// const galleryEl = document.querySelector(".gallery");

// const liEl = document.createElement("li");

// liEl.classList.add("gallery-item");

// // 2

// const anchorEl = document.createElement("a");

// anchorEl.href = "#";

// liEl.append(anchorEl);

// // 3

// const imgEl = document.createElement("img");

// imgEl.src = "https://picsum.photos/id/237/200/300";

// imgEl.alt = "Labrador";

// anchorEl.append(imgEl);

// console.log(liEl);

// galleryEl.prepend(liEl);

/* 
  6. Властивості innerHtml і textContent

  Створити картку галереї і вставити у елемент з класом gallery:

  <li class="gallery-item">
    <h1>Some text</h1>
    <a href="#">
      <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
    </a>
  </li>
*/

// const galleryEl = document.querySelector(".gallery");

// galleryEl.innerHTML += `<li class="gallery-item">
//     <h1>Some text</h1>
//     <a href="#">
//       <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
//     </a>
//   </li>`;

/*
  7. Створити галерею і вставити у елемент з класом gallery через
  метод elem.insertAdjacementHTML :)

  Розмітка картки:

  <li class="gallery-item">
    <a href="#">
      <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
    </a>
  </li>
*/

const pictures = [
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/0/700/460",
    alt: "laptop",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1/700/460",
    alt: "developer",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/10/700/460",
    alt: "forest",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/100/700/460",
    alt: "beach",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1000/700/460",
    alt: "mountain",
  },
];

// Написати функцію яка створить розмітку картки
const makeGalleryCard = ({
  width,
  height,
  url,
  alt,
}) => `<li class="gallery-item">
    <a href="#">
      <img src="${url}" alt="${alt}" height="${height}" width="${width}">
    </a>
  </li>`;

const markup = pictures.map((el) => makeGalleryCard(el));

// Cтворити масив із розмітки і вставити у список .gallery

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("afterbegin", markup.join(""));
