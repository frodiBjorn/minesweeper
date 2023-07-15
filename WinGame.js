import { gameOver } from './gameOver.js';

export const WinGame = () => {
  const cells = document.querySelectorAll('.cell');
  const totalCells = cells.length;
  let mineCount = 0;
  let revealedCount = 0;
  let win = true;

  cells.forEach((cell) => {
    if (cell.classList.contains('mine')) {
      mineCount++;
    }
    if (cell.classList.contains('show')) {
      revealedCount++;
    }
  });

  if (revealedCount === totalCells - mineCount) {
    gameOver(win);
  }
};
