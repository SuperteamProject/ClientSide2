import { render, screen } from "@testing-library/react";
import React from "react";
import { act } from 'react';
import AdminPreview from "../src/pages/AdminPreviewPage";

describe("AdminPreview", () => {
  test("renders Admin Preview with cards", () => {
    render(<AdminPreview />);

    expect(screen.getByText("add-product")).toBeInTheDocument();

    expect(screen.getByText("logout")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("pepperoni pizza")).toBeInTheDocument();
  });
});
