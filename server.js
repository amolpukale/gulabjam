var express=require("express");
var app=express();

app.get("/",function(request,response){
    response.send(" In get function");
})

app.listen("4000",function(req,res){
    res.send("Hi");
})