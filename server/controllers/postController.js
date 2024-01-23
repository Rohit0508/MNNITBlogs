const Post=require("../models/postModel");

exports.createPost = async(req,res)=>{
    try{

      const {title,content,banner,category,user}=req.body;
      const post=new Post({
        title,content,banner,category,user
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