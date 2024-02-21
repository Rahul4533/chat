const express = require("express");
const port = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt=require('jsonwebtoken');
const User=require('./models/user');
dotenv.config();
const jwtsec=process.env.JWT_SEC;
mongoose.connect(process.env.MOGO_URL);
const db=mongoose.connection;
db.once('open',(err)=>{
    if(err){
        console.log("error while connecting to db "+err.message);
    }
    console.log("DB Connected");
})
const app = express();




app.post('/register',async(req,res) =>{

   const {username,password}=req.body;
const createdUser=  await User.create({username,password});
  
  jwt.sign({userId:createdUser._id},jwtsec,(err,token)=>{
    if(err){
     throw err;
    }

    res.cookie('token',token).status(201).json('ok');
});
console.log(req.body);
  

})

app.listen(port, (err) => {
  if (err) {
    console.log("error while establish the server");
  }

  console.log(`Server Running on PORT ${port} `);
});
