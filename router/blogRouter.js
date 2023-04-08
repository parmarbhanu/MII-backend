const router = require("express").Router();
const blog=require("../models/blogModel")



// add new blog
router.post("/newblog").post((req, res) => {
    const { images,description} = req.body;
    const newblog = new blog({
        images,
        description
        });
   
    newblog.save()
        .then(() => res.json("added a new blog succesfully"))
        .catch((err) => res.status(400).json("Error: " + err));
  });
  

module.exports=router









