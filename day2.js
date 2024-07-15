// ---- Day 2 Challenge ---- //

// Activity 1 = Arithmetic Operations

function Sum(a, b) {
  let c = a + b;
  return c;
}

console.log(Sum(3, 4));

function Substract(a, b) {
  let c = a - b;
  return c;
}

console.log(Substract(9, 4));

function Multiply(a, b) {
  let c = a * b;
  return c;
}

console.log(Multiply(5, 4));

function Divide(a, b) {
  let c = a - b;
  return c;
}

console.log(Divide(9, 4));

function Remainder(a, b) {
  let c = a % b;
  return c;
}

console.log(Remainder(9, 4));

// Activity 2 = Assignment Oprators

let aNum = 15;

console.log((aNum += 5));

let bNum = 19;

console.log((bNum -= 5));

// Activity 3 = Comparison Operators

console.log(15 > 5);

console.log(5 < 15);

console.log(10 >= 9);

console.log(10 <= 20);

console.log(5 == 5);

console.log(15 === 16);

// Activity 4 = Logical Operators

let isActiveUser = true;
let isPaid = true;

if (isActiveUser && isPaid) console.log("User is Active and is a Paid User");

let isLoggedIn = false;

if (isActiveUser || isLoggedIn) console.log("User is Active or logged in");

if (!isPaid) console.log("User is a free user");

// Activity 5 = Ternay Operator

let nu = 15;

console.log(nu < 0 ? "Number is negative" : "Number is positive");
