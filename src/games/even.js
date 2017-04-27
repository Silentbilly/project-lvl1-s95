import { cons } from 'hexlet-pairs';
import getRandomInt from '../common';
import runGame from '../gameplay';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const num = getRandomInt(0, 100);
  return cons(isEven(num), num);
};

export default () => {
  runGame(description, game);
};
