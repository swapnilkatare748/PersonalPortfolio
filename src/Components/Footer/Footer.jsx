import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={`${styles.logo}`}>
          <a href="#">
            Jack<span>.</span>
          </a>
        </p>
        <p className={styles.copyright}>
          &copy; 2022 <a href="#">codewithsadee</a>. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
