// Колекція об'єктів для всіх прикладів з автомобілями

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/*
  1. Метод map

  Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів
*/

// const getModels = (arr) => arr.map((el) => el.model);

// console.log(cars);
// console.log(getModels(cars));

/*
  2. Метод map

  Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінeнним 
  значенням властивості price залежно від переданої знижки
*/

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map(({ price, ...rest }) => ({ ...rest, price: price - discount }));

// console.table(cars);
// console.table(makeCarsWithDiscount(cars, 2000));

// console.log(cars[0] === makeCarsWithDiscount(cars, 2000)[0]);

/*
  3. Метод filter
  
  Нехай функція filterByPrice повертає масив автомобілів ціна яких менша за 
  значення параметра threshold
*/

// const filterByPrice = (cars, threshold) =>
//   cars.filter((el) => el.price < threshold);

// console.table(cars);
// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
  4. Метод filter

  Нехай функція getCarsOnSale повертає масив автомобілів властивість onSale яких true
*/

// const getCarsOnSale = (cars) => cars.filter((el) => el.onSale);

// console.table(cars);
// console.table(getCarsOnSale(cars));

/*
  5. Метод find

  Нехай функція getCarByModel повертає об'єкт автомобіля властивість model
  якого та параметр model однакові
*/

// const getCarByModel = (cars, model) => cars.find((el) => el.model === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-343439"));

/*
  6. Метод sort
  
  Нехай функція sortByAscendingAmount повертає НОВИЙ масив автомобілів відсортований 
  за збільшенням значення властивості amount
*/

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => b.amount - a.amount);

// console.table(cars);
// console.table(sortByAscendingAmount(cars));

// const arr = [1, 618, 5, 8, 0.5];

// console.log(arr.slice().sort());

/*
  7. Метод sort

  Нехай функція sortByModel повертає НОВИЙ масив автомобілів відсортований за назвою 
  моделі в алфавітному або зворотньому алфавітному порядку, залежно від значення параметра order

  - localeCompare
*/

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) =>
//     order === "asc"
//       ? a.model.localeCompare(b.model)
//       : b.model.localeCompare(a.model)
//   );

// console.table(cars);
// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

/*
  8. Ланцюжки методів
  
  Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі.
*/

// const getAvailableCarNames = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.table(cars);
// console.log(getAvailableCarNames(cars));

/*
  9. Метод reduce
  
  Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount)
*/

// const getTotalAmount = (cars) =>
//   cars.reduce((acc, el, index) => acc + el.amount);

// console.table(cars);

// // debugger;
// console.log(getTotalAmount(cars)); // 100

// const arr = [1, 2, 3, 4, 5];

// debugger;

// const result = arr.reduce((acc, el) => acc + el, 0);

// console.log(result);

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.findIndex((option) => option.label === "blue"); // 2
// colorPickerOptions.findIndex((option) => option.label === "pink"); // 3
// colorPickerOptions.findIndex((option) => option.label === "white"); // -1

// const array = [{ array: [] }, { array: [1] }, { array: [] }];

// console.log(array.findIndex(({ array }) => array.includes(1)));

// debugger;

// const array = [{}, 5, true, `88f`, 13, [3, 5]].reduce(
//   (acc, el) => (isNaN(el) ? acc : acc + el),
//   0
// );

// console.log(array);

debugger;

const filteredArr = cars.filter(({ make }) => make !== "Mazda");

console.log(filteredArr);
