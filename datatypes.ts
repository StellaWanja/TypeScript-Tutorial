//DATA TYPES
// type annotations allow us to assign types to variables. eg let scor:number;
//1. String
let lName: string;
lName = "Getrude";

//2. Number
let age: number;
age = parseInt("42");

//3. Boolean
//if not defined to false/true, becomes undefined
let isValid: boolean = false;

//4. Array
let empList: string[];
let depList: Array<string>; //using generic types

let numList: Array<number>;
numList = [1, 2, 3, 4, 5];
let res = numList.filter((num) => num > 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(res); //[3,4,5]

//5. Enum
//Use enum to represent a fixed set of constants
const enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue; //let c=2 - blue

//6. Tuple
//Useful if you have a function that returns multiple values
//eg in ReactJS, useState hook returns a tuple
let mine: [number, string] = [121, "bacon"];
const fredScores: [string, ...number[]] = ["Fred", 70, 60, 80];
//
let swapNums: [firstNum: number, secondNum: number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNums = swapNumbers(10, 20);

//7. Any
// Avoid any
//use when it isn't possible to create a TypeScript type to represent an item
//eg where we are dealing with dynamic data - data that is defined by end-users rather than developers
let dep: any;
dep = "one";
dep = 10;

//8. Void
//return nothing
//void is when the function returns without a value
//a function that does not return a value, returns undefined
function add(num1: number, num2: number) {
  num1 + num2;
}

//9. Never
//the function never returns
//used when you are sure that something is never going to occur
//useful to explicitly flag areas of code that shouldn’t be reached
type Status = "Pending" | "Working" | "Complete" | "Cancelled";

function doSomeAction(status: Status) {
  switch (status) {
    case "Pending":
      // some code
      break;
    case "Working":
      // some code
      break;
    case "Complete":
      // some code
      break;
    case "Cancelled":
      // some code
      break;
    default:
      neverReached(status);
  }
}

doSomeAction("Pending");

function neverReached(never: never) {}

function fail(msg: string): never {
  throw new Error(msg);
}

//10. Unknown
//Type checking does occur on the unknown type, unlike with the any type.
function addUnknown(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") {
    //if statement - type guard
    //type guard - allows TypeScript to adjust the types of a and b from unknown to number
    return a + b;
  }
  return 0;
}
//eg in type safe data fetching, can use a type predicate function to check type
async function getData(path: string): Promise<unknown> {
  const response = await fetch(path);
  return await response.json();
}

type Person = {
  id: string;
  name: string;
};

//type predicate function
//checks if person is of type Person
function isPerson(person: any): person is Person {
  return "id" in person && "name" in person;
}

async function getPerson(id: string): Promise<Person | null> {
  const person = await getData("/people/1");
  if (person && isPerson(person)) {
    return person;
  }
  return null;
}

//Type Aliases
//A type alias is a name that refers to another type
//type TypeAliasName = ExistingType;
type Score = { name: string; score: number; pass?: boolean };
const tomScore: Score = { name: "Tom", score: 70 };
//function -> type TypeAliasName = (paramName1: paramType1, ...) => ReturnType;
