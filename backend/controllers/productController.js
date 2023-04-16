const Product = require('../models/productModel');
const ErrorHander = require('../utils/errorhander');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ApiFeatures = require('../utils/apifeatures');

//Create new product => /api/v1/product/new -- ADMIN
exports.createProduct =catchAsyncErrors (async (req, res,next) => {
    // req.body.user = req.user.id;
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
});

//Get all products => /api/v1/products
exports.getAllProducts =catchAsyncErrors ( async (req, res) => {
    const resultPerPage=8;
    const productCount = await Product.countDocuments();
    const apiFeatures =new ApiFeatures(Product.find(),req.query)
    .search()
    .filter()   
    .pagination(resultPerPage);
    
    const products = await apiFeatures.query;
    // const products = await Product.find();
    res.status(200).json({
        success: true,
        products,
        productCount
    })
});


//Update Product => /api/v1/product/:id -- ADMIN
exports.updateProduct =catchAsyncErrors ( async (req, res,next) => {
    
    let product = await Product.findById(req.params.id);

    if(!product){
        
        return next(new ErrorHander('Product not found',404));
    }
    
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    
    res.status(200).json({
        success:true,
        product
    })
});


// Get Single Product Details => /api/v1/product/:id
exports.getSingleProduct = catchAsyncErrors ( async (req, res,next) => {

    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander('Product not found',404));
    }
    
    
    res.status(200).json({
        success:true,
        product
    })

});



//Delete Product => /api/v1/product/:id -- ADMIN
exports.deleteProduct = catchAsyncErrors ( async (req, res,next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander('Product not found',404));
    }

    await product.deleteOne();
    
    res.status(200).json({
        success:true,
        message:"Product is deleted"
    })
});

//Get product reviews or create new review 

exports.createProductReview = catchAsyncErrors ( async (req, res,next) => {

    const {rating,comment,productId}=req.body;
    // console.log(req.user.toString());
    const review = {
        user:req.user._id,
        name:req.user.name,
        rating:Number(rating),
        comment
    }

    const product= await Product.findById(productId);

    if(!product){
        return next(new ErrorHander('Product not found',404));
    }

    const isReviewed = product.reviews.find(
        (rev) => req.user.toString() === req.user._id.toString()
    )


    if(isReviewed){
        product.reviews.forEach((rev)=>{
            if(rev.user.toString()===req.user._id.toString()){
                rev.comment=comment;
                rev.rating=rating;
            }
        })
    }else{
        product.reviews.push(review);
        product.numOfReviews=product.reviews.length;
    }
    product.ratings=product.reviews.reduce((acc,item)=>item.rating+acc,0)/product.reviews.length;
    await product.save({validateBeforeSave:false});
    res.status(200).json({
        success:true,
        message:"Review added"
    })
});


//Get all reviews => /api/v1/reviews
exports.getProductReviews = catchAsyncErrors ( async (req, res,next) => {
    const product=await Product.findById(req.query.id);
    if(!product){
        return next(new ErrorHander('Product not found',404));
    }
    res.status(200).json({
        success:true,
        reviews:product.reviews
    })
});

//Delete review => /api/v1/reviews
exports.deleteReview = catchAsyncErrors ( async (req, res,next) => {

    const product= await Product.findById(req.query.productId); 
    if(!product){
        return next(new ErrorHander('Product not found',404));
    }
    const reviews = product.reviews.filter((rev)=>rev._id.toString()!==req.query.id.toString());
    const numOfReviews = reviews.length;
    const ratings = product.reviews.reduce((acc,item)=>item.rating+acc,0)/reviews.length;

    await Product.findByIdAndUpdate(req.query.productId,{
        reviews,
        ratings,
        numOfReviews
    },{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({
        success:true,
        message:"Review deleted"
    })
});