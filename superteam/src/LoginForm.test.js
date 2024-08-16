import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "./Component/LoginForm"; // Sesuaikan dengan path file Anda

describe("LoginForm", () => {
  test("renders form elements correctly", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const linkElement = screen.getByText("Create account");

    expect(linkElement).toBeInTheDocument();
  });
});

test("email input value", () => {
  render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
  );
  const emailInput = screen.getByLabelText(/email/i);

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });

  expect(emailInput.value).toBe("test@example.com");
});

test("Password input value", () => {
  render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
  );
  const passwordInput = screen.getByLabelText(/password/i);

  fireEvent.change(passwordInput, { target: { value: "123456" } });

  expect(passwordInput.value).toBe("123456");
});
