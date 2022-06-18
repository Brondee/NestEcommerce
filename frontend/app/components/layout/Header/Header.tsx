import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/images/Logo.png";

const Header = () => {
  return (
    <header className={styles.header_layout}>
      <nav>
        <Link href={"/"}>
          <div className={styles.logo_container}>
            <img src={logo.src} alt="logo" />
            <a>Borent</a>
          </div>
        </Link>
        <ul>
          <li>
            <Link href="/shop">
              <a className={styles.header_link}>Магазин</a>
            </Link>
          </li>

          <li>
            <Link href="/profile">
              <a className={styles.header_link}>Профиль</a>
            </Link>
            {/* will be changing if user is not auth */}
          </li>

          <li>
            <Link href="/cart">
              <a className={styles.header_link}>Корзина</a>
            </Link>
          </li>

          <li>
            <Link href="/search">
              <a className={styles.header_link}>Поиск</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
