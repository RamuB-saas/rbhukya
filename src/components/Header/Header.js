import React from "react";
import style from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={style.navContainer}>
        <nav className={style.nav}>
          <ul className={style.navList}>
            <li>
              <a className={style.navItem} href="/">
                Home
              </a>
            </li>
            <li>
              <a className={style.navItem} href="/pages/About/About">
                About
              </a>
            </li>
            <li>
              <a className={style.navItem} href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.separator}></div>
    </header>
  );
}

export default Header;
