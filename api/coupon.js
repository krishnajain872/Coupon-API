const express = require("express");
const router = express.Router();

// models
const CouponModel = require("../models/Coupon-Model");


// products 
router.get("/coupon", async (req, res) => {
	try {
		const coupon = await product.find()
		res.send(coupon);
		console.log(coupon);

	} catch (e) {
		res.send(e);
		console.log(e);
	}
})

router.post("/coupon", async (req, res) => {
	try {
		const coupon = new CouponModel(req.body);
		console.log(coupon);
		// const Product = req.body.product.productId;
		// const Particulars = req.body.particulars;
		// console.log(Product);
		// console.log(Particulars);

		// console.log(coupon.particulars);
		const CouponSave = await coupon.save();
		//  CouponSave.
		res.status(200).send(CouponSave);
		console.log(CouponSave);

	} catch (e) {
		res.status(400).send(e);
		console.log(e);
	}
})

module.exports = router