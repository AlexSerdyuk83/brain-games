import readlineSync from 'readline-sync';
import { WELCOM } from './variables.js';

const great = () => {
  console.log(WELCOM);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
// eslint-disable-next-line import/prefer-default-export
export { great };
