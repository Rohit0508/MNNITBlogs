const mongoose=require("mongoose");
const userSchema =new mongoose.Schema(
    {
     firstName:{
        type:String,
        required:true,

     },
     lastName:{
       type:String,
     },
     email:{
        type:String,
        required:true

     },
     password:{
        type:String,
        required:true
     },
     confirmPassword:{
        type:String,
     },
     accountType:{
        type:String,
        enum:["Admin","Student"],
        required:true,

     },
     additionalDetails: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile",
    },
    likes: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like",
        }
    ],
    Posts: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post",
        }
    ],
    Comments: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment",
        }
    ],
    image:{
        type:String,
        required:true,
    },
    }
)
module.exports = mongoose.model("User", userSchema);