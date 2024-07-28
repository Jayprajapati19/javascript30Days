// Day 15: Closures

// avtivity 1: Understading closures

// task 1: write a function that returns another function, where the inner function accesses a variable from the outer function's scope. call the inner function and log the result.

function outerFunction() {
   let outerVariable = 'Hello from the outer function!';
   function innerFunction() {
      return outerVariable;
   }
   return innerFunction;
}

const myInnerFunction = outerFunction();
console.log(myInnerFunction());


// task 2: create a closures that maitains a pricate counter. implement functions to increment and get the current of the counter.

// function createCounter() {
//    let count = 0;

//    function increment() {
//       count++;
//    }

//    function getCount() {
//       return count;
//    }

//    return {
//       increment: increment,
//       getCount: getCount
//    };
// }

// const myCounter = createCounter();

// myCounter.increment();
// myCounter.increment();

// console.log(myCounter.getCount());


// activity 2: practical closures

// task 3: write a function that generates unique Ids. use a closures to keep track of the last generated ID and increment it with each call.

// function createIdGenerator() {
//    let lastId = 0;

//    function generateId() {
//       lastId++;
//       return `ID-${lastId}`;
//    }

//    return generateId;
// }

// const idGenerator = createIdGenerator();

// console.log(idGenerator()); // Output: ID-1
// console.log(idGenerator()); // Output: ID-2
// console.log(idGenerator()); // Output: ID-3



// task 4: create a closure that captures a user's name returns a function that greets the user by name.

function createGreeter(userName) {
   function greet() {
      return `Hello, ${userName}!`;
   }

   return greet;
}

const greeterForAlice = createGreeter('Jayy Prajapati');

console.log(greeterForAlice());


// activity 3: closures in loops

// task 5: write a loop that creates an array of functions. each function should log its index when called. use a closures to ensure each function logs the correct index.

// const functionsArray = [];
// for (let i = 0; i < 5; i++) {
//    functionsArray[i] = (function (index) {
//       return function () {
//          console.log(index);
//       };
//    })(i);
// }

// functionsArray.forEach(func => func());



// activity 4: module pattern

// task 6: use closures to create a simple module for managing a collection of items. implement methods to add, remove and list items.

// function createItemManager() {
//    const items = [];

//    function addItem(item) {
//       items.push(item);
//    }

//    function removeItem(item) {
//       const index = items.indexOf(item);
//       if (index !== -1) {
//          items.splice(index, 1);
//       } else {
//          console.log('Item not found.');
//       }
//    }

//    function listItems() {
//       console.log('Items in the collection:', items);
//    }

//    return {
//       addItem: addItem,
//       removeItem: removeItem,
//       listItems: listItems
//    };
// }

// const itemManager = createItemManager();

// itemManager.addItem('Apple');
// itemManager.addItem('Banana');
// itemManager.listItems();

// itemManager.removeItem('Apple');
// itemManager.listItems();

// itemManager.removeItem('Orange');
// itemManager.listItems();


// activity 5: Memoization

// task 7: write a function that memiizes the results of another function. use a closure to store the results of previous computatoions.

// function memoize(fn) {
//    const cache = {};

//    return function (...args) {
//       // Convert arguments to a string key for the cache
//       const key = JSON.stringify(args);

//       if (cache[key]) {
//          console.log('Fetching from cache:', key);
//          return cache[key];
//       }

//       console.log('Computing result for:', key);
//       const result = fn(...args);
//       cache[key] = result;
//       return result;
//    };
// }

// function slowFunction(num) {
//    let result = 0;
//    for (let i = 0; i < 1e6; i++) {
//       result += num;
//    }
//    return result;
// }

// const memoizedSlowFunction = memoize(slowFunction);

// console.log(memoizedSlowFunction(10)); // Computes and logs result
// console.log(memoizedSlowFunction(10)); // Fetches from cache
// console.log(memoizedSlowFunction(20)); // Computes and logs result
// console.log(memoizedSlowFunction(20)); // Fetches from cache


// task 8: create a memoized varsion of a function that calculates the factorial of a number.

function memoize(fn) {
   const cache = {};

   return function (n) {
      if (cache[n] !== undefined) {
         console.log('Fetching from cache:', n);
         return cache[n];
      }

      console.log('Computing result for:', n);
      const result = fn(n);
      cache[n] = result;
      return result;
   };
}

function factorial(n) {
   if (n === 0) return 1; // Base case
   return n * factorial(n - 1); // Recursive case
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(6));







