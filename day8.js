// day 8 -> ES6+ Features

// activity 1: template literals


// task 1:  use template literals to create a string that includes varilables for a person's and age , and log the string to the console.
let name = "jay";
let age = 19

let message = `Hello , My name is ${name} and I am ${age} years old.`;

console.log(message);



// task 2: create a multi-line string using template literasl and log it to the console.

let multistring = `Offbeat Love Stories and More
Butterfly Weeds  	
Somebody Everybody Listens To  
The Secrets of the Starbucks Lovers `

console.log(multistring);

// activity 2: spread and rest operators

// task 3: use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let numbers = [10, 20, 30, 40, 50]

let [first, second] = numbers;

console.log(`the first number is ${first}`);
console.log(`the second number is ${second}`);

// task 4: use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
   title: " TO kill a Moackingbird",
   author: "HArper lee",
   year: 1960
}

let { title, author } = book;

console.log(`The title of the book is : ${title} `);
console.log(`The author of the book is : ${author}`);


// activity 3: spread and rest operators

// task 5: use the spread operator to create a new array that includes all elements of an existing array plus additional element's and log the new array to the console.

let Arr = [1, 2, 3, 4, 5];

let newArr = [...Arr, 6, 7, 8, 9, 10]

console.log(newArr);

// task 6: use the rest operator in a function to accept an arbitrary number of arguments, sum them , and return the result

// activity 4:  default parameters

// task 7: write a function that takes two parameter and returns their product with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter

// activity 5:  enhanced object literals

// task 8: use enhanced object literals to create an object with methods and properties, and log the object to the console.

// task 9: create an object with computed property names based on variables and log the object to the console.



