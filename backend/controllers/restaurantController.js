const Restaurant = require("../models/Restaurant");

// @desc    Get all restaurants
// @route   GET /api/restaurants
// @access  Public
const getRestaurants = async (req, res) => {
  try {
    const { cuisine, vegOnly, strictVeg } = req.query;

    let filter = { isAvailable: true };

    if (cuisine) filter.cuisine = { $in: [cuisine] };
    if (vegOnly === "true") filter.vegOnly = true;
    if (strictVeg === "true") filter.strictVeg = true;

    const restaurants = await Restaurant.find(filter).select("-__v");
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRestaurants };
