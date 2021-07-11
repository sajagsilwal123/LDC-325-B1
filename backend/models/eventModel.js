const mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

let EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventDate:Date,
    eventImage: String,
    eventDescription: String
}, { timestamps: true, usePushEach: true });

EventSchema.plugin(mongoosePaginate);

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;