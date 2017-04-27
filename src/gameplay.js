import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const makeQuestion = question => readlineSync.question(`${question} `);

console.log('Welcome to the Brain Games!');

export default (description, game) => {
  console.log(description);
  const name = makeQuestion('May I have your Name?');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < 3; i += 1) {
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
