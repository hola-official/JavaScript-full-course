console.log("Values vs Reference");
//**************Values vs Reference*************//
///  COPYING NUMBERS
let s = 1;
let y = s;
s = 2;
console.log(s);
console.log(y);

// COPY STRINGS
let firstPerson = "Mark";
let secondPerson = firstPerson;
firstPerson = "Austin";

console.log(firstPerson);
console.log(secondPerson);

// COPY COMPLEX VALUES
// Array
let animal = ["Snake", "Lion", "Tiger", "Worf"];
animal.push("Leopard");
console.log(animal);

//Object Complex value
const person = {
  firstName: "John",
  lastName: "Sam",
};

const otherPerson = person;

person.firstName = "Seyi";
console.log(person);

console.log(otherPerson);

//EQUALITY
const person13 = { firstName: "Soliu" };
const otherPerson2 = { firstName: "Bolakale" };
console.log(person13 === otherPerson2);

const otherPerson3 = person13;
console.log(person13 === otherPerson3);

// SHALLOW CLONING (...) **OR** SPREAD OPERATOR
// In JavaScript, a shallow clone, also known as a shallow copy or a shallow duplication, refers to the process of creating a new object or array that is a copy of the original object or array, but only one level deep.
/// FIRST WAY : SPREAD OPERATOR
const color = ["red", "blue", "green", "black"];
console.log(...color);

const copiedColor = color;
console.log(color === copiedColor);

// Example usage:
const numbers = [4, 2, 9, 1, 5, 7];
const result = minmax(numbers);
console.log(result); // Output: { min: 1, max: 9 }
//EXAMPLE
const spreadOperator = {
  firstName: "team",
  university: "Umilag",
};

const otherSp = { ...spreadOperator };
console.log(otherSp);

let obj1 = { name: "male", age: 20 };
// console.log(obj1);
const obj2 = { name: "supreme", location: "Ogun state" };
console.log(obj2);

obj1 = { ...obj1, ...obj2 };
console.log(obj1);

//arr Example
const arr = ["Monitor", "Mouse"];
console.log(...arr);

const arr1 = ["shoulders", "Knees"];
const lyrics = ["head", ...arr1, "and", "Toe"];

console.log(lyrics);

// Shallow Cloninig Example
const number = [1, 2, 3, 4, 5];
const newNumber = [...number];
console.log(newNumber);
console.log(...number);

const number2 = [1, 2, 3, 4, 5]; /// memory stored: 12345
const copiedNumber = number2; // 123
const newNumber2 = [...number2]; // shallow clone

console.log(number2 === copiedNumber);
console.log(number2 === newNumber2);

/// EXAMPLE
const number1 = [1, 2, 3, 4, 5];
const copiedNumber2 = number1; // 123
const newNumber1 = [...number1];

number1.push(8);

console.log(number1);
console.log(copiedNumber2);
console.log(newNumber1);

///////////////  ANOTHER EXAMPLE with Slice() and Push() method
const numbs = [1, 2, 3, 4, 5, 6, 7];
const cpyNumbs = numbs;

const newNumbs = numbs.slice(); // shallow cloning

numbs.push(8);

console.log(numbs);
console.log(newNumbs);
console.log(cpyNumbs);

///  EXAMPLE
const person5 = {
  name: "John",
  age: 20,
};

const otherPerson5 = { ...person5 };
person5.age = 30;

console.log(person5);
console.log(otherPerson5);

///  OBJECT ASSIGN IN SHALLOW CLONE
const myGuy = {
  name: "Kalas",
  color: "red",
  age: 20,
};

const newRealG = Object.assign({}, myGuy);
myGuy.name = "Muaz";

console.log(newRealG);
console.log(myGuy);

/// Deep cloning

const details = {
  firstName: "Rocco",
  car: {
    brand: "Benz",
    color: "blue",
    wheel: 4,
  },
};

const newDetails = { ...details };
newDetails.firstName = "Roqib";
newDetails.car.color = "white";
console.log(details);
console.log(newDetails.car);

/// JSON
const myPeople = {
  fullNam: "Adelo Adebo",
  car: {
    brand: "Volvo",
    door: 2,
    color: "yellow",
  },
};

const stringified = JSON.stringify(myPeople);
console.log(stringified);

const newPeople = JSON.parse(stringified);
console.log(newPeople);

const myObj = {
  name: "Muhammad",
  hobbies: ["Eat", "Sleep", "Travel"],
  hello: function () {
    console.log("Yog !");
  },
};
console.log(typeof myObj);
console.log(typeof myObj.name);
myObj.hello();

const send = JSON.stringify(myObj);
console.log(send);

const receive = JSON.parse(send);
console.log(receive);
