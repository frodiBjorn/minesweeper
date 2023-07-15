import { BOARD_CONTAINER } from './index.js';

export const openEmptyCells = (cell) => {
  const board = BOARD_CONTAINER.firstChild;
  const cellX = parseInt(cell.dataset.x);
  const cellY = parseInt(cell.dataset.y);

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const neighborX = cellX + i;
      const neighborY = cellY + j;
      const neighborCell = board.querySelector(
        `.cell[data-x="${neighborX}"][data-y="${neighborY}"]`
      );
      if (neighborCell && !neighborCell.classList.contains('show')) {
        neighborCell.classList.add('show');
        if (neighborCell.textContent === '') {
          openEmptyCells(neighborCell);
        }
      }
    }
  }
};
