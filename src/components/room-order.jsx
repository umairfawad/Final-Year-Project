import React from "react";
import { useNavigate } from "react-router-dom";

export default function RoomOrder() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("✅ Room service order placed successfully!");

    navigate("/food-order");
  };

  return (
    <div className="order-form-page">
      <form className="order-form" onSubmit={handleSubmit}>
        <h1>Room Service Order</h1>

        <label>Guest Name</label>
        <input
          type="text"
          placeholder="Enter guest name"
          required
        />

        <label>Room Number</label>
        <input
          type="number"
          placeholder="Enter room number"
          required
        />

        <label>Special Instructions</label>
        <textarea
          placeholder="Special instructions..."
        ></textarea>

        <button type="submit">
          Confirm Order
        </button>
      </form>
    </div>
  );
}