import Board from '../template/board';

test('instance of Board should be created', () => {
  const board = new Board();
  expect(board).toBeDefined();
});

test('instance of Board should create div.wrapper, div.container', () => {
  const board = new Board();
  expect(board.wrapper.className).toBe('wrapper');
  expect(board.container.className).toBe('container');
});

test('instance of Board should generate array of div.hole', () => {
  const board = new Board();
  expect(board.holeArray.length).toBe(16);
  expect(board.holeArray[0].className).toBe('hole');
  expect(board.holeArray[0].id).toBe('hole0');
});
