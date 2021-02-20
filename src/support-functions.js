import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const getRandomFloat = (min, max) => {
  const randInt = Math.floor(Math.random() * (max - min + 1)) + min;
  const result = Math.floor(randInt);
  return result;
};

const getQuestion = (num) => `Question: ${num}`;

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const getWrongAnswer = (answer) => {
  const opposite = answer === 'yes' ? "'no'" : "'yes'";
  console.log(`'${answer}' is wrong answer ;(.`);
  console.log(`Correct answer was ${opposite}.\nLet's try again, Bill!"`);
};

const getWinnGame = (name) => {
  console.log(`Congratulations, ${name}!`);
};

// eslint-disable-next-line object-curly-newline
export { isEven, getRandomFloat, getQuestion, getAnswer, getWrongAnswer, getWinnGame };
