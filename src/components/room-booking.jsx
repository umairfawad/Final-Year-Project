import React from "react";
import { Link } from "react-router-dom";

export default function RoomBooking() {
  const rooms = [
    {
      id: 101,
      name: "Standard Room",
      beds: "1 King Bed",
      price: "Rs. 4,000 / Night",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
    },
    {
      id: 102,
      name: "Deluxe Room",
      beds: "2 Beds",
      price: "Rs. 6,000 / Night",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
    },
    {
      id: 103,
      name: "Executive Room",
      beds: "2 Queen Beds",
      price: "Rs. 8,000 / Night",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600",
    },
    {
      id: 104,
      name: "Family Suite",
      beds: "4 Beds",
      price: "Rs. 10,000 / Night",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600",
    },
    {
      id: 105,
      name: "Luxury Suite",
      beds: "1 King + Sofa",
      price: "Rs. 12,000 / Night",
      image:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600",
    },
    {
      id: 106,
      name: "Single Room",
      beds: "1 Bed",
      price: "Rs. 3,500 / Night",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600",
    },
    {
      id: 107,
      name: "Double Room",
      beds: "2 Beds",
      price: "Rs. 5,500 / Night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600",
    },
    {
      id: 108,
      name: "Premium Room",
      beds: "2 Queen Beds",
      price: "Rs. 7,500 / Night",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600",
    },
  ];

  return (
    <div className="room-booking-page">
      <div className="room-overlay">
        <h1>Available Rooms</h1>

        <div className="room-grid">
          {rooms.map((room) => (
            <div className="room-card" key={room.id}>
              <img src={room.image} alt={room.name} />

              <div className="room-info">
                <h3>{room.name}</h3>

                <p>
                  <strong>Room No:</strong> {room.id}
                </p>

                <p>
                  <strong>Beds:</strong> {room.beds}
                </p>

                <p className="room-price">
                  {room.price}
                </p>

                <Link to="/reservation">
                  <button className="book-room-btn">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}