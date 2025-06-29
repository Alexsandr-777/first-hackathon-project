import { Module } from '../../core/module.js';

export class BackgroundModule extends Module {
  constructor() {
    super('background', 'Случайный фон');
  }

  trigger() {
    const color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
    document.body.style.backgroundColor = color;
  }
}
