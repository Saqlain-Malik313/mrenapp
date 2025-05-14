const mongoose = require("mongoose")

url=process.env.MONGODB_URL




const connectdb =async()=>{
    try {
        await mongoose.connect(url)
        console.log("database is ready to deploy")
        
    } catch (err) {
        console.error("data base is not connected")
    }
}


module.exports=connectdb;