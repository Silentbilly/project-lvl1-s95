import readlineSync from 'readline-sync';

const makeQuestion = question => readlineSync.question(`${question} `);

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = makeQuestion('May I have your name?');
  console.log(`Hello, ${name}!`);
};
