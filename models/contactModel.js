const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:["Please add the contact name"]
    },
    email:{
        type:String,
        required:["Please add the email"]
    },
    phone:{
        type:String,
        required:["Please add the phone number"]
    }
},{
    timestamp:true,
});
module.exports = mongoose.model("Contact",contactSchema)