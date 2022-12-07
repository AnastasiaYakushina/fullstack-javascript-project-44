import { randomNum } from '../src/random.js';
import game from '../src/index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

// проверка четности
const isEven = (num) => num % 2 === 0;

// генерация случайного числа и проверка его четности
const gameData = () => {
  const task = randomNum();
  const expectedAnswer = isEven(task) ? 'yes' : 'no';
  return [task, expectedAnswer];
};

// игра на четность
const even = () => game(gameRule, gameData);

export default even;
