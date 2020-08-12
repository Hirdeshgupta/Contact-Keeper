const express = require("express");
const app = express();
const connectDb = require("./Config/db");
const session = require("express-session");
const passport = require("passport");
require('dotenv').config()
app.use(express.json({ extended: false }))
connectDb();

require("./config/passport")(passport);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send(req.isAuthenticated());
    console.log(req.isAuthenticated());
})
app.use('/api/users', require("./Routes/users"))
app.use('/api/contacts', require("./Routes/contact"))
app.use('/api/auth', require("./Routes/auth"))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
})