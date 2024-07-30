// Day 16: Recursion

// activity: basic recursion

// task  1: write a recursive function to calculate the factorial of a number. log the result for a few test cases.

function factorial(n) {
   if (n === 0 || n === 1) {
      return 1;
   }
   return n * factorial(n - 1);
}

console.log("Factorial of 0:", factorial(0)); // Output: 1
console.log("Factorial of 1:", factorial(1)); // Output: 1
console.log("Factorial of 5:", factorial(5)); // Output: 120
console.log("Factorial of 7:", factorial(7)); // Output: 5040



// task 2 : write a recursive function to calculate the nth fibonacci number. log the result for a few test cases.

// function fibonacci(n) {
//    if (n === 0) {
//       return 0;
//    }
//    if (n === 1) {
//       return 1;
//    }
//    return fibonacci(n - 1) + fibonacci(n - 2);
// }

// // Test cases
// console.log("Fibonacci of 0:", fibonacci(0)); // Output: 0
// console.log("Fibonacci of 1:", fibonacci(1)); // Output: 1
// console.log("Fibonacci of 5:", fibonacci(5)); // Output: 5
// console.log("Fibonacci of 7:", fibonacci(7)); // Output: 13


// activity 2: Recursion with arrays

// task 3 : write a recursive function to find the sum of all elements in an array. log the result for a few test cases.

// function sumArray(arr) {
//    if (arr.length === 0) {
//       return 0;
//    }
//    return arr[0] + sumArray(arr.slice(1));
// }

// console.log("Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5])); // Output: 15
// console.log("Sum of [10, 20, 30]:", sumArray([10, 20, 30])); // Output: 60
// console.log("Sum of [7, 14, 21]:", sumArray([7, 14, 21])); // Output: 42
// console.log("Sum of []:", sumArray([])); // Output: 0


// task 4: write a recursive function to find the maximum element in an array. log the result for a few test cases


// function findMax(arr) {
//    if (arr.length === 1) {
//       return arr[0];
//    }

//    const maxOfRest = findMax(arr.slice(1));
//    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
// }

// // Test cases
// console.log("Maximum of [1, 2, 3, 4, 5]:", findMax([1, 2, 3, 4, 5])); // Output: 5
// console.log("Maximum of [10, 5, 8, 20, 15]:", findMax([10, 5, 8, 20, 15])); // Output: 20
// console.log("Maximum of [7, 14, 21]:", findMax([7, 14, 21])); // Output: 21
// console.log("Maximum of [-5, -2, -8]:", findMax([-5, -2, -8])); // Output: -2


// activity 3: String Manipulation with Recursion

// task 5 : write a recursive function to reverse a string. log the result for a few text cases.

// function reverseString(str) {
//    if (str.length <= 1) {
//       return str;
//    }
//    return reverseString(str.slice(1)) + str[0];
// }

// console.log("Reverse of 'hello':", reverseString('hello')); // Output: 'olleh'
// console.log("Reverse of 'world':", reverseString('world')); // Output: 'dlrow'
// console.log("Reverse of 'JavaScript':", reverseString('JavaScript')); // Output: 'tpircSavaJ'
// console.log("Reverse of 'A':", reverseString('A')); // Output: 'A'
// console.log("Reverse of '':", reverseString('')); // Output: ''


// task 6 : write a recursive function to check if a string is a palidrome. log the result for a few test cases.


// function isPalindrome(str) {
//    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//    // Base cases
//    if (cleanedStr.length <= 1) {
//       return true;
//    }
//    if (cleanedStr[0] !== cleanedStr[cleanedStr.length - 1]) {
//       return false;
//    }

//    return isPalindrome(cleanedStr.slice(1, -1));
// }

