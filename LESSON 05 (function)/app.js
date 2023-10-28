console.log("Hello world");

/// FUNCTION DECLARATION
function sum(number) {
  //console.log('Is gone');
  return number * number;
}

// FUNCTION CALL
const result = sum(5);

console.log(result);

function sum2(numb) {
  return numb + numb;
}

const resultt = sum2(15);
console.log(resultt);

function sum3() {
  return 9 + 9;
}

console.log(sum3());

//DECLARATION AND INVOKING (es5)

function name1() {
  //statement
}

//Example (es6)

function sayHi(name) {
  console.log(`${name} don't sleep!!!`);
}
sayHi("Roccomaia");
sayHi("Kalaz");

//Example 2

function add(a, b) {
  return a + b;
}

const sum1 = add(5, 6);
console.log(sum1);

//Example 3
function test() {
  console.log(1);
  return true;
}

const bool = test();
console.log(bool);

//Example 4

function summ(num1, numb2 = 0) {
  return num1 + numb2;
}

console.log(summ(4));

//OR

function summ1(c, d) {
  if (d === undefined) {
    return c + c;
  }
}

console.log(summ1(8));

//function expression (es5)
const name2 = function() {
  //statement
}

const aje = function (a, b) {
  return a + b;
};

const awe1 = aje(5, 6);
console.log(awe1);

const allo = function (e, d) {
  return e * d;
};

const hallo = allo(10, 50);
console.log(hallo);

//Arrow functions (es6)

const name3 = () => {
  //statement
};

//Example
const name4 = (b, y) => {
  return b / y;
};

const named = name4(5, 5);
console.log(named);

function tutor1(tutor2) {
    console.log(`${tutor2} is the tutor, while Mr, Daudu is part of the cahorts`);
}

tutor1("Mr naheem")

const text = (tutor, student) => {
    const tutor1 = "Mr, naheem"
    const cohort = "Mr Daudu"
    const cohort1 = "Dada"
    return console.log(`${tutor1} is the tutor ${cahort} is part of the cahort`)
}