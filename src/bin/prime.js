import { cons } from 'hexlet-pairs';
import getRandomInt from '../common';
import runGame from '../gameplay';

const description = 'Is prime the integer?\n';

const game = () => {
  const num = getRandomInt(0, 100);
  const isPrime = num => {
    if (num === 1) {
      return 'no';
    }
    return (Math.pow(num -1, num - 1) % num === 1 % num) ? 'yes' : 'no';
  };
//  Малая теорема Ферма и исключение единицы;
  return cons(num, isPrime(num));
};

export default () => {
  runGame(description, game);
};
