const obj = {
  firstName: "Muhammed",
  lastName: "Musa",
  favoriteFood: {
    food1: "Rice and Beans",
    food2: "Yam",
    food3: "Tuwo",
  },
};
console.log(obj);
console.log(obj.favoriteFood);
console.log(obj["favoriteFood"]);
const nameKey = Object.keys(obj);
console.log(nameKey);
console.log(Object.values(obj));
console.log(Object.entries(obj));

// THIS KEYWORD
// Example 1
function sentence(words) {
  this.words = words;
  console.log(this);
}

const firstStrigng = new sentence("Hola, We are learning about this keyword");

// console.log(firstStrigng);

// Example 2
const car1 = {
  color: "green",
  brand: "Chevrolet",
  wheels: 4,
};

console.log(car1);
function car(color, brand, wheels) {
  this.color = color;
  this.brand = brand;
  this.wheels = wheels;

  console.log(this);
}

const blueCar = new car("blue", "BMW", 4);
const redCar = new car("red", "Ferrari", 4);

function player(name, age, team, jerseyNo) {
  this.name = name;
  this.age = age;
  this.team = team;
  this.jerseyNo = jerseyNo;

  console.log(this);
}

const playerInfo = new player("Erling Haaland", 23, "Manchester City F.C.", 9);
const playerInfo2 = new player("Messi", 36, "Inter-Miami", 10);
const playerInfo3 = new player("Sterling", 28, "Chelsea", 7);

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { min, max };
}

console.log(minMax([0, 1, 2, 3, 4, 5, 6, 7]));

//**********Class****************//
//  syntax
class m {
  constructor() {}
}

// Example
class Person {
  constructor(name, age, isWorking) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;

    console.log(this);
  }
}
const personInfo = new Person("Supreme", 30, true);

class Car {
  constructor(year, color, brand, wheels) {
    this.year = year;
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;

    console.log(this);
  }
}

const carInfo = new Car(2023, "black", "Benz", 4);

class Player {
  constructor(name, age, team, jerseyNo) {
    this.name = name;
    this.age = age;
    this.team = team;
    this.jerseyNo = jerseyNo;

    console.log(this);
  }
}

const playerInfo4 = new Player("Roberto Carlos", 50, "Real Madrid", 3);

class Person1 {
  constructor(name, age, isBlack) {
    this.name = name;
    this.age = age;
    this.isBlack = isBlack;
  }
}

const user = new Person1("Muhammed", 85, false);
const user1 = new Person1("Muh", 45, true);
const user2 = new Person1("supreme", 15, false);
const user3 = new Person1("Qido", 85, false);
console.log(user);
console.log(user1);
console.log(user2);
console.log(user3);

//               ARRAY Function
// const createPerson = (name, age, isActive) => {
//   const userSchma = {
//     name: name,
//     age: age,
//     isActive: isActive
//   }
//   return userSchma
// }
const createPerson = (name, age, isActive) => {
  return { name, age, isActive };
};

const user7 = createPerson("Kennny", 300, true);
const user8 = createPerson("Kalaz", 30, true);
console.log(user7);
console.log(user8);

class Car1 {
  numberOfCars = 0;
  constructor(model) {
    this.model = model;
    this.numberOfCars += 1;
  }

  static startRace() {
    console.log("3...2...1...GO!");
  }
}

const car2 = new Car1("Toyota");
const car3 = new Car1("Volvo");
const car4 = new Car1("Benz");

console.log(car2.numberOfCars);
console.log(car3.numberOfCars);
console.log(car4.numberOfCars);

Car1.startRace();
//**********WEB STORAGE**************//
// setItem()
// getItem()

localStorage.setItem("name", "John Doe");
let result = (document.getElementById("result").innerText =
  localStorage.getItem("name"));
console.log(result);

sessionStorage.setItem("name", "Ola");
let demo = (document.getElementById("demo").innerHTML =
  sessionStorage.getItem("name"));
console.log(demo);

// Inheritance

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} can eat`);
  }

  sleep() {
    console.log(`This ${this.name} can sleep`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  run() {
    console.log(`This ${this.name} can run`);
  }
}

class Fish extends Animal {
  name = "Fish";

  swim() {
    console.log(`This ${this.name} can swim`);
  }
}

class Bird extends Animal {
  name = "bird";

  fly() {
    console.log(`This ${this.name} can fly`);
  }
}
const rabbit = new Rabbit();
const fish = new Fish();
const bird = new Bird();
console.log(rabbit.alive);
console.log(fish.alive);
console.log(bird.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.sleep();

bird.eat();
bird.sleep();
bird.fly();

// Getter and Setter
//it is composory to use underscore (__) while using (Getter and Setter)
class Carr {
  constructor(power) {
    this._gas = 25;
    this._power = power;
  }

  get power() {
    return `${this._power} hp`;
  }

  get gas() {
    return `${this._gas}L (${(this._gas / 50) * 100} %)`;
  }
  set gas(value) {
    if(value > 50) {
      value = 50
    }else if(value < 0) {
      value = 0
    }

    this._gas = value
  }
}
let carr1 = new Carr(400);
carr1.gas = -50
console.log(carr1.power);
console.log(carr1.gas);
