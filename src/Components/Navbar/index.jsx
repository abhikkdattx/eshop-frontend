import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [isLoggedIn]);

  const onLogoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link className={styles.brand} to="/">
          E-Shop
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link className={styles.navItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to="/contacts">
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.authButtons}>
          {!isLoggedIn ? (
            <Link className={styles.loginButton} to="/login">
              Login
            </Link>
          ) : (
            <button className={styles.logoutButton} onClick={onLogoutHandler}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
