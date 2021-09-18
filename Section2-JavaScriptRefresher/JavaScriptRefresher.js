/******************************************************************************************
 *  let and const
 * https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
 *
 * var
 * - the old way of declaring a variable that will change
 * - if declared outside of a function becomes a global variable
 * - can be re-declared without error - which can cause problems in the code if re-declared inside a function and is used as a global variable
 *
 * let
 * - the new way of declaring a variable
 * - used to generate a variable that will change within the given scope
 * - cannot be re-declared within the scope, it will error
 *
 * const
 * - creates a variable that will not change within the given scope
 * - block scoped like let
 * - cannot be updated or re-declared
 * - can change an objects contents declared with const
 *
 * Summary
 * - var declarations are globally scoped or function scoped while let and const are block scoped.
 * - var variables can be updated and re-declared within its scope;
 * - let variables can be updated but not re-declared;
 * - const variables can neither be updated nor re-declared.
 * - They are all hoisted to the top of their scope.
 * - var variables are initialized with undefined, let and const variables are not initialized.
 * - var and let can be declared without being initialized
 * - const must be initialized during declaration.
 */

/******************************************************************************************
 * Arrow Functions
 */
//Old function style
function printNameOld(name, age) {
  console.log(name, age);
}
//New function style
const printNameNew = (name, age) => {
  console.log(name, age);
};
//New function style - parentheses not required with only one parameter
const double = (number) => number * 2;

/******************************************************************************************
 * Exports and Imports
 *
 * export default - used to export a class or function in a file to another file
 */

export default double;

/**
 * Import actions import the functions into another file
 *
 * when importing a default import you can import the function and name it in the same action
 */

import person from "./person.js";

/**
 * to rename the function you just change what the import calls the function below would call the same function as above but rename it
 */

import prs from ".person.js";

/**
 * Export named exports/function (multiple functions or variables from a single file) use the export const syntax below
 */

export const doubleDouble = (number) => double(number * 2);

/**
 * When importing named exports from a file you must use the following syntax
 */

import { dataBase } from "./utility.js";

/**
 * to rename a named export you have to use as
 */

import { dataBase as dB } from "./utility.js";

/**
 * to import all the named exports from a file you can use the following syntax
 */

import * as bundled from ".utility.js";

/**
 * you would then call the function using bundled.dataBase
 */

/******************************************************************************************
 * Classes - ES6
 *
 * can have properties and classes
 * allows inheritance and prototypes
 */
class Pet {
  constructor(gender) {
    this.gender = gender;
  }

  printGender() {
    console.log(this.gender);
  }
}
class Cat extends Pet {
  constructor(gender, name) {
    super(gender);
    this.name = name;
  }

  printMyName() {
    console.log(this.name);
  }
}

const cat = new Cat("Male", "Sammy");
cat.printMyName();
cat.printGender();

/**
 * Classes - ES7
 */

class Thing {
  something = "something";

  printSomething = () => {
    console.log(this.something);
  };
}
class AnyThing extends Thing {
  property = "random";

  printProperty = () => {
    console.log(this.property);
  };
}

const randomThing = new AnyThing();
randomThing.printSomething();
randomThing.printProperty();

/******************************************************************************************
 * Spread and Rest Operator
 *
 * Spread - used to separate array elements or object properties
 *        - also can be used to copy an existing array let newArray = [...oldArray]
 */
const oldArray = [1, 2];
const newArray = [...oldArray, 3, 4];

const OldObject = { oldProp: 1 };
const NewObject = { ...OldObject, newProp: 5 };

/**
 * Rest - used to combine a list of function arguments into an array
 */

const sortArgs = (...args) => {
  return args.sort();
};

/******************************************************************************************
 *
 * Destructuring - extract array elements and store them as variables
 * for arrays
 */
let ar = ["hello", "max"];
let [a, b] = ar;
console.log(a); // hello
console.log(b); // max

/**
 * for objects
 */
const Obj = { name: "Max", age: 28 };
const { name } = Obj;
console.log(name); // Max
console.log(age); // undefined

/******************************************************************************************
 *
 * Reference and primitive types
 *
 * in JavaScript numbers, floats, strings are all primitive types so when you assign one to the other they make a copy
 * object and arrays are copied by reference using a pointer
 */

let one = 1;
let one2 = one; // creates a new variable with the number 1 assigned to it (a copy of one)

let arr = [1, 2, 3];
let arr2 = arr; // creates a pointer to the arr array NOT a copy
let arr3 = [...arr]; // creates a copy of arr

/******************************************************************************************
 * Refreshing array functions
 *
 */

const numbers = [1, 2, 3];

const doubleNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(numbers); // [1,2,3]
console.log(doubleNumbers); // [2,4,6]


