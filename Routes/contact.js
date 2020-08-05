const express = require("express");
const Router = express.Router();


// @route api/contact 
//@method GET
//@desrc  To get all the contacts of the users   
//@privacy private  

Router.get("/", (req, res) => {
    res.json({ msg: "Get all the contacts of the users " })
})




// @route api/contact 
//@method POST 
//@desrc  To add the contacts   
//@privacy private  

Router.post("/", (req, res) => {
    res.json({ msg: "Add the contact  " })
})


// @route api/contact/:id
//@method PUT
//@desrc  To update the contact   
//@privacy private  

Router.put("/", (req, res) => {
    res.json({ msg: "Update the contact  " })
})


// @route api/contact/:id 
//@method DELETE 
//@desrc  To delete the contact   
//@privacy private  

Router.delete("/", (req, res) => {
    res.json({ msg: "Delete the Contact " })
})


module.exports = Router;