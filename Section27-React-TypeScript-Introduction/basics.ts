// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//**************************
// *****  Primitives  ******
//**************************
let age: number;
age = 12;
// age = "12"; => error

let userName: string;
userName = "Max";
// userName = 12; => error

let isInstructor: boolean;
isInstructor = true;
// isInstructor = 'true'; => error

let isNotInstructor = false;

// isNotInstructor = 'false'; => error not a boolean

//*******************************
// ***** More Complex Types *****
//*******************************

// arrays
let hobbies: string[];

hobbies = ["1", "2", "", "Apple"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
  // another: "can't use" => not included in the type at line 29
};

// type an array of objects
let people: {
  name: string;
  age: number;
}[];

// let morePeople: {person}[] => does not work - can't use previously defined type to create a new type without type alias - see below line 70

//****************************
// ***** Type inference ******
//****************************

let course = "React - The Complete Guide";

// course = 12; => error type inference assigned :string to the variable because that is what was originally assigned.

//*************************************
// ***** Multiple Type inference ******
// ***** i.e. Union Types        ******
//*************************************

// allows defining multiple types during creation without using :any
let newCourse: string | number | boolean = "React - The Complete Guide";

newCourse = 12; // acceptable with Union Types

//***********************
// ***** Type Alias *****
//***********************
type Person = {
  name: string;
  age: number;
};

let newPerson: Person;

let peopleList: Person[];

//***************************
// ***** Function Types *****
//***************************

function newAdd(a: number, b: number): number {
  return a + b;
}
// : number is not needed and should not be done

function printConsole(value: any) {
  console.log(value);
}

//***************************
// ***** Generic Types ******
//***************************

function insertAtBeginningWrong(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}
// this function assigns type any to all outgoing data loosing any benefit from Typing the value originally

function insertAtBeginning<T>(array: T[], value: T): T[] {
  const newArray = [value, ...array];
  return newArray;
}
// the <T> in the function above directs TypeScript to use the incoming values assigned Type and do not assign a new Type

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, 0);

console.log(updatedArray);

const demoArray2 = ["1", "2", "3"];

const updatedArray2 = insertAtBeginning(demoArray2, "0");

console.log(updatedArray2);

//***************************
// A Closer Look At Generics
//***************************

// Generic Types ("Generics") can be tricky to wrap your head around.

// But indeed, we are working with them all the time - one of the most prominent examples is an array.

// Consider this example array:

let numbers0 = [1, 2, 3];
// Here, the type is inferred, but if we would assign it explicitly, we could do it like this:

let numbers1: number[] = [1, 2, 3];
// number[] is the TypeScript notation for saying "this is an array of numbers".

// But actually, number[] is just syntactic sugar!

// The actual type is Array. ALL arrays are of the Array type.

// BUT: Since an array type really only makes sense if we also describe the type of items in the array, Array actually is a generic type.

// You could also write the above example like this:

let numbers2: Array<number> = [1, 2, 3];
// Here we have the angle brackets (<>) again! But this time NOT to create our own type (as we did it in the previous lecture) but instead to tell TypeScript which actual type should be used for the "generic type placeholder" (T in the previous lecture).

// Just as shown in the last lecture, TypeScript would be able to infer this as well - we rely on that when we just write:

let numbers3 = [1, 2, 3];
// But if we want to explicitly set a type, we could do it like this:

let numbers4: Array<number> = [1, 2, 3];
// Of course it can be a bit annoying to write this rather long and clunky type, that's why we have this alternative (syntactic sugar) for arrays:

let numbers5: number[] = [1, 2, 3];
// If we take the example from the previous lecture, we could've also set the concrete type for our placeholder T explicitly:

const stringArray = insertAtBeginning<string>(["a", "b", "c"], "d");
// So we can not just use the angle brackets to define a generic type but also to USE a generic type and explicitly set the placeholder type that should be used - sometimes this is required if TypeScript is not able to infer the (correct) type. We'll see this later in this course section!
