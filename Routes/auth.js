const express = require("express");
const Router = express.Router();
const auth = require("../middleware/auth").checktoken;
const Users = require("../models/user");
const bcrypt = require('bcrypt');
const { body, validationResult } = require("express-validator")
const jwt = require("jsonwebtoken");


const passport = require("passport");




// Router.get("/facebook", passport.authenticate('facebook', { authType: 'rerequest', scope: ['email'] }));
// Router.get("/facebook/redirect", passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
//     res.redirect("http://localhost:3000");
// })

// @route api/auth
//@method GET
//@desrc  To get the authenticated users 
//@privacy private 

Router.get("/", auth, async(req, res) => {
    const user = await Users.findById(req.user_id);
    res.json({ user: user });
})

// @route api/auth
//@method POST
//@desrc  To authenticate the users  
//@privacy public

Router.post("/", [
    body('email', 'Please enter valid e-mail').not().isEmpty().isEmail(),
    body('password', 'Please enter password').not().isEmpty()
], async(req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    //check whether the email already exists or not 
    const is_email = await Users.findOne({ email });
    if (!is_email) {
        console.log("This e-mail is not registered try registering first ");
        errors.errors.push({ msg: "This e-mail is not registered try registering first " })
    } else {
        if (password) {
            const comparedPass = await bcrypt.compare(password, is_email.password);
            if (!comparedPass) {
                console.log("Invalid Credentials");
                errors.errors.push({ msg: "Invalid Credentials" })
            }
        }
    }
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const token = await jwt.sign({
            data: {
                id: is_email._id
            }
        }, process.env.JSON_URI, { expiresIn: 60 * 60 })
        console.log(token)
        return res.json({ token: token })
    } catch (err) {
        console.log('err')
        console.error(err)
    }
})




module.exports = Router;