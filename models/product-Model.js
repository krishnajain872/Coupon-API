const mongoose = require("mongoose");
const Product_Schema = require("./Schema/product-Schema")

module.exports = product = mongoose.model('ProductInfo', Product_Schema);