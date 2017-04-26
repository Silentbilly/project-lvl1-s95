import readlineSync from 'readline-sync';

export const makeQuestion = question => readlineSync.question(`${question} `);
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
