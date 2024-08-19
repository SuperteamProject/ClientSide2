import NavbarUser from "../components/NavbarUserComponent";
import UserCard from "../components/UserCardComponent";
import { useEffect, useState } from "react";

export default function UserMenu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("serverside2-production.up.railway.app/api/v1/all-product");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <NavbarUser />
      <div className="card__pizza-collection">
        {products.map((product) => (
          <UserCard
            key={product.id}
            imageUrl={product.image}
            title={product.name}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}
