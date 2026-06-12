import { useState, useEffect } from "react";
import "./Admin.css";

export default function ManageFood() {

  const [foods, setFoods] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: ""
  });

  // Load from storage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("foods")) || [];
    setFoods(saved);
  }, []);

  // Save to storage
  const saveToStorage = (data) => {
    localStorage.setItem("foods", JSON.stringify(data));
  };

  // Add food
  const addFood = () => {
    if (!form.name || !form.price || !form.image) return;

    const newFood = {
      id: Date.now(),
      ...form
    };

    const updated = [...foods, newFood];
    setFoods(updated);
    saveToStorage(updated);

    setForm({ name: "", price: "", image: "" });
  };

  // Delete food
  const deleteFood = (id) => {
    const updated = foods.filter((f) => f.id !== id);
    setFoods(updated);
    saveToStorage(updated);
  };

  return (
    <div className="dashboard">

      <h1>🍽 Manage Food Menu</h1>

      {/* FORM */}
      <div className="table-box">

        <h2>Add New Food</h2>

        <div className="room-form">

          <input
            placeholder="Food Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Price (Rs)"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />

          <input
            placeholder="Image URL"
            value={form.image}
            onChange={(e) =>
              setForm({ ...form, image: e.target.value })
            }
          />

          <button className="add-btn" onClick={addFood}>
            Add Food
          </button>

        </div>

      </div>

      {/* FOOD LIST */}
      <div className="table-box">

        <h2>Food Items</h2>

        <table>

          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {foods.map((food) => (
              <tr key={food.id}>

                <td>
                  <img
                    src={food.image}
                    alt=""
                    style={{ width: "60px", borderRadius: "8px" }}
                  />
                </td>

                <td>{food.name}</td>

                <td>Rs {food.price}</td>

                <td>
                  <button
                    className="cancel-btn"
                    onClick={() => deleteFood(food.id)}
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