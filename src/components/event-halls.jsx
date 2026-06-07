import React from "react";
import { Link } from "react-router-dom";

export default function EventHalls() {
  const halls = [
    {
      id: 1,
      name: "Birthday Hall",
      capacity: "50 Guests",
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600",
    },
    {
      id: 2,
      name: "Wedding Hall",
      capacity: "300 Guests",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600",
    },
    {
      id: 3,
      name: "Corporate Meeting Hall",
      capacity: "100 Guests",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600",
    },
    {
      id: 4,
      name: "Conference Hall",
      capacity: "200 Guests",
      image:
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600",
    },
  ];

  return (
    <div className="event-halls-page">
      <h1>Choose Event Hall</h1>

      <div className="event-grid">
        {halls.map((hall) => (
          <div className="event-card" key={hall.id}>
            <img src={hall.image} alt={hall.name} />

            <div className="event-info">
              <h3>{hall.name}</h3>

              <p>
                <strong>Capacity:</strong> {hall.capacity}
              </p>

              <Link to="/event-table">
                <button className="event-btn">
                  Reserve Hall
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}