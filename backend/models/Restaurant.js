const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  cuisine: [{ type: String }], // e.g. ["North Indian", "Chinese"]
  rating: { type: Number, min: 1, max: 5, default: 4.0 },
  deliveryTime: { type: Number, required: true }, // avg mins
  isAvailable: { type: Boolean, default: true }, // ✅ Problem-solving: live stock toggle
  // strict veg transparency:
  vegOnly: { type: Boolean, default: false }, // true = only veg items allowed
  strictVeg: { type: Boolean, default: false }, // true = no egg/onion/garlic/etc.
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
