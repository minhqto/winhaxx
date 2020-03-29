const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	name: String,
	price: Number,
	storeId: { type: Schema.Types.ObjectId, ref: "store" },
	quantity: Number
});

module.exports = Item = mongoose.model("item", itemSchema);
