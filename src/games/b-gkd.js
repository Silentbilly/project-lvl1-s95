import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../common';
import runGame from '../gameplay';

const description = 'Find the greatest common divisor of given numbers.\n';

const getGkd = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }
  return getGkd(num2, num1 % num2);
};

const game = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  return cons(String(getGkd(num1, num2)), `${num1} ${num2}`);
};

export default () => {
  runGame(description, game);
};
