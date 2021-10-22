/* 211012 /  Miyabi Tanimichi / JS Recap */

/* 1) When resistors are connected together in series, the same current passes through
each resistor in the chain and the total resistance, RT, of the circuit must be equal to the
sum of all the individual resistors added together. That is: 

RT = R1 + R2 + R3

Create a function that takes an array of values resistance that are connected in series,
and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of
electrical resistance in the International System of Units ( SI ).
*/

const calculateOhms = (ohms) => {
  return ohms.reduce((accum, ohm) => accum + ohm);
};

console.log(calculateOhms([20, 30, 30]));

/* 2) Given a number, return an array containing the two halves of the number. If the
number is odd, make the rightmost number higher. */

const numberSplit = (num) => {
  if (typeof num !== "number") return "input number";
  let twoHalvesOfNum = [];
  const numDevided2 = num / 2;
  if (num % 2 === 0) {
    twoHalvesOfNum.push(numDevided2, num - numDevided2);
  } else if (num % 2 === 1 || num % 2 === -1) {
    twoHalvesOfNum.push(numDevided2 - 0.5, num - numDevided2 + 0.5);
  }
  return twoHalvesOfNum;
};

console.log(numberSplit(8));
console.log(numberSplit(9));
console.log(numberSplit(-11));
console.log(numberSplit(-16));

/* 3) Create a function that takes an array of non-negative integers and strings and
return a new array without the strings. */

const filterArray = (mixedArr) => {
  return mixedArr.filter((val) => typeof val === "number");
};

console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

/* 4) Take an array of integers (positive or negative or both) and return the sum of the
absolute value of each element. */

const getAbsSum = (numArr) => {
  return Math.abs(numArr.reduce((accum, cv) => accum + cv));
};

console.log(getAbsSum([-1, -10, -3]));
console.log(getAbsSum([2, 100, 30, 43]));

/* 5) A set is a collection of unique items. A set can be formed from an array from
removing all duplicate items. */

const set = (duplicatedArr) => [...new Set(duplicatedArr)];

console.log(set([1, 1, 1, 1, 1, 1, 12, 5, 8]));
console.log(set([1, 1, 5, 5, -4, -5, -5]));
