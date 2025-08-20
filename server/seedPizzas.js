require("dotenv").config();
const mongoose = require("mongoose");
const Pizza = require("./models/pizzaModel"); // ✅ Only declared once

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const pizzas = [
  {
    name: "Margherita",
    description: "Classic delight with 100% real mozzarella cheese",
    price: 299,
    image: "https://example.com/margherita.jpg",
    category: "Veg",
    sizes: ["Small", "Medium", "Large"],
    toppings: ["Cheese"]
  },
  {
    name: "Pepperoni",
    description: "Pepperoni with cheese and tangy sauce",
    price: 399,
    image: "https://example.com/pepperoni.jpg",
    category: "Non-Veg",
    sizes: ["Small", "Medium", "Large"],
    toppings: ["Cheese", "Pepperoni"]
  }
];

const seedPizzas = async () => {
  try {
    await Pizza.deleteMany();
    await Pizza.insertMany(pizzas);
    console.log("✅ Pizza data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding pizza data:", error);
    process.exit(1);
  }
};

seedPizzas();
