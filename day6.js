// Day 6 -> Arrays

// Activity 1: Array creation and Access

// task 1: create an array of numbers from 1 to 5 and log the array to the console

const Arr = [1, 2, 3, 4, 5]
console.log(Arr);

// task 2: access the first  and last  element of the array and log them ti the result

let newArr = [1, 2, 3, 4, 5]
let first = newArr[0];
let last = newArr[newArr.length - 1];

console.log("first element is " + first);
console.log("last element is " + last);



// Activity 2: Array method

// task 3: use the push method to add a new number  to the end of the array and log the updated array

let arr = [1, 2, 3, 4, 5]
arr.push(6)
console.log(arr);


// task 4: use the pop method to remove the last element from the array and log the updated array


let arr1 = [1, 2, 3, 4, 5, 6]
arr1.pop(6)
console.log(arr1);

// task 5: use the shift method to remove the first element from the array and log the updated array

let arr2 = [1, 2, 3, 4, 5]
arr2.shift();
console.log(arr2);


// task 6: use unshift method to add a new number to the beginnig of the array and log the updated array

let arr3 = [1, 2, 3, 4, 5]
arr3.unshift();
console.log(arr3);


// Activity 3: Array methods

// task 7: use the map method to create a new array where each number is double  and log the new array

let numbers = [1, 2, 3, 4, 5]

let doubelNum = numbers.map(function (num) {
   return num * 2;
});

console.log(doubelNum);


// task 8: use the filter method to create a new array with only even numbers and log the new array

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let enevenNum = nums.filter(function (num) {
   return num % 2 === 0;
})

console.log("Even num :", enevenNum);

// task 9: use the reduse method to calculate the sum of all numbers in the arrray and log the result

let numsum = [1, 2, 3, 4, 5]

let sum = numsum.reduce(function (total, num) {
   return total + num;
}, 0)

console.log("Sum of numbers: ", sum);

// activity 4 : array myTSL.setIntegrationTime( t )

// task 10: use a for loop to iterate over the array and log each element to the console

let num4 = [1, 2, 3, 4, 5]

for (let i = 0; i < num4.length; i++) {
   console.log(num4[i]);
}


// task 11: use the forEach method to iterate over the array and log each element to the console

let num5 = [1, 2, 3, 4, 5]

num5.forEach(function (number) {
   console.log(number);
})

// activity 5: multi-dimensional array

// task 12: create a two-dimensional array (matrix) and log the entire array to the console

let arr2D = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
]

console.log(arr2D);


// task 13: access and log a specific element from the two-dimensional array

console.log(arr2D[1][2]);








