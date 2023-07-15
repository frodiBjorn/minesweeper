import { Settings } from './Consts.js';
import { gameOverSound, winSound } from './gameOver.js';
import { VOLUME } from './index.js';
import { explosionSound, openCell } from './onCellClick.js';
import { flagSound } from './onCellContextMenu.js';
import { changeLevelSound } from './onLevelChanged.js';
import { saveSettings } from './saveSettings.js';



export const muteVolume = () => {
  Settings.volume = !Settings.volume
  VOLUME.classList.toggle('mute');
  saveSettings({ volume: Settings.volume });
  if (VOLUME.classList.contains('mute')) {
    explosionSound.volume = 0;
    changeLevelSound.volume = 0;
    flagSound.volume = 0;
    openCell.volume = 0;
    winSound.volume = 0;
    gameOverSound.volume = 0;
  } else {
    explosionSound.volume = 1;
    changeLevelSound.volume = 1;
    flagSound.volume = 1;
    openCell.volume = 1;
    winSound.volume = 1;
    gameOverSound.volume = 1;
  }
};
