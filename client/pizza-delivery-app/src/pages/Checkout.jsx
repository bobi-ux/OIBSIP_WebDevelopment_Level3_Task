import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [paid, setPaid] = useState(false);

  const handlePayment = () => {
    setPaid(true);
  };

  return (
    <div className="checkout">
      <h1>💳 Checkout</h1>
      {paid ? (
        <p>✅ Payment successful! Your pizza is on the way! 🚀</p>
      ) : (
        <>
          <input type="text" placeholder="Card Number" />
          <button onClick={handlePayment}>Pay Now</button>
        </>
      )}
      <br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}
