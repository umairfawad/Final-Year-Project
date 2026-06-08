import "./About.css";

export default function About() {
  const team = [
    {
      name: "Umair Fawad",
      role: "Team Leader",
      img: "https://img.freepik.com/premium-photo/passport-photo-man-welldressed-caucasian-businessman-suit-tie-smiling-id-portrait_817921-61256.jpg?w=2000"
    },
    {
      name: "Abbas Khan",
      role: "Team Member",
      img: "https://cdn.pixabay.com/photo/2023/05/05/04/59/ai-generated-7971506_640.jpg"
    },
    {
      name: "M Huzaifa",
      role: "Team Member",
      img: "https://cdn.pixabay.com/photo/2023/04/28/23/32/ai-generated-7957457_1280.png"
    },
    {
      name: "Arif Ullah",
      role: "Team Member",
      img: "https://tse2.mm.bing.net/th/id/OIP.grfxst2__sNCtTETJ2j6nAHaLH?pid=Api&h=220&P=0"
    }
  ];

  return (
    <>
      <section className="about">
        <div className="about-container">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=870&auto=format&fit=crop"
              alt="Hotel"
            />
          </div>

          <div className="about-content">
            <h1>We are Hoteliers</h1>
            <h1>Our Story</h1>

            <p>
              Our Online Hotel Management System helps hotels manage
              bookings, rooms, guests and payments efficiently.
            </p>

            <p>
              We provide a modern solution that improves hotel operations
              and customer satisfaction through automation.
            </p>

            <button>Learn More</button>
          </div>

        </div>
      </section>

      <section className="stats">
        <div className="stat-box">
          <h2>Our Stats</h2>
        </div>

        <div className="stat-box">
          <h1>55 sec</h1>
          <p>Answering time to guest chats</p>
        </div>

        <div className="stat-box">
          <h1>70K</h1>
          <p>Guests per year</p>
        </div>

        <div className="stat-box">
          <h1>500+</h1>
          <p>Units handled by receptionists</p>
        </div>

        <div className="stat-box">
          <h1>12K+</h1>
          <p>Chats answered yearly</p>
        </div>
      </section>

      <section className="row">
        <div className="box">
          <h2>About Us</h2>
          <p>
            Our team is driven by efficiency and innovation to improve
            hotel operations and guest experiences.
          </p>
        </div>

        <div className="box">
          <h2>Our Backgrounds</h2>
          <p>Real Estate</p>
          <p>Software Engineering</p>
          <p>Customer Services</p>
        </div>

        <div className="box">
          <h2>Industries</h2>
          <p>Hospitality Management</p>
          <p>Tour Operations</p>
          <p>Hotel Operations</p>
        </div>
      </section>

      <section className="team">
        <h1>Our Team</h1>

        <div className="team-container">
          {team.map((member, index) => (
            <div className="card" key={index}>
              <img src={member.img} alt={member.name} />
              <h2>{member.name}</h2>
              <h4>{member.role}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="team">
        <h1>Our Supervisor</h1>

        <div className="team-container">
          <div className="team-card">
            <img
              src="https://i.pinimg.com/originals/4d/85/b2/4d85b2ce8145f6f4ed5ad3d2b6c46287.jpg"
              alt="Owais Qurashi"
            />
            <h2>Owais Qurashi</h2>
            <h4>Supervisor</h4>
            <p>
              Supervises the Online Hotel Management System project
              and guides the development team.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}