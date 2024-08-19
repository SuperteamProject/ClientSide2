import NavbarUser from "../components/NavbarUserComponent";
import pizza1 from "../assets/pizza-1.png";
import pizza2 from "../assets/pizza-2.png";
import pizza3 from "../assets/pizza-3.png";
import pizza4 from "../assets/pizza-4.jpg";
import UserCard from "../components/UserCardComponent";
// import { useEffect, useState } from "react";

export default function UserMenu() {
  // const [products, setProducts] = useState([]);

  const editPizza = () => {};

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("URL_BACKEND_KAMU/product");
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Failed to fetch products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <>
      <NavbarUser />
      <div className="card__pizza-collection">
        {/* {products.map((product) => (
          <UserCard
            key={product.id}
            imageUrl={product.image} // Asumsikan URL gambar disimpan dalam field "image"
            title={product.name}
            price={product.price}
            onEdit={() => {}}
          />
        ))} */}
        <UserCard imageUrl={pizza1} title="Pepperoni Pizza" price="20.000" />
        <UserCard imageUrl={pizza2} title="Pepperoni Pizza" price="20.000" />
        <UserCard imageUrl={pizza3} title="Pepperoni Pizza" price="20.000" />
        <UserCard imageUrl={pizza4} title="Pepperoni Pizza" price="20.000" />
      </div>
    </>
  );
}
