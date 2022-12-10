import { randomNum } from '../src/random.js';
import game from '../src/index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// проверка числа: простое или нет
const isPrime = (num) => {
  if (num === 1) {
    return 'yes';
  }
  for (let del = num - 1; del > 1; del -= 1) {
    if (num % del === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// генерация случайного числа и его проверка
const gameData = () => {
  const num = randomNum();
  const task = num;
  const expectedAnswer = isPrime(num);
  return [task, expectedAnswer];
};

// игра: простое ли число?
const prime = () => game(gameRule, gameData);

export default prime;
