import React from "react";
import BookmarkButton from "./BookmarkButton";

const RepositoryItem = ({ repository, onBookmark, isBookmarked }) => {
  const { id, name, owner, description, stargazers_count } = repository;

  const handleBookmark = () => {
    onBookmark(repository);
  };

  return (
    <li className="bg-white rounded p-4 shadow-md">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="flex items-center">
        <p className="text-gray-600 mr-4">
          Owner: <span className="font-semibold">{owner.login}</span>
        </p>
        <p className="text-gray-600 mr-4">
          Stars: <span className="font-semibold">{stargazers_count}</span>
        </p>
        <BookmarkButton onClick={handleBookmark} isBookmarked={isBookmarked} />
      </div>
    </li>
  );
};

export default RepositoryItem;
