import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderNow() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Success popup
    alert("✅ Order Placed Successfully!\nYour food will be delivered shortly.");

    // Redirect to Food Order page
    navigate("/food-order");
  };

  return (
    <div className="order-now-page">
      <form className="order-form" onSubmit={handleSubmit}>
        <h1>Food Order Form</h1>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          required
        />

        <label>Room Number</label>
        <input
          type="text"
          placeholder="Enter room number"
          required
        />

        <label>Food Item</label>
        <input
          type="text"
          placeholder="Enter food item"
          required
        />

        <label>Quantity</label>
        <input
          type="number"
          placeholder="Enter quantity"
          min="1"
          required
        />

        <label>Special Instructions</label>
        <textarea
          placeholder="Any special instructions..."
        ></textarea>

        <button
          type="submit"
          className="confirm-btn"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
}