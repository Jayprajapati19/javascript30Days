// Day 11:  Promises and Async/Await

// activity 1: Understanding Promises

// task 1: create a prommise that resolve with a messsage after 2-second timeout and log the message to the console.




/*
let myPromise = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve("Hello! This is a messahe after 2 seccons.")
   }, 2000)
});

myPromise.then((message) => {
   console.log(message);
})
    */






// task 2: create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()

/*

let myPromise1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      reject("ERROR: Something went wrong after 2 seconds.")
   }, 2000);
})

myPromise1.catch((error) => {
   console.log(error);
})

*/

// activity 2: Chaining Promises

// task 3: create a sequence of promises that simulate fetching data from a server.chain the promises to log message in a  specific order.

/*

const sequencedPromise = new Promise((resolve, reject) => {
   const res = fetch("https://api.github.com/users/Jayprajapati19")
   if (res) resolve(res)
   else reject(`Task 3 promise got an error`)
})

sequencedPromise.then(res => res.json()).then(data => console.log(data.name)).catch(errorMessage => console.log(errorMessage))

*/

// activity 3: using async/await

// // task 4: write an async function that waits for a promise to reslove and then logs the resloved value.
// async function valueEqualsTwo(number_one, number_two) {
//    const data = await number_one + number_two
//    return data === 2 ? console.log(`Task 4 : Promise Resolved`) : console.log(`Task 4 : Promise Rejected`)
// }
// console.log(`exiting!`)

// valueEqualsTwo(3, 4)
// valueEqualsTwo(1, 1)


// task 5: write an async function that handles a rejected promise using try-catch and logs the error message.

const promise2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      let error = true
      if (!error) {
         resolve({ username: "test", password: "1234" })
      } else {
         reject("ERROR : Task 5 went wrong!")
      }
   }, 1000)
})

async function consumedPromise() {
   try {
      const response = await promise2
      console.log(response);
   } catch (error) {
      console.log(error);
   }
}

consumedPromise()

// activity 4: fetching data from API

// task 6: use the fetch api to get data from a public api and log the response data to the console using promises.

fetch('https://api.github.com/users/Jayprajapati19')
   .then(response => response.json())
   .then(data => {
      console.log("Data fetched using promises from API: ", data)
   })
   .catch(error => {
      console.log("ERROR in Task 6: ", error)
   })

// task 7: use the fetch api to get data from a public api and log the response data to the console using async/await

async function fetchUserData() {
   const response = await fetch(`https://api.github.com/users/Jayprajapati19`)
   const data = await response.json()
   const userEmail = data.data
   console.log(userEmail)
}

fetchUserData()

// activity 5: concurrent promises

// task 8: use promise.all to wait for multiple promises to reslove and then log all their values.

const pr1 = new Promise((resolve) => {
   setTimeout(() => {
      resolve("Task 8 in progress...First promise resolved")
   }, 1000)
})
const pr2 = new Promise((resolve) => {
   setTimeout(() => {
      resolve("Task 8 in progress...Second promise resolved")
   }, 2000)
})
const pr3 = new Promise((resolve) => {
   setTimeout(() => {
      resolve("Task 8 in progress...Third promise resolved")
   }, 3000)
})

Promise.all([pr1, pr2, pr3]).then((values) => {
   console.log("Task 8 completed")
   console.log(values)
})

// task 9: use promise.race to log the value of the first promise that resolves among multiple promises.

const p1 = new Promise((resolve) => {
   setTimeout(() => {
      resolve("Task 9 in progress...First promise resolved")
   }, 1000)
})
const p2 = new Promise((resolve) => {
   setTimeout(() => {
      resolve("Task 9 in progress...Second promise resolved")
   }, 2000)
})
const p3 = new Promise((resolve) => {
   setTimeout(() => {
      resolve("Task 9 in progress...Third promise resolved")
   }, 3000)
})

Promise.race([p1, p2, p3]).then((value) => {
   console.log("Task 9 completed")
})













