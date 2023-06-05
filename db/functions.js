const db = require('./connection');

function viewAllEmployees(callback) {
    db.promise().query(
        `SELECT 
            employee.id AS ID, 
            employee.first_name AS First_Name, 
            employee.last_name AS Last_Name, 
            role.title AS Position, 
            role.salary AS Salary, 
            department.name AS Department, 
            CONCAT(manager.first_name, " ", manager.last_name) AS Manager 
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

async function addEmployee(addEmployeeRole, addEmployeeManager, addFirstName, addLastName, callback) {
    const [roleRow] = await db.promise().query(`SELECT id FROM role WHERE title = '${addEmployeeRole}'`)
    const [managerRow] = await db.promise().query(`SELECT id FROM employee WHERE CONCAT(first_name, ' ', last_name) LIKE '${addEmployeeManager}'`)
    const role_id = roleRow[0].id;
    const manager_id = managerRow[0].id;
    db.promise().query(
        `INSERT INTO
            employee
        VALUES
            (default, '${addFirstName}', '${addLastName}', ${role_id}, ${manager_id} )`).then(() => callback())
};

function updateEmployeeRole() {
    db.promise().query(
        
    )
}

function viewRoles(callback) {
    db.promise().query(
    `SELECT
        role.id AS ID,
        role.title AS Title,
        department.name AS Department,
        role.salary AS Salary
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

function viewDepartments(callback) {
    db.promise().query(
    `SELECT
        department.id AS ID,
        department.name AS Department
    FROM
        department
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

//inquirer prompt functions

async function rolesCLI() {
    return db.promise().query(
    `SELECT
        title
    FROM
        role
    `    
    )
    .then(([rows, fields]) => {
      return rows.map(row => row.title)})
    .catch(console.log);
};

async function deptsCLI() {
    return db.promise().query(
    `SELECT
        department.name
    FROM
        department
    `    
    )
    .then(([rows, fields]) => {
      return rows.map(row => row.name)})
    .catch(console.log);
}

async function managersCLI() {
    return db.promise().query(
    `SELECT
        CONCAT(first_name, " ", last_name) AS full_name 
    FROM 
        employee
    WHERE 
        manager_id IS NULL
    `    
    )
    .then(([rows, fields]) => {
      return rows.map(row => row.full_name)})
    .catch(console.log);
};

module.exports = { viewAllEmployees, addEmployee, viewRoles, viewDepartments, rolesCLI, deptsCLI, managersCLI}