const router = require("express").Router();
const blog=require("../models/blogModel")



// add new blog
router.post("/newblog", async (req, res) => {
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
        let oldblog= await blog.findOneAndDelete({ _id:blogId});
        res.status(200).send(oldblog);
    } catch (err) {
      res.status(200).send(err);
    }
  });

  router.get("/allblogs",(req, res) => {
    try {
        // console.log("searching for blogs")
        blog.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.json(false);
    }
});

module.exports=router









