const express=require('express');
const { isAuthenticUser, authorizeRoles } = require('../middleware/auth');
const { newOrder,getSingleOrder,myOrder,getAllOrders, deleteOrder } = require('../controllers/orderController');
// const { get } = require('mongoose');
const router = express.Router();

router.route('/order/new').post(isAuthenticUser, newOrder);
// router.route('/order/:id').get(isAuthenticUser, getSingleOrder);
router.route('/orders/me').get(isAuthenticUser, myOrder);
router.route('/admin/orders').get(isAuthenticUser,authorizeRoles('admin'), getAllOrders);
module.exports=router;
router.route('/order/remove/:id').delete(isAuthenticUser, deleteOrder);