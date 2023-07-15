import { Levels } from './Consts.js';
import { clearScore } from './clearScore.js';
import { BOARD_CONTAINER, createBoard } from './index.js';
import { clearTime } from './timer.js';
export const changeLevelSound = new Audio('./assets/sounds/changeLevel.m4a');
export const onLevelChanged = (levelBtn) => {
  BOARD_CONTAINER.firstChild.remove();
  const LEVEL = levelBtn.value;
  if (LEVEL === Levels.easy) {
    changeLevelSound.play();
    clearScore();
    clearTime();
    createBoard(Levels.easy);
  }
  if (LEVEL === Levels.medium) {
    changeLevelSound.play();
    clearScore();
    clearTime();
    createBoard(Levels.medium);
  }
  if (LEVEL === Levels.hard) {
    changeLevelSound.play();
    clearScore();
    clearTime();
    createBoard(Levels.hard);
  }
};
