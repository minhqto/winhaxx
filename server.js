const express = require("express");
const db = require("./config/db");
const path = require("path");
const app = express();
const store = require("./routes/api/stores.js");
const bodyParser = require("body-parser");

// Connect Database
db.connectDB()
	.then(msg => {
		console.log(msg);
		//store.save();
	})
	.catch(err => {
		console.log(err);
	});

// Init Middleware
app.use(express.json({ extended: false }));
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/stores", require("./routes/api/stores"));
app.use("/api/items", require("./routes/api/items"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));

	app.get("/", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
