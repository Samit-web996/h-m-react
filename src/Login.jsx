import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    setOtpSent(true);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Sign In</h1>
        <p className="subtitle">
          Enter your mobile number to continue
        </p>

        <form onSubmit={handleSendOtp}>
          <div className="input-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              placeholder="+91 9876543210"
            />
          </div>

          {otpSent && (
            <div className="input-group">
              <label>OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
              />
            </div>
          )}

          {!otpSent ? (
            <button className="primary-btn">
              Send OTP
            </button>
          ) : (
            <Link to={'/home'}>
            <button className="primary-btn">
              Verify OTP
            </button>
            </Link>
          )}
        </form>

        <p className="terms">
          By continuing, you agree to our Terms &
          Conditions and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default Login;