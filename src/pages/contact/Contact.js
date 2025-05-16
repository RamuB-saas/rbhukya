import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContent}>
        <h4 className={styles.contactText}>Contact Me</h4>
        <div className={styles.contactDetails}>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/ramubhukya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with me
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:ramu.bhukya0454@gmail.com">
              ramu.bhukya0454@gmail.com
            </a>
          </p>
          <p>
            <strong>Call:</strong> +91 9502438833
          </p>
        </div>
      </div>
    </section>
  );
}
export default Contact;
