import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h1>🛒 Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
          <Link to="/checkout">Proceed to Checkout 💳</Link>
        </>
      )}
      <br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}
