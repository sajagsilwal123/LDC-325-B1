const mongoose = require("mongoose")

const subscribe = mongoose.model('subscribe', {
    fullname: {
        type: String,
        required: true
    },
    
    
    email: {
        type: String,
        required: true
    }

   
})

module.exports = subscribe;