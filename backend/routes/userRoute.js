const express = require('express');
const {registerUser,loginUser,logout, getUserProfile, updatePassword, updateProfile,getUserDetails, allUsersDetails, updateUser, deleteUser} = require('../controllers/userController');
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
router.route('/password/update').put( isAuthenticUser, updatePassword);
router.route('/me/update').put( isAuthenticUser, updateProfile);
router.route('/admin/user').get( isAuthenticUser,authorizeRoles("admin"), allUsersDetails)

router.route('/admin/user/:id')
.put( isAuthenticUser,authorizeRoles("admin"), updateUser)
.get( isAuthenticUser,authorizeRoles("admin"), getUserDetails)
.delete( isAuthenticUser,authorizeRoles("admin"), deleteUser)

module.exports=router;