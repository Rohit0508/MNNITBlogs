const Comments = require('../models/Comments');

exports.saveComment= async (req, res) => {
    try {
      const { body, userId, postId } = req.body;
  
      // Create a new comment
      const comment = new Comments({
        body,
        user: userId,
        post: postId,
      });
  
      // Save the comment to the database
      await comment.save();
  
      res.status(201).json({ message: 'Comment added successfully', comment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  exports.getAllComment=async(req,res)=>{
    try {
        const { postId } = req.params;
    
        // Fetch all comments for the specified post
        const comments = await Comments.find({ post: postId }).populate('user');
    
        res.json({ comments });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
  }