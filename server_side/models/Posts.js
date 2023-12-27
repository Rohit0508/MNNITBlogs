const mongoose=require("mongoose");
const postsSchema =new mongoose.Schema(
    {
       body:{
        type:String,
        trim:true
       },

        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref: "User",
        },
        Likes:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref: "likes",
        },
        Comments:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref: "Comments",
        },

        
    }
)
module.exports = mongoose.model("Posts", postsSchema);