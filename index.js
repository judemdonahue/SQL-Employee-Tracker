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
  inquirer.prompt(questions).then((answers) => {
    const choice = answers.menu; // Retrieve the selected menu choice
    
    switch (choice) {
        case 'View All Employees':
            functions.viewAllEmployees(init); // Call the viewEmployees function from the functions module
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
