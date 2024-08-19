// src/pages/__tests__/Cart.test.js
import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../Cart';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useLocation: () => ({
    state: {
      image: 'test-image.jpg',
      title: 'Test Pizza',
      price: '10',
      quantity: 1
    }
  })
}));

describe('Cart Page', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('renders correctly with initial state', () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Pizza')).toBeInTheDocument();
    
    const row = screen.getByRole('row', { name: /Test Pizza/i });
    const cells = within(row).getAllByRole('cell');

    expect(cells[0]).toHaveTextContent('Test Pizza');
    expect(cells[2]).toHaveTextContent('1'); // Quantity
    expect(cells[3]).toHaveTextContent('$10.00'); // Price per item
    expect(cells[4]).toHaveTextContent('$10.00'); // Total price
  });

  test('allows quantity adjustments', () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');
    
    fireEvent.click(incrementButton);
    expect(screen.getByText('2')).toBeInTheDocument();

    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton); // Ensure it doesn't go below 1
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('navigates to payment on payment button click', () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    const paymentButton = screen.getByText('Payment');
    fireEvent.click(paymentButton);

    expect(mockNavigate).toHaveBeenCalledWith('/payment', { state: expect.any(Object) });
  });
});