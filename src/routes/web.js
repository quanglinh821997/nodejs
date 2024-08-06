const express = require('express')
const route = express.Router()
const { getHomePage, getXYZ } = require('../controllers/homeController')

// route.Method('/route', handler)

// Khai bao route
route.get('/xyz', getXYZ)

route.get('/', getHomePage)

module.exports = route; //export default