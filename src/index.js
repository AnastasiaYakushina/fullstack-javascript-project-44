// общая логика для всех игр
import readlineSync from 'readline-sync';

const game = (condition, incorrectAnswer, gameDate) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  let count = 0;
  while (count < 3) {
    const [task, expectedAnswer] = gameDate();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${incorrectAnswer}\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
