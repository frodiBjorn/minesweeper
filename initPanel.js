import {
  PANEL,
  SCORE,
  FACE,
  TIME,
  START,
  VOLUME,
  DROPDOWN,
  WRAPPER,
  SWITCH,
  SWITCH_INPUT,
  SWITCH_SPAN,
  TABLE,
} from './index.js';
import { initLevelDropdown } from './initLevelDropdown.js';
import { togleTheme } from './toggleTheme.js';

export const initPanel = () => {
  PANEL.classList.add('panel');
  SCORE.classList.add('score');
  FACE.classList.add('face');
  TIME.classList.add('time');
  TABLE.classList.add('results-table');

  SWITCH.classList.add('switch');
  SWITCH_INPUT.id = 'slider';
  SWITCH_INPUT.type = 'checkbox';
  SWITCH_INPUT.addEventListener('change', togleTheme);
  SWITCH_SPAN.classList.add('slider');
  SWITCH_SPAN.classList.add('round');

  START.classList.add('start');
  VOLUME.classList.add('volume');
  DROPDOWN.classList.add('dropdown');

  TIME.textContent = '0';
  SCORE.textContent = 0;
  FACE.style.backgroundImage = 'url(./assets/DoomNormal.png)';
  START.textContent = 'New game';
  VOLUME.textContent = 'Volume';

  DROPDOWN.append(START, VOLUME);

  initLevelDropdown();
  SWITCH.append(SWITCH_INPUT, SWITCH_SPAN);
  DROPDOWN.append(SWITCH);

  PANEL.append(SCORE, FACE, TIME);
  WRAPPER.prepend(PANEL);
  WRAPPER.append(TABLE)
};
