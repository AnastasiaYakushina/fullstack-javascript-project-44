import { randomNum, randomItemOfArr } from '../src/random.js';
import game from '../src/index.js';

const gameRule = 'What is the result of the expression?';

// массив возможных операторов
const ops = ['+', '-', '*'];

// решение выражения
const solve = (num1, num2, op) => {
  let result;
  if (op === '+') {
    result = num1 + num2;
  }
  if (op === '-') {
    result = num1 - num2;
  }
  if (op === '*') {
    result = num1 * num2;
  }
  return String(result);
};

// генерация выражения и получение его значения
const gameData = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const op = randomItemOfArr(ops);
  const task = `${num1} ${op} ${num2}`;
  const expectedAnswer = solve(num1, num2, op);
  return [task, expectedAnswer];
};

// игра-калькулятор
const calc = () => game(gameRule, gameData);

export default calc;
