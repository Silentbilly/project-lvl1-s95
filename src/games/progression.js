import { cons } from 'hexlet-pairs';
import getRandomInt from '../common';
import runGame from '../gameplay';

const description = 'What number is missing in this progression?';

const arrayFillProgression = () => {
  const arr = [];
  arr[0] = getRandomInt(0, 9);
  for (let i = 0; i < limit; i += 1) {
    arr.push(arr[i] + step);
  }
  return arr;
};
  
const arrayWihoutElement = () => {
  const newArr = arrayFillProgression();
  newArr.splice(missingIndex, 1, '..');
  return newArr;
};
  

const game = () => {
  const missingIndex = 5;
  const limit = 9;
  const step = getRandomInt(1, 9);
  const array = arrayWihoutElement();
  const getStepOfProgression = array[1] - array[0];
  const expectedMissingValue = array[missingIndex - 1] + getStepOfProgression;
  
  return cons(array.join(' '), `${expectedMissingValue}`);
};

export default () => {
  runGame(description, game);
};
