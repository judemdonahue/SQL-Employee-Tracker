// Node Packages
const inquirer = require('inquirer')
const connection = require('./db/connection');

const questions = [
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        options: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    },
]

function inquire() {
    inquirer.prompt(questions).then((input) => {
        switch (input.next) {
            case 'View All Employees':
                
    
        
        }
    })
}