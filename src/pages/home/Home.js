import React from "react";
import styles from "./Home.module.css";
import ListItem from "../../components/ListItem/ListItem";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeLeft}>
        <div className={styles.titleBox}>
          <div className={styles.navContainer}>
            <img
              src={`${process.env.PUBLIC_URL}/rb_logo.png`}
              alt="Ramu Bhukya Logo"
              sizes="500px"
              className={styles.logo}
              width="50"
              height="50"
              loading="lazy"
              decoding="async"
              fetchPriority="high"
            />
            <div className={styles.title}>Ramu Bhukya </div>
          </div>
          <div className={styles.titleContent}>
            <p className={styles.heroSubtitle}>
              Solution Architect & Technology Consultant specializing in{" "}
              <span className={styles.underline}>Salesforce</span>,{" "}
              <span className={styles.underline}>Web</span>, and{" "}
              <span className={styles.underline}>Cloud solutions</span>.
            </p>
          </div>
          <div className={styles.titleContent}>
            <div className={styles.naItems}>
              <ListItem item={{ name: "About" }} />
              <ListItem item={{ name: "Experience" }} />
              <ListItem item={{ name: "Github" }} />
              <ListItem item={{ name: "Projects" }} />
              <ListItem item={{ name: "Portfolio" }} />
              <ListItem item={{ name: "Resume" }} />
              <ListItem item={{ name: "Blog" }} />
              <ListItem item={{ name: "LinkedIn" }} />
              <ListItem item={{ name: "Twitter" }} />
            </div>
          </div>
          <Contact />
        </div>
      </div>
      <div className={styles.homeRight}>
        <div className={styles.rightContent}>
          <h4>About Me</h4>
          <p className={styles.rightContentText}>
            I am a Solution Architect and Technology Consultant with over 12
            years of experience in Salesforce, Web, and Cloud solutions. I have
            a proven track record of delivering high-quality solutions that meet
            the needs of my clients.
          </p>
          <p className={styles.rightContentText}>
            I am passionate about technology and always looking for new
            challenges. I am a quick learner and enjoy working with new
            technologies.
          </p>
        </div>
        <div className={styles.rightContent}>
          <p className={styles.rightContentText}>
            I am a strong advocate for best practices and always strive to
            deliver high-quality solutions. I am also a strong communicator and
            enjoy working with clients to understand their needs.
          </p>
          <p className={styles.rightContentText}>
            I am always looking for new opportunities to learn and grow. If you
            are looking for a Solution Architect or Technology Consultant, I
            would love to hear from you.
          </p>
        </div>
        <Experience />
      </div>
    </div>
  );
}

export default Home;
