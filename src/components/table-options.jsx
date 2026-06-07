import React from "react";
import { Link } from "react-router-dom";

export default function TableOptions() {
  return (
    <div className="table-options-page">
      <h1>Choose Table Type</h1>

      <div className="table-options-container">

        <div className="table-option-card">
          <h2>🍽️ Eat at Hotel Table</h2>

          <p>
            Reserve a regular dining table and enjoy your meal.
          </p>

          <Link to="/select-table">
            <button>Select</button>
          </Link>
        </div>

        <div className="table-option-card">
          <h2>🎉 Special Event Table</h2>

          <p>
            Reserve tables for birthdays, parties and special events.
          </p>

          <Link to="/event-halls">
            <button>Select</button>
          </Link>
        </div>

      </div>
    </div>
  );
}