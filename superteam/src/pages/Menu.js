import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

function Menu() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/all-product');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = productId => {
    console.log('Editing product', productId);
  };

  const handleDelete = productId => {
    console.log('Deleting product', productId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Menu</h1>
      {products.length > 0 ? products.map(product => (
        <Card
          key={product.id}
          imageUrl={product.image}
          title={product.name}
          price={product.price.toString()}
          onEdit={() => handleEdit(product.id)}
          onDelete={() => handleDelete(product.id)}
        />
      )) : <p>No products available.</p>}
    </div>
  );
}

export default Menu;
