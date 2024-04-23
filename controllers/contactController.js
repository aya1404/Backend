const express=require('express')
const contactController=express.Router()
const Contact=require("../models/contactSchema")

contactController.post('/register',async(req,res)=>{
    try{
        const newContact = await Contact.create({...req.body})
        //return the user (201 creation)
        return res.status(201).json({msg:"contact created",contact: newContact})
    }
    catch(error){
        return res.status(500).json(error)
    }
})

module.exports=contactController