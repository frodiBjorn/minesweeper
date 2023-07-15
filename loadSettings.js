import { Settings } from './Consts.js';
import { setVolume } from './setVolume.js';
import { setTheme } from './setTheme.js';


export const loadSettings = () => {
  const savedSettings = JSON.parse(localStorage.getItem('Settings'));
  if (savedSettings) {
    Object.assign(Settings, savedSettings);
  }
  setTheme(Settings.theme);
  setVolume(Settings.volume);
};
