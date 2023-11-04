import React from "react";
import cls from "../Header/style.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={cls.header}>
      <div className={cls.headerLogo}>
        <Link className={cls.shahriyor} to="/">
          Shahriyor
        </Link>
      </div>
      <div className={cls.headerListWrap}>
        <ul className={cls.headerList}>
          <Link to="/showcase" className={cls.headerListItem}>
            About me
          </Link>
          <Link className={cls.headerListItem} to="/work">
            My Work
          </Link>
          <Link className={cls.headerListItem} to="/skill">
            My Skills
          </Link>
          <Link className={cls.headerListItem} to="/family">
            My family
          </Link>
          <Link className={cls.headerListItem} to="/teacher">
            My Teachers
          </Link>
          <button className={cls.headerBtn}>Contact Us</button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
