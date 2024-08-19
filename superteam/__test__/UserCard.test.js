import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "../src/components/UserCardComponent";
import pizza1 from "../src/assets/pizza-1.png";
import "@testing-library/jest-dom/extend-expect";

describe("UserCard", () => {
    test("renders UserCard with title and price", () => {
      render(
        <UserCard
          imageUrl={pizza1}
          title="Pepperoni Pizza"
          price="20000"
        />
      );
  
      expect(screen.getByAltText("Pepperoni Pizza")).toBeInTheDocument();
      expect(screen.getByText("Rp 20000")).toBeInTheDocument();
    });
  });