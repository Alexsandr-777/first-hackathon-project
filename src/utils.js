
export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}


export function randomColor() {
  return `hsl(${random(0, 360)}, 70%, 60%)`;
}


export function removeWithFadeOut(element, timeout = 500) {
  element.style.transition = 'opacity 0.5s ease';
  element.style.opacity = '0';
  setTimeout(() => element.remove(), timeout);
}
