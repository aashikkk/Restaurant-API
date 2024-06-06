const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const routes = require("./routes/routes");

const app = express();

main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect(process.env.DB_URI);
}

app.use(bodyParser.json());
app.use("/api/v1", routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
