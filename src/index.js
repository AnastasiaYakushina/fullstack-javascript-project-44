// общая логика для всех игр
import readlineSync from 'readline-sync';

const roundsCount = 3;

const game = (gameRule, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  let round = 0;
  while (round < roundsCount) {
    const [task, expectedAnswer] = gameData();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
