#!/usr/bin/env node
import makeQuestion from '../index';

console.log('Welcome to the Brain Games!');
const name = makeQuestion('May I have your name?');
console.log(`Hello, ${name}!`);
