const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
<<<<<<< HEAD
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  street_num: {
    type: Number,
    required: true
  },
  street_address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  postal_code: {
    type: String,
    required: true
  }
=======
	name: {
		type: String,
		required: true
	}
>>>>>>> 37aa3e7b10705df4a1fb35a2a4334f5e911dd789
});

module.exports = User = mongoose.model("users", UserSchema);
