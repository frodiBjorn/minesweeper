import { gameOver } from './gameOver.js';
import { BOARD_CONTAINER, FACE, isFirstMove, SCORE } from './index.js';
import { openEmptyCells } from './openEmptyCells.js';
import { startTimer, timerId } from './timer.js';
import { WinGame } from './WinGame.js';

export const explosionSound = new Audio('./assets/sounds/mineSound.mp3');
export const openCell = new Audio('./assets/sounds/openCell.mp3');
export const onCellClick = (cell) => {
  const board = BOARD_CONTAINER.firstChild;

  if (cell.classList.contains('mine') && !isFirstMove) {
    explosionSound.play();
    gameOver();
  } else {
    if (!cell.classList.contains('show') && cell.tagName !== 'SPAN') {
      SCORE.textContent = parseInt(SCORE.textContent) + 1;
      if (parseInt(SCORE.textContent) > 10) {
        FACE.style.backgroundImage = 'url(./assets/Doom74.png)';
      }
      if (parseInt(SCORE.textContent) > 25) {
        FACE.style.backgroundImage = 'url(./assets/Doom31.png)';
      }
    }

    cell.classList.add('show');
    openCell.play();
    cell.classList.remove('flag');
    if (cell.classList.contains('empty')) {
      openEmptyCells(cell);
    }
    if (!timerId) {
      startTimer();
    }
    WinGame();
  }
};
