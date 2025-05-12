import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.homePage}>
      <h1>Welcome to My Website</h1>
      <p>
        This is the home page of my personal site built with React and deployed on GitHub Pages.
      </p>
      <p>
        Use the navigation links above to learn more about me and explore the site.
      </p>
    </div>
  );
}

export default Home;
