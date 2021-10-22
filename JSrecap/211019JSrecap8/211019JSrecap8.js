// 211019 / Miyabi Tanimichi / JS recap 8

// 1. Create a function that counts the integers number of digits.
const countNumOfDigits = (int) => int.toString().length;
// console.log(countNumOfDigits(12345));
// count(318) // Expected output 3

// 2. Create a Table with 3 rows and 3 columns using Javascript
const tableDiv = document.getElementById("tableDiv");
const table = document.createElement("table");
tableDiv.appendChild(table);

for (let i = 0; i < 3; i++) {
  const tableRow = document.createElement("tr");
  table.appendChild(tableRow);
  for (let j = 0; j < 3; j++) {
    const tableData = document.createElement("td");
    tableRow.appendChild(tableData);
  }
}

// 3. Create a counter using html, js and css.There should be a(+) button and(-) button which will increment and decrement the value.
//   Note: Value cannot go below 0

const counterDiv = document.getElementById("counterDiv");
let counter = 0;
const updateCounter = () => {
  counterDiv.innerText = counter;
};

const increment = () => {
  counter++;
  updateCounter();
};

const decrement = () => {
  if (counterDiv.innerText > 0) {
    counter--;
  }
  updateCounter();
};

// 4. Create a form, having values Name, Email, Password and console those values entered by the user on submit button.
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const submitForm = (event) => {
  event.preventDefault();
  console.log(fullName.value);
  console.log(email.value);
  console.log(password.value);
};
