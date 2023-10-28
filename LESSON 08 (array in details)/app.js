// console.log("Array In Details");

const cohorts = [
  "Ola",
  "Kalaz",
  "Supreme",
  "KennyMas",
  "Muaz",
  "Rocco",
  "Muhammad",
];

const nested = [[1, 2], [3, 4], [5, 6]]
console.log(nested.length);

// Object

console.log(cohorts.length);

//select an element
console.log(cohorts);
console.log(cohorts[2]);

//replace an element
const replaceEl = (cohorts[1] = "ShallyPoppy");
console.log(replaceEl);
console.log(typeof replaceEl);

//add a new element but here is only posible at the last index of the position
cohorts[7] = "Lagbaja";
console.log(cohorts);

// array can store element/data of any type
const arr = [
  "Banana",
  10000,
  { name: "Bala Blue", age: 80 },
  function () {
    alert("Boooooooooooooooo😬");
  },
];

console.log(arr);

// es5 method
for (let i = 0; i < cohorts.length; i++) {
  console.log(i, cohorts[i]);
}

// es6 method
for (const cohort of cohorts) {
  console.log(cohort);
}

// cohorts.map((names) => {
//   console.log(names.toUpperCase());
// })
//ARRAY METHODS
//  Push()
const student = ["Ali", "Tunde", "Sewa", "Selimo"];

console.log(student);

student.push("Dadada", "Biola");
console.log(student);

// Pop()

const number = [20, 30, 40, 50, 60];
console.log(number);

// DELETE ELEMENT SHOW
const removedEl = number.pop();
number.pop();
console.log(number);
console.log(removedEl);

student.push(removedEl);
console.log(student);

// SHIFT() METHOD
const colors = ["Black", "Blue", "Yellow", "Green"];
console.log(colors);

const remEl = colors.shift();
console.log(colors);
console.log(remEl);

// Unshift ()
const parties = ["PDP", "APGA", "ACCORD", "APC"];
console.log(parties);

const newL = parties.unshift("LP");
console.log(parties);
console.log(newL);

// Splice ()
const foods = ["Eba", "Iyan", "Semo", "Amala", "Beans", "Rice"];
console.log(foods);
//to remove what's at the length of the position
foods.splice(3, 1, "Tuwo", "Yam");
console.log(foods);

// another way to use splice
//it starting the delete from and left the 2 element before the 0-3 and minus -2
const wears = ["Gucci", "D&G", "Amani", "Versace", "Nike"];
console.log(wears);
wears.splice(2, 3);
console.log(wears);


// slice()
/// it return new array that contains element from a certain point
const male = [
  "Daodu",
  "Ogundiji",
  "Gotija",
  "Gogunmi",
  "Baba Amoye",
  "Afunnimawobe",
];
console.log(male);
const worriors = male.slice(1, 4);
console.log(worriors);

const elite = male.slice(1);
console.log(elite);

// selecting from the end of the element
const stakeHolders = male.slice(-2);
console.log(stakeHolders);

// toString()
//to convert array to strings
const string = male.toString();
console.log(string);

//includes ()
const blean = male.includes(1);
console.log(blean); //false

const blean1 = male.includes("Gogunmi");
console.log(blean1); // true

//Sort ()

male.sort();
console.log(male);

// IndexOf ()
const numbers = [1, 2, 4, 9, 1, 4, 2, 9, 8, 7, 12, 20, 11, 1];
console.log(numbers);

const search = numbers.indexOf(2, 0);
console.log(search);

// lastIndexOf ()
const ls = numbers.lastIndexOf(9, numbers.length);
console.log(ls);

const ls2 = numbers.lastIndexOf(41, numbers.length);
console.log(ls2);

// forEach ()
// It mostly use method in JavaScript
//it perform an action for each elements of an array.
// You can forEach to either console.log something or change something, or sum something up or do something when you don't need the array back
// We use it when want to do something on each elements of the array.
// it
const names = ["Shola", "Bola", "Tola"];
// console.log(names);

// es6 for loop
for (const naming of names) {
  console.log(naming);
}

//  ES5 for loop
for (let index = 0; index < names.length; index++) {
  console.log(index, names[index]);
}

// syntax
//annoymos function ( () => {} )

// names.forEach(function () {});
// names.forEach((value, i, arr) => {});

