import { VOLUME } from './index.js';
import { gameOverSound, winSound } from './gameOver.js';
import { explosionSound, openCell } from './onCellClick.js';
import { flagSound } from './onCellContextMenu.js';
import { changeLevelSound } from './onLevelChanged.js';

export const setVolume = (volume) => {
  if (!volume) {
    VOLUME.classList.add('mute');
    explosionSound.volume = 0;
    changeLevelSound.volume = 0;
    flagSound.volume = 0;
    openCell.volume = 0;
    winSound.volume = 0;
    gameOverSound.volume = 0;
  } else {
    VOLUME.classList.remove('mute');
    explosionSound.volume = 1;
    changeLevelSound.volume = 1;
    flagSound.volume = 1;
    openCell.volume = 1;
    winSound.volume = 1;
    gameOverSound.volume = 1;
  }
};
