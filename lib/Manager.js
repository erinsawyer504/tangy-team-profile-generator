//importing employee class
const Employee = require("./Employee");

//setting up Manager class by extending employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //calling info from employee class
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    //overriding employee role to manager
    getRole() {
        return "Manager";
    }
}

//exports data
module.exports = Manager;