import React from "react";

const BookmarkButton = ({ onClick, isBookmarked }) => {
  return (
    <button
      className={`${
        isBookmarked ? "bg-yellow-400 text-white" : "bg-gray-200 text-gray-800"
      } flex items-center gap-2 font-semibold p-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
      onClick={onClick}
    >
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 inline-block"
      >
        <path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16l-6-4-6 4V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z" />
      </svg>
      {/* {isBookmarked ? "Bookmarked" : "Bookmark"} */}
    </button>
  );
};

export default BookmarkButton;
