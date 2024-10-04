import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useQuery } from "@tanstack/react-query";

import * as styles from "./index.module.scss";
import Layout from "../components/layout";
import { fetchPlatforms } from "../version";

const DownloadButtons: React.FC = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
  });

  if (isLoading) {
    return <h3>Loading version information...</h3>;
  }

  if (!data) {
    return <h3>Failed to fetch version information.</h3>;
  }

  return (
    <>
      {Object.entries(data.platforms).map(([key, platform]) => (
        <a key={key} href={platform.url} className={styles.cta}>
          <platform.icon />
          <div className={styles.ctaText}>
            <span>Download for {platform.name}</span>
            <span className={styles.version}>
              v{data.version} &bull; {platform.arch}
            </span>
          </div>
        </a>
      ))}
    </>
  );
};

const DownloadPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1>Download Metastable</h1>
        <div className={styles.download}>
          <DownloadButtons />
        </div>
      </div>
    </Layout>
  );
};

export default DownloadPage;

export const Head: HeadFC = () => <title>Download Metastable</title>;
