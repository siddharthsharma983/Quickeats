require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// DB Connect
const connectDB = require("./db");
connectDB();

app.use(express.json());

// Routes
const restaurantRoutes = require("./routes/restaurantRoutes");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("QuickEats Backend Running ");
});

// 🔧 Test Route — Day 2 Progress Check (No DB needed)
app.get("/test-restaurants", (req, res) => {
  res.json([
    {
      _id: "674a1b2c3d4e5f6a7b8c9d0e",
      name: "Tasty Bites",
      address: "123 Main St",
      cuisine: ["North Indian", "Chinese"],
      rating: 4.5,
      deliveryTime: 25,
      isAvailable: true,
      vegOnly: false,
      strictVeg: false,
    },
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
