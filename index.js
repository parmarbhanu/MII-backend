const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
dotenv.config();
app.use(express.json());
app.use(cors({
    origin: [
       "http://localhost:3000",
    ],
     credentials: true,
   })
);


// connect to mongoDB
  mongoose.set('strictQuery', false)
  mongoose.connect(process.env.MDB_CONNECT) 
  .then(()=>{console.log('Mongodb connected succesfully')})
  .catch(()=>{console.log("check your internet conection")});


// console.log("udsgfgd")


//  set up routes
app.use("/user", require("./router/userRouter"));
app.use("/blog", require("./router/blogRouter"));
app.use("/event", require("./router/eventRouter"));


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
const path=require("path");
