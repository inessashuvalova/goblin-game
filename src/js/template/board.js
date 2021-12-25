export default class Board {
  constructor() {
    this.activeHole = 0;

    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');

    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.wrapper.append(this.container);

    this.container.innerHTML = `
      <h1 class="title">WHACK THE GOBLIN!</h1>
      <div class="counter">
        <div class="counter__box" id="counter">
          WHACKED:&nbsp;<span id="whacked">0</span>&nbsp;
          MISSED:&nbsp;<span id="lost">0</span>
        </div>
        <div class="counter__box" id="controls">
          <button data-id="action-restart" class="btn visually-hidden">NEW GAME</button>
        </div>
      </div>
      <div class="alert-box start visually-hidden">WHACK THEM ALL!</div>
      <div class="alert-box failure visually-hidden">GOBLINS WIN! YOU LOOSE!</div>`;

    this.holeArray = [];
    for (let i = 0; i < 16; i += 1) {
      this.holeArray[i] = document.createElement('div');
      this.holeArray[i].classList.add('hole');
      this.holeArray[i].setAttribute('id', `hole${i}`);
      this.container.append(this.holeArray[i]);
    }
    document.body.append(this.wrapper);
  }
}
