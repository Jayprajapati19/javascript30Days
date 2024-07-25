// task 4: cretae a module that exports a single function using default export.import and use this function in another script.

function greet(name) {
   return `Hello ${name}!`;
}

module.exports = greet;