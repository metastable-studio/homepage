import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import * as styles from "./index.module.scss";
import Layout from "../components/layout";
import { platforms, version } from "../version";

const DownloadPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1>Download Metastable</h1>
        <div className={styles.download}>
          {Object.entries(platforms).map(([key, platform]) => (
            <a key={key} href={platform.url} className={styles.cta}>
              <platform.icon />
              <div className={styles.ctaText}>
                <span>Download for {platform.name}</span>
                <span className={styles.version}>
                  v{version} &bull; {platform.arch}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DownloadPage;

export const Head: HeadFC = () => <title>Download Metastable</title>;
