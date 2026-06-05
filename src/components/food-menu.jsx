import React from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const foods = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: "Rs. 450",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500",
    },
    {
      id: 2,
      name: "Zinger Burger",
      price: "Rs. 350",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
    },
    {
      id: 3,
      name: "Pizza",
      price: "Rs. 1200",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500",
    },
    {
      id: 4,
      name: "Pasta",
      price: "Rs. 550",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    },
  ];

  return (
    <div className="gallery-container">

      <div className="gallery-header">
        <h3>Popular Foods</h3>

        <Link to="/food-order" className="see-more">
          See More →
        </Link>
      </div>

      <div className="gallery-row">
        {foods.map((food) => (
          <div className="gallery-item" key={food.id}>
            <img src={food.image} alt={food.name} />

            <div className="gallery-info">
              <h4>{food.name}</h4>
              <p>{food.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}