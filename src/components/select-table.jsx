import React from "react";
import { useNavigate } from "react-router-dom";

export default function SelectTable() {
  const navigate = useNavigate();

  const tables = Array.from({ length: 25 }, (_, i) => i + 1);

  const handleSelect = (tableNo) => {
    // alert(`✅ Table ${tableNo} selected successfully!`);
    navigate("/table-order");
  };

  return (
    <div className="select-table-page">
      <h1>Select Your Table</h1>

      <div className="tables-grid">
        {tables.map((table) => (
          <div className="table-card" key={table}>
            <h2>Table {table}</h2>

            <button
              onClick={() => handleSelect(table)}
            >
              Select Table
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}