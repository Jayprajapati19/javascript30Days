# 30 Days of javascript Challenge

## JavaScript Variables and Data Types

### Day 1: Variables and Data Types in JavaScript

#### 1. Variable Declaration:

- **`var` Keyword:**

  - Used for declaring variables that are function-scoped or globally-scoped.
  - Example:
    ```javascript
    var num1 = 19;
    console.log(num1); // Outputs: 19
    ```

- **`let` Keyword:**
  - Introduces block-scoped variables, replacing `var` in modern JavaScript.
  - Example:
    ```javascript
    let name = "Jay Prajapati";
    console.log(name); // Outputs: "Jay Prajapati"
    ```

#### 2. Constant Declaration:

- **`const` Keyword:**
  - Declares constants that cannot be reassigned.
  - Example:
    ```javascript
    const isLoggedIn = true;
    console.log(isLoggedIn); // Outputs: true
    ```

#### 3. Data Types:

JavaScript supports several primitive and reference data types:

- **Primitive Data Types:**

  - **Number:** Represents numeric values.

    ```javascript
    let myNumber = 42;
    console.log(typeof myNumber); // Outputs: "number"
    ```

  - **String:** Represents textual data enclosed in quotes.

    ```javascript
    let myString = "Hello, world!";
    console.log(typeof myString); // Outputs: "string"
    ```

  - **Boolean:** Represents a logical entity with values `true` or `false`.

    ```javascript
    let myBoolean = true;
    console.log(typeof myBoolean); // Outputs: "boolean"
    ```

  - **Undefined:** Represents a variable that has been declared but not assigned a value.

    ```javascript
    let myUndefined;
    console.log(typeof myUndefined); // Outputs: "undefined"
    ```

  - **Null:** Represents the intentional absence of any object value.

    ```javascript
    let myNull = null;
    console.log(typeof myNull); // Outputs: "object" (known issue in JavaScript)
    ```

  - **Symbol:** Represents a unique identifier.

    ```javascript
    let mySymbol = Symbol("symbol");
    console.log(typeof mySymbol); // Outputs: "symbol"
    ```

  - **BigInt:** Represents integers larger than `2^53 - 1` or smaller than `-2^53 - 1`.
    ```javascript
    let myBigInt = 12345678901234567890n;
    console.log(typeof myBigInt); // Outputs: "bigint"
    ```

- **Reference Data Types:**

  - **Object:** Represents instances through properties and methods.

    ```javascript
    let myObject = { name: "Alice", age: 30 };
    console.log(typeof myObject); // Outputs: "object"
    ```

  - **Array:** Represents a list of items, accessed by index.

    ```javascript
    let myArray = [1, 2, 3, 4, 5];
    console.log(typeof myArray); // Outputs: "object"
    ```

  - **Function:** A callable object that executes a block of code.
    ```javascript
    let myFunction = function () {
      return "This is a function";
    };
    console.log(typeof myFunction); // Outputs: "function"
    ```

# Day 2: Operators

### Task 1: Add Two Numbers

```javascript
const num1 = 10;
const num2 = 20;
const sum = num1 + num2;
console.log(sum); // Output: 30
```

num1 and num2 are initialized with values 10 and 20, respectively.
sum stores the result of adding num1 and num2.
The console.log(sum) statement outputs the result 30.

### Task 2: Subtract Two Numbers

```javascript
const num3 = 20;
const num4 = 10;
const difference = num3 - num4;
console.log(difference); // Output: 10
```

- **Explanation:**
  num3 and num4 are initialized with values 20 and 10, respectively.
  difference stores the result of subtracting num4 from num3.
  The console.log(difference) statement outputs the result 10.
