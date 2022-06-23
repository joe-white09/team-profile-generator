const Manager = require('./lib/Manager');

const { writeFile, copyFile } = require('./src/generate-site');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your Team Manager? ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee id number: ',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must enter an employee id number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Team Manager's email address: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You must enter an email address for the Team Manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Team Manager's office phone number? ",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('You must enter the office phone number!');
                    return false;
                }
            }
        },
    ])
    .then(({name, id, email, officeNumber }) => {
        this.manager = new Manager(name, id, email, officeNumber);
        console.log(this.manager);
    })
};

promptManager();
    