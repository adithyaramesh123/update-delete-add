var mongoose=require('mongoose');
mongoose.connect("mongodb+srv://adithya:adithya@cluster0.uisrftc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to DB")
})
.catch((err)=>{console.log(err)})