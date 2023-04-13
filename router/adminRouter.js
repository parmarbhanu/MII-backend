const router = require("express").Router();
const User = require('../models/adminModel');
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");

// log in admin
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(req.body)
    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingUser = await User.findOne({ email });
    // console.log(existingUser)
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong cradentials." });

    const passwordCorrect = await bcrypt.compare(password,existingUser.pass);
    console.log(passwordCorrect)
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });
   
      // sign the token

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
});



router.get("/isauthenticated", (req, res) => {
  // console.log(req.cookies)
  try {
    const token = req.cookies.token;
    // console.log(:+token)
    if (!token) return res.json(false);
    jwt.verify(token, process.env.JWT_SECRET);
    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

module.exports=router

// this will give all the user who fill form
// router.get("/user",(req, res) => {
//     try {
//         console.log("searching for user")
//         User.find()
//         .then((user) => res.json(user))
//         .catch((err) => res.status(400).json("Error: " + err));
//     } catch (err) {
//       res.json(false);
//     }
// });



// router.get('/', (req, res)=>{
//     try {
//         console.log("yes we are there")
//         return res.status(201)
//         .json({message:"connected"})
//     } catch (error) {
//        return res.send(404)
//     }
    
// });


// there is no need of creating and save new user API bcz ist a admin pannel login API
// router.post("/user", async (req, res) => {
//   try {
//     const { username, email, phone,password} = req.body;
//     console.log(req.body);
//     if (!username || !email || !phone || !password) {
//       return res.status(400).json("all detail are required");
//     }
// //  creating a new admin and save it to database 
//      const salt = await bcrypt.genSalt();
//     const pass = await bcrypt.hash(password, salt); 
//    const newUser = new User({
//       username,
//       email,
//       phone,
//       pass,
//     });
//     const savedUser = await newUser.save();
//    return res.status(200).json("user saved sucessfully")
// } 
//   catch {
//     return res.status(404).json("plz provide input");
//   }
// });
