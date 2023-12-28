
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
//   changePassword,
} = require("../controller/auth")
const {
    resetPasswordToken,
    resetPassword,
  } = require("../controller/ResetPassword")

const { auth } = require("../middleware/auth")


// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)
module.exports = router;
// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)
// Export the router for use in the main application
// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)
module.exports = router