// callback function
// example
const fnc = (value, i, arr) => {
  console.log(value);
  // console.log(i);
  // console.log(arr);
};
// forEach()
const forE = names.forEach(fnc);
console.log(forE);
// end of forEach
names.forEach(fnc);

// Annoymous function
// example

/*names.forEach((value, i, arr) => {
  console.log(value);
  // console.log(i);
  // console.log(arr);
});*/

let initBal = 0;
const trns = [42, 45, 26, 4, 13, 16];

trns.forEach((trn) => console.log((initBal += trn)));

// another example

names.forEach((name) =>
  console.log(
    `Congratulation ${name}, you will be representing the team in UK next month`
  )
);

// Map()
// it is similar to forEach method
// it alocates memory in all data stored and returns values
// it return the new array while the original one in its states

const inventory = [
  { name: "Rice", price: 42000 },
  { name: "Beans", price: 25000 },
  { name: "Small Chop", price: 1000 },
  { name: "Yam", price: 500 },
  { name: "Garri", price: 12000 },
];

inventory.map((value, i) => {
  console.log(value.name);
  console.log(value.price);
});

const prices = inventory.map((value) => value.price);
const commodities = inventory.map((value) => value.name);

console.log(commodities);
console.log(prices);

//filter()
const nums = [-20, -45, 43, 30, -1, 23, 34, -50, 44, -75];

console.log(nums.filter((num) => num < 0));
console.log(nums);

const positive = nums.filter((num) => num > 0);
console.log(positive);

// complex es5
for (let i = 0; i < nums.length; i++) {
  // console.log(nums[i]);

  if (nums[i] < 0) {
    let negativeNums = [];

    //  console.log(nums[i]);
    negativeNums.push(nums[i]);
    console.log(negativeNums);
  }
}

//Real world example

const employeesData = [
  { name: "Adekola", age: 2023 - 1960, yearsSpent: 23 },
  { name: "Wale", age: 2023 - 1970, yearsSpent: 10 },
  { name: "Otedola", age: 2023 - 1980, yearsSpent: 20 },
  { name: "Dangote", age: 2023 - 1983, yearsSpent: 15 },
  { name: "Akosi", age: 2023 - 1980, yearsSpent: 35 },
  { name: "Mutula", age: 2023 - 1957, yearsSpent: 10 },
];

const toRetire = employeesData.filter((employee) => {
  if (employee.age >= 60 || employee.yearsSpent >= 35) {
    return employee;
  }
});

console.log(toRetire);

const employeesToRetired = toRetire.map((employee) => {
  return employee.name;
});

console.log(employeesToRetired);

employeesToRetired.forEach((employee) =>
  console.log(`Hey ${employee}, Congratulation on your retirement.`)
);

// find
// It returns the first value that satisfie the condition and it also take callback function
const _number = [1, 2, 4, 2, 5, 6, 3, 10, 5];

_number.find((value) => console.log(value < 3));

const result = _number.find((value) => value < 3);

console.log(result);

const animals = [
  "Cat",
  "Dog",
  "Cow",
  "Ram",
  "Goat",
  "Lizard",
  "Giraffe",
  "Donkey",
  "Duck",
];

const rslt = animals.find((animal) => animal.startsWith("D"));

console.log(rslt);

const rslt2 = animals.find((animal) => {
  return animal.startsWith("G");
});
console.log(rslt2);

//some() */
/// it also take callback function and it test whealthe atleast on element pass the test implemented by the provided function
// it return boolean value and it cannot modified array

const array = [1, 2, 3, 4, 5];

console.log(array.some((el) => el > 5));

//  every()
// it checks if all the elements passes the test provided in the function
console.log(array.every((el) => el > 1));

// reduce()
// This iterates all the element in an array and compute them to a single value
//it take two arguments
const priceList = [200, 400, 100, 350, 1040, 450];
let initialValue = 0;
const total = priceList.reduce((accmulator, currentValue) => {
  return (accmulator += currentValue);
}, initialValue);

console.log(total);

const totalTrns = nums.reduce((accum, el) => {
  return (accum += el);
}, 0);
console.log(totalTrns);

// concat()
const alphabet = ["A", "B", "C", "D"];
const numbers$ = [1, 2, 3, 4, 5];

const numb$alpha = alphabet.concat(numbers$);
console.log(numb$alpha);


const exampleString = "Londo";
console.log(exampleString.slice(1, 5));