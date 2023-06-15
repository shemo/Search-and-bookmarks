import React, { useState } from "react";
import { BoxIcon } from "../assets/icons";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = ({
  repositories,
  onBookmark,
  bookmarkedRepositories,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const repositoriesPerPage = 10;

  // Calculate the index of the last repository on the current page
  const indexOfLastRepository = currentPage * repositoriesPerPage;
  // Calculate the index of the first repository on the current page
  const indexOfFirstRepository = indexOfLastRepository - repositoriesPerPage;
  // Get the repositories to be displayed on the current page
  const currentRepositories = repositories.slice(
    indexOfFirstRepository,
    indexOfLastRepository
  );

  // Function to handle page navigation
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const hasResults = repositories.length > 0;
  const searchPerformed = repositories.length > 0 || currentPage !== 1;

  return (
    <div className="container mx-auto py-8">
      {searchPerformed && (
        <>
          {hasResults ? (
            <>
              <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentRepositories.map((repo) => (
                  <RepositoryItem
                    key={repo.id}
                    repository={repo}
                    onBookmark={onBookmark}
                    isBookmarked={bookmarkedRepositories.some(
                      (bookmark) => bookmark.id === repo.id
                    )}
                  />
                ))}
              </ul>
            </>
          ) : (
            <div className="flex items-center justify-center h-40">
              <BoxIcon className="text-6xl text-gray-500" />
            </div>
          )}
        </>
      )}
      {hasResults && (
        <div className="flex justify-center mt-8">
          <ul className="flex items-center">
            {Array.from(
              { length: Math.ceil(repositories.length / repositoriesPerPage) },
              (_, index) => {
                const pageNumber = index + 1;
                return (
                  <li
                    key={pageNumber}
                    className={`${
                      currentPage === pageNumber
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700"
                    } py-2 px-4 border border-gray-300 cursor-pointer`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </li>
                );
              }
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RepositoryList;
