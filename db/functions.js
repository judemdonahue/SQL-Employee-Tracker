




function viewEmployees() {
    connection.promise().query(
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
}

function addEmployee() {
    connection.promise().query(

    )
}

function updateEmployeeRole() {
    connection.promise().query(
        
    )
}

function viewRoles() {
    connection.promise().query(
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
}

function addRole() {
    connection.promise().query(
        
    )
}

function viewDepartments() {
    connection.promise().query(
    `SELECT
        department.id,
        department.title,
    `        
    )
}

function addDepartment() {
    connection.promise().query(
        
    )
}
