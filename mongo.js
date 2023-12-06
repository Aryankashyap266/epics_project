const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://aryankashyap:24Dnptest@cluster0.zcaqhpb.mongodb.net/")

.then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log("failed",err);
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection" , newSchema)

module.exports = collection
