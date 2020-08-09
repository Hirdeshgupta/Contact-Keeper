const express = require("express");
const Router = express.Router();
const auth = require("../middleware/auth");
const Contacts = require("../models/contatcs");
// @route api/contact 
//@method GET
//@desrc  To get all the contacts of the users   
//@privacy private  

Router.get("/", auth, async(req, res) => {
    const contacts = await Contacts.find({ user: req.user_id });
    res.json(contacts);
})




// @route api/contact 
//@method POST 
//@desrc  To add the contacts   
//@privacy private  

Router.post("/", auth, async(req, res) => {
    const { name, email, phoneNumber } = req.body;
    const contact = new Contacts({
        name,
        email,
        phoneNumber,
        user: req.user_id,
    })
    const conatct_saved = await contact.save(contact);
    res.json(conatct_saved)
})


// @route api/contact/:id
//@method PUT
//@desrc  To update the contact   
//@privacy private  

Router.put("/:id", auth, async(req, res) => {
    try {
        const contact = await Contacts.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json(contact);
    } catch (error) {
        console.error(error);
        return res.send('Server Error')
    }

})


// @route api/contact/:id 
//@method DELETE 
//@desrc  To delete the contact   
//@privacy private  

Router.delete("/:id", auth, async(req, res) => {
    try {
        const contact = await Contacts.findByIdAndDelete(req.params.id);
        res.json(contact);
    } catch (error) {
        console.error(error);
        return res.send('Server Error')
    }
})


module.exports = Router;