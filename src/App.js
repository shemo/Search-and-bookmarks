import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import RepositoryList from "./components/RepositoryList";
import BookmarkedRepositories from "./components/BookmarkedRepositories";
import axios from "axios";
import Skeleton from "./components/Skeleton";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [bookmarkedRepositories, setBookmarkedRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setLoading(true);

    axios
      .get(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(
          searchTerm
        )}+in:name`
      )
      .then((response) => {
        setSearchResults(response.data.items || []);
      })
      .catch((error) => {
        console.error("Error searching repositories:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleBookmark = (repository) => {
    // Check if the repository is already bookmarked
    const isBookmarked = bookmarkedRepositories.some(
      (bookmark) => bookmark.id === repository.id
    );

    // Create a new array of bookmarked repositories based on the current state
    let updatedBookmarks = [...bookmarkedRepositories];

    if (isBookmarked) {
      // If the repository is already bookmarked, remove it from the array
      updatedBookmarks = updatedBookmarks.filter(
        (bookmark) => bookmark.id !== repository.id
      );
    } else {
      // If the repository is not bookmarked, add it to the array
      updatedBookmarks.push(repository);
    }

    // Update the bookmarked repositories state
    setBookmarkedRepositories(updatedBookmarks);

    // Persist the updated bookmarks in local storage
    localStorage.setItem(
      "bookmarkedRepositories",
      JSON.stringify(updatedBookmarks)
    );
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto py-8">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={handleSearch} />
                {loading ? (
                  <div className="w-full flex items-center justify-center">
                    <Skeleton />
                  </div>
                ) : (
                  <RepositoryList
                    repositories={searchResults}
                    onBookmark={handleBookmark}
                    bookmarkedRepositories={bookmarkedRepositories}
                    searchTerm={searchTerm}
                  />
                )}
              </>
            }
          />
          <Route
            path="/bookmarked"
            element={
              <BookmarkedRepositories
                bookmarkedRepositories={bookmarkedRepositories}
                onBookmark={handleBookmark}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
