const router = require("express").Router();
const blog=require("../models/blogModel")



// add new blog
router.post("/newblog").post((req, res) => {
    const { images,description,title,authername,date} = req.body;
    const newblog = new blog({
        images,
        description,
        title,
        authername,
        date
        });
   
    newblog.save()
        .then(() => res.json("added a new blog succesfully"))
        .catch((err) => res.status(400).json("Error: " + err));
  });
  

//   delet blogs

router.get("/deleteblog/:id", async (req, res) => {
    const blogId= req.params.id;
    try {
        let oldblog= await Product.findOneAndDelete({ _id:blogId});
        res.status(200).send(oldblog);
    } catch (err) {
      res.status(200).send(err);
    }
  });

module.exports=router









