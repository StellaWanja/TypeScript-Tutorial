//DATA TYPES
//1. String
let lName : string;
lName = "Getrude";

//2. Number
let age : number;
age = parseInt("42");

//3. Boolean
//if not defined to false/true, becomes undefined
let isValid : boolean = false;

//4. Array
let empList : string[];
let depList : Array<string>; //using generic types

let numList : Array<number>;
numList = [1,2,3,4,5];
let res = numList.filter((num) => num > 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(res); //[3,4,5]

//5. Enum
//Use enum to represent a fixed set of constants
const enum Color{
    Red, Green, Blue
}
let c: Color = Color.Blue; //let c=2 - blue

//6. Tuple
//Useful if you have a function that returns multiple values
let swapNums : [firstNum : number, secondNum : number];

function swapNumbers(num1: number, num2: number) : [number, number]{
    return [num2, num1];
}

swapNums = swapNumbers(10,20);

//7. Any
// Avoid any 
let dep : any;
dep = "one";
dep = 10;

//8. Void
//return nothing
function add(num1: number, num2 : number){
    num1 + num2;
}

//9. 