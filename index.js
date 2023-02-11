const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

//linking team profiles
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


//setting array to take in the entire team
const wholeTeam = [];

//setting up inquirer prompts to add manager
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the manager of the team.',
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email address.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number.",
        },

    ])
    .then(managerData => {
        const {name, id, email, officeNumber} = managerData;
        const manager = new Manager (name, id, email, officeNumber);
        wholeTeam.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please select the employee's role",
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employe's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employe's email address.",
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's current school",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Enter the employee's github username",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'confirm',
            name: 'addMoreEmployees',
            message: "Do you want to add more employees?",
            default: false
        }

    ])
    .then(employeeData => {
        let {name, id, email, role, school, gitHub, addMoreEmployees} = employeeData;
        let employee;
    
    //setting differnet class objects based on employee's role
    if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log("intern: ", employee);
    }
    if (role === "Engineer") {
        employee = new Engineer(name, id, email, gitHub);
        console.log("engineer: ", employee);
    }
    wholeTeam.push(employee);
    if(addMoreEmployees) {
        return addEmployee(wholeTeam);
    } else {
        return wholeTeam;
    }
    })
};

//setting up function to generate HTML

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err){
            console.log(err);
            return;
        }else {
            console.log("The team profile has been successfully generated!");
        }
    })
};

addManager()
    .then(addEmployee)
    .then(wholeTeam => {
        return generateHTML(wholeTeam);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    })
