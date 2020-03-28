const mongoose = require("mongoose");
const Store = require("../../models/Store.js");

//testing!
module.exports.save = function() {
  let newStoreId = new mongoose.Types.ObjectId();

  let store1 = new Store({
    storeName: "UClean",
    first_name: "Minh",
    storeId: newStoreId,
    inventory: {
      storeId: newStoreId,
      itemName: "Item A",
      desc: "An item!",
      quantity: "500",
      price: "10"
    }
  });

  store1.save(err => {
    if (err) {
      console.log("There was an error saving the store!");
    } else {
      console.log("Store saved!");
    }
  });
};
