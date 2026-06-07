import React from "react";
import { Link } from "react-router-dom";

export default function OrderOptions() {
  return (
    <div className="order-options-page">
      <h1>Choose Order Type</h1>

      <div className="options-container">

        <div className="option-card">
          <h2>🍽️ Hotel Table</h2>
          <p>Enjoy your meal at a hotel table.</p>

          <Link to="/table-options">
            <button>Select</button>
          </Link>
        </div>

        <div className="option-card">
          <h2>🏨 Room Service</h2>
          <p>Get food delivered to your room.</p>

          <Link to="/room-order">
            <button>Select</button>
          </Link>
        </div>

        <div className="option-card">
          <h2>🚚 Delivery</h2>
          <p>Get food delivered to your address.</p>

          <Link to="/delivery-order">
            <button>Select</button>
          </Link>
        </div>

      </div>
    </div>
  );
}