// 211015 / Miyabi Tanimichi / JS recap 6
// 1) Given an array of integers nums and an integer target, return array with their indices
// nums = [2, 7, 11, 15], target = 9 // Expected Output : [0,1]

const indicesForTargetedSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return "there are no indices for the target";
};

// console.log(indicesForTargetedSum([1, 4, 6, 8, 10], 11));

// 2) Given a square matrix, return the sum of the matrix diagonals.Write a function that returns the sum
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // Expected Output : 25

const calculateSumOfMatrix = (matrix) => {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i <= 2; i++) {
    sum1 = sum1 + matrix[i][i];
  }
  for (let j = 2; j >= 0; j--) {
    sum2 = sum2 + matrix[j][j];
  }
  return sum1 + sum2 - matrix[1][1];
};

// console.log(
//   calculateSumOfMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
// console.log(
//   calculateSumOfMatrix([
//     [3, 3, 3],
//     [3, 3, 3],
//     [3, 3, 3],
//   ])
// );

// 3) Given a string.Count the number of lower and upper characters in it.S = "ckjkUUYII" Expected Output: [4, 5]
const countLowerUpperChars = (str) => {
  let numOfLowerChars = 0;
  let numOfUpperChars = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      numOfLowerChars++;
    }
    if (str[i] === str[i].toUpperCase()) {
      numOfUpperChars++;
    }
  }
  return [numOfLowerChars, numOfUpperChars];
};

// console.log(countLowerUpperChars("miYabiTaNIMIchI"));

// 4) Given a string str containing alphanumeric characters.The task is to calculate the sum of all the numbers present in the string.
//   str = "1abc23" // Expected Output : 6
const calculateNums = (str) => {
  const numsArr = str.replace(/[^0-9]/g, "").split("");
  const sumOfNums = numsArr.reduce((accum, cv) => Number(accum) + Number(cv));
  return sumOfNums;
};
// console.log(calculateNums("hello12345"));
// console.log(calculateNums("thanksgiving55596yay"));

// 5) A group of friends have decided to start a secret society.The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
//   societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN" NOTE: The secret society's name should be entirely uppercased.
const createSecretSocietyName = (names) => {
  let societyNameArr = [];
  for (let i = 0; i < names.length; i++) {
    const firstLetterOfName = names[i][0].toUpperCase();
    societyNameArr.push(firstLetterOfName);
  }
  societyNameArr.sort();
  const societyNameToStr = societyNameArr.join("");
  return societyNameToStr;
};
// console.log(createSecretSocietyName(["Adam", "Sarah", "Malcolm"]));
// console.log(createSecretSocietyName(["Monica", "Rachel", "Ross"]));

// 6) Write a function that converts an object into an array of keys and values.
//   objectToArray({
//     D: 1,
//     B: 2,
//     C: 3
//   }) ➞[["D", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞[["likes", 2], ["dislikes", 3], ["followers", 10]]

const convertObjToArr = (obj) => {
  let objToArr = [];
  for (let key in obj) {
    objToArr.push([key, obj[key]]);
  }
  return objToArr;
};

console.log(
  convertObjToArr({
    D: 1,
    B: 2,
    C: 3,
  })
);
console.log(
  convertObjToArr({
    name: "miyabi",
    school: "ciccc",
    course: "wmad",
  })
);
// NOTE: You cannot use Prebuild Object functions
