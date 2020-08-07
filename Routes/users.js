const express = require("express");
const Router = express.Router();
const Users = require("../models/user");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
    // @route api/users 
    //@method POST
    //@desrc  To Reguster the users  
    //@privacy public

Router.post("/", [
    // username must be an email
    body('name', 'Please enter your name').not().isEmpty(),
    body('email', 'Please enter valid e-mail').not().isEmpty().isEmail(),
    body('password', 'Please ensure password is at least 6 characters long').not().isEmpty().isLength({ min: 6 })
], async(req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    //check whether the email already exists or not 
    const is_email = await Users.findOne({ email: req.body.email });
    if (is_email) {
        errors.errors.push({ msg: "This e-mail is already registered try using another one " })
    }
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: hash
    });
    user.save(err => {
        console.error(err)
    })
    try {
        const token = await jwt.sign({
            data: {
                id: user._id
            }
        }, process.env.JSON_URI, { expiresIn: 60 * 60 })
        console.log(token)
        res.json({ token: token })
    } catch (err) {
        console.error(err)
    }
});


module.exports = Router;