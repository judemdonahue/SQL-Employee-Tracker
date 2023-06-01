// Importing the 'mysql2' package
const mysql = require('mysql2');

// Creating a connection to the MySQL database
const db = mysql.createConnection(
    {
        host: 'localhost',     // MySQL host
        user: 'root',          // MySQL username
        password: '',          // MySQL password
        database: 'company_db' // Name of the database
    },
    console.log('Connected to DataBase') // Logging a message when the connection is established
);

// Exporting the 'db' connection object to be used in other modules
module.exports = db;
