const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    shippingInfo:{
        address:{
            type:String,
        },
        city:{
            type:String,
        },
        phoneNo:{
            type:String,
        },
        postalCode:{
            type:String,
        },
        country:{
            type:String,
        }
    },
    user:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'User'
    },
    orderItems:[
        {
            name:{
                type:String,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
            image:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            product:{
                type:mongoose.Schema.ObjectId,
                required:true,
                ref:'Product'
            }
        }
    ],
    paymentInfo:{
        id:{
            type:String
        },
        status:{
            type:String
        }
    },
    paidAt:{
        type:Date , 
        default:Date.now()
    },
    itemsPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    taxPrice:{
        type:Number,
        default:0.0
    }, 
    shippingPrice:{
        type:Number,
        default:50
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    orderStatus:{
        type:String,
        required:true,
        default:'Processing'

    },
    deliveredAt:{
        type:Date
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Order',orderSchema);