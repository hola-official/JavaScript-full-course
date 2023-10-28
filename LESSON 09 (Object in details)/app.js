// console.log("Object in details");

//**************Object in details******************//
// To create an object you just need to open set of a curely braces and assign it to a veriable that is the form of object
// inside object, we have key and value
// the key and value are separated by column
// properties are separated by comma

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
};

console.log(person);

const supreme = {
  firstName: "Olamide",
  lastName: "Abiodun",
  profession: "caterer",
  isMarried: true,
  gender: "male",
};

console.log(supreme);

/// Object inside object
const director = {
  firstName: "Aliu",
  lastName: "Musa",
  age: 40,
  gender: "male",
  isMarried: true,
  car1: {
    carName: "Lexus",
    year: "2022",
    color: "Ash",
  },
  car2: {
    carName: "Toyota",
    year: "2015",
    color: "gray",
  },
};

console.log(director);

// VARIABLES AS VALUES IN AN OBJECT
// we can also have variable as values in object
// const firstName = "Rokeeb";
// const lastName = "Yusuf";

// const person2 = {
//   firstName: firstName,
//   lastName: lastName,
// };

// console.log(person2);

// easiest way
const firstName = "Rokeeb";
const lastName = "Yusuf";

const person2 = {
  firstName,
  lastName,
};

console.log(person2);

// Class work
const player = {
  firstName: "Jadon",
  lastName: "Sancho",
  age: 23,
  jerseyNo: "27",
  team: {
    club: "Manchester United",
    country: "England",
    Date: "2021",
  },
};
console.log(player);

// Accessing, Adding and updating properties of an Object
// We have two way of accessing Object
// 1. Dot Notation (.)
/// It use to access add or update a properties of an object
// it allow us to retrieve some values from an object
console.log(player.team.country);
// 2. Squre bracket ([])
// it allow us to access properties of an object

console.log(player["firstName"]);

const bola = "age";
console.log(player[bola]);

// Buit in method
// is a property containing a function definition
const myObj = {
  myMethod1: () => {
    /// arrow fuction
  },
  myMethod2: function () {
    /// function expression
  },
  myMethod3() {
    //// function declaration
  },
};

// arrow in object
const dog = {
  name: "fluffy",
  age: 2,
  bark: () => {
    console.log("woof woof!");
  },
};
console.log(dog.name);
dog.bark();

// Object Method
// 1. Object.keys()
// 2. Object.values()
// 3. Object.entries()
// 4. Object.freeze()
// 5. Object.seal()

// 1. Object.keys()
// it create/returns an array containing the keys of an objects

const employees = {
  boss: "Michael",
  secretary: "John",
  sales: "Jimmy",
  accountant: "Oscar",
};

const employeesInfo = Object.keys(employees);
console.log(employeesInfo);

// Object.values
// it create/returns an array containing the values of an Objects
const session = {
  id: 1,
  date: "5-September-2023",
  device: "mobile",
  browser: "chrome",
};

const sessionInfo = Object.values(session);
console.log(sessionInfo);

// ********************* Object.entries()
// It create a nested array of the key and value pairs of an object

// Example
const entSession = Object.entries(session);
console.log(entSession);

// Example
const operatingSystem = {
  name: "Linux",
  version: 18.04,
  license: "Open Source",
};

const operatingSystemInfo = Object.entries(operatingSystem);
console.log(operatingSystemInfo);

// Object.freeze()
// it preventd modification of existing properties and prevents properties from being added or removed

const user = {
  userName: "John",
  password: 123123,
};

const userInfo = Object.freeze(user);
(userInfo.userName = "supreme"), /// try to add a new userName to it
  console.log(userInfo);

// Object.seal()
// it prevents new properties from being added to an object.

const user1 = {
  userName: "John",
  password: 123123,
};

const userInfo1 = Object.seal(user1);
userInfo1.userName = "Bola";
console.log(userInfo1);

//**************Continuation of an Object by Tutor Soliu***************//
console.log("Tutor Soliu");

const personS = {
  name: "Soliu",
  age: 10,
};

console.log(personS);

//********************  Array Inside Object ***********************//
let x;
const person11 = {
  name: "Ali",
  age: 20,
  isAdmin: true,
  address: {
    street: "12 Unity and peace",
    city: "Ilorin",
    state: "Kwara",
  },

  hobbies: ["Music", "Sport"],
};

x = person11.name;

console.log(x);

x = person11.hobbies[0];
console.log(x);

// TO UPDATE A PROPERTY
person11.name = "Soliu";
console.log(person11);

person11["isAdmin"] = false;
console.log(person11);

//*********** DELETE A PROPERTY ***********//
// delete person11.age;
// console.log(person11);

delete person11.address.state;
console.log(person11);

//*********** Add a property ********//
person11.hasChildren = true;
console.log(person11);

// ADDING FUNCTION IN AN OBJECT
person11.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person11.greet();

/// TRYING TO USE ARROW FUNCTION AND IT NOT WORK BUT TUTOR SOLIU SAY IT BETTER TO USE FUNCTION EXPRESSION
person11.greet = () => {
  console.log(`He is ${person11.age} year old`);
};

person11.greet();

let b;

const toDo = {};
toDo.id = 1;
b = toDo;
console.log(b);

//*********** CONSTRUCTOR IN AN OBJECT **********//
// A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword.
const toDo1 = new Object();
toDo1.id = 1;
toDo1.name = "buy milk";
toDo1.completed = false;
b = toDo1;
console.log(toDo1);

//*******SPREAD OPERATOR IN OBJECT*********//
// It is commonly used to make deep copies of JS objects

//// TESTING ///BUT NOT SPREAD OPERATOR///////
const firstName1 = "Soliu"
const lastName1 = "Ahmed"

const namee = {
  firstName1,
  lastName1
}

console.log(namee);