const express = require("express");
const bodyParser=require("body-parser");

const ejs = require("ejs");
const mongoose = require('mongoose');
const https =require('https');
const { json } = require("body-parser");

const app = express();

app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));



app.get("/",(req,res)=>{

//   const url="https://api.covid19india.org/state_district_wise.json";
//   https.get("https://api.covid19india.org/data.json",function(response){

//     response.on("data",function(data){

//       console.log(JSON.parse(data));
    
//     })

//   })
  res.render("home");
})



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
