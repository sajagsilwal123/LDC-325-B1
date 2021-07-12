const mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

let ClubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    image: String,

    address: String,
    contactPerson: String,
    contactNumber: String,
    email: String,
    members: String
}, { timestamps: true, usePushEach: true });

ClubSchema.plugin(mongoosePaginate);

const Club = mongoose.model('Club', ClubSchema);

module.exports = Club;