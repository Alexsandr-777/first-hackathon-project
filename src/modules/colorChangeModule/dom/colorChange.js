export function createColorChangeScreen() {
  const screen = document.createElement('div');
  screen.classList.add('color-change-screen');
  // растягиваем на весь экран
  document.body.append(screen);
  return screen;
}