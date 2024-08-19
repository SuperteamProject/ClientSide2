import NavbarAdmin from "../components/NavbarAdminComponent";
import AdminCard from "../components/AdminCardComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminPreview() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "serverside2-production.up.railway.app/api/v1/all-product"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmed) {
      try {
        const response = await fetch(
          `serverside2-production.up.railway.app/api/v1/${id}/delete-product`,
          {
            method: "DELETE",
          }
        );

        const result = await response.json();

        if (response.ok) {
          alert("Product deleted successfully!");
        } else {
          alert("Error: " + result.message);
        }
      } catch (error) {
        console.error("Error deleting the product:", error);
        alert("There was an error deleting the product.");
      }
    }
  };

  const handleEditProduct = (id) => {
    navigate(`/admin/edit-product/${id}`);
  };

  return (
    <>
      <NavbarAdmin children={"add-product"} />
      <div className="card__pizza-collection">
        {products.map((product) => (
          <AdminCard
            key={product.id}
            imageUrl={product.image}
            title={product.name}
            price={product.price}
            onDelete={handleDeleteProduct}
            onEdit={handleEditProduct}
          />
        ))}
      </div>
    </>
  );
}
