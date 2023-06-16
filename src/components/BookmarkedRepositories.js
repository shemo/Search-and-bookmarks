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
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-semibold mb-4">Bookmarked Repositories</h2>
      {bookmarkedRepositories.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
        <div className="flex flex-col items-center justify-center h-40">
          <BoxIcon size={120} className="text-gray-500" />
          <h4 className="text-sky-800">
            There is no bookmarked repositories yet.
          </h4>
        </div>
      )}
    </div>
  );
};

export default BookmarkedRepositories;
