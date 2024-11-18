// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

test('full app rendering/navigating', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App includeRouter={false} />  
    </MemoryRouter>
  );

  // Expect the HomePage to be rendered initially
  expect(screen.getByText(/Authentic Delicious pizza/i)).toBeInTheDocument();

  // Since navigation relies on actual links and routing in your app, simulate user interaction:
  // Click the 'Place Order Here' button to navigate to the Menu
  const orderButton = screen.getByText(/Place Order Here/i);
  userEvent.click(orderButton);
  
  
});
