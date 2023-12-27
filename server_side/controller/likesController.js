const Likes = require('../models/Likes');

// Route to add a like
exports.createLike= async (req, res) => {
  try {
    const { userId, postId } = req.body;

    // Check if the user has already liked the post
    const existingLike = await Likes.findOne({ user: userId, post: postId });

    if (existingLike) {
      return res.status(400).json({ message: 'User has already liked the post' });
    }

    // Create a new like
    const like = new Likes({
      user: userId,
      post: postId,
    });

    // Save the like to the database
    await like.save();

    res.status(201).json({ message: 'Like added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
