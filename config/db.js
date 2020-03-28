const mongoose = require("mongoose");
const config = require("config");
const db = "monb";
const Schema = mongoose.Schema;

const itemSchema = new Schema({});

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
  inventory: [
    {
      itemName: String,
      desc: String,
      quantity: Number,
      price: Number
    }
  ]
});

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
