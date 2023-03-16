type Student = {
    name: string;
    email: string;
    isActive: boolean;
}

function createStudent(student: Student){
    return {name: "", email: "", isActive: true};
}

createStudent({name: "", email: "", isActive: true});

type Teacher = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardDets?: number;
}

let teach:Teacher = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: true
}
//teach._id = "abcd"; //cannot be changed since it's readonly

//Using and
type cardDate = {
    cardDate: string
}

type cardNumber = {
    cardDate: string
}

type cardDets = cardDate & cardNumber & {
    id: number
}