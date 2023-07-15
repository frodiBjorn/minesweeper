import { TIME } from './index.js';

export let timerId = null;
export let startTime = null;

export const startTimer = () => {
  startTime = Date.now();
  timerId = setInterval(() => {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    TIME.textContent = elapsedTime;
  }, 1000);
};

export const clearTime = () => {
  clearInterval(timerId);
  timerId = null;
  TIME.textContent = '0';
};
