var express=require(express);
var app=express();
var parser=require(body-parser);
app.get("/",function(request,response){
    response.send(" In get function");
})
app.use(body-parser.json);
app.listen("4000",function(req,res){
    res.send("Hi");
})