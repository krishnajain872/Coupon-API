const express = require("express");
const router = express.Router();

// models
const CouponModel = require("../models/Coupon-Model");


// Coupon Get 
router.get("/coupon", async (req, res) => {
	try {
		const coupon = await CouponModel.find()
		res.status(202).send(coupon);
		console.log(coupon);

	} catch (e) {
		res.status(404).send(e);
		console.log(e);
	}
})
router.get("/coupon/:id", async (req, res) => {
	try {
		const coupon = await CouponModel.findById(req.params.id)
		res.status(202).send(coupon);
		console.log(coupon);

	} catch (e) {
		res.status(404).send(e);
		console.log(e);
	}
})

// Coupon POST
router.post("/coupon", async (req, res) => {
	try {
		const coupon = new CouponModel(req.body);
		console.log(coupon);
		// const Product = req.body.product;
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



// delete Coupon
router.delete("/coupon/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		// const coupon = await CouponModel.findById(_id);
		// console.log(blog);
		const coupon = await CouponModel.findByIdAndDelete(_id);
		// const SAVE_del_blog = await Blog.save(_id);
		if (!coupon) {
			console.log(coupon + "   coupon deleted")
			return res.status(404).send("coupon not exist");
		} else {
			res.status(200).send(coupon)
		}
		// res.status(201).send(blog);
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
	}

})




// update something in a Coupon with id 
router.patch("/coupon/:id", async (req, res) => {
	try {
		const _id = req.params.id
		let updateCoupon = await CouponModel.findOneAndUpdate(_id, req.body);
		updateCoupon = await CouponModel.find({ id: _id }).catch((err) => { console.log('not workings' + err) });
		res.send(updateCoupon);

	} catch (err) {
		res.status(404).send(err);
	}
})


module.exports = router