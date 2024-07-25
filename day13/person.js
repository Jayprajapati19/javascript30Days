const person = {
   name: "jay prajapati",
   age: 19,
   greet() {
      return `Hello, my name is ${this.name}.`
   },
   celebrateBday() {
      this.age += 1;
      return `I am now ${this.age} years old.`
   }
}

module.exports = person;