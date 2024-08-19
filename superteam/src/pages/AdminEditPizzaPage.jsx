import NavbarAdmin from "../components/NavbarAdminComponent";
import RoundButton from "../components/RoundButtonComponent";
import Input from "../components/InputComponent";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function AdminEditPizza() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `serverside2-production.up.railway.app/api/v1/all-product`
        );
        const product = await response.json();
        setName(product.name);
        setPrice(product.price);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleEditProduct = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(
        `serverside2-production.up.railway.app/api/v1/${id}/update-product`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Product updated successfully!");
        navigate("/admin/preview");
      } else {
        const result = await response.json();
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Failed to update product:", error);
      alert("There was an error updating the product.");
    }
  };

  return (
    <div>
      <NavbarAdmin children={"preview"} />
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "80vh", gap: "40px" }}
      >
        <input type="file" onChange={handleImageChange} />
        <Input
          children={"Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          children={"Price"}
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <RoundButton onClick={handleEditProduct}>Edit Product</RoundButton>
      </div>
    </div>
  );
}
