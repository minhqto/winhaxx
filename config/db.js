const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

module.exports.connectDB = function() {
  return new Promise(function(resolve, reject) {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    mongoose.connection.on("err", err => {
      console.error(err.message);
      // Exit process with failure
      reject(err);
    });

    mongoose.connection.once("open", () => {
      resolve("MongoDB connection made!");
    });
  });
};
