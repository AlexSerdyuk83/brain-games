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

const getOpposite = (str) => (str === 'yes' ? "'no'" : "'yes'");

const getWrongAnswer = (answer, result, name) => {
  console.log(`'${answer}' is wrong answer ;(.`);
  console.log(`Correct answer was ${result}.\nLet's try again, ${name}!"`);
};

const getWinnGame = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const getOperationForNumber = (num1, num2, operator) => {
  const result = { '+': num1 + num2, '-': num1 - num2, '*': num1 * num2 };
  return result[operator];
};

const isEqual = (num1, num2) => num1 === num2;

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const getProgression = (start, stop, step) => {
  const result = [];
  let i = start;
  while (i <= stop) {
    result.push(i);
    i += step;
  }
  return result.slice(0, 10);
};

const getValueOfIndex = (progression, index) => {
  const result = progression.slice(index, index + 1);
  return Number(result);
};

const getStringOfProgression = (progression, index) => {
  const value = '...';
  progression.splice(index, 1, value);
  return progression.join(',');
};

const isPrime = (num) => {
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

export {
  isEven, getRandomFloat, getQuestion, getAnswer, getWrongAnswer, getWinnGame,
  getOperationForNumber, isEqual, getOpposite, gcd, getProgression,
  getStringOfProgression, getValueOfIndex, isPrime,
};
