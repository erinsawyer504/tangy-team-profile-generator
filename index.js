const inquirer = require("inquirer");

//TODO: include Employee, Manager, Engineer, Intern classes

//TODO: Manager, Engineer, Intern extends Employee

//TODO: Manager will have officeNumber & getRole() overrides to return Manager

//TODO: Engineer includes github property (github username), & include getGitHub(), & getRole() returns Engineer

//TODO: Intern includes school property, getSchool(), and getRole() returns intern

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(name) {
    console.log('name: ', this.name);
    }
    getId(id) {
    console.log('id: ', this.id);
    }
    getEmail(email) {
    console.log('email: ', this.email);
    }
    //getRole() = returns 'Employee'
}

const alia = new Employee('Alia', '58157', 'Alia@cat.com');
alia.getName();
alia.getId();
alia.getEmail();

