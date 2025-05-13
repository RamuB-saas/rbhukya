import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.intro}>
          Hello! I’m <strong>Ramu Bhukya</strong>, a technology consultant with
          over a decade of experience building, scaling, and optimizing web and
          cloud-based applications.
        </p>
        <p>
          My core expertise lies in{" "}
          <strong>Salesforce development and architecture</strong>, with a
          strong foundation in{" "}
          <strong>
            Java, JavaScript, ReactJS, and full-stack web development
          </strong>
          . I help companies streamline their digital operations, build scalable
          solutions, and accelerate their cloud transformation journeys.
        </p>
        <p>
          I’ve worked with cross-functional teams across industries to implement
          complex systems like <strong>CRM platforms</strong>, field operations
          and sales enablement tools, and integrations between cloud and on-prem
          systems.
        </p>
        <p>
          I’m passionate about writing clean code, architecting robust systems,
          and mentoring development teams. When I’m not working with code, I’m
          learning new technologies, sharing knowledge, or collaborating on
          challenging projects.
        </p>
        <p className={styles.closing}>
          If you're looking for a consultant who combines deep technical skills
          with practical business insight — let’s connect!
        </p>
      </div>
    </section>
  );
}

export default About;
