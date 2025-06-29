import { Module } from '../../core/module.js';

export class ShapeModule extends Module {
  constructor() {
    super('shape', 'Случайная фигура');
  }

  trigger() {
    const shape = document.createElement('div');

    const size = 30 + Math.random() * 100;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;

    shape.style.position = 'fixed';
    shape.style.left = `${Math.random() * (window.innerWidth - size)}px`;
    shape.style.top = `${Math.random() * (window.innerHeight - size)}px`;

    shape.style.background = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
    shape.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    shape.style.zIndex = 1000;
    shape.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
    shape.style.transition = 'opacity 0.5s ease';

    document.body.append(shape);

    // Удаление через 3 секунды
    setTimeout(() => {
      shape.style.opacity = '0';
      setTimeout(() => shape.remove(), 500);
    }, 3000);
  }
}
