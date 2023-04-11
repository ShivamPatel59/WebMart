const express = require('express');
const {registerUser,loginUser,logout, forgotPassword, resetPassword, getUserProfile, updatePassword, updateProfile, allUsers, getUserDetails, updateUser, deleteUser} = require('../controllers/userController');
const app = express();
const router = express.Router();
const { isAuthenticUser, authorizeRoles } = require('../middleware/auth');


// Register a new user => /api/v1/register
router.route('/register').post(registerUser);

// User Login => /api/v1/login
router.route('/login').post(loginUser);

// User Logout => /api/v1/logout
router.route('/logout').post(logout);

//User Details => /api/v1/me
router.route('/me').get( isAuthenticUser, getUserProfile);

module.exports=router;