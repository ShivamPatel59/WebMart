const jwt = require('jsonwebtoken');
const ErrorHander=require('../utils/errorhander');
const User = require('../models/userModel');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

exports.isAuthenticUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHander('Login first to access this resource', 200));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    next();
}) 

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHander(`Role (${req.user.role}) is not allowed to access this resource`, 200));
        }
        next();
    }
}