const express=require('express');
const { getAllProducts,createProduct, updateProduct,deleteProduct ,getSingleProduct} = require('../controllers/productController');
const { updateMany } = require('../models/productModel');
const app = express();

const router=express.Router();

router.route('/products').get(getAllProducts);
router.route('/products/new').post(createProduct);
router.route('/products/:id').get(getSingleProduct).put(updateProduct).delete(deleteProduct);

module.exports=router;