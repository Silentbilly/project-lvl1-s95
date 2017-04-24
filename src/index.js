import readlineSync from 'readline-sync';

export const makeQuestion = question => readlineSync.question(`${question}`);
