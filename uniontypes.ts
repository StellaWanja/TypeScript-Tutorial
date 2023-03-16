//union types are types that we can combine to form a new type
//union type is constructed from existing types using the pipe (|) character
//Unioning a type with null is a really common use case because data can often be null or a specific type
let numDate = null;
numDate = 30;
//cannot accept values that is not null or number
type num = number | null | undefined;
//let numDate : num;

//string literal union types - string values can be unioned together
type Fruit = "Banana" | "Apple" | "Pear";
let fruit: Fruit;
fruit = "Apple";

//Object union types
type Actions = { type: "loading" } | { type: "loaded"; data: { name: string } };
const loadingAction: Actions = { type: "loading" };



