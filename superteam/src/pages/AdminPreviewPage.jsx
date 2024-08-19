import NavbarAdmin from "../components/NavbarAdminComponent";
import AdminCard from "../components/AdminCardComponent";
import pizza1 from "../assets/pizza-1.png";
import pizza2 from "../assets/pizza-2.png";
import pizza3 from "../assets/pizza-3.png";
import pizza4 from "../assets/pizza-4.jpg";
import { useNavigate } from "react-router-dom";

export default function AdminPreview() {
  const navigate = useNavigate();

  const handleDeleteProduct = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmed) {
      try {
        // TODO:
        const response = await fetch(`URL_BACKEND_KAMU/product/${id}`, {
          method: "DELETE",
        });

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

  // TODO: TODO: TODO:
  return (
    <>
      <NavbarAdmin children={"add-product"} />
      <div className="card__pizza-collection">
        <AdminCard
          imageUrl={pizza1}
          title="Pepperoni Pizza"
          price="20.000"
          onDelete={handleDeleteProduct}
          onEdit={handleEditProduct}
        />
        <AdminCard
          imageUrl={pizza2}
          title="Pistachio Pizza"
          price="40.000"
          onDelete={handleDeleteProduct}
          onEdit={handleEditProduct}
        />
        <AdminCard
          imageUrl={pizza3}
          title="Krusty Pizza"
          price="50.000"
          onDelete={handleDeleteProduct}
          onEdit={handleEditProduct}
        />
        <AdminCard
          imageUrl={pizza4}
          title="Krab Pizza"
          price="60.000"
          onDelete={handleDeleteProduct}
          onEdit={handleEditProduct}
        />
        <AdminCard
          imageUrl={pizza1}
          title="Pepperoni Pizza"
          price="20.000"
          onDelete={handleDeleteProduct}
          onEdit={handleEditProduct}
        />
        <AdminCard
          imageUrl={pizza1}
          title="Pepperoni Pizza"
          price="20.000"
          onDelete={handleDeleteProduct}
          onEdit={handleEditProduct}
        />
      </div>
    </>
  );
}
