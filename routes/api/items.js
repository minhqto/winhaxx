const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const Item = require("../../models/Item");
const Store = require("../../models/Store");

// @route    GET api/items
// @desc     Get users
// @access   Public
router.get("/", (req, res) => {
	Item.find({}, (err, items) => {
		{
			res.json(items);
		}
	});
});

// @route    POST api/items
// @desc     Get all items close to the current user <= 5km
// @access   Public
// router.post("/", (req, res) => {
// 	let currentUserGeoLocation = req.body.userGeoLocation;
// 	let itemsAround = [];

// 	Store.find({}, (err, store) => {
// 		let storeLocation = store.location;
// 		console.log(storeLocation);
// 		let storeId = store._id;
// 		let isCloseToCurrentUser =
// 			distance(
// 				storeLocation.lat,
// 				storeLocation.long,
// 				currentUserGeoLocation.lat,
// 				currentUserGeoLocation.lng,
// 				"K"
// 			) < 5;

// 		if (isCloseToCurrentUser) {
// 			Item.find({ storeId: storeId }, (err, item) => {
// 				result.push(item);
// 			});
// 		}
// 	});

// 	res.json({
// 		itemsAround: currentUserGeoLocation
// 	});
// });

function distance(lat1, lon1, lat2, lon2, unit) {
	if (lat1 == lat2 && lon1 == lon2) {
		return 0;
	} else {
		var radlat1 = (Math.PI * lat1) / 180;
		var radlat2 = (Math.PI * lat2) / 180;
		var theta = lon1 - lon2;
		var radtheta = (Math.PI * theta) / 180;
		var dist =
			Math.sin(radlat1) * Math.sin(radlat2) +
			Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = (dist * 180) / Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit == "K") {
			dist = dist * 1.609344;
		}
		if (unit == "N") {
			dist = dist * 0.8684;
		}
		return dist;
	}
}

module.exports = router;
