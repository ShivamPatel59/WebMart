const Order=require('../models/orderModel');
const Product=require('../models/productModel');
const ErrorHandler=require('../utils/errorhander');
const catchAsyncErrors=require('../middleware/catchAsyncErrors');

//Create new order => /api/v1/order/new
exports.newOrder=catchAsyncErrors(async(req,res,next)=>{
    // console.log(req.user._id);
    const {orderItems,shippingInfo,paymentInfo,itemsPrice,taxPrice,shippingPrice,totalPrice}=req.body;
    const order=new Order({
        orderItems,shippingInfo,paymentInfo,itemsPrice,taxPrice,shippingPrice,totalPrice,
        paidAt:Date.now(),
        user:req.user._id
    })
    await order.save();
    res.status(201).json({
        success:true,
        order
    })
});

//GET single order => /api/v1/order/:id
exports.getSingleOrder=catchAsyncErrors(async(req,res,next)=>{
    const order=await Order.findById(req.params.id).populate('user','name email');
    if(!order){
        return next(new ErrorHandler('Order not found',404));
    }
    res.status(200).json({
        success:true,
        order
    })
});

//GET Logged in User order => /api/v1/order/:id
exports.myOrder=catchAsyncErrors(async(req,res,next)=>{
    const orders=await Order.find({user:req.user.id});
    
    res.status(200).json({
        success:true,
        orders
    })
});

//Get all orders => /api/v1/admin/orders
exports.getAllOrders=catchAsyncErrors(async(req,res,next)=>{
    const orders=await Order.find();
    
    res.status(200).json({
        success:true,
        orders
    })
});