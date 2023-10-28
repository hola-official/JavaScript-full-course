//*********Asynchronous Javascript**********//
/// Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting.

//        SetInterval
// setInterval(() => {
//   console.log("Hello world!");
// }, 1000);

// const myInterval = setInterval(() => {
//     console.log('Hello world!');
// }, 2000);
// console.log(myInterval);
// clearInterval(myInterval)

const myInterval = setInterval(() => console.log("Hello world!"), 1000);
clearInterval(myInterval);

//        SetTimeOut
// Example 1
// setTimeout(() => {
//     console.log('Welcome to DLT Africa');
// }, 5000);

// Example 2
setTimeout(() => {
  console.log("at the top");
}, 7000);

console.log("at the bottom");

// Example 3
// let timer1 = setTimeout(firstMessage, 3000);
// let timer2 = setTimeout(secondMessage, 9000);
// let timer3 = setTimeout(thirdMessage, 6000);
// function firstMessage () {
//     alert(`Hey Guys  its ranning day`)
// }
// function secondMessage () {
//     alert(`Cold every I need hot`)
// }
// function thirdMessage () {
//     alert(`It's stingy moment oh Kalaz look away`)
// }

// const button = document.querySelector('button');
// button.addEventListener("click", () => {
//     alert("Welcome to DLT Africa")
// });

// setTimeout(firstMessage, 3000)

// correction

// document.getElementById('button').onclick = function () {
//     clearTimeout(timer1)
//     clearTimeout(timer2)
//     clearTimeout(timer3)

//     alert(`Yoga thanks for coming`)
// }

// settimeout
// let supreme = 'smallchops'
// let price = 300
// let timer1 = setTimeout(firstMessage, 3000, supreme, price);
// let timer2 = setTimeout(secondMessage, 9000)
// let timer3 = setTimeout(thirdMessage)

// function firstMessage (supreme, price) {
//     alert(`Hi supreme my ${supreme} has the lowest price of ${price} in the market`)
// }

// function secondMessage () {
//     alert(`Cold every I need hot`)
// }
// function thirdMessage () {
//     alert(`It's stingy moment oh Kalaz look away`)
// }

// document.getElementById('button').onclick = function () {
//     clearTimeout(timer1)
//     clearTimeout(timer2)
//     clearTimeout(timer3)

//     alert(`Yoga thanks for coming`)
// }

//setInterval

// let count = 0

// let max = window.prompt(`Count up to #`);
// max = Number(max)

// const myTimer = setInterval(countUp, 1000);

// function countUp () {
//     count +=1
//     console.log(count);

//     if(count >= max) {
//         clearInterval(myTimer)
//     }
// }
// // Error Object
// try {
//   console.lag();
// } catch (error) {
//   console.log(error);
// }

// show message on window prompt
// try {
//   let x = window.prompt("Enter a #");
//   x = Number(x);

//   if (isNaN(x)) throw "That wasn't a number";

//   if (x == "") throw "kindldy input valid number";

//   console.log(`${x} is a number`);
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log(`congratulations 💃🕺 44`);
// }

// DATE OBJECT
let date = new Date();

let month = date.getMonth();
let dayOfWeek = date.getDay();
let hours = date.getHours();
console.log(date);
console.log(month);
console.log(dayOfWeek);
console.log(hours);

document.getElementById("myLabel").innerHTML = formatTime(date)

function formatDate(date) {
    let month = date.getMonth();
    let hours = date.getHours() + 1;
    let dayOfWeek = date.getDay() +1;
    
    return `${hours}/ ${month}/ ${dayOfWeek}`
}

function formatTime (date) {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let amOrpm = hours >= 12 ? "pm" : "am"

    return `${hours} : ${minutes} : ${seconds}${amOrpm}`
}


// const myDate = (document.getElementById("myLabel").innerHTML = date);

