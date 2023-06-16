import React, { useState } from "react";
import RepositoryItem from "./RepositoryItem";
import { BoxIcon } from "../assets/icons";

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
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Bookmarked Repositories</h2>
      {bookmarkedRepositories.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <div className="flex items-center justify-center h-40">
          <BoxIcon className="text-6xl text-gray-500" />
        </div>
      )}
    </div>
  );
};

export default BookmarkedRepositories;
