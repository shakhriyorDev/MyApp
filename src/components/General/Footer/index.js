import React from "react";
import cls from "../Footer/style.module.css";
function Footer() {
  return (
    <div className={cls.footer}>
      <ul className={cls.list}>
        <li className={cls.item}>Service</li>
        <li className={cls.item}>Order Management</li>
        <li className={cls.item}>Social Assistant</li>
        <li className={cls.item}>Crypto Platform</li>
        <li className={cls.item}>Analyzer of the News</li>
      </ul>
      <ul className={cls.list}>
        <li className={cls.item}>Company</li>
        <li className={cls.item}>About Us</li>
        <li className={cls.item}>News</li>
        <li className={cls.item}>Our trusted partner</li>
        <li className={cls.item}>New users FAQ</li>
      </ul>
      <ul className={cls.list}>
        <li className={cls.item}>Supports</li>
        <li className={cls.item}>Help center</li>
        <li className={cls.item}>Feedbcak</li>
        <li className={cls.item}>Contact us</li>
        <li className={cls.item}>Terms conditins</li>
      </ul>
      <ul className={cls.list}>
        <li className={cls.item}>Resources</li>
        <li className={cls.item}>Download app</li>
        <li className={cls.item}>Blog</li>
        <li className={cls.item}>What’s new</li>
        <li className={cls.item}>Sitemap</li>
      </ul>
    </div>
  );
}

export default Footer;
