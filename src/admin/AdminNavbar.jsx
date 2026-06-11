import { Link, useNavigate } from "react-router-dom";
import {
  FaHotel,
  FaHome,
  FaBed,
  FaClipboardList,
  FaUtensils
} from "react-icons/fa";
import "./Admin.css";
export default function AdminNavbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/");
  };
  return (
    <div className="admin-navbar">
      <div className="admin-logo">
        <FaHotel />
        Hotel Admin
      </div>
      <div className="admin-links">
        <Link to="/admin">
          <FaHome />
          Dashboard
        </Link>
        <Link to="/admin/rooms">
          <FaBed />
          Rooms
        </Link>
        <Link to="/admin/bookings">
          <FaClipboardList />
          Bookings
        </Link>
        <Link to="/admin/food-orders">
          <FaUtensils />
          Food
        </Link>
      </div>
      <button
        className="logout-btn"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}