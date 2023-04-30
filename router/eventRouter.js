const router = require("express").Router();
const event=require("../models/eventModel")



// add new event
router.post("/newevent", async (req, res) => {
  console.log(req.body);
    const { images,description,title,authername,date,time,location,numberofspeaker,registrationfee} = req.body;
    const newevent = new event({
        images,
        description,
        title,
        authername,
        date,
        time,
        location,
        numberofspeaker,
        registrationfee
        });
   
    newevent.save()
        .then(() => res.json("added a new blog succesfully"))
        .catch((err) => res.status(400).json("Error: " + err));
  });
  

//   delet event
router.get("/deleteevent/:id", async (req, res) => {
    const eventId= req.params.id;
    try {
        let oldevent= await Product.findOneAndDelete({ _id:eventId});
        res.status(200).send(oldevent);
    } catch (err) {
      res.status(200).send(err);
    }
  });

  router.get("/allevents",(req, res) => {
    try {
        // console.log("searching for event")
        event.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.json(false);
    }
});

module.exports=router









