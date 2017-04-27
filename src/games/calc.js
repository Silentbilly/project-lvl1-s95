import { cons } from 'hexlet-pairs';
import getRandomInt from '../common';
import runGame from '../gameplay';

const description = 'What is the result of the expression?\n';

const arr = ['+', '-', '*'];
const getRandomOperator = () => arr[Math.floor(Math.random() * 3)];

const calculateRand = (num1, num2, operator) => {
  let expected = 0;
  switch (operator) {
    case '+':
      expected = num1 + num2;
      break;
    case '-':
      expected = num1 - num2;
      break;
    case '*':
      expected = num1 * num2;
      break;
    default:
  }
  return cons(String(expected), `${num1} ${operator} ${num2}`);
};

const game = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const operator = getRandomOperator();
  return calculateRand(num1, num2, operator);
};

export default () => {
  runGame(description, game);
};
