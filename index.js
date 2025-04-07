var express=require("express");
require('./db')
var emp =require('./model/employee'); 
var app=express();
var port=2000;
//middleware
app.use(express.json())
//to add data to db
app.post('/',(req,res)=>{
    try {
        emp(req.body).save();
        res.send("Data Added to DB")
    } catch (error) {
        res.send(error)
        
    }
})
//api to get
app.get('/',async(req,res)=>{
    try {
        var data=await emp.find();
        res.send(data)
    } catch (error) {
        res.send(error)
        
    }
})
//delete
app.delete ('/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await emp.findByIdAndDelete(req.params.id);
        res.send("Data Deleted")
    } catch (error) {
        res.send(error)
        
    }
})
app.put('/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await emp.findByIdAndUpdate(req.params.id,req.body);
        res.send("Edited")
    } catch (error) {
      res.send(error)  
    }
})
app.listen(port,()=>{
    console.log(`Server Is Running in ${port}`)
})
