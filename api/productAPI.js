const express = require("express");
const router = express.Router();






// models
const product = require("../models/product-Model");
const CouponModel = require("../models/Coupon-Model");



// products 
router.get("/product", async (req, res) => {
    try {
        const productInfo = await product.find()
        res.send(productInfo);
        console.log(productInfo);

    } catch (e) {
        res.send(e);
        console.log(e);
    }
})
router.post("/product", async (req, res) => {
    try {
        const Product = new product(req.body);
        console.log(Product.product.Salers.push(req.body.Salers));
        const productInfo = await Product.save();
        res.send(productInfo);
        console.log(productInfo);

    } catch (e) {
        res.send(e);
        console.log(e);
    }
})






module.exports = router