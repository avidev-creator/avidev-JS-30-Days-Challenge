// Day 4 Loops

// Activity 1 - For Loop

// Task 1

for (let i = 0; i < 11; i++) {
  console.log(i);
}

// Task 2

for (let i = 1; i < 11; i++) {
  console.log(5 * i);
}

// Activity 2 - While Loop

// Task 3
let i = 1,
  sum = 0;

while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

// Task 4

let j = 10;

while (j >= 1) {
  console.log(j);
  j--;
}

// Activity 3 - Do While Loop

// Task 5

let item = 1;

do {
  console.log(item);
  item++;
} while (item <= 5);

// Task 6

let fact = 1,
  result = 1;
let takenNumber = 5;

do {
  result *= fact;
  fact++;
} while (fact <= takenNumber);
console.log(result);

// Activity 4 - Nested Loops

// Task 7
let str = "*";
let pass = " ";

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pass += str;
  }
  console.log(pass);
}

// Activity 5 - Loop Control Statements

// Task 8
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

// Task 9
for (let i = 1; i <= 10; i++) {
  if (i == 7) break;
  console.log(i);
}
