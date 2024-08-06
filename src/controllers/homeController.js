const connection = require('../config/database')
const getHomePage = (req, res) => {
    // xu ly data


    let user = []
    connection.query(
        'Select * from Users ;',
        function (err, result, fields) {
            user = result
            console.log(">>> results= ", result);

            console.log(">>check users: ", user)
            res.send(JSON.stringify(user))
        }
    )


}

const getXYZ = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getXYZ
}