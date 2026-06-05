import { Link } from "react-router-dom";
import React from "react";
import "./RoomMenu.css";

export default function RoomMenu() {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: "5000 PKR / night",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    },
    {
      id: 2,
      name: "Standard Room",
      price: "3000 PKR / night",
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600",
    },
    {
      id: 3,
      name: "Executive Room",
      price: "7000 PKR / night",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
    },
    {
      id: 4,
      name: "Family Suite",
      price: "9000 PKR / night",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600",
    },
  ];

  return (
    <div className="room-container">
      
      {/* Header */}
      <div className="room-header">
        <h2>Room Menu</h2>
        <span className="see-more">See More →</span>
      </div>

      {/* Grid */}
      <div className="room-grid">
        {rooms.map((room) => (
          <div className="room-card" key={room.id}>
            <img src={room.img} alt={room.name} />

            <div className="room-info">
              <h3>{room.name}</h3>
              <p>{room.price}</p>
              {/* <button>Book Now</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}