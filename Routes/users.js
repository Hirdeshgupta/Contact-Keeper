const express = require("express");
const Router = express.Router();


// @route api/users 
//@method POST
//@desrc  To Reguster the users  
//@privacy public

Router.post("/", (req, res) => {
    res.json({ msg: "Register the users" })
})



module.exports = Router;