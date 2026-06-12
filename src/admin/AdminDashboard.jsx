import { Link } from "react-router-dom";
import {
  FaBed,
  FaClipboardList,
  FaUtensils,
  FaMoneyBillWave
} from "react-icons/fa";

import "./Admin.css";

export default function AdminDashboard() {
  return (
    <div className="dashboard">

      <h1>🏨 Hotel Management Dashboard</h1>

      <div className="cards">

        <Link to="/admin/rooms" className="card-link">
          <div className="card blue">
            <FaBed className="icon" />
            <h3>Total Rooms</h3>
            <p>25</p>
          </div>
        </Link>

        <Link to="/admin/bookings" className="card-link">
          <div className="card green">
            <FaClipboardList className="icon" />
            <h3>Bookings</h3>
            <p>120</p>
          </div>
        </Link>

        <Link to="/admin/food-orders" className="card-link">
          <div className="card orange">
            <FaUtensils className="icon" />
            <h3>Food Orders</h3>
            <p>80</p>
          </div>
        </Link>

        <Link to="/admin/revenue" className="card-link">
          <div className="card red">
            <FaMoneyBillWave className="icon" />
            <h3>Revenue</h3>
            <p>Rs. 450,000</p>
          </div>
        </Link>

        {/* ✅ FIXED MANAGE FOOD LINK */}
        <Link to="/admin/food" className="card-link">
          <div className="card purple">
            <FaUtensils className="icon" />
            <h3>Add Food</h3>
          </div>
        </Link>

      </div>

      <div className="table-box">
        <h2>Recent Orders</h2>

        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Service</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ali</td>
              <td>Room Booking</td>
              <td className="done">Completed</td>
            </tr>

            <tr>
              <td>Khan</td>
              <td>Food Order</td>
              <td className="wait">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}