import { useNavigate } from "react-router-dom";

export default function NavbarUser() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="header__navbar-block">
        <div className="navbar__links">
          <a onClick={() => navigate("/home")} className="navbar__link">
            Home
          </a>
          <a onClick={() => navigate("/menu")} className="navbar__link">
            Menu
          </a>
          <a onClick={() => navigate("/cart")} className="navbar__link">
            Cart
          </a>
        </div>
      </nav>
    </>
  );
}
