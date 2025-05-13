import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import style from "./App.module.css";

function App() {
  return (
    <Router>
      <div>
        <div className={style.navContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/rb_logo.png`}
            alt="Ramu Bhukya Logo"
            sizes="500px"
            className={style.logo}
            width="50"
            height="50"
            loading="lazy"
            decoding="async"
            fetchpriority="high"
          />
          <div className={style.title}>Ramu Bhukya </div>
          <nav className={style.nav}>
            <ul className={style.navList}>
              <li>
                <Link className={style.navItem} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={style.navItem} to="/pages/about/About">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/about/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
