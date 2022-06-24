const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const { writeFile, copyFile } = require('./src/generate-site');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee? ',
        validate: nameInput => {
            if (nameInput) {
                return true;
             } else {
               console.log("Please enter the employee's name!");
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
        message: "Please enter the employee's email address: ",
        validate: emailInput => {
            if (emailInput) {
               return true;
            } else {
                console.log('You must enter an email address for the employee!');
                return false;
            }
        }
    },
];

const managerQuestions = [
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
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: "Please enter the Engineer's GitHub username?",
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log('You must enter a GitHub username!');
                return false;
            }
        }
    }
];

const buildManager = () => {
    console.log('Please enter information for the Team Manager')
    return inquirer.prompt(employeeQuestions.concat(managerQuestions))
    .then(({name, id, email, officeNumber }) => {
        this.manager = new Manager(name, id, email, officeNumber);
        console.log(this.manager);
    });
};

const buildEngineer = () => {
    return inquirer.prompt(employeeQuestions.concat(engineerQuestions))
    .then(({name, id, email, github }) => {
        this.engineer = new Engineer(name, id, email, github);
        console.log(this.engineer);
    })
}

buildManager()
    .then(buildEngineer);


    