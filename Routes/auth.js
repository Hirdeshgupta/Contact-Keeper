const express = require("express");
const Router = express.Router();
const auth = require("../middleware/auth");

// @route api/auth
//@method GET
//@desrc  To get the authenticated users 
//@privacy private 

Router.get("/", auth, (req, res) => {
    res.json({ msg: "Get the auth users " })
})

// @route api/auth
//@method POST
//@desrc  To authenticate the users  
//@privacy public

Router.post("/", (req, res) => {
    res.json({ msg: "Authenticate the users " })
})




module.exports = Router;