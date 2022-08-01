import player from '../playerControlJs/playerMusic.js';

const before = document.getElementById('button_before'),
      next   = document.getElementById('button_after');

/* const path = function(file) {
  return `files/${file}`
}; */

window.addEventListener('load', () => {
  player.start();
}) 