import LinuxIcon from "./icons/linux";
import MacIcon from "./icons/mac";
import WindowsIcon from "./icons/windows";

interface Platform {
  id: string;
  name: string;
  icon: () => React.JSX.Element;
  arch: string;
  url: string;
}

interface VersionInfo {
  version: string;
  platforms: Record<string, Platform>;
}

export async function fetchPlatforms(): Promise<VersionInfo> {
  const req = await fetch("https://api.metastable.studio/version.json");
  const json = await req.json();
  const version = json.version;

  const baseUrl = "https://api.metastable.studio/electron/update/Metastable";

  return {
    version,
    platforms: {
      win32: {
        id: "win32",
        name: "Windows",
        icon: WindowsIcon,
        arch: "64-bit",
        url: `${baseUrl}-win32-x64-${version}.exe`,
      },
      darwin: {
        id: "darwin",
        name: "macOS",
        icon: MacIcon,
        arch: "universal",
        url: `${baseUrl}-darwin-universal-${version}.dmg`,
      },
      linux: {
        id: "linux",
        name: "Linux",
        icon: LinuxIcon,
        arch: "64-bit",
        url: `${baseUrl}-linux-x86_64-${version}.AppImage`,
      },
    },
  };
}
