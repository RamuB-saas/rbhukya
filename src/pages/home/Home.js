import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Hi, I'm Ramu Bhukya 👋</h1>
        <p className={styles.heroSubtitle}>
          Solution Architect & Technology Consultant specializing in Salesforce,
          Web, and Cloud solutions.
        </p>
        <Link to="/contact" className={styles.heroCTA}>
          Let's Work Together
        </Link>
      </div>
    </section>
  );
}

export default Home;
