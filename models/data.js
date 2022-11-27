const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    
    name:String,
    mobileno:Number,
    emailid:String,
    password:String,
    // confirmpassword:String,
    fullname:String,
    emailid:String,
    gender:Boolean,
    birthday:String,
    alternateNo:String
}
,{ timestamps: true});

module.exports = mongoose.model('data',dataSchema);
