import React from "react";
import { render, screen } from "@testing-library/react";
import RepositoryList from "../RepositoryList";

it("displays a message when there are no matching repositories", () => {
  const repositories = [];
  render(
    <RepositoryList
      searchTerm="example"
      searchPerformed={true}
      repositories={repositories}
      onBookmark={jest.fn()}
      bookmarkedRepositories={[]}
    />
  );

  expect(
    screen.getByText((content, element) => {
      const text = content.trim();
      return (
        text.startsWith("There") && text.endsWith("matching the entered name.")
      );
    })
  ).toBeInTheDocument();
});
