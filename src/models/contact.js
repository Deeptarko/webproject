const mongoose=require('mongoose');
const touristSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
    },
    phonenumber:{
        type:Number,
        required:true,
        unique:true,
    }
    
    
})
const Contact=new mongoose.model("Contact",touristSchema);
module.exports=Contact;