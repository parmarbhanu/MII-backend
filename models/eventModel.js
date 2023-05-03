const mongoose = require('mongoose');

const event = new mongoose.Schema({
    images:{type:String,required:true},
    description: { type: String, required: true },
    title:{type:String,required: true},
    authername:{type:String,required: true},
    date:{type:String,required: true},
    time:{type:String,require:true},
    location:{type:String,require:true},
    numberofspeaker:{type:String,require:true},
    registrationfee:{type:String,require:true}
     });

const newevent = mongoose.model('newevent', event);
module.exports=newevent;




