
const express = require('express');
const session = require("express-session");
const cors = require('cors');
const dataservice =require('./services/data.service')

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}))


app.use(session({
    secret: "randomsecurestring",
    resave: false,
    saveUninitialized: false
}))

// const logMiddleware = (req, res, next) => {
//     //console.log(req.body);
//     next()
// }

app.use(express.json());

// //app.use(logMiddleware);



// const authMiddleware = (req, res, next) => {

//     if (!req.session.currentUser) {
//         return res.json({
//             status: false,
//             statusCode: 404,
//             message: "please login proper"
//         })
//     }
//     else {
//         next()
//     }
// }



// app.post('/register', (req, res) => {
//     // console.log(req.body);
//     dataservice.register(req.body.accno, req.body.name, req.body.password)
//         .then(result => {
//             console.log(result);
//             res.status(result.statusCode).json(result);
//         })
//     // console.log(res.json(result));

// })


app.post('/login', (req, res) => {
    console.log(req.body);
    dataservice.login(req,req.body.email,req.body.password).then(result => {
        res.status(result.statusCode).json(result);
    })

})


// app.post('/deposit', authMiddleware, (req, res) => {
//     //   console.log(req.session.currentUser);
//     dataservice.deposit(req, req.body.accno, req.body.password, req.body.amt).then(result => {
//         res.status(result.statusCode).json(result);
//     })
// })

// app.post('/withdraw', authMiddleware, (req, res) => {
//     //  console.log(req.body);
//     dataservice.withdraw(req, req.body.accno, req.body.pswd, req.body.amt).then(result => {
//         res.status(result.statusCode).json(result);
//     })


// })


app.listen(3000, () => {
    console.log("server started at port 3000 ");


});
