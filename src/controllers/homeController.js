
const getHomePage = (req, res) => {
    // xu ly data
    res.send('Hello World !!!')
}

const getXYZ = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getXYZ
}