// // Test cases
// console.log("Is 'racecar' a palindrome?:", isPalindrome('racecar')); // Output: true
// console.log("Is 'hello' a palindrome?:", isPalindrome('hello')); // Output: false
// console.log("Is 'A man, a plan, a canal, Panama!' a palindrome?:", isPalindrome('A man, a plan, a canal, Panama!')); // Output: true
// console.log("Is 'Noon' a palindrome?:", isPalindrome('Noon')); // Output: true
// console.log("Is 'Was it a car or a cat I saw?' a palindrome?:", isPalindrome('Was it a car or a cat I saw?')); // Output: true




// activity 4:  Recursive Search

// task 7 :  write  a recursive  function to perform a binary search on a sorted array. log the index of the target element for  a few test cases.

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
   if (low > high) {
      return -1; // Target not found
   }

   const mid = Math.floor((low + high) / 2);

   if (arr[mid] === target) {
      return mid; // Target found
   }

   if (arr[mid] > target) {
      return binarySearch(arr, target, low, mid - 1); // Search in the left half
   } else {
      return binarySearch(arr, target, mid + 1, high); // Search in the right half
   }
}

console.log("Index of 3 in [1, 2, 3, 4, 5]:", binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log("Index of 10 in [1, 2, 5, 7, 10, 15]:", binarySearch([1, 2, 5, 7, 10, 15], 10)); // Output: 4
console.log("Index of 7 in [1, 3, 5, 7, 9]:", binarySearch([1, 3, 5, 7, 9], 7)); // Output: 3
console.log("Index of 1 in [2, 4, 6, 8]:", binarySearch([2, 4, 6, 8], 1)); // Output: -1
console.log("Index of 6 in [1, 2, 3, 6, 9]:", binarySearch([1, 2, 3, 6, 9], 6)); // Output: 3



// activity 5: Tree Traversal

// task 9: write a recursive function to perform an in-order traversal of a binary tree. log the nodes as they are visited.

// function binarySearch(arr, target, low = 0, high = arr.length - 1) {
//    if (low > high) {
//       return -1; // Target not found
//    }

//    const mid = Math.floor((low + high) / 2);

//    if (arr[mid] === target) {
//       return mid; // Target found
//    }

//    if (arr[mid] > target) {
//       return binarySearch(arr, target, low, mid - 1); // Search in the left half
//    } else {
//       return binarySearch(arr, target, mid + 1, high); // Search in the right half
//    }
// }

// console.log("Index of 3 in [1, 2, 3, 4, 5]:", binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
// console.log("Index of 10 in [1, 2, 5, 7, 10, 15]:", binarySearch([1, 2, 5, 7, 10, 15], 10)); // Output: 4
// console.log("Index of 7 in [1, 3, 5, 7, 9]:", binarySearch([1, 3, 5, 7, 9], 7)); // Output: 3
// console.log("Index of 1 in [2, 4, 6, 8]:", binarySearch([2, 4, 6, 8], 1)); // Output: -1
// console.log("Index of 6 in [1, 2, 3, 6, 9]:", binarySearch([1, 2, 3, 6, 9], 6)); // Output: 3


// task 10: write a recursive function to calculate the depth of a binary tree. log the result for a few test cases.

class TreeNode {
   constructor(value = 0, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
   }
}

function getDepth(node) {
   if (node === null) {
      return 0;
   }

   const leftDepth = getDepth(node.left);
   const rightDepth = getDepth(node.right);

   return Math.max(leftDepth, rightDepth) + 1;
}

// Test cases

const root1 = new TreeNode(1,
   new TreeNode(2,
      new TreeNode(4),
      new TreeNode(5)
   ),
   new TreeNode(3)
);
console.log("Depth of tree 1:", getDepth(root1)); // Output: 3

const root2 = new TreeNode(1,
   new TreeNode(2,
      new TreeNode(4,
         new TreeNode(8),
         new TreeNode(9)
      ),
      new TreeNode(5)
   ),
   new TreeNode(3,
      null,
      new TreeNode(6)
   )
);
console.log("Depth of tree 2:", getDepth(root2)); // Output: 4

const root3 = new TreeNode(1);
console.log("Depth of tree 3:", getDepth(root3)); // Output: 1

console.log("Depth of tree 4:", getDepth(null)); // Output: 0





