import { render, screen } from "@testing-library/react";
import React from "react";
import UserMenu from "../src/pages/UserMenuPage";
import { act } from "react";

describe("User Menu", () => {
  test("renders User Menu with cards", () => {
    render(<UserMenu />);

    expect(screen.getByText("Home")).toBeInTheDocument();

    expect(screen.getByText("Menu")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Cart")).toBeInTheDocument();
  });
});
