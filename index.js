/*
  1. Блогер

  Поняття клас та екземпляр, визначення, призначення

  Прототипне наслідування в інстансів класу

  Напиши клас Blogger для створення об'єкта блогера з 
  наступними властивостями:

  email - пошта, рядок
  age - вік, число
  numberOfPosts - кількість постів, число
  topics - масив тем, на яких спеціалізується блогер

  Клас очікує один параметр – об'єкт налаштувань з 
  однойменними властивостями.

  Додай метод getInfo(), який повертає рядок: 
  User ${пошта} is ${вік} years old and has ${у постів} posts

  Додай метод updatePostCount(value), який у параметрі value 
  приймає кількість постів, які потрібно додати користувачеві
*/

// class Blogger {
//   constructor({ email, age, numberOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += +value;
//   }
// }

// 1
// const mango = new Blogger({
//   email: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango);

// 2
// const poly = new Blogger({
//   email: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });

// console.log(poly);

// console.log(poly.getInfo());

// poly.updatePostCount(4);

// console.log(poly.getInfo());

/*
  2. Сховище
 
  Напиши клас Storage, який створює об'єкти для управління складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items

  Додай методи класу:

  getItems() – повертає масив товарів

  addItem(item) - отримує новий товар та додає його до поточних
*/

// const initialItems = ["HTML", "JS", "CSS"];

// class Storage {
//   constructor(items) {
//     this.items = [...items];
//   }

//   getItems() {
//     return this.items;
//   }

//   addItems(...newItems) {
//     this.items.push(...newItems);
//   }
// }

// const coursesStorage = new Storage(initialItems);
// console.log(coursesStorage);

// console.table(coursesStorage.getItems());

// coursesStorage.addItems("🍌", "TS", "Gaming mouse");
// console.log(coursesStorage.getItems());

/*
  3. User

  Приватні властивості
  
  Напиши клас User який створює об'єкт із властивостями login та email
  
  Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email
*/

// class User {
//   #login;
//   #email;

//   constructor({ email, login }) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.email);
// console.log(mango.login);

/*
  4. Нотатки

  Статичні властивості

  Напиши клас Notes, який управляє колекцією нотаток у властивості items. Нотатка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якій зберігатиметься об'єкт із пріоритетами.

  {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
  }
  
  Додай метод addNote(note) для додавання нотатки
*/

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   constructor(items) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({
//   text: "Моя перша нотатка",
//   priority: Notes.Priority.LOW,
// });

// myNotes.addNote({
//   text: "Моя друга нотатка",
//   priority: Notes.Priority.HIGH,
// });

// console.log(myNotes);

// const array = [];

// console.dir(Array.isArray([]));

/*
  5. Прототипне наслідування детальніше

  Метод Object.create

  Власні/невласні властивості, перебір циклом for in
  та метод hasOwnProperty
*/

// const obj1 = {
//   a: 1,
//   b: 2,
// };

// const obj2 = Object.create(obj1);

// obj2.c = 3;

// console.log(obj2);

// for (let key in obj2) {
//   console.log(key, obj2.hasOwnProperty(key));
// }

// console.log(Object.keys(obj2));

// console.log(obj2);
// console.log(obj2.a)

// const string = new String("string");

// console.log(string.toString());

// const number = new Number(1212);

// console.log(number);
// console.log(number.toString());

// const userOleg = {
//   c: 3,
// };

// const userVitaliy = Object.create(userOleg);

// userVitaliy.b = 2;

// const userAnna = Object.create(userVitaliy);

// userAnna.a = 1;

// console.log(userAnna);

// class Storage {
//   constructor(items) {
//     Storage.prototype.items = [...items];
//   }
// }

// const storage = new Storage([]);

// console.log(storage);

// const idx = 0;

// console.log(!!~idx);
