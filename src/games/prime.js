import { cons } from 'hexlet-pairs';
import getRandomInt from '../common';
import runGame from '../gameplay';

const description = 'Is prime the integer?\n';

const game = () => {
  const num = getRandomInt(0, 100);

  const prime = () => {
    if (num === 2) return true;
    else if (num <= 1 || num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const isPrime = () => (prime(num) ? 'yes' : 'no');

  return cons(num, isPrime(num));
};

export default () => {
  runGame(description, game);
};
