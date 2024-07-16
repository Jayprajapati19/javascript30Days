// Day 4 ->  LOOPS

// Activity 1 -> For Loop
// task 1 ->  numbers from 1 to 10 using for loop

for (let i = 1; i <= 10; i++) {
   //console.log(`${i}`);
}

// task 2 -> the multiplication table of 5

for (let j = 1; j <= 10; j++) {
   console.log(`5 x ${j} = ${5 * j}`);
}


// Activity 2 -> while loop

// task 3 -> sum of numbers from 1 to 10 using a while loop

let sum = 0
let i = 1;
while (i <= 10) {
   sum += i;
   i++;
}
console.log(`The sum of numbers from 1 to 10 is: ${sum}`);


// task 4 -> program to print numbers from 10 to 1 using whilw loop

let k = 10;
while (k >= 1) {
   console.log(k);
   k--;
}

// Activity 3 -> Do while loop

// task 5 ->  print numbers from 1 to 5 using do...whilw loop

let j = 1;
do {
   console.log(j);
   j++;
} while (j <= 5);

// task 6 -> calculate the factorial of a number using a do..whilw loop

let number = 3
let factorial = 1;
let i = 1

do {
   factorial *= i;
   i++
} while (i <= number);

console.log(`The factorial of ${number} is: ${factorial}`);

/*
Activity 4 -> Nested loops
task 7 -> program to print a pattern using nested for loop

*
**
***
****
*****

*/

let rows = 5
for (let i = 1; i <= rows; i++) {
   let pattern = '';
   for (let j = 1; j <= i; j++) {
      pattern += '*'

   }
   console.log(pattern);
}



// Activity 5 -> Loop COntrol statements

// task 8 ->  print numbers from 1 to 10 , but skip the numbers 5 using the continue statement

for (let k = 1; k <= 10; k++) {
   if (k === 5) {
      continue;
   }
   console.log(k);
}


// task 9 ->  print numbers from 1 to 10 , but stop the loop when the numbers is 7 using the break statement

for (let j = 1; j <= 10; j++) {
   if (j == 7) {
      break;
   }
   console.log(j);
}
