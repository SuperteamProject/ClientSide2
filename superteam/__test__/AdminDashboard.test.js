import { render, screen } from "@testing-library/react";
import React from "react";
import AdminDashboard from "../src/pages/AdminDashboardPage";
import { act } from 'react';

describe("AdminDashboard", () => {
  test("renders AdminDashboard with form elements", () => {
    render(<AdminDashboard />);

    expect(screen.getByText("preview")).toBeInTheDocument();

    expect(screen.getByText("Select Image")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Price")).toBeInTheDocument();

    expect(screen.getByText("Add Product")).toBeInTheDocument();
  });
});
