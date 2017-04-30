import { cons } from 'hexlet-pairs';
import getRandomInt from '../common';
import runGame from '../gameplay';

const description = 'Is prime the integer?\n';

const game = () => {
  let num = 11; // пытаюсь выполнить тест Люка-Лемера. Не получается например с числом 11..

  const isPrime = () => {
    if (num <= 1) {
      return 'no';
    }
    if ((num % 2 === 0) && num !== 2) {
      return 'no';
    } else {
      let s = 4;
      let m = Math.pow(2, num) - 1;
      for (let i = 1; i < num - 1; i += 1) {
        s = (s * s - 2) % m;
        console.log(s)
      }
      return (s === 0) ? 'yes' : 'no';
    }
  };

  return cons(num, isPrime(num));
};

export default () => {
  runGame(description, game);
};
