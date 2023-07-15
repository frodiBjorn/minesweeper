import { clearScore } from './clearScore.js';
import { LEVEL_DROPDOWN, BOARD_CONTAINER, createBoard } from './index.js';
import { clearTime } from './timer.js';


export const startNewGame = () => {
  BOARD_CONTAINER.firstChild.remove();
  clearScore();
  clearTime();
  createBoard(LEVEL_DROPDOWN.value);
};
