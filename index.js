#!/usr/bin/env node
// Node Packages
const inquirer = require('inquirer');
const functions = require('./db/functions');


const questions = [
  {
    type: 'list',
    name: 'menu',
    message: 'What would you like to do?',
    choices: [
      'View All Employees',
      'Add Employee',
      // 'Update Employee Role',
      'View All Roles',
      // 'Add Role',
      'View All Departments',
      // 'Add Department',
      'Quit'
    ]
  }
];


function init() {
  inquirer.prompt(questions).then((input) => {
    const choice = input.menu; // Retrieve the selected menu choice
    
    switch (choice) {
        case 'View All Employees':
            functions.viewAllEmployees(init); // Call the viewEmployees function from the functions module
            break;
        case 'Add Employee':
              async function rolesPrompt() {
                let roles = await functions.rolesCLI()
                let managerList = await functions.managersCLI()
              inquirer.prompt([
                {
                  type: 'input',
                  name: 'addFirstName',
                  message: 'What is the first name of the new employee?'
                },
                {
                  type: 'input',
                  name: 'addLastName',
                  message: 'What is the last name of the new employee?'
                },
                {
                  type: 'list',
                  name: 'addEmployeeRole',
                  message: `What is the employee's role:`,
                  choices: roles
                },
                {
                  type: 'list',
                  name: 'addEmployeeManager',
                  message: `Who will be the new employee's Manager?`,
                  choices: managerList
                }]).then((input) => {
                functions.addEmployee(input.addEmployeeRole, input.addEmployeeManager, input.addFirstName, input.addLastName, init)
              })};
              rolesPrompt();
            break;
        case 'View All Departments':
            functions.viewDepartments(init);
            break;
        case 'View All Roles':
            functions.viewRoles(init);
            break;

    
      // Handle other menu choices here
        
      case 'Quit':
        console.log('Goodbye!');
        break;
        
      default:
        console.log('Invalid choice.');
    }
  });
}

init();
