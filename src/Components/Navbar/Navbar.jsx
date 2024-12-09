import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isThemeActive, setIsThemeActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const toggleTheme = () => {
    setIsThemeActive(!isThemeActive);

    if (!isThemeActive) {
      document.body.classList.remove(styles.dark_theme);
      document.body.classList.add(styles.light_theme);
    } else {

      document.body.classList.remove(styles.light_theme);
      document.body.classList.add(styles.dark_theme);
     
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isNavbarActive ? styles.active : ""
      } ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <a href="#">
            Swapnil<span>.</span>
          </a>
        </h1>

        <div className={styles.navbarVisible}>
          <ul>
            <li>
              <Link to={"/"} className={styles.navbarLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className={styles.navbarLink}>
                About
              </Link>
            </li>
            <li>
              <Link to={"/skills"} className={styles.navbarLink}>
                Skills
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"} className={styles.navbarLink}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className={styles.navbarLink}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.navbarActions}>
          <select name="language" id="lang" className={styles.languageSelect}>
            <option value="en">En</option>
            <option value="ar">Ar</option>
          </select>

          <button
            className={`${styles.themeBtn} ${
              isThemeActive ? styles.active : ""
            }`}
            aria-label="Change Theme"
            title="Change Theme"
            onClick={toggleTheme}
          >
            <span className={styles.icon}></span>
          </button>
        </div>

        <button
          className={`${styles.navToggleBtn} ${
            isNavbarActive ? styles.active : ""
          }`}
          aria-expanded={isNavbarActive}
          aria-label="Toggle Menu"
          title="Toggle Menu"
          onClick={toggleNavbar}
        >
          <span className={styles.one}></span>
          <span className={styles.two}></span>
          <span className={styles.three}></span>
        </button>

        <nav
          className={`${styles.navbar} ${
            isNavbarActive ? styles.active : ""
          }`}
        >
          <ul className={styles.navbarList}>
            <li>
              <a href="/" className={styles.navbarLink}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className={styles.navbarLink}>
                About
              </a>
            </li>
            <li>
              <a href="/skills" className={styles.navbarLink}>
                Skills
              </a>
            </li>
            <li>
              <a href="/portfolio" className={styles.navbarLink}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className={styles.navbarLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
