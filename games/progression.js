import * as random from '../src/random.js';
import game from '../src/index.js';

const gameRule = 'What number is missing in the progression?';

// формирование массива с арифметической прогрессией
const getArray = () => {
  const arr = [];
  const firstItem = random.randomNum();
  const step = random.randomNumOf10();
  for (let i = firstItem; arr.length < 10; i += step) {
    arr.push(i);
  }
  return arr;
};

// удаление одного случайного элемента, вывод массива без него
const gameData = () => {
  const arr = getArray();
  const takeOneElement = random.randomNumAndItemOfArr(arr);
  const expectedAnswer = String(takeOneElement[1]);
  arr[takeOneElement[0]] = '..';
  const task = `${arr.join(' ')}`;
  return [task, expectedAnswer];
};

// игра: арифметическая прогрессия
const progression = () => game(gameRule, gameData);

export default progression;
