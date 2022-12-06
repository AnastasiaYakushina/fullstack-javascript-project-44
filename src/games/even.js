import { randomNum } from '../random.js';
import game from '../index.js';


const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const incorrectAnswer = '\'yes\' is wrong answer ;(. Correct answer was \'no\'.';

const gameDate = () => {
  const task = randomNum();
  const isEven = () => task % 2 === 0;
  const expectedAnswer = isEven(task) ? 'yes' : 'no';
  return [task, expectedAnswer];
};

const even = () => game(condition, incorrectAnswer, gameDate);

export default even;
