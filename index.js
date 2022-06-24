const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { writeFile, copyFile } = require('./src/generate-site');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

// sets an array for all team member objects
const teamArr = [];

// questions for all employees
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

// additional questions to fulfill manager object
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

//  addditional questions to fulfill enginner object
const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: "Please enter the Engineer's GitHub username: ",
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

// additional questions to fulfill intern object
const internQuestions =
[
    {
        type: 'input',
        name: 'school',
        message: "Please enter the Intern's school: ",
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log('You must enter a school!');
                return false;
            }
        }
    }
];

// sets questions to build a manager object
const buildManager = () => {
    console.log('Please enter information for the Team Manager')
    return inquirer.prompt(employeeQuestions.concat(managerQuestions))
    .then(({name, id, email, officeNumber }) => {
        this.manager = new Manager(name, id, email, officeNumber);
        console.log(this.manager);
        teamArr.push(this.manager);
    });
};

// sets questions to build engineer object
const buildEngineer = () => {
    return inquirer.prompt(employeeQuestions.concat(engineerQuestions))
    .then(({name, id, email, github }) => {
        this.engineer = new Engineer(name, id, email, github);
        console.log(this.engineer);
        teamArr.push(this.engineer);
    })
};

// Sets questions to build intern object
const buildIntern = ()  => {
    return inquirer.prompt(employeeQuestions.concat(internQuestions))
    .then(({name, id, email, school }) => {
        this.intern = new Intern(name, id, email, school);
        console.log(this.intern);
        teamArr.push(this.intern);
        console.log(teamArr);
    })
};

buildManager()
    .then(buildEngineer)
    .then(buildIntern)
    ;


    