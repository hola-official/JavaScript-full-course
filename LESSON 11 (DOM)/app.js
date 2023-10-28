console.log("Understanding Document Object Model (DOM)");
const ell = document.getElementsByClassName("heading");
console.log(ell);
const el2 = document.getElementById("heading");
const header = document.getElementsByTagName("h1");
const lastHead = document.querySelector(".heading2");
const lastHd = document.querySelector("#para");
const all = document.querySelectorAll("h1 .heading2");

const txt = document.getElementsByClassName("text");
const idT = document.querySelector("#headingText");
const idNa = document.getElementsByTagName("h1 .headingText");
const idName = document.getElementsByTagName("h1 #text");

///  Unwork example is working now changing color
const menuItem = document.getElementsByClassName("menu-item");

const menuItemCLicked = (currEl) => {
  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].classList.remove("active");
  }
  event.target.classList.add("active");
};

//********BUTTON ALERT*********//
const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("Welcome back");
});

//************  CREATING, REVERSE, REMOVE ELEMENT*************//
////////   BY Tutor Soliu

// *****************CREATE ELEMENT************************
const heading = document.createElement("h1");
console.log(heading);

const body = document.querySelector("body");
console.log(body);

body.appendChild(heading);

heading.innerText = "Hello World!";

// const subjects = document.querySelector('.subjects')
// console.log(subjects);

/////   Remove Method
const favSub = document.querySelector(".fav-subject");
favSub.remove();

// NEW KEYWORD
const arr = [1, 2, 3];
console.log(arr);
const arr2 = new Array(1, 2, 3);
console.log(arr2);
const state = {};

const state1 = new Object();

state.bestState = "Lago";
console.log(state);

state1.bestState = "Abuja";
console.log(state1);

const myDate = new Date("September 8, 2023");
console.log(myDate.getFullYear());

console.log(Array());
console.log(Object());
console.log(Number());
console.log(Date());

// *************Not Use Often ***************

const myNumber = new Number(100.23)
console.log(myNumber.toFixed(0));