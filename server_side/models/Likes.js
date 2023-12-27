const mongoose=require("mongoose");
const likesSchema =new mongoose.Schema(
    {

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
module.exports = mongoose.model("Likes", likesSchema);