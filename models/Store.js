const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
	storeName: String,
	first_name: String,
	last_name: String,
	phone: Number,
	business_num: Number,
	street_num: Number,
	address: String,
	postal: String,
	city: String,
	province: String,
	country: String,
	inventory: [
		{
			itemName: String,
			desc: String,
			quantity: Number,
			price: Number
		}
	]
});

module.exports = Store = mongoose.model("stores", StoreSchema);
