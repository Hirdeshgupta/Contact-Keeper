const express = require("express");
const app = express();
const connectDb = require("./Config/db");
require('dotenv').config()
app.use(express.json({ extended: false }))
connectDb();



app.use('/api/users', require("./Routes/users"))
app.use('/api/contacts', require("./Routes/contact"))
app.use('/api/auth', require("./Routes/auth"))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
})