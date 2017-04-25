import readlineSync from 'readline-sync';

const makeQuestion = question => readlineSync.question(`${question} `);
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const itercount = 3;
const greeting = 'Welcome to the Brain Games!';


const runGame = (description) => {
  console.log(greeting);
  console.log(description);
  };

export const runBrainGames = () => {
  const description = '';
  runGame(description);
  const name = makeQuestion('May I have your name?');
  console.log(`Hello, ${name}!`);
  };

export const runEven = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".\n';
  runGame(description);
  const name = makeQuestion('May I have your name?');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < itercount; i +=1 ) {
    const question = getRandomInt(0, 100);
    console.log(`Question: ${question}`);
    const answer = makeQuestion('Your answer:');
    const expectedAnswer = question % 2 === 0 ? 'yes' : 'no';
    if (expectedAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
