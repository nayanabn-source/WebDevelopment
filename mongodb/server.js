const express=require("express");
const connectDB=require("./config/db");

const app=express();
connectDB();

app.use(express.json());
app.use("/api/users",require("./routes/userroutes"));

app.listen(3000,()=>{
    console.log('server is running on port 3000');

});