import "./Register.css";

export default function Register() {
  return (
    <div className="register-page">
      <div className="register-card">

        <h1 className="register-title">Create Account</h1>
        <p className="register-subtitle">
          Register to access hotel services
        </p>

        <form className="register-form">

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
          />

          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
          />

          <button className="register-btn">
            Register
          </button>

        </form>

      </div>
    </div>
  );
}