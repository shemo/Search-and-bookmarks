import React, { useState } from "react";
import RepositoryItem from "./RepositoryItem";
import { BoxIcon } from "../assets/icons";
import styles from "../assets/styles/BookmarkedRepositories.module.css";
const BookmarkedRepositories = () => {
  const [bookmarkedRepositories, setBookmarkedRepositories] = useState(() => {
    const savedBookmarks = localStorage.getItem("bookmarkedRepositories");
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  const toggleBookmark = (repository) => {
    const updatedBookmarks = bookmarkedRepositories.filter(
      (bookmark) => bookmark.id !== repository.id
    );

    setBookmarkedRepositories(updatedBookmarks);
    localStorage.setItem(
      "bookmarkedRepositories",
      JSON.stringify(updatedBookmarks)
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bookmarked Repositories</h2>
      {bookmarkedRepositories.length > 0 ? (
        <ul className={styles.repoList}>
          {bookmarkedRepositories.map((repo) => (
            <RepositoryItem
              key={repo.id}
              repository={repo}
              onBookmark={toggleBookmark}
              isBookmarked={true}
            />
          ))}
        </ul>
      ) : (
        <div className={styles.emptyStateContainer}>
          <BoxIcon size={120} className={styles.emptyStateIcon} />
          <h4 className={styles.emptyStateText}>
            There is no bookmarked repositories yet.
          </h4>
        </div>
      )}
    </div>
  );
};

export default BookmarkedRepositories;
