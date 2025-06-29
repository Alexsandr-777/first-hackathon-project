import { createColorChangeScreen } from './dom/colorChange.js';
import { random } from '../../utils.js'

export function startColorChangeModule() {
  const screen = createColorChangeScreen();
  screen.style.backgroundColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`
  const interval = setInterval(() => {
    screen.style.backgroundColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`
  }, 1000);
  setTimeout(() => {
    clearInterval(interval)
    screen.remove()
  }, 5000);
};