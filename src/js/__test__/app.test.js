import GamePlay from '../engine/gamePlay';
import app from '../app';

jest.mock('../engine/gamePlay');

beforeEach(() => {
  GamePlay.mockClear();
});

test('new GamePlay wont be created automatically', () => {
  expect(GamePlay).not.toHaveBeenCalled();
});

test('app() should create new GamePlay', () => {
  app();
  expect(GamePlay).toHaveBeenCalledTimes(1);
});

test('app() should call method init', () => {
  expect(GamePlay).not.toHaveBeenCalled();
  app();
  expect(GamePlay).toHaveBeenCalledTimes(1);

  const gamePlayInstance = GamePlay.mock.instances[0];
  const mockInit = gamePlayInstance.init;

  expect(mockInit).toHaveBeenCalledTimes(1);
});
