import React from "react";
import { BookmarkIcon } from "../assets/icons";

const BookmarkButton = ({ onClick, isBookmarked }) => {
  return (
    <button
      className={`${
        isBookmarked ? "bg-yellow-400 text-white" : "bg-gray-200 text-gray-800"
      } absolute top-1 end-1 font-semibold p-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-gray-500`}
      onClick={onClick}
    >
      <BookmarkIcon className="h-5 w-5 inline-block" />
    </button>
  );
};

export default BookmarkButton;
