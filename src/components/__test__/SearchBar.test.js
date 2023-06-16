import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import SearchBar from "../SearchBar";

test("renders the SearchBar component", () => {
  act(() => {
    render(<SearchBar onSearch={() => {}} />);
  });

  act(() => {
    const searchInput = screen.getByPlaceholderText("Search repositories...");
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByRole("button", { name: /search/i });
    expect(searchButton).toBeInTheDocument();
  });
});
