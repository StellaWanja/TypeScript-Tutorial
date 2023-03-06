//DATA TYPES
//String
let lName : string;
lName = "Getrude";

//Number
let age : number;
age = parseInt("42");

//Boolean
//if not defined to false/true, becomes undefined
let isValid : boolean = false;

//Array
let empList : string[];
let depList : Array<string>; //using generic types

let numList : Array<number>;
numList = [1,2,3,4,5];
let res = numList.filter((num) => num > 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(res); //[3,4,5]

//Enum
//Use enum to represent a fixed set of constants
const enum Color{
    Red, Green, Blue
}
let c: Color = Color.Blue; //let c=2 - blue

//Tuple
