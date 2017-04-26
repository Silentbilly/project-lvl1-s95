import { makeQuestion } from '../common';

export default () => {
  console.log('Welcome to the Brain Games!\n');
  const name = makeQuestion('May I have your name?');
  console.log(`Hello, ${name}!`);
};
