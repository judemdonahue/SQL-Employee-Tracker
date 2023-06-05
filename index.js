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
      'Update Employee Role',
      'View All Roles',
      'Add Role',
      'View All Departments',
      'Add Department',
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
                let roleOptions = await functions.rolesCLI()
                let managerOptions = await functions.managersCLI()
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
                  choices: roleOptions
                },
                {
                  type: 'list',
                  name: 'addEmployeeManager',
                  message: `Who will be the new employee's Manager?`,
                  choices: managerOptions
                }]).then((input) => {
                functions.addEmployee(input.addEmployeeRole, input.addEmployeeManager, input.addFirstName, input.addLastName, init)
              })};
              rolesPrompt();
            break;
            case 'Update Employee Role':
              async function updatePrompt() {
                let roleOptions = await functions.rolesCLI()
                let employeeOptions = await functions.employeesCLI()
                inquirer.prompt([
                  {
                    type: 'list',
                    name: 'selectEmployee',
                    message: `Which employee's position would you like to update?`,
                    choices: employeeOptions
                  },
                  {
                    type: 'list',
                    name: 'addEmployeeRole',
                    message: `What is the employee's new role?`,
                    choices: roleOptions
                  }]).then((input) => {
                  functions.updateEmployeeRole(input.selectEmployee, input.addEmployeeRole, init)
                })};
                updatePrompt();
              break;
        case 'View All Roles':
            functions.viewRoles(init);
            break;
        case 'Add Role':
          async function newRolePrompt() {
            let departmentList = await functions.deptsCLI()
            inquirer.prompt([
              {
                type: 'input',
                name: 'addRoleName',
                message: 'What is the name of the role being added?'
              },
              {
                type: 'input',
                name: 'addRoleSalary',
                message: 'What is the salary cap for the new position?'
              },
              {
                type: 'list',
                name: 'addRoleDepartment',
                message: 'What department will this position belong to?',
                choices: departmentList
              }]).then((input) => {
                functions.addRole(input.addRoleName, input.addRoleSalary, input.addRoleDepartment, init)
              })};
              newRolePrompt()
          break;
          case 'View All Departments':
            functions.viewDepartments(init);
            break;
          case 'Add Department':
              inquirer.prompt([
                {
                  type: 'input',
                  name: 'addDeptName',
                  message: 'What is the name of the department being added?'
                }
              ]).then((input) => {
                  functions.addDepartment(input.addDeptName, init)
                });
            break;
      case 'Quit':
        console.log('Goodbye!');
        break;
        
      default:
        console.log('Invalid choice.');
    }
  });
}

init();
