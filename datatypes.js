"use strict";
//DATA TYPES
//String
let lName;
lName = "Getrude";
//Number
let age;
age = parseInt("42");
//Boolean
//if not defined to false/true, becomes undefined
let isValid = false;
//Array
let empList;
let depList; //using generic types
let numList;
numList = [1, 2, 3, 4, 5];
let res = numList.filter((num) => num > 2);
console.log(res);
