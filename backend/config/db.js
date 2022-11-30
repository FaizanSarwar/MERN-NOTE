const mongoose = require("mongoose")

const connectToMongo = async()=>{
 const res = await mongoose.connect("mongodb+srv://notedb:notedb@cluster0.yxw4uqz.mongodb.net/?retryWrites=true&w=majority")
 if(res){
    console.log("connected backend successfully..."); 
 }
}
module.exports= connectToMongo;


