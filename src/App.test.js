import React from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import App from "./App";

jest.mock("axios");

test("renders the App component", () => {
  render(<App />);
  // Add your assertions here to test the rendered output or behavior
});
