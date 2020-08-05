const mongoose = require('mongoose');
const connectDb = async() => {
    try {
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
            console.log("MongoDb Connected !!")
        })
    } catch (error) {
        console.error(err);
        process.exit(1);
    }

}
module.exports = connectDb;