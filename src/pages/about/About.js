import React from 'react';
import style from './About.module.css'; 

function About() {
  return (
    <div className={style.aboutPage}>
      <h1>About This Site</h1>
      <p>
        Welcome to my personal website! This project is built with React and hosted on GitHub Pages.
      </p>
      <p>
        Here you'll find information about me, the technologies I work with, and my latest projects.
      </p>
    </div>
  );
}

export default About;
