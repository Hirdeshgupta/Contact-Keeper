const mongoose = require("mongoose");
const contactsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['personal', 'professional'],
        default: 'personal',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model("Contacts", contactsSchema);