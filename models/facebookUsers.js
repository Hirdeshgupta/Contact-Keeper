const mongoose = require("mongoose");
const facebookUserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    profilepic: {
        type: String,
    },
    facebookId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model("FacebookUser", facebookUserSchema);