import React, { useState } from "react";

import "../styles/global.scss";
import * as styles from "./layout.module.scss";
import logo from "../images/logo.svg";
import MenuIcon from "../icons/menu";
import Menu from "./menu";

export default function Layout({
  children,
}: React.PropsWithChildren<{ showBackground?: boolean }>) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <div className={styles.gradient} />
      <header className={styles.header}>
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <img src={logo} />
            <span>Metastable</span>
          </a>
          <Menu className={styles.desktopMenu} />
          <button
            className={styles.toggle}
            onClick={() => setOpen((open) => !open)}
          >
            <MenuIcon />
          </button>
        </div>
        <Menu className={styles.mobileMenu + " " + (open ? styles.open : "")} />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div>
            <span>Designed and developed by:</span>
            <a href="https://mat.dev" rel="noopener noreferrer" target="_blank">
              mat.dev
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
