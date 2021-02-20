import { great } from './cli.js';
import {
  getQuestion, getRandomFloat, getAnswer, isEven, getWrongAnswer, getWinnGame,
  getOperationForNumber, isEqual, getOpposite,
} from './support-functions.js';
import {
  TASKFOREVEN, CORRECT, LIMIT, TASKFORCALC,
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

// eslint-disable-next-line import/prefer-default-export
export { evenGames, calcGames };
