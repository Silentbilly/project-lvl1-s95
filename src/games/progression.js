import { cons } from 'hexlet-pairs';
import getRandomInt from '../common';
import runGame from '../gameplay';

const description = 'What number is missing in this progression?\n';

const progression = () => {
  const missingIndex = 5;
  const limit = 9;
  const step = getRandomInt(1, 9);
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
  const array = arrayWihoutElement();
  const getStepOfProgression = array[1] - array[0];
  const expectedMissingValue = array[missingIndex - 1] + getStepOfProgression;
  return cons(array.join(' '), `${expectedMissingValue}`);
};

const game = () => progression();

export default () => {
  runGame(description, game);
};
