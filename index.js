const inquirer = require('inquirer');
const fs = require('fs');

//linking team profiles
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//TODO: not a requirement but add validation to ensure that user input is in the proper format

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
            message: "Enter the manager's office number",
        },

    ])
    .then(managerData => {
        const {name, id, email, officeNumber} = managerData;
        const manager = new Manager (name, id, email, officeNumber);
        wholeTeam.push(manager);
        console.log(manager);
    })
};
addManager();

// {
//     type: 'list',
//     name: 'role',
//     message: "Please select employee's role",
//     choices: []
// },