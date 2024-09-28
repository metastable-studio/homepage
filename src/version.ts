import LinuxIcon from "./icons/linux";
import MacIcon from "./icons/mac";
import WindowsIcon from "./icons/windows";

export const version = "0.0.5";

const baseUrl = "https://api.metastable.studio/electron/update/Metastable";

export const platforms = {
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
};
