import React from "react";
import { useNavigate } from "react-router-dom";

export default function DeliveryOrder() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("✅ Delivery order placed successfully!");

    navigate("/food-order");
  };

  return (
    <div className="order-form-page">
      <form className="order-form" onSubmit={handleSubmit}>
        <h1>Home Delivery</h1>

        <label>Customer Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter phone number"
          required
        />

        <label>Delivery Address</label>
        <textarea
          placeholder="Enter full address"
          required
        ></textarea>

        <button type="submit">
          Confirm Order
        </button>
      </form>
    </div>
  );
}