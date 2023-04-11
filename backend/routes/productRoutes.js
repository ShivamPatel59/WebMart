const express=require('express');
const { getAllProducts,createProduct, updateProduct,deleteProduct ,getSingleProduct} = require('../controllers/productController');
const { updateMany } = require('../models/productModel');
const { isAuthenticUser, authorizeRoles } = require('../middleware/auth');
const app = express();

const router=express.Router();

router.route('/products').get(isAuthenticUser,authorizeRoles("admin"), getAllProducts);
router.route('/products/new').post(createProduct);
router.route('/products/:id').get(getSingleProduct).put(isAuthenticUser,authorizeRoles("admin"),updateProduct).delete(isAuthenticUser,authorizeRoles("admin"),deleteProduct);

module.exports=router;