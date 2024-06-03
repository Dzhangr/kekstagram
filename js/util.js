import { USERS_COMMENTS, USERS_NAME } from './data.js';

// Функция случайного числа из диапазона двух чисел

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(1, 10);

// Проверка комментария

const stringCount = (text, sign) => {
  return text.length <= sign;
};

stringCount('Это проверочное сообщение', 30);

//

function test() {
  alert(USERS_COMMENTS, USERS_NAME);
}

test();

export { test };



