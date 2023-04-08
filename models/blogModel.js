const mongoose = require('mongoose');

const bloging = new mongoose.Schema({
    images:  [
        {
         imgUrl:{ type: String, required: true }
        }
       ]    ,
       description: { type: String, required: false }
     });

const newblog = mongoose.model('newblog', bloging);
module.exports=newblog;

