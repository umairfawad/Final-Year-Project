import  "./About.css"


export default function About() {
  return (
    <div>
          <section className="about">
      <div className="about-container">
        
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Hotel"
          />
        </div>

        <div className="about-content">
          <h1>
            We are Hoteliers - <br /> 
          </h1>
          <h1>Our Story</h1>

          <p>
            Our Online Hotel Management System was created to help hotels
            manage bookings, guests, rooms, and payments efficiently through
            one digital platform.
          </p>

          <p>
            We focus on providing a modern and secure solution that simplifies
            hotel operations, improves customer satisfaction, and helps hotel
            staff save time through automation.
          </p>

          <button>Learn More</button>
        </div>

      </div>
    </section>
    </div>
  )
}
