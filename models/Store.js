const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  storeName: String,
  address: String,
  position: {
    lat: Number,
    long: Number
  }
});

module.exports = Store = mongoose.model("stashdb_vendors", storeSchema);
