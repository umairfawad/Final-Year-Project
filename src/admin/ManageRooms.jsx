import { useState } from "react";
import "./Admin.css";

export default function ManageRooms() {

  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomNo: "101",
      type: "Deluxe",
      beds: 2,
      price: 5000,
      status: "Available"
    }
  ]);

  const [form, setForm] = useState({
    roomNo: "",
    type: "",
    beds: "",
    price: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  const roomTypes = [
    "Deluxe",
    "Executive",
    "Suite",
    "Standard"
  ];

  const addRoom = () => {
    if (!form.roomNo || !form.type || !form.beds || !form.price) return;

    const newRoom = {
      id: rooms.length + 1,
      ...form,
      status: "Available"
    };

    setRooms([...rooms, newRoom]);

    setForm({
      roomNo: "",
      type: "",
      beds: "",
      price: ""
    });
  };

  const updateStatus = (id, status) => {
    setRooms(
      rooms.map((room) =>
        room.id === id ? { ...room, status } : room
      )
    );
  };

  const deleteRoom = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  return (
    <div className="dashboard">

      <h1>🏨 Manage Rooms</h1>

      {/* FORM */}
      <div className="table-box">

        <h2>Add New Room</h2>

        <div className="room-form">

          <input
            placeholder="Room No"
            value={form.roomNo}
            onChange={(e) =>
              setForm({ ...form, roomNo: e.target.value })
            }
          />

          {/* ROOM TYPE BUTTON */}
          <button
            className="type-btn"
            onClick={() => setShowPopup(true)}
          >
            {form.type ? form.type : "Select Room Type"}
          </button>

          <input
            placeholder="Beds"
            value={form.beds}
            onChange={(e) =>
              setForm({ ...form, beds: e.target.value })
            }
          />

          <input
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />

          <button className="add-btn" onClick={addRoom}>
            Add Room
          </button>

        </div>

      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="modal-overlay">

          <div className="modal-box">

            <h2>Select Room Type</h2>

            {roomTypes.map((type, index) => (
              <button
                key={index}
                className="type-option"
                onClick={() => {
                  setForm({ ...form, type });
                  setShowPopup(false);
                }}
              >
                {type}
              </button>
            ))}

            <button
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>

          </div>

        </div>
      )}

      {/* TABLE */}
      <div className="table-box">

        <table>

          <thead>
            <tr>
              <th>Room No</th>
              <th>Type</th>
              <th>Beds</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room) => (
              <tr key={room.id}>

                <td>{room.roomNo}</td>
                <td>{room.type}</td>
                <td>{room.beds}</td>
                <td>Rs. {room.price}</td>

                <td>
                  <span className={`status-badge ${room.status.toLowerCase()}`}>
                    {room.status}
                  </span>
                </td>

                <td>

                  <button
                    className="approve-btn"
                    onClick={() => updateStatus(room.id, "Available")}
                  >
                    Available
                  </button>

                  <button
                    className="pending-btn"
                    onClick={() => updateStatus(room.id, "Booked")}
                  >
                    Booked
                  </button>

                  <button
                    className="cancel-btn"
                    onClick={() => updateStatus(room.id, "Maintenance")}
                  >
                    Maintenance
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteRoom(room.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}