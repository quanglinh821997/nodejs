require('dotenv').config()
const express = require('express'); // commonjs
const path = require('path');
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')

const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;
const mysql = require('mysql2')

// config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoute);

// test connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hoidanit',
    port: 3307,
    password: '123456'
});

connection.query(
    'Select * from Users ;',
    function (err, result, fields) {
        console.log(">>> results= ", result);
        console.log(">>> fields= ", fields);
    }
)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})