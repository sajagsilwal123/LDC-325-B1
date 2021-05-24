const mongoose = require('mongoose');
const Registration = mongoose.model('Registration', {
    fullname: {
        type: String,
        requried: true
    },
    photo:
    {
        type:String,
        requried:true
    },
    address: {
        type: String,
        requried: true
    },
    phone: {
        type: String,
        requried: true,

    },
    email: {
        type: String,
        requried: true,
        unique: true
    },
    password: {
        type: String,
        requried: true
    },
    //for managing multiple user in single table
    userType : {
        type : String,
        enum : ['Admin', 'User'],
        default: 'User'
    }
})

module.exports = Registration;