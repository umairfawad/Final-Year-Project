import React from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
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
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Food ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}