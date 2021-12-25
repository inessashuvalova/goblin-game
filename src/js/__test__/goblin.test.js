import Goblin from '../template/goblin';

test('instance of Goblin should be created', () => {
  const goblin = new Goblin();
  expect(goblin).toBeDefined();
});

test('instance of Goblin should have class goblin', () => {
  const goblin = new Goblin();
  expect(goblin.element.className).toBe('goblin');
});
