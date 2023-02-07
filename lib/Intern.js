//importing employee class
const Employee = require("./Employee");

//setting up Intern class by extending employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        //calling info from employee class
        super (name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    //overriding employee role to intern
    getRole() {
        return "Intern";
    }
}

//exports data
module.exports = Intern;