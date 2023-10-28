//*********HIGHER ORDER FUNCTION************//
function double(n) {
  return n * 2;
}

console.log(double(5));

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for loop method
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach()
companies.forEach(function (company) {
  console.log(company.name);
});

// filter method
// get 21 and older
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i])
//     }
// }

// console.log(canDrink);

// filter method
// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// console.log(canDrink);

// es6
const canDrink = ages.filter((age) => age >= 21);
console.log(canDrink);

// es5
const retailsCompanies = companies.filter(function (company) {
  if (company.category === "Retail") {
    return true;
  }
});

console.log(retailsCompanies);

const retailsCompanie = companies.filter(
  (companies) => companies.category === "Retail"
);
console.log(retailsCompanie);

//es6
const lastedTenYrs = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(lastedTenYrs);

// map method

// es5
const companyName = companies.map(function (company) {
  return company.name;
});
console.log(companyName);
const companyStart = companies.map(function (company) {
  return company.end;
});
console.log(companyStart);

//es6
const testMap = companies.map(
  (company) => `${company.name}
[${company.start} - ${company.end}]`
);
console.log(testMap);

const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
console.log(ageMap);

// SORT METHOD (es5)
const sortedCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedCompanies);

// es6
const sortedCompany = companies.sort((c1, c2) =>
  c1.start < c2.start ? 1 : -1
);
console.log(sortedCompany);

const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);
// reduce method

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

console.log(ageSum);

const ageSum1 = ages.reduce(function (total, age) {
  return total + age;
}, 0);
console.log(ageSum1);

const ageSum2 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum2);

const totalYrs = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYrs);

// Ccmbined of all method
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combined);

//*********SPREED AND REST OPERATOR (...)************//
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 2, 2, 2));

//Rest Operator
const addNo = (...args) => {
  return args.reduce((acc, val) => acc + val);
};
console.log(addNo(2, 2, 2, 2));

// push method
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

// Spreed Operator
const numbers1 = [1, 2, 3, 4, 5];
const newNumbers = [...numbers1, 6];
// console.log(numbers1);
console.log(newNumbers);

//*****OBJECT AND ARRAY DESTRUCTURING*****//
const persons = {
  firstName: "Gary",
  lastName: "Vee",
  car: {
    color: "red",
    wheel: 4,
  },
  animal: {
    dog: {
      name: "fluffy",
      age: 20,
    },
    cat: {
      name: "kitty",
      age: 10,
    },
  },
};
// console.log(persons);

// Destructuring
const {
  firstName,
  lastName,
  car: { color, wheel },
  animal: { cat, dog },
} = persons;
console.log(persons);

// Array
const introduction = ["Hello", "I", "am", "Sarah"];
console.log(introduction);

// Destructuring
const [greeting, , , name] = introduction;
console.log(greeting, name);
