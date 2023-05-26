import {
    CELLS_COUNT_EASY,
    CELLS_COUNT_MEDIUM,
    CELLS_COUNT_HARD,
    MINE_COUNT_EASY,
    MINE_COUNT_MEDIUM,
    MINE_COUNT_HARD,
    Levels,
    CELLS_WIDTH_EASY,
    CELLS_WIDTH_HARD,
    CELLS_WIDTH_MEDIUM,
    CELLS_HEIGHT_EASY,
    CELLS_HEIGHT_HARD,
    CELLS_HEIGHT_MEDIUM,
} from "./Consts.js";

import { BoardParameters,createBoardByParameters } from "./createBoard.js";

const WRAPPER = document.createElement("div");
const PANEL = document.createElement("div");
const SCORE = document.createElement("div");
const FACE = document.createElement("div");
const TIME = document.createElement("div");
const BUTTONS = document.createElement("div");
const START = document.createElement("div");
const LEVEL_BTN = document.createElement("select");
const LEVEL_EASY_BTN = document.createElement("option");
const LEVEL_MEDIUM_BTN = document.createElement("option");
const LEVEL_HARD_BTN = document.createElement("option");
const BOARD_CONTAINER = document.createElement("div");
const VOLUME = document.createElement("div");

const init = (level) => {
    WRAPPER.classList.add("wrapper");
    PANEL.classList.add("panel");
    SCORE.classList.add("score");
    FACE.classList.add("face");
    TIME.classList.add("time");

    START.classList.add("start");
    VOLUME.classList.add("volume");
    BUTTONS.classList.add("buttons");

    TIME.textContent = "0";
    SCORE.textContent = "0";
    FACE.textContent = "😐";
    START.textContent = "New game";
    VOLUME.textContent = "Volume";

    LEVEL_EASY_BTN.value = Levels.easy;
    LEVEL_EASY_BTN.textContent = Levels.easy;
    LEVEL_MEDIUM_BTN.value = Levels.medium;
    LEVEL_MEDIUM_BTN.textContent = Levels.medium;
    LEVEL_HARD_BTN.value = Levels.hard;
    LEVEL_HARD_BTN.textContent = Levels.hard;

    LEVEL_BTN.append(LEVEL_EASY_BTN, LEVEL_MEDIUM_BTN, LEVEL_HARD_BTN);
    BUTTONS.append(START, VOLUME, LEVEL_BTN);
    PANEL.append(BUTTONS, SCORE, FACE, TIME);
    WRAPPER.append(PANEL, BOARD_CONTAINER);

    document.body.append(WRAPPER);
    createBoard(level)
    LEVEL_BTN.addEventListener("change", (e) => {
        onLevelChanged(e.target);
    });
};

const createBoard = (level) => {
    let cellsCount = null;
    let mineCount = null;
    let cellWidth = null;
    let cellHeight = null;

    switch (level) {
        case Levels.easy:
            cellsCount = CELLS_COUNT_EASY;
            mineCount = MINE_COUNT_EASY;
            cellWidth = CELLS_WIDTH_EASY;
            cellHeight = CELLS_HEIGHT_EASY;
            break;
        case Levels.medium:
            cellsCount = CELLS_COUNT_MEDIUM;
            mineCount = MINE_COUNT_MEDIUM;
            cellWidth = CELLS_WIDTH_MEDIUM;
            cellHeight = CELLS_HEIGHT_MEDIUM;
            break;
        case Levels.hard:
            cellsCount = CELLS_COUNT_HARD;
            mineCount = MINE_COUNT_HARD;
            cellWidth = CELLS_WIDTH_HARD;
            cellHeight = CELLS_HEIGHT_HARD;
            break;
        default:
            throw new Error(`unknown level game: ${Levels}`);
    }
    const parameters = new BoardParameters(cellWidth, cellHeight, cellsCount);
    const BOARD = createBoardByParameters(parameters);
    BOARD_CONTAINER.append(BOARD);
};

const onLevelChanged = (levelBtn) => {
    BOARD_CONTAINER.firstChild.remove()
    const LEVEL = levelBtn.value;
    if (LEVEL === Levels.easy) {
        createBoard(Levels.easy);
    }
    if (LEVEL === Levels.medium) {
        createBoard(Levels.medium);
    }
    if (LEVEL === Levels.hard) {
        createBoard(Levels.hard);
    }
};
window.addEventListener("load", init(Levels.easy));


// const fillCells = ({ mineCount = null } = {}) => {
//         const CELLS = document.querySelectorAll(".cell");

//         CELLS.forEach((cell) => {
//             const CONTENT = document.createElement("span");
//             cell.append(CONTENT);
//         });
//     };
