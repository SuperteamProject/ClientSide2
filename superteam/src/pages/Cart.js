// src/pages/Cart.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, title, price = 0, quantity: initialQuantity = 1 } = location.state || {};
  const [quantity, setQuantity] = useState(initialQuantity);
  const normalizedPrice = Number(price);  // Ensure price is a number
  const totalPrice = normalizedPrice * quantity;

  // Function to format numbers as IDR currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0, // You can specify the number of decimal places
    }).format(value);
  };

  const increaseQuantity = () => {
    setQuantity(qty => qty + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(qty => qty - 1);
    }
  };

  const handleConfirm = () => {
    navigate('/payment', {
      state: {
        items: [{
          title,
          quantity,
          price: normalizedPrice,
          totalPrice
        }]
      }
    });
  };

  return (
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price per Item</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title}</td>
            <td><img src={image} alt={title} style={{ width: '100px' }} /></td>
            <td>
              <button onClick={decreaseQuantity}>-</button>
              {quantity}
              <button onClick={increaseQuantity}>+</button>
            </td>
            <td>{formatCurrency(normalizedPrice)}</td>
            <td>{formatCurrency(totalPrice)}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleConfirm} style={{ margin: '20px', padding: '10px 20px', backgroundColor: 'green', color: 'white', cursor: 'pointer' }}>Payment</button>
    </div>
  );
}

export default Cart;
