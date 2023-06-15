import React from "react";

const BookmarkButton = ({ onClick, isBookmarked }) => {
  return (
    <button
      className={`${
        isBookmarked ? "bg-yellow-400 text-white" : "bg-gray-200 text-gray-800"
      } flex items-center gap-2 font-semibold py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 mr-1 inline-block"
      >
        <path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16l-6-4-6 4V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z" />
      </svg>
      {isBookmarked ? "Bookmarked" : "Bookmark"}
    </button>
  );
};

export default BookmarkButton;
