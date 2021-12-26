export default class GoblinField {
  constructor(fieldSize) {
    this.fieldSize = fieldSize;
  }

  draw() {
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
    let n = 0;
    for (let i = 0; i < this.fieldSize; i += 1) {
      const row = document.createElement('div');
      row.className = 'row';
      container.insertAdjacentElement('afterbegin', row);
      for (let j = 0; j < this.fieldSize; j += 1) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell_${n}`;
        row.insertAdjacentElement('beforeend', cell);
        n += 1;
      }
    }
  }
}
