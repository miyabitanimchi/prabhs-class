// 211014 / JS recap / Miyabi tanimichi

// 1) Write a function to count odd and even numbers in an array
let array = [1, 4, 11, 20, 55, 0, 4]; // Expected Output = [3, 4]
const countOddAndEvenNums = (arr) => {
  let numOfOdd = 0;
  let numOfEven = 0;
  let numOfOddAndEven = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 1 && numOfOdd++;
    arr[i] % 2 === 0 && numOfEven++;
  }
  numOfOddAndEven.push(numOfOdd, numOfEven);
  return numOfOddAndEven;
};

// console.log(countOddAndEvenNums([1, 4, 11, 20, 55, 0, 4]));
// console.log(countOddAndEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(countOddAndEvenNums([1, 2, 3, -4, 5, 8, 9, 10, 111, -12, 10]));
// 2) Write a function to Move all the 0's on left and 1's on right
// let array = [1, 0, 1, 1, 1, 0, 1, 0, 0]; // Expected Output [0,0,0,0,1,1,1,1,1]
const moveZeroToLeft = (arr) => {
  arr.sort((a, b) => a - b);
  return arr;
};

// console.log(moveZeroToLeft([1, 0, 1, 1, 1, 0, 1, 0, 0]));
// console.log(moveZeroToLeft([1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1]));

// 3) Write a function to sort the array without using ES6 SORT function
// let array = [11, 20, 0, -20, 4, 22, 1, 0]; // Expected Output [-20, 0, 0, 1, 4,11,20, 20]
const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// console.log(sortArray([11, 20, 0, -20, 4, 22, 1, 0]));

// 3) Write the polyfill of Foreach Function for Array

// regular function
let forEachArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Array.prototype.forEachfy = function (callBack) {
  let forEachArray = this;
  console.log(`this is this ${forEachArray}`); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  for (let i = 0; i < forEachArray.length; i++) {
    console.log(callBack(this[i]));
  }
};

// arrow function
// Array.prototype.forEachfy = (callBack) => {
//   let forEachArray = this;
//   console.log(`this is this ${forEachArray}`); // {}

//   for (let i = 0; i < forEachArray.length; i++) {
//     console.log(callBack(this[i]));
//   }
// };

// forEachArr.forEachfy((value) => console.log(value));

// 4) Write the polyfill of Some Function for Array
let someArr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

Array.prototype.somify = function (callBack) {
  let someArray = this;
  let arrWithTrueValues = [];
  someArray.forEach((val) => {
    if (callBack(val) === true) {
      arrWithTrueValues.push(val);
    }
  });
  return arrWithTrueValues.length !== 0 ? true : false;
};
// console.log(someArr.somify((val) => val % 2 === 0));
// console.log(someArr.somify((val) => val === 11));

// 5) Write the polyfill of Every Function for Array

// let everyArr = [10, 20, 30, 40, 50];
// let everyArr = ["miyabi", 40, 50, 100];
let everyArr = [true, false, true];

Array.prototype.everify = function (callBack) {
  let everyArray = this;
  let arrWithTrueValues = [];
  everyArray.forEach((val) => {
    if (callBack(val) === true) {
      arrWithTrueValues.push(val);
    }
  });
  return arrWithTrueValues.length === everyArray.length ? true : false;
};

console.log(everyArr.everify((val) => typeof val === "number"));
console.log(everyArr.everify((val) => typeof val === "boolean"));

// * ---------------------just some test ------------------------- *
// const func1 = () => console.log("hello im func1");
// console.log(func1());
