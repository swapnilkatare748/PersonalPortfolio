import React, { useState } from "react";
import styles from "./Skills.module.css";
import img1 from "../../../assets/images/html5.png";
import img2 from "../../../assets/images/css3.png";
import img3 from "../../../assets/images/webpack.png";
import img4 from "../../../assets/images/typescript.png";
import img5 from "../../../assets/images/jquery.png";
import img6 from "../../../assets/images/bootstrap.png";
import img7 from "../../../assets/images/angular.png";
import img8 from "../../../assets/images/react.png";
import img9 from "../../../assets/images/vue.png";
import img10 from "../../../assets/images/firebase.png";
import img11 from "../../../assets/images/pugjs.png";
import img12 from "../../../assets/images/sass.png";

import img21 from "../../../assets/images/ajax.png";
import img22 from "../../../assets/images/gulp.png";
import img23 from "../../../assets/images/webpack.png";
import img24 from "../../../assets/images/git.png";
import img25 from "../../../assets/images/npm.png";
import img26 from "../../../assets/images/adobe-xd.png";
import img27 from "../../../assets/images/vs-code.png";
import img28 from "../../../assets/images/trello.png";
import img29 from "../../../assets/images/clickup.png";
import img30 from "../../../assets/images/slack.png";
import img31 from "../../../assets/images/photoshop.png";
import img32 from "../../../assets/images/adobe-xd.png";

const Skills = () => {
  const [isSkillsActive, setIsSkillsActive] = useState(true);

  const toggleSkills = () => {
    setIsSkillsActive((prev) => !prev);
  };

 

  return (
    <section className={styles.skills} id="skills">
      <div className={`${styles.skillsContent} section-content`}>
        <p className={styles.sectionSubtitle}>My skills</p>
        <h2 className={`${styles.h3} ${styles.sectionTitle}`}>
          What My Programming Skills Include?
        </h2>
        <p className={styles.sectionText}>
          I develop simple, intuitive, and responsive user interfaces that help
          users get things done with less effort and time with these
          technologies.
        </p>
        <div
          className={`${styles.skillsToggle} ${
            isSkillsActive ? styles.active : ""
          }`}
          onClick={toggleSkills}
        >
          <button
            className={`${styles.toggleBtn} ${
              isSkillsActive ? styles.active : ""
            }`}
          >
            Skills
          </button>
          <button
            className={`${styles.toggleBtn} ${
              !isSkillsActive ? styles.active : ""
            }`}
          >
            Tools
          </button>
        </div>
      </div>

      <div
        className={`${styles.skillsBox} ${
          isSkillsActive ? "" : styles.active
        }`}
      >
        <ul className={isSkillsActive ? styles.skillsList : styles.toolsList}>
          {isSkillsActive ? (
            <>
              <SkillCard tooltip="HTML5" imageSrc={img1} altText="HTML5 logo" />
              <SkillCard tooltip="CSS3" imageSrc={img2} altText="CSS3 logo" />
              <SkillCard
                tooltip="JavaScript"
                imageSrc={img3}
                altText="JavaScript logo"
              />
              <SkillCard
                tooltip="TypeScript"
                imageSrc={img4}
                altText="TypeScript logo"
              />
              <SkillCard
                tooltip="jQuery"
                imageSrc={img5}
                altText="jQuery logo"
              />
              <SkillCard
                tooltip="Bootstrap"
                imageSrc={img6}
                altText="Bootstrap logo"
              />
              <SkillCard
                tooltip="Angular"
                imageSrc={img7}
                altText="Angular logo"
              />
              <SkillCard tooltip="React" imageSrc={img8} altText="React logo" />
              <SkillCard tooltip="Vue" imageSrc={img9} altText="Vue logo" />
              <SkillCard
                tooltip="Firebase"
                imageSrc={img10}
                altText="Firebase logo"
              />
              <SkillCard
                tooltip="PugJs"
                imageSrc={img11}
                altText="PugJs logo"
              />
              <SkillCard tooltip="SASS" imageSrc={img12} altText="SASS logo" />
            </>
          ) : (
            <>
              <SkillCard tooltip="Ajax" imageSrc={img21} altText="Ajax logo" />
              <SkillCard tooltip="Gulp" imageSrc={img22} altText="Gulp logo" />
              <SkillCard
                tooltip="Webpack"
                imageSrc={img23}
                altText="Webpack logo"
              />
              <SkillCard tooltip="Git" imageSrc={img24} altText="Git logo" />
              <SkillCard tooltip="Npm" imageSrc={img25} altText="Npm logo" />
              <SkillCard
                tooltip="Command Line"
                imageSrc={img26}
                altText="Command Line logo"
              />
              <SkillCard
                tooltip="VS Code"
                imageSrc={img27}
                altText="VS Code logo"
              />
              <SkillCard
                tooltip="Trello"
                imageSrc={img28}
                altText="Trello logo"
              />
              <SkillCard
                tooltip="ClickUp"
                imageSrc={img29}
                altText="ClickUp logo"
              />
              <SkillCard
                tooltip="Slack"
                imageSrc={img30}
                altText="Slack logo"
              />
              <SkillCard
                tooltip="Photoshop"
                imageSrc={img31}
                altText="Photoshop logo"
              />
              <SkillCard
                tooltip="Adobe XD"
                imageSrc={img32}
                altText="Adobe XD logo"
              />
            </>
          )}
        </ul>
      </div>
    </section>
  );
};

const SkillCard = ({ tooltip, imageSrc, altText }) => {
  return (
    <li className={styles.skillCard_li}>
      <div className={styles.skillCard}>
        <div className={styles.tooltip}>{tooltip}</div>
        <div className={styles.cardIcon}>
          <img src={imageSrc} alt={altText} />
        </div>
      </div>
    </li>
  );
};

export default Skills;
