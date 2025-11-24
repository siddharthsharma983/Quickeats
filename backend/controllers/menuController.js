const Menu = require("../models/Menu");

// @desc    Get menu items for a restaurant
// @route   GET /api/menu/:restaurantId
// @access  Public
const getMenuByRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const { isStrictVeg, category } = req.query;

    let filter = { restaurantId, isAvailable: true };

    if (isStrictVeg === "true") filter.isStrictVeg = true;
    if (category) filter.category = category;

    const menuItems = await Menu.find(filter).select("-__v");
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getMenuByRestaurant };
