const connection = require('../config/database')
const getHomePage = (req, res) => {
    // xu ly data
    return res.render('home.ejs')
}

const getXYZ = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getXYZ
}