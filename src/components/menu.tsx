import React from "react";
import { BsGithub, BsDiscord, BsTwitter } from "react-icons/bs";

import "../styles/global.scss";
import * as styles from "./layout.module.scss";

export default function Menu({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <ul>
        <li>
          <a
            href="https://github.com/mat-sz/metastable/blob/main/CHANGELOG.md"
            rel="noopener noreferrer"
            target="_blank"
          >
            Changelog
          </a>
        </li>
        <li>
          <a
            href="https://docs.metastable.studio/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Documentation
          </a>
        </li>
        <li>
          <a href="/download" className={styles.primary}>
            Download
          </a>
        </li>
        <li className={styles.social}>
          <a
            href="https://github.com/mat-sz/metastable"
            rel="noopener noreferrer"
            target="_blank"
            title="Github"
          >
            <BsGithub />
          </a>
          <a
            href="https://x.com/get_metastable"
            rel="noopener noreferrer"
            target="_blank"
            title="Twitter"
          >
            <BsTwitter />
          </a>
          <a
            href="https://discord.gg/Sf9zKaXzXe"
            rel="noopener noreferrer"
            target="_blank"
            title="Discord"
          >
            <BsDiscord />
          </a>
        </li>
      </ul>
    </nav>
  );
}
