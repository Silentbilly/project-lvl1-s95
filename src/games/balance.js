import { cons } from 'hexlet-pairs';
import getRandomInt from '../common';
import runGame from '../gameplay';

const description = 'Balance the given number.\n';

const arrayBalance = (arr) => {
  const maxArrayValue = Math.max.apply(null, arr);
  const minArrayValue = Math.min.apply(null, arr);
  const newArr = arr;
  const maxValueIndex = arr.indexOf(maxArrayValue);
  const minValueIndex = arr.indexOf(minArrayValue);
  if (maxArrayValue - minArrayValue > 1) {
    newArr[maxValueIndex] = maxArrayValue - 1;
    newArr[minValueIndex] = minArrayValue + 1;
    return arrayBalance(newArr);
  }
  return arr.sort();
};
//  балансировочная функция

const arrayToString = arr => arr.join('');
//  преобразование массива в строку

const minNumberLength = 3;
const maxNumberLength = 5;
//  минимальная и максимальная длина числа

const arrayFillRandom = () => {
  const limit = getRandomInt(minNumberLength, maxNumberLength);
  const arr = [];
  for (let i = 0; i < limit; i += 1) {
    arr[i] = getRandomInt(0, 9);
  }
  return arr;
};
//  создание массива, заполненного случайными числами

const game = () => {
  const num = arrayFillRandom();
  return cons(`${arrayToString(num)}`, arrayToString(arrayBalance(num)));
};

export default () => {
  runGame(description, game);
};
