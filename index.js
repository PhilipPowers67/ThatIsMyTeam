const inquirer = require("inquirer");
const pageTemplate = require("./src/page-template.js");
const {generateManager, generateEngineer, generateIntern} = require("./src/card");
const fs = require('fs');
const employeeCards = [];


const manager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Who is the manager?",
      //manager.name input to cards
    },
    {
      type: "input",
      name: "id",
      message: "What is their employee ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is their email address?",
    },
    {
      type: "input",
      name: "office",
      message: "What is their office number?",
    },
  
  ])
  .then(managerData => {
   var managerCard =  generateManager(managerData);
   employeeCards.push(managerCard);
  })
};

const promptEmployee = teamData => {
  if (!teamData.employees) {
      teamData.employees = [];
  }
  console.log(`
        ===============
        Add an Employee
        ===============
    `);
  return inquirer.prompt([
    {
      type: "list",
      name: "employeeType",
      message: "Is this person an Engineer or an Intern?",
      choices: ["Engineer", "Intern"],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of this employee?'
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is their employee id number?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email address?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is their GitHub account name?',
      when: (input) => input.employeeType === "Engineer"
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school are they attending?',
      when: (input) => input.employeeType === "Intern"
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add another employee?',
      default: false
    }
  ])
  .then(employeeData => {
    console.log(employeeData);
    teamData.employees.push(employeeData);
    if (employeeData.confirmAddEmployee) {
      return promptEmployee(teamData);
    } else {
      return teamData;
    }
  })

};

manager()
.then(promptEmployee);
