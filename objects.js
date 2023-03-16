"use strict";
function createStudent(student) {
    return { name: "", email: "", isActive: true };
}
createStudent({ name: "", email: "", isActive: true });
let teach = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: true
};
//teach._id = "abcd"; //cannot be changed since it's readonly
