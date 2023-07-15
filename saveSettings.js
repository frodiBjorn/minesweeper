import { Settings } from "./Consts.js";


export const saveSettings = (newSettings) => {
    Object.assign(Settings, newSettings);
    localStorage.setItem('Settings', JSON.stringify(Settings));
  };
