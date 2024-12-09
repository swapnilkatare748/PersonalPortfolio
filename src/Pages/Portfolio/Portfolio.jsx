import React from 'react'
import styles from './Portfolio.module.css';
import Project from '../../Components/Home_components/Project/Project';
function Portfolio() {
  return (
    <div className={styles.Portfolio}>
      <Project/>
    </div>
  )
}

export default Portfolio
