// src/pages/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import background from '../assets/pizzabackground.jpg';

function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div style={{ backgroundImage: `url(${background})`, height: '100vh', backgroundSize: 'cover', color: 'white', textAlign: 'center', padding: '50px' }}>
      <Navbar />
      <h1>Authentic Delicious pizza.</h1>
      <p>with olive oil, oregano, tomato, olives, mozzarella</p>
      <button style={{ margin: '10px', backgroundColor: 'orange', border: 'none', padding: '10px 20px', color: 'white', cursor: 'pointer' }} onClick={() => navigate('/menu')}>Place Order Here</button>
    </div>
  );
}

export default HomePage;
