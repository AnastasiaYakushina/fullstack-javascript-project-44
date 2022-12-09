// случайное число от 0 до 100
export const randomNum = () => Math.round(Math.random() * 101);

// случайное число от 0 до 10
export const randomNumOf10 = () => Math.round(Math.random() * 11);

// значение случайного элемент массива
export const randomItemOfArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// порядковый номер и значение случайного элемента массива
export const randomNumAndItemOfArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return [randomIndex, arr[randomIndex]];
};
