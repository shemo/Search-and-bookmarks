import React from "react";
import styles from "../assets/styles/Skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={`largeBar ${styles.largeBar}`}></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div role="status" className={`skeletonItem ${styles.skeletonItem}`}>
          <div className={`largeBar ${styles.largeBar}`}></div>
          <div className={`bar ${styles.bar}`}></div>
          <div className={`bar ${styles.bar}`}></div>
          <div className={`bar ${styles.bar}`}></div>
          <div className={`textContainer ${styles.textContainer}`}>
            <svg
              className={`icon ${styles.icon}`}
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <div className={`textBar ${styles.textBar}`}></div>
              <div className={`text ${styles.text}`}></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div role="status" className={`skeletonItem ${styles.skeletonItem}`}>
          <div className={`largeBar ${styles.largeBar}`}></div>
          <div className={`bar ${styles.bar}`}></div>
          <div className={`bar ${styles.bar}`}></div>
          <div className={`bar ${styles.bar}`}></div>
          <div className={`textContainer ${styles.textContainer}`}>
            <svg
              className={`icon ${styles.icon}`}
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <div className={`textBar ${styles.textBar}`}></div>
              <div className={`text ${styles.text}`}></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
