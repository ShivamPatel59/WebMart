const express=require('express');
const { getAllProducts,createProduct, updateProduct,deleteProduct ,getSingleProduct,createProductReview} = require('../controllers/productController');
const { updateMany } = require('../models/productModel');
const { isAuthenticUser, authorizeRoles } = require('../middleware/auth');
const router=express.Router();

router.route('/products').get(isAuthenticUser,authorizeRoles("admin"), getAllProducts);
router.route('/products/new').post(createProduct);
router.route('/products/:id').get(getSingleProduct).put(isAuthenticUser,authorizeRoles("admin"),updateProduct).delete(isAuthenticUser,authorizeRoles("admin"),deleteProduct);

router.route('/review').put(isAuthenticUser,createProductReview);

module.exports=router;