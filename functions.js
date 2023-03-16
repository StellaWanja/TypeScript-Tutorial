"use strict";
// strongly-type all the parameters in the function implementation - to avoid any type inference
//num3 is optional
function addNum(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
const sub = (num1, num2) => num1 - num2;
const mult = function (num1, num2) {
    return num1 * num2;
};
function addNums(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let arr = [1, 2, 3, 4, 5];
console.log(addNums(2, 5, ...arr));
//Generic functions 
//T - Type
function getItems(items) {
    return new Array().concat(items);
}
