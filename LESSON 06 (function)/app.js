console.log("Hello 👌");

//ARROW FUNCTION

const name1 = () => {
  console.log("I love the name");
};

name1();

const select = () => {
  const sentence = console.log("I love the word");
  return sentence;
};

select();

//PARAMS AND ARGUMENT

const sayHi = (firstName) => {
  console.log(`Hi, ${firstName}`);
};

sayHi("Rocco");

const logAge = (name, age) => {
  console.log(`${name} is ${age} years old`);
};

logAge("Joe", 25);

const logAagee = (name2, age1) => {
  name2 = "Joe"; //varable declaration
  age1 = 25;
  console.log(`${name2} is ${age1} years old`);
};

logAagee();

//        SCOPE

const name = "John";

const logName = () => {
  console.log(name);
};

logName();

//   GLOBAL SCOPE

const name3 = "MM";

const globalScope = () => {
  console.log(name3);
};

const globalScope2 = () => {
  console.log(name3);
};

globalScope();

let name4 = "OLA";

const logName1 = () => {
  console.log(name4);
  name4 = "Rocco Mania";
};

logName1();
console.log(name4);

///   LOCAL SCOPE / FUNCTION SCOPE

const someFunction = () => {
  const name5 = "Ishola";
  console.log(name5);
};

someFunction();
//console.log(name5)

const someFunction1 = () => {
  const name5 = "Olayinka";
  console.log(name5);

  const anotherFunction = () => {
    console.log(name5);
  };
  anotherFunction();
};

someFunction1();

const someFunction2 = () => {
  const name = "OLA";
  console.log(name);
};

const anotherFunction1 = () => {
  const name = "Kalaz";
  console.log(name);
};

someFunction2();
anotherFunction1();

//  BLOCK SCOPE

if (true) {
  const name = "Suberu";
  console.log(name);
}

// HOISTING

var hoisting;
console.log(hoisting);

function hoist() {
  var message = "something";
  console.log(message);
}

hoist();

console.log(num);
var num;

function hoisted() {
  var message = "Hoisting is cool";
  return console.log(message);
}

hoisted();

// hoisting();

function hoisting() {
  console.log("this function is been hoisted");
}

hoisting();

//CLOSURE

//E
const outer = () => {
  const outerVar = "Hello";

  const inner = () => {
    const innerVar = "Hi";
    console.log(outerVar, innerVar);
  };
  return inner;
};

const innerFn = outer();
innerFn();

//Another Example
const init = () => {
  const hobby = "Learning JavaScript";
  const displayHobby = () => {
    console.log(hobby);
  };

  displayHobby();
};

init();

const thirdExample = () => {
  const example = "Example 03";
  console.log(example);
  const anotherFn = () => {
    const example2 = "example 04";
    console.log(example2);
    const anotherFn2 = () => {
      const example3 = "example 05";
      console.log(example3);
    };
    anotherFn2();
  };
  anotherFn();
};

thirdExample();
