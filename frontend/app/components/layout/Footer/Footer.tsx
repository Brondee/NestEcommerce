import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

import logo from "../../../assets/images/Logo.png";
import vkIcon from "../../../assets/icons/vk.svg";

import { BsTelegram } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer_layout}>
      <nav>
        <Link href={"/"}>
          <div className={styles.logo_container}>
            <img src={logo.src} alt="logo" />
            <a>Borent</a>
          </div>
        </Link>
        <ul className={styles.social_container}>
          <li>
            <Link href="#">
              <a className={styles.icon}>
                <BsTelegram />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={styles.icon}>
                <img src={vkIcon.src} alt="vk" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={styles.icon}>
                <BsInstagram />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={styles.icon}>
                <MdOutlineAlternateEmail />
              </a>
            </Link>
          </li>
        </ul>
        <ul className={styles.links_container}>
          <li>
            <Link href="/profile">
              <a className={styles.footer_link}>Профиль</a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a className={styles.footer_link}>Магазин</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
