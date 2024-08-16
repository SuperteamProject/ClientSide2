import React from "react";
import RegisterForm from "../Component/RegisterForm";
import SideBar from "../Component/SideBar";

export default function RegisterPage() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-75 shadow">
        <SideBar />
        <RegisterForm />
      </div>
    </div>
  );
}
