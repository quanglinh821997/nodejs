require('dotenv').config()
const mysql = require('mysql2')
// test connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.BD_PORT,
    password: process.env.DB_PASSWORD
});

module.exports = connection;