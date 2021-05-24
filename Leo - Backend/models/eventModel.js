const mongoose = require("mongoose")
const event = mongoose.model('event', {

    eventName: {
        type: String,
        required: true
    },
    eventFee: {
        type: Number,
        required: true
    },
    eventImage: {
        type: String,
        required: true
    },
    eventDescription: {
        type: String,
        required: true
    }
})

module.exports = event;