import React from "react";
import { render, screen } from "@testing-library/react";
import AdminCard from "../src/components/AdminCardComponent";
import pizza1 from "../src/assets/pizza-1.png";
import "@testing-library/jest-dom/extend-expect";

describe("AdminCard", () => {
  test("renders AdminCard with title and price", () => {
    render(
      <AdminCard
        imageUrl={pizza1}
        title="Pepperoni Pizza"
        price="20000"
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    expect(screen.getByAltText("Pepperoni Pizza")).toBeInTheDocument();
    expect(screen.getByText("Rp 20000")).toBeInTheDocument();
  });
});
