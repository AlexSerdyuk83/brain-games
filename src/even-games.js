import { great } from './cli.js';
import {
  getQuestion, getRandomFloat, getAnswer, isEven, getWrongAnswer, getWinnGame,
} from './support-functions.js';
import { TASKFOREVEN, CORRECT } from './variables.js';

const evenGames = () => {
  const name = great();
  console.log(TASKFOREVEN);
  let i = 0;
  const limit = 3;
  while (i < limit) {
    const randInt = getRandomFloat(1, 40);
    const question = getQuestion(randInt);
    console.log(question);
    const answer = getAnswer();
    if ((isEven(randInt) && answer === 'yes') || (!isEven(randInt) && answer === 'no')) {
      console.log(CORRECT);
      i += 1;
    } else {
      return getWrongAnswer(answer);
    }
  }
  return getWinnGame(name);
};

// eslint-disable-next-line import/prefer-default-export
export { evenGames };
