import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    // Tambahkan logika autentikasi di sini
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="col-md-6 p-5">
      <h2 className="mb-5">Welcome back!</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
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
        {/* <div className="mb-3">
          <a href="#" className="text-decoration-none">
            Forgot your password?
          </a>
        </div> */}
        <button type="submit" className="btn btn-dark w-100">
          Login
        </button>
        {/* <div className="mt-3 d-flex justify-content-between">
          <button type="button" className="btn btn-outline-dark w-100 me-2">
            Facebook
          </button>
          <button type="button" className="btn btn-outline-dark w-100">
            Google
          </button>
        </div> */}
        <div className="mt-3 text-center">
          <span>Don't have an account?</span>{" "}
          <Link to="/register" className="text-decoration-none">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}
