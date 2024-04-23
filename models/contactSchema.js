const mongoose= require("mongoose")//importing mongoose

const ContactSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        require:true
    },
    service:{
        type:String,
        require:true
    },
    nameOfEvent:{
        type:String,
    },
    date:{
        type: Date,
        require:true,
        unique:true
    },
},{timestamps:true})// created add ....
module.exports= mongoose.model("Contact",ContactSchema)