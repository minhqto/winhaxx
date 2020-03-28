const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
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
	storeId: String,
	inventory: [
		{
			storeId: String,
			itemName: String,
			desc: String,
			quantity: Number,
			price: Number
		}
	]
});

module.exports = Store = mongoose.model("stashdb_vendors", storeSchema);
