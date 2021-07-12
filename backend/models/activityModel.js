const mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

let ActivitySchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },

    image: String,

    description: {
        type: String,
        required: true
    }
}, { timestamps: true, usePushEach: true });

ActivitySchema.plugin(mongoosePaginate);

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;