const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  menuItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
    required: true,
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 },
  isAvailableAtTimeOfOrder: { type: Boolean, default: true }, //  Problem-solving: track stock status at order time
});

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true }, // simple string for now (no User model yet)
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    items: [orderItemSchema],
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["placed", "preparing", "dispatched", "delivered", "cancelled"],
      default: "placed",
    },
    address: { type: String, required: true },
    // Strict Veg Transparency:
    containsNonVegItems: { type: Boolean, default: false }, // auto-set on order creation
    strictVegRequested: { type: Boolean, default: false }, // user preference
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
