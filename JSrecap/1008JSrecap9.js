// 2021 Oct 8 JS recap
// Miyabi Tanimichi

// 1. What are the 3 types of for loop

// a. for loop
// b. while loop
// c. for in

// 2. Convert a standard javascript function to an arrow function

// a. standard js function
// const sayHello = function (name) {
//   return `Hello, ${name}`;
// };
// b. js arrow function
const sayHello = (name) => `Hello, ${name}`;

console.log(sayHello("miyabi"));

// 3. Use a switch statement to answer this
// https://www.codewars.com/kata/basic-mathematical-operations/train/javascript
function basicOp(operation, value1, value2) {
  // Code
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}

console.log(basicOp("/", 130, 5));

// 4. Use any looping to answer this
// https://www.codewars.com/kata/reversed-sequence/train/javascript
const reverseSeq = (n) => {
  let arr = [];
  while (n > 0) {
    arr.push(n);
    n--;
  }
  return arr;
};

console.log(reverseSeq(20));

// 5. Just a comparison but good for understanding English
// https://www.codewars.com/kata/transportation-on-vacation/train/javascript
function rentalCarCost(d) {
  let total;
  if (d >= 7) {
    total = d * 40 - 50;
  } else if (d >= 3 && d <= 6) {
    total = d * 40 - 20;
  } else {
    total = d * 40;
  }
  return total;
}
// 6. Use conditions to answer this(a little harder ?)
// https://www.codewars.com/kata/the-feast-of-many-beasts/train/javascript
function feast(beast, dish) {
  const beastArr = beast.split("");
  const dishArr = dish.split("");
  if (
    beastArr[0] === dishArr[0] &&
    beastArr[beastArr.length - 1] === dishArr[dishArr.length - 1]
  ) {
    return true;
  }
  return false;
  //your function here
}
