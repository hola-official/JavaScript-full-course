console.log("Another");

///  ELSE AND IF
const name = "Ibrahim";
const job = "Driver";

if (job === "Mechanic") {
  console.log(`${name} is good ${job}`);
} else if (job === "Driver") {
  console.log(`${name} is an expert ${job}`);
} else {
  console.log("Lazy man");
}

///  SWITCH STATEMENT

const months = "January";
switch (months) {
  case "January":
    console.log("First month of the year");
    break;
  case "Febuary":
    console.log("Second month of the year");
    break;
  case "March":
    console.log("Third month of the year");
    break;
  case "April":
    console.log("Fouth month of the year");
    break;
  case "May":
    console.log("Fifthy month of the year");
  default:
    console.log("Not in the list");
}

//Ternary Operator

const age = 18;

age <= 15 ? console.log("You can vote") : console.log("cone back next year");

//STRING IN DETAILS

const single = "This is a string written inside of single quotes";
const double = "This is a string written inside of double quotes";
const backticks = `This is a string written inside of backticks quotes`;

console.log(single);
console.log(double);
console.log(backticks);

const single1 = "${2 + 2}";
const double2 = "${2 + 2}";
const backtickss = `${2 + 2}`;

console.log(single1);
console.log(double2);
console.log(backtickss);

// STRING INSIDE STRING

const greeting = "Hi, I'm john, but people call me 'Jonny'";

console.log(greeting);

const greeting1 = `Hi, I'm john, but people call me "jonny"`;

console.log(greeting1);

// ESCAPE CHARACTER IN STRING
const greeting2 = "Hi, I'm Rokeeb, but people call me 'Rocco'";
console.log(greeting2);

// STRING LENGTH
const name1 = "Khadijah Musa, Alimi Muaz";
console.log(name1.length);

const firstLetter = name1[0];
const lastLetter = name1[24];

console.log(firstLetter, lastLetter);

//  CHANGE STRING CASE

const mixedStringCase = "Hello, How are you?";
const lowerCase = mixedStringCase.toLowerCase();
const UpperCase = mixedStringCase.toUpperCase();

console.log(UpperCase);
console.log(lowerCase);

//SEARCHING FOR A SUBSTRING
//1. STR.INDEXOF()
const exampleStr = "I love cat, he said, cat are great!";
console.log(exampleStr.indexOf("cat"));
console.log(exampleStr.indexOf("dog"));

// const hobbies = "I love HTML, CSS and JavaScript";
// const index = hobbies.indexOf("JavaScript");
// console.log(index);

// 1.LASTINDEX()
const hobbies = "I love HTML, CSS and JavaScript and React";
const firstIndex = hobbies.indexOf("JavaScript");
const lastIndex = hobbies.lastIndexOf("React");

console.log(firstIndex);
console.log(lastIndex);

const lastIndex1 = "I love Mouse, he said, Mouse is good";
console.log(lastIndex1.lastIndexOf("good"));
console.log(lastIndex1.lastIndexOf("mouse"));

// 3. INCLUDES()

const fruits = "Apple, Pawpaw, Orange and Mango";
console.log(fruits.includes("Orange"));
console.log(fruits.includes("cashew"));

//4. STARTWITH()

const text = "Hello, word, welcome to the universe";
console.log(text.startsWith("Hello"));
console.log(text.startsWith("hello"));

//5. ENDWITH()
const cohorts = "Supreme, Kenny, Rokeeb and Kalas";
console.log(cohorts.endsWith("Kalas"));

// CLASS WORK

const questList = "Muhammed, Kalaz, Rocco, Muaz, Supreme";
console.log(questList.length);
console.log(questList.toUpperCase());

// SUBSTRING
// .6 SLICE()
// it return the part of the string from start to (but not including) end.

const exampleString = "hotdog";
console.log(exampleString.slice(0, 3));
const exampleString1 = "Pineapple";
console.log(exampleString1.slice(4));

// 7. SPLIT()
const sentence = "The quick brown fox jumped over the lazy dog";
console.log(sentence.split(" "));

// 8. REVERSE() METHOD
//To use reverse
// 1. Split a string
//2. Reverse newly created an array
//3. Turn the array into a string using JOIN()

const name2 = "Rocco and Muhammed";
const reverse = name2.split(" ").reverse().join();
console.log(reverse);

const cohort3 = "Muaz, Kenny, Supreme, Muhammad, Kalas, Quadri";
const result = cohort3.split(" ").reverse().join();

console.log(result);

// REPEAT() METHOD
//it repeat a string as given position

const dogSays = "woof";
console.log(dogSays.repeat(10));

// TRIM

const str = "   @examplegmil.com     ";

console.log(str.trim());

//CLASS WORK

//reverse
const footballTeam = "Porto, Brighton, Villareal, Ajax";

const team = footballTeam.split(", ").reverse().join();

console.log(team);

//repeat
const goatSound = "baa";
console.log(goatSound.repeat(6));

//slice
const slice = "I ate rice this afternoon";
console.log(slice.slice(6, 10));

///  CLASS WORK
const myName = "Muhammad Musa Olayinka";
console.log(myName.length);

const mixed = "Hey, all";

const lowCase = mixed.toLowerCase();
const upCase = mixed.toUpperCase();

console.log(lowCase);
console.log(upCase);

const hobi = "Gaming, Call of duty, freefire, pubg";
const hobies = hobi.indexOf("Call of duty");
const lowHobbies = hobi.lastIndexOf("freefire");
console.log(hobies);
console.log(lowHobbies);

const hubbies = hobi.includes("freefire");
console.log(hubbies);

const startHobby = hobi.startsWith("Call of duty");
console.log(startHobby);

const endHobby = hobi.endsWith("Gaming");
console.log(endHobby);

const revHobby = hobi.split(" ").reverse().join();
console.log(revHobby);

const cloth = "cap";
console.log(cloth.repeat(10));

const namy = "     OLA     ";

console.log(namy.trim());

const txtSlice = "The quick brown fox jumps over the lazy dog";
console.log(txtSlice.slice(10, 19));
