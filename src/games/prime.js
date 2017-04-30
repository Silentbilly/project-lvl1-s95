import { cons } from 'hexlet-pairs';
import getRandomInt from '../common';
import runGame from '../gameplay';

const description = 'Is prime the integer?\n';

const game = () => {
  const num = getRandomInt(0, 100);

  const isPrime = () => {
    if (num === 2) return true;
    else if (num <= 1 || num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return cons(num, isPrime(num) ? 'yes' : 'no');
};

export default () => {
  runGame(description, game);
};
