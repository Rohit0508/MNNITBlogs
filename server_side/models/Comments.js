const mongoose=require("mongoose");
const CommentsSchema =new mongoose.Schema(
    {
        body:{
            type:String
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref: "User",
        },
        post:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref: "Posts",
        }
    }
)
module.exports = mongoose.model("Comments", CommentsSchema);