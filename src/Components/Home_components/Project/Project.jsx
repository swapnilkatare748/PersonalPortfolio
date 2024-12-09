import React from "react";
import styles from "./Project.module.css"; // Import the CSS module
import img1 from "../../../assets/images/project-1.png";
import img2 from "../../../assets/images/project-2.png";
import img3 from "../../../assets/images/project-3.png";
import img4 from "../../../assets/images/project-4.png";
import img5 from "../../../assets/images/project-5.png";
import img6 from "../../../assets/images/project-6.png";
import img7 from "../../../assets/images/project-7.png";

const Projects = () => {
  // Array to store project image imports
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section className={styles.project} id="portfolio">
      <ul className={styles.projectList}>
        {/* Section Content */}
        <li>
          <div className={`${styles.projectContent} ${styles.sectionContent}`}>
            <p className={styles.sectionSubtitle}>My Works</p>
            <h2 className={`${styles.h3} ${styles.sectionTitle}`}>
              See My Works Which Will Amaze You!
            </h2>
            <p className={styles.sectionText}>
              We develop the best quality website that serves for the long-term.
              Well-documented, clean, easy and elegant interface helps any
              non-technical clients.
            </p>
          </div>
        </li>

        {/* Project Cards */}
        {images.map((image, index) => (
          <li key={index}>
            <a href="#" className={styles.projectCard}>
              <figure className={styles.cardBanner}>
                <img
                  src={image}
                  className={styles.w100}
                  alt={`Project image ${index + 1}`}
                />
              </figure>
              <div className={styles.cardContent}>
                <h3 className={`${styles.h4} ${styles.cardTitle}`}>
                  Lorem Ipsum Dolor 0{index + 1}
                </h3>
                <time className={styles.publishDate} dateTime="2022-04">
                  April 2022
                </time>
              </div>
            </a>
          </li>
        ))}

        {/* Load More Button */}
        <li>
          <button className={styles.loadMore}>Load more work</button>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
