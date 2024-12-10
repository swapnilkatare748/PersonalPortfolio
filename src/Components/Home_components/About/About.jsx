import React from 'react';
import styles from './About.module.css'; // Importing the modular CSS file
import img1 from '../../../assets/images/about-banner.png';

function About() {
  return ( 
    <section className={styles.about} id="about">
      <figure className={styles.aboutBanner}>
        <img 
          src={img1} 
          alt="A man in a alice blue shirt with a thinking expression" 
          className="w-100" 
        />
      </figure>

      <div className={`${styles.aboutContent} ${styles.sectionContent}`}>
        <p className={styles.sectionSubtitle}>About me</p>

        <h2 className={`${styles.sectionTitle} h3 `}>
          Need a Creative Product? I can Help You!
        </h2>  

        <p className={styles.sectionText}>
          Hi! I’m Jack Reacher, and I’m a developer who has passion for building clean web applications with intuitive
          functionalities. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about
          learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with
          creative teams, which involves daily stand-ups and communications, source control, and project management.
        </p>

        <div className={styles.btnGroup}>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>Hire me</button>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>Download cv</button>
        </div>
      </div>
    </section>
  );
}

export default About;
