import Goblin from '../template/goblin';
import Board from '../template/board';
import fadeOut from './fadeOut';

export default class GamePlay {
  constructor() {
    this.goblin = new Goblin().element;
    this.board = new Board();
    this.whacked = document.getElementById('whacked');
    this.lost = document.getElementById('lost');
    this.whackedCount = 0;
    this.missCount = 0;
    this.timerId = null;
  }

  init() {
    this.missCount = 0;
    this.addGoblinListener();
    this.addNewGameListener();
    this.startGame();
  }

  static getHole(index) {
    return document.getElementById(`hole${index}`);
  }

  addGoblinListener() {
    this.goblin.addEventListener('click', (event) => {
      this.whackGoblin(event.target.closest('.hole'));
    });
  }

  addNewGameListener() {
    document.querySelector('.btn').addEventListener(
      'click',
      (event) => {
        event.preventDefault();
        this.reset();
      },
      false,
    );
  }

  async startGame() {
    const start = document.querySelector('.start');
    start.classList.remove('visually-hidden');
    await fadeOut(start);
    start.classList.add('visually-hidden');
    start.style.opacity = 1;

    this.missCount = -1;
    this.timerId = setInterval(() => {
      let newHole = this.board.activeHole;
      while (newHole === this.board.activeHole) {
        newHole = Math.floor(Math.random() * this.board.holeArray.length);
      }
      this.board.activeHole = newHole;
      this.counter(this.goblin);
      // eslint-disable-next-line no-unused-expressions
      this.missCount === 5 ? this.endGame() : this.moveGoblin(this.board.activeHole);
    }, 1000);
  }

  moveGoblin(index) {
    GamePlay.getHole(index).append(this.goblin);
    this.goblin.removeAttribute('id');
  }

  whackGoblin(point) {
    this.goblin.remove();
    this.goblin.setAttribute('id', 'whacked');
    point.classList.add('bloody');
  }

  counter(target) {
    if (target.id === 'whacked') {
      this.whackedCount += 1;
      this.whacked.textContent = this.whackedCount;
    } else {
      this.missCount += 1;
      this.lost.textContent = this.missCount;
    }
  }

  async endGame() {
    this.goblin.remove();
    clearInterval(this.timerId);

    const failure = document.querySelector('.failure');
    failure.classList.remove('visually-hidden');
    await fadeOut(failure);
    failure.classList.add('visually-hidden');
    failure.style.opacity = 1;

    document.querySelector('.btn').classList.remove('visually-hidden');
  }

  reset() {
    this.whackedCount = 0;
    this.missCount = 0;
    this.whacked.textContent = this.whackedCount;
    this.lost.textContent = this.missCount;
    document.querySelector('.btn').classList.add('visually-hidden');
    document.querySelector('.alert-box').classList.add('visually-hidden');
    document.querySelectorAll('.hole').forEach((element) => element.classList.remove('bloody'));
    this.startGame();
  }
}
