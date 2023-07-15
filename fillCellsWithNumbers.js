import { NumberColor } from './Consts.js';

export const fillCellsWithNumbers = (cellsCount) => {
  const CELLS = document.querySelectorAll('.cell');
  CELLS.forEach((cell, index) => {
    if (!cell.classList.contains('mine')) {
      let count = 0;
      const row = Math.floor(index / Math.sqrt(cellsCount));
      const col = index % Math.sqrt(cellsCount);
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (
            i >= 0 &&
            i < Math.sqrt(cellsCount) &&
            j >= 0 &&
            j < Math.sqrt(cellsCount)
          ) {
            const neighborIndex = i * Math.sqrt(cellsCount) + j;
            const neighborCell = CELLS[neighborIndex];
            if (neighborCell.classList.contains('mine')) {
              count++;
            }
          }
        }
      }
      if (count > 0) {
        const cellSpan = document.createElement('span');
        switch (count) {
          case 1:
            cellSpan.style.color = NumberColor.one;
            break;
          case 2:
            cellSpan.style.color = NumberColor.two;
            break;
          case 3:
            cellSpan.style.color = NumberColor.three;
            break;
          case 4:
            cellSpan.style.color = NumberColor.four;
            break;
          case 5:
            cellSpan.style.color = NumberColor.five;
            break;
          case 6:
            cellSpan.style.color = NumberColor.six;
            break;
          case 7:
            cellSpan.style.color = NumberColor.seven;
            break;
          case 8:
            cellSpan.style.color = NumberColor.eight;
            break;
        }
        cellSpan.textContent = count;
        cell.appendChild(cellSpan);
      } else {
        cell.classList.add('empty');
      }
    }
  });
};
