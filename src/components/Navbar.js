import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/bloowatch-logo.png";
import styles from "../assets/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logoLink}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
          Search & Bookmark
        </NavLink>
        <NavLink to="/bookmarked" className={styles.navLink}>
          Bookmarked Repositories
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
