import React from "react";
import { useNavigate } from "react-router-dom";

export default function EventTable() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("✅ Event table reserved successfully!");

    navigate("/");
  };

  return (
    <div className="order-form-page">
      <form className="order-form" onSubmit={handleSubmit}>
        <h1>Special Event Reservation</h1>

        <label>Customer Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <label>Event Type</label>
        <input
          type="text"
          placeholder="Birthday, Wedding, Party..."
          required
        />

        <label>Number of Guests</label>
        <input
          type="number"
          placeholder="Guests"
          required
        />

        <label>Reservation Date</label>
        <input
          type="date"
          required
        />

        <button type="submit">
          Reserve Table
        </button>
      </form>
    </div>
  );
}