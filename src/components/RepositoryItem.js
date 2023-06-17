import React from "react";
import { StarIcon, ForkIcon } from "../assets/icons";
import BookmarkButton from "./BookmarkButton";
import styles from "../assets/styles/RepositoryItem.module.css";

const RepositoryItem = ({ repository, onBookmark, isBookmarked }) => {
  const { name, owner, description, stargazers_count, forks_count } =
    repository;

  const handleBookmark = () => {
    onBookmark(repository);
  };

  return (
    <li className={styles.container}>
      <BookmarkButton onClick={handleBookmark} isBookmarked={isBookmarked} />

      <h3 className={styles.title}>
        {name?.substring(0, 30)} {name?.length > 30 && ".."}
      </h3>

      <p className={styles.description}>
        {description?.substring(0, 40)} {description?.length > 40 && ".."}
      </p>

      <div className={styles.ownerContainer}>
        <div className={styles.ownerInfo}>
          <a href={owner.html_url} target="_blank" rel="noreferrer">
            <img
              className={styles.ownerImage}
              src={owner.avatar_url}
              alt={owner.login}
            />
          </a>
          <div className={styles.ownerName}>
            <a href={owner.html_url} target="_blank" rel="noreferrer">
              {owner.login?.substring(0, 15)} {owner.login?.length > 15 && ".."}
            </a>
          </div>
        </div>
        <div className={styles.statsContainer}>
          <p className={styles.stat}>
            <StarIcon size={20} />{" "}
            <span className={styles.statIcon}>
              {stargazers_count} {stargazers_count === 1 ? "start" : "stars"}
            </span>
          </p>
          <p className={styles.stat}>
            <ForkIcon size={20} />{" "}
            <span className={styles.statIcon}>
              {forks_count} {forks_count === 1 ? "fork" : "forks"}
            </span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default RepositoryItem;
