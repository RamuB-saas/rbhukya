import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContent}>
        <h2 className={styles.contactTitle}>Get in Touch</h2>
        <p className={styles.contactSubtitle}>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className={styles.contactDetails}>
          <p>
            <strong>Call:</strong> +91 9502438833
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:ramu.bhukya0454@gmail.com">
              ramu.bhukya0454@gmail.com
            </a>
          </p>
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
        </div>

        {/*     <form className={styles.contactForm}>
          <input
            type="text"
            placeholder="Your Name"
            className={styles.contactInput}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.contactInput}
            required
          />
          <textarea
            placeholder="Your Message"
            className={styles.contactTextarea}
            required
          ></textarea>
          <button type="submit" className={styles.contactButton}>
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
}
export default Contact;
