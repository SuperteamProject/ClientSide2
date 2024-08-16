import React from "react";
import LoginForm from "../Component/LoginForm";
import SideBar from "../Component/SideBar";

export default function LoginPage() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-75 shadow">
        <SideBar />
        <LoginForm />
      </div>
    </div>
  );
}
