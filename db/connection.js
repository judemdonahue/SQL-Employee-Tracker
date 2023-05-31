const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // mysql username
        user: 'root',
        // mysql password
        password: '',
        database: 'company_db'
    },
    console.log('Connected to DataBase')
);

module.exports = db;