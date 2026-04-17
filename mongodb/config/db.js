const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://navyabn19_db_user:WYxFD6nYgiGDwg17@cluster0.5ektlfz.mongodb.net/")
        console.log("mongoDB connected");
    }catch(error){
        console.log(error);
        process.exit(1);

    }

};
module.exports=connectDB;