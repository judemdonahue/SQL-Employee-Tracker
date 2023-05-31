// Node Packages
const inquirer = require('inquirer')
const mysql = require('mysql2');

const questions = [
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        options: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    },
]

const db = mysql.createConnection(
    {
        host: 'localhost',
        // mysql username
        user: 'root',
        // mysql password
        password: '',
        database: ''
    },
    console.log('Connected to DataBase');
)