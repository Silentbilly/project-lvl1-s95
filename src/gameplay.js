import { car, cdr } from 'hexlet-pairs';
import { makeQuestion } from './common';

console.log('Welcome to the Brain Games!');

const iterCount = 3;

export default (description, game) => {
  const name = makeQuestion('May I have your Name?');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < iterCount; i += 1) {
    const expectedWithQuestion = game();
    const expected = car(expectedWithQuestion);
    const question = cdr(expectedWithQuestion);
    console.log(`Question: ${question}`);
    const answer = makeQuestion('Your answer:');
    if (expected === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
