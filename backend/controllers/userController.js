// const ErrorHander = require('../utils/errorhander');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const User=require('../models/userModel');
const ErrorHander = require('../utils/errorhander');
const sendToken = require('../utils/jwtToken');

// Register a new user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'avatars/1',
            url: 'https://res.cloudinary.com/dj8zv6q2f/image/upload/v1619953292/avatars/1.jpg'
        }
    })

    // res.status(201).json({
    //     success:true,
    //     user
    // });
    sendToken(user,201,res);
})


// Login user => /api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    // Checks if email and password is entered by user
    if(!email || !password){
        return next(new ErrorHander("Please Enter Email and Password ",400));
    }


    const user=await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHander("Invalid Email or Password!",401));
    }

    const isPasswordMatched=user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid Email or Password!",401));
    }
    sendToken(user,200,res);
    // const token= user.getJWTToken();
    // res.status(200).json({
    //     success:true,
    //     token
    // });
})


//Logout user
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  });


    //Get user details

    exports.getUserProfile=catchAsyncErrors(async(req,res,next)=>{

        const user=await User.findById(req.user.id);
        res.status(200).json({
            success:true,
            user
        })
        
      })


    //Update user password

    exports.updatePassword=catchAsyncErrors(async(req,res,next)=>{
        // console.log(req.body);
        const user=await User.findById(req.user.id).select("+password");
        const isPasswordMatched=user.comparePassword(req.body.oldpassword);

        if(!isPasswordMatched){
            return next(new ErrorHander("Old PassWord is Incorrect",400));
        }
        if(req.body.newPassword !== req.body.confirmPassword){
            return next(new ErrorHander("Password doesn't match",400))
        }

        user.password=req.body.newPassword;

        await user.save()
        // console.log(user.password);
        res.status(200).json({
            success:true,
            user
        })
        
      })

      //Update User

      exports.updateProfile=catchAsyncErrors(async(req,res,next)=>{
        // console.log(req.body);
        const newUserData={
            name : req.body.name,
            email: req.body.email,
        }
        const user=await User.findByIdAndUpdate(req.user.id,newUserData,{
            new: true,
            runValidators:true,
            useFindAndModify: false,
        });

        
        res.status(200).json({
            success:true,
        })
        
      })

// Get all users => /api/v1/admin/users

exports.allUsersDetails=catchAsyncErrors(async(req,res,next)=>{
    
    const user=await User.find();

    res.status(200).json({
        success:true,
        user
    })
})

//Update other user
exports.updateUser=catchAsyncErrors(async(req,res,next)=>{
    const {name, email, role}=req.body;
    // console.log(req.body);
    const newUserData={
        name : name,
        email: email,
        role: role,
    }
    const user=await User.findByIdAndUpdate(req.params.id,newUserData,{
        new: true,
        runValidators:true,
        useFindAndModify: false,
    });
    
    res.status(200).json({
        success:true,
        user
    })
    
  })

  //Find user by id
    exports.getUserDetails=catchAsyncErrors(async(req,res,next)=>{
        const user  =await User.findById(req.params.id);
        if(!user){
            return next(new ErrorHander("User not found",404));
        }
        res.status(200).json({
            success:true,
            user
        })
    })

// Delete User
exports.deleteUser=catchAsyncErrors(async(req,res,next)=>{
    const user  =await User.findById(req.params.id);
    if(!user){
        return next(new ErrorHander("User not found",404));
    }
    await user.remove();
    res.status(200).json({
        success:true,
        message:"User Deleted"
    })
});