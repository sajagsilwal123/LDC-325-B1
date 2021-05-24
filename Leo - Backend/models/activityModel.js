const mongoose = require("mongoose")

const Activity = mongoose.model('Activity', {
    topic: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
   
})

module.exports = Activity;