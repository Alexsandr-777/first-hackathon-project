import { Module } from '../../core/module.js';
import { startColorChangeModule } from './colorChangeSimulator.js';
import './styles/colorChangeStyles.css';

export class ColorChangeModule extends Module {
  constructor() {
    super('color', 'Смена цвета');
  }
  trigger() {
    startColorChangeModule();
  }
}