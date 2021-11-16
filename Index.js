const express = require("express");
const app = express();
const mongoose = require("mongoose");


app.get('/',(req,res)=>{
  res.send("Hello");
})


app.listen(8000,()=>{
  console.log("server listening on port 8000!")
});