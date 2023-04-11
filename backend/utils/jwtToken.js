//Create and send token and save in the cookie

const sendToken = (user, statusCode, res) => {
    // Create JWT token
    const token = user.getJWTToken();
    // Options for cookie
    const expiresIn = parseInt(process.env.COOKIE_EXPIRES_TIME);

    const options = {
        expires: new Date(Date.now() + expiresIn * 24 * 60 * 60 * 1000),
        httpOnly: true
      };
      
    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user,
        token
    });
};

module.exports = sendToken;