// Activity 4: using third-party modules

// task 6: install a third-party module (e.g., lodash) using npm. import and use a function from this module in a script.

const chunk = require("lodash/chunk")
let arr = [1, 2, 3, 4, 5, 6]
let narr = chunk(arr, 2)
console.log(narr)


