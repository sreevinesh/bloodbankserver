const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blood", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Donor = mongoose.model('Donor', {
    name:String,
    age: Number,
    bloodgroup:String,
    category:String,
    email: String,
    password: String
})


module.exports = {
    Donor
}