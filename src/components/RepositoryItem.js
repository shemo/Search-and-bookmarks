import React from "react";
import { StarIcon } from "../assets/icons";
import BookmarkButton from "./BookmarkButton";

const RepositoryItem = ({ repository, onBookmark, isBookmarked }) => {
  const { id, name, owner, description, stargazers_count } = repository;

  const handleBookmark = () => {
    onBookmark(repository);
  };

  return (
    <li className="flex flex-col gap-3 bg-white rounded p-4 shadow-md relative">
      <BookmarkButton onClick={handleBookmark} isBookmarked={isBookmarked} />

      <h3 className="text-xl font-semibold capitalize break-words pe-8">
        {" "}
        {name?.substring(0, 30)} {name?.length > 30 && ".."}
      </h3>

      <p className="text-gray-700 capitalize break-words">
        {" "}
        {description?.substring(0, 50)} {description?.length > 50 && ".."}
      </p>

      <div className="flex flex-col lg:flex-row  gap-2 items-center justify-between">
        <div className="flex items-center gap-4">
          <a href={owner.html_url} target="_blank" noreferer="true">
            {" "}
            <img
              className="w-10 h-10 rounded-full shrink-0"
              src={owner.avatar_url}
              alt={owner.login}
            />
          </a>
          <div className="font-medium dark:text-white">
            <a href={owner.html_url} target="_blank" noreferer="true">
              {owner.login?.substring(0, 15)} {owner.login?.length > 15 && ".."}
            </a>
          </div>
        </div>
        <p className="flex items-center gap-2 text-gray-600">
          <StarIcon size={20} />{" "}
          <span className="font-semibold">{stargazers_count}</span>
        </p>
      </div>
    </li>
  );
};

export default RepositoryItem;
