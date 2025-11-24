const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, default: "Main Course" }, // e.g. Starter, Main, Dessert
  isAvailable: { type: Boolean, default: true }, // ✅Problem-solving: live stock toggle
  // Strict Veg Transparency:
  isStrictVeg: { type: Boolean, default: false }, // true = no egg/onion/garlic
  // Optional, for trust & clarity:
  ingredients: [{ type: String }], // e.g. ["Paneer", "Tomato", "Cashew"]
});

module.exports = mongoose.model("Menu", menuSchema);
