import  "./About.css"


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
    <div>
          <section className="about">
      <div className="about-container">
        
        <div className="about-image">
          <img
 HEAD
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"

            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

      <div className="stats">
   

      <div className="row">
        <div className="">
          <h2>Our Story</h2>
         
        </div>
        <div className="box">
          <h1>55 sec</h1  >
          <p>Answering time to guest chats</p>
        </div>

        <div className="box">
          <h1>70k</h1>
          <p>Guests per year</p>
        </div>

        <div className="box">
          <h1>500+</h1>
          <p>Units handled by 7 Cloud receptionists</p>
        </div>

        <div className="box">
          <h1>12k+</h1>
          <p>Number of chats answered in one year</p>
        </div>
      </div>
    </div>
     <div className="row">

      <div className="box">
        <h2>About Us</h2>
        <p>
          Our team is driven by efficiency and innovation.
          We provide solutions that improve hotel operations
          and guest experiences.
        </p>
      </div>

      <div className="box">
        <h2>Our Backgrounds</h2>
        <p>Real Estate</p>
        <p>Software Engineering</p>
        <p>Customer Services</p>
      </div>

      <div className="box">
        <h2>&nbsp;</h2>
        <p>Hospitality Management</p>
        <p>Tour Operations</p>
        <p>Hotel Operations</p>
      </div>

    </div>
            <div className="team">
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
    </div>
      <section className="team">
      <h1>Our Supervisor </h1>

      <div className="team-container">

        <div className="team-card">
          <img
            src="https://i.pinimg.com/originals/4d/85/b2/4d85b2ce8145f6f4ed5ad3d2b6c46287.jpg"
            alt="Owais Qurashi"
          />
          <h2>Owais Qurashi</h2>
          <h4>Supervisor</h4>
          <p>
            Supervises the Online Hotel Management System project and guides
            the team in development and project management.
          </p>
        </div>

   



     

      </div>
    </section>

    </div>
  )
}
