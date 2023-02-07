//importing employee class
const Employee = require("./Employee");

//setting up Engineer class by extending employee class
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        //calling info from employee class
        super (name, id, email);
        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub;
    }
    //overriding employee role to  Engineer
    getRole() {
        return "Engineer";
    }
}

//exports data
module.exports = Engineer;