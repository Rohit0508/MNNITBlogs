
const express = require("express")
const router = express.Router();

// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
//   changePassword,
} = require("../controllers/auth");
const { createPost } = require("../controllers/postController");
const {getAllPosts} = require("../controllers/postController");
const {createComment} =require("../controllers/commentConroller");
const{likePost,unlikePost} =require("../controllers/likeController");
const {
    resetPasswordToken,
    resetPassword,
  } = require("../controllers/ResetPassword")

const { auth } = require("../middlewares/auth")


// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)
// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)
// Export the router for use in the main application
// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)


//Route for post/like/comment
router.post("/post", createPost);
router.get("/getpost", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
router.post("/comment",createComment);



module.exports = router