import { randomNum } from '../src/random.js';
import game from '../src/index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

// поиск наибольшего общего делителя (НОД)
const solve = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  for (let div = Math.min(num1, num2); div > 0; div -= 1) {
    if (num1 % div === 0 && num2 % div === 0) {
      return String(div);
    }
  }
  return undefined;
};

// генерация двух чисел и получение их НОД
const gameData = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const task = `${num1} ${num2}`;
  const expectedAnswer = solve(num1, num2);
  return [task, expectedAnswer];
};

// игра-поиск НОД
const gcd = () => game(gameRule, gameData);

export default gcd;
