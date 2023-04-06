const router = require("express").Router();
const User = require('../models/user');


router.get('/', (req, res)=>{
    try {
        console.log("yes we are there")
        return res.status(201)
        .json({message:"connected"})
        
      
    } catch (error) {
       return res.send(404)
    }
    
})

module.exports=router