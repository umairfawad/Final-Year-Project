import React from "react";
import menu1 from "../assets/room1.avif";
import food4 from "../assets/4 food.jpg";

export default function FoodMenu() {
  return (
    <section className="menu-container">

      <div className="menu-card food-card">
        <img src={food4} alt="Food" />

        <div className="menu-content">
          <h3>Delicious Food</h3>
          <p>Enjoy tasty meals from our hotel kitchen</p>
          <button className="explorer_btn">Food Order</button>
        </div>
      </div>

      <div className="menu-card room-card" id="room-card">
        <img src={menu1} alt="Room" />

        <div className="menu-content">
          <h3>Luxury Rooms</h3>
          <p>Comfortable and premium hotel rooms</p>
          <button className="room_btn">Room Booking</button>
        </div>
      </div>

    </section>
  );
}