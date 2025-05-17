import styles from "./ExperienceTitle.module.css";

export default function ExperienceTitle({ titleDetails }) {
  const { name, years, role, website } = titleDetails;
  return (
    <div className={styles.experienceItem}>
      <span class={styles.companyName}>{name}</span>
      <div className={styles.roleDuration}>
        <p class={styles.jobTitle}>{role}</p> {"|"}
        <p class={styles.jobDuration}>{years}</p> {"|"}
        <p class={styles.jobWebsite}>
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </p>
      </div>
    </div>
  );
}
