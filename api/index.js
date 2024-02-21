const express = require("express");
const port = 5000;
const mongoose = require("mongoose");
const cors = require('cors');

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
app.use(express.json());

app.use(cors({
  credentials:true,
  origin: process.env.Client_Url,
}));

app.get('/',(req,res)=>{
  res.json('test ok');
})


app.post('/register',async(req,res) =>{
  const {user,password}=req.body;
const createdUser=  await User.create({username:user,password:password});
  jwt.sign({userId:createdUser._id},jwtsec,(err,token)=>{
    if(err){
     throw err;
    }

    res.cookie('token',token).status(201).json('ok');
});

  

})

app.listen(port, (err) => {
  if (err) {
    console.log("error while establish the server");
  }

  console.log(`Server Running on PORT ${port} `);
});
