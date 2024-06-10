import React from "react";

import "../styles/global.scss";
import * as styles from "./layout.module.scss";

export default function Menu({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <ul>
        <li>
          <a
            href="https://discord.gg/Sf9zKaXzXe"
            rel="noopener noreferrer"
            target="_blank"
          >
            Discord
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mat-sz/metastable"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://x.com/get_metastable"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <li>
          <a href="/download" className={styles.primary}>
            Download
          </a>
        </li>
      </ul>
    </nav>
  );
}
