import GoblinField from './goblinField';
import GoblinLogic from './goblinLogic';

export default class goblinGame {
  constructor(fieldsize) {
    this.fieldSize = fieldsize;
  }

  startGame() {
    this.field = new GoblinField(this.fieldSize);
    this.field.draw();
    this.game = new GoblinLogic(this.fieldSize);
    const container = document.getElementById('container');
    const localTop = window.localStorage.getItem('topScore');

    this.startBtn = document.createElement('button');
    this.startBtn.id = 'start-btn';
    this.startBtn.innerText = 'Погнали!';

    this.scores = document.createElement('div');
    this.scores.id = 'scores';
    this.topScore = document.createElement('p');
    this.topScore.innerHTML = `Лучший счет: <span id="top-score">${localTop || 0}</span>`;
    this.currentScore = document.createElement('p');
    this.currentScore.innerHTML = 'Текущий счет: <span id="current-score">0</span>';

    this.scores.insertAdjacentElement('afterbegin', this.topScore);
    this.scores.insertAdjacentElement('beforeend', this.currentScore);
    container.insertAdjacentElement('beforeend', this.scores);
    container.insertAdjacentElement('beforeend', this.startBtn);
    this.startBtn.classList.add('visible');
    this.startBtn.addEventListener('click', () => {
      this.startBtn.classList.toggle('visible');
      document.getElementById('current-score').innerText = 0;
      this.game.try();
    });
  }
}
