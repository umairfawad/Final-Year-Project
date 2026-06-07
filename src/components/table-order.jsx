import React from "react";
import { useNavigate } from "react-router-dom";

export default function TableOrder() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("✅ Table reserved successfully!");

    navigate("/food-order");
  };

  return (
    <div className="table-order-page">
      <form className="table-order-card" onSubmit={handleSubmit}>
        <h1>Table Reservation</h1>

        <label>Customer Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <label>Table Number</label>
        <input
          type="number"
          placeholder="Selected table number"
          required
        />

        <label>Number of Guests</label>
        <input
          type="number"
          placeholder="Enter guests"
          required
        />

        

        <label>Time</label>
        <input
          type="time"
          required
        />

        <label>Special Instructions</label>
        <textarea
          placeholder="Any special request..."
        ></textarea>

        <button type="submit">
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}