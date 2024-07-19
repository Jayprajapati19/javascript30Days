// day 7 :  Objects

// activity 1: object and creation and access

// task 1: create an object representing a book with properties like title, author and year and log the object to the console.

const book = {
   title: "To kill Mockingbird",
   author: "Harper Lee",
   year: 1960,

}

// console.log(book);

// task 2: access and log title and author properties of the object.

// console.log(book.title);
// console.log(book.author);


// activity 2: object method

// task 3: add a method to the book object that return a string with the book's title and author, and log the result of calling this method.

const book2 = {
   title: "To kill Mockingbird",
   author: "Harper Lee",
   year: 1960,

   getBookinfo: function () {
      return `${this.title} by ${this.author}`
   }
}

// console.log(book2.getBookinfo());

// task 4: add a method to the book object that a parameter and updates the book's propery, then log the upload object.

const book3 = {
   title: "To Kill a Mockingbird",
   author: "Harper Lee",
   year: 1960,

   getBookInfo: function () {
      return `${this.title} by ${this.author}`;
   },

   updateBookInfo: function (property, value) {
      this[property] = value;
   }
};

book3.updateBookInfo('title', 'Go Set a Watchman');
book3.updateBookInfo('year', 2015);

console.log(book3);

// activity 3: nested object

// task 5: create a nested object representing a library  with properties like name and books's and log the library object to the console.

const library = {
   name: "Central Library",
   books: [
      {
         title: "The Ministry of Utmost Happiness",
         author: "Arundhati Roy",
         year: 2017
      },
      {
         title: "Poonachi: Or The Story of a Black Goat",
         author: "Perumal Murugan",
         year: 2018
      },
      {
         title: "The God of Small Things",
         author: "Arundhati Roy",
         year: 1997
      },
      {
         title: "A Suitable Boy",
         author: "Vikram Seth",
         year: 1993
      }
   ]
};

console.log(library);



// task 6: access and log the name of the library and the title of all the books in the library.
console.log("Library Name:", library.name);
library.books.forEach(book => {
   console.log("Book Title:", book.title);
});

// activity 4: the this keyword

// task 7: add a method to the book object that uses the this keyword to return a string with the book's title and year and log the result of calling this method.


const poostkalayLibrary = {
   name: "Poostkalay",
   books: [
      {
         title: "The Ministry of Utmost Happiness",
         author: "Arundhati Roy",
         year: 2017,
         getTitleAndYear: function () {
            return `${this.title} (${this.year})`;
         }
      },
      {
         title: "Poonachi: Or The Story of a Black Goat",
         author: "Perumal Murugan",
         year: 2018,
         getTitleAndYear: function () {
            return `${this.title} (${this.year})`;
         }
      },
      {
         title: "The White Tiger",
         author: "Aravind Adiga",
         year: 2008,
         getTitleAndYear: function () {
            return `${this.title} (${this.year})`;
         }
      },
      {
         title: "The Inheritance of Loss",
         author: "Kiran Desai",
         year: 2006,
         getTitleAndYear: function () {
            return `${this.title} (${this.year})`;
         }
      },
      {
         title: "A Suitable Boy",
         author: "Vikram Seth",
         year: 1993,
         getTitleAndYear: function () {
            return `${this.title} (${this.year})`;
         }
      }
   ]
};

console.log(`Library Name: ${poostkalayLibrary.name}`);


poostkalayLibrary.books.forEach(book => {
   console.log(book.getTitleAndYear());
});




// activity 5: object iteration

// task 8: use a for...in loop to over the properties of the book object and log each property  and it's value.

const book4 = {
   title: "The White Tiger",
   author: "Aravind Adiga",
   year: 2008
};

for (let property in book) {
   if (book4.hasOwnProperty(property)) {
      console.log(`${property}: ${book4[property]}`);
   }
}



// task 9: use object.key and object.value method to log all the keys and values of the book object.

const book5 = {
   title: "The White Tiger",
   author: "Aravind Adiga",
   year: 2008
};

const keys = Object.keys(book5);
console.log("Keys:");
keys.forEach(key => {
   console.log(key);
});

const values = Object.values(book5);
console.log("\nValues:");
values.forEach(value => {
   console.log(value);
});

console.log("\nKeys and Values:");
keys.forEach((key, index) => {
   console.log(`${key}: ${values[index]}`);
});


