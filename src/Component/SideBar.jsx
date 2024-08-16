import React from "react";
// import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="col-md-6 d-none d-md-block p-0">
      <img
        src="https://fibercreme.com/wp-content/uploads/2021/03/masakan-nusantara.jpg"
        className="img-fluid h-100 w-100"
        alt="Fresh flowers"
      />
      <div className="position-absolute bottom-0 p-3 text-white">
        <h4>Fresh flowers for any special occasion</h4>
      </div>
    </div>
  );
}

export default NavBar;
