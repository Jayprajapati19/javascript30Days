// DAy 14:Classes

// activity 1: class definition

// task 1: Define a class person with properties name and age, and a method to return  agreeting message. create an instance of the class and log the greeting messgae.

// class Person {
//    constructor(name, age) {
//       this.name = name;
//       this.age = age;
//    }

//    greeting() {
//       return `Hello, My name is ${this.name} and I am ${this.age} years old.`;
//    }
// }

// const person1 = new Person("Jayy", 19)
// console.log(person1.greeting());


// task 2: add a method to the person class that updates the age property and logs the updated age.

// Define the Person class
// class Person {
//    constructor(name, age) {
//       this.name = name;
//       this.age = age;
//    }

//    getGreeting() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//    }

//    updateAge(newAge) {
//       this.age = newAge;
//       console.log(`Updated age: ${this.age}`);
//    }
// }

// const person1 = new Person('Jay ', 19);

// console.log(person1.getGreeting());

// person1.updateAge(20);

// console.log(person1.getGreeting());



// activity 2: class Inheritance

// task 3: define a class student that extends the person class. add a property studetId and a method to return the student ID. create an instance of the student class and log the student ID.

// class Person {
//    constructor(name, age) {
//       this.name = name;
//       this.age = age;
//    }
// }

// class Student extends Person {
//    constructor(name, age, studentId) {
//       super(name, age);
//       this.studentId = studentId;
//    }

//    getStudentId() {
//       return this.studentId;
//    }
// }

// const student1 = new Student('Jay ', 19, 'jayd11909');

// console.log(student1.getStudentId()); // Output: S12345


// task 4: override  the greeting method in the studetn class to include the student  ID in the message. log the overridden greeting message.

// Define the Person class with a greeting method
// class Person {
//    constructor(name, age) {
//       this.name = name;
//       this.age = age;
//    }

//    greeting() {
//       return `Hello, my name is ${this.name}.`;
//    }
// }

// class Student extends Person {
//    constructor(name, age, studentId) {
//       super(name, age);
//       this.studentId = studentId;
//    }

//    greeting() {
//       return `Hello, my name is ${this.name} and my student ID is ${this.studentId}.`;
//    }

//    getStudentId() {
//       return this.studentId;
//    }
// }

// const student1 = new Student('Jay', 19, 'jdp1909');

// console.log(student1.greeting());


// activity 3: statics methods and properties

// task 5: add a static method to the person class that returns  a generic greeting message. Call this method without creating an instnace of the class and log the message.

// class Person {
//    constructor(name, age) {
//       this.name = name;
//       this.age = age;
//    }

//    greeting() {
//       return `Hello, my name is ${this.name}.`;
//    }

//    static genericGreeting() {
//       return "Hello from the Person class!";
//    }
// }

// const message = Person.genericGreeting();

// console.log(message);


// task 6: add a static property to the studetn class to keep track of the number of students created. increment this property in the constructor and log the total numbers of students.
// class Person {
//    constructor(name, age) {
//       this.name = name;
//       this.age = age;
//    }

//    greeting() {
//       return `Hello, my name is ${this.name}.`;
//    }

//    static genericGreeting() {
//       return "Hello from the Person class!";
//    }
// }

// class Student extends Person {
//    static numberOfStudents = 0;

//    constructor(name, age, studentId) {
//       super(name, age);
//       this.studentId = studentId;

//       Student.numberOfStudents++;
//    }

//    greeting() {
//       return `Hello, my name is ${this.name} and my student ID is ${this.studentId}.`;
//    }

//    getStudentId() {
//       return this.studentId;
//    }
// }

// const student1 = new Student('jay', 20, 'jayd1909');
// const student2 = new Student('diyaa', 20, 'dhp19');
// const student3 = new Student('guduuu', 22, 'S67890');

// console.log(Student.numberOfStudents);

// activity 4: getters and setters

// task 7: add getter method to hte person class to return the full name (assume a firstname and lastname property) creatr an instance and log the full name using the getter.

// class Person {
//    constructor(firstName, lastName, age) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//    }

//    get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//    }

//    greeting() {
//       return `Hello, my name is ${this.fullName}.`;
//    }

//    static genericGreeting() {
//       return "Hello from the Person class!";
//    }
// }

// const person1 = new Person('Jay', 'Prajapati', 20);

// console.log(person1.fullName);


// task 8: add setter method to the person class to update  the name property (firstname and lastname) . update the name using the setter and log the updated full name.

class Person {
   constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
   }

   get fullName() {
      return `${this.firstName} ${this.lastName}`;
   }

   set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
   }

   greeting() {
      return `Hello, my name is ${this.fullName}.`;
   }

   static genericGreeting() {
      return "Hello from the Person class!";
   }
}

const person1 = new Person('jay', 'prajapati', 20);

console.log(person1.fullName);

person1.fullName = 'Tiku Oza';

console.log(person1.fullName);


// activity 5: pricate fields

// task 9: define a class account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

// class Account {
//    #balance;

//    constructor(initialBalance) {
//       this.#balance = initialBalance;
//    }

//    deposit(amount) {
//       if (amount > 0) {
//          this.#balance += amount; // Increase balance
//          console.log(`Deposited: ₹${amount}`);
//       } else {
//          console.log('Deposit amount must be positive.');
//       }
//    }

//    withdraw(amount) {
//       if (amount > 0 && amount <= this.#balance) {
//          this.#balance -= amount; // Decrease balance
//          console.log(`Withdrew: ₹${amount}`);
//       } else {
//          console.log('Invalid withdrawal amount or insufficient funds.');
//       }
//    }

//    getBalance() {
//       return this.#balance;
//    }
// }

// const myAccount = new Account(100);

// myAccount.deposit(50);

// myAccount.withdraw(30);

// console.log(`Current Balance: ₹${myAccount.getBalance()}`);


// task 10: create an instance of the account class and test the deposit and withdraw methods, logging the balance after each operation.


class Account {
   #balance;

   constructor(initialBalance) {
      this.#balance = initialBalance;
   }

   deposit(amount) {
      if (amount > 0) {
         this.#balance += amount; // Increase balance
         console.log(`Deposited: ₹${amount}`);
      } else {
         console.log('Deposit amount must be positive.');
      }
   }

   withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
         this.#balance -= amount; // Decrease balance
         console.log(`Withdrew: ₹${amount}`);
      } else {
         console.log('Invalid withdrawal amount or insufficient funds.');
      }
   }

   getBalance() {
      return this.#balance;
   }
}

const myAccount = new Account(1000);

myAccount.deposit(500); // Deposit ₹500
console.log(`Current Balance: ₹${myAccount.getBalance()}`);

myAccount.withdraw(200); // Withdraw ₹200
console.log(`Current Balance: ₹${myAccount.getBalance()}`);

myAccount.deposit(-100);
myAccount.withdraw(2000);

console.log(`Current Balance: ₹${myAccount.getBalance()}`);




