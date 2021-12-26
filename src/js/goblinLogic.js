import img from '../img/goblin.png';

export default class goblinLogic {
  constructor(fieldSize) {
    this.fieldSize = fieldSize;
    this.goblin = document.createElement('img');
    this.goblin.src = img;
    this.currentPos = 0;
    this.lose = 0;
    this.score = 0;
    this.timeout = null;
    this.topScore = window.localStorage.getItem('topScore');

    document.querySelectorAll('.cell').forEach((cell) => cell.addEventListener('click', (ev) => {
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
        if (ev.target === this.goblin) {
          document.getElementById('current-score').innerText = `${this.score += 1}`;
          this.try();
        } else { this.losePoint(); }
      }
    }));
  }

  generateRand() {
    let rand = this.currentPos;
    while (rand === this.currentPos) {
      rand = Math.floor(Math.random() * (this.fieldSize ** 2 - 1));
    }
    return rand;
  }

  endGame() {
    this.lose = 0;
    if (this.score > this.topScore) {
      this.topScore = this.score;
      window.localStorage.setItem('topScore', this.topScore);
      document.getElementById('top-score').innerText = this.topScore;
    }
    this.score = 0;
    document.getElementById(`cell_${this.currentPos}`).removeChild(this.goblin);
    document.getElementById('start-btn').classList.toggle('visible');
    this.timeout = null;
  }

  losePoint() {
    this.lose += 1;
    if (this.lose === 5) {
      this.endGame();
    } else { window.clearTimeout(this.timeout); this.try(); }
  }

  try() {
    this.drawGoblin();
    this.timeout = window.setTimeout(() => {
      this.losePoint();
    }, 1000);
  }

  drawGoblin() {
    if (this.timeout !== null) document.getElementById(`cell_${this.currentPos}`).removeChild(this.goblin);
    this.currentPos = this.generateRand();
    document.getElementById(`cell_${this.currentPos}`).insertAdjacentElement('afterbegin', this.goblin);
  }
}
