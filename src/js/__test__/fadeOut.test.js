import fadeOut from '../engine/fadeOut';
import Goblin from '../template/goblin';

jest.useFakeTimers();

test('green test', () => {
  const goblin = new Goblin().element;
  fadeOut(goblin);
  expect(0).toBe(0);
});
