import { SWITCH_INPUT } from './index.js';

export const setTheme = (theme) => {
    const root = document.documentElement;
    if (theme === 'dark') {
        SWITCH_INPUT.checked = 'true'
        document.body.classList.add('theme-dark');
        root.style.setProperty('--cell-background-color', '#252525');
        root.style.setProperty('--cell-outline-color', '#fff');
        root.style.setProperty('--up-panel-color', '#252525');
        root.style.setProperty('--bottom-panel-color', '#707070');
        root.style.setProperty('--btn-background-color', '#707070');
        root.style.setProperty('--btn-background-hover', '#fff');
        root.style.setProperty('--output-background-color', '#252525');
        root.style.setProperty('--output-color', '#fff');
        root.style.setProperty('--show-cell-background-color', '#c4c4c4');
      } else {
        document.body.classList.remove('theme-dark');
        root.style.setProperty('--cell-background-color', '#fff');
        root.style.setProperty('--cell-outline-color', '#252525');
        root.style.setProperty('--up-panel-color', '#ecfff9');
        root.style.setProperty('--bottom-panel-color', '#9cc2fa');
        root.style.setProperty('--btn-background-color', '#5683e4');
        root.style.setProperty('--btn-background-hover', '#3a6fe2');
        root.style.setProperty('--output-background-color', '#252525');
        root.style.setProperty('--output-color', '#ff0000');
        root.style.setProperty('--show-cell-background-color', '#d1d1d1');
      }
}