import React from "react";
import { Link } from "react-router-dom";

export default function FoodOrder() {
  const foods = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: "Rs. 450",
      image:
        "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?w=600",
    },
    {
      id: 2,
      name: "Zinger Burger",
      price: "Rs. 350",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    },
    {
      id: 3,
      name: "Pizza",
      price: "Rs. 1200",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },
    {
      id: 4,
      name: "Pasta",
      price: "Rs. 550",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600",
    },
    {
      id: 5,
      name: "BBQ Platter",
      price: "Rs. 1500",
      image:
        "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600",
    },
    {
      id: 6,
      name: "Ice Cream",
      price: "Rs. 250",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600",
    },
    {
      id: 7,
      name: "Chicken Karahi",
      price: "Rs. 1800",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600",
    },
    {
      id: 8,
      name: "French Fries",
      price: "Rs. 300",
      image:
        "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600",
    },
  ];

  return (
    <div className="food-order-page">
      <div className="food-overlay">
        <h1>Hotel Food Menu</h1>

        <div className="food-grid">
          {foods.map((food) => (
            <div className="food-card" key={food.id}>
              <img src={food.image} alt={food.name} />

              <div className="food-info">
                <h3>{food.name}</h3>
                <p>{food.price}</p>

                <Link to="/order-now">
                  <button className="order-btn">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}