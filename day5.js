// day5 -> functions

// activity - 1 -> Function Declaration

// task 1: write a function to check if a number is even or odd and log the result

function checkEvenOrOdd(number) {
   if (number % 2 === 0) {
      console.log(number + " is even.")
   } else {
      console.log(number + " is odd.");
   }
}

checkEvenOrOdd(11)
checkEvenOrOdd(6)

// task 2: write a function  to calculate the square of a number adn return the result

function calculateSquare(number) {
   return number * number;
}

const result = calculateSquare(6)
console.log(result)


// activity - 2 -> Function Expression

// task 3: write a function expression to find the maximum of two number and log the result

const findMax = function (num1, num2) {
   if (num1 > num2) {
      console.log(num1 + " is the maximum number");
   } else if (num2 > num1) {
      console.log(num2 + " is the maximum number");
   } else {
      console.log("Both numbers are equal");
   }
}


findMax(10, 20)
findMax(19, 3)



// task 4: write a function expression to concatenate two string and return the result

const concateString = function (str1, str2) {
   return str1 + str2;
}

const stringResult = concateString("Hello", " jay")
console.log(stringResult);

// activity 3 -> arrow functions

// task 5: write a arrow function to calculate the sum of two numbers and return the result

const sum = (num1, num2) => {
   return num1 + num2;
}

const sumResult = sum(5, 10)
console.log(sumResult);

// task 6: write a arrow function to check if a string contains a specific character and return a boolean value

const containsCharacter = (str, char) => {
   for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
         return true;
      }
   }
   return false;
}

const result1 = containsCharacter("Jay Prajapati", "a")
console.log(result1);
const result2 = containsCharacter("Jay Prajapati", "d")
console.log(result2);


// activity 4 -> function parameter and default values

// task 7: write a function that takes two parameter and return their product. provide a default value for the second parameter

function multiply(num1, num2 = 1) {
   return num1 * num2;
}

const result3 = multiply(5, 4)
console.log(result3);



// task 8: write a function that tqakes a person's name and age and return a greeting message. provide default value for age.

function greet(name, age = 18) {
   return `Hello ${name}, you are ${age} years old.`;
}

const message = greet("Jay", 19)
console.log(message);

// activity 5 -> higher-order functions

// task 9: write a higher-order function that takes a function and a number and calls the function that many items

function repeatFunction(fn, times) {
   for (let i = 0; i < times; i++) {
      fn()
   }
}

const heyJay = () => {
   console.log("hello jay");
}

repeatFunction(heyJay, 5);

// task 10: write a higher-order function that takes two functions and a value applies the first function to the value, and then applies the second function to the result

function applyFunctions(func1, func2, value) {
   const resultFromFunc1 = func1(value);

   const finalResult = func2(resultFromFunc1);

   return finalResult;
}
function double(x) {
   return x * 2;
}

function addOne(x) {
   return x + 1;
}

const value = 3;
const result4 = applyFunctions(double, addOne, value);
console.log(result4);


