//num3 is optional
function addNum(num1: number, num2 : number, num3? : number) : number{
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

const sub = (num1 : number, num2 : number) : number => num1 - num2;

const mult = function(num1 : number, num2 : number) : number {
    return num1 * num2;
}

function addNums(num1: number, num2 : number, ...num3 : number[]) : number{
    return num1 + num2 + num3.reduce((a,b) => a + b, 0);
}

let arr = [1,2,3,4,5];
console.log(addNums(2,5,...arr));

//Generic functions 
//T - Type
function getItems<T>(items : T[]) : T[]{
    return new Array<T>().concat(items);
}