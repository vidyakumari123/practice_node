const mongoose=require("mongoose")

const url="mongodb://127.0.0.1:27017/practiceeNode"


async function dbConnect(){
    try{
        await mongoose.connect(url)
        console.log("database connected");
    }
    catch(err){
        console.log("something wrong while connecting to db");
    }
}

module.exports={dbConnect}