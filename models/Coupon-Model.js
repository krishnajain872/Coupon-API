
const mongoose = require("mongoose");

const Coupon_Schema = require("./Schema/Coupon-Schema.js");

module.exports = coupon = mongoose.model("Discount-coupon", Coupon_Schema);
// module.exports = Coupon_Schema