const Order=require('../models/orderModel');
const Product=require('../models/productModel');
const ErrorHandler=require('../utils/errorhander');
const catchAsyncErrors=require('../middleware/catchAsyncErrors');

//Create new order => /api/v1/order/new
exports.newOrder=catchAsyncErrors(async(req,res,next)=>{
    const {orderItems}=req.body;
    console.log(orderItems);
    const order = await Order.create({
        orderItems,
        totalPrice: orderItems.price * orderItems.quantity,
        user:req.user._id
    })
    res.status(200).json({
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
    console.log(orders);
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

//Delete Order
exports.deleteOrder=catchAsyncErrors(async(req,res,next)=>{
    const order=await Order.findById(req.params.id);
    if(!order){
        return next(new ErrorHandler('Order not found',200));
    }
    await order.deleteOne();
    res.status(200).json({
        success:true
    })
});