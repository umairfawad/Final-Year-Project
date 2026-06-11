import { useState } from "react";
import "./Admin.css";

export default function RoomBookings() {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const [bookings, setBookings] = useState([
    {
      id: 1,
      customer: "Ali Khan",
      roomNo: "101",
      roomType: "Deluxe Room",
      guests: 2,
      checkIn: "15-06-2026",
      checkOut: "18-06-2026",
      amount: "Rs. 12,000",
      status: "Pending"
    },
    {
      id: 2,
      customer: "Ahmad",
      roomNo: "205",
      roomType: "Executive Room",
      guests: 3,
      checkIn: "16-06-2026",
      checkOut: "20-06-2026",
      amount: "Rs. 20,000",
      status: "Approved"
    },
    {
      id: 3,
      customer: "Usman",
      roomNo: "301",
      roomType: "Suite Room",
      guests: 4,
      checkIn: "12-06-2026",
      checkOut: "15-06-2026",
      amount: "Rs. 30,000",
      status: "Completed"
    }
  ]);

  const updateStatus = (id, status) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id
          ? { ...booking, status }
          : booking
      )
    );
  };

  return (
    <div className="dashboard">

      <h1>🏨 Room Bookings</h1>

      <div className="table-box">

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Room No</th>
              <th>Room Type</th>
              <th>Guests</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>

                <td>{booking.id}</td>
                <td>{booking.customer}</td>
                <td>{booking.roomNo}</td>
                <td>{booking.roomType}</td>
                <td>{booking.guests}</td>
                <td>{booking.amount}</td>

                <td>
                  <span
                    className={`status-badge ${booking.status.toLowerCase().replace(" ", "")}`}
                  >
                    {booking.status}
                  </span>
                </td>

                <td>

                  <button
                    className="view-btn"
                    onClick={() => setSelectedBooking(booking)}
                  >
                    View
                  </button>

                  <button
                    className="approve-btn"
                    onClick={() =>
                      updateStatus(booking.id, "Approved")
                    }
                  >
                    Approve
                  </button>

                  <button
                    className="complete-btn"
                    onClick={() =>
                      updateStatus(booking.id, "Checked In")
                    }
                  >
                    Check In
                  </button>

                  <button
                    className="pending-btn"
                    onClick={() =>
                      updateStatus(booking.id, "Completed")
                    }
                  >
                    Complete
                  </button>

                  <button
                    className="cancel-btn"
                    onClick={() =>
                      updateStatus(booking.id, "Cancelled")
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

      {selectedBooking && (
        <div className="modal-overlay">

          <div className="modal-box">

            <h2>Booking Details</h2>

            <p><strong>Customer:</strong> {selectedBooking.customer}</p>

            <p><strong>Room No:</strong> {selectedBooking.roomNo}</p>

            <p><strong>Room Type:</strong> {selectedBooking.roomType}</p>

            <p><strong>Guests:</strong> {selectedBooking.guests}</p>

            <p><strong>Check In:</strong> {selectedBooking.checkIn}</p>

            <p><strong>Check Out:</strong> {selectedBooking.checkOut}</p>

            <p><strong>Amount:</strong> {selectedBooking.amount}</p>

            <p><strong>Status:</strong> {selectedBooking.status}</p>

            <button
              className="close-btn"
              onClick={() => setSelectedBooking(null)}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}