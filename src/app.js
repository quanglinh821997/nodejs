const express = require('express'); // commonjs
const path = require('path');
require('dotenv').config()
// import express from 'express'; // es modules 

const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// config static files
app.use(express.static(path.join(__dirname, 'public')))

// Khai bao route
app.get('/xyz', (req, res) => {
    // res.send('check XYZ')
    res.render('sample.ejs')
})

app.get('/abc', (req, res) => {
    res.send('check XYZ')
    // res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})