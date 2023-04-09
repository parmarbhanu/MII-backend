const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: String,
  pass:String
});

const User = mongoose.model('User', UserSchema);
module.exports=User;


// buy ticket 
// no of ticket
