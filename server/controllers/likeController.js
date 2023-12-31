const Post = require("../models/postModel");
const Like = require("../models/likeModel");

// Like a post
exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;

        // Create a new like
        const like = new Like({
            post,
            user,
        });

        // Save the like
        const newLike = await like.save();

        // Update the post by pushing the new like ID
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { likes: newLike._id } },
            { new: true }
        ).populate('likes').exec();

        res.json({
            post: updatedPost,
            success: true
        });
    } catch (error) {
        console.error("Error while liking post:", error);
        res.status(500).json({
            success: false,
            error: "Error while liking post"
        });
    }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;

        // Delete the like
        const deletedLike = await Like.findByIdAndDelete(like);

        // Update the post by pulling the deleted like ID
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $pull: { likes: deletedLike._id } },
            { new: true }
        ).populate('likes').exec();

        res.json({
            post: updatedPost
        });
    } catch (error) {
        console.error("Error while unliking post:", error);
        res.status(500).json({
            success: false,
            error: "Error while unliking post"
        });
    }
};
