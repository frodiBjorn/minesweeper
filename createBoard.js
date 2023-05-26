export function createBoardByParameters(parameters) {
    if(!(parameters instanceof BoardParameters)){
        throw new Error('Invalid Parameters');
    }

    const BOARD = document.createElement("div");
    BOARD.classList.add("board");


    for (let i = 0; i < parameters.cellsCount; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${parameters.cellWidth}px`;
        cell.style.height = `${parameters.cellHeight}px`;

        BOARD.append(cell);
    }
    return BOARD;
}

export class BoardParameters {
    constructor(cellWidth, cellHeight, cellsCount) {
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
        this.cellsCount = cellsCount;
    }
}
