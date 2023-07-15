export const fillCellsWithMines = (mineCount, forbiddenCell) => {
  const CELLS = document.querySelectorAll('.cell');
  const totalCells = CELLS.length;
  const mineIndexes = new Set();

  while (mineIndexes.size < mineCount) {
    let randomIndex = Math.floor(Math.random() * totalCells);
    while (forbiddenCell && CELLS[randomIndex] === forbiddenCell) {
      randomIndex = Math.floor(Math.random() * totalCells);
    }
    mineIndexes.add(randomIndex);
  }

  CELLS.forEach((cell, index) => {
    if (mineIndexes.has(index)) {
      cell.classList.add('mine');
      const mineSpan = document.createElement('span');
      cell.appendChild(mineSpan);
    }
  });

  return [...mineIndexes].map((index) => CELLS[index]);
};
