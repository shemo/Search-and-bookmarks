import React from "react";
import { render, screen } from "@testing-library/react";
import RepositoryList from "../RepositoryList";

test("displays a message when there are no matching repositories", () => {
  const mockRepositories = [];
  const mockSearchTerm = "test";
  const mockSearchPerformed = true;
  const mockBookmarkedRepositories = [];
  const mockOnBookmark = jest.fn();

  render(
    <RepositoryList
      searchTerm={mockSearchTerm}
      searchPerformed={mockSearchPerformed}
      repositories={mockRepositories}
      onBookmark={mockOnBookmark}
      bookmarkedRepositories={mockBookmarkedRepositories}
    />
  );

  const noRepositoriesMessage = screen.getByText(
    "There is no repositories matching the entered name."
  );
  expect(noRepositoriesMessage).toBeInTheDocument();
});
