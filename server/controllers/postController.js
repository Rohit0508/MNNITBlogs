const Post=require("../models/postModel");

exports.createPost = async(req,res)=>{
    try{
      const {title,body,user}=req.body;
      const post=new Post({
        title,body,user
      })
      const savedPost=await post.save();
      res.json({
        post:savedPost
      })

    }
    catch(error){
     console.log(error);
    }
}

exports.getAllPosts = async(req,res)=>{
    try{
    const posts = await Post.find().populate("comments").exec();
    res.json({
        post:posts
    })
}
catch(error){
    console.log(error);
 return    res.status(400).json({

      error:"error in fetching post",
    })
}
}