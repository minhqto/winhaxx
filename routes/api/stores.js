const express = require("express");
const mongoose = require("mongoose");
const Store = require("../../models/Store.js");
const router = express.Router();

// @route    GET api/users
// @desc     Get users
// @access   Public
router.get("/", (req, res) => {
	Store.find({}, (err, stores) => {
		{
			res.json(stores);
		}
	});
});

module.exports = router;
