const db = require('./connection');




function viewAllEmployees(callback) {
db.promise().query(
    `SELECT 
        employee.id, 
        employee.first_name, 
        employee.last_name, 
        role.title, 
        role.salary, 
        department.name, 
        CONCAT(manager.first_name, " ", manager.last_name) AS manager 
    FROM 
        employee 
    INNER JOIN 
        role on employee.role_id = role.id 
    INNER JOIN 
        department on role.department_id = department.id 
    LEFT JOIN 
        employee manager on manager.id = employee.manager_id;`
    )
    .then(([rows, fields]) => {
        console.table(rows)
        callback()})
      .catch(console.table);
};

function addEmployee() {
    db.promise().query(

    )
}

function updateEmployeeRole() {
    db.promise().query(
        
    )
}

function viewRoles() {
    db.promise().query(
    `SELECT
        role.id,
        role.title,
        role.salary,
        department.name AS department
    FROM
        role
    INNER JOIN
        department ON department.id = role.department_id
    `    
    )
    .then(([rows, fields]) => {
        console.table(rows)
        callback()})
      .catch(console.table);
}

function addRole() {
    db.promise().query(
        
    )
}

function viewDepartments() {
    db.promise().query(
    `SELECT
        department.id,
        department.title,
    `        
    )
    .then(([rows, fields]) => {
        console.table(rows)
        callback()})
      .catch(console.table);
}

function addDepartment() {
    db.promise().query(
        
    )
}

module.exports = { viewAllEmployees, addEmployee, viewRoles, viewDepartments}