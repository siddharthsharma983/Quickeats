const express = require("express");
const { getMenuByRestaurant } = require("../controllers/menuController");

const router = express.Router();

router.get("/:restaurantId", getMenuByRestaurant);

module.exports = router;
