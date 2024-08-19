import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RegisterForm from "./Component/RegisterForm"; // Sesuaikan dengan path file Anda

describe("RegisterForm", () => {
  test("renders form elements correctly", () => {
    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    );

    const linkElement = screen.getByText("Create an account");

    expect(linkElement).toBeInTheDocument();
  });
});

test("email input value", () => {
  render(
    <MemoryRouter>
      <RegisterForm />
    </MemoryRouter>
  );
  const emailInput = screen.getByLabelText(/email/i);

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });

  expect(emailInput.value).toBe("test@example.com");
});

test("Password input value", () => {
  render(
    <MemoryRouter>
      <RegisterForm />
    </MemoryRouter>
  );
  const passwordInput = screen.getByLabelText(/password/i);

  fireEvent.change(passwordInput, { target: { value: "123456" } });

  expect(passwordInput.value).toBe("123456");
});
