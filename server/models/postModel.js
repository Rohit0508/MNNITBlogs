const mongoose=require("mongoose");
 

const postSchema=mongoose.Schema({
    title:{
      type:String,
      required:true
    },
    content:{
        type:String,
        required:true
    },
    category:{
      type:String,
      required:true
  },
  banner:{
    type:String,
    required:true
},
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
     likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like"

        }
     ],
     comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"

        }
     ],
     
},

{
    timestamps:true
});

module.exports=mongoose.model("Post",postSchema);