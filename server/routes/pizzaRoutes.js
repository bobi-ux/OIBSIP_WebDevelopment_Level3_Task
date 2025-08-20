 
// server/routes/pizzaRoutes.js
const express = require("express");
const Pizza = require("../models/Pizza");

const router = express.Router();

// ✅ Get all pizzas
router.get("/", async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Add a new pizza
router.post("/", async (req, res) => {
  try {
    const { name, image, variants, prices, category, description } = req.body;

    const newPizza = new Pizza({
      name,
      image,
      variants,
      prices,
      category,
      description
    });

    await newPizza.save();
    res.status(201).json({ message: "Pizza added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
