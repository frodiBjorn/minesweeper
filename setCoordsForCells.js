import { BOARD_CONTAINER } from './index.js';

export const setCoordsForCells = () => {
  const board = BOARD_CONTAINER.firstChild;
  const cells = board.querySelectorAll('.cell');
  const numRows = Math.sqrt(cells.length);
  const numCols = Math.sqrt(cells.length);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const cell = cells[i * numCols + j];
      cell.dataset.x = j;
      cell.dataset.y = i;
    }
  }
};
