import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-box">
          <h2>🏨 Hotel Management</h2>
          <p>
            Book rooms and order delicious food easily.
            We provide comfort, quality, and best service.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#">🔵</a>
            <a href="#">🟣</a>
            <a href="#">🔴</a>
            <a href="#">🟢</a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/reservation">Reservation</Link>
          <Link to="/food-order">Food Menu</Link>
        </div>

        {/* Services */}
        <div className="footer-box">
          <h3>Services</h3>
          <p>Room Booking</p>
          <p>Food Delivery</p>
          <p>Event Booking</p>
          <p>Customer Support</p>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>📞 +92 300 0000000</p>
          <p>📧 hotel@gmail.com</p>
          <p>📍 Swat, KPK, Pakistan</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Hotel Management. All rights reserved.
      </div>

    </footer>
  );
}