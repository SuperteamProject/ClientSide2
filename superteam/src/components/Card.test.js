// src/components/Card.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './Card';

test('Card component should display title and price', () => {
  const title = "Pizza Pepperoni";
  const price = "20";
  render(
    <Router>
      <Card image="pepperoni.jpg" title={title} price={price} />
    </Router>
  );

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(`$${price}`)).toBeInTheDocument();
});
