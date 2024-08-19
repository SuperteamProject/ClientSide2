import NavbarAdmin from "../components/NavbarAdminComponent";
import Input from "../components/InputComponent";
import RoundButton from "../components/RoundButtonComponent";
import { useState } from "react";
import React from "react";
import "../App.css";

export default function AdminDashboard() {
  const [imageFile, setImageFile] = useState(null);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("name", productName);
    formData.append("price", productPrice);

    try {
      const response = await fetch("URL_BACKEND_KAMU/postProduct", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Product added successfully!");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error uploading the product.");
    }
  };

  return (
    <>
      <div>
        <NavbarAdmin children={"preview"} />
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: "80vh", gap: "40px" }}
        >
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleImageChange}
            id="imageUpload"
          />
          <RoundButton>
            <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
              Select Image
            </label>
          </RoundButton>
          <Input
            children={"Name"}
            value={productName}
            onChange={handleNameChange}
          />
          <Input
            children={"Price"}
            type="number"
            value={productPrice}
            onChange={handlePriceChange}
          />
          <RoundButton onClick={handleFormSubmit}>Add Product</RoundButton>
        </div>
      </div>
    </>
  );
}
