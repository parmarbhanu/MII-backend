const router = require("express").Router();
const User = require('../models/userModel');


router.get("/user", async (req, res) => {
  try {
    const { name, email, phone} = req.body;
    console.log(req.body);
    if (!name || !email || !phone ) {
      return res.status(400).json("all detail are required");
    }
 // creating a new user and save it to database  
   const newUser = new User({
      name,
      email,
      phone,
    });
    const savedUser = await newUser.save();
   return res.status(200).json("user saved sucessfully")
} 
  catch {
    return res.status(404).json("plz provide input");
  }
});

// this will give all the user who fill form
router.get("/user",(req, res) => {
    try {
        console.log("searching for user")
        User.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.json(false);
    }
});

module.exports=router

// router.get('/', (req, res)=>{
//     try {
//         console.log("yes we are there")
//         return res.status(201)
//         .json({message:"connected"})
//     } catch (error) {
//        return res.send(404)
//     }
    
// });