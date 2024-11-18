import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function RegisterForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    // Tambahkan logika pendaftaran di sini
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="col-md-6 p-5">
      <h2 className="mb-5">Create an account</h2>
      <form id="registerForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
        <div className="mt-3 text-center">
          <span>Already have an account?</span>{" "}
          <Link to="/" className="text-decoration-none">
            login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
