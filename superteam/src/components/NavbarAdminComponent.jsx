import { useNavigate } from "react-router-dom";
import React from "react";
import "../App.css";

export default function NavbarAdmin({ children }) {
  const navigate = useNavigate();

  return (
    <>
      <nav className="header__navbar-block">
        <div className="navbar__links">
          <a onClick={() => navigate(`/admin/${children}`)} className="navbar__link">
            {children}
          </a>
          <a onClick={() => navigate("/login")} className="navbar__link">
            Logout
          </a>
        </div>
      </nav>
    </>
  );
}
