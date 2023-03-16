"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//DATA TYPES
// type annotations allow us to assign types to variables. eg let scor:number;
//1. String
let lName;
lName = "Getrude";
//2. Number
let age;
age = parseInt("42");
//3. Boolean
//if not defined to false/true, becomes undefined
let isValid = false;
//4. Array
let empList;
let depList; //using generic types
let numList;
numList = [1, 2, 3, 4, 5];
let res = numList.filter((num) => num > 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(res); //[3,4,5]
let c = 2 /* Color.Blue */; //let c=2 - blue
//6. Tuple
//Useful if you have a function that returns multiple values
//eg in ReactJS, useState hook returns a tuple
let mine = [121, "bacon"];
const fredScores = ["Fred", 70, 60, 80];
//
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
//7. Any
// Avoid any
//use when it isn't possible to create a TypeScript type to represent an item
//eg where we are dealing with dynamic data - data that is defined by end-users rather than developers
let dep;
dep = "one";
dep = 10;
//8. Void
//return nothing
//void is when the function returns without a value
//a function that does not return a value, returns undefined
function add(num1, num2) {
    num1 + num2;
}
function doSomeAction(status) {
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
function neverReached(never) { }
function fail(msg) {
    throw new Error(msg);
}
//10. Unknown
//Type checking does occur on the unknown type, unlike with the any type.
function addUnknown(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        //if statement - type guard
        //type guard - allows TypeScript to adjust the types of a and b from unknown to number
        return a + b;
    }
    return 0;
}
//eg in type safe data fetching, can use a type predicate function to check type
function getData(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(path);
        return yield response.json();
    });
}
//type predicate function
//checks if person is of type Person
function isPerson(person) {
    return "id" in person && "name" in person;
}
function getPerson(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const person = yield getData("/people/1");
        if (person && isPerson(person)) {
            return person;
        }
        return null;
    });
}
const tomScore = { name: "Tom", score: 70 };
//function -> type TypeAliasName = (paramName1: paramType1, ...) => ReturnType;
