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
  inventory: [
    {
      itemName: String,
      desc: String,
      quantity: Number,
      price: Number
    }
  ]
});

module.exports.connectDB = function() {
  return new Promise(function(resolve, reject) {
    // let db = mongoose.createConnection(
    //   "mongodb+srv://stashdbuser:winhaxx2020@stashdb-u3d0a.mongodb.net/test?retryWrites=true&w=majority"
    // );
    mongoose.connect(
      "mongodb+srv://stashdbuser:winhaxx2020@stashdb-u3d0a.mongodb.net/test?retryWrites=true&w=majority"
    );

    mongoose.connection.on("err", err => {
      console.error(err.message);
      // Exit process with failure
      reject(err);
    });

    mongoose.connection.once("open", () => {
      Store = mongoose.model("stashdb_vendors", storeSchema);
      resolve("MongoDB connection made!");
    });
  });
};
// need to make a function that saves data to db

module.exports.save = function() {
  let store1 = new Store({
    storeName: "UClean",
    first_name: "Minh"
  });

  store1.save(err => {
    if (err) {
      console.log("There was an error saving the store!");
    } else {
      console.log("Store saved!");
    }
  });
};
