import mongoose from "mongoose";

// Define the Pizza Schema
const pizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Pizza name is required"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Description is required"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"]
  },
  image: {
    type: String, // URL of pizza image
    required: [true, "Image URL is required"]
  },
  category: {
    type: String,
    enum: ["Veg", "Non-Veg", "Vegan"],
    required: [true, "Category is required"]
  },
  toppings: {
    type: [String], // Array of topping names
    default: []
  },
  availability: {
    type: Boolean,
    default: true // true = available, false = out of stock
  }
}, {
  timestamps: true // Automatically adds createdAt & updatedAt
});

// Create and export model
const Pizza = mongoose.model("Pizza", pizzaSchema);
export default Pizza;
