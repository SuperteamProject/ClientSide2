// src/pages/Menu.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from '../Menu';

test('renders the menu with pizzas', () => {
  render(<Menu />, { wrapper: Router });

  expect(screen.getByText('Pizza Pepperoni')).toBeInTheDocument();
  expect(screen.getByText('Pinneaple Pizza')).toBeInTheDocument();
});
