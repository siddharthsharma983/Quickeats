const Order = require("../models/Order");

// @desc    Create new order
// @route   POST /api/orders
// @access  Public
const createOrder = async (req, res) => {
  try {
    const { userId, restaurantId, items, total, address, strictVegRequested } =
      req.body;

    // Problem-solving: Check if any item is unavailable *at order time*
    const containsNonVegItems = items.some((item) => !item.isStrictVeg);

    const orderItems = items.map((item) => ({
      ...item,
      isAvailableAtTimeOfOrder: item.isAvailable !== false, // preserve stock status
    }));

    const order = new Order({
      userId,
      restaurantId,
      items: orderItems,
      total,
      address,
      strictVegRequested: strictVegRequested || false,
      containsNonVegItems,
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder };
