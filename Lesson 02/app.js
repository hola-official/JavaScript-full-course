console.log("HELLO WORLD");

//*******ARITHMETIC OPERATOR*******//

const a = 4;
const b = 5;

let result = 0;
result = a + b;
console.log(result);

result = a - b;
console.log(result);

result = a * b;
console.log(result);

//****************COMPARISION OPERATORS****************//

const _a = 10;
const _b = 10;

console.log(_a >= _b);

const $a = 10;
const $b = 10;

console.log($a == $b);

const c = 15;
const d = 5;

console.log(c <= d);

const _c = 15;
const _d = 15;

console.log(_c != _d);

// MODULOS
const e = 13;
const f = 12;

let resultt = e % f;

console.log(resultt);

//********STRICT QUALITY (===)*********//

console.log(5 === 5);
console.log(10 === "10");

// STRICK NOT EQUALITY (!==)
const g = 10;
const h = 10;
console.log(g !== h);

console.log(false === false);
console.log(false === "false");
console.log(true === 1);
console.log(0 === "0");

//LOOSE EQUALITY (==)
console.log(5 == "5");
console.log(true == 1);
console.log("" == "0");
console.log("" == 0);
console.log(false == "false");

//LOGICAL OPERATORS AND [&&], OR [||], NOT [!]

//AND &&
console.log(true && true && true);
console.log(true && true);

//OR ||
console.log(false || false || false);
console.log(false || false || true);

//NOT !
console.log(!true);

// ASSIGNMENT OPERATOR (=), (+=), (-=), (*=), (/=)

let number = 5;

// number += 5;
// console.log(number);

// number *= 5;

// console.log(number)

// number -= 5;

// console.log(number);

number /= 5;

console.log(number);

//Class work

// let salary = 2500;

// salary += 850;
// console.log(salary);

let salary = 2500;
let moreSalary = 850;

let total = salary + moreSalary;
console.log(total);

// Class work

let age6 = 2023;
age6 -= 2005;
console.log(age6);

const thisYear = 2023;
const myAge = thisYear - 2002;
console.log(myAge);

const ageK = 22;
const momAge = ageK * 2;
console.log(momAge);

// Class work

// const massMark = 78;
// const massJohn = 92;

// let heightMark = 1.69;
// let heightJohn = 1.95;
// heightMark *= 1.69;
// heightJohn *= 1.95;

// let markMass = massJohn / heightJohn;
// let heightMass = massMark / heightMark;
// console.log(markMass);
// console.log(heightMass);

// let height = massJohn / heightJohn;
// let heighMark = massMark / heightMark;

// console.log(height * 2);
// console.log(heightMark * 2);

const massMark = 78;
const massJohn = 92;

const heightMark = 1.69;
const heightJohn = 195;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);

const heightestBmi = bmiMark > bmiJohn;
console.log(heightestBmi);

console.log(5 === 5);
console.log(10 === "10");

console.log(5 == "5");
console.log(true == 1);

console.log(false || false || false);

console.log(!true);