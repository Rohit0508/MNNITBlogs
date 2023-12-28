const Posts = require('../models/Posts');

// Route to create a new post
exports.postController= async (req, res) => {
    try {
      const { body, userId } = req.body;
  
      // Create a new post
      const post = new Posts({
        body,
        user: userId,
      });
  
      // Save the post to the database
      await post.save();
  
      res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };