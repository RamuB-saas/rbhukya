import CustomLi from "../../components/CustomLi/CustomLi";
import ExperienceTitle from "../../components/ExperienceTitle/ExperienceTitle";
import styles from "./Experience.module.css";

const experience = [
  {
    company: "OSI Digital",
    website: "https://www.osidigital.com",
    role: "Associate Architect",
    duration: "Dec 2023 – Present",
    responsibilities: [
      "Architect and design end-to-end Salesforce solutions for scalability and performance.",
      "Lead Salesforce implementations in automotive and financial domains.",
      "Develop custom Lightning Web Components and enhance UI/UX.",
      "Integrate Salesforce with Oracle, Zuora, and other third-party systems.",
      "Implement CI/CD pipelines to reduce deployment times by 50%.",
      "Mentor junior developers and lead code/design reviews.",
    ],
  },
  {
    company: "Apps Associates",
    website: "https://www.appsassociates.com",
    role: "Senior Consultant",
    duration: "Dec 2021 – Dec 2023",
    responsibilities: [
      "Built forecasting tools for Manufacturing Cloud with advanced filtering.",
      "Modernized legacy Salesforce UIs using LWC and Flows.",
      "Migrated from Classic to Lightning Experience (including workflow/process builder replacements).",
      "Developed field service location tracker app integrated with SFS mobile.",
      "Managed CI/CD and version control with SFDX CLI, Git, Bitbucket.",
      "Integrated DocuSign and trained junior team members.",
    ],
  },
  {
    company: "IG Group (IG Infotech India Ltd)",
    website: "https://www.iggroup.com",
    role: "Developer",
    duration: "May 2015 – Dec 2021",
    responsibilities: [
      "Integrated Salesforce with microservices-based architecture.",
      "Created responsive MyIG trading platform used during BREXIT events.",
      "Implemented real-time payment integrations (e.g., China Union Pay, Japanese Payments).",
      "Developed card and bank verification mobile app (reduced processing time from 5 days to 3 hours).",
      "Built internal apps like Bank Posting and handled blue/green deployments.",
      "Ensured PCI DSS compliance in Salesforce apps and optimized frontend using Chrome Lighthouse.",
      "Managed releases, CI/CD pipelines, and AWS deployments.",
    ],
  },
  {
    company: "CDAC - JNTU R&D",
    website: "https://drnd.jntuh.ac.in/",
    role: "Programmer",
    duration: "Jan 2013 – Mar 2015",
    responsibilities: [
      "Implemented research algorithms in Java.",
      "Analyzed business/technical requirements.",
      "Contributed to virtualization and server setups for research systems.",
    ],
  },
];
function Experience() {
  return (
    <main className={styles.expContainer}>
      <h4>Professional Experience</h4>
      {experience.map((exp, index) => (
        <section key={index} className="mb-10">
          <ExperienceTitle
            titleDetails={{
              name: exp.company,
              years: exp.duration,
              role: exp.role,
              website: exp.website,
            }}
          />
          <ul className={styles.expList}>
            {exp.responsibilities.map((item, i) => (
              <CustomLi item={{ name: item }} />
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
export default Experience;
