const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
	storeName: String,
	address: String,
	location: {
		lat: Number,
		long: Number
	}
});

module.exports = Store = mongoose.model("store", storeSchema);
