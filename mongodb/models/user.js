const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    course:String,
    skills:[String]
});
module.exports=mongoose.model("user",userSchema);