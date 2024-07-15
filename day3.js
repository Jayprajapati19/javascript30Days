// Day -> 3 Control  Structures

// task 1 -> write a program to check if a number is positeve, negative or zero and log the result using if-else

let num = 19;

if (num > 0) {
   console.log(num + " is Positive");
} else if (num < 0) {
   console.log(num + " is Negative");
} else {
   console.log(num + " is Zero");
}




// task 2 -> write a program to check if a person is eligible to vote (age >= 18) and log the result using if-else

let age = 20;

if (age >= 18) {
   console.log("You are eligible to vote");
} else {
   console.log("You are not eligible to vote");
}




// task 3 -> write a program to find the largest of three numbers using nested if-else statements  

let num1 = 10;
let num2 = 25;
let num3 = 20;

let large;

if (num1 >= num2) {
   if (num1 >= num3) {
      large = num1;
   } else {
      large = num3;
   }
} else {
   if (num2 >= num3) {
      large = num2;
   } else {
      large = num3;
   }
}

console.log("The Largest Number is " + large);




// task 4 -> write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name

let dayNumber = 3;

let dayName;

switch (dayNumber) {
   case 1:
      dayName = "Monday"
      break;
   case 2:
      dayName = "Tuesday"
      break;
   case 3:
      dayName = "Wednesday"
      break;
   case 4:
      dayName = "Thursday"
      break;
   case 5:
      dayName = "Friday"
      break;
   case 6:
      dayName = "Saturday"
      break;
   case 7:
      dayName = "Sunday"
      break;

   default:
      dayName = "Invalid Day Number"
      break;
}

console.log("The Day is: " + dayName);


// task 5 -> write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'E', 'F') based on score and log the grade



// task 6 -> write a program that uses the ternary operator to check if a number is even or odd and log the result



// task 7 -> write a program to check if a year is a leap year using multiple conditions (divisibel by 4, but not 100 unless also divisible by 400) and log the result




