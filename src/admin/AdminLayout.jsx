import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import "./Admin.css";

export default function AdminLayout() {
  return (
    <div>
      <AdminNavbar />

      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}