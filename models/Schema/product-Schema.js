const mongoose = require("mongoose");

const Product_Schema = mongoose.Schema(

{
    product: {

        name: {
            type: String,
            // required: true
        },

        price: {
            type: Number,
            required: true,
            default: 20000
        }
        , quantity: {
            type: Number,
            required: true,
            default: 10
        }

        , model: {
            type: String,
            // required: true,
            // default: "X124",

        }, brand: {
            type: String,
            // required: true,
            default: "MI"
        }
        , Salers: {
            type: Array,
            // required: true,
            default: ["devicecure"]
        },
        couponCode: {
            Type: String,
            required: false,
            // default: "krishna"
        },
        isAvailable: {
            type: Boolean,
            default: true,
            required: true
        },
        date: {
            type: Date,
            required: true,
            default: Date.now(),
            trim: true
        }, category: {
            type: String,
            required: true,
            default: "Electronincs and Mobile "
        }
        , subCategory: {
            type: String,
            required: true,
            default: "Mobile"
        },
        productDes: {
            type: String,
            required: true,
            default: "mobile is a very amazing brand and model it have very high speed processor..."
        }
    }
}, { timestamps: true }
)

module.exports = product = Product_Schema;