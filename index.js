import {
  CellsCount,
  MineCount,
  Levels,
  CellsWidth,
  CellsHeight,
} from './Consts.js';

import { BoardParameters, createBoardByParameters } from './createBoard.js';
import { displayResults } from './displayResults.js';
import { fillCellsWithMines } from './fillCellsWithMines.js';
import { fillCellsWithNumbers } from './fillCellsWithNumbers.js';
import { initPanel } from './initPanel.js';
import { loadSettings } from './loadSettings.js';
import { muteVolume } from './muteVolume.js';
import { onCellClick } from './onCellClick.js';
import { onCellContextMenu } from './onCellContextMenu.js';
import { onLevelChanged } from './onLevelChanged.js';
import { setCoordsForCells } from './setCoordsForCells.js';

import { startNewGame } from './startNewGame.js';

export const WRAPPER = document.createElement('div');
export const PANEL = document.createElement('div');
export const SCORE = document.createElement('div');
export const FACE = document.createElement('div');
export const TIME = document.createElement('div');
export const DROPDOWN = document.createElement('div');
export const START = document.createElement('div');
export const LEVEL_DROPDOWN = document.createElement('select');
export const LEVEL_EASY_OPTION = document.createElement('option');
export const LEVEL_MEDIUM_OPTION = document.createElement('option');
export const LEVEL_HARD_OPTION = document.createElement('option');
export const BOARD_CONTAINER = document.createElement('div');
export const VOLUME = document.createElement('div');
export const SWITCH = document.createElement('label');
export const SWITCH_INPUT = document.createElement('input');
export const SWITCH_SPAN = document.createElement('span');
export const TABLE = document.createElement('div');

export let isFirstMove = true;

export const init = (level) => {
  WRAPPER.classList.add('wrapper');
  BOARD_CONTAINER.classList.add('board_container');

  WRAPPER.append(BOARD_CONTAINER);
  document.body.append(WRAPPER);
  initPanel();
  createBoard(level);

  LEVEL_DROPDOWN.addEventListener('change', (e) => {
    onLevelChanged(e.target);
  });
  BOARD_CONTAINER.addEventListener('contextmenu', onCellContextMenu);
};

export const createBoard = (level) => {
  let cellsCount = null;
  let mineCount = null;
  let cellWidth = null;
  let cellHeight = null;

  isFirstMove = true;

  switch (level) {
    case Levels.easy:
      cellsCount = CellsCount.easy;
      mineCount = MineCount.easy;
      cellWidth = CellsWidth.easy;
      cellHeight = CellsHeight.easy;
      break;
    case Levels.medium:
      cellsCount = CellsCount.medium;
      mineCount = MineCount.medium;
      cellWidth = CellsWidth.medium;
      cellHeight = CellsHeight.medium;
      break;
    case Levels.hard:
      cellsCount = CellsCount.hard;
      mineCount = MineCount.hard;
      cellWidth = CellsWidth.hard;
      cellHeight = CellsHeight.hard;
      break;
    default:
      throw new Error(`unknown level game: ${Levels}`);
  }
  const parameters = new BoardParameters(cellWidth, cellHeight, cellsCount);
  const BOARD = createBoardByParameters(parameters);
  BOARD.addEventListener('click', (e) => {
    if (isFirstMove) {
      fillCellsWithMines(mineCount, e.target);
      fillCellsWithNumbers(cellsCount);
      isFirstMove = false;
    }
    onCellClick(e.target);
  });
  BOARD_CONTAINER.append(BOARD);
  setCoordsForCells(cellsCount);
  loadSettings();
};

VOLUME.addEventListener('click', () => muteVolume());
START.addEventListener('click', () => startNewGame());

window.addEventListener('load', init(Levels.easy));

displayResults();
