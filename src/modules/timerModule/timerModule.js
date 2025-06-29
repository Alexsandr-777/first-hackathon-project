import { Module } from '../../core/module.js';
import { removeWithFadeOut } from '../../utils.js';
import './timerStyle.css';

export class TimerModule extends Module {
  constructor() {
    super('timer', 'Таймер отсчёта');
  }

  trigger() {
    const seconds = parseInt(prompt('Введите количество секунд:'), 10);

    if (isNaN(seconds) || seconds <= 0) {
      alert('Некорректное число');
      return;
    }

    const timerEl = document.createElement('div');
    timerEl.className = 'timer-info';
    document.body.append(timerEl);

    let remaining = seconds;
    timerEl.textContent = `Осталось: ${remaining} сек.`;

    const interval = setInterval(() => {
      remaining--;
      timerEl.textContent = `Осталось: ${remaining} сек.`;

      if (remaining <= 0) {
        clearInterval(interval);
        timerEl.textContent = '⏰ Время вышло!';
        setTimeout(() => removeWithFadeOut(timerEl), 2000);
      }
    }, 1000);
  }
}