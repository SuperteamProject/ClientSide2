// src/pages/Payment.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const styles = {
    formContainer: {
        maxWidth: '400px', 
        margin: 'auto', 
        padding: '20px', 
        backgroundColor: '#f7f7f7', 
        borderRadius: '8px', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
    },
    input: {
        display: 'block',
        width: 'calc(100% - 20px)', 
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#FFF',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box'
    },
    button: {
        width: '100%',
        padding: '10px 0', 
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px' 
    }
};

// Function to format numbers as IDR currency
const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0  // Adjust as needed for no decimal places
    }).format(value);
};

function Payment() {
    const location = useLocation();
    const { items } = location.state || { items: [] };
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [cardNumber, setCardNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Payment processed');
    };

    return (
        <div style={styles.formContainer}>
            <h1>Payment Details</h1>
            {items.map((item, index) => (
                <div key={index}>
                    <p>Product: {item.title}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price per Item: {formatCurrency(item.price)}</p>
                    <p>Total: {formatCurrency(item.totalPrice)}</p>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input style={styles.input} type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
                <input style={styles.input} type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" required />
                <input style={styles.input} type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Contact Number" required />
                <input style={styles.input} type="text" value={cardNumber} onChange={e => setCardNumber(e.target.value)} placeholder="Credit Card Number" required />
                <button style={styles.button} type="submit">Pay Now</button>
            </form>
        </div>
    );
}

export default Payment;
