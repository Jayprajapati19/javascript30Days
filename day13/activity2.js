// activity 2: named and default function


// task 3: create a module that exports  multiple functions using named exports. import and use these functions in another script.

function add(a, b) {
   return a + b;
}

function subtract(a, b) {
   return a - b;
}


function multiply(a, b) {
   return a * b;
}

function divide(a, b) {
   if (b === 0) {
      return 'ERROR: Division by Zero'
   }
   return a / b;

}

module.exports = { add, subtract, multiply, divide }








