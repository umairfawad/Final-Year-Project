import "./forget.css";
import { Link } from "react-router-dom";

export default function Forget() {
  return (
    <div className="forget-page">
      <div className="forget-card">

        <h1 className="forget-title">
          Forgot Password
        </h1>

        <p className="forget-subtitle">
          Enter your mobile number to receive OTP
        </p>

        <div className="forget-form">

          <label>Mobile Number</label>

          <input
            type="text"
            placeholder="Enter your mobile number"
          />

          <Link to="/otp">
            <button className="verify-btn">
              Verify
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}