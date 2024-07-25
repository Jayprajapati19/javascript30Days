// activity 3: importing entire modules

// task 5: create a module that exports multiple constants and functions. import the entire module as an object in another script and use its properties.


const PI = 3.14;
const E = 2.71;

function add(a, b) {
   return a + b;
}


function subtract(a, b) {
   return a - b;
}

module.exports = {
   PI,
   E,
   add,
   subtract,
}