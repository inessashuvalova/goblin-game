import GamePlay from '../engine/gamePlay';

let gamePlay;

beforeEach(() => {
  gamePlay = new GamePlay();
});

test('instance of GamePlay, Board and Goblin should be created', () => {
  expect(gamePlay).toBeDefined();
  expect(gamePlay.board).toBeDefined();
  expect(gamePlay.goblin).toBeDefined();
});

test('init() should call Listners and startGame', () => {
  gamePlay.addGoblinListener = jest.fn();
  gamePlay.addNewGameListener = jest.fn();
  gamePlay.startGame = jest.fn();
  gamePlay.init();
  expect(gamePlay.addGoblinListener).toHaveBeenCalled();
  expect(gamePlay.addNewGameListener).toHaveBeenCalled();
  expect(gamePlay.startGame).toHaveBeenCalled();
});
