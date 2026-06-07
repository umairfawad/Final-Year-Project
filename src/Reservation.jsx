import React from "react";

export default function RoomBooking() {
  return (
    <div className="room-booking-page">
      <form className="room-booking-form">
        <h1>Room Booking</h1>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          required
        />

        <label>Room Type</label>
        <select required>
          <option value="">Select Room Type</option>
          <option>Standard Room</option>
          <option>Deluxe Room</option>
          <option>Executive Room</option>
          <option>Family Suite</option>
        </select>

        <label>Check-In Date</label>
        <input type="date" required />

        <label>Check-Out Date</label>
        <input type="date" required />

        <label>Number of Guests</label>
        <input
          type="number"
          min="1"
          placeholder="Number of guests"
          required
        />

        <label>Special Requests</label>
        <textarea placeholder="Special requests..."></textarea>

        <button
          type="submit"
          className="book-btn"
        >
          Book Room
        </button>
      </form>
    </div>
  );
}