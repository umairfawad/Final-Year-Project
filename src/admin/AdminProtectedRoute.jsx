import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("adminAuth");

  if (!isAdmin) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Access Denied</h2>
        <p>Please login from Admin Sidebar</p>
      </div>
    );
  }

  return children;
}