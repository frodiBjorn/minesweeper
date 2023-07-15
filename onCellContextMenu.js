export const flagSound = new Audio('./assets/sounds/tick.mp3');
export const onCellContextMenu = (e) => {
  e.preventDefault();

  const cell = e.target;
  if (!cell.classList.contains('show') && cell.tagName !== 'SPAN') {
    cell.classList.toggle('flag');
    flagSound.play();
  }
};
