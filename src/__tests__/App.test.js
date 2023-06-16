import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import axios from "axios";
import App from "../App";

jest.mock("axios");

describe("App", () => {
  test("renders the App component", () => {
    render(<App />);
    // Add your assertions here to test the rendered output or behavior
  });

  test("performs search and updates searchResults state", async () => {
    const mockResponse = {
      data: {
        items: [
          {
            id: 1,
            name: "Repository 1",
            owner: { login: "owner1" },
            description: "Description 1",
            stargazers_count: 10,
          },
          {
            id: 2,
            name: "Repository 2",
            owner: { login: "owner2" },
            description: "Description 2",
            stargazers_count: 5,
          },
        ],
      },
    };

    axios.get.mockResolvedValue(mockResponse);

    render(<App />);

    const searchInput = screen.getByPlaceholderText("Search repositories...");
    const searchButton = screen.getByRole("button", { name: /search/i });

    act(() => {
      fireEvent.change(searchInput, { target: { value: "react" } });
    });

    act(() => {
      fireEvent.click(searchButton);
    });

    await screen.findByText("Repository 1");
    await screen.findByText("Repository 2");

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/search/repositories?q=react"
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
