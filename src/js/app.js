import GamePlay from './engine/gamePlay';

export default function app() {
  const gamePlay = new GamePlay();
  gamePlay.init();
}

app();
