import React, { useState } from "react";
import { BoxIcon } from "../assets/icons";
import RepositoryItem from "./RepositoryItem";
import styles from "../assets/styles/RepositoryList.module.css";
const RepositoryList = ({
  searchTerm,
  searchPerformed,
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
  // const searchPerformed = repositories.length > 0 || currentPage !== 1;

  return (
    <div className={styles.container}>
      {searchPerformed && (
        <>
          {hasResults ? (
            <>
              <h2 className={styles.searchResults}>
                Search Results for: "{searchTerm}"
              </h2>
              <ul className={styles.repositoryList}>
                {currentRepositories.map((repo) => (
                  <RepositoryItem
                    key={repo.id}
                    repository={repo}
                    onBookmark={onBookmark}
                    isBookmarked={bookmarkedRepositories.some(
                      (bookmark) => bookmark.id === repo.id
                    )}
                    data-testid={`repository-item-${repo.id}`}
                  />
                ))}
              </ul>
            </>
          ) : (
            <div className={styles.noResultsContainer}>
              <BoxIcon size={120} className={styles.noResultsIcon} />
              <h4 className={styles.noResultsText}>
                There are no repositories matching the entered name.
              </h4>
            </div>
          )}
        </>
      )}
      {hasResults && repositories.length > repositoriesPerPage && (
        <div className={styles.paginationContainer}>
          <ul className="flex items-center">
            {Array.from(
              { length: Math.ceil(repositories.length / repositoriesPerPage) },
              (_, index) => {
                const pageNumber = index + 1;
                return (
                  <li
                    key={pageNumber}
                    className={`${styles.pageNumber} ${
                      currentPage === pageNumber
                        ? styles.activePage
                        : styles.inactivePage
                    }`}
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
