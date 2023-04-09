const mongoose = require('mongoose');

const bloging = new mongoose.Schema({
    images: [ { imgUrl:{ type: String, required: true } } ]    ,
    description: { type: String, required: true },
    title:{type:String,required: true},
    authername:{type:String,required: true},
    date:{type:String,required: true}
     });

const newblog = mongoose.model('newblog', bloging);
module.exports=newblog;

 





