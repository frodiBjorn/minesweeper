import {
  BOARD_CONTAINER,
  createBoard,
  SCORE,
  TIME,
  LEVEL_DROPDOWN,
  FACE,
} from './index.js';
import { clearTime } from './timer.js';
import { clearScore } from './clearScore.js';
import { saveResult } from './saveResult.js';
import { displayResults } from './displayResults.js';

export const winSound = new Audio('./assets/sounds/winSound.mp3');
export const gameOverSound = new Audio('./assets/sounds/gameOver.mp3');

export const gameOver = (win) => {
  const MODAL = document.createElement('div');
  const MODAL_CONTENT = document.createElement('div');
  const MODAL_TITLE = document.createElement('h2');
  const MODAL_TEXT = document.createElement('p');

  if (win) {
    FACE.style.backgroundImage = 'url(./assets/doom_dance.gif)';
    MODAL_TITLE.textContent = 'You win';
    MODAL_TEXT.textContent = `You are the best! Your score: ${SCORE.textContent}, time: ${TIME.textContent}`;
    winSound.play();
  } else {
    FACE.style.backgroundImage = 'url(./assets/Doom45.png)';
    MODAL_TITLE.textContent = 'Game Over';
    MODAL_TEXT.textContent = `You hit a mine. Better luck next time! Your score: ${SCORE.textContent}, time: ${TIME.textContent}`;
    gameOverSound.play();
    const result = `Score: ${SCORE.textContent}, Time: ${TIME.textContent}`;
    saveResult(result);
  }

  MODAL.classList.add('modal');
  MODAL_CONTENT.classList.add('modal-content');

  document.body.append(MODAL);
  MODAL.append(MODAL_CONTENT);
  MODAL_CONTENT.append(MODAL_TITLE);
  MODAL_CONTENT.append(MODAL_TEXT);

  const MODAL_BUTTON = document.createElement('button');
  MODAL_BUTTON.textContent = 'Play Again';
  MODAL_BUTTON.addEventListener('click', () => {
    displayResults();
    BOARD_CONTAINER.firstChild.remove();
    clearScore();
    clearTime();
    createBoard(LEVEL_DROPDOWN.value);
    FACE.style.backgroundImage = 'url(./assets/DoomNormal.png)';

    MODAL.remove();
  });
  clearTime();
  MODAL_CONTENT.append(MODAL_BUTTON);
};
