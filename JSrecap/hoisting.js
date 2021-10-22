// 211007 Questions about Hoisting
// Miyabi Tanimichi

// Question 1 :
console.log(y); // undefined
y = 1;
console.log(y); // 1
var y = 2;
y = 3;
console.log(y); // 3
var y;

// Question 2 :

var a = 1;
console.log(a); // 1
var a = 2;
console.log(a); // 2

// Question 3:

var z = 1;
let z;
console.log(z); // undefined
console.log(z); // undefined
let z = 1;

// Answer ==> Identifier 'z' has already been declared
// Because with let keyword you can’t declare a variable again with a name already exists even the first one is with var

// Question 4:

function hoistExample() {
  var a;
  console.log("Before: ", a); // undefined
  a = 10;
  console.log("After: ", a); // 10
}
hoistExample();

// Question 5:

function hoistingExample() {
  console.log("Value of a in local scope: ", a); // 1
}
console.log("Value of a in global scope: ", a); // undefined
var a = 1;
hoistingExample();
