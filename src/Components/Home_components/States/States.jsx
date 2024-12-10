import React from 'react'
import img1 from '../../../assets/images/stats-card_icon-1.png'
import img2 from '../../../assets/images/stats-card_icon-2.png'
import img3 from '../../../assets/images/stats-card_icon-3.png'
import styles from './States.module.css';

function States() { 
    const statsData = [
        {
          icon: img1,
          alt: "Badge icon",
          value: "12+",
          description: "Years of Experience",
        },
        {
          icon: img2,
          alt: "Checkmark icon",
          value: "230+",
          description: "Completed Projects",
        },
        {
          icon: img3,
          alt: "Peoples rating icon",
          value: "95+",
          description: "Happy Clients",
        },
      ];
    
      return (
        <section className={styles.stats} id="stats">
          <ul className={styles.statsList}>
            {statsData.map((stat, index) => (
              <li key={index}>
                <a href="#" className={styles.statsCard}>
                  <div className={styles.cardIcon}>
                    <img src={stat.icon} alt={stat.alt} />
                  </div>
                  <h2 className={styles.cardTitle}>
                   <span> {stat.value}</span> <strong>{stat.description}</strong>
                  </h2>
                  {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}
                </a>
              </li>
            ))}
          </ul>
        </section>
      );
    };

export default States
