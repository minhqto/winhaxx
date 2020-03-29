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
<<<<<<< HEAD
router.post("/getGeoLocation", async (req, res) => {
  //console.log(geoCodeAPI);
  let addressStr = req.body.address.split(" ").join("+");

  let apiResult = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=AIzaSyDXtWIvVcXq6nVbqfmoV1qwx4YTyM2Q5Es`
  );

  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=AIzaSyDXtWIvVcXq6nVbqfmoV1qwx4YTyM2Q5Es`
  )
    .then(res => res.json())
    .then(json => res.json(json.results[0].geometry.location));
=======
router.post("/getGeoLocation", (req, res) => {
	let addressStr = req.body.address.split(" ").join("+");

	fetch(
		`https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=AIzaSyDXtWIvVcXq6nVbqfmoV1qwx4YTyM2Q5Es`
	)
		.then(res => res.json())
		.then(json => res.json(json.results[0].geometry.location));
>>>>>>> 49c91dc378cd3a0f0f6cdd298eb51d5e1fb9f176
});

module.exports = router;
