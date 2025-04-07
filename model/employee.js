 var mongoose= require("mongoose");
 var empSchema=mongoose.Schema({
    empName:String,
    empAge:Number,
    empDept:String,
    empSal:Number

 })
var empModel=mongoose.model("employee",empSchema);
module.exports=empModel;