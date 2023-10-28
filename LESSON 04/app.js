console.log("HELLO WORLD");

// TERNARY OPERATOR

const age = 18;
if (age > 18) {
  console.log("You can drive");
} else {
  console.log("You are not eligible to drive");
}

age >= 18 ? console.log("You can drive") : console.log("You are not eligible");

const gender = "male";
/*if (gender === "female") {
console.log('Ola is boy');
} else {
    console.log('Bola is a girl');
}*/

gender === "female" ? console.log("Ola is boy") : console.log("Muaz is a girl");

//LOOPING
//WHILE LOOP

//EXAMPLE 01
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

let loading = 0;

while (loading < 150) {
  console.log("website is still loading");
  loading++;
}

//FOR LOOP

for (let kalaz = 2; kalaz < 10; kalaz++) {
  console.log(kalaz);
}

for (let i = 20; i < 30; i++) {
  console.log(i);
}

const cohorts = [
  "Kenny",
  "Supreme",
  "Ola",
  "Muaz",
  "Muhammed",
  "Rocco",
  "Kalaz",
];

for (cohort of cohorts) {
  console.log(`Holla, Guys ${cohort}`);
}
const cohortt= [
  "Kenny",
  "Supreme",
  "Ola",
  "Muaz",
  "Muhammed",
  "Rocco",
  "Kalaz",
];

for (cohort of cohortt) {
  if (cohort === "supreme") {
    console.log('This guy is in the list');
  }else {
    console.log('This guy is not included');
  }
}

for (cohort of cohorts) {
    if ( cohort === "supreme") {
        console.log(`${cohorts} This guy is on the lis`);
    }
}

//UNLEANED

// let name = 'Director'

// for (let i = 0; i <=name.length; i++) {
//     console.log(name.charAt(i));
// }

//UNLEANED END