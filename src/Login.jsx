import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">
          Login to your Hotel Management Account
        </p>

        <form className="login-form">

          <label style={{justifyContent: "start", display:"flex"}}>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
          />

          <label style={{justifyContent: "start", display:"flex"}}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          <button className="login-btn">
            Login
          </button>

          <p className="signup-text">
            Don't have an account?
            <Link to="/register"> Sign Up Now</Link>
          </p>

          <p className="forget-text">
            <Link to="/forget">
              Forgot Password?
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
}