import React from "react";
import { Link } from "react-router-dom";

const pizzas = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Veggie Delight", price: 9 },
];

export default function Home({ addToCart }) {
  return (
    <div className="home">
      <h1>🍕 Pizza Delivery App</h1>
      <h2>Menu</h2>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            {pizza.name} - ${pizza.price}
            <button onClick={() => addToCart(pizza)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <Link to="/cart">Go to Cart 🛒</Link>
    </div>
  );
}
