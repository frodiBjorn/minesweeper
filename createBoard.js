export function createBoard(cellsCount, MINE_COUNT) {
    const CELL_BORDER_WIDTH = 1;
    const CELL_WIDTH = 50;
    const CELL_HEIGHT = 50;
    const BOARD = document.createElement("div");
    BOARD.style.width = `${CELL_WIDTH * 10 + 20}px`;

    for (let i = 0; i < cellsCount; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${CELL_WIDTH}px`;
        cell.style.height = `${CELL_HEIGHT}px`;

        BOARD.append(cell);
    }
    return BOARD;
}
