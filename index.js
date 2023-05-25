import { createBoard } from "./createBoard.js";

let cellsCount = 100;
let MINE_COUNT = 10;
const init = () => {
    const WRAPPER = document.createElement("div");
    const PANEL = document.createElement("div");
    const SCORE = document.createElement("div");
    const FACE = document.createElement("div");
    const TIME = document.createElement("div");
    const BOARD = createBoard(cellsCount, MINE_COUNT);
    const BUTTONS = document.createElement("div");
    const START = document.createElement("div");
    const VOLUME = document.createElement("div");

    WRAPPER.classList.add("wrapper");
    PANEL.classList.add("panel");
    SCORE.classList.add("score");
    FACE.classList.add("face");
    TIME.classList.add("time");
    BOARD.classList.add("board");
    START.classList.add("start");
    VOLUME.classList.add("volume");
    BUTTONS.classList.add("buttons");

    TIME.textContent = "0";
    SCORE.textContent = "0";
    FACE.textContent = "😐";
    START.textContent = "Новая игра";
    VOLUME.textContent = "Звук";

    BUTTONS.append(START);
    BUTTONS.append(VOLUME);
    PANEL.append(BUTTONS, SCORE, FACE, TIME);
    WRAPPER.append(PANEL);
    WRAPPER.append(BOARD);

    document.body.append(WRAPPER);
    fillCells();
};

const fillCells = (MINE_COUNT = 10) => {
    const CELLS = document.querySelectorAll(".cell");

    CELLS.forEach((cell) => {
        const CONTENT = document.createElement("span");
        cell.append(CONTENT);
    });
};

window.addEventListener("load", init);
