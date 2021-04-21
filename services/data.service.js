
const db = require('./db')

const login = (req, email, password) => {
    //console.log(pswd);
    return db.Donor.findOne({ email, password })
        .then(user => {
            console.log("user is " + user);
            if (user) {
                req.session.currentUser = user.email
                return {
                    status: true,
                    statusCode: 200,
                    message: "login sucess",
                    username: user.name
                }

            }
            else {
                return {
                    status: false,
                    statusCode: 422,
                    message: "invalid credentials"
                }

            }
        })

}




module.exports = {
    login
}