const mongoose = require("mongoose");
//  const Product_Schema = require("../Schema/product-Schema.js");
const Product_Schema = mongoose.Schema(
    {
        productId: {
            type: Array
        }
    }
)

const Particular = mongoose.Schema(

    {


        model: Array,
        brand: Array,
        user: Array


    })


const Coupon_Schema = mongoose.Schema(

    {

        name: {
            type: String,
            required: true,
            // default: "COUPON"
        },
        code: {
            type: String,
            required: true,

        },
        Discount: {
            type: Number
            , required: true,
            default: 20
        },
        isPercent: {
            type: Boolean,
            required: true,
            default: true
        }
        , isActive: {
            type: Boolean,
            required: true,
            default: true
        }
        ,
        start: {
            type: Date,
            required: true,
            default: Date.now(),
            trim: true
        }
        , ending: {
            type: Date,
            required: true,
            default: Date.now(),
            trim: true
        },
        product: Product_Schema,
        particulars: Particular

    }
    , { timestamps: true })
module.exports = coupon = Coupon_Schema;