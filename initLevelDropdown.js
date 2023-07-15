import { Levels } from './Consts.js';
import {
  LEVEL_EASY_OPTION,
  LEVEL_MEDIUM_OPTION,
  LEVEL_HARD_OPTION,
  LEVEL_DROPDOWN,
  DROPDOWN,
  PANEL,
} from './index.js';

export const initLevelDropdown = () => {
  LEVEL_EASY_OPTION.value = Levels.easy;
  LEVEL_EASY_OPTION.textContent = Levels.easy;
  LEVEL_MEDIUM_OPTION.value = Levels.medium;
  LEVEL_MEDIUM_OPTION.textContent = Levels.medium;
  LEVEL_HARD_OPTION.value = Levels.hard;
  LEVEL_HARD_OPTION.textContent = Levels.hard;

  LEVEL_DROPDOWN.prepend(
    LEVEL_EASY_OPTION,
    LEVEL_MEDIUM_OPTION,
    LEVEL_HARD_OPTION
  );
  DROPDOWN.append(LEVEL_DROPDOWN);
  PANEL.append(DROPDOWN);
};
