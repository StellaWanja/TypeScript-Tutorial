//Can be used to write business logic

class Employee {
    id!: number;
    firstName!: string;
    address!: string;
}

let emp = new Employee();
emp.id = 1;
emp.firstName = "John";
emp.address = "abcd";

class Employee2 {
    id: number;
    #id2 : number; //same as private id2 : number
    //protected - useful if you want to extend the class
    protected firstName: string;
    address: string;

    //Getters and Setters
    //get the value
    get empId() : number{
        return this.#id2;
    }
    //assign values
    set empId(id: number){
        this.#id2 = id;
    }

    static getEmployeeCount() : number{
        return 50;
    }

    constructor(id: number, id2: number, firstName: string, address: string){
        this.id = id;
        this.#id2 = id2;
        this.firstName = firstName;
        this.address = address;
    }

    getNameWithAddress() : string{
        return `${this.firstName} stays at ${this.address}`;
    }
}

let john = new Employee2(1, 25, "John", "Highway Street");
john.empId = 100; //set value
console.log(john.getNameWithAddress());
Employee2.getEmployeeCount();

class Manager extends Employee2{
    constructor(id: number, id2: number, firstName: string, address: string){
        super(id, id2, firstName, address);
    }
}

let mike = new Manager(2, 55, "Mike", "Chesire Street");
console.log(mike.getNameWithAddress());