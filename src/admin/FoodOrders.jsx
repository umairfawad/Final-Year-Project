import { useState } from "react";
import "./Admin.css";

export default function FoodOrders() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Ali Khan",
      orderType: "Room Service",
      location: "Room 101",
      amount: "Rs. 450",
      status: "Pending",
      items: [
        "Chicken Biryani",
        "Cold Drink",
        "Salad"
      ]
    },

    {
      id: 2,
      customer: "Ahmad",
      orderType: "Eat In Hotel",
      location: "Table 5",
      amount: "Rs. 1200",
      status: "Approved",
      items: [
        "Large Pizza",
        "French Fries",
        "Pepsi"
      ]
    },

    {
      id: 3,
      customer: "Usman",
      orderType: "Special Event",
      location: "Wedding Hall A",
      amount: "Rs. 3500",
      status: "Pending",
      items: [
        "BBQ Platter",
        "Chicken Karahi",
        "Cold Drinks"
      ]
    },

    {
      id: 4,
      customer: "Bilal",
      orderType: "Home Delivery",
      location: "Mingora City",
      amount: "Rs. 900",
      status: "Completed",
      items: [
        "Zinger Burger",
        "French Fries",
        "Pepsi"
      ]
    }
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? { ...order, status: newStatus }
          : order
      )
    );
  };

  return (
    <div className="dashboard">

      <h1>🍽 Food Orders Management</h1>

      <div className="table-box">

        <table>

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Order Type</th>
              <th>Location</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((order) => (
              <tr key={order.id}>

                <td>{order.id}</td>

                <td>{order.customer}</td>

                <td>{order.orderType}</td>

                <td>{order.location}</td>

                <td>{order.amount}</td>

                <td>
                  <span
                    className={`status-badge ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td>

                  <button
                    className="view-btn"
                    onClick={() => setSelectedOrder(order)}
                  >
                    View Order
                  </button>

                  <button
                    className="approve-btn"
                    onClick={() =>
                      updateStatus(order.id, "Approved")
                    }
                  >
                    Approve
                  </button>

                  <button
                    className="complete-btn"
                    onClick={() =>
                      updateStatus(order.id, "Completed")
                    }
                  >
                    Complete
                  </button>

                  <button
                    className="pending-btn"
                    onClick={() =>
                      updateStatus(order.id, "Pending")
                    }
                  >
                    Pending
                  </button>

                  <button
                    className="cancel-btn"
                    onClick={() =>
                      updateStatus(order.id, "Cancelled")
                    }
                  >
                    Cancel
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* ORDER DETAILS POPUP */}

      {selectedOrder && (
        <div className="modal-overlay">

          <div className="modal-box">

            <h2>Customer Order Details</h2>

            <p>
              <strong>Customer:</strong>{" "}
              {selectedOrder.customer}
            </p>

            <p>
              <strong>Order Type:</strong>{" "}
              {selectedOrder.orderType}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {selectedOrder.location}
            </p>

            <p>
              <strong>Total Amount:</strong>{" "}
              {selectedOrder.amount}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {selectedOrder.status}
            </p>

            <h3>Ordered Items</h3>

            <ul>
              {selectedOrder.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <button
              className="close-btn"
              onClick={() => setSelectedOrder(null)}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}