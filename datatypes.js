"use strict";
//DATA TYPES
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
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
//7. Any
// Avoid any 
let dep;
dep = "one";
dep = 10;
//8. Void
//return nothing
function add(num1, num2) {
    num1 + num2;
}
//9. 
