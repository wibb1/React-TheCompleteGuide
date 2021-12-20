// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//**************************
// *****  Primitives  ******
//**************************
var age;
age = 12;
// age = "12"; => error
var userName;
userName = "Max";
// userName = 12; => error
var isInstructor;
isInstructor = true;
// isInstructor = 'true'; => error
var isNotInstructor = false;
// isNotInstructor = 'false'; => error not a boolean
//*******************************
// ***** More Complex Types *****
//*******************************
// arrays
var hobbies;
hobbies = ["1", "2", "", "Apple"];
var person;
person = {
    name: "Max",
    age: 32
};
// type an array of objects
var people;
// let morePeople: {person}[] => does not work - can't use previously defined type to create a new type without type alias - see below line 70
//****************************
// ***** Type inference ******
//****************************
var course = "React - The Complete Guide";
// course = 12; => error type inference assigned :string to the variable because that is what was originally assigned.
//*************************************
// ***** Multiple Type inference ******
// ***** i.e. Union Types        ******
//*************************************
// allows defining multiple types during creation without using :any
var newCourse = "React - The Complete Guide";
newCourse = 12; // acceptable with Union Types
var newPerson;
var peopleList;
//***************************
// ***** Function Types *****
//***************************
function newAdd(a, b) {
    return a + b;
}
// : number is not needed and should not be done
function printConsole(value) {
    console.log(value);
}
//***************************
// ***** Generic Types ******
//***************************
function insertAtBeginningWrong(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
// this function assigns type any to all outgoing data loosing any benefit from Typing the value originally
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
// the <T> in the function above directs TypeScript to use the incoming values assigned Type and do not assign a new Type
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, 0);
console.log(updatedArray);
var demoArray2 = ['1', '2', '3'];
var updatedArray2 = insertAtBeginning(demoArray2, '0');
console.log(updatedArray2);
