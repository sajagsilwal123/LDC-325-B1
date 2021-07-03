const mongoose = require("mongoose")

const Team = mongoose.model('Team', {
    name: {
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

module.exports = Team;