import { great } from './cli.js';
import {
  getQuestion, getRandomFloat, getAnswer, isEven, getWrongAnswer, getWinnGame,
  getOperationForNumber, isEqual, getOpposite, gcd, getProgression,
  getStringOfProgression, getValueOfIndex, isPrime,
} from './support-functions.js';
import {
  TASKFOREVEN, CORRECT, LIMIT, TASKFORCALC, TASKFORGCD, TASKFORPROGRESSION,
  TASKFORPRIME,
} from './variables.js';

/* In the game 'evenGames' you need to guess an even number or not */
const evenGames = () => {
  const name = great();
  console.log(TASKFOREVEN);
  let i = 0;
  while (i < LIMIT) {
    const randInt = getRandomFloat(1, 40);
    const question = getQuestion(randInt);
    console.log(question);
    const answer = getAnswer();
    if ((isEven(randInt) && answer === 'yes') || (!isEven(randInt) && answer === 'no')) {
      console.log(CORRECT);
      i += 1;
    } else {
      return getWrongAnswer(answer, getOpposite(answer), name);
    }
  }
  return getWinnGame(name);
};

/* In the game 'calcGames' you need to calculate the result of the operation */
const calcGames = () => {
  const name = great();
  console.log(TASKFORCALC);
  const operators = ['+', '-', '*'];
  let i = 0;
  while (i < LIMIT) {
    const firstNum = getRandomFloat(1, 30);
    const secondNum = getRandomFloat(1, 30);
    const operatorIndex = getRandomFloat(0, 2);
    const operator = operators[operatorIndex];
    const result = getOperationForNumber(firstNum, secondNum, operator);
    const question = getQuestion(`${firstNum} ${operator} ${secondNum}`);
    console.log(question);
    const answer = Number(getAnswer());
    if (isEqual(answer, result)) {
      console.log(CORRECT);
      i += 1;
    } else {
      return getWrongAnswer(answer, result, name);
    }
  }
  return getWinnGame(name);
};

/* In the game 'gcdGames' you need to guess the greatest common divisor */
const gcdGames = () => {
  const name = great();
  console.log(TASKFORGCD);
  let i = 0;
  while (i < LIMIT) {
    const firstNum = getRandomFloat(1, 50);
    const secondNum = getRandomFloat(50, 100);
    const result = gcd(firstNum, secondNum);
    const question = getQuestion(`${firstNum} ${secondNum}`);
    console.log(question);
    const answer = Number(getAnswer());
    if (isEqual(result, answer)) {
      console.log(CORRECT);
      i += 1;
    } else {
      return getWrongAnswer(answer, result, name);
    }
  }
  return getWinnGame(name);
};

/* In the game 'progression Games' you need to guess the missing element in the progression */
const progressionGames = () => {
  const name = great();
  console.log(TASKFORPROGRESSION);
  let i = 0;
  while (i < LIMIT) {
    const start = getRandomFloat(1, 40);
    const stop = getRandomFloat(60, 100);
    const step = getRandomFloat(2, 4);
    const index = getRandomFloat(2, 12);
    const progression = getProgression(start, stop, step);
    const valueOfIndex = getValueOfIndex(progression, index);
    const stringOfProgression = getStringOfProgression(progression, index);
    const question = getQuestion(stringOfProgression);
    console.log(question);
    const answer = Number(getAnswer());
    if (isEqual(valueOfIndex, answer)) {
      console.log(CORRECT);
      i += 1;
    } else {
      return getWrongAnswer(answer, valueOfIndex, name);
    }
  }
  return getWinnGame(name);
};

/* In the game 'prime Games' you have to guess a prime number or not */
const primeGames = () => {
  const name = great();
  console.log(TASKFORPRIME);
  let i = 0;
  while (i < LIMIT) {
    const num = getRandomFloat(1, 50);
    const question = getQuestion(num);
    console.log(question);
    const answer = getAnswer();
    if ((isPrime(num) && answer === 'yes') || (!isPrime(num) && answer === 'no')) {
      console.log(CORRECT);
      i += 1;
    } else {
      return getWrongAnswer(answer, getOpposite(answer), name);
    }
  }
  return getWinnGame(name);
};

// eslint-disable-next-line import/prefer-default-export
export {
  evenGames, calcGames, gcdGames,
  progressionGames, primeGames,
};
