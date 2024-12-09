import React from 'react'
import styles from './hero.module.css';
import img1 from '../../../assets/images/hero-banner.png';
import img2 from '../../../assets/images/hero-banner-md.png';
import img3 from '../../../assets/images/hero-banner-sm.png';


function hero() {
  return (
      <section className={styles.hero} id="home">
      <figure className={styles.heroBanner}>
        <picture>
          <source
            srcSet={img1}
            media="(min-width: 768px)"
          />
          <source
            srcSet={img2}
            media="(min-width: 500px)"
          />
          <img
            src={img3}
            alt="A man in a blue shirt with a happy expression"
            className={styles.w100}
          />
        </picture>
      </figure>

      <div className={styles.heroContent}>
        <h2 className={`${styles.h2} ${styles.heroTitle}`}>
          We Design & Build Creative Products
        </h2>
        <a href="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
          Get in touch
        </a>
      </div>

      <ul className={styles.heroSocialList}>
        <li>
          <a href="#" className={styles.heroSocialLink}>
          <i class="fa-brands fa-facebook"></i>
            <div className={styles.tooltip}>Facebook</div>
          </a>
        </li>
        <li>
          <a href="#" className={styles.heroSocialLink}>
          <i class="fa-brands fa-twitter"></i>
            <div className={styles.tooltip}>Twitter</div>
          </a>
        </li>
        <li>
          <a href="#" className={styles.heroSocialLink}>
          <i class="fa-brands fa-linkedin"></i>
            <div className={styles.tooltip}>Linkedin</div>
          </a>
        </li>
      </ul>

      <a href="#stats" className={styles.scrollDown}>
        Scroll
      </a>
    </section>
  )
}

export default hero
