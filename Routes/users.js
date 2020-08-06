const express = require("express");
const Router = express.Router();
const Users = require("../models/user");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
// @route api/users 
//@method POST
//@desrc  To Reguster the users  
//@privacy public

Router.post("/", [
    // username must be an email
    body('email').not().isEmpty().isEmail().withMessage('Please enter valid e-mail'),
    // password must be at least 5 chars long
    body('password').isLength({ min: 6 }).withMessage('Please ensure password is at least 6 characters long')
], async(req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    await Users.create({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    await bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            if (err) return res.status(500).send('Server error')
            Users.password = hash
        });
    });

    res.json(user)
});


module.exports = Router;