"use strict";
//Can be used to write business logic
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee2_id2;
class Employee {
}
let emp = new Employee();
emp.id = 1;
emp.firstName = "John";
emp.address = "abcd";
class Employee2 {
    constructor(id, id2, firstName, address) {
        _Employee2_id2.set(this, void 0); //same as private id2 : number
        this.id = id;
        __classPrivateFieldSet(this, _Employee2_id2, id2, "f");
        this.firstName = firstName;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.firstName} stays at ${this.address}`;
    }
}
_Employee2_id2 = new WeakMap();
let john = new Employee2(1, 25, "John", "Highway Street");
let nameAddress = john.getNameWithAddress();
console.log(nameAddress);
class Manager extends Employee2 {
    constructor(id, id2, firstName, address) {
        super(id, id2, firstName, address);
    }
}
let mike = new Manager(2, 55, "Mike", "Chesire Street");
console.log(mike.getNameWithAddress());
