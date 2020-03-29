const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const User = require("../../models/User");

// @route    GET api/users
// @desc     Get users
// @access   Public
router.get("/", (req, res) => {
	User.find({}, (err, users) => {
		{
			res.json(users);
		}
	});
});

// @route    GET api/users
// @desc     Get users
// @access   Public
router.post("/getGeoLocation", (req, res) => {
	let addressStr = req.body.address.split(" ").join("+");

	fetch(
		`https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=AIzaSyDXtWIvVcXq6nVbqfmoV1qwx4YTyM2Q5Es`
	)
		.then(res => res.json())
		.then(json => res.json(json.results[0].geometry.location));
});

module.exports = router;
