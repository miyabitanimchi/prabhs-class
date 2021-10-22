// 211018 / Miyabi Tanimichi / JS recap 7

// 1. Write a function/polyfill for all objects to calculate their size.
Object.prototype.getSize = function () {
  const keyArr = Object.keys(this);
  return keyArr.length;
};
// let object = { a: 1, b: 2, c: 3 };
let object = { d: 10, e: 20, f: 30, g: 40, h: 50 };
// console.log(object.getSize()); // Expected output 3

// 2. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
//   Note: Volume of a cylinder: V = πr2h

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  calculateVolOfCylinder = () => `${this.radius ** 2 * this.height}π㎥`;
}

const cylinder = new Cylinder(3, 10);
// console.log(cylinder.calculateVolOfCylinder());

// 3. Write a JavaScript program to create a Clock.
//   Note: The output will come every second.
const showTime = () => {
  const day = new Date();
  console.log(`${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`);
};
// setInterval(showTime, 1000);
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

// 4. Write a function that prints 1, 2, 3...10 after every 1 second
let count = 0;
const printSecond = () => {
  count++;
  console.log(count);
};
// setInterval(printSecond, 1000);

// ************ OUTPUT BASED QUESTIONS *******************

// 5.
const func = (function (a) {
  delete a;
  console.log(!!delete a);
  console.log(`this is just after delete : ${a}`);
  return a;
})(5);

// console.log(func); // 5
// because delete operator is for deleting a property of an abject

// 6.
// console.log({ a: 1 } == { a: 1 }); // false
// console.log({ a: 1 } === { a: 1 }); // false
// because each object has their memory / address

// 7.
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

// getAge(); // error: age is not defined
// you need a keyword when you use "use strict"

// 8.
// console.log(!!null); // false
// console.log(!!""); // false
// console.log(!!1); // true

// 9.
console.log([..."Ayush"]); // [ 'A', 'y', 'u', 's', 'h' ]

// 10.
let lang = "javascript";
(function () {
  let lang = "java";
  console.log(`this is inside the lang function : ${lang}`);
})();

// console.log(lang); // "javascript"
// because variables with let keywords can't go outside the scope
// so console.log(lang) only accesses the one outside the function

(function () {
  var lang2 = "java";
})();

// console.log(lang2); // lang2 is not defined

// 11.
const obj = { a: "one", b: "two", a: "three" };
console.log(obj); // { a: 'three', b: 'two' }
// a: "three" overwhites a: "one"
