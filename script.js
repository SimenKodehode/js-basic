// Lesson 1: intro to javascript

// Comments

// ctrl + * to make a comment
// shift + alt + A to make a multi line comment

/* addEventListenersad
das
d
SVGDefsElements
dispatchEventd */

// Section 1: console.log()
// the console.log() function prints messages to the console.
// its an essential tool for debugging and checking what your code is doing.

console.log("hello world!");

// Section 2: Variables and Data Types

// camelCase - this is when we write first words letter in lowercase and subsequent first letters in uppercase. its used for naming variables in JS.

// Variables store data values. Here are some example of various data types:

// String (text)
let exampleString = "this is a string";
console.log(exampleString);

// Number
let exampleNumber = 50;
console.log(exampleNumber);

// Boolean
let booleanExample = true;
console.log(booleanExample);

// Array (list of values)
let exampleArray = ["red", "green", "blue"];
console.log(exampleArray); //logs the entire array
console.log(exampleArray[1]); // logs only the value at index 1 of the array
// Arrays have indexes, index starts from 0!

// object (hold key value pairs)

let person = {
  name: "Alice",
  age: 25,
  isStudent: false,
};
console.log(person);

// Undefined (declared valriable, but not assigned value)
let exampleUndefined;
console.log(exampleUndefined);

// Null
let nullExample = null;
console.log(nullExample);

// let vs const
// whne declaring variables with let, we are able to reassign the value stored inside.
// When declairing variables with const, the values inside may not be reassigned.
// Use const as the default, use let when the variable wil be reassigned.

let changableMessage = "I can change"; // Declairing variable and giving value
changableMessage = "I have Changed!"; //Reassigning the value inside
console.log(changableMessage);

const fixedValue = "I do not change";
// fixedValue = "uh oh";
console.log(fixedValue);

// Section 3: Operators
// Operatios preform calculations or comparisons.

let num1 = 12;
let num2 = 5;

console.log(num1 + num2); //addition
console.log(num1 - num2); //subtraction
console.log(num1 * num2); //multiplication
console.log(num1 / num2); //division
console.log(num1 % num2); // modulus (remainder)

// Using the + to add together strings
const firstName = "Jane";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(firstName, lastName, fullName);

// incrementing with ++ and decrementing with --

let counter = 0;

counter++; //increases number by 1
counter++;
counter++;
counter--; //decreases number by 1
counter--;

console.log(counter);

//addition and Subtraction

let score = 10;
//reassigns score to be the current score + 10
score = score + 10;
//does the same, but using the addition assignment
score += 10;

score = score - 5;
score -= 5;

console.log(score);

//Multiplication and Division assingments
score *= 2;
console.log(score);

score /= 2;
console.log(score);

//comparison operators

//these operators compare values and return a boolean (true or false)

console.log(15 > 20); //greater than
console.log(15 < 20); //less than
console.log(15 >= 15); //greater than or equal to
console.log(15 == "15"); //equal to (does not take data type into account)
console.log(15 === "15"); //stricktly equal to (takes into account data type)
console.log(15 != "15"); //not equal to
console.log(15 !== "15"); //strictly not equal to
