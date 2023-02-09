const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const asentance = "heelo";
const year = 23;

app.get("/",function(req,res){
    res.render('home',{mssg:asentance});

});

app.get("/about",function(req,res){
    res.render('about',{year:year});
});

app.get("/contact",function(req,res){
    res.render('contact');
});

app.get("*",function(req,res){
    res.render("error");
})




app.listen(3000,function(){
    console.log("server started");
})