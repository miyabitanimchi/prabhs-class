// 211013 / JS recap / Miyabi Tanimichi

// Write a function that takes an array as a parameter and returns true if a value is repeated twice or more, else returns false
// Does the following array contains a duplicate
/* let array = [1,4,2,11,1,4,5]; */ // Expected Output -  true
const isDuplicated = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
};

// console.log(isDuplicated([1, 4, 2, 11, 1, 4, 5]));
// console.log(isDuplicated([1, 4, 2, 3, 10, 11, 1000]));
// console.log(isDuplicated([3, 20, -10, 10, 0]));
// console.log(isDuplicated([-9, 0, 1, 2, 10, -9]));

// Write a function that takes in an array, and returns an object having keys as the  array items with their counts
// For given array, return an object with numbers and their counts
/* let array = [1,4,22,1,0,22,4,1];  Expected Output : { 1: 3, 4: 2, 22: 2, 0: 1} */
const countNumOfElems = (arr) => {
  let numOfElems = {};

  arr.forEach((elem, index, array) => {
    numOfElems[elem] = (numOfElems[elem] || 0) + 1;
  });
  return numOfElems;
};

// console.log(countNumOfElems([1, 1, 1, 1, 1, 2, 5, 10, 10, 5]));
// console.log(countNumOfElems([1, 1, 100, -100, 5, 5, -5, 0]));

// test
let obj = {};
obj[1] = "miyabi";
obj["hello"] = "hi hi";

// console.log(obj);

// Write a function that returns a new array/same array after removing Duplicates from an array
/* let array = [1,4,22,1,0,22,4,1]; // Expected Output: [1,4,22,0]; // order can change */

let duplicatedArr = [3, 3, 3, 3, 3, -3, 3, 0, 333, 3000];
const removeDuplicates = (arr) => [...new Set(arr)];

// console.log(removeDuplicates(duplicatedArr));
// console.log(duplicatedArr);

// Write a function that returns a  the missing integer, provided a given array
//let array = [1,2,3,4,6,7,8,9,10]; Expected Output: 5
const getMissingInteger = (arr) => {
  let missingInteger;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      missingInteger = arr[i] + 1;
    }
  }
  return missingInteger;
};

// console.log(getMissingInteger([1, 2, 3, 4, 6, 7, 8, 9, 10]));
// console.log(getMissingInteger([10, 11, 13, 14, 15, 16, 17, 18, 19, 20]));

// Write a function that returns smallest and largest in an array
/* let array = [1,11,-20,5,25,0, 3];  Expected output [-20, 25] */
const getMinAndMaxNums = (arr) => {
  arr.sort((a, b) => a - b);
  return [arr[0], arr[arr.length - 1]];
};

console.log(getMinAndMaxNums([1, 11, -20, 5, 25, 0, 3]));
console.log(getMinAndMaxNums([-9, 20, 50, -100, 0, -12, 2546]));

// Write a function that Reverses an array without using Es6 Reverse Method
// let array = [1,2,3,4] -->Expected Output [4,3,2,1]
const reverseArr = (arr) => {
  const reversedArr = arr.sort((a, b) => b - a);
  return reversedArr;
};
// console.log(reverseArr([1, 2, 3, 4]));
