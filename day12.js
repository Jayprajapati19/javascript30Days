// Day 12: Error Handling

// Activity 1: Basic error handling with try-catch

// task 1: write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
   throw new Error("Something went wrong!")
}

try {
   throwError();
} catch (error) {
   console.log("Error: " + error.message);
}



// task 2: create a function that divides two numbers and throws an error if the denominator is zero. use a try-catch block to handle this error.

function divideNumbers(numerator, denominator) {
   if (denominator === 0) {
      throw new Error("Cannot divide by zero!")

   }
   return numerator / denominator;
}

try {
   const result = divideNumbers(10, 0)
   console.log("RESULT: ".result);
} catch (error) {
   console.log("ERROR: " + error.message);
}


// Activity 2: Finally Blo

// task 3: write a script that includes a try-catch block and a finally block.log messsages in the try-catch and finally blocks to observe the execution flow.

function demo() {
   try {
      console.log("Inside the try block..");
      throw new Errror("An Error occurred!")
   } catch (error) {
      console.log("Inside the catch block..");
      console.log("Error Message: " + error.message);
   } finally {
      console.log("Inside the finally block..");
      console.log("This block executes regardless of an error.");

   }
}

demo()

// Activity 3: Custom Error Objects

// task 4: create a custom error class that extends the built-in error class.  throw an instance of this custom error in a function and handle it using a try-catch block.

class customError extends Error {
   constructor(message) {
      super(message);
      this.name = "CustomError";
   }
}

function riskyFUnction() {
   throw new customError("This is a custom error!");
}


try {
   riskyFUnction();
} catch (error) {
   console.log(error.name + ": " + error.message);
}

// task 5: write a function that validates user input (e.g.. checking if a string in not empty) and throws a custom error if the validation fails. handle the custom error using a try-catch block.

// Activity 4: Error handling in Promises

// task 6: create a promise that randomly resolves or rejects .use .catch() to handle the rejection and log an appropriate message to the console.

// task 7: use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the erorr message.

// Activity 5: graceful error handling in fetch

// task 8: use the fetch API to request data from an invalid URL and handle the error using .catch(). log an appropriate error message to the console.

// task 9: use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. log an appropriate error message.






