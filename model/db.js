const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const restaurantSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    telephone: {
        type: String,
        required: true,
        maxlength: 15,
        match: [/^\+?\d{1,15}$/, "Please enter a valid telephone number"],
    },
});

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
