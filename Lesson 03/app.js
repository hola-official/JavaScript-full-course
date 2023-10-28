console.log("Hey Man, Welcome To Another Lesson 😎🤳");

// (if,else)

const eligible = 18;
if (eligible < 18) {
  console.log("You are eligible to vote");
} else if (!eligible === 18) {
  console.log("Congratulation ROCCOMANIA you just turned 18");
} else {
  console.log("Oops come back next year");
}

const firstName = "Kenny";
const job = "Mechanic";

if (job === "Mechanic") {
  console.log(`${firstName} is good ${job}`);
} else if (job === "Driver") {
  console.log(`${firstName} is expert driver`);
} else if (job === "Teacher") {
  console.log(`${firstName} is a professional ${job}`);
} else if (job === "Carpenter") {
  console.log(`${firstName} is good and expert ${job}`);
} else if (job === "Software Engineer") {
  console.log(`${firstName} is good and expert ${job}`);
} else {
  console.log(`You are a lazy man`);
}

// Class work

const time = 8;
if (time < 10) {
  console.log("Good Morning");
} else if (time > 8) {
  console.log("Good day");
} else {
  console.log("Good Evening");
}

/******** TRUTHY AND FALSY VALUES******/

//TRUTHY VALUE
// if ('') {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// if ('0') {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// if ([]) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// if ({}) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// if (function(){} ) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

//*******FALSY VALUES********//

// if (false) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// if (0) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// if (("", "", ``)) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// if (null) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// if (NaN) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

if (undefined) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

const dogs = 5;
if (dogs > 0) {
  console.log(`You have ${dogs} dogs`);
} else {
  console.log("You have no dogs");
}

//************************** SWITCH STATEMENT************************//
const superHero = "Ade";
switch (superHero) {
  case "Iron Man":
    console.log("Iam Iron Man...");
    break;
  case "Thor":
    console.log("That is my hammer!");
    break;
  case "Captain American":
    console.log("Never give up");
    break;
  case "Black widow":
    console.log("One shot, One kil");
    break;
  default:
    console.log("Enter a valid superhero name");
}

const days = "Monday";
switch (days) {
  case "Monday":
    console.log("Today nah Monday");
    break;
  case "Tuesday":
    console.log("Work day");
    break;
  case "Wednesday":
    console.log("Hustle day");
    break;
  case "Thursday":
    console.log("Class Today");
    break;
  case "Friday":
    console.log("Class Today");
    break;
  case "Saturday":
    console.log("Enviromental day");
    break;
  case "Sunday":
    console.log("Rest Day");
  default:
    console.log("You are wrong");
}

//LOGICAL OPERATOR
const age = 19;
const isCool = true;

if (isCool && age > 18) {
  console.log('You may enter');
}else {
  console.log('You cannot enter...');
}