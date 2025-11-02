import React, { useState } from "react";
import "./Register.css";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Registration successful!");
      console.log(formData);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>🌸 Create Your Account</h2>
        <p className="subtitle">Join our community and start your journey!</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default Registration;

