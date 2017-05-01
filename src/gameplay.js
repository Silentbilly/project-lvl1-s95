import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const questionCount = 3;

export default (description, game) => {
  console.log(`${description}\n`);
  const name = readlineSync.question('May I have your Name?');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < questionCount; i += 1) {
    const expectedWithQuestion = game();
    const question = car(expectedWithQuestion);
    const expected = cdr(expectedWithQuestion);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer:');
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
