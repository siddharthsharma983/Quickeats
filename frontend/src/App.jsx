import { useState, useEffect } from "react";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  // Dummy data (later replace with API)
  useEffect(() => {
    setRestaurants([
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
      {
        _id: "674a1b2c3d4e5f6a7b8c9d0f",
        name: "Green Garden",
        address: "456 Veg Lane",
        cuisine: ["North Indian", "South Indian"],
        rating: 4.8,
        deliveryTime: 30,
        isAvailable: true,
        vegOnly: true,
        strictVeg: true,
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-600">QuickEats</h1>
        <p className="mt-2 text-gray-700">
          Live stock sync & veg transparency — coming soon.
        </p>

        {/* Restaurant List */}
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="mt-4 p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{restaurant.name}</h2>
            <p className="text-sm text-gray-500">{restaurant.address}</p>
            <p className="text-sm text-gray-500">
              Cuisine: {restaurant.cuisine.join(", ")}
            </p>
            <div className="flex items-center mt-2">
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  restaurant.isAvailable
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {restaurant.isAvailable ? "🟢 Available" : "🔴 Out of Stock"}
              </span>
              {restaurant.strictVeg && (
                <span className="ml-2 px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                  🌱 Strict Veg
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
