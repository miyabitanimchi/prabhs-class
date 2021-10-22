// Convert this async function to async / await
const renderQuote = async () => {
  try {
    const quote = await getQuote();
    console.log(quote);
  } catch (err) {
    console.log(err);
  }
};

// Convert this if-else statement to the conditional operator *
const age = 30;
let older;

age < 20 ? (older = false) : (older = true);

// Convert this code to arrow function.
const greeting = (firstname, lastname) => `Hi, ${firstname} ${lastname}`;

// What is ES6?
// ES6 is the 6th edition of the specification for JavaScript. There was a big update and there are new features which suit to create modern websites, and make them to be made with less complexity.

// Name 3 examples of ES6 feature.
// a. let and const keywords b. arrow function c. class

// What is the difference between let and const?
// let can be reassigned, but const can not. And neither of them can't be redeclared.

// How do you access object values? Give 3 examples
// const miyabi = {
//   lastName: "Tanimichi",
//   nationality: "Japan",
//   status: "Student"
// }
// console.log(miyabi.lastName); // a. Dot notation accessor
// console.log(miyabi["nationality"]); // b. Bracket notation accessor

// const { status } = miyabi; // c. Object destructuring
// console.log(status);

// What does setInterval and setTimeout do?
// [setInterval] setInterval() allows us to set a timer(interval) with milliseconds in its second parameter and can continue to execute the function at the specified interval until clearInterval() is called.
// [setTimeOut] setTimeOut() also allows us to set a timer, BUT the function is executed only once after the milliseconds specified.

// What are promises?
// Promise is the object which represents the value for the result of the completion of the asynchronous processing.

// When do we use promises? (give atleast 2 examples)
// a. When you want to run code asynchronously. b. When you avoid having callback hell.

// Explain what a callback function is.
// Callback functions are a function whish is passed to a parameter of a higher-order function and is called by the function.

// Something is wrong with this code. Explain how to fix this
const getStudentGrretings = (student) => `Hi!, ${student}`;
const textArrays = students.map(getStudentGrretings(student));
// For the first parameterof the map method, it'll be each value of the array 'studets' so you can't pass the function.
// This code should be something like:
const getStudentGreeting = (student) => `Hi, ${student}`;
const textArrays = students.map((student) => getStudentGreetings(student));

// What does the functions pop and push do to an array?
// [pop()] pop() removes the last element of an array.
// [push()] push() adds an element passed in the parameter, and the element is added to the last position of an array.

// What is the expected answer to this code?
const string1 = "";
const object1 = { a: 1, b: 2, c: 3 };

for (let property1 in object1) {
  string1 += object1[property1];
}
console.log(string1);

// What data type would Array.map() and Array.filter() return?
// [map()] The map() method returns a new array with elements and each of the elements has the result of the given function. [filter()] The filter() method returns an array with only elements which passed a test in the given function.

// What data type would Array.includes() and Array.some() return?
// [includes()] The includes() method returns true/false. If a specified value passed in the parameter is included in an array, it returns true, otherwise it returns false. [some()] The some() method returns true/false as well. It is to see if at least one element passes the test given by the provided function.

// Write 1 line of code to set the age of the student to 40
class Student {
  static studentClassName = "React";
  constructor(name, age) {
    this.name = name;
    this.age = age;

    const studentName = name;
  }
}

const firstStudent = new Student("miyabi", 28);
firstStudent.age = "40";
console.log(firstStudent.age);

// What is 3 dots in javascript? (Write 2 features)
// This is a syntax for the spread operators.a. it destructures arrays and objects. b. you can concat arrays.

// I want to override the "name" value with a new object variable. What is wrong with this code?
const obj = {
  name: "Aka",
  age: 31,
};
const newObj = { ...obj, name: "John" };
console.log(newObj);
// ...obj should be written before name: "Derrick". So this should be const newObj = { ...obj, name: "Derrick" };

// Write down the 4 main methods of rest api
// GET, POST, PUT AND DELETE

// What do we send in the body(data) of rest api?
// Information you want to send to the server.

// What do we call the url part of REST API?
// Endpoint

// What is the difference between JSON and javascsript object?
// JSON objects need strings in the keys, but JS objects don't.

// Explain what API is
// API (Application Programming Interface) is a specificatiion of an interface to get and receive data between software components.

// Let's say we have query params that we want to include in an api call. example: { a: 1, b: 2 } How do we convert this into query-string?
// ?a=1&b=2

// What is an api key?
// API key is key or kind of password to access the data.
