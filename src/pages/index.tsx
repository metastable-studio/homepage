import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useQuery } from "@tanstack/react-query";

import * as styles from "./index.module.scss";
import screenshot from "../images/screenshot.png";
import Layout from "../components/layout";
import { fetchPlatforms } from "../version";
import { URL_QUICKSTART } from "../consts";

function getOS() {
  if (typeof window === "undefined") {
    return undefined;
  }

  const userAgent = window.navigator?.userAgent;
  const platform =
    (window?.navigator as any)?.userAgentData?.platform ||
    window?.navigator?.platform;
  const macosPlatforms = ["macOS", "Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];

  if (macosPlatforms.indexOf(platform) !== -1) {
    return "darwin";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    return undefined;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    return "win32";
  } else if (/Android/.test(userAgent)) {
    return undefined;
  } else if (/Linux/.test(platform)) {
    return "linux";
  }

  return undefined;
}

const DownloadButton: React.FC = () => {
  const os = getOS();
  const { isLoading, data } = useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
  });
  const platform = os && data?.platforms?.[os];

  if (isLoading) {
    return <h3>Loading version information...</h3>;
  }

  if (!data) {
    return <h3>Failed to fetch version information.</h3>;
  }

  if (!platform) {
    return <h3>Your operating system is not supported.</h3>;
  }

  return (
    <a href={platform.url} className={styles.cta}>
      <platform.icon />
      <div className={styles.ctaText}>
        <span>Download for {platform.name}</span>
        <span className={styles.version}>
          v{data.version} &bull; {platform.arch}
        </span>
      </div>
    </a>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout showBackground>
      <div className={styles.hero}>
        <h1>Generate images at the speed of thought</h1>
        <h2>
          Meet Metastable, a new app for AI image generation that respects your
          privacy and freedom.
        </h2>
        <div className={styles.download}>
          <DownloadButton />

          <div className={styles.info}>
            <a href={URL_QUICKSTART} rel="noopener noreferrer" target="_blank">
              Getting started
            </a>
            <span>&bull;</span>
            <a href="/download">Other versions and operating systems</a>
          </div>
        </div>
      </div>
      <div className={styles.screenshot}>
        <img src={screenshot} alt="Metastable screenshot" />
      </div>
      <div className={styles.divider}>
        <h2>Simply better</h2>
      </div>
      <div className={styles.bento}>
        <div className={styles.bento1}>
          <h3>Solid foundation</h3>
          <span>
            Metastable is based on{" "}
            <a
              href="https://github.com/comfyanonymous/ComfyUI"
              rel="noopener noreferrer"
              target="_blank"
            >
              ComfyUI
            </a>
            , a reliable and efficient AI image generation tool.
          </span>
        </div>
        <div className={styles.bento2}>
          <h3>What's a "Python"?</h3>
          <span>
            No need to worry about installing and managing dependencies.
            Metastable does everything for you, so you can focus on what you do
            best.
          </span>
        </div>
        <div className={styles.bento1}>
          <h3>Organized</h3>
          <span>
            Unlike other open source software, Metastable keeps your ideas
            neatly organized into projects.
          </span>
        </div>
        <div className={styles.bento2}>
          <h3>No watermarks</h3>
          <span>
            Your images are fully yours. Metastable does not add any
            undocumented metadata or watermarks to your images.
          </span>
        </div>
        <div className={styles.bento2}>
          <h3>Bring your own models</h3>
          <span>
            Metastable lets you use any Stable Diffusion (1, 2, 3, XL) or FLUX.1
            based model, along with LoRAs, IP Adapters, ControlNets and more.
          </span>
        </div>
        <div className={styles.bento1}>
          <h3>Free as in freedom</h3>
          <span>
            ...and as in beer. Metastable is completely{" "}
            <a
              href="https://github.com/mat-sz/metastable"
              rel="noopener noreferrer"
              target="_blank"
            >
              open source
            </a>
            , and licensed under AGPLv3.
          </span>
        </div>
        <div className={styles.bento2}>
          <h3>Modern UX</h3>
          <span>
            Don't waste time trying to navigate clunky UIs. In Metastable
            everything is right where it belongs.
          </span>
        </div>
        <div className={styles.bento1}>
          <h3>Switch effortlessly</h3>
          <span>
            Metastable can import prompts and settings from images generated by
            other software.
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Metastable</title>;
