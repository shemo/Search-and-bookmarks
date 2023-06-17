import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookmarkedRepositories from "../BookmarkedRepositories";

test("renders BookmarkedRepositories component", () => {
  render(<BookmarkedRepositories />);

  const heading = screen.getByRole("heading", {
    level: 2,
    name: /bookmarked repositories/i,
  });
  expect(heading).toBeInTheDocument();
});

test("displays no bookmarked repositories message when there are no bookmarks", () => {
  render(<BookmarkedRepositories />);

  const noBookmarksMessage = screen.getByText(
    /there is no bookmarked repositories yet/i
  );
  expect(noBookmarksMessage).toBeInTheDocument();
});
