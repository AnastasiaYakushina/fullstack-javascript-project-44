// случайное число от 0 до 1000
export const randomNum = () => Math.round(Math.random() * 1001);

// случайный элемент массива
export const randomItemOfArